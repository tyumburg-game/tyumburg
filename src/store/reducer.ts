import { combineReducers } from "redux";
import { notificationReducer } from "./notification/reducer";
import { userReducer } from "./user/reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer,
});
