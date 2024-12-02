import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserData } from "./authAction";

interface IinitialState {
  user:
    | {
        fullName?: string;
        phoneNumber: string;
        userId?: string;
        isVerified?: boolean;
      }
    | {};
  loading: boolean;
  error: any;
  success: boolean;
  step: 1 | 2;
}

const initialState: IinitialState = {
  user: {},
  loading: false,
  error: null,
  success: false,
  step: 1,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AddUser: (state, action: any) => {
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = { ...action.payload };
    },
    setStep: (state, action: PayloadAction<1 | 2>) => {
      state.step = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      });
  },
});

export const { AddUser, setStep } = AuthSlice.actions;
export default AuthSlice.reducer;
