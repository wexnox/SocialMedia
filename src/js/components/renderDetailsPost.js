export function renderDetailsPost(result, postContainer) {

  const authorDetails = ({name, email}={}) => ({name: name || '', email: email || ''});
  const {name: authorName, email: authorEmail} = authorDetails(result.author);

  // More robust check for the existence of result._count
  const _count = result._count || {reactions: 0, comments: 0};

  // Create DOM elements
  const post = document.createElement('div');
  post.innerHTML = `
    <h1>Title: ${result.title}</h1>
    <h2>Created by: ${authorName}</h2>
    <h3>Email: ${authorEmail}</h3>
    <h4>Created at: ${result.created}</h4>
    <h4>Updated at: ${result.updated}</h4>
    <h4>Tags:</h4>
    `;

  const tagList = document.createElement('ul');
  result.tags.forEach(tag => {
    const tagItem = document.createElement('li');
    tagItem.textContent = tag;
    tagList.append(tagItem);
  });

  post.append(tagList);

  const postBody = document.createElement('div');
  postBody.innerHTML = `${result.body}`;

  post.append(postBody);

  // Handle optional elements: media, reactions, comments
  if (result.media) {
    const postMedia = document.createElement("img");
    postMedia.src = result.media;
    postMedia.alt = "Post media";
    post.append(postMedia);
  }


  if (result.reactions && result.reactions.length > 0) {
    const reactions = document.createElement("ul");
    result.reactions.forEach(reaction => {
      const reactionItem = document.createElement("li");
      reactionItem.textContent = `${reaction.symbol} ${reaction.count}`;
      reactions.append(reactionItem);
    });
    post.append(document.createElement("h4").textContent = `Reactions:`);
    post.append(reactions);
  }

  if (result.comments && result.comments.length > 0) {
    const comments = document.createElement("ul");
    result.comments.forEach(comment => {
      const commentItem = document.createElement("li");
      commentItem.textContent = `${comment.body} by ${comment.author.name}`;
      comments.append(commentItem);
    });
    post.append(document.createElement("h4").textContent = `Comments:`);
    post.append(comments);

  }

  const postCount = document.createElement("h4");
  postCount.textContent = `Reaction count: ${_count.reactions}, Comment count: ${_count.comments}`;
  post.append(postCount);

  postContainer.append(post);
}