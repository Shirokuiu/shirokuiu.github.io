'use strict';

(function () {
  const header = document.querySelector('.page-header');
  const btn = header.querySelector('.middle .logo');
  const menu = header.querySelector('.bottom');
  const menuExit = menu.querySelector('button');
  
  btn.addEventListener('click', function () {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  
  menuExit.addEventListener('click', function () {
    menu.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
})();