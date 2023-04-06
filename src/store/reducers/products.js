import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

// TODO: Дописать запросы

const productsSlice = createSlice({
  name: "products",
  initialState: {
    freePeriod: 0,
    interests: "",
  },
  reducers: {
    setDefaultProduct(state, value) {
      state.freePeriod = value.payload?.free_period;
      state.interests = value.payload?.interests;
    },
  },
});

export const getDefaultProductAsync = () => async (dispatch) => {
  await api
    .get(`/products/product/default`)
    .then((r) => {
      console.log("Получение дефолтного продукта ==> успешно", r?.data);
      dispatch(setDefaultProduct(r?.data));
    })
    .catch((e) => {
      console.error("Получение дефолтного продукта ==> ошибка", e);
    });
};

export const { setDefaultProduct } = productsSlice.actions;

export default productsSlice.reducer;
