import { apiPath } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";
import { getTokenFromStorage } from "@/js/storage/index.js";
import { renderPosts } from "@/js/components/renderPosts.mjs";

export async function fetchUsersPostsHandler() {
  const token = getTokenFromStorage("accessToken");
  const profile = getTokenFromStorage("profile");

  if (!token) {
    throw new Error("Token is not available");
  }

  if (!profile || !profile.name) {
    console.log("Profile or the username is not available");
    return;
  }

  const userPosts = `profiles/${profile.name}/posts`;
  const url = `${apiPath}/${userPosts}` + "?_author=true";
  console.log(apiPath);
  console.log(url);
  console.log("Name: ", profile.name);
  const method = "GET";

  try {
    const response = await fetch(url, {
      method: method,
      headers: headers('application/json')
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, status text: ${response.statusText}`);
    }

    const posts = await response.json();
    renderPosts(posts);

  } catch (error) {
    console.log(error);
  }
}
