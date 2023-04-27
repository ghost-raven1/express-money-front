import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

// TODO: Дописать запросы

const bankCardsSlice = createSlice({
  name: "bankCards",
  initialState: {},
  reducers: {},
});

export const getBankCardListAsync =
  ({ params }) =>
  async (dispatch) => {
    await api
      .get("/bank_cards/bank_card", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        params: params,
      })
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
      .post("/bank_cards/bank_card", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((r) => {
        console.log(`Добавление банковской карты ==> успешно`, r?.data);
        if (r?.data?.acs_url) localStorage.setItem("acs_url", r?.data?.acs_url);
        if (r?.data?.md) localStorage.setItem("md", r?.data?.md);
        if (r?.data?.pa_req) localStorage.setItem("pa_req", r?.data?.pa_req);
        if (r?.data?.term_url) localStorage.setItem("term_url", term_url);
      })
      .catch((e) => {
        console.error(`Добавление банковской карты ==> ошибка`, e?.response);
      });
  };

export const {} = bankCardsSlice.actions;

export default bankCardsSlice.reducer;
