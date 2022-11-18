import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { ReqLogin, Token, User } from "../../shared/types/authType";

interface InitialState {
  user: User | null;
  isLoggedIn: boolean;
  token: Token | null;
  login: {
    error: string | null | undefined;
    loading: boolean;
  };
  register: {
    error: string | null | undefined;
    loading: boolean;
    message: string | null | undefined;
  };
}

const initialState: InitialState = {
  user: null,
  isLoggedIn: false,
  token: null,
  login: {
    error: null,
    loading: false,
  },
  register: {
    error: null,
    loading: false,
    message: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<ReqLogin>) {
      state.login.loading = true;
    },

    loginFailed(state, action: PayloadAction<string>) {
      state.login.loading = false;
      state.login.error = action.payload;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, loginFailed, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectIsLoading = (state: RootState) => state.auth.login.loading;
export const selectLoginError = (state: RootState) => state.auth.login.error;

export default authSlice.reducer;
