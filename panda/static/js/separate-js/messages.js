(function () {
  var messagesButton = document.querySelector('.messages__chat-textarea-button');
  var messagesButtonDescription = document.querySelector('.messages__chat-textarea-description-wrap');
  
  messagesButton.addEventListener('click', function () {
    this.classList.toggle('messages__chat-textarea-button--active');
    messagesButtonDescription.classList.toggle('hidden');
  });
})();

(function () {
  var titles = document.querySelectorAll('.messages__chat-navigation-title');
  
  for (var i = 0, len = titles.length; i < len; i++) {
    titles[i].addEventListener('click', function () {
      this.classList.toggle('messages__chat-navigation-title--close');
    });
  }
})();