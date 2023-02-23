import { createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    errors: [],
    successes: [],
    infos: [],
  },
  reducers: {
    deleteError: (state, error) => {
      return {
        ...state,
        errors: state.errors.filter((e) => e !== error.payload),
      };
    },
    deleteSuccess: (state, success) => {
      return {
        ...state,
        successes: state.successes.filter((e) => e !== success.payload),
      };
    },
    deleteInfo: (state, info) => {
      return { ...state, infos: state.infos.filter((e) => e !== info.payload) };
    },
    addError: (state, error) => {
      state.errors = [...state.errors, error.payload];
    },
    addSuccess: (state, success) => {
      state.successes = [...state.successes, success.payload];
    },
    addInfo: (state, info) => {
      state.infos = [...state.infos, info.payload];
    },
  },
});

export const errors = (state) => state.alerts.errors;

export const {
  deleteError,
  addError,
  deleteSuccess,
  addSuccess,
  deleteInfo,
  addInfo,
} = alertsSlice.actions;

export default alertsSlice.reducer;
