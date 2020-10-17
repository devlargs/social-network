import Router from "next/router";

const checkPermission = (userId: string) => {
  if (!userId) {
    Router.push("/");
    console.log(userId);
    localStorage.clear();
  } else {
  }
};

export default checkPermission;
