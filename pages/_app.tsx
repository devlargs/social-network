import "styles/globals.css";
import Head from "next/head";
// import Header from "components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
          rel="stylesheet"
        ></link>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.appear.min.js"></script>
        <script src="js/jquery.incremental-counter.js"></script>
        <script src="js/script.js"></script>
      </Head>

      {/* <Header /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
