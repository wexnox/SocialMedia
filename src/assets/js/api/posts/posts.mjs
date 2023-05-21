import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

export async function fetchAllPosts(getPostUrl) {
  const url = `${API_SOCIAL_URL}/posts/?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true`;

  const method = "GET";

  try {
    const response = await authFetch(url, method);
    const posts = await response.json(getPostUrl);
    console.log(posts);
    // renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
}

fetchAllPosts();
