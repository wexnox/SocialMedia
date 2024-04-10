import { fetchAndSortPosts, sortPostsLocally } from "@/js/components/filterPosts.mjs";
import { renderPosts } from "@/js/components/renderPosts.mjs";
import { searchPosts } from "@/js/components/searchPosts.js";

const postsContainer = document.getElementById("postsContainer");
const searchBar = document.getElementById("searchBar");
const filterNewestBtn = document.getElementById("asceFilter");
const filterOldestBtn = document.getElementById("descFilter");

let posts = [];


export async function buildFeed() {
  posts = await fetchAndSortPosts();
  renderPosts(posts, postsContainer);
}

if (filterNewestBtn) {
  filterNewestBtn.addEventListener("click", async () => {
    const sortedPosts = sortPostsLocally(posts, "asc");
    renderPosts(sortedPosts, postsContainer);
  });
}

if (filterOldestBtn) {
  filterOldestBtn.addEventListener("click", async () => {
    const sortedPosts = sortPostsLocally(posts, "desc");
    renderPosts(sortedPosts, postsContainer);
  });

}

searchBar.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPosts = searchPosts(posts, searchTerm);
  renderPosts(filteredPosts, postsContainer);
});
