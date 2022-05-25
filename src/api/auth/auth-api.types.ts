export interface SignUpRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignInRequest {
  login: string;
  password: string;
}

export interface SignUpResponse {
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
