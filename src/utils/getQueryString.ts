export function getQueryString(data: any) {
  const result: string[] = [];

  if (data) {
    result.push("?");

    Object.keys(data).forEach((key) => {
      result.push(`${key}=${data[key].toString()}`);
    });
  }

  return result.join("&");
}
