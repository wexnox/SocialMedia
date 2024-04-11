import { apiPath } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";
import { renderDetailsPost } from "@/js/components/renderDetailsPost.js";
import { deletePostDetailsHandler } from "@/js/api/posts/deletePostByIDHandler.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";

let postContainer;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = apiPath + "/posts/" + id + "?_author=true";

if (id) {
  console.log("Post id:", id); // log the id
}

document.addEventListener("DOMContentLoaded", function() {
  const pathname = window.location.pathname;
  if (pathname.includes("/pages/posts/postDetails.html")) {
    getPostDetailsHandler(url);
  }
});

export async function getPostDetailsHandler(url) {
  console.log("getPostDetailsHandler is called with URL: ", url);
  if (!postContainer) {
    postContainer = document.querySelector("#postsContainer");
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers("application/json")
    });
    console.log("After response Fetched Post Details: ", response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the response as a text.
    const textResponse = await response.text();
    console.log("Server response:", textResponse);

    let data;
    try {
      // Try to parse the response into JSON.
      data = JSON.parse(textResponse);
      console.log("After response.json, this is data. Fetched Post Details:", data);
      if (!window.location.pathname.includes("/pages/posts/edit.html")) {
        document.title = data.title;
        renderDetailsPost(data, postContainer);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    return data;
  } catch (error) {
    console.error("Error fetching post details: ", error);
  }
}

export async function populateEditForm() {

  if (!id) {
    console.error("No post ID found in URL");
    return;
  }

  let postDetails = null;
  try {
    postDetails = await getPostDetailsHandler(apiPath + "/posts/" + id);
    console.log("About to use Post Details: ", postDetails);
  } catch (error) {
    console.error("Error while fetching post details, trying again:", error);
    try {
      postDetails = await getPostDetailsHandler(apiPath + "/posts/" + id); // try fetching again
    } catch (error) {
      console.error("Error fetching post details:", error); // log if error persists
      return;
    }
  }

  if (postDetails) {
    document.getElementById("title").value = postDetails.title;
    document.getElementById("body").value = postDetails.body;
    document.getElementById("tags").value = postDetails.tags.join(", ");
    document.getElementById("media").value = postDetails.media;
  } else {
    console.error("Post details are missing."); // add a log message in case postDetails is still null
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const pathname = window.location.pathname;
  if (pathname.includes("/pages/posts/edit.html")) {
    populateEditForm();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const deleteButton = document.getElementById("deletePostButton");
  if (deleteButton) {
    deleteButton.addEventListener("click", async () => {
      try {
        await deletePostDetailsHandler(id);
        displayAlertMessage("success", "Post successfully deleted");
        console.log("Post successfully deleted");
      } catch (error) {
        displayAlertMessage("danger", "Error while deleting the post");
        console.error("Error while deleting the post:", error);
      }
    });
  } else {
    console.log("'deletePostButton' element not found!");
  }
});