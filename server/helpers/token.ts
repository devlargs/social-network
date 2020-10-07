import jwt from "jsonwebtoken";

export const sign = (params: any) =>
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60000,
      data: params,
    },
    process.env.JWT_PRIVATE_KEY
  );

export const verify = (token: any) =>
  jwt.verify(token, process.env.JWT_PRIVATE_KEY);

export default {};
