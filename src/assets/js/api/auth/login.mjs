import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

/**
 *
 * @type {string}
 */
const action = "/auth/login";
/**
 *
 * @type {string}
 */
const method = "post";

/**
 *
 * @param profile
 * @returns {Promise<void>}
 */
export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
  console.log();
  alert("You are now logged in");
}
