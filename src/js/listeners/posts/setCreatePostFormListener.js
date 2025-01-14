import { createPostHandler } from "../../api/posts/index.mjs";

export function setCreatePostFormListener() {

  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()

      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries())


      createPostHandler(postData)
    })
  }
}