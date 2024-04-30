import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import clientPromise from '../../lib/mongodb';

export default withApiAuthRequired(async function handler(req, res) {
  try {
    const {
      user: { sub },
    } = await getSession(req, res);
    const client = await clientPromise;
    const db = client.db('gigApi');
    const userProfile = await db.collection('user').findOne({
      auth0id: sub,
    });

    const { lastPostDate, getNewerPosts } = req.body;

    const posts = await db
      .collection('posts')
      .find({
        userId: userProfile._id,
        //lt less than & gt greater than
        created: { [getNewerPosts ? '$gt' : '$lt']: new Date(lastPostDate) },
      })
      .limit(getNewerPosts ? 0 : 5)
      .sort({ created: -1 })
      .toArray();

    res.status(200).json({ posts });
    return;
  } catch (e) {}
});
