import { getProfile, updateProfileHandler } from "../../api/profiles/index.mjs";
import { getTokenFromStorage } from "../../storage/index.js";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = getTokenFromStorage("profile")
    form.name.value = name;
    form.email.value = email;

    const profile = await getProfile(name);
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const profileData = {
        ...Object.fromEntries(new FormData(event.target).entries()), name, email
      };


      updateProfileHandler(profileData)
    })
  }
}