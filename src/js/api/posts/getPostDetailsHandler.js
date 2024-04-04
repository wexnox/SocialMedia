// import { apiPath } from "../constants.mjs";
// import { headers } from "@/js/api/headers.js";
//
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
//
// console.log("Post id:", id); // log the id
//
// const url = apiPath + "/posts/" + id;
// console.log(url);
// const postContainer = document.querySelector(".postContainer");
//
//
// export async function getPostDetailsHandler() {
//   const singlePostURL = `${url}`;
//
//   try {
//     const response = await fetch(singlePostURL, {
//       method: "GET",
//       headers: headers("application/json")
//     });
//
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     console.log(result);
//     document.title = result.title;
//     createHtml(result);
//   } catch (error) {
//     // If there's an error, log it to the console
//     console.error("Error fetching post details:", error);
//   }
//
// }
//
// getPostDetailsHandler();
//
// function createHtml(result) {
//   postContainer.innerHTML += `
//
//     <div class="card-head">
//     <h1>${result.title}</h1>
//     <h2>${result.author}</h2>
//
//     </div>
//     <div class="card-body">
//
//     </div>
//
//     `;
// }
