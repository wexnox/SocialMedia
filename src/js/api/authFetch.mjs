// import { load } from "../storage/index.js";
// // TODO: is this useful?
// export function headers() {
//   const token = load("token");
//
//   return {
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${token}`
//   }
// }
//
// export async function authFetch(url, options = {}) {
//   return fetch(url, {
//     ...options,
//     headers: headers()
//   })
// }