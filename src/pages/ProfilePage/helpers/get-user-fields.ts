import { Nullable } from "types/util";
import { User } from "api/auth/auth-api.types";
import { ProfileInputs } from "pages/ProfilePage/types";

export function getUserFields(user: Nullable<User>): ProfileInputs {
  return {
    display_name: user?.display_name ?? "",

    login: user?.login ?? "",

    phone: user?.phone ?? "",

    first_name: user?.first_name ?? "",

    second_name: user?.second_name ?? "",

    email: user?.email ?? "",
  };
}
