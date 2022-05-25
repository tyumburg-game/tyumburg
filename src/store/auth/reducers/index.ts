import { User } from "api/auth/auth-api.types";
import { Nullable } from "types/util";
import { Actions, AuthAction } from "../actions";

type AuthState = {
  user: Nullable<User>;
};

const defaultState: AuthState = {
  user: null,
};

export function authReducer(
  state: AuthState = defaultState,
  { type, user }: AuthAction = {} as AuthAction
): AuthState {
  switch (type) {
    case Actions.SET_USER_ITEM:
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
}
