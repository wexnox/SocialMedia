import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/redirectBasedOnLogin.js";
import { showMyPosts } from "@/js/ui/posts/showFeed.js";
import { buildFeed } from "./ui/posts/buildFeed.js";

// import { populateEditForm } from "@/js/listeners/posts/populateEditForm.js";

async function handleRootIndex() {
  try {
    await buildFeed();
  } catch (error) {
    // TODO: refactor this
    console.error("Error showing posts:", error);
    // Handle error (e.g., show error message to user)
  }
}

function handleAuthRegister() {
  listeners.setRegisterFormListener();
}

function handleAuthLogin() {
  listeners.setLoginFormListener();
}

function handlePostFeed() {
  showMyPosts();
}

function handlePostDetails() {
  listeners.showPostDetails();
  listeners.setPageEventListeners();
}

function handleCreateNewPost() {
  listeners.setCreatePostFormListener();
}

function handleEditPost() {
  // populateEditForm();
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
    case "/pages/posts/postDetails.html":
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