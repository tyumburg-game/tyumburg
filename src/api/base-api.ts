import { HTTPTransport } from "http/http-transport";

export class BaseAPI {
  protected instance: HTTPTransport;

  constructor(path: string) {
    this.instance = new HTTPTransport(path);
  }
}
