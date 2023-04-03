import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

// TODO: Дописать запросы

const ordersSlice = createSlice({
  name: "orders",
  initialState: {},
  reducers: {},
});

export const createOrderAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post("/orders/order", data)
      .then((r) => {
        console.log(`Создание заказа ==> успешно`);
      })
      .catch((e) => {
        console.error(`Создание заказа ==> ошибка`, e?.response);
      });
  };

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
