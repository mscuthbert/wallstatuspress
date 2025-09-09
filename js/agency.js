// agency.js (modernized for Vite/ESM)

import $ from 'jquery';

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function (event) {
  if (
    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
    location.hostname === this.hostname
  ) {
    let target = $(this.hash);
    target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
    if (target.length) {
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 54,
        },
        1000,
        'easeInOutExpo'
      );
      event.preventDefault();
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').on('click', () => {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 56,
});

// Collapse Navbar
const navbarCollapse = () => {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass('navbar-shrink');
  } else {
    $('#mainNav').removeClass('navbar-shrink');
  }
};

// Collapse now if page is not at top
navbarCollapse();

// Collapse the navbar when page is scrolled
$(window).on('scroll', navbarCollapse);

// Hide navbar when modals trigger
$('.portfolio-modal').on('show.bs.modal', () => {
  $('.navbar').addClass('d-none');
});
$('.portfolio-modal').on('hidden.bs.modal', () => {
  $('.navbar').removeClass('d-none');
});
