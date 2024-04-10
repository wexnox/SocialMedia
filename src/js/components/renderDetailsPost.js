export function renderDetailsPost(result, postContainer) {

  const authorDetails = ({ name, email } = {}) => ({ name: name || "", email: email || "" });
  const { name: authorName, email: authorEmail } = authorDetails(result.author);

  const _count = result._count || { reactions: 0, comments: 0 };
  // TODO: fix author and email

  // Format dates
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  // Adjust the class to center the post
  postContainer.classList.add("d-flex", "justify-content-center");
  postContainer.innerHTML = ""; // Clear existing content

  const post = document.createElement("div");
  post.classList.add("card", "mb-3");
  post.style.maxWidth = "800px"; // Set a max-width for the post card
  post.innerHTML = `
  <div class="card">
      <div class="card-body">
        <h1 class="card-title">Title: ${result.title}</h1>
        <h2 class="h4">Created by: ${authorName}</h2>
        <h3 class="h5">Email: ${authorEmail}</h3>
        <h4 class="h6">Created at: ${formatDate(result.created)}</h4>
        <h4 class="h6">Updated at: ${formatDate(result.updated)}</h4>
        <div><strong>Tags:</strong> <div class="d-flex flex-wrap" id="tagContainer"></div></div>
      </div>
    </div>
  `;

  // Handle tags with capitalization and inline display
  const tagContainer = post.querySelector("#tagContainer");
  result.tags.forEach(tag => {
    const tagSpan = document.createElement("span");
    tagSpan.textContent = tag.charAt(0).toUpperCase() + tag.slice(1); // Capitalize first letter
    tagSpan.classList.add("badge", "bg-secondary", "me-1", "mt-1");
    tagContainer.appendChild(tagSpan);
  });


  const postBody = document.createElement("div");
  postBody.classList.add("card-body");
  postBody.innerHTML = `<p class="card-text">${result.body}</p>`;
  post.append(postBody);

  if (result.media) {
    const postMedia = document.createElement("img");
    postMedia.src = result.media;
    postMedia.alt = "Post media";
    postMedia.classList.add("img-fluid", "card-img-top");
    postMedia.style.maxHeight = "500px"; // Set max height for the image
    postMedia.style.width = "auto"; // Ensure the width is auto to maintain aspect ratio
    post.insertBefore(postMedia, post.firstChild);
  }


  if (result.reactions && result.reactions.length > 0) {
    const reactions = document.createElement("ul");
    reactions.classList.add("list-group", "list-group-flush");
    result.reactions.forEach(reaction => {
      const reactionItem = document.createElement("li");
      reactionItem.textContent = `${reaction.symbol} ${reaction.count}`;
      reactionItem.classList.add("list-group-item");
      reactions.append(reactionItem);
    });
    post.append(reactions);
  }


  if (result.comments && result.comments.length > 0) {
    const comments = document.createElement("ul");
    comments.classList.add("list-group", "list-group-flush");
    result.comments.forEach(comment => {
      const commentItem = document.createElement("li");
      commentItem.textContent = `${comment.body} by ${comment.author.name}`;
      commentItem.classList.add("list-group-item");
      comments.append(commentItem);
    });
    post.append(comments);
  }

  // Append reaction and comment count to card footer
  const postCount = document.createElement("div");
  postCount.classList.add("card-footer", "text-muted");
  postCount.textContent = `Reaction count: ${_count.reactions}, Comment count: ${_count.comments}`;
  post.append(postCount);

  postContainer.append(post);
}
