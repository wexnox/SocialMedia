import router from "./router.js";
import buildMenu from "./ui/common/buildMenu.js";
// Import our custom CSS
import '../scss/styles.scss'

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import * as bootstrap from 'bootstrap'; // Bootstrap JS

document.addEventListener('DOMContentLoaded', () => {
buildMenu();
router();
});