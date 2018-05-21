(function () {
  var elem = {
    selectContainer: {
      selectContainerClass: '.rates__select-wrap',
      selectContainerMod: 'rates__select-wrap--hidden'
    },
    input: '.rates__select-input',
    target: '.rates__select-items'
  };
  
  window.util.initSelect(elem);
})();