import { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, verifyAuth } from "store/reducers/auth";
import showable from "utils/isShowable";
import Header from "components/Header";
import Footer from "components/Footer";
import Router from "next/router";
import storage from "constants/storage";

type Props = {
  children: ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { loading, verified } = useSelector(selectAuth);

  useEffect(() => {
    if (localStorage.getItem(storage.TOKEN)) {
      dispatch(verifyAuth(storage.TOKEN));
    } else {
      Router.push("/");
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(storage.TOKEN) && !loading && !verified) {
      if (process.browser) {
        Router.push("/");
      }
    }
  }, [loading, verified, process.browser && window.location.pathname]);

  return (
    <>
      {loading ? (
        <div id="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {showable() && <Header />}
          {children}
          {showable() && <Footer />}
        </>
      )}
    </>
  );
};

export default AppWrapper;
