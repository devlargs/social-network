import { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, verifyAuth } from "store/reducers/auth";

type Props = {
  children: ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { loading, error, verified } = useSelector(selectAuth);

  console.log(loading, verified);

  useEffect(() => {
    dispatch(verifyAuth());
  }, []);

  return <>{children}</>;
};

export default AppWrapper;
