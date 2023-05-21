import {authFetch} from "../api/authFetch.mjs";
import {API_SOCIAL_URL} from "../api/constants.mjs";

const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

// const url = API_SOCIAL_URL + "/posts/" + id;
const url = "https://nf-api.onrender.com/api/v1/social/posts/" + id;
const postContainer = document.querySelector(".postContainer")

export async function getPostDetails() {
    if (!id) {
        throw new Error("Error due to missing ID")
    }

    const singlePostURL = `${url}`;

    const response = await authFetch(singlePostURL)

    const result = await response.json()
    console.log(result)

    document.title = result.title

    createHtml(result);


}

getPostDetails();

function createHtml(result) {
    postContainer.innerHTML += `
    
    <div class="card-head">
    <h1>${result.title}</h1>
    <h2>${result.author}</h2>
    
    
    </div>
    <div class="card-body">
    
    </div>
    
    `
}

