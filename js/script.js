// МЕНЮ БУРГЕР

//  иконка бургера
const iconMenu = document.querySelector('.header__burger');
// иконка  X
const menuClose = document.querySelector('.header__menu-close')
// меню
const menuBody = document.querySelector('.header__menu');
// для скрытия элемента шапки
const menuHidden = document.querySelector('.header__nav')
// элемент из footer
const footerElem = document.querySelector('.footer__contacts')
if (iconMenu) {

  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuHidden.classList.toggle('_hidden');
    menuBody.classList.toggle('_active');
    footerElem.classList.add('_visible');
    document.body.classList.toggle('_lock');
  });

  menuClose.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuHidden.classList.toggle('_hidden');
    menuBody.classList.toggle('_active');
    footerElem.classList.remove('_visible');
    document.body.classList.toggle('_lock');
  });
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  // Функция onMenuLinkClick
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    // условие
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // высчитываем положение объекта с учетом высоты шапки.
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      //  при клике  на раздел, меню пропадает и страница переводит на выбранный пункт
      // 1.Если объект иконки меню содержит класс _active, т.е. фактически это означает, что меню открыто, то в этот момент:
      if (iconMenu.classList.contains('_active')) {
        // 2. мы должны убрать классы, которые мы добавляем при открытии меню (заменить toggle на remove)
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        menuHidden.classList.toggle('_hidden');
        document.body.classList.remove('_lock');
        footerElem.classList.remove('_visible');

      }

      // кусочек кода, который заставит скролл прокрутиться к нужному месту
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}

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
