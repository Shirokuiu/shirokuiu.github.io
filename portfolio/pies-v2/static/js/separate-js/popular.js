(function () {
  const weight = document.querySelectorAll('.popular .slider .slider-slide .desc ul');
  const price = document.querySelectorAll('.popular .slider .slider-slide .desc .price');
  
  for (let i = 0, len = weight.length; i < len; i++) {
    const weightItems = weight[i].querySelectorAll('li');
    let text = document.createTextNode('');
    
    price[i].insertBefore(text, price[i].children[0]);
    
    for (let j = 0, jlen = weightItems.length; j < jlen; j++) {
      const weightText = weightItems[j].querySelector('p span');
      
      weightText.textContent = weightItems[j].dataset.weight;
      
      if (weightItems[j].classList.contains('active')) {
        weight[i].dataset.currentPrice = weightItems[j].dataset.price;
        price[i].childNodes[0].textContent = weight[i].dataset.currentPrice;
      };
    };
    
    weight[i].addEventListener('click', function (evt) {
      const par = this.closest('.popular .slider .slider-slide .desc');
      const item = evt.target.closest('.popular .slider .slider-slide .desc ul li');
      const myPrice = par.querySelector('.price').childNodes[0];
      
      if (item) {
        if (!(item.classList.contains('active'))) {
          for (let j = 0, jlen = weightItems.length; j < jlen; j++) {
            weightItems[j].classList.remove('active');
          };
          item.classList.add('active');
          
          this.dataset.currentPrice = item.dataset.price;
          myPrice.textContent = this.dataset.currentPrice;
        };
      };
    });
  };
  
  $(document).ready(function(){
    $(".popular .slider").owlCarousel({
      slideTransition: 'ease',
      smartSpeed: 200,
      autoplay: false,
      nav: true,
      dots: true,
      responsive: {
        1740: {
          items: 4,
          margin: 60,
          stagePadding: 10
        },
        1250: {
          items: 3,
          margin: 40,
          stagePadding: 10
        },
        710: {
          items: 2,
          margin: 40,
          stagePadding: 10
        },
        320: {
          items: 1,
          margin: 0
        }
      }
    });
  });
})();