(function () {
  var userProfileButttonContainer = document.querySelectorAll('.user-profile__edit-proffiling-add-wrap');
  
  for (var i = 0, len = userProfileButttonContainer.length; i < len; i++) {
    userProfileButttonContainer[i].addEventListener('click', function () {
      var button = this.children[0];
      
      if (button) {
        this.children[1].classList.remove('hidden');
      }
    })
  }
})();