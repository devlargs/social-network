import bodyParser from "body-parser";

const initBodyParser = () => {
  bodyParser.urlencoded({ extended: false });
  bodyParser.json();
};

export default initBodyParser;
