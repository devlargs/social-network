import Head from "next/head";

const SEO = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
