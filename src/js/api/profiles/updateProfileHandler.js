import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";

export async function updateProfileHandler(profileData) {

  const action = "/profiles";
  const method = "put";

  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const response = headers(updateProfileURL, {
    method,
    body: JSON.stringify(profileData)
  })

  return await response.json();
 }