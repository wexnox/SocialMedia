export function renderPosts(postsRendered) {
    const postContainer = document.querySelector('#postsContainer');

    postContainer.innerHTML = "";

    postsRendered.forEach((post) => {
        postContainer.innerHTML += `
        <div class="card mb-4 shadow-sm">

            <div class="card-body">

                <h2 class="card-title">${post.title}</h2>

                <div class="media mb-4">
                  <img alt="alt" class="align-self-start mr-3" src="${post.media}">
                  <div class="media-body">
                    <p class="mt-0">${post.body}</p>
                  </div>
                </div>

                <footer class="blockquote-footer">Created: <cite>${post.created}</cite></footer>
                <span class="badge badge-dark">${post.tags}</span>

                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="btn-group">
                        <a href="../post/index.html?id=${post.id}" class="btn btn-sm btn-outline-primary">View Post Details!</a>
                    </div>
                </div>
                
            </div>
            
        </div>
        `;
    });
}