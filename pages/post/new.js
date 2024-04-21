import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout/AppLayout";

export default function NewPost(props) {
    console.log('NEW PROPS', props)
    return (
    <div>
      <h1>New Post</h1>
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
  