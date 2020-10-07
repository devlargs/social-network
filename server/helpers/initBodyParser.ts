import bodyParser from "body-parser";

export default () => {
  bodyParser.urlencoded({ extended: false });
  bodyParser.json();
};
