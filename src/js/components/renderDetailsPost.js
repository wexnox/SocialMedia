export function renderDetailsPost(result, postContainer) {
  const tagList = result.tags.map(tag => `<li>${tag}</li>`).join('');
  let authorName = result.author ? result.author.name : '';
  let authorEmail = result.author ? result.author.email : '';
  postContainer.innerHTML += `
        <div class="card-head ">
            <h1>Title: ${result.title}</h1>
            <h2>Created by: ${authorName}</h2>
            <h3>Email: ${authorEmail}</h3>
            <h4>Created at: ${result.created}</h4>
            <h4>Updated at: ${result.updated}</h4>
            <h4>Tags:</h4>
            <ul>${tagList}</ul>
        </div>
        <div class="card-body">
            ${result.body}
        </div>
    `;
  if (result.media) {
    postContainer.innerHTML += `<img src="${result.media}" alt="Post media">`;
  }
  if (result.reactions && result.reactions.length > 0) {
    let reactionsHTML = result.reactions.map(reaction => `<li>${reaction.symbol} ${reaction.count}</li>`).join('');
    postContainer.innerHTML += `
            <h4>Reactions:</h4>
            <ul>${reactionsHTML}</ul>
        `;
  }
  if (result.comments && result.comments.length > 0) {
    let commentsHTML = result.comments.map(comment => `<li>${comment.body} by ${comment.author.name}</li>`).join('');
    postContainer.innerHTML += `
            <h4>Comments:</h4>
            <ul>${commentsHTML}</ul>
        `;
  }
  postContainer.innerHTML += `<h4>Reaction count: ${result._count.reactions}, Comment count: ${result._count.comments}</h4>`;
}