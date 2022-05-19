export enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export type TOptions = {
  timeout?: number;
  method: METHODS;
  data?: any;
  query?: TRequestQuery;
  headers?: Record<string, string>;
};

export type TRequestQuery = Record<string, string | number>;

export type TOptionsWithoutMethod = Omit<TOptions, "method">;
export type TGetRequestOptions = Omit<TOptionsWithoutMethod, "data">;
