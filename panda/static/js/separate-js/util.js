(function () {
  window.util = {
    initSelect: function (elements) {
      var container = document.querySelector(elements.container);
      var input = container.querySelector(elements.input);
      var select = container.querySelector(elements.select.elem);

      container.addEventListener('click', function (evt) {
        var target = evt.target.closest(elements.target);

        select.classList.remove(elements.select.mod);
        if (target) {
          input.value = target.textContent;
          select.classList.add(elements.select.mod);
        }
      });
    }
  }
})();