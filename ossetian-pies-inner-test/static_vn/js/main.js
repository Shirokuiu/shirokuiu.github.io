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
	
	// .my-inner-cart__composition-slider
	
	(function () {
	  var slider = document.querySelector('.my-inner-cart__composition-slider');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".my-inner-cart__composition-slider").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        dots: true,
	        responsive: {
	          1850: {
	            items: 7
	          },
	          1670: {
	            items: 6
	          },
	          1050: {
	            items: 5
	          },
	          860: {
	            items: 4
	          },
	          630: {
	            items: 3,
	            dots: false
	          },
	          460: {
	            items: 2,
	            dots: false
	
	          },
	          320: {
	            items: 1,
	            dots: false
	          }
	        }
	      });
	    });
	
	    $('.fotorama').fotorama({
	      width: '100%',
	      ratio: '20/12',
	      fit: 'cover',
	      thumbborderwidth: 8,
	      thumbmargin: 25
	    });
	  }
	})();
  
  // calculate inner-cart
  (function () {
    var select = document.querySelector('.my-inner-cart__prices-select-list');
    
    if (select !== null) {
      var selectItems = select.querySelectorAll('.my-inner-cart__prices-select-items');
      var cartPrice = document.querySelector('.my-inner-cart__prices-select-total-price');
      var calculate = document.querySelector('.my-inner-cart__prices-select-calculate');
      var myCart = document.querySelector('.my-inner-cart__prices-select-wrap');

      for (var i = 0, len = selectItems.length; i < len; i++) {
        if (selectItems[i].classList.contains('my-inner-cart__prices-select-items--check')) {
          myCart.dataset.currentPrice = selectItems[i].dataset.price;
        }
      };
      
      select.addEventListener('click', function (evt) {
        var item = evt.target.closest('.my-inner-cart__prices-select-items');
        var itCart = this.closest('.my-inner-cart__prices-select-wrap');
        var itVal = itCart.querySelector('.my-inner-cart__prices-select-calculate-val');
        
        if (item) {
          if (!(item.classList.contains('my-inner-cart__prices-select-items--check'))) {
            for (var i = 0, len = selectItems.length; i < len; i++) {
              selectItems[i].classList.remove('my-inner-cart__prices-select-items--check')
            };
            item.classList.add('my-inner-cart__prices-select-items--check');
          };
          cartPrice.textContent = item.dataset.price;
          myCart.dataset.currentPrice = item.dataset.price;
          itVal.textContent = 1;
        }
      });
      
      document.addEventListener('DOMContentLoaded', function () {
        var basket = document.querySelector('.basket');
        var basketPrice = basket.querySelector('.summ');
        
        calculate.addEventListener('click', function (evt) {
          var minus = evt.target.closest('.my-inner-cart__prices-select-calculate-button--minus');
          var val = this.querySelector('.my-inner-cart__prices-select-calculate-val');
          var plus = evt.target.closest('.my-inner-cart__prices-select-calculate-button--plus');
          var add = evt.target.closest('.my-inner-cart__prices-select-calculate-add');

          if (minus) {
            if (parseInt(val.textContent, 10) > 1) {
              val.textContent = parseInt(val.textContent, 10) - 1;
              cartPrice.textContent = parseInt(cartPrice.textContent, 10) - parseInt(myCart.dataset.currentPrice, 10);
            }
          };

          if (plus) {
            val.textContent = parseInt(val.textContent, 10) + 1;
            cartPrice.textContent = parseInt(cartPrice.textContent, 10) + parseInt(myCart.dataset.currentPrice, 10);
          };

          if (add) {
            basketPrice.textContent = parseInt(basketPrice.textContent, 10) + parseInt(cartPrice.textContent, 10);
          };
        });
      });
    };
    
  })();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmUzMjdkYzUwNWU2Njk1ZTBiZmEiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwic2xpZGVUcmFuc2l0aW9uIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwibmF2IiwiZG90cyIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImZvdG9yYW1hIiwid2lkdGgiLCJyYXRpbyIsImZpdCIsInRodW1iYm9yZGVyd2lkdGgiLCJ0aHVtYm1hcmdpbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0EsRUFBQyxZQUFZO0FBQ1gsT0FBSUEsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixvQ0FBdkIsQ0FBYjs7QUFFQSxPQUFJRixXQUFXLElBQWYsRUFBcUI7QUFDbkJHLE9BQUVGLFFBQUYsRUFBWUcsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLG9DQUFGLEVBQXdDRSxXQUF4QyxDQUFvRDtBQUNsREMsMEJBQWlCLE1BRGlDO0FBRWxEQyxxQkFBWSxHQUZzQztBQUdsREMsbUJBQVUsS0FId0M7QUFJbERDLGNBQUssSUFKNkM7QUFLbERDLGVBQU0sSUFMNEM7QUFNbERDLHFCQUFZO0FBQ1YsaUJBQU07QUFDSkMsb0JBQU87QUFESCxZQURJO0FBSVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQUpJO0FBT1YsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVBJO0FBVVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQVZLO0FBYVYsZ0JBQUs7QUFDSEEsb0JBQU8sQ0FESjtBQUVIRixtQkFBTTtBQUZILFlBYks7QUFpQlYsZ0JBQUs7QUFDSEUsb0JBQU8sQ0FESjtBQUVIRixtQkFBTTs7QUFGSCxZQWpCSztBQXNCVixnQkFBSztBQUNIRSxvQkFBTyxDQURKO0FBRUhGLG1CQUFNO0FBRkg7QUF0Qks7QUFOc0MsUUFBcEQ7QUFrQ0QsTUFuQ0Q7O0FBcUNBUCxPQUFFLFdBQUYsRUFBZVUsUUFBZixDQUF3QjtBQUN0QkMsY0FBTyxNQURlO0FBRXRCQyxjQUFPLE9BRmU7QUFHdEJDLFlBQUssT0FIaUI7QUFJdEJDLHlCQUFrQixDQUpJO0FBS3RCQyxvQkFBYTtBQUxTLE1BQXhCO0FBT0Q7QUFDRixFQWpERCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTMyN2RjNTA1ZTY2OTVlMGJmYSIsIid1c2Ugc3RyaWN0JztcblxuLy8gLm15LWlubmVyLWNhcnRfX2NvbXBvc2l0aW9uLXNsaWRlclxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1pbm5lci1jYXJ0X19jb21wb3NpdGlvbi1zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5teS1pbm5lci1jYXJ0X19jb21wb3NpdGlvbi1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBzbGlkZVRyYW5zaXRpb246ICdlYXNlJyxcbiAgICAgICAgc21hcnRTcGVlZDogMjAwLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE4NTA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA3XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxNjcwOiB7XG4gICAgICAgICAgICBpdGVtczogNlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTA1MDoge1xuICAgICAgICAgICAgaXRlbXM6IDVcbiAgICAgICAgICB9LFxuICAgICAgICAgIDg2MDoge1xuICAgICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDYzMDoge1xuICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgNDYwOiB7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgJCgnLmZvdG9yYW1hJykuZm90b3JhbWEoe1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHJhdGlvOiAnMjAvMTInLFxuICAgICAgZml0OiAnY292ZXInLFxuICAgICAgdGh1bWJib3JkZXJ3aWR0aDogOCxcbiAgICAgIHRodW1ibWFyZ2luOiAyNVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=