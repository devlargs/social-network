import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import axios from "axios";
import { verify } from "server/helpers/token";
import { account } from "server/queries/account";
import initBodyParser from "server/helpers/initBodyParser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  initBodyParser();
  await cors(req, res);

  if (req.method === "POST") {
    try {
      const json = verify(JSON.parse(req.body).token) as any;

      if (json?.data?.id) {
        await axios({
          url: process.env.GRAPHCMS_ENDPOINT,
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
          },
          data: {
            query: account(`{ id: "${json.data.id}" }`),
          },
        })
          .then(() => {
            res.send({
              error: false,
              userId: json.data.id,
            });
          })
          .catch((ex) => {
            return res.send({
              message: "Something went wrong",
              error: ex,
            });
          });
      } else {
        res.send({
          error: "Invalid token",
        });
      }
    } catch (ex) {
      res.send({
        error: `${ex}`,
      });
    }
  }
};
