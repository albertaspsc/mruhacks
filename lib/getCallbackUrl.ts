import { headers } from "next/headers";

export const getCallbackUrl = () => {
  let url = headers().get("origin") ?? "http://localhost:3000/";

  // Make sure to include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.endsWith("/") ? url : `${url}/`;

  return `${url}auth/callback/`;
};
