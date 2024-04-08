import { apiPath } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";
import { renderDetailsPost } from "@/js/components/renderDetailsPost.js";

let postContainer;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = apiPath + "/posts/" + id;
// Only run if an "id" exists in the URL
if (id) {
  console.log("Post id:", id); // log the id


  window.addEventListener('DOMContentLoaded', () => {
    getPostDetailsHandler(url); // pass the "url" into the function
  });
}

export async function getPostDetailsHandler() {
  if (!postContainer){
    postContainer = document.querySelector("#postsContainer");
  }

  const singlePostURL = `${url}`;

  try {
    const response = await fetch(singlePostURL, {
      method: "GET",
      headers: headers("application/json")
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    document.title = result.title;
    renderDetailsPost(result, postContainer);
  } catch(error) {
    console.error("Error fetching post details:", error);
  }
}

