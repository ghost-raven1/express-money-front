import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import alertsReducer from "./reducers/alerts";
import modalsReducer from "./reducers/modals";
import authReducer from './reducers/auth';
import usersReducer from './reducers/users';
import promocodesReducer from './reducers/promocodes';
import smsReducer from './reducers/sms';
import productsReducer from './reducers/products';
import profilesReducer from './reducers/profiles';
import underwritingReducer from './reducers/underwriting';
import identificationReducer from './reducers/identification';
import creditScoringReducer from './reducers/creditScoring';
import verificationReducer from './reducers/verification';
import loansReducer from './reducers/loans';
import ordersReducer from "./reducers/orders";
import publicFileReducer from './reducers/publicFile';
import storageReducer from './reducers/storage';
import bankCardsReducer from "./reducers/bankCards";

const rootReducer = combineReducers({
  alertsReducer,
  modalsReducer,
  authReducer,
  usersReducer,
  promocodesReducer,
  smsReducer,
  productsReducer,
  profilesReducer,
  underwritingReducer,
  identificationReducer,
  creditScoringReducer,
  verificationReducer,
  loansReducer,
  ordersReducer,
  publicFileReducer,
  storageReducer,
  bankCardsReducer
});
export default configureStore({
  reducer: rootReducer,
});
