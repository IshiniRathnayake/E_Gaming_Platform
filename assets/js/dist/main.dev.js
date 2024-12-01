"use strict";

var _this = void 0;

/* SEARCH */
var searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');
var cartButton = document.getElementById('cart-button');

if (cartButton) {
  console.log("Cart button found!");
  cartButton.addEventListener('click', function () {
    console.log("Cart button clicked!");
    window.location.href = '/Game-Hub/bank_details_form.php';
  });
} else {
  console.error("Cart button not found!");
}
/* SEARCH SHOW */


if (searchButton) {
  searchButton.addEventListener('click', function () {
    searchContent.classList.add('show-search');
  });
}
/* SEARCH HIDDEN */


if (searchClose) {
  searchClose.addEventListener('click', function () {
    searchContent.classList.remove('show-search');
  });
}
/* LOGIN*/


var loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content');
/* LOGIN SHOW */

if (loginButton) {
  loginButton.addEventListener('click', function () {
    loginContent.classList.add('show-login');
  });
}
/* LOGIN HIDDEN */


if (loginClose) {
  loginClose.addEventListener('click', function () {
    loginContent.classList.remove('show-login');
  });
}
/* signUp*/


var signUpButton = document.getElementById('SignUp-button'),
    signUpClose = document.getElementById('signUp-close'),
    signUpContent = document.getElementById('signUp-content');
/* signUp SHOW */

if (signUpButton) {
  signUpButton.addEventListener('click', function () {
    signUpContent.classList.add('show-signUp');
  });
}
/* signUp HIDDEN */


if (signUpClose) {
  signUpClose.addEventListener('click', function () {
    signUpContent.classList.remove('show-signUp');
  });
}
/* ADD SHADOW HEADER */


var shadowHeader = function shadowHeader() {
  var header = document.getElementById('header'); // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag

  _this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);
/* HOME SWIPER */

var swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    1220: {
      spaceBetween: -32
    }
  }
});
/* FEATURED SWIPER */

var swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false
    }
  }
});
/* NEW SWIPER */

var swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  breakpoints: {
    1150: {
      slidesPerView: 3
    }
  }
});
/* TESTIMONIAL SWIPER */

var swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false
    }
  }
});
/* SHOW SCROLL UP */

var scrollUp = function scrollUp() {
  var scrollUp = document.getElementById('scroll-up'); // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class

  _this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);
/* SCROLL SECTIONS ACTIVE LINK */

var sections = document.querySelectorAll('section[id]');

var scrollActive = function scrollActive() {
  var scrollDown = window.scrollY;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);
/* DARK LIGHT THEME */

var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'ri-sun-line';
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); // We obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
}; // We validate if the user previously chose a topic


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); // We save the theme and the current icon that the user chose

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/* SCROLL REVEAL ANIMATION */

var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400 // reset: true, // Animations repeat

});
sr.reveal(".home__data, .featured__container, .new__container, \n           .join__data, .testimonial__container, .footer");
sr.reveal(".home__images", {
  delay: 600
});
sr.reveal(".services__card", {
  interval: 100
});
sr.reveal(".discount__data", {
  origin: 'left'
});
sr.reveal(".discount__images", {
  origin: 'right'
});
//# sourceMappingURL=main.dev.js.map
