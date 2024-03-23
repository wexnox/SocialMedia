import * as auth from "../../api/auth/index.js";

export async function setRegisterFormListener(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const avatar = formData.get("avatar");

  try {
    await auth.registerHandler(name, email, password, avatar);
  } catch {
    return alert("There was a problem creating your account");
  }

  try {
    await auth.loginHandler(email, password);
    location.reload();
  } catch {
    return alert("There was a problem logging into your new account");
  }

}