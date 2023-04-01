import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSlice";
import blogReducer from "../Features/blogs/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
  },
});
