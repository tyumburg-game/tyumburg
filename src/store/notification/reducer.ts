import { BaseAction } from "store/types";
import { Actions } from "./actions";
import { CustomNotification } from "./types";

type NotificationState = {
  items: CustomNotification[];
};

const defaultState: NotificationState = {
  items: [],
};

export function notificationReducer(
  state: NotificationState = defaultState,
  { type, payload = {} }: BaseAction<Actions> = {} as BaseAction<Actions>
): NotificationState {
  const { notification, id } = payload;

  switch (type) {
    case Actions.SET_NOTIFICATION:
      return {
        ...state,
        items: state.items.concat(notification),
      };
    case Actions.CLEAR_NOTIFICATION:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id),
      };
    default:
      return state;
  }
}
