import { NextPage } from "next";

export interface SignInPageProps {
  publicIP: any;
}

const SignInPage: NextPage<SignInPageProps> = (props) => {
  const { publicIP } = props;

  console.log("publicIP client", publicIP);

  return "rendering page";
};

export default SignInPage;

export async function getServerSideProps({ req, res }: any) {
  const forwarded = req.headers["x-forwarded-for"];
  let publicIP = Array.isArray(forwarded)
    ? forwarded[0]
    : forwarded?.split(",")[0] || req.socket.remoteAddress;

  if (publicIP === "::1" || publicIP === "127.0.0.1") {
    publicIP = "localhost";
  }

  console.log("publicIP server", publicIP);

  return {
    props: {
      publicIP,
    },
  };
}
