import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import axios from "axios";
import { verify } from "server/helpers/token";
import { account } from "server/queries/account";
import initBodyParser from "server/helpers/initBodyParser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  initBodyParser();
  await cors(req, res);

  console.log("fuckou");

  if (req.method === "POST") {
    try {
      const json = verify(req.body.token) as any;
      console.log(req.body.token, "Tangina ka");
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
          .then(({ data }) => {
            const account = data?.data?.account;
            console.log(account);
            res.send({
              verified: true,
            });
          })
          .catch((ex) => {
            return res.send({
              message: "Something went wrong",
              error: ex,
              verified: false,
            });
          });
      } else {
        res.send({
          error: "Invalid token",
          verified: false,
        });
      }
    } catch (ex) {
      res.send({
        verified: false,
        error: `${ex}`,
      });
    }
  }
};
