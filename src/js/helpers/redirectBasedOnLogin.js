// TODO: Look into this one, confused
export function redirectBasedOnLogin(pathname) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        redirectToURL(pathname, ["/auth/profile.html", "/auth/register.html"], "/profile");
    } else {
        redirectToURL(pathname, ["/pages/profile/", "/pages/profile/index.html"], "/auth/register.html");
    }
}

function redirectToURL(pathname, paths, redirectTo) {
    if (paths.includes(pathname)) {
        location.href = redirectTo;
    }
}