import Head from "next/head";

export default function CommonMeta() {
  return (
    <Head>
      <title>Test checking title</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />  

      <meta property="og:url" content={'https://frontprod.ideeza.com/user/dashboard/project/2635'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"Test checking title"} />
      <meta property="og:description" content="Your share description" />
      <meta
        property="og:image"
        content={
          "https://storage.googleapis.com/cdnideeza/devblob/media/5533.png?Expires=1754645286&GoogleAccessId=bucket-access%40ideeza-ai.iam.gserviceaccount.com&Signature=lg0pQub9ltnxu8wd1hyDGr8cPEQZuPKvCqRNtyezEwgjRTAvpAfy3Ze8OT5FW6P7VnieXIierSqS1w%2F278qmWKK7XgvR6DHBYFZt7JL0HxfhcT%2FRUlpEmBT7qv96gqI0hgX%2BySpg5lCq8kMp9X1HUaNWVyt2kd2riiSAPURKYokNk4vQHeop3dcV4N903%2FNCn67QODTwmCbQn%2BJp%2FXukk2Inbvgfvf1e4O37rybqtca2RJqjdcojmIp3hEId97fVHh86RuNLy1%2BM3%2BdNC7w3iIza%2FX8eIEi3GQRG4xqfx7Z6chUm965ebhB%2FggAfOhKgEOMGdE3MYrRCUQVBV3V1qg%3D%3D"
        }
      />
    </Head>
  );
}
