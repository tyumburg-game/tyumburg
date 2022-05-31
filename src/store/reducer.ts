import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { notificationReducer } from "./notification/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
});
