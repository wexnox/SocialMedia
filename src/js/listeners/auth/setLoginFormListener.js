import { loginHandler } from "../../api/auth/index.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";

export async function setLoginFormListener() {

  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      try {
        console.log(email, password); // Add this line to debug
        console.log(JSON.stringify(email, password));

        loginHandler(email, password)

      } catch (error) {
        console.error(error); // Log the error
        displayAlertMessage('danger', error.message);
        alert("Either your username was not found or your password is incorrect");
      }
    })
  }
}