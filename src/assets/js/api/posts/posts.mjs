import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { renderPosts} from "../../components/renderPosts.mjs";
// import { search} from "../../components/search.mjs"
import { asceFilter, descFilter} from "../../handlers/index.mjs";

/**
 *
 * @param getPostUrl
 * @returns {Promise<void>}
 */
export async function fetchAllPosts(getPostUrl) {
  const url = `${API_SOCIAL_URL}/posts/?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true`;

  const method = "GET";

  try {
    const response = await authFetch(url, method);
    const posts = await response.json(getPostUrl);
    // console.log(posts);
    renderPosts(posts);
    // search(posts)
    asceFilter(posts)
    descFilter(posts)
  } catch (error) {
    console.log(error);
  }
}


