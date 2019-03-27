'use strict';

(function () {
  const innerCalculate = document.querySelector('.inner .calculate-block');
  const weight = innerCalculate.querySelector('ul');
  const weightItems = weight.querySelectorAll('li');
  const weightText = weight.querySelectorAll('li p');
  const price = innerCalculate.querySelector('.inner .calculate-block .price p:nth-child(2)');
  const calculate = innerCalculate.querySelector('.calculate .row');
  const calculatePrice = innerCalculate.querySelector('.calculate .row p');
  const basket = document.querySelector('.page-header .middle .basket a .count');
  
  let text = document.createTextNode('');
  
  price.insertBefore(text, price.children[0]);
  
  for (let i = 0, len = weightItems.length; i < len; i++) {
    weightText[i].textContent = weightItems[i].dataset.weight;
    
    if (weightItems[i].classList.contains('active')) {
      price.childNodes[0].textContent = weightItems[i].dataset.price;
      weight.dataset.currentPrice = weightItems[i].dataset.price;
    };
  };
  
  weight.addEventListener('click', function (evt) {
    const item = evt.target.closest('.inner .calculate-block ul li');
    
    if (item) {
      if (!(item.classList.contains('active'))) {
        for (let i = 0, len = weightItems.length; i < len; i++) {
          weightItems[i].classList.remove('active');
        };
        item.classList.add('active');
        this.dataset.currentPrice = item.dataset.price;
        price.childNodes[0].textContent = this.dataset.currentPrice;
        calculatePrice.textContent = 1;
      };
    };
  });
  
  calculate.addEventListener('click', function (evt) {
    const minus = evt.target.closest('.inner .calculate-block .calculate .row button.minus');
    const val = this.querySelector('.inner .calculate-block .calculate .row p');
    const plus = evt.target.closest('.inner .calculate-block .calculate .row button.plus');
    
    if (minus) {
      if (parseInt(val.textContent, 10) > 1) {
        val.textContent = parseInt(val.textContent, 10) - 1;
        price.childNodes[0].textContent = parseInt(price.childNodes[0].textContent, 10) - parseInt(weight.dataset.currentPrice, 10);
      };
    };
    
    if (plus) {
      val.textContent = parseInt(val.textContent, 10) + 1;
      price.childNodes[0].textContent = parseInt(price.childNodes[0].textContent, 10) + parseInt(weight.dataset.currentPrice, 10);
    };
  });
  
  innerCalculate.addEventListener('click', function (evt) {
    const add = evt.target.closest('.inner .calculate-block .add');
    
    if (add) {
      basket.textContent = parseInt(basket.textContent, 10) + parseInt(calculatePrice.textContent, 10);
    };
  });
})();