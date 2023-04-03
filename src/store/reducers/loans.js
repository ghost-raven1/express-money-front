import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

// TODO: Дописать запросы

const loansSlice = createSlice({
  name: "loans",
  initialState: {},
  reducers: {},
});

export const createLoanAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post("/loans/loan", data)
      .then((r) => {
        console.log(`Создание займа ==> успешно`);
      })
      .catch((e) => {
        console.error(`Создание займа ==> ошибка`, e?.response);
      });
  };

export const getLoanAsync =
  ({ id }) =>
  async (dispatch) => {
    await api
      .get(`/loans/loan/${id}`)
      .then((r) => {
        console.log(`Получение займа ${id} ==> успешно`);
      })
      .catch((e) => {
        console.error(`Получение займа ${id} ==> ошибка`, e?.response);
      });
  };

export const loanPaymentAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post(`/loans/loan_payment`, data)
      .then((r) => {
        console.log(
          `Оплата займа ${data?.loan}, id карты: ${data?.bank_card_id} ==> успешно`
        );
      })
      .catch((e) => {
        console.error(
          `Оплата займа ${data?.loan}, id карты: ${data?.bank_card_id} ==> ошибка`,
          e?.response
        );
      });
  };

export const partialPaymentAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post(`/loans/partials_payment`, data)
      .then((r) => {
        console.log(
          `Частичная оплата займа ${data?.amount}, id карты: ${data?.bank_card_id} ==> успешно`
        );
      })
      .catch((e) => {
        console.error(
          `Частичная оплата займа ${data?.amount}, id карты: ${data?.bank_card_id} ==> ошибка`,
          e?.response
        );
      });
  };

export const {} = loansSlice.actions;

export default loansSlice.reducer;
