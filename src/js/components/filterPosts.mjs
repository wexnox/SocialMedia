import { apiPath } from "../api/constants.mjs";
import { headers } from "@/js/api/headers.js";

export async function fetchAndSortPosts(sortOrder = 'asc') {
    const sortedPostsUrl = `${apiPath}/posts?_author=true&sort=updated&sortOrder=${sortOrder}&`;
    const response = await fetch(sortedPostsUrl, { headers: headers('application/json') });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export function sortPostsLocally(posts, sortOrder = 'asc') {
    return posts.sort((a, b) => {
        return sortOrder === 'asc' ? new Date(a.updated) - new Date(b.updated) : new Date(b.updated) - new Date(a.updated);
    });
}
