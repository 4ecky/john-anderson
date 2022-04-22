"use strict"
// Перемещение фото на главном экране
const parentOriginal = document.querySelector('.intro__inner');
const parent = document.querySelector('.intro__content')
const item = document.querySelector('.intro__image');

window.addEventListener('resize', function (event) {

  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewportWidth <= 992) {
    if (!item.classList.contains('done')) {
      parent.insertBefore(item, parent.children[0]);
      item.classList.add('done');
    }
  } else {
    if (item.classList.contains('done')) {
      parentOriginal.insertBefore(item, parentOriginal.children[0]);
      item.classList.remove('done');
    }
  }
});
