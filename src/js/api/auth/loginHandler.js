import { apiPath } from "../constants.mjs";
import { saveTokenToStorage } from "../../storage/index.js";
import { headers } from "../headers.js";
import { displayAlertMessage } from "../../ui/common/displayMessage.js";
import buildMenu from "../../ui/common/buildMenu.js";

async function sendPostRequest(url, bodyData, headers) {
  return await fetch(url, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(bodyData),
  });
}
export async function loginHandler(email, password) {
  try {
    const response = await sendPostRequest(`${apiPath}/auth/login`,
      { email, password }, headers('application/json'));

    if (response.ok) {
      const profile = await response.json();
      saveTokenToStorage("token", profile.accessToken);
      saveTokenToStorage("profile", profile);
      buildMenu()
      displayAlertMessage('success', 'You are now logged in!');
      return profile;
    } else {
      console.log('Unexpected response status:', response.status);
      displayAlertMessage('danger', 'Unexpected error occurred. Please try again later.');
    }
  }catch (error) {
    return displayAlertMessage('danger', error.message);
  }

}
