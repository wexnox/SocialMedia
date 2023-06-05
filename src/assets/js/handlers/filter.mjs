import {API_SOCIAL_URL} from "../api/constants.mjs";
import {authFetch} from "../api/authFetch.mjs";
import {renderPosts} from "../components/renderPosts.mjs";


/**
 *
 * @returns {Promise<void>}
 */
export async function asceFilter() {
    const container = document.querySelector("#postsContainer");
    const ascendingFilter = document.querySelector("#asceFilter");

    try {
        const ascePostsUrl = API_SOCIAL_URL + "/posts?_author=true&sort=updated&sortOrder=asc";
        const response = await authFetch(ascePostsUrl)
        const post = await response.json();

        ascendingFilter.addEventListener("click", () => {

            container.innerHTML = "";

            renderPosts(post, container);

        });
    } catch (error) {
        console.log(error)
    }
}

/**
 *
 * @returns {Promise<void>}
 */
export async function descFilter() {
    const container = document.querySelector("#postsContainer");
    const decendingFilter = document.querySelector("#descFilter");

    try {

        const descPostsUrl = API_SOCIAL_URL + "/posts?_author=true&sort=updated&sortOrder=desc";
        const response = await authFetch(descPostsUrl)
        const post = await response.json()

        decendingFilter.addEventListener("click", () => {

            container.innerHTML = "";

            renderPosts(post, container)
        });
    } catch (error) {
        console.log(error)
    }
}