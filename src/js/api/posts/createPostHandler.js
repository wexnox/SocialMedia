import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";

const action = "/posts";
const method = "post";

export async function createPostHandler(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = headers(createPostURL, {
    method,
    body: JSON.stringify(postData)
  })
  console.log(response);
  return await response.json();
}