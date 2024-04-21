import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout/AppLayout";

export default function NewPost(props) {
    console.log('NEW PROPS', props)
    // 2. next, create a handleclick function to call generatePost api
    const handleClick = async () => {
      const response = await fetch(`/api/generatePost`, {
        method: "POST"
      });
      const json = await response.json()
      console.log('result: ', json)
    }
    return (
    <div>
      <h1>New Post</h1>
      {/* 3. pass handleclick func and check console  */}
      <button className="btn" onClick={handleClick}>Generate</button>
    </div>
      );
  }

  NewPost.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>
  }

  // set up protected routes for not-logged in users
  export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props:{}
    }
  })
  