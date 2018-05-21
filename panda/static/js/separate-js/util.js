(function () {
  window.util = {
    initSelect: function (elements) {
      var content = document.querySelector(elements.selectContainer.selectContainerClass);
      var input = content.querySelector(elements.input);
      
      content.addEventListener('click', function (evt) {
        var target = evt.target.closest(elements.target);
        
        this.classList.remove(elements.selectContainer.selectContainerMod);
        if (target) {
          input.value = target.textContent;
          this.classList.add(elements.selectContainer.selectContainerMod);
        }
      });
    },
    initDropDown: function (elements) {
      var container = document.querySelector(elements.wrapper);
      
      container.addEventListener('click', function (evt) {
        var target = evt.target.closest(elements.target.elem);
        var arrow = target.querySelector(elements.arrow.elem);
        
        if (target) {
          target.classList.toggle(elements.target.mod);
          arrow.classList.toggle(elements.arrow.mod);
        }
      });
    }
  }
})();