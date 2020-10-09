import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import axios from "axios";
import { decrypt } from "server/helpers/password";
import { account } from "server/queries/account";
import { sign } from "server/helpers/token";
import initBodyParser from "server/helpers/initBodyParser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  initBodyParser();
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
        query: account(`{ emailAddress: "${req.body.emailAddress}" }`),
      },
    })
      .then(({ data }) => {
        const response = data?.data?.account;
        if (response) {
          if (!response?.password) {
            return res.send({ message: "Invalid Request" });
          }

          if (!decrypt(req.body.password, response.password)) {
            return res.send({
              message: "Invalid Password",
            });
          } else {
            return res.send({
              data: response,
              token: sign({ id: response.id }),
            });
          }
        }

        return res.send({ message: "Account doesn't exist" });
      })
      .catch((ex) => {
        return res.send({ message: "Something went wrong", error: ex });
      });
  }
};
