'use strict';

(function () {
  const weightItems = document.querySelectorAll('.cart-good .desc ul li');
  const calculate = document.querySelectorAll('.cart-good .desc ul li .calculate');
  const basket = document.querySelector('.page-header .middle .basket a .count');
  const weight = document.querySelectorAll('.cart-good .desc ul');
  
  for (let i = 0, len = weightItems.length; i < len; i++) {
    let text = document.createTextNode('');
    
    weightItems[i].querySelector('.cart-good .desc ul li .weight').textContent = weightItems[i].dataset.weight;
    weightItems[i].querySelector('.cart-good .desc ul li .price').insertBefore(text, weightItems[i].querySelector('.cart-good .desc ul li .price span'));
    weightItems[i].querySelector('.cart-good .desc ul li .price').childNodes[0].textContent = weightItems[i].dataset.price;
    
    weightItems[i].addEventListener('mouseover', function (evt) {
      const par = this.closest('.cart-good .desc ul');
      const calc = this.querySelector('.cart-good .desc ul li .calculate');
      
      this.classList.add('hover');
      calc.classList.remove('close');
      par.dataset.currentPrice = this.dataset.price;
    });
    
    weightItems[i].addEventListener('mouseleave', function () {
      const calc = this.querySelector('.cart-good .desc ul li .calculate');
      
      this.classList.remove('hover');
      calc.classList.add('close');
    });
  };
  
  for (let i = 0, len = calculate.length; i < len; i++) {
    calculate[i].addEventListener('click', function (evt) {
      const parInner = this.closest('.cart-good .desc ul');
      const par = this.closest('.cart-good .desc ul li');
      const minus = evt.target.closest('.cart-good .desc ul li .calculate .row button.minus');
      const val = this.querySelector('.cart-good .desc ul li .calculate .row .val');
      const plus = evt.target.closest('.cart-good .desc ul li .calculate .row button.plus');
      const price = par.querySelector('.cart-good .desc ul li .price');
      const add = evt.target.closest('.cart-good .desc ul li .calculate .add');
      
      if (minus) {
        if (parseInt(val.textContent, 10) > 1) {
          val.textContent = parseInt(val.textContent, 10) - 1;
          price.childNodes[0].textContent = parseInt(price.childNodes[0].textContent, 10) - parseInt(parInner.dataset.currentPrice);
          
          if (parseInt(price.childNodes[0].textContent, 10) < 1000) {
            price.classList.remove('fix-price');
          };
        };
      };
      
      if (plus) {
        val.textContent = parseInt(val.textContent, 10) + 1;
        price.childNodes[0].textContent = parseInt(price.childNodes[0].textContent, 10) + parseInt(parInner.dataset.currentPrice);
        
        if (parseInt(price.childNodes[0].textContent, 10) >= 1000) {
          price.classList.add('fix-price');
        };
      };
      
      if (add) {
        basket.textContent = parseInt(basket.textContent, 10) + parseInt(val.textContent, 10);
      };
    });
  };
  
  for (let i = 0, len = weight.length; i < len; i++) {
    weight[i].addEventListener('click', function (evt) {
      const add = evt.target.closest('.cart-good .desc ul li .calculate .add');
      const wItems = this.querySelectorAll('li');
      const item = evt.target.closest('li');
      
      if (add) {
        for (let j = 0, jlen = wItems.length; j < jlen; j++) {
          if ((wItems[j].classList.contains('hover-active'))) {
            wItems[j].classList.remove('hover-active');
          };
        };
        item.classList.add('hover-active');
      };
    });
  };
})();