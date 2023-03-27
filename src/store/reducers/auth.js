import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: {},
    userId: "",
  },
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
    setUserId(state, value) {
      state.userId = value.payload;
    },
  },
});

export const postTokenAsync = (params) => async (dispatch) => {
  // Получение токена
  await api
    .post(`/token/`, params)
    .then((r) => {
      console.log("r?.data", r?.data);
      dispatch(setToken(r?.data));
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export const postTokenRefreshAsync = (params) => async (dispatch) => {
  await api
    .post(`/token_refresh/`, params)
    .then((r) => {
      console.log("r?.data", r?.data);
      // dispatch(setToken(r?.data));
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export const postUsersSendPassword = (params) => async (dispatch) => {
  await api
    .post(`/users/send_password/`, params)
    .then((r) => {
      console.log("r?.data", r?.data);
      dispatch(setUserId(r?.data?.user));
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export const postUsersUser = (params) => async (dispatch) => {
  await api
    .post(`/users/user/`, params)
    .then((r) => {
      console.log("r?.data", r?.data);
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export const { setToken, setUserId } = authSlice.actions;

export default authSlice.reducer;
