import { Actions, ItemActionType } from "store/actions/user";
import { User } from "types/user";
import { Nullable } from "types/util";

type LoadStatus = "success" | "pending" | "failed";

type UserState = {
  item: Nullable<User>;
  status: LoadStatus;
};

const defaultState: UserState = {
  status: "failed",
  item: null,
};

export function userReducer(
  state: UserState = defaultState,
  { type, item }: ItemActionType = {} as ItemActionType
): UserState {
  switch (type) {
    case Actions.PENDING:
      return {
        ...state,
        status: "pending",
      };
    case Actions.SUCCESS:
      return {
        ...state,
        status: "success",
      };
    case Actions.FAILED:
      return {
        ...state,
        status: "failed",
      };
    case Actions.SET_USER_ITEM:
      return {
        ...state,
        item,
      };
    default:
      return state;
  }
}