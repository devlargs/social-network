import { configureStore } from "@reduxjs/toolkit";

import accounts from "./reducers/accounts";
import auth from "./reducers/auth";
import friends from "./reducers/friends";

export default configureStore({
  reducer: {
    accounts,
    auth,
    friends,
  },
  devTools: process.env.NODE_ENV === "development",
});
