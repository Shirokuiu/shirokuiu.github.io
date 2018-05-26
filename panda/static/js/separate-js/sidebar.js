(function () {
  var container = document.querySelector('.sidebar');
  
  container.addEventListener('click', function (evt) {
    var target = evt.target.closest('.sidebar__dropdown-title');
    
    if (target) {
      target.classList.toggle('sidebar__dropdown-title--close');
    }
  });
})();