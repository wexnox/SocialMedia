import { registerHandler } from "@/js/api/auth/index.js";
import { displayAlertMessage } from "@/js/ui/common/displayMessage.js";


export async function setRegisterFormListener() {
  const form = document.getElementById("registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log('Form submission intercepted');
      const form = event.target;
      const formData = new FormData(form);
      const email = formData.get("email");
      const name = formData.get("name");
      const password = formData.get("password");
      const banner = formData.get("banner")
      const avatar = formData.get("avatar");

      try {
        console.log(name, email, password);
        console.log(JSON.stringify(name, email, password));
        await registerHandler(name, email, password, banner, avatar);

      } catch {
        displayAlertMessage("danger", "There was a problem creating your account");
      }
    });

  }


}