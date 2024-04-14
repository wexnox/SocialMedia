export function renderPosts(postsRendered) {
    const postContainer = document.querySelector('#postsContainer');

    // Clear existing content
    postContainer.innerHTML = "";

    // Create a document fragment to build up the new content
    const fragment = document.createDocumentFragment();

    postsRendered.forEach((post) => {
        console.log("log of postRendered", post);
        // Create the card div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-4 text-center shadow-sm';

        // Create the card-body div
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        // Create Title element
        const postTitle = document.createElement('h5');
        postTitle.className = 'card-title';
        postTitle.textContent = post.title;
        cardBodyDiv.appendChild(postTitle);

        // Create Author element
        const postAuthor = document.createElement('h6');
        postAuthor.className = 'blockquote-footer card-subtitle mb-2 text-muted pt-2';
        postAuthor.textContent = "Written by: " + post.author.name;
        cardBodyDiv.appendChild(postAuthor);

        // Create Media element
        const mediaDiv = document.createElement('div');
        mediaDiv.className = 'media mb-4';

        const postImage = document.createElement('img');
        postImage.className = 'align-self-start mr-3 img-fluid';
        postImage.src = post.media;
        postImage.style.maxWidth = '100%';
        postImage.style.height = 'auto';
        mediaDiv.appendChild(postImage);

        cardBodyDiv.appendChild(mediaDiv);

// Create a div for tags
        const tagDiv = document.createElement('div');
        tagDiv.style.display = "flex";
        tagDiv.style.flexWrap = "wrap";
        tagDiv.style.marginTop = "10px";

        if (post.tags && post.tags.length > 0) { // Ensure tags exist and are not empty
            post.tags.forEach((tag) => {
                const tagSpan = document.createElement('span');
                tagSpan.textContent = tag;
                tagSpan.className = 'badge bg-dark me-1'; // Updated for Bootstrap 5
                tagDiv.appendChild(tagSpan);
            });
        }

        cardBodyDiv.appendChild(tagDiv); // Append the tags to the card-body


        // Create created and updated element
        const postCreated = document.createElement('p');
        postCreated.className = 'card-text text-muted';
        postCreated.textContent = "Created at: " + post.created;
        cardBodyDiv.appendChild(postCreated);

        const postUpdated = document.createElement('p');
        postUpdated.className = 'card-text text-muted';
        postUpdated.textContent = "Updated at: " + post.updated;
        cardBodyDiv.appendChild(postUpdated);

        // Create Read more button
        const readMoreButton = document.createElement('a');
        readMoreButton.className = 'btn btn-primary';
        readMoreButton.textContent = "Read More";
        readMoreButton.href = `/pages/posts/postDetails.html?id=${post.id}`;  // assuming there is a separate post detail page
        cardBodyDiv.appendChild(readMoreButton);

        // Append the tags to the card-body
        cardBodyDiv.appendChild(tagDiv);
        // Append cardBodyDiv to cardDiv
        cardDiv.appendChild(cardBodyDiv);

        // Append the card div to the fragment
        fragment.appendChild(cardDiv);
    });

    // Append the fragment to the post container
    postContainer.appendChild(fragment);
}