import "styles/globals.css";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

const App = ({ Component, pageProps }) => {
  const showable = (): Boolean => {
    const show = ["/newsfeed"];
    if (process.browser) {
      const pathname = location.pathname;
      return show.includes(pathname);
    }

    return false;
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link href="css/emoji.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
          rel="stylesheet"
        ></link>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.appear.min.js"></script>
        <script src="js/jquery.incremental-counter.js"></script>
        <script src="js/jquery.sticky-kit.min.js"></script>
        <script src="js/jquery.scrollbar.min.js"></script>
        <script src="js/script.js"></script>
      </Head>

      {showable() && <Header />}
      <Component {...pageProps} />
      {showable() && <Footer />}
    </>
  );
};

export default App;
