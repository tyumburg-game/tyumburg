import { Actions, NotificationAction } from "../actions";

type NotificationState = {
  message: string;
};

const defaultState: NotificationState = {
  message: "",
};

export function notificationReducer(
  state: NotificationState = defaultState,
  { type, message }: NotificationAction = {} as NotificationAction
): NotificationState {
  switch (type) {
    case Actions.SET_NOTIFICATION:
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
}
