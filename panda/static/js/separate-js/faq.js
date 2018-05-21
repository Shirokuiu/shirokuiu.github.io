(function () {
  var elem = {
    wrapper: '.faq__questions',
    target: {
      elem: '.faq__drop-down-container',
      mod: 'faq__drop-down-container--close'
    },
    arrow: {
      elem: '.faq__drop-down-container .drop-down',
      mod: 'drop-down--close'
    }
  }
  
  window.util.initDropDown(elem);
})();