import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";

import { CmsApi } from "../../api/cms-api";
import { ReqLogin } from "../../shared/types/authType";
import { history } from "../../utils/history";
import { login, loginFailed, logout } from "./authSlice";

export function* handleLogin(params: ReqLogin) {
  try {
    yield call(async () => {
      const res = await CmsApi.login({
        email: params.email,
        password: params.password,
        requestFrom: params.requestFrom,
      });
      localStorage.setItem("access_token", res.data.token.access_token);
      localStorage.setItem("refresh_token", res.data.token.refresh_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    });

    // Redirect to Admin page
    yield call(history.push, "/");
  } catch (error: any) {
    yield put(loginFailed(error.response.data.message)); // Dispatch action
  }
}

function* handleLogout() {
  localStorage.removeItem("access_token");
  yield call(history.push, "/login");
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<ReqLogin> = yield take(login.type);
      yield call(handleLogin, action.payload);
    } else {
      yield take(logout.type);
      yield call(handleLogout);
    }
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
