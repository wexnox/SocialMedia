import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";

const action = "/posts";
const method = "post";

export async function createPostHandler(postData) {
  const createPostURL = API_SOCIAL_URL + action;
  const {title, body, tag, media} = postData
  const response = await fetch(createPostURL, {
    method: method,
    body: JSON.stringify({
      title: title,
      body:body,
      tag:tag,
      media:media,
    }),
    headers: headers('application/json')
  });

  const responseBody = await response.json();
  if(response.ok) {
    displayAlertMessage("success", "Post created successfully");
  } else {
    displayAlertMessage("danger", "Failed to create post. Please try again!");
  }

  return responseBody;
}