import { apiPath } from "../constants.mjs";
import { headers } from "../headers.js";

export async function registerHandler(name, email, password, avatar) {

  const response = await fetch(`${apiPath}/auth/register`, {
    headers: headers("application/json"),
    method: "post",
    body: JSON.stringify({ name, email, password, avatar }),
  })

  if (response.ok){
    const result = await response.json()
    console.log(result);
    alert("You are now registered")
    return result
  }

}
