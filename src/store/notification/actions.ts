import { BaseAction } from "store/types";

export const enum Actions {
  SET_NOTIFICATION = "SET_NOTIFICATION",
  CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION",
}

export interface NotificationAction extends BaseAction<Actions> {
  message: string;
}

export function clearNotification(): BaseAction<Actions> {
  return { type: Actions.CLEAR_NOTIFICATION };
}

export function setNotification(message: string): NotificationAction {
  return { type: Actions.SET_NOTIFICATION, message };
}

export const notificationActions = {
  clearNotification,
  setNotification,
};
