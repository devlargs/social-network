import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";

export default configureStore({
  reducer: {
    auth,
  },
  devTools: process.env.NODE_ENV === "development",
});
