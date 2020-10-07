import "styles/globals.css";
import Head from "next/head";
import client from "utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";
import AppWrapper from "components/AppWrapper";

const App = ({ Component, pageProps }) => {
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

      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </ApolloProvider>
      </ReduxProvider>
    </>
  );
};

export default App;
