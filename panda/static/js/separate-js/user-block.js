(function () {
  var container = document.querySelector('.user-block');
  var elem = {
    selectContainer: {
      selectContainerClass: '.user-block__language',
      selectContainerMod: 'user-block__language--hidden'
    },
    input: '.user-block__language-select-input',
    target: '.user-block__language-select-text'
  };
  var search = container.querySelector('.user-block__search-input');
  var icon = container.querySelector('.user-block__search-icon');
  
  if (search !== null) {
    search.addEventListener('focusin', function () {
      icon.classList.add('user-block__search-icon--focus');
    });
    search.addEventListener('focusout', function () {
      icon.classList.remove('user-block__search-icon--focus');
    });
  }
  
  if (window.util !== undefined) {
    window.util.initSelect(elem);
  }
})();