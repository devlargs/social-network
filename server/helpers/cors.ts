import CORS from "cors";
import initMiddleware from "./initMiddleware";

export default initMiddleware(
  CORS({
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
  })
);
