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
	
	// main-nav
	
	(function () {
	  var button = document.querySelector('.user-block__dropdown-button-wrap');
	  var menu = document.querySelector('.main-nav');
	
	  button.addEventListener('click', function () {
	    this.classList.toggle('user-block__dropdown-button-wrap--open');
	    menu.classList.toggle('hidden');
	  });
	})();
	
	// selec-cart
	(function () {
	  var select = document.querySelectorAll('.cart__select-price');
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var item = evt.target.closest('.cart__select-price-description-items');
	      var val = this.querySelector('.cart__select-price-val');
	      var valWeight = val.querySelector('.cart__select-price-weight');
	      var valSize = val.querySelector('.cart__select-price-size');
	      var valPrice = val.querySelector('.cart__select-price-total');
	
	      this.classList.toggle('cart__select-price--open');
	
	      if (item) {
	        var itemWeight = item.querySelector('.cart__select-price-weight');
	        var itemSize = item.querySelector('.cart__select-price-size');
	        var itemPrice = item.querySelector('.cart__select-price-total');
	
	        valWeight.textContent = parseInt(itemWeight.textContent, 10);
	        valSize.textContent = parseInt(itemSize.textContent, 10);
	        valPrice.textContent = parseInt(itemPrice.textContent, 10);
	      }
	    });
	  }
	})();
	
	// cart
	(function () {
	  var cart = document.querySelectorAll('.cart-js');
	  var prices = document.querySelectorAll('.prices-js');
	  var incDec = document.querySelectorAll('.incDec-js');
	  var basket = document.querySelector('.basket-js');
	  var basketCount = basket.querySelectorAll('.basketCount-js');
	  var basketTotalPrice = basket.querySelectorAll('.basketTotalPrice-js');
	  var basketPage = document.querySelector('.table--basket');
	  var orderTotalPrice = document.querySelector('.basket-order__total-price');
	
	  basket.setAttribute('data-count', '0');
	  basket.setAttribute('data-total-price', '0');
	
	  if (basketPage !== null) {
	    basket.setAttribute('data-count', '5');
	    basket.setAttribute('data-total-price', '3250');
	    for (var i = 0, len = basketCount.length; i < len; i++) {
	      basketCount[i].textContent = basket.dataset.count;
	      basketTotalPrice[i].textContent = basket.dataset.totalPrice;
	    }
	  }
	
	  for (var i = 0, len = incDec.length; i < len; i++) {
	    incDec[i].addEventListener('click', function (evt) {
	      var dec = evt.target.closest('.dec-js');
	      var val = this.querySelector('.val-js');
	      var inc = evt.target.closest('.inc-js');
	
	      if (dec) {
	        if (parseInt(val.textContent, 10) > 1) {
	          val.textContent = parseInt(val.textContent, 10) - 1;
	        }
	      }
	
	      if (inc) {
	        val.textContent = parseInt(val.textContent, 10) + 1;
	      }
	    });
	  }
	
	  for (var i = 0, len = prices.length; i < len; i++) {
	    var pricesWeight = prices[i].querySelectorAll('.price-weight-js');
	    var pricesBasic = prices[i].querySelectorAll('.price-basic-js');
	    var pricesChild = prices[i].querySelectorAll('.prices-child-js');
	
	    prices[i].setAttribute('data-current-price', '');
	
	    for (var j = 0, jLen = pricesChild.length; j < jLen; j++) {
	      pricesChild[j].setAttribute('data-price', '');
	      pricesChild[j].dataset.price = pricesBasic[j].dataset.price;
	
	      if (pricesChild[j].classList.contains('active')) {
	        prices[i].dataset.currentPrice = pricesChild[j].dataset.price;
	      }
	    }
	
	    for (var j = 0, jLen = pricesWeight.length; j < jLen; j++) {
	      pricesWeight[j].textContent = pricesWeight[j].dataset.weight;
	    }
	
	    for (var j = 0, jLen = pricesBasic.length; j < jLen; j++) {
	      pricesBasic[j].textContent = pricesBasic[j].dataset.price;
	    }
	
	    prices[i].addEventListener('click', function (evt) {
	      var pricesChildSelect = evt.target.closest('.prices-child-js');
	      var pricesChildrenSelect = this.querySelectorAll('.prices-child-js');
	
	      if (pricesChildSelect) {
	        if (!pricesChildSelect.classList.contains('active')) {
	          for (var j = 0, jLen = pricesChildrenSelect.length; j < jLen; j++) {
	            pricesChildrenSelect[j].classList.remove('active');
	          }
	        };
	        pricesChildSelect.classList.add('active');
	        this.dataset.currentPrice = pricesChildSelect.dataset.price;
	      }
	    });
	  }
	
	  for (var i = 0, len = cart.length; i < len; i++) {
	    cart[i].setAttribute('data-count', '1');
	    cart[i].setAttribute('data-total-price', '0');
	    for (var j = 0, jLen = prices.length; j < jLen; j++) {
	      cart[i].dataset.totalPrice = prices[j].dataset.currentPrice;
	    }
	    cart[i].addEventListener('click', function (evt) {
	      var cartSelectPriceWrap = this.querySelector('.prices-js');
	      var cartSelectPrice = evt.target.closest('.prices-js');
	      var cartIncDecWrap = evt.target.closest('.incDec-js');
	      var cartDec = evt.target.closest('.dec-js');
	      var cartIncDecVal = this.querySelector('.val-js');
	      var cartInc = evt.target.closest('.inc-js');
	      var cartAdd = evt.target.closest('.cartAdd-js');
	      var visualPrice = this.querySelectorAll('.visualPrice-js');
	      var remove = evt.target.closest('.remove-js');
	
	      if (remove) {
	        this.remove();
	        basket.dataset.count = parseInt(basket.dataset.count, 10) - parseInt(this.dataset.count, 10);
	        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) - parseInt(this.dataset.totalPrice, 10);
	        for (var j = 0, jlen = basketCount.length; j < jlen; j++) {
	          basketCount[j].textContent = basket.dataset.count;
	          basketTotalPrice[j].textContent = basket.dataset.totalPrice;
	        }
	        orderTotalPrice.textContent = basket.dataset.totalPrice;
	      }
	
	      if (cartSelectPrice) {
	        this.dataset.totalPrice = cartSelectPrice.dataset.currentPrice;
	        if (cartIncDecVal !== null) {
	          cartIncDecVal.textContent = 1;
	        }
	      }
	
	      if (cartDec) {
	        if (parseInt(this.dataset.count, 10) > 1) {
	          this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) - parseInt(cartSelectPriceWrap.dataset.currentPrice, 10);
	          this.dataset.count = parseInt(this.dataset.count, 10) - 1;
	          for (var j = 0, jlen = visualPrice.length; j < jlen; j++) {
	            visualPrice[j].textContent = this.dataset.totalPrice;
	          }
	          if (basketPage !== null) {
	            basket.dataset.count = parseInt(basket.dataset.count, 10) - 1;
	            basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) - 650;
	            for (var j = 0, jlen = basketCount.length; j < jlen; j++) {
	              basketCount[j].textContent = basket.dataset.count;
	              basketTotalPrice[j].textContent = basket.dataset.totalPrice;
	            }
	            orderTotalPrice.textContent = basket.dataset.totalPrice;
	          }
	        }
	      }
	
	      if (cartInc) {
	        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(cartSelectPriceWrap.dataset.currentPrice, 10);
	        this.dataset.count = parseInt(this.dataset.count, 10) + 1;
	        for (var j = 0, jlen = visualPrice.length; j < jlen; j++) {
	          visualPrice[j].textContent = this.dataset.totalPrice;
	        }
	        if (basketPage !== null) {
	          basket.dataset.count = parseInt(basket.dataset.count, 10) + 1;
	          basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + 650;
	          for (var j = 0, jlen = basketCount.length; j < jlen; j++) {
	            basketCount[j].textContent = basket.dataset.count;
	            basketTotalPrice[j].textContent = basket.dataset.totalPrice;
	          }
	          orderTotalPrice.textContent = basket.dataset.totalPrice;
	        }
	      }
	
	      if (cartAdd) {
	        basket.dataset.count = parseInt(basket.dataset.count, 10) + parseInt(this.dataset.count, 10);
	        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(this.dataset.totalPrice, 10);
	        for (var j = 0, jLen = basketCount.length; j < jLen; j++) {
	          basketCount[j].textContent = basket.dataset.count;
	        }
	        for (var j = 0, jLen = basketTotalPrice.length; j < jLen; j++) {
	          basketTotalPrice[j].textContent = basket.dataset.totalPrice;
	        }
	      }
	    });
	  }
	})();
	
	// main-nav
	(function () {
	  var nav = document.querySelector('.main-nav');
	  var buttonOpen = document.querySelector('.menu-button');
	  var buttonClose = nav.querySelector('.main-nav__exit');
	
	  buttonOpen.addEventListener('click', function () {
	    nav.classList.toggle('main-nav--close');
	  });
	
	  buttonClose.addEventListener('click', function () {
	    nav.classList.add('main-nav--close');
	  });
	})();
	
	// features-slider
	(function () {
	  var slider = document.querySelector('.features__slider');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".features__slider").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        responsive: {
	          1800: {
	            items: 7
	          },
	          1330: {
	            items: 6
	          },
	          1000: {
	            items: 3
	          },
	          730: {
	            items: 3
	          },
	          500: {
	            items: 2
	          },
	          320: {
	            items: 1
	          }
	        }
	      });
	    });
	  }
	})();
	
	// composition-slider
	(function () {
	  var slider = document.querySelector('.composition__slider');
	
	  if (slider !== null) {
	    var compositionSlide = slider.querySelectorAll('.composition__slider-slide');
	
	    for (var i = 0, len = compositionSlide.length; i < len; i++) {
	      compositionSlide[i].addEventListener('mouseover', function (evt) {
	        var compositionLink = evt.target.closest('.composition__slider-link');
	        var compositionImg = this.querySelector('.composition__slider-img');
	
	        if (compositionLink) {
	          compositionImg.classList.add('composition__slider-img--hover');
	          compositionImg.classList.remove('composition__slider-img--no-hover');
	        }
	      });
	
	      compositionSlide[i].addEventListener('mouseout', function (evt) {
	        var compositionLink = evt.target.closest('.composition__slider-link');
	        var compositionImg = this.querySelector('.composition__slider-img');
	
	        if (compositionLink) {
	          compositionImg.classList.remove('composition__slider-img--hover');
	          compositionImg.classList.add('composition__slider-img--no-hover');
	        }
	      });
	    }
	
	    $(document).ready(function () {
	      $(".composition__slider").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        responsive: {
	          1800: {
	            items: 7
	          },
	          1410: {
	            items: 6
	          },
	          1000: {
	            items: 3
	          },
	          820: {
	            items: 3
	          },
	          550: {
	            items: 2
	          },
	          320: {
	            items: 1
	          }
	        }
	      });
	    });
	  }
	})();
	
	// popular-good-slider
	(function () {
	  var slider = document.querySelector('.popular-good__slider');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".popular-good__slider").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        responsive: {
	          1840: {
	            items: 6
	          },
	          1600: {
	            items: 5
	          },
	          1250: {
	            items: 4
	          },
	          1000: {
	            items: 3
	          },
	          950: {
	            items: 3
	          },
	          620: {
	            items: 2
	          },
	          320: {
	            items: 1
	          }
	        }
	      });
	    });
	  }
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFkMWE4MjllMmU3NWM4ODZkMGIiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2VsZWN0IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJldnQiLCJpdGVtIiwidGFyZ2V0IiwiY2xvc2VzdCIsInZhbCIsInZhbFdlaWdodCIsInZhbFNpemUiLCJ2YWxQcmljZSIsIml0ZW1XZWlnaHQiLCJpdGVtU2l6ZSIsIml0ZW1QcmljZSIsInRleHRDb250ZW50IiwicGFyc2VJbnQiLCJjYXJ0IiwicHJpY2VzIiwiaW5jRGVjIiwiYmFza2V0IiwiYmFza2V0Q291bnQiLCJiYXNrZXRUb3RhbFByaWNlIiwiYmFza2V0UGFnZSIsIm9yZGVyVG90YWxQcmljZSIsInNldEF0dHJpYnV0ZSIsImRhdGFzZXQiLCJjb3VudCIsInRvdGFsUHJpY2UiLCJkZWMiLCJpbmMiLCJwcmljZXNXZWlnaHQiLCJwcmljZXNCYXNpYyIsInByaWNlc0NoaWxkIiwiaiIsImpMZW4iLCJwcmljZSIsImNvbnRhaW5zIiwiY3VycmVudFByaWNlIiwid2VpZ2h0IiwicHJpY2VzQ2hpbGRTZWxlY3QiLCJwcmljZXNDaGlsZHJlblNlbGVjdCIsInJlbW92ZSIsImFkZCIsImNhcnRTZWxlY3RQcmljZVdyYXAiLCJjYXJ0U2VsZWN0UHJpY2UiLCJjYXJ0SW5jRGVjV3JhcCIsImNhcnREZWMiLCJjYXJ0SW5jRGVjVmFsIiwiY2FydEluYyIsImNhcnRBZGQiLCJ2aXN1YWxQcmljZSIsImpsZW4iLCJuYXYiLCJidXR0b25PcGVuIiwiYnV0dG9uQ2xvc2UiLCJzbGlkZXIiLCIkIiwicmVhZHkiLCJvd2xDYXJvdXNlbCIsInNsaWRlVHJhbnNpdGlvbiIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheSIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImNvbXBvc2l0aW9uU2xpZGUiLCJjb21wb3NpdGlvbkxpbmsiLCJjb21wb3NpdGlvbkltZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0EsRUFBQyxZQUFZO0FBQ1gsT0FBSUEsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixtQ0FBdkIsQ0FBYjtBQUNBLE9BQUlDLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWDs7QUFFQUYsVUFBT0ksZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUMzQyxVQUFLQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0Isd0NBQXRCO0FBQ0FILFVBQUtFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNELElBSEQ7QUFJRCxFQVJEOztBQVVBO0FBQ0EsRUFBQyxZQUFZO0FBQ1gsT0FBSUMsU0FBU04sU0FBU08sZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWI7O0FBRUEsUUFBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTUgsT0FBT0ksTUFBN0IsRUFBcUNGLElBQUlDLEdBQXpDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqREYsWUFBT0UsQ0FBUCxFQUFVTCxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFVUSxHQUFWLEVBQWU7QUFDakQsV0FBSUMsT0FBT0QsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLHVDQUFuQixDQUFYO0FBQ0EsV0FBSUMsTUFBTSxLQUFLZCxhQUFMLENBQW1CLHlCQUFuQixDQUFWO0FBQ0EsV0FBSWUsWUFBWUQsSUFBSWQsYUFBSixD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O0FBQ0hBLG9CQUFPO0FBREo7QUFoQks7QUFMd0IsUUFBdEM7QUEwQkQsTUEzQkQ7QUE0QkQ7QUFDRixFQTFERDs7QUE0REE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJUixTQUFTL0QsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjs7QUFFQSxPQUFJOEQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFaEUsUUFBRixFQUFZaUUsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLHVCQUFGLEVBQTJCRSxXQUEzQixDQUF1QztBQUNyQ0MsMEJBQWlCLE1BRG9CO0FBRXJDQyxxQkFBWSxHQUZ5QjtBQUdyQ0MsbUJBQVUsS0FIMkI7QUFJckNULGNBQUssSUFKZ0M7QUFLckNVLHFCQUFZO0FBQ1YsaUJBQU07QUFDSkMsb0JBQU87QUFESCxZQURJO0FBSVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQUpJO0FBT1YsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVBJO0FBVVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVZJO0FBYVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQWJLO0FBZ0JWLGdCQUFLO0FBQ0hBLG9CQUFPO0FBREosWUFoQks7QUFtQlYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESjtBQW5CSztBQUx5QixRQUF2QztBQTZCRCxNQTlCRDtBQStCRDtBQUNGLEVBcENELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBhZDFhODI5ZTJlNzVjODg2ZDBiIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtYWluLW5hdlxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJsb2NrX19kcm9wZG93bi1idXR0b24td3JhcCcpO1xuICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICBcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgndXNlci1ibG9ja19fZHJvcGRvd24tYnV0dG9uLXdyYXAtLW9wZW4nKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcbn0pKCk7XG5cbi8vIHNlbGVjLWNhcnRcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydF9fc2VsZWN0LXByaWNlJyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2VsZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGl0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0X19zZWxlY3QtcHJpY2UtZGVzY3JpcHRpb24taXRlbXMnKTtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19zZWxlY3QtcHJpY2UtdmFsJyk7XG4gICAgICB2YXIgdmFsV2VpZ2h0ID0gdmFsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19zZWxlY3QtcHJpY2Utd2VpZ2h0Jyk7XG4gICAgICB2YXIgdmFsU2l6ZSA9IHZhbC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXNpemUnKTtcbiAgICAgIHZhciB2YWxQcmljZSA9IHZhbC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXRvdGFsJyk7XG4gICAgICBcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnY2FydF9fc2VsZWN0LXByaWNlLS1vcGVuJyk7XG4gICAgICBcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHZhciBpdGVtV2VpZ2h0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXdlaWdodCcpO1xuICAgICAgICB2YXIgaXRlbVNpemUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19zZWxlY3QtcHJpY2Utc2l6ZScpO1xuICAgICAgICB2YXIgaXRlbVByaWNlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXRvdGFsJyk7XG4gICAgICAgIFxuICAgICAgICB2YWxXZWlnaHQudGV4dENvbnRlbnQgPSBwYXJzZUludChpdGVtV2VpZ2h0LnRleHRDb250ZW50LCAxMCk7XG4gICAgICAgIHZhbFNpemUudGV4dENvbnRlbnQgPSBwYXJzZUludChpdGVtU2l6ZS50ZXh0Q29udGVudCwgMTApO1xuICAgICAgICB2YWxQcmljZS50ZXh0Q29udGVudCA9IHBhcnNlSW50KGl0ZW1QcmljZS50ZXh0Q29udGVudCwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBjYXJ0XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LWpzJyk7XG4gIHZhciBwcmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2VzLWpzJyk7XG4gIHZhciBpbmNEZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5jRGVjLWpzJyk7XG4gIHZhciBiYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0LWpzJyk7XG4gIHZhciBiYXNrZXRDb3VudCA9IGJhc2tldC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0Q291bnQtanMnKTtcbiAgdmFyIGJhc2tldFRvdGFsUHJpY2UgPSBiYXNrZXQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldFRvdGFsUHJpY2UtanMnKTtcbiAgdmFyIGJhc2tldFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtLWJhc2tldCcpO1xuICB2YXIgb3JkZXJUb3RhbFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldC1vcmRlcl9fdG90YWwtcHJpY2UnKTtcbiAgXG4gIGJhc2tldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnLCAnMCcpO1xuICBiYXNrZXQuc2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsLXByaWNlJywgJzAnKTtcbiAgXG4gIGlmIChiYXNrZXRQYWdlICE9PSBudWxsKSB7XG4gICAgYmFza2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcsICc1Jyk7XG4gICAgYmFza2V0LnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1wcmljZScsICczMjUwJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJhc2tldENvdW50Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBiYXNrZXRDb3VudFtpXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgYmFza2V0VG90YWxQcmljZVtpXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgfVxuICB9XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gaW5jRGVjLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaW5jRGVjW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGRlYyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmRlYy1qcycpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnZhbC1qcycpO1xuICAgICAgdmFyIGluYyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmluYy1qcycpO1xuICAgICAgXG4gICAgICBpZiAoZGVjKSB7XG4gICAgICAgIGlmIChwYXJzZUludCh2YWwudGV4dENvbnRlbnQsIDEwKSA+IDEpIHtcbiAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBwYXJzZUludCh2YWwudGV4dENvbnRlbnQsIDEwKSAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGluYykge1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBwYXJzZUludCh2YWwudGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcmljZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcHJpY2VzV2VpZ2h0ID0gcHJpY2VzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZS13ZWlnaHQtanMnKTtcbiAgICB2YXIgcHJpY2VzQmFzaWMgPSBwcmljZXNbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLWJhc2ljLWpzJyk7XG4gICAgdmFyIHByaWNlc0NoaWxkID0gcHJpY2VzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZXMtY2hpbGQtanMnKTtcbiAgICBcbiAgICBwcmljZXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQtcHJpY2UnLCAnJyk7XG4gICAgXG4gICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBwcmljZXNDaGlsZC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgIHByaWNlc0NoaWxkW2pdLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgIHByaWNlc0NoaWxkW2pdLmRhdGFzZXQucHJpY2UgPSBwcmljZXNCYXNpY1tqXS5kYXRhc2V0LnByaWNlO1xuICAgICAgXG4gICAgICBpZiAocHJpY2VzQ2hpbGRbal0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBwcmljZXNbaV0uZGF0YXNldC5jdXJyZW50UHJpY2UgPSBwcmljZXNDaGlsZFtqXS5kYXRhc2V0LnByaWNlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IHByaWNlc1dlaWdodC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgIHByaWNlc1dlaWdodFtqXS50ZXh0Q29udGVudCA9IHByaWNlc1dlaWdodFtqXS5kYXRhc2V0LndlaWdodDtcbiAgICB9XG4gICAgXG4gICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBwcmljZXNCYXNpYy5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgIHByaWNlc0Jhc2ljW2pdLnRleHRDb250ZW50ID0gcHJpY2VzQmFzaWNbal0uZGF0YXNldC5wcmljZTtcbiAgICB9XG4gICAgXG4gICAgcHJpY2VzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIHByaWNlc0NoaWxkU2VsZWN0ID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcucHJpY2VzLWNoaWxkLWpzJyk7XG4gICAgICB2YXIgcHJpY2VzQ2hpbGRyZW5TZWxlY3QgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZXMtY2hpbGQtanMnKTtcbiAgICAgIFxuICAgICAgaWYgKHByaWNlc0NoaWxkU2VsZWN0KSB7XG4gICAgICAgIGlmICghKHByaWNlc0NoaWxkU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBwcmljZXNDaGlsZHJlblNlbGVjdC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICAgIHByaWNlc0NoaWxkcmVuU2VsZWN0W2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJpY2VzQ2hpbGRTZWxlY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuZGF0YXNldC5jdXJyZW50UHJpY2UgPSBwcmljZXNDaGlsZFNlbGVjdC5kYXRhc2V0LnByaWNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FydC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNhcnRbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgJzEnKTtcbiAgICBjYXJ0W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1wcmljZScsICcwJyk7XG4gICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBwcmljZXMubGVuZ3RoOyBqIDwgakxlbjsgaisrKSB7XG4gICAgICBjYXJ0W2ldLmRhdGFzZXQudG90YWxQcmljZSA9IHByaWNlc1tqXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICB9XG4gICAgY2FydFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBjYXJ0U2VsZWN0UHJpY2VXcmFwID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucHJpY2VzLWpzJyk7XG4gICAgICB2YXIgY2FydFNlbGVjdFByaWNlID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcucHJpY2VzLWpzJyk7XG4gICAgICB2YXIgY2FydEluY0RlY1dyYXAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5pbmNEZWMtanMnKTtcbiAgICAgIHZhciBjYXJ0RGVjID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuZGVjLWpzJyk7XG4gICAgICB2YXIgY2FydEluY0RlY1ZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnZhbC1qcycpO1xuICAgICAgdmFyIGNhcnRJbmMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5pbmMtanMnKTtcbiAgICAgIHZhciBjYXJ0QWRkID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FydEFkZC1qcycpO1xuICAgICAgdmFyIHZpc3VhbFByaWNlID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcudmlzdWFsUHJpY2UtanMnKTtcbiAgICAgIHZhciByZW1vdmUgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUtanMnKTtcbiAgICAgIFxuICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICBiYXNrZXQuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgLSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKTtcbiAgICAgICAgYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KHRoaXMuZGF0YXNldC50b3RhbFByaWNlLCAxMClcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSBiYXNrZXRDb3VudC5sZW5ndGg7IGogPCBqbGVuOyBqKyspIHtcbiAgICAgICAgICBiYXNrZXRDb3VudFtqXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgICAgIGJhc2tldFRvdGFsUHJpY2Vbal0udGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICAgIG9yZGVyVG90YWxQcmljZS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChjYXJ0U2VsZWN0UHJpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBjYXJ0U2VsZWN0UHJpY2UuZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgICAgIGlmIChjYXJ0SW5jRGVjVmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgY2FydEluY0RlY1ZhbC50ZXh0Q29udGVudCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGNhcnREZWMpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApID4gMSkge1xuICAgICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KGNhcnRTZWxlY3RQcmljZVdyYXAuZGF0YXNldC5jdXJyZW50UHJpY2UsIDEwKTtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKSAtIDE7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSB2aXN1YWxQcmljZS5sZW5ndGg7IGogPCBqbGVuOyBqKyspIHtcbiAgICAgICAgICAgIHZpc3VhbFByaWNlW2pdLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiYXNrZXRQYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBiYXNrZXQuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgLSAxO1xuICAgICAgICAgICAgYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIDY1MDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqbGVuID0gYmFza2V0Q291bnQubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgICAgIGJhc2tldENvdW50W2pdLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQuY291bnQ7XG4gICAgICAgICAgICAgIGJhc2tldFRvdGFsUHJpY2Vbal0udGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JkZXJUb3RhbFByaWNlLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGNhcnRJbmMpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQoY2FydFNlbGVjdFByaWNlV3JhcC5kYXRhc2V0LmN1cnJlbnRQcmljZSwgMTApO1xuICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKSArIDE7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBqbGVuID0gdmlzdWFsUHJpY2UubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgdmlzdWFsUHJpY2Vbal0udGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFza2V0UGFnZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGJhc2tldC5kYXRhc2V0LmNvdW50ID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQuY291bnQsIDEwKSArIDE7XG4gICAgICAgICAgYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIDY1MDtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IGJhc2tldENvdW50Lmxlbmd0aDsgaiA8IGpsZW47IGorKykge1xuICAgICAgICAgICAgYmFza2V0Q291bnRbal0udGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC5jb3VudDtcbiAgICAgICAgICAgIGJhc2tldFRvdGFsUHJpY2Vbal0udGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcmRlclRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChjYXJ0QWRkKSB7XG4gICAgICAgIGJhc2tldC5kYXRhc2V0LmNvdW50ID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQuY291bnQsIDEwKSArIHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApO1xuICAgICAgICBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBiYXNrZXRDb3VudC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICBiYXNrZXRDb3VudFtqXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBqTGVuID0gYmFza2V0VG90YWxQcmljZS5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICBiYXNrZXRUb3RhbFByaWNlW2pdLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBtYWluLW5hdlxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICB2YXIgYnV0dG9uT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xuICB2YXIgYnV0dG9uQ2xvc2UgPSBuYXYucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19leGl0Jyk7XG4gIFxuICBidXR0b25PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW5hdi0tY2xvc2UnKTtcbiAgfSk7XG4gIFxuICBidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtLWNsb3NlJyk7XG4gIH0pO1xufSkoKTtcblxuLy8gZmVhdHVyZXMtc2xpZGVyXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlYXR1cmVzX19zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5mZWF0dXJlc19fc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAxODAwOiB7XG4gICAgICAgICAgICBpdGVtczogN1xuICAgICAgICAgIH0sXG4gICAgICAgICAgMTMzMDoge1xuICAgICAgICAgICAgaXRlbXM6IDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA3MzA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA1MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gY29tcG9zaXRpb24tc2xpZGVyXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvc2l0aW9uX19zbGlkZXInKTtcbiAgXG4gIFxuICBpZiAoc2xpZGVyICE9PSBudWxsKSB7XG4gICAgdmFyIGNvbXBvc2l0aW9uU2xpZGUgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBvc2l0aW9uX19zbGlkZXItc2xpZGUnKTtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29tcG9zaXRpb25TbGlkZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9zaXRpb25TbGlkZVtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpbmsgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jb21wb3NpdGlvbl9fc2xpZGVyLWxpbmsnKTtcbiAgICAgICAgdmFyIGNvbXBvc2l0aW9uSW1nID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY29tcG9zaXRpb25fX3NsaWRlci1pbWcnKTtcblxuICAgICAgICBpZiAoY29tcG9zaXRpb25MaW5rKSB7XG4gICAgICAgICAgY29tcG9zaXRpb25JbWcuY2xhc3NMaXN0LmFkZCgnY29tcG9zaXRpb25fX3NsaWRlci1pbWctLWhvdmVyJyk7XG4gICAgICAgICAgY29tcG9zaXRpb25JbWcuY2xhc3NMaXN0LnJlbW92ZSgnY29tcG9zaXRpb25fX3NsaWRlci1pbWctLW5vLWhvdmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb21wb3NpdGlvblNsaWRlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaW5rID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY29tcG9zaXRpb25fX3NsaWRlci1saW5rJyk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkltZyA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNvbXBvc2l0aW9uX19zbGlkZXItaW1nJyk7XG5cbiAgICAgICAgaWYgKGNvbXBvc2l0aW9uTGluaykge1xuICAgICAgICAgIGNvbXBvc2l0aW9uSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBvc2l0aW9uX19zbGlkZXItaW1nLS1ob3ZlcicpO1xuICAgICAgICAgIGNvbXBvc2l0aW9uSW1nLmNsYXNzTGlzdC5hZGQoJ2NvbXBvc2l0aW9uX19zbGlkZXItaW1nLS1uby1ob3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuY29tcG9zaXRpb25fX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIHNsaWRlVHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgICAgICBzbWFydFNwZWVkOiAyMDAsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgMTgwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDdcbiAgICAgICAgICB9LFxuICAgICAgICAgIDE0MTA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA2XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgODIwOiB7XG4gICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgNTUwOiB7XG4gICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIHBvcHVsYXItZ29vZC1zbGlkZXJcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdWxhci1nb29kX19zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5wb3B1bGFyLWdvb2RfX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIHNsaWRlVHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgICAgICBzbWFydFNwZWVkOiAyMDAsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgMTg0MDoge1xuICAgICAgICAgICAgaXRlbXM6IDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIDE2MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA1XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMjUwOiB7XG4gICAgICAgICAgICBpdGVtczogNFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIDk1MDoge1xuICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIDYyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=