import { ReactNode, useEffect } from "react";
import showable from "utils/isShowable";
import Header from "components/Header";
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "store/reducers/auth";
import { getFriends, selectFriends } from "store/reducers/friends";

type Props = {
  children: ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(selectCurrentUser);
  const { data } = useSelector(selectFriends);
  const shown = showable() && userId;

  useEffect(() => {
    if (userId) {
      dispatch(getFriends(userId));
    }
  }, [userId]);

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
