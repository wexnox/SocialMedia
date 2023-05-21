// import { authFetch } from "../api/authFetch.mjs";
// import { API_SOCIAL_URL } from "../api/constants.mjs";
//
// const queryString = document.location.search
// const params = new URLSearchParams(queryString)
// const id = params.get("id")
//
// const url = API_SOCIAL_URL + "/posts/" + id;
//
// const postContainer = document.querySelector(".postContainer")
//
// export async function getPostDetails(){
//     if(!id) {
//         throw new Error("Error due to missing ID")
//     }
//
//     const  response = await authFetch(url)
//
//     const result = await response.json()
//     console.log(result)
// }