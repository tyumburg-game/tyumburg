import { BaseAPI } from "../base-api";
import {
  SignInRequestData,
  SignUpRequestData,
  SignUpResponseData,
  User,
} from "./auth-api.types";

class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signUp(data: SignUpRequestData) {
    return this.instance.post<SignUpResponseData>("/signup", {
      data,
    });
  }

  signIn(data: SignInRequestData) {
    return this.instance.post<void>("/signin", {
      data,
    });
  }

  getUser() {
    return this.instance.get<User>("/user");
  }

  logout() {
    return this.instance.post<void>("/logout");
  }
}

export const authApi = new AuthAPI();
