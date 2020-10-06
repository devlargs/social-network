import bcrypt from "bcrypt";

export const encrypt = (password: string) => {
  return bcrypt.hashSync(password, 0);
};

export const decrypt = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export default {};
