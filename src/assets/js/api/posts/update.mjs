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
const method = "put";

/**
 *
 * @param postData
 * @returns {Promise<any>}
 */
export async function updatePost(postData) {

  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
  
  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData)
  })

  return await response.json();
  
}