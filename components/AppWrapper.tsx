import { ReactNode } from "react";
import showable from "utils/isShowable";
import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  return (
    <>
      {showable() && <Header />}
      {children}
      {showable() && <Footer />}
    </>
  );
};

export default AppWrapper;
