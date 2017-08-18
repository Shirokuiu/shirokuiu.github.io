var mainNavButton = document.querySelector('.main-nav__button');
var mainNavBlockWrap = document.querySelector('.main-nav__blockWrap');
var mainNavList = document.querySelectorAll('.main-nav__list');
var mainNavButtonClose = document.querySelector('.main-nav__button-close');

mainNavButton.addEventListener('click', function() {
  mainNavBlockWrap.classList.toggle('main-nav__blockWrap--padding-vissible');
  mainNavList[0].classList.toggle('main-nav__list--vissible');
  mainNavList[1].classList.toggle('main-nav__list--vissible');
  mainNavButtonClose.classList.toggle('main-nav__button-close--vissible');
});

mainNavButtonClose.addEventListener('click', function() {
  mainNavBlockWrap.classList.remove('main-nav__blockWrap--padding-vissible');
  mainNavList[0].classList.remove('main-nav__list--vissible');
  mainNavList[1].classList.remove('main-nav__list--vissible');
  mainNavButtonClose.classList.toggle('main-nav__button-close--vissible');
});

var orderButton = document.querySelector('.order__button');
var orderPopup = document.querySelector('.order__popup');

orderButton.addEventListener('click', function () {
  orderButton.classList.toggle('order__button--active');
  orderPopup.classList.toggle('order__popup--hidden');
  orderPopup.classList.toggle('order__popup--visible');
});
