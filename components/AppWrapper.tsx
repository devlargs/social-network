import { ReactNode } from "react";
import showable from "utils/isShowable";
import Header from "components/Header";
import Footer from "components/Footer";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/reducers/auth";

type Props = {
  children: ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const { userId } = useSelector(selectCurrentUser);

  const shown = showable() && userId;

  return (
    <>
      {shown && <Header />}
      {children}
      {showable() && !userId && (
        <span className="fa fa-gear fa-3x fa-spin"></span>
      )}
      {shown && <Footer />}
    </>
  );
};

export default AppWrapper;
