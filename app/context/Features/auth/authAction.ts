import { applyMiddleware, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { thunk } from "redux-thunk";

const middleware = applyMiddleware(thunk);

export const getUserData = createAsyncThunk("auth/getUserData", async () => {
  return axios
    .get("http://localhost:3000/api/v1/user")
    .then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw new Error("there is no user");
      }
    })
    .catch((err) => {
      throw new Error("there is problem with authentication");
    });
});
