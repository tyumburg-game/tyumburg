import { AuthState } from "store/auth/types";
import { Actions, AuthAction } from "./actions";

const defaultState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export function authReducer(
  state: AuthState = defaultState,
  { type, user, error }: AuthAction = {} as AuthAction
): AuthState {
  switch (type) {
    case Actions.SET_USER_ITEM:
      return {
        ...state,
        user,
      };
    case Actions.FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Actions.FETCH_USER_SUCCESS:
      console.log("FETCH_USER_SUCCESS");

      return {
        ...state,
        loading: false,
        user,
      };
    case Actions.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: error || "Упс! Произошла ошибка",
      };
    default:
      return state;
  }
}
