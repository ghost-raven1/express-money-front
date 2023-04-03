import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userId: '',
    username: ''
  },
  reducers: {
    setUserDataIdUsername(state, value) {
      state.userId = value.payload?.id;
      state.username = value?.payload?.username;
    }
  },
});

export const getUserByIdAsync = ({username}) => async (dispatch) => {
  await api
    .get(`/users/user_id/${username}`)
    .then((r) => {
      console.log("Получение id пользователя ==> успешно", r?.data);
      dispatch(setUserDataIdUsername(r?.data))
    })
    .catch((e) => {
      console.error("Получение id пользователя ==> ошибка", e);
    });
};

// users/user

export const {setUserDataIdUsername} = usersSlice.actions;

export default usersSlice.reducer;
