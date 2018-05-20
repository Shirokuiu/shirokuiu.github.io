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
    }
  }
})();