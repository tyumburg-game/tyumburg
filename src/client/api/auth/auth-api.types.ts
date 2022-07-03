export interface SignUpRequestData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  re_password: string;
  phone: string;
}

export interface SignInRequestData {
  login: string;
  password: string;
}

export interface SignUpResponseData {
  id: number;
}

export interface User {
  id: number;
  avatar: string;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  display_name: string;
  phone: string;
}
