import * as auth from "../../api/auth/index.js";

export function setLogoutListener() {
	try {
		auth.logoutHandler();
		location.href = "./";
	} catch {
		return alert("There was a problem logging out");
	}
}
