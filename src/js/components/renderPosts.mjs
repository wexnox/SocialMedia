export function renderPosts(postsRendered) {
    const postContainer = document.querySelector('#postsContainer');

    // Clear existing content
    postContainer.innerHTML = "";

    // Create a document fragment to build up the new content
    const fragment = document.createDocumentFragment();

    postsRendered.forEach((post) => {
        // Create the card div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-4 shadow-sm';

        // Use innerHTML for the complex internal structure
        cardDiv.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <div class="media mb-4">
                    <img alt="Post Image" class="align-self-start mr-3 img-fluid" src="${post.media}" style="max-width: 100%; height: auto;">
                    <div class="media-body">
                        <p class="mt-0">${post.body}</p>
                    </div>
                </div>
                <footer class="blockquote-footer">Created: <cite>${post.created}</cite></footer>
                <span class="badge badge-dark">${post.tags}</span>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="btn-group">
                        <a href="/pages/posts/postDetails.html?id=${post.id}" class="btn btn-sm btn-outline-primary">View Post Details!</a>
                    </div>
                </div>
            </div>
        `;

        // Append the card div to the fragment
        fragment.appendChild(cardDiv);
    });

    // Append the fragment to the post container
    postContainer.appendChild(fragment);
}
