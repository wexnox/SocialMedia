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
const method = "delete";

/**
 *
 * @param id
 * @returns {Promise<any>}
 */
export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;
  
  const response = await authFetch(updatePostURL, {
    method
  })

  return await response.json();
}