import router from "./router.js";
import buildMenu from "./ui/common/buildMenu.js";
// Import our custom CSS
import '../scss/styles.scss'

import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Bootstrap JS

document.addEventListener('DOMContentLoaded', () => {
buildMenu();
router();
});