import * as storage from "../storage/index.js";

export const headers = (contentType) => {
  const token = storage.getTokenFromStorage("accessToken");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
