import { apiPath } from "../constants.mjs";
import { saveTokenToStorage } from "../../storage/index.js";
import { headers } from "../headers.js";
import { displayAlertMessage } from "../../ui/common/displayMessage.js";
import buildMenu from "../../ui/common/buildMenu.js";

export async function loginHandler(email, password) {

  try {
    const response = await fetch(`${apiPath}/auth/login`, {
      headers: headers('application/json'),
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {

      const profile = await response.json();

      saveTokenToStorage("accessToken", profile.accessToken);
      saveTokenToStorage("profile", profile);

      buildMenu()

      displayAlertMessage('success', 'You are now logged in! Redirecting to posts...');


      // Set a timeout for 5 seconds before redirecting
      setTimeout(() => {
        window.location.href = '/posts';
      }, 5000); // 5000 milliseconds = 5 seconds

      return profile;
    } else {
      console.log('Unexpected response status:', response.status);
      displayAlertMessage('danger', 'Unexpected error occurred. Please try again later.');
    }
  }catch (error) {
    console.error(error);
    return displayAlertMessage('danger', error.message);
  }

}
