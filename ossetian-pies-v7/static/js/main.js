/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	// nav slider
	
	(function () {
	  var slider = document.querySelector('.main-nav__slider');
	  var dateInput = document.querySelector('.filters__date-input');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".main-nav__slider").owlCarousel({
	        slideTransition: 'ease',
	        stagePadding: 20,
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        responsive: {
	          1800: {
	            items: 9,
	            margin: 50
	          },
	          1330: {
	            items: 6,
	            margin: 40
	          },
	          1000: {
	            items: 3,
	            margin: 40
	          },
	          500: {
	            items: 2,
	            margin: 40
	          },
	          320: {
	            items: 1,
	            margin: 40
	          }
	        }
	      });
	
	      if (dateInput !== null) {
	        $('.filters__date-input').datepicker({
	          language: 'ru-RU',
	          autoPick: true,
	          format: 'dd/mm/yyyy'
	        });
	      }
	    });
	  }
	})();
	
	// select time
	(function () {
	  var select = document.querySelectorAll('.select-js');
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var selectItem = this.querySelectorAll('.select-child-js');
	      var selectItemTarget = evt.target.closest('.select-child-js');;
	
	      if (selectItemTarget) {
	        if (!selectItemTarget.classList.contains('active')) {
	          for (var j = 0, jlen = selectItem.length; j < jlen; j++) {
	            selectItem[j].classList.remove('active');
	          }
	          selectItemTarget.classList.add('active');
	        }
	      }
	    });
	  }
	})();
	
	// pies slider
	(function () {
	  var slider = document.querySelector('.filters__pies-number-slider');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".filters__pies-number-slider").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        responsive: {
	          1800: {
	            stagePadding: 10,
	            items: 13,
	            margin: 20
	          },
	          1500: {
	            stagePadding: 0,
	            items: 8,
	            margin: 0
	          },
	          1300: {
	            stagePadding: 0,
	            items: 8,
	            margin: 20
	          },
	          1000: {
	            stagePadding: 0,
	            items: 8,
	            margin: 0
	          },
	          500: {
	            items: 6
	          },
	          375: {
	            items: 4
	          },
	          320: {
	            items: 4
	          }
	        }
	      });
	    });
	  };
	})();
	
	// guest slider
	(function () {
	  var rangeGuest = document.querySelector('.filters__guest-number-slider-wrap');
	
	  if (rangeGuest !== null) {
	    $(document).ready(function () {
	      $(".filters__guest-number-slider-wrap #ex6").slider();
	      $(".filters__guest-number-slider-wrap #ex6").on("slide", function (slideEvt) {
	        $(".filters__guest-number-slider-wrap #ex6SliderVal").text(slideEvt.value);
	      });
	    });
	  }
	})();
	
	// price slider
	(function () {
	  var rangePrice = document.querySelector('.filters__price-number-slider-wrap');
	
	  if (rangePrice !== null) {
	    $(document).ready(function () {
	      $(".filters__price-number-slider-wrap #ex6").slider();
	      $(".filters__price-number-slider-wrap #ex6").on("slide", function (slideEvt) {
	        $(".filters__price-number-slider-wrap #ex6SliderVal").text(slideEvt.value);
	      });
	    });
	  }
	})();
	
	// Определяет находится ли элемент в поле видимости
	(function () {
	  window.isVissible = function (elem, actionTrue, actionFalse) {
	    var element = document.querySelector(elem);
	
	    var visible = function visible(target) {
	      var targetPosition = {
	        top: window.pageYOffset + target.getBoundingClientRect().top,
	        left: window.pageXOffset + target.getBoundingClientRect().left,
	        right: window.pageXOffset + target.getBoundingClientRect().right,
	        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	      },
	          windowPosition = {
	        top: window.pageYOffset,
	        left: window.pageXOffset,
	        right: window.pageXOffset + document.documentElement.clientWidth,
	        bottom: window.pageYOffset + document.documentElement.clientHeight
	      };
	
	      if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
	
	        actionTrue();
	      } else {
	        actionFalse();
	      }
	    };
	
	    window.addEventListener('scroll', function () {
	      visible(element);
	    });
	
	    visible(element);
	  };
	})();
	
	// basket
	(function () {
	  var basket = document.querySelector('.basket');
	
	  if (basket !== null) {
	    window.isVissible('.footer-content', function () {
	      basket.classList.add('basket--static');
	    }, function () {
	      basket.classList.remove('basket--static');
	    });
	  }
	})();
	
	// order-select
	(function () {
	  var select = document.querySelector('.order__contacts-delivery-select');
	
	  select.addEventListener('click', function (evt) {
	    var val = this.querySelector('.order__contacts-delivery-select-val');
	    var option = evt.target.closest('.order__contacts-delivery-select-options p');
	
	    this.classList.toggle('order__contacts-delivery-select--open');
	
	    if (option) {
	      val.textContent = option.textContent;
	    }
	  });
	})();
	
	// order-inputs-state
	(function () {
	  var userInputWrap = document.querySelector('.order__contacts-user');
	  var deliveryInputWrap = document.querySelector('.order__contacts-delivery');
	  var deliveryInput = deliveryInputWrap.querySelector('.order__contacts-delivery-address');
	  var paymentInput = document.querySelector('.order__contacts-payment');
	  var resultInput = document.querySelector('.order__result-wrap');
	
	  userInputWrap.addEventListener('click', function (evt) {
	    var targetInput = evt.target.closest('.order__contacts-user-input-wrap input');
	
	    if (targetInput) {
	      targetInput.addEventListener('input', function () {
	        deliveryInputWrap.classList.remove('order__contacts-delivery--disable');
	      });
	    }
	  });
	
	  deliveryInput.addEventListener('input', function () {
	    paymentInput.classList.remove('order__contacts-payment--disable');
	    resultInput.classList.remove('order__result-wrap--disable');
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDBhN2Y4M2UyYzFhYTkyZGJlMGIiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGVJbnB1dCIsIiQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwic2xpZGVUcmFuc2l0aW9uIiwic3RhZ2VQYWRkaW5nIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwibmF2IiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwibWFyZ2luIiwiZGF0ZXBpY2tlciIsImxhbmd1YWdlIiwiYXV0b1BpY2siLCJmb3JtYXQiLCJzZWxlY3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbiIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJzZWxlY3RJdGVtIiwic2VsZWN0SXRlbVRhcmdldCIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImoiLCJqbGVuIiwicmVtb3ZlIiwiYWRkIiwicmFuZ2VHdWVzdCIsIm9uIiwic2xpZGVFdnQiLCJ0ZXh0IiwidmFsdWUiLCJyYW5nZVByaWNlIiwid2luZG93IiwiaXNWaXNzaWJsZSIsImVsZW0iLCJhY3Rpb25UcnVlIiwiYWN0aW9uRmFsc2UiLCJlbGVtZW50IiwidmlzaWJsZSIsInRhcmdldFBvc2l0aW9uIiwidG9wIiwicGFnZVlPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJyaWdodCIsImJvdHRvbSIsIndpbmRvd1Bvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJiYXNrZXQiLCJ2YWwiLCJvcHRpb24iLCJ0b2dnbGUiLCJ0ZXh0Q29udGVudCIsInVzZXJJbnB1dFdyYXAiLCJkZWxpdmVyeUlucHV0V3JhcCIsImRlbGl2ZXJ5SW5w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LEdBQWtCRixPQUFPRSxXQUF6QjtBQUNEO0FBQ0YsSUFURDtBQVVELEVBYkQ7O0FBZUE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJQyxnQkFBZ0JqRSxTQUFTQyxhQUFULENBQXVCLHVCQUF2QixDQUFwQjtBQUNBLE9BQUlpRSxvQkFBb0JsRSxTQUFTQyxhQUFULENBQXVCLDJCQUF2QixDQUF4QjtBQUNBLE9BQUlrRSxnQkFBZ0JELGtCQUFrQmpFLGFBQWxCLENBQWdDLG1DQUFoQyxDQUFwQjtBQUNBLE9BQUltRSxlQUFlcEUsU0FBU0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBbkI7QUFDQSxPQUFJb0UsY0FBY3JFLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWxCOztBQUVBZ0UsaUJBQWMxQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFVQyxHQUFWLEVBQWU7QUFDckQsU0FBSThDLGNBQWM5QyxJQUFJRyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsd0NBQW5CLENBQWxCOztBQUVBLFNBQUkwQyxXQUFKLEVBQWlCO0FBQ2ZBLG1CQUFZL0MsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBWTtBQUNoRDJDLDJCQUFrQnJDLFNBQWxCLENBQTRCSSxNQUE1QixDQUFtQyxtQ0FBbkM7QUFDRCxRQUZEO0FBR0Q7QUFDRixJQVJEOztBQVVBa0MsaUJBQWM1QyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFZO0FBQ2xENkMsa0JBQWF2QyxTQUFiLENBQXVCSSxNQUF2QixDQUE4QixrQ0FBOUI7QUFDQW9DLGlCQUFZeEMsU0FBWixDQUFzQkksTUFBdEIsQ0FBNkIsNkJBQTdCO0FBQ0QsSUFIRDtBQUlELEVBckJELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQwYTdmODNlMmMxYWE5MmRiZTBiIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBuYXYgc2xpZGVyXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19zbGlkZXInKTtcbiAgdmFyIGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzX19kYXRlLWlucHV0Jyk7XG4gIFxuICBpZiAoc2xpZGVyICE9PSBudWxsKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIubWFpbi1uYXZfX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIHNsaWRlVHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgICAgICBzdGFnZVBhZGRpbmc6IDIwLFxuICAgICAgICBzbWFydFNwZWVkOiAyMDAsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgMTgwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDksXG4gICAgICAgICAgICBtYXJnaW46IDUwXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMzMwOiB7XG4gICAgICAgICAgICBpdGVtczogNixcbiAgICAgICAgICAgIG1hcmdpbjogNDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgbWFyZ2luOiA0MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgNTAwOiB7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIG1hcmdpbjogNDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICBtYXJnaW46IDQwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBcbiAgICAgIGlmIChkYXRlSW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgJCgnLmZpbHRlcnNfX2RhdGUtaW5wdXQnKS5kYXRlcGlja2VyKHtcbiAgICAgICAgICBsYW5ndWFnZTogJ3J1LVJVJyxcbiAgICAgICAgICBhdXRvUGljazogdHJ1ZSxcbiAgICAgICAgICBmb3JtYXQ6ICdkZC9tbS95eXl5J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gc2VsZWN0IHRpbWVcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LWpzJyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2VsZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIHNlbGVjdEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QtY2hpbGQtanMnKTtcbiAgICAgIHZhciBzZWxlY3RJdGVtVGFyZ2V0ID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0LWNoaWxkLWpzJyk7O1xuXG4gICAgICBpZiAoc2VsZWN0SXRlbVRhcmdldCkge1xuICAgICAgICBpZiAoIShzZWxlY3RJdGVtVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSBzZWxlY3RJdGVtLmxlbmd0aDsgaiA8IGpsZW47IGorKykge1xuICAgICAgICAgICAgc2VsZWN0SXRlbVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0SXRlbVRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9KTtcbiAgfVxufSkoKTtcblxuLy8gcGllcyBzbGlkZXJcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyc19fcGllcy1udW1iZXItc2xpZGVyJyk7XG4gIFxuICBpZiAoc2xpZGVyICE9PSBudWxsKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuZmlsdGVyc19fcGllcy1udW1iZXItc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAxODAwOiB7XG4gICAgICAgICAgICBzdGFnZVBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgaXRlbXM6IDEzLFxuICAgICAgICAgICAgbWFyZ2luOiAyMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTUwMDoge1xuICAgICAgICAgICAgc3RhZ2VQYWRkaW5nOiAwLFxuICAgICAgICAgICAgaXRlbXM6IDgsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEzMDA6IHtcbiAgICAgICAgICAgIHN0YWdlUGFkZGluZzogMCxcbiAgICAgICAgICAgIGl0ZW1zOiA4LFxuICAgICAgICAgICAgbWFyZ2luOiAyMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgc3RhZ2VQYWRkaW5nOiAwLFxuICAgICAgICAgICAgaXRlbXM6IDgsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDUwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIDM3NToge1xuICAgICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSkoKTtcblxuLy8gZ3Vlc3Qgc2xpZGVyXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgcmFuZ2VHdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzX19ndWVzdC1udW1iZXItc2xpZGVyLXdyYXAnKTtcbiAgXG4gIGlmIChyYW5nZUd1ZXN0ICE9PSBudWxsKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuZmlsdGVyc19fZ3Vlc3QtbnVtYmVyLXNsaWRlci13cmFwICNleDZcIikuc2xpZGVyKCk7XG4gICAgICAkKFwiLmZpbHRlcnNfX2d1ZXN0LW51bWJlci1zbGlkZXItd3JhcCAjZXg2XCIpLm9uKFwic2xpZGVcIiwgZnVuY3Rpb24oc2xpZGVFdnQpIHtcbiAgICAgICAgICAkKFwiLmZpbHRlcnNfX2d1ZXN0LW51bWJlci1zbGlkZXItd3JhcCAjZXg2U2xpZGVyVmFsXCIpLnRleHQoc2xpZGVFdnQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIHByaWNlIHNsaWRlclxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhbmdlUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyc19fcHJpY2UtbnVtYmVyLXNsaWRlci13cmFwJyk7XG4gIFxuICBpZiAocmFuZ2VQcmljZSAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLmZpbHRlcnNfX3ByaWNlLW51bWJlci1zbGlkZXItd3JhcCAjZXg2XCIpLnNsaWRlcigpO1xuICAgICAgJChcIi5maWx0ZXJzX19wcmljZS1udW1iZXItc2xpZGVyLXdyYXAgI2V4NlwiKS5vbihcInNsaWRlXCIsIGZ1bmN0aW9uKHNsaWRlRXZ0KSB7XG4gICAgICAgICAgJChcIi5maWx0ZXJzX19wcmljZS1udW1iZXItc2xpZGVyLXdyYXAgI2V4NlNsaWRlclZhbFwiKS50ZXh0KHNsaWRlRXZ0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyDQntC/0YDQtdC00LXQu9GP0LXRgiDQvdCw0YXQvtC00LjRgtGB0Y8g0LvQuCDRjdC70LXQvNC10L3RgiDQsiDQv9C+0LvQtSDQstC40LTQuNC80L7RgdGC0LhcbihmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5pc1Zpc3NpYmxlID0gZnVuY3Rpb24gKGVsZW0sIGFjdGlvblRydWUsIGFjdGlvbkZhbHNlKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIFxuICAgIHZhciB2aXNpYmxlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgICByaWdodDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0LFxuICAgICAgICBib3R0b206IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b21cbiAgICAgIH0sXG4gICAgICB3aW5kb3dQb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiB3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBpZiAodGFyZ2V0UG9zaXRpb24uYm90dG9tID4gd2luZG93UG9zaXRpb24udG9wICYmIFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uLnRvcCA8IHdpbmRvd1Bvc2l0aW9uLmJvdHRvbSAmJiBcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbi5yaWdodCA+IHdpbmRvd1Bvc2l0aW9uLmxlZnQgJiYgXG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb24ubGVmdCA8IHdpbmRvd1Bvc2l0aW9uLnJpZ2h0KSB7XG5cbiAgICAgICAgICBhY3Rpb25UcnVlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25GYWxzZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICB2aXNpYmxlKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgICB2aXNpYmxlKGVsZW1lbnQpOyAgXG4gIH1cbn0pKCk7XG5cbi8vIGJhc2tldFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXQnKTtcbiAgXG4gIGlmIChiYXNrZXQgIT09IG51bGwpIHtcbiAgICB3aW5kb3cuaXNWaXNzaWJsZSgnLmZvb3Rlci1jb250ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgYmFza2V0LmNsYXNzTGlzdC5hZGQoJ2Jhc2tldC0tc3RhdGljJyk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgYmFza2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jhc2tldC0tc3RhdGljJyk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIG9yZGVyLXNlbGVjdFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcl9fY29udGFjdHMtZGVsaXZlcnktc2VsZWN0Jyk7XG4gIFxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLm9yZGVyX19jb250YWN0cy1kZWxpdmVyeS1zZWxlY3QtdmFsJyk7XG4gICAgdmFyIG9wdGlvbiA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLm9yZGVyX19jb250YWN0cy1kZWxpdmVyeS1zZWxlY3Qtb3B0aW9ucyBwJyk7XG4gICAgXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcmRlcl9fY29udGFjdHMtZGVsaXZlcnktc2VsZWN0LS1vcGVuJyk7XG4gICAgXG4gICAgaWYgKG9wdGlvbikge1xuICAgICAgdmFsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG4vLyBvcmRlci1pbnB1dHMtc3RhdGVcbihmdW5jdGlvbiAoKSB7XG4gIHZhciB1c2VySW5wdXRXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyX19jb250YWN0cy11c2VyJyk7IFxuICB2YXIgZGVsaXZlcnlJbnB1dFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJfX2NvbnRhY3RzLWRlbGl2ZXJ5Jyk7XG4gIHZhciBkZWxpdmVyeUlucHV0ID0gZGVsaXZlcnlJbnB1dFdyYXAucXVlcnlTZWxlY3RvcignLm9yZGVyX19jb250YWN0cy1kZWxpdmVyeS1hZGRyZXNzJyk7XG4gIHZhciBwYXltZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJfX2NvbnRhY3RzLXBheW1lbnQnKTtcbiAgdmFyIHJlc3VsdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyX19yZXN1bHQtd3JhcCcpO1xuICBcbiAgdXNlcklucHV0V3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgdGFyZ2V0SW5wdXQgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5vcmRlcl9fY29udGFjdHMtdXNlci1pbnB1dC13cmFwIGlucHV0Jyk7XG4gICAgXG4gICAgaWYgKHRhcmdldElucHV0KSB7XG4gICAgICB0YXJnZXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsaXZlcnlJbnB1dFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnb3JkZXJfX2NvbnRhY3RzLWRlbGl2ZXJ5LS1kaXNhYmxlJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBcbiAgZGVsaXZlcnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwYXltZW50SW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnb3JkZXJfX2NvbnRhY3RzLXBheW1lbnQtLWRpc2FibGUnKTtcbiAgICByZXN1bHRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdvcmRlcl9fcmVzdWx0LXdyYXAtLWRpc2FibGUnKTtcbiAgfSk7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==