import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./index";

export default configureStore({
  reducer: {
    todo: todoReducer
  }
});
