import { BaseAPI } from "../base-api";
import {
  SignInRequest,
  SignUpRequest,
  SignUpResponse,
  User,
} from "./auth-api.types";

class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signUp(data: SignUpRequest) {
    return this.instance.post<SignUpResponse>("/signup", {
      data,
    });
  }

  signIn(data: SignInRequest) {
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
