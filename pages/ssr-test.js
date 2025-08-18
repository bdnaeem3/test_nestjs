export default function SSRTest({ time }) {
  return (
    <div>
      <h1>SSR Test</h1>
      <p>Server time: {time}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log("Running getServerSideProps on server");

  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};
