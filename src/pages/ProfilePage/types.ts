export type ProfileInputName =
  | "display_name"
  | "login"
  | "phone"
  | "first_name"
  | "second_name"
  | "email";
export type ProfileInputs = Record<ProfileInputName, string>;
