export function displayAlertMessage(color, message) {
  const messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.innerHTML = `<div class="alert alert-${color}" role="alert">${message}</div>`;
  } else {
    console.error("Unable to display message: Element with ID 'message' not found.");
  }
}
