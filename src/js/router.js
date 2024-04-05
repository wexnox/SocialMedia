import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/redirectBasedOnLogin.js";
import { showMyPosts } from "@/js/ui/posts/showFeed.js";


function handleRootIndex() {

}

function handleAuthRegister() {
  listeners.setRegisterFormListener();
}

function handleAuthLogin() {
  listeners.setLoginFormListener();
}

// TODO disable to fix other error
function handlePostFeed() {
      showMyPosts()
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
  console.log("Current Path:", pathname); // Log the current path

  redirectBasedOnLogin(pathname);
  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/login.html":
      handleRootIndex();
      break;

    case "/auth/login.html":
      handleAuthLogin();
      return;
    case "/auth/register.html":
      handleAuthRegister();
      return;

    // Feed
    case "/pages/posts":
    case "/pages/posts/index.html":
      handlePostFeed();
      break;
    case "/pages/posts/post.html":
      handlePostDetails();
      break;
    case "/pages/posts/create.html":
      handleCreateNewPost();
      break;
    case "/pages/posts/edit.html":
      handleEditPost();
      break;


  }
}