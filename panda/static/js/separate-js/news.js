(function () {
  var container = document.querySelector('.news__preview');
  var text = container.querySelector('.news__preview-description');
  var linkDropDown = container.querySelector('.news__preview-description-link-drop-down');
  
  linkDropDown.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    text.classList.toggle('news__preview-description--hidden');
    if (!(text.classList.contains('news__preview-description--hidden'))) {
      this.textContent = 'Скрыть';
    } else {
      this.textContent = 'Показать полностью...';
    }
  });
})();