import router from "./router.js";
import buildMenu from "./ui/common/buildMenu.js";
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', () => {
buildMenu();
router();
});