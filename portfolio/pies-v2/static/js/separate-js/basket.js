'use strict';

(function () {
  const basketItems = document.querySelectorAll('.basket .items li');
  const basketTotalPrice = document.querySelectorAll('.basket .items li .total-price');
  const totalPrice = document.querySelector('.basket .total p span');
  const totalOrderPrice = document.querySelector('.basket__order .block-left .row .total-order span');
  
  const calculateTotalPrice = function (elem) {
    let j = 0;

    for (let i = 0, len = elem.length; i < len; i++) {
      j = j + parseInt(window.util.removeSpaceNumbers(elem[i].textContent), 10);
    };

    return j;
  };
  
  totalPrice.textContent = window.util.addSpaceNumbers(calculateTotalPrice(basketTotalPrice));
  totalOrderPrice.textContent = totalPrice.textContent;
  
  for (let i = 0, len = basketItems.length; i < len; i++) {
    basketItems[i].addEventListener('click', function (evt) {
      const exit = evt.target.closest('.basket .items li .exit');
      const price = this.querySelector('.basket .items li .total-price span');
      
      if (exit) {
        this.remove();
        price.textContent = 0;
        totalPrice.textContent = window.util.addSpaceNumbers(calculateTotalPrice(basketTotalPrice));
        totalOrderPrice.textContent = totalPrice.textContent;
      };
    });
  };
})();