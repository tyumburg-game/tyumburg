import { HTTPTransport } from "../http/http-transport";

export class BaseAPI {
  protected instance: HTTPTransport;

  constructor(path: string, baseUrl?: string) {
    this.instance = new HTTPTransport(path, baseUrl);
  }
}
