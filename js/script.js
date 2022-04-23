// =============================PARTII
// Слайдеры 
new Swiper('.reviews-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  speed: 1500,
  spaceBetween: 10,
});

// Меню бургер
const burger = document.querySelector('.header__burger');
const menuNav = document.querySelector('.header__menu');
const navLink = document.querySelectorAll('.header__menu-link');
const menuClose = document.querySelector('.header__menu-close');
let fromFooter = document.querySelector('.footer__contacts');
burger.addEventListener('click', mobileMenu);

function mobileMenu() {
  burger.classList.add('_active');
  menuNav.classList.add('_open');
  menuClose.classList.add('_active');
  fromFooter.classList.add('_visible');
  document.body.classList.add('_lock');
};

// при нажатии на X, меню закрывается 
menuClose.addEventListener('click', closeMenu);

function closeMenu() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
  menuClose.classList.remove('_active');
  fromFooter.classList.remove('_visible');
  document.body.classList.remove('_lock');
};

// при нажатии на ссылку, меню закрывается
navLink.forEach(n => n.addEventListener('click', closeMenuForLink));

function closeMenuForLink() {
  burger.classList.remove('_active');
  menuNav.classList.remove('_open');
  menuClose.classList.remove('_active');
  fromFooter.classList.remove('_visible');
  document.body.classList.remove('_lock');
};

// плавная прокрутка к разделам
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

// POP-UP
// ловим кнопку
const openPopUp = document.querySelector('.button');
const openPopUpFooter = document.querySelector('.button--footer')
// ловим крестик
const closePopUp = document.querySelector('.pop-up__close');
// ловим popUp
const popUp = document.querySelector('.pop-up');
// blur
let blur = document.querySelector('.main');
// когда нажимаем на кнопку
openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
  blur.classList.toggle('_active');
  document.body.classList.toggle('_lock');
});
openPopUpFooter.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
  blur.classList.toggle('_active');
  document.body.classList.toggle('_lock');
});
// когда закрываем окно, то active убирается
closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
  blur.classList.toggle('_blur');
  blur.classList.toggle('_active');
  document.body.classList.toggle('_lock');
});
