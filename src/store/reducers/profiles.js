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

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access")}`,
};

export const getUserProfileAsync = (userId) => async (dispatch) => {
  // Получение профиля пользователя
  await api
    .get(`/profiles/russian_profile_get/${userId}`, { headers })
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
      .post("/profiles/russian_profile_create", data, { headers })
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
      .put(`/profiles/russian_profile_get/${userId}`, data, { headers })
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

export const { setUserProfile } = profilesSlice.actions;

export default profilesSlice.reducer;
