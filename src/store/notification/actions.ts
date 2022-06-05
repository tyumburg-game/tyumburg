import { v4 as uuidv4 } from "uuid";
import { BaseAction } from "store/types";
import { CustomNotification } from "./types";

export const enum Actions {
  SET_NOTIFICATION = "SET_NOTIFICATION",
  CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION",
}

export function clearNotification(id: string): BaseAction<Actions> {
  return {
    type: Actions.CLEAR_NOTIFICATION,
    payload: {
      id,
    },
  };
}

export function setNotification(
  notification: CustomNotification
): BaseAction<Actions> {
  return {
    type: Actions.SET_NOTIFICATION,
    payload: {
      notification: {
        ...notification,
        id: uuidv4(),
      },
    },
  };
}

export const notificationActions = {
  clearNotification,
  setNotification,
};
