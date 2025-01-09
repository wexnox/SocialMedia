import * as auth from "../../api/auth/index.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";

export function setLogoutListener() {
  const logoutButton = document.getElementById("logoutButton");

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      try {
        await auth.logoutHandler(); // Make sure logoutHandler is called on click
      } catch {
        displayAlertMessage("danger", "There was a problem logging out");
      }
    });
  } else {
    console.error("Logout button not found");
  }
}

