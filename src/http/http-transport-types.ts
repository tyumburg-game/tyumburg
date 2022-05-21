export enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export type RequestQuery = Record<string, string | number>;

export type Options = {
  timeout?: number;
  method: METHODS;
  data?: any;
  query?: RequestQuery;
  headers?: Record<string, string>;
};

export type OptionsWithoutMethod = Omit<Options, "method">;
export type OptionsWithoutMethodAndData = Omit<OptionsWithoutMethod, "data">;
