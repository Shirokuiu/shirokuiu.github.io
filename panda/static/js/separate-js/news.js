(function () {
  var container = document.querySelector('.news__preview');
  var text = container.querySelector('.news__preview-description');
  var linkDropDown = container.querySelector('.news__preview-description-link-drop-down');
  var addInterrogation = document.querySelector('.news__block-control-add-interrogation');
  var addPost = document.querySelector('.news__block-control-add-post');
  var interrogationBlock = document.querySelector('.news__block-interrogation-block');
  var postBlock = document.querySelector('.news__block-post-block');
  var newsSettingsButton = document.querySelector('.news__settings-button');
  var newsSettings = document.querySelector('.news--settings');
  
  linkDropDown.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    text.classList.toggle('news__preview-description--hidden');
    if (!(text.classList.contains('news__preview-description--hidden'))) {
      this.textContent = 'Скрыть';
    } else {
      this.textContent = 'Показать полностью...';
    }
  });
  
  addInterrogation.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    interrogationBlock.classList.toggle('hidden');
  });
  
  addPost.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    postBlock.classList.toggle('hidden');
  });
  
  newsSettingsButton.addEventListener('click', function () {
    newsSettings.classList.remove('hidden');
  });
})();