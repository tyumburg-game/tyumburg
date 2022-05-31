import { Actions, NotificationAction } from "./actions";

type NotificationState = {
  messages: string[];
};

const defaultState: NotificationState = {
  messages: [],
};

export function notificationReducer(
  state: NotificationState = defaultState,
  { type, message }: NotificationAction = {} as NotificationAction
): NotificationState {
  switch (type) {
    case Actions.SET_NOTIFICATION:
      return {
        ...state,
        messages: state.messages.concat(message),
      };
    case Actions.CLEAR_NOTIFICATION:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
}
