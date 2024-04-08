import { getPostDetailsHandler, updatePostHandler } from "../../api/posts/index.mjs";

export async function setUpdatePostListener() {
    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

        const post = await getPostDetailsHandler(id);
        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags.join(', ');
        form.media.value = post.media;

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const postData = {
                ...Object.fromEntries(new FormData(event.target).entries()),
                tags: event.target.tags.value.split(', ').map(tag => tag.trim())
            };

            updatePostHandler(event, postData, id)
        });
    }
}