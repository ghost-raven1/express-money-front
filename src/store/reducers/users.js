import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
});

export const getUserByIdAsync = (params) => async (dispatch) => {
  await api
    .get(`/users/user_id/${params?.username}`, { params: params })
    .then((r) => {
      console.log("r?.data", r?.data);
    })
    .catch((e) => {
      console.log("error", e);
    });
};

// users/user

export const {} = usersSlice.actions;

export default usersSlice.reducer;
