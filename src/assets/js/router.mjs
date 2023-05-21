import * as listeners from "./handlers/index.mjs";
import * as postsMethod from "./api/posts/index.mjs";
// import * as templets from "./templates/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      listeners.setLoginFormListener();
      return;
    case "/profile/register/":
      listeners.setRegisterFormListener();
      return;
    case "/post/create/":
      listeners.setCreatePostFormListener();
      return;
    case "/post/edit/":
      listeners.setUpdatePostListener();
      return;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      return;

    case "/posts/":
    postsMethod.fetchAllPosts();
    return;
  }
}

// async function testTemplet() {
//   const posts = await postsMethod.getPosts();
//   const post = posts.pop();
//   const container = document.querySelector("#post");
//   templets.renderPostTemplates(post, container);
// }

// testTemplet();
