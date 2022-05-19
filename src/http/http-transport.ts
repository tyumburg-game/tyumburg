import { env } from "constants/env";
import { getQueryString } from "utils/getQueryString";
import {
  TGetRequestOptions,
  METHODS,
  TOptions,
  TOptionsWithoutMethod,
} from "./http-transport-types";

export class HTTPTransport {
  public path: string;

  public baseUrl: string;

  constructor(path = "", baseUrl: string = env.HOST_API) {
    this.path = path;
    this.baseUrl = baseUrl;
  }

  get<T>(url: string, options: TGetRequestOptions = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }

  post<T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  put<T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  }

  delete<T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  }

  request<T>(url: string, options: TOptions, timeout = 5000): Promise<T> {
    const {
      method,
      query = {},
      data = {},
      headers = {
        "content-type": "application/json;charset=UTF-8",
      },
    } = options;

    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}${this.path}${url}${getQueryString(query)}`, {
        headers,
        body:
          headers["content-type"] === "application/json;charset=UTF-8"
            ? JSON.stringify(data)
            : data,
        method,
      })
        .then((response) => response.json())
        .then((response) => resolve(response))
        .catch((error) => reject(error.reason));

      setTimeout(() => {
        reject();
      }, timeout);
    });
  }
}
