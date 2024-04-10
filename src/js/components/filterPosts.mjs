import { apiPath } from "../api/constants.mjs";
import {renderPosts} from "./renderPosts.mjs";
import { headers } from "@/js/api/headers.js";

export async function asceFilter() {
    const container = document.querySelector("#postsContainer");
    const ascendingFilter = document.querySelector("#asceFilter");

    try {
        const ascePostsUrl = apiPath + "/posts?_author=true&sort=updated&sortOrder=asc";
        const response = await fetch(ascePostsUrl, { headers: headers('application/json') });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json();

        ascendingFilter.addEventListener("click", () => {
            container.innerHTML = "";
            renderPosts(post, container);
        });
    } catch (error) {
        console.log(error)
    }
}


export async function descFilter() {
    const container = document.querySelector("#postsContainer");
    const decendingFilter = document.querySelector("#descFilter");

    try {
        const descPostsUrl = apiPath + "/posts?_author=true&sort=updated&sortOrder=desc";
        const response = await fetch(descPostsUrl, { headers: headers('application/json') });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json()

        decendingFilter.addEventListener("click", () => {
            container.innerHTML = "";
            renderPosts(post, container)
        });
    } catch (error) {
        console.log(error)
    }
}