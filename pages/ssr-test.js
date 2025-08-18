import Head from "next/head";

export default function ProjectDetails({ project }) {
  return (
    <>
      <Head>
        <title>Project Details</title>
        <meta name="description" content="Details of the selected project" />
      </Head>

      <div className="w-full h-[82px] bg-base_color"></div>
      <div className="py-[32px] bg-body_color">
        {project ? (
          <div>
            <h1>Project ID: {project.id || project?.data?.id}</h1>
            <pre>{JSON.stringify(project, null, 2)}</pre>
          </div>
        ) : (
          <div>No project found</div>
        )}
      </div>
    </>
  );
}

// Server-side rendering
export async function getServerSideProps(context) {
  const { id } = context.query;

  if (!id) {
    return { notFound: true };
  }

  try {
    const res = await fetch(
      `https://apidev.ideeza.com/api/v1/nft-transaction?nft_ids=${id}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch project. Status: ${res.status}`);
    }

    const project = await res.json();

    return {
      props: {
        project,
      },
    };
  } catch (err) {
    console.error("Error fetching project:", err);
    return { notFound: true };
  }
}
