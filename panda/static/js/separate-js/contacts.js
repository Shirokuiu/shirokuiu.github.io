(function () {
  var elem = {
    selectContainer: {
      selectContainerClass: '.contacts__form-select-wrap',
      selectContainerMod: 'contacts__form-select-wrap--hidden'
    },
    input: '.contacts__form-select-input',
    target: '.contacts__form-select-items'
  };
  
  window.util.initSelect(elem);
})();