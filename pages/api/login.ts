import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  if (req.method === "POST") {
    axios({
      url: process.env.GRAPHCMS_ENDPOINT,
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
      data: {
        query: `
            {
                accounts {
                    firstName
                    lastName
                }
            }
        `,
      },
    })
      .then((result) => {
        console.log(result);
        res.send({
          result: result.data,
        });
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
};
