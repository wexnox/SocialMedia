import { getPostDetailsHandler, updatePostHandler } from "../../api/posts/index.mjs";
import { apiPath } from "@/js/api/constants.mjs";

export async function setUpdatePostListener() {
    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const fetchURL = apiPath + "/posts/" + id;

    if (form) {
        try {
            const post = await getPostDetailsHandler(fetchURL);

            if (!post) {
                console.error('Post is undefined or null');
                return;
            }

            form.title.value = post.title;
            form.body.value = post.body;
            form.tags.value = post.tags.join(', ');
            form.media.value = post.media;

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const postData = {
                    ...Object.fromEntries(new FormData(event.target).entries()),
                    tags: event.target.tags.value.split(', ').map(tag => tag.trim())
                };

                updatePostHandler(event, postData, id);
            });
        } catch (error) {
            console.error('Error getting the post details', error);
        }
    }
}