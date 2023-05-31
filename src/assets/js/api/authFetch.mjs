import { load } from "../storage/index.mjs";

/**
 *
 * @returns {{Authorization: string, "Content-Type": string}}
 */
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
}

/**
 *
 * @param url
 * @param options
 * @returns {Promise<Response>}
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers()
  })
}