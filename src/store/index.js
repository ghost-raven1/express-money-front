import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import alertsReducer from "./reducers/alerts";
import modalsReducer from "./reducers/modals";

const rootReducer = combineReducers({
  alertsReducer,
  modalsReducer,
});
export default configureStore({
  reducer: rootReducer,
});
