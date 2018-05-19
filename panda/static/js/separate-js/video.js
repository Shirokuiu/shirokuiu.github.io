(function () {
  var container = document.querySelector('.video');
  var button = container.querySelector('.video__show-video-button');
  var videos = container.querySelector('.video__carts');
  
  button.addEventListener('click', function () {
    videos.classList.toggle('video__carts--hidden');
  });
})();