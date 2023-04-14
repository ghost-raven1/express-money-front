import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

// TODO: Дописать запросы

const bankCardsSlice = createSlice({
  name: "bankCards",
  initialState: {},
  reducers: {},
});

const headers = {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
};

export const getBankCardListAsync =
  ({ params }) =>
  async (dispatch) => {
    await api
      .get("/bank_cards/bank_card", { headers, params: params })
      .then((r) => {
        console.log(`Получение списка банковских карт ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(
          `Получение списка банковских карт ==> ошибка`,
          e?.response
        );
      });
  };

export const createBankCardAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post("/bank_cards/bank_card", data, { headers })
      .then((r) => {
        console.log(`Добавление банковской карты ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(`Добавление банковской карты ==> ошибка`, e?.response);
      });
  };

export const {} = bankCardsSlice.actions;

export default bankCardsSlice.reducer;
