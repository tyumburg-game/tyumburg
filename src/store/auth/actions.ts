import { ThunkAction } from "redux-thunk";
import { authApi } from "api/auth/auth-api";
import {
  SignInRequestData,
  SignUpRequestData,
  User,
} from "api/auth/auth-api.types";
import { BaseAction } from "store/types";
import { Nullable } from "types/util";

export enum Actions {
  SET_USER_ITEM = "SET_USER_ITEM",
}

export interface AuthAction extends BaseAction<Actions> {
  user: Nullable<User>;
}

function setUser(user: Nullable<User>): AuthAction {
  return { type: Actions.SET_USER_ITEM, user };
}

function getUser(): ThunkAction<void, {}, {}, BaseAction<Actions>> {
  return async (dispatch) => {
    try {
      const user = await authApi.getUser();

      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };
}

function signIn(
  data: SignInRequestData
): ThunkAction<void, {}, {}, BaseAction<Actions>> {
  return async (dispatch) => {
    try {
      await authApi.signIn(data);
      dispatch(getUser());
    } catch (error) {
      console.log(error);
    }
  };
}

function signUp(
  data: SignUpRequestData
): ThunkAction<void, {}, {}, BaseAction<Actions>> {
  return async (dispatch) => {
    try {
      await authApi.signUp(data);
      dispatch(getUser());
    } catch (error) {
      console.log(error);
    }
  };
}

function logout(): ThunkAction<void, {}, {}, BaseAction<Actions>> {
  return async (dispatch) => {
    try {
      await authApi.logout();
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };
}

export const authActions = {
  signIn,
  signUp,
  logout,
  setUser,
  getUser,
};
