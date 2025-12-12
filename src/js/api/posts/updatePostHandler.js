import { apiPath } from "../constants.mjs";
import { headers } from "../headers.js"
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";




export async function updatePostHandler(event, postData, id) {
  event.preventDefault();

  try {
    const url = apiPath + "/posts/" + id;
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers('application/json'),
      body: JSON.stringify(postData)
    });
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    console.log("Post updated successfully", JSON.stringify(data, null, 2));

    // Display a success alert message.
    displayAlertMessage('success', 'Post updated successfully!');

    // Delayed redirect
    setTimeout(() => {
    window.location.href = "/pages/posts/postDetails.html?id=" + id;
  }, 5000); // 5000ms delay, adjust as needed
  } catch (error) {

    console.error('Error updating post details:', error);

    displayAlertMessage('danger', `Error updating post: ${error}`);

  }
};