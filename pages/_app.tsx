import "styles/globals.css";
import "toastr/build/toastr.min.css";
import client from "utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";
import AppWrapper from "components/AppWrapper";
import ScriptLinks from "components/ScriptLinks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const App = ({ Component, pageProps }) => (
  <>
    <ScriptLinks />
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ApolloProvider>
    </ReduxProvider>
  </>
);

export default App;
