(function () {
  var exchangeFreelancePromoteButton = document.querySelectorAll('.exchange-cart__promote-button');
  var exchangeFreelanceSubmitResume = document.querySelectorAll('.exchange-cart__submit-resume-button');
  var exchangeFreelanceIdeasResponded = document.querySelectorAll('.exchange-cart__ideas-responded');
  var exchangeFreelanceSalaryResponded = document.querySelectorAll('.exchange-cart__salary-responded');
  var exchangeFreelanceChallangeAccept = document.querySelectorAll('.exchange-cart__challange-accept');
  var exchangeFreelanceChallangeParticipant = document.querySelectorAll('.exchange-cart__challange-participant');
  var popupPromote = document.querySelector('.exchange-cart__popup-promote');
  var popupSubmitResume = document.querySelector('.exchange-cart__popup-submit-resume');
  var popupIdeasResponded = document.querySelector('.exchange-cart__popup-ideas-responded');
  var popupSalaryResponded = document.querySelector('.exchange-cart__popup-salary-responded');
  var popupChallangeAccept = document.querySelector('.exchange-cart__popup-challange-accept');
  var popupChallangeParticipant = document.querySelector('.exchange-cart__popup-challange-participant');
  
  var onEscPressPromote = function (evt) {
    window.util.escPress(evt, closePromotePopup);
  };
  
  var closePromotePopup = function () {
    popupPromote.classList.add('hidden');
    popupPromote.classList.remove('popup--open');
    document.body.classList.remove('popup-open');
    document.removeEventListener('keydown', onEscPressPromote);
  };
  
  
  for (var i = 0, len = exchangeFreelancePromoteButton.length; i < len; i++) {
    exchangeFreelancePromoteButton[i].addEventListener('click', function (evt) {
      popupPromote.classList.remove('hidden');
      popupPromote.classList.add('popup--open');
      document.body.classList.add('popup-open');
      
      document.addEventListener('keydown', onEscPressPromote);
    });
  };
  
  //
  
  var onEscPressSubmitResume = function (evt) {
    window.util.escPress(evt, closeSubmitResume);
  };
  
  var closeSubmitResume = function () {
    popupSubmitResume.classList.add('hidden');
    popupSubmitResume.classList.remove('popup--open');
    document.body.classList.remove('popup-open');
    document.removeEventListener('keydown', onEscPressSubmitResume);
  };
  
  for (var i = 0, len = exchangeFreelanceSubmitResume.length; i < len; i++) {
    exchangeFreelanceSubmitResume[i].addEventListener('click', function (evt) {
      popupSubmitResume.classList.remove('hidden');
      popupSubmitResume.classList.add('popup--open');
      document.body.classList.add('popup-open');
      
      document.addEventListener('keydown', onEscPressSubmitResume);
    });
  };
  
  //
  
  var onEscPressIdeasResponded = function (evt) {
    window.util.escPress(evt, closeIdeasResponded);
  };
  
  var closeIdeasResponded = function () {
    popupIdeasResponded.classList.add('hidden');
    popupIdeasResponded.classList.remove('popup--open');
    document.body.classList.remove('popup-open');
    document.removeEventListener('keydown', onEscPressIdeasResponded);
  };
  
  for (var i = 0, len = exchangeFreelanceIdeasResponded.length; i < len; i++) {
    exchangeFreelanceIdeasResponded[i].addEventListener('click', function (evt) {
      popupIdeasResponded.classList.remove('hidden');
      popupIdeasResponded.classList.add('popup--open');
      document.body.classList.add('popup-open');
      
      document.addEventListener('keydown', onEscPressIdeasResponded);
    });
  };
  
  //
  
  var onEscPressSalaryResponded = function (evt) {
    window.util.escPress(evt, closeSalaryResponded);
  };
  
  var closeSalaryResponded = function () {
    popupSalaryResponded.classList.add('hidden');
    popupSalaryResponded.classList.remove('popup--open');
    document.body.classList.remove('popup-open');
    document.removeEventListener('keydown', onEscPressSalaryResponded);
  };
  
  for (var i = 0, len = exchangeFreelanceSalaryResponded.length; i < len; i++) {
    exchangeFreelanceSalaryResponded[i].addEventListener('click', function (evt) {
      popupSalaryResponded.classList.remove('hidden');
      popupSalaryResponded.classList.add('popup--open');
      document.body.classList.add('popup-open');
      
      document.addEventListener('keydown', onEscPressSalaryResponded);
    });
  };
  
  //
  
  var onEscPressChallangeAccept = function (evt) {
    window.util.escPress(evt, closeChallangeAccept);
  };
  
  var closeChallangeAccept = function () {
    popupChallangeAccept.classList.add('hidden');
    popupChallangeAccept.classList.remove('popup--open');
    document.body.classList.remove('popup-open');
    document.removeEventListener('keydown', onEscPressChallangeAccept);
  };
  
  for (var i = 0, len = exchangeFreelanceChallangeAccept.length; i < len; i++) {
    exchangeFreelanceChallangeAccept[i].addEventListener('click', function (evt) {
      popupChallangeAccept.classList.remove('hidden');
      popupChallangeAccept.classList.add('popup--open');
      document.body.classList.add('popup-open');
      
      document.addEventListener('keydown', onEscPressChallangeAccept);
    });
  };
  
  //
  
  var onEscPressChallangeParticipant = function (evt) {
    window.util.escPress(evt, closeChallangeParticipant);
  };
  
  var closeChallangeParticipant = function () {
    popupChallangeParticipant.classList.add('hidden');
    popupChallangeParticipant.classList.remove('popup--open');
    document.body.classList.remove('popup-open');
    document.removeEventListener('keydown', onEscPressChallangeParticipant);
  };
  
  for (var i = 0, len = exchangeFreelanceChallangeParticipant.length; i < len; i++) {
    exchangeFreelanceChallangeParticipant[i].addEventListener('click', function (evt) {
      popupChallangeParticipant.classList.remove('hidden');
      popupChallangeParticipant.classList.add('popup--open');
      document.body.classList.add('popup-open');
      
      document.addEventListener('keydown', onEscPressChallangeParticipant);
    });
  };
})();