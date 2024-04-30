import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { getAppProps } from "../utils/getAppProps";
import { faCoins, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TokenTopup() {
  const handleClick = async () => {
    const result = await fetch(`/api/addTokens`, {
      method: 'POST'
    })
    const json = await result.json()
    console.log("RESULT: ", json)
    window.location.href = json.session.url;
  }
    return (
      <div className="w-full h-full flex flex-col overflow-auto p-3">
      <div className="m-auto w-full max-w-screen-mdl bg-zinc-100 p-4 rounded-md shadow-xl border border-zinc-300 shadow-zinc-300">
        <p className="pb-2">Get tokens to create new posts</p>
        <button className="btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faCoins} />
          &nbsp;&nbsp; Add tokens
        </button>
      </div>
    </div>
      );
  }

  TokenTopup.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>
  }

  export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
      const props = await getAppProps(ctx);
      return {
        props,
      };
    },
  });
  
  