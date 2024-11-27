import { combineReducers } from "@reduxjs/toolkit";
import  AuthSlice  from "./Features/auth/authSlice";

export const RootReducer = combineReducers({
  auth: AuthSlice,
});

export type RootState = ReturnType<typeof RootReducer>;
