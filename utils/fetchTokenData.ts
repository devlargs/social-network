import { NextApiRequest } from "next";
import getInitialToken from "./getInitialToken";

const fetchTokenData = async (req: NextApiRequest) => {
  const res = await fetch(process.env.VERIFY_AUTH_URL, {
    method: "POST",
    body: JSON.stringify({
      token: getInitialToken(req),
    }),
  });

  return res;
};

export default fetchTokenData;
