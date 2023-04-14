import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import apiIp from "../apiIp.js";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userId: "",
    username: "",
    userIp: "",
  },
  reducers: {
    setUserDataIdUsername(state, value) {
      state.userId = value.payload?.id;
      localStorage.setItem("userId", value.payload?.id);
      state.username = value?.payload?.username;
    },
    setUserIp(state, value) {
      state.userIp = value.payload;
    },
  },
});

export const getUserByIdAsync =
  ({ username }) =>
  async (dispatch) => {
    await api
      .get(`/users/user_id/${username}`)
      .then((r) => {
        console.log("Получение id пользователя ==> успешно", r?.data);
        dispatch(setUserDataIdUsername(r?.data));
      })
      .catch((e) => {
        console.error("Получение id пользователя ==> ошибка", e);
      });
  };

export const getUserIpAsync = () => async () => {
  await apiIp
    .get(`/json`)
    .then((r) => {
      console.log("Получение ip пользователя ===> успешно", r?.data?.ip);
      setUserIp(r?.data?.ip);
      localStorage.setItem("userIp", r?.data?.ip?.toString());
    })
    .catch((e) => {
      console.error("Получение ip пользователя ===> ошибка", e);
    });
};

export const { setUserDataIdUsername, setUserIp } = usersSlice.actions;

export default usersSlice.reducer;
