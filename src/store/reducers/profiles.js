import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";
import { RouterPath } from "../../utils/constants.js";

// TODO: Дописать запросы

const profilesSlice = createSlice({
  name: "profiles",
  initialState: {},
  reducers: {},
});

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access")}`,
}

export const getUserProfileAsync = (userId, navigate) => async (dispatch) => {
  // Получение профиля пользователя
  await api
    .get(`/profiles/russian_profile_get/${userId}`, {headers})
    .then((r) => {
      console.log("Получение профиля пользователя ==> успешно", r?.data);
      navigate(RouterPath.application);
    })
    .catch((e) => {
      console.error("Получение профиля пользователя ==> ошибка", e);
      navigate(RouterPath.application);
    });
};

export const createUserProfileAsync = (data, setReadyToNextStep) => async (dispatch) => {
  // Создание профиля пользователя
  await api
    .post("/profiles/russian_profile_create", data, {headers})
    .then((r) => {
      console.log("Создание профиля пользователя ===> успешно", r?.data);
      setReadyToNextStep(true);
    })
    .catch((e) => {
      console.error("Создание профиля пользователя ===> ошибка", e);
      setReadyToNextStep(false);
    });
};

export const {} = profilesSlice.actions;

export default profilesSlice.reducer;
