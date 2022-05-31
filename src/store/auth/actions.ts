import { ThunkAction } from "redux-thunk";
import { AxiosError } from "axios";
import { authApi } from "api/auth/auth-api";
import {
  SignInRequestData,
  SignUpRequestData,
  User,
} from "api/auth/auth-api.types";
import { BaseAction } from "store/types";
import { Nullable } from "types/util";

export const enum Actions {
  SET_USER_ITEM = "SET_USER_ITEM",
  FETCH_USER_BEGIN = "FETCH_USER_BEGIN",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
}

export interface AuthAction extends BaseAction<Actions> {
  user: Nullable<User>;
  error?: Nullable<string>;
}

export const fetchUserBegin = () => ({
  type: Actions.FETCH_USER_BEGIN,
});

export const fetchUserSuccess = (user: User) => ({
  type: Actions.FETCH_USER_SUCCESS,
  payload: { user },
});

export const fetchUserFailure = (error: unknown) => ({
  type: Actions.FETCH_USER_FAILURE,
  payload: { error },
});

function setUser(user: Nullable<User>): AuthAction {
  return { type: Actions.SET_USER_ITEM, user };
}

function getUser(): ThunkAction<void, {}, {}, BaseAction<Actions>> {
  return async (dispatch) => {
    dispatch(fetchUserBegin());
    try {
      const user = await authApi.getUser();

      dispatch(fetchUserSuccess(user));
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
      dispatch(fetchUserFailure((error as AxiosError).toJSON().toString()));
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
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserFailure,
};
