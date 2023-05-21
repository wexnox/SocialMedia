import {renderPosts} from "./renderPosts.mjs"

export function search(post) {
    const search = document.querySelector('#search')

    search.onkeyup = function (event) {
        console.log(event);
        const searchInput = event.target.value.trim().toLowerCase();

        const convertedPosts = post.filter((post) => {
            if (post.title.toLowerCase().includes(searchInput)) {
                return true;
            } else if (post.author.name.toLowerCase().includes(searchInput)) {
                return true;
            }

        })

        renderPosts(convertedPosts);
        console.log(convertedPosts)
    }
}