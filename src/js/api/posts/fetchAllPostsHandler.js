import { API_SOCIAL_URL } from "../constants.mjs";
import { renderPosts } from "../../components/renderPosts.mjs";
import { headers } from "@/js/api/headers.js";
// import { search} from "../../components/search.mjs"
// import { asceFilter, descFilter} from "../../listeners/index.js";


export async function fetchAllPostsHandler(getPostUrl) {
  const url = `${API_SOCIAL_URL}/posts/?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true`;

  const method = "GET";

  try {
    const response = await fetch(url,
      {
        method: method,
        headers: headers
      });
    const posts = await response.json(getPostUrl);
    // console.log(posts);
    renderPosts(posts);
    // search(posts)
    // asceFilter(posts)
    // descFilter(posts)
  } catch (error) {
    console.log(error);
  }
}


fetchAllPostsHandler();