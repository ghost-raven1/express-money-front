import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

const promocodesSlice = createSlice({
  name: "promocodes",
  initialState: {},
  reducers: {},
});

export const getPromocodeAsync = (code) => async (dispatch) => {
  await api
    .get(`promocodes/promocode/${code}`)
    .then((r) => {
      console.log("r?.data", r?.data);
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export const {} = promocodesSlice.actions;

export default promocodesSlice.reducer;
