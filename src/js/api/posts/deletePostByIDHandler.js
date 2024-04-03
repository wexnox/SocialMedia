import { API_SOCIAL_URL } from "../constants.mjs";

import { headers } from "@/js/api/headers.js";

const action = "/posts";
const method = "delete";


export async function deletePostByIDHandler(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = headers(updatePostURL, {
    method
  })

  return await response.json();
}