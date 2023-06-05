// import { createPost } from "../api/posts/index.mjs";
//
//
// /**
//  *
//  */
// export function setCreatePostFormListener() {
//   /**
//    *
//     * @type {Element}
//    */
//   const form = document.querySelector("#createPost");
//
//   if (form) {
//     form.addEventListener("submit", (event) => {
//       event.preventDefault()
//
//       /**
//        *
//        * @type {EventTarget}
//        */
//       const form = event.target;
//       const formData = new FormData(form);
//       const post = Object.fromEntries(formData.entries())
//
//       // Send it to the API
//       createPost(post)
//     })
//   }
// }