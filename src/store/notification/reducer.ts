import { Actions, NotificationAction } from "./actions";
import { CustomNotification } from "./types";

type NotificationState = {
  items: CustomNotification[];
};

const defaultState: NotificationState = {
  items: [],
};

export function notificationReducer(
  state: NotificationState = defaultState,
  { type, notification }: NotificationAction = {} as NotificationAction
): NotificationState {
  switch (type) {
    case Actions.SET_NOTIFICATION:
      return {
        ...state,
        items: state.items.concat(notification),
      };
    case Actions.CLEAR_NOTIFICATION:
      return {
        ...state,
        items: state.items.filter((item) => item !== notification),
      };
    default:
      return state;
  }
}
