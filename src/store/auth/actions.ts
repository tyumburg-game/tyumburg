import { ThunkAction } from "redux-thunk";
import { authApi } from "api/auth/auth-api";
import { SignUpRequestData, User } from "api/auth/auth-api.types";
import { Nullable } from "types/util";
import { setUser } from "store/auth";
import type { BaseAction } from "store/types";

type AuthAction = BaseAction<Nullable<User>>;

function getUser(): ThunkAction<void, {}, {}, AuthAction> {
  return async (dispatch) => {
    try {
      const user = await authApi.getUser();

      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };
}

function signUp(
  data: SignUpRequestData
): ThunkAction<void, {}, {}, AuthAction> {
  return async (dispatch) => {
    try {
      await authApi.signUp(data);
      dispatch(getUser());
    } catch (error: any) {
      console.log(error);
    }
  };
}

export const authActions = {
  signUp,
  getUser,
};
