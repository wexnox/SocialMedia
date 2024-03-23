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

export default function router() {
    const pathname = location.pathname;
    redirectBasedOnLogin(pathname);
    buildMenu(pathname);

    switch (pathname) {
        case '/':
        case '/login.html':
            handleRootIndex();
            break

        case "/profile/login/":
            handleAuthLogin()
            return;
        case "/profile/registerHandler/":
            handleAuthRegister()
            return;

        // case "/profile/edit/":
        //     listeners.setUpdateProfileListener();
        //     return;
        //
        //
        //
        // case "/posts/":
        //     listeners.fetchAllPosts();
        //     return;
        // case "/post/login.html":
        //     post.getPostDetails()
        //     return;
        // case "/post/create/":
        //     listeners.setCreatePostFormListener();
        //     return;
        // case "/post/edit/":
        //     listeners.setUpdatePostListener();
        //     return;




    }
}