import { RequestQuery } from "http/http-transport-types";

export function getQueryString(data: RequestQuery) {
  const result: string[] = [];

  if (data && Object.keys(data).length) {
    result.push("?");

    Object.keys(data).forEach((key) => {
      result.push(`${key}=${data[key].toString()}`);
    });
  }

  return result.join("&");
}
