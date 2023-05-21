export function renderPosts(postsRendered) {
    const postContainer = document.querySelector('#postsContainer');

    postContainer.innerHTML = "";

    postsRendered.forEach((post) => {
      postContainer.innerHTML += `
    <div class="col-md-8">

        <div class="row flex-md-row  border border-opacity-10 h-md-300 ">

          <div class="d-flex justify-content-between"><a href="../pages/post.html?id=${post.id}" class="btn btn-primary">View Post Details!</a></div>

          <div class="col d-flex flex-column ">
            
            <h1 class="">${post.title}</h1>
            <h2 class="">${post.author.name}></h2>
            <p class="text-light">Created:${post.created}</p>
            <p class=" ">${post.body}</p>
            <div class="media">
              <img alt="alt" class="mb-3 mw-100" role="img" src="${post.media}">
            </div>
            <div class="text-light">Tags: ${post.tags}</div>
          </div>
     
   
`;
    });

};