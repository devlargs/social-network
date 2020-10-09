import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import { encrypt } from "server/helpers/password";
import initBodyParser from "server/helpers/initBodyParser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  initBodyParser();
  await cors(req, res);

  if (req.method === "POST") {
    if (req.body.password) {
      return res.send(encrypt(req.body.password));
    }
    return res.send({
      message: "Password is required",
    });
  }
};
