(function () {
  var select = document.querySelectorAll('.select')
  
  for (var i = 0, len = select.length; i < len; i++) {
    select[i].addEventListener('click', function (evt) {
      var target = evt.target.closest('.select__content');
      
      if (target) {
        var input = target.querySelector('.select__input');
        var selectItems = target.querySelector('.select__items-wrap');
        
        target.classList.remove('select__content--close');
        target.addEventListener('click', function (e) {
          var targetText = e.target.closest('.select__items');
          
          if (targetText) {
            e.stopPropagation();
            
            input.value = targetText.textContent;
            this.classList.add('select__content--close');
          }
        });
      }
    });
  }
})();