import { apiPath } from "../constants.mjs";
import { saveTokenToStorage } from "../../storage/index.js";
import { headers } from "../headers.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
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
      saveTokenToStorage("token", profile.accessToken);
      saveTokenToStorage("profile", profile);
      buildMenu()
      displayMessage('success', 'You are now logged in!');
      return profile;
    } else {
      console.log('Unexpected response status:', response.status);
      displayMessage('danger', 'Unexpected error occurred. Please try again later.');
    }
  }catch (error) {
    return displayMessage('danger', error.message);
  }

}
