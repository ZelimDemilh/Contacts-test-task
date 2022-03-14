import { configureStore } from "@reduxjs/toolkit";
import signIn from "./signInSlice.js";
import contacts from "./contactsSlice.js";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export default configureStore({
  reducer: {
    signIn: signIn,
    contacts: contacts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
  devTools: true,
});
