import  { API_SOCIAL_URL} from "../api/constants.mjs";
import {authFetch} from "../api/authFetch.mjs";
import { renderPosts} from "../components/renderPosts.mjs";


export async function asceFilter(){
    const container = document.querySelector("#postContainer");
    const ascendingFilter = document.querySelector("#asceFilter");

}


export async function descFilter() {
    const container = document.querySelector("#postContainer");
    const filterOldest = document.querySelector("#descFilter");
}