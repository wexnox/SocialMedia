import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'; // Bootstrap JS

import router from "./router.js";
import buildMenu from "./ui/common/buildMenu.js";
// Import our custom CSS

document.addEventListener('DOMContentLoaded', () => {
buildMenu();
router();
});