(function () {
  var container = document.querySelectorAll('.popup');
  
  for (var i = 0, len = container.length; i < len; i++) {
    container[i].addEventListener('click', function (evt) {
      var targetExit = evt.target.closest('.popup__exit');

      if (targetExit) {
        this.classList.remove('popup--open');
        this.classList.add('hidden');
        document.body.classList.remove('popup-open');
      }
    });
  }
})();