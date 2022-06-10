import { Nullable } from "types/util";
import { User } from "api/auth/auth-api.types";

export type AuthState = {
  user: Nullable<User>;
};
