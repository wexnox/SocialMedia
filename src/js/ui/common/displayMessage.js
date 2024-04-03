export function displayAlertMessage(color, message) {
  document.getElementById('message').innerHTML = `
        <div class="alert alert-${color}" role="alert">
            ${message}
        </div>`;
}