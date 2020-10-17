import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import friends from "./reducers/friends";

export default configureStore({
  reducer: {
    auth,
    friends,
  },
  devTools: process.env.NODE_ENV === "development",
});
