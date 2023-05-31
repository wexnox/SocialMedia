import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs"

/**
 *
 * @type {string}
 */
const action = "/posts";
/**
 *
 * @type {string}
 */
const method = "post";

/**
 *
 * @param postData
 * @returns {Promise<any>}
 */
export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;
  
  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData)
  })
  console.log(response);
  return await response.json();
}