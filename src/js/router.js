import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/redirectBasedOnLogin.js";


function handleRootIndex() {

}

function handleAuthRegister() {
  listeners.setRegisterFormListener();
}

function handleAuthLogin() {
  listeners.setLoginFormListener();
}

function handlePostFeed() {
  //     listeners.fetchAllPosts();
  // listeners.feed; TODO
}

function handlePostDetails() {
  // listeners.post(); TODO
}

function handleCreateNewPost() {
  listeners.setCreatePostFormListener();
}

function handleEditPost() {
  listeners.setUpdatePostListener();
}

export default function router() {
  const pathname = location.pathname;
  redirectBasedOnLogin(pathname);
  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/login.html":
      handleRootIndex();
      break;

    case "/profile/login/":
      handleAuthLogin();
      return;
    case "/profile/registerHandler/":
      handleAuthRegister();
      return;
    // Feed
    case "/posts":
    case "/posts/index.html":
      handlePostFeed();
      break;
    case "/posts/post.html":
      handlePostDetails();
      break;
    case "/posts/create.html":
      handleCreateNewPost();
      break;
    case "/posts/edit.html":
      handleEditPost();
      break;


  }
}