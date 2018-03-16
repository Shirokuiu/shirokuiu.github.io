var pageFooterItemBurger = document.querySelector('.page-footer__item--burger');
var burgerPopup = document.querySelector('.burger-popup');

var showBurgerPopup = function () {
  burgerPopup.classList.toggle('burger-popup--hidden');
};

pageFooterItemBurger.addEventListener('click', showBurgerPopup);