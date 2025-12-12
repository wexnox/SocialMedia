import { apiPath } from "../constants.mjs";
import { headers } from "../headers.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";

export async function registerHandler(name, email, password, banner, avatar) {

  const response = await fetch(`${apiPath}/auth/register`, {
    headers: headers("application/json"),
    method: "post",
    body: JSON.stringify({ name, email, password, banner, avatar }),
  })

  if (!response.ok) {
    const errorDetail = await response.json();
    console.error('Error detail:', errorDetail);
  }

  if (response.ok){
    const profile = await response.json()
    console.log(profile);
    displayAlertMessage('success', 'You are now registered');
    return profile
  } else {
    displayAlertMessage('danger', 'Unexpected error occurred. Please try again later.');

  }

}
