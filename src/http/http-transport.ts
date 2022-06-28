import axios from "axios";
import { env } from "constants/env";
import {
  OptionsWithoutMethodAndData,
  METHODS,
  Options,
  OptionsWithoutMethod,
} from "./http-transport-types";

axios.defaults.withCredentials = true;

export class HTTPTransport {
  public path: string;

  public baseUrl: string;

  constructor(path = "", baseUrl: string = env.HOST_API) {
    this.path = path;
    this.baseUrl = baseUrl;
  }

  get<T>(url: string, options: OptionsWithoutMethodAndData = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.GET });
  }

  post<T>(url: string, options: OptionsWithoutMethod = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.POST });
  }

  put<T>(url: string, options: OptionsWithoutMethod = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.PUT });
  }

  delete<T>(url: string, options: OptionsWithoutMethod = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.DELETE });
  }

  request<T>(url: string, options: Options): Promise<T> {
    const { method, query, data, headers } = options;

    return axios({
      url: `${this.baseUrl}${this.path}${url}`,
      data,
      method,
      headers,
      params: query,
    })
      .then((response) => response.data)
      .catch(({ response }) => {
        const {
          data: { reason },
        } = response;

        throw new Error(reason);
      });
  }
}
