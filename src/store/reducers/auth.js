import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: {},
    userId: "",
  },
  reducers: {
    setTokens(state, value) {
      localStorage.setItem("access", value.payload?.access);
      if (!!value.payload?.refresh) localStorage.setItem("refresh", value.payload?.refresh);
      if (!!value.payload?.refresh_lifetime) {
          localStorage.setItem("refresh_lifetime", value.payload?.refresh_lifetime);
          localStorage.setItem("refresh_lifetime_total", value.payload?.refresh_lifetime)
      }
      if (!!value.payload?.access_lifetime) {
          localStorage.setItem("access_lifetime", value.payload?.access_lifetime);
          localStorage.setItem("access_lifetime_total", value.payload?.access_lifetime);
      }
    },
    setUserId(state, value) {
      state.userId = value.payload;
    },
  },
});

export const getTokenAsync =
  ({ data }) =>
  async (dispatch) => {
    // Получение токена
    await api
      .post(`/token`, data)
      .then((r) => {
        console.log("Получение токена и вход ==> успешно", r?.data);
        dispatch(setTokens(r?.data));
      })
      .catch((e) => {
        console.error(
          "Получение токена и вход ==> ошибка",
          e?.response?.data?.detail
        );
      });
  };

export const postTokenRefreshAsync =
  ({ params }) =>
  async (dispatch) => {
    await api
      .post(`/token_refresh`, params)
      .then((r) => {
        console.log("Обновление токена ==> успешно", r?.data);
        dispatch(setTokens(r?.data));
      })
      .catch((e) => {
        console.error("Обновление токена ==> ошибка", e);
      });
  };

export const sendPasswordAsync = (data) => async (dispatch) => {
  await api
    .post(`/users/send_password`, data)
    .then((r) => {
      console.log("Отправка временного пароля ==> успешно", r?.data);
      dispatch(setUserId(r?.data));
    })
    .catch((e) => {
      console.log("Отправка временного пароля ==> ошибка", e?.data);
    });
};

export const createUserAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post(`/users/user_create`, data)
      .then((r) => {
        console.log("Регистрация пользователя ==> успешно", r?.data?.user);
        localStorage.setItem("userId", r?.data?.user);
      })
      .catch((e) => {
        console.error("Регистрация пользователя ==> ошибка", e);
      });
  };

export const { setTokens, setUserId } = authSlice.actions;

export default authSlice.reducer;
