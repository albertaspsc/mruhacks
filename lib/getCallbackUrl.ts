import { headers } from "next/headers";

export const getCallbackUrl = (redirect: string | null = null) => {
  let url = headers().get("origin") ?? "http://localhost:3000/";

  // Make sure to include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.endsWith("/") ? url : `${url}/`;

  const newURL = new URL(url);
  newURL.pathname = "auth/callback/";

  // modifies the URL based on redirect param
  if (redirect != null) {
    newURL.searchParams.set("next", redirect);
  }

  return newURL.toString();
};
