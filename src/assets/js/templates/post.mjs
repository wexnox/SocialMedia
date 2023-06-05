/**
 *
 * @param postData
 * @returns {string}
 */
export function postTemplateA(postData) {
  return `<div class="post" id=${postData.id}>${postData.title}</div>`
}

/**
 *
 * @param postData
 * @returns {HTMLDivElement}
 */
export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;

  if (postData.media) {
    const img = document.createElement('img');
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  return post;
}

/**
 *
 * @param postData
 * @param parent
 */
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData))
}

/**
 *
 * @param postDataList
 * @param parent
 */
export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB))
}