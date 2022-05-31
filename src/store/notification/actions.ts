import { BaseAction } from "store/types";
import { CustomNotification } from "./types";

export const enum Actions {
  SET_NOTIFICATION = "SET_NOTIFICATION",
  CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION",
}

export interface NotificationAction extends BaseAction<Actions> {
  notification: CustomNotification;
}

export function clearNotification(
  notification: CustomNotification
): NotificationAction {
  return { type: Actions.CLEAR_NOTIFICATION, notification };
}

export function setNotification(
  notification: CustomNotification
): NotificationAction {
  return { type: Actions.SET_NOTIFICATION, notification };
}

export const notificationActions = {
  clearNotification,
  setNotification,
};
