import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  if (req.method === "POST") {
    if (!req.body.emailAddress) {
      return res.send({ message: "Please Enter Email Address" });
    }

    if (!req.body.password) {
      return res.send({ message: "Please Enter Password" });
    }

    await axios({
      url: process.env.GRAPHCMS_ENDPOINT,
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
      data: {
        query: `
            {
                account(where: {emailAddress: "${req.body.emailAddress}"}) {
                    firstName
                    lastName
                    password
                }
            }
        `,
      },
    })
      .then(({ data }) => {
        console.log(data);
        if (data?.data?.account) {
          return res.send({
            data: data.data.account,
          });
        }

        return res.send({ message: "Account doesn't exist" });
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
};
