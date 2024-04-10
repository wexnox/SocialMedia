export function setPageEventListeners() {
  const editPostButton = document.querySelector("#editPostButton");
  editPostButton.addEventListener("click", editPost);

}
function editPost() {
  const url = new URL(location.href);
  const postId = url.searchParams.get("id");
  window.location.href = `/pages/posts/edit.html?id=${postId}`;
}