import { clearTokenFromStorage } from "../../storage/index.js";
import buildMenu from "../../ui/common/buildMenu.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";


export function logoutHandler() {
  clearTokenFromStorage("accessToken");
  clearTokenFromStorage("profile");
  buildMenu(); // Rebuild the menu to reflect the unauthenticated state
  displayAlertMessage("success", "You are now logged out");
}
