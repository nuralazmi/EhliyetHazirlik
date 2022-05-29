import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";
import quizReducer from "./quiz";

export default configureStore({
  reducer: {
    app: appReducer,
    quiz: quizReducer,
  },
});
