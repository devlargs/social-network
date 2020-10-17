import Router from "next/router";
import { resetUser, setCurrentUser } from "store/reducers/auth";
import clientCookie from "js-cookie";

export const logout = (dispatch: any) => {
  Router.push("/");
  clientCookie.set("token", null);
  localStorage.clear();
  dispatch(resetUser());
};

const checkPermission = (userId: string, dispatch: any) => {
  if (!userId) {
    logout(dispatch);
  } else {
    dispatch(setCurrentUser(userId));
  }
};

export default checkPermission;
