import { clearTokenFromStorage } from "../../storage/index.js";
import buildMenu from "../../ui/common/buildMenu.js";

export function logoutHandler() {
	clearTokenFromStorage("token");
	clearTokenFromStorage("profile");
	// location.href = '/';
	buildMenu(); // Rebuild the menu to reflect the unauthenticated state
}
