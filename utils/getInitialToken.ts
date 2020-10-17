import cookie from "cookie";
import { NextApiRequest } from "next";
import Storage from "constants/storage";

const getInitialToken = (req: NextApiRequest) => {
  let token: string | null = null;
  if (process.browser) {
    if (localStorage[Storage.TOKEN]) {
      token = localStorage[Storage.TOKEN];
    }
  } else {
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === "string") {
        const cookiesJSON = cookie.parse(cookies);
        token = cookiesJSON.token;
      }
    }
  }
  return token;
};

export default getInitialToken;
