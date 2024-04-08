// import { getPostDetailsHandler } from "@/js/api/posts/index.mjs";
// import { apiPath } from "@/js/api/constants.mjs";
//
// export async function populateEditForm() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const postId = urlParams.get('id');
//   /* <here you need to import or define your apiPath> */
//
//   if (!postId) {
//     console.error('No post ID found in URL');
//     return;
//   }
//
//   let postDetails = null;
//   try {
//     postDetails = await getPostDetailsHandler(apiPath + "/posts/" + postId);
//     console.log("About to use Post Details: ", postDetails);
//   } catch (error) {
//     console.error('Error while fetching post details, trying again:', error);
//     try {
//       postDetails = await getPostDetailsHandler(apiPath + "/posts/" + postId); // try fetching again
//     } catch (error) {
//       console.error('Error fetching post details:', error); // log if error persists
//       return;
//     }
//   }
//
//   if (postDetails) {
//     document.getElementById('title').value = postDetails.title;
//     document.getElementById('body').value = postDetails.body;
//     document.getElementById('tags').value = postDetails.tags.join(', ');
//     document.getElementById('media').value = postDetails.media;
//   } else {
//     console.error('Post details are missing.'); // add a log message in case postDetails is still null
//   }
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//   const pathname = window.location.pathname;
//   if (pathname.includes("/pages/posts/edit.html")) {
//     populateEditForm();
//   }
// });