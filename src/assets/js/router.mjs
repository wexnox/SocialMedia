import * as listeners from "./handlers/index.mjs";
import * as postsMethod from "./api/posts/index.mjs";
// import * as templets from "./templates/index.mjs";
// import * as post from "./api/post/index.mjs"

export default function router() {
    const path = location.pathname;

    switch (path) {

        /**
         * Profile
         */
        // case "/profile/":
        //     listeners.fetchprofile();
        //     return;
        //

        case "/profile/login/":
            listeners.setLoginFormListener();
            return;
        case "/profile/register/":
            listeners.setRegisterFormListener();
            return;
        case "/profile/edit/":
            listeners.setUpdateProfileListener();
            return;


        /**
         * Post
         */
        case "/post/create/":
            listeners.setCreatePostFormListener();
            return;
        case "/post/edit/":
            listeners.setUpdatePostListener();
            return;


        /**
         * Posts
         */
        case "/posts/":
            postsMethod.fetchAllPosts();
            return;

        // case "/post/index.html":
        //     post.getPostDetails()
        //     return;
    }
}