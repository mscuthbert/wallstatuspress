// CSS (Bootstrap + Font Awesome) and your SCSS theme
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './scss/agency.scss';

// JS order matters for Bootstrap 4: jQuery → Popper → Bootstrap
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'jquery.easing';

// Your theme behavior (scroll, navbar, modals, etc.)
import '/js/agency.js';
