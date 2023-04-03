import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

const smsSlice = createSlice({
  name: "sms",
  initialState: {},
  reducers: {},
});

export const postSmsAsync = (data) => async (dispatch) => {
  await api
    .post(`/sms`, data)
    .then((r) => {
      console.log("r?.data", r?.data);
    })
    .catch((e) => {
      console.error("error /sms", e);
    });
};

export const {} = smsSlice.actions;

export default smsSlice.reducer;
