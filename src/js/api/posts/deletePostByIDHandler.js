// import { API_SOCIAL_URL } from "../constants.mjs";
// import { headers } from "@/js/api/headers.js";
// const action = "/posts";
//
//
// export async function deletePostDetailsHandler(id) {
//   const url = `${API_SOCIAL_URL}${action}/${id}`;
//   try {
//     const response = await fetch(url, {
//       method: 'DELETE',
//       headers: headers('application/json')
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     window.location.href = '/';
//   } catch (error) {
//     console.error('Error deleting post:', error);
//   }
// };
//
// import { updatePostHandler } from "./updatePostHandler.js";
//
// document.getElementById('update-post-form').addEventListener('submit', async function(event) {
//   event.preventDefault();
//
//   const title = document.getElementById('title').value;
//   const body = document.getElementById('body').value;
//   const tags = document.getElementById('tags').value;
//   const author = document.getElementById('author').value;
//   const id = document.getElementById('post-id').value;
//
//   await updatePostHandler(id, title, body, tags, author);
// });
//
//
//
