import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";
import { RouterPath } from "../../utils/constants.js";

// TODO: Дописать запросы

const profilesSlice = createSlice({
  name: "profiles",
  initialState: {
    userProfile: {},
  },
  reducers: {
    setUserProfile(state, value) {
      state.userProfile = value.payload;
    },
  },
});

export const getUserProfileAsync = (userId) => async (dispatch) => {
  // Получение профиля пользователя
  await api
    .get(`/profiles/russian_profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
    .then((r) => {
      console.log("Получение профиля пользователя ==> успешно", r?.data);
      dispatch(setUserProfile(r?.data));
    })
    .catch((e) => {
      console.error("Получение профиля пользователя ==> ошибка", e);
    });
};

export const createUserProfileAsync =
  (data, setReadyToNextStep) => async (dispatch) => {
    // Создание профиля пользователя
    await api
      .post("/profiles/russian_profile", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((r) => {
        console.log("Создание профиля пользователя ===> успешно", r?.data);
        setReadyToNextStep(true);
      })
      .catch((e) => {
        console.error("Создание профиля пользователя ===> ошибка", e);
        setReadyToNextStep(false);
      });
  };

export const editUserProfileAsync =
  (data, userId, setReadyToNextStep) => async (dispatch) => {
    // Редактирование профиля пользователя
    await api
      .put(`/profiles/russian_profile/${userId}`, data, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
      })
      .then((r) => {
        console.log(
          "Редактирование профиля пользователя ===> успешно",
          r?.data
        );
        setReadyToNextStep(true);
      })
      .catch((e) => {
        console.error("Редактирование профиля пользователя ===> ошибка", e);
        setReadyToNextStep(false);
      });
  };

export const getUserFilesAsync = () => async (dispatch) => {
  await api
    .get(`profiles/document`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
    })
    .then((r) => {
      console.log("Получение файлов пользователя ===> успешно", r?.data);
    })
    .catch((e) => {
      console.log("Получение файлов пользователя ===> ошибка", e);
    });
};

export const getLoansStatusAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .get(`/profiles/no_loans/`, data)
      .then((r) => {
        console.log(
          "Получение статуса наличия займов у пользователя ===> успешно",
          r?.data
        );
      })
      .catch((e) => {
        console.error(
          "Получение статуса наличия займов у пользователя ===> ошибка",
          e
        );
      });
  };

export const { setUserProfile } = profilesSlice.actions;

export default profilesSlice.reducer;
