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
	
	  basket.setAttribute('data-count', '0');
	  basket.setAttribute('data-total-price', '0');
	
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
	        }
	      }
	
	      if (cartInc) {
	        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(cartSelectPriceWrap.dataset.currentPrice, 10);
	        this.dataset.count = parseInt(this.dataset.count, 10) + 1;
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
	
	  if (slider !== null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTczZmFmYjA0ZDdkNWJhMjZjM2QiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2VsZWN0IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJldnQiLCJpdGVtIiwidGFyZ2V0IiwiY2xvc2VzdCIsInZhbCIsInZhbFdlaWdodCIsInZhbFNpemUiLCJ2YWxQcmljZSIsIml0ZW1XZWlnaHQiLCJpdGVtU2l6ZSIsIml0ZW1QcmljZSIsInRleHRDb250ZW50IiwicGFyc2VJbnQiLCJjYXJ0IiwicHJpY2VzIiwiaW5jRGVjIiwiYmFza2V0IiwiYmFza2V0Q291bnQiLCJiYXNrZXRUb3RhbFByaWNlIiwic2V0QXR0cmlidXRlIiwiZGVjIiwiaW5jIiwicHJpY2VzV2VpZ2h0IiwicHJpY2VzQmFzaWMiLCJwcmljZXNDaGlsZCIsImoiLCJqTGVuIiwiZGF0YXNldCIsInByaWNlIiwiY29udGFpbnMiLCJjdXJyZW50UHJpY2UiLCJ3ZWlnaHQiLCJwcmljZXNDaGlsZFNlbGVjdCIsInByaWNlc0NoaWxkcmVuU2VsZWN0IiwicmVtb3ZlIiwiYWRkIiwidG90YWxQcmljZSIsImNhcnRTZWxlY3RQcmljZVdyYXAiLCJjYXJ0U2VsZWN0UHJpY2UiLCJjYXJ0SW5jRGVjV3JhcCIsImNhcnREZWMiLCJjYXJ0SW5jRGVjVmFsIiwiY2FydEluYyIsImNhcnRBZGQiLCJjb3VudCIsIm5hdiIsImJ1dHRvbk9wZW4iLCJidXR0b25DbG9zZSIsInNsaWRlciIsIiQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwic2xpZGVUcmFuc2l0aW9uIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiY29tcG9zaXRpb25TbGlkZSIsImNvbXBvc2l0aW9uTGluayIsImNvbXBvc2l0aW9uSW1nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJQSxTQUFTQyxTQUFTQyxhQUFULENBQXVCLG1DQUF2QixDQUFiO0FBQ0EsT0FBSUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFYOztBQUVBRixVQUFPSSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO0FBQzNDLFVBQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQix3Q0FBdEI7QUFDQUgsVUFBS0UsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0QsSUFIRDtBQUlELEVBUkQ7O0FBVUE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJQyxTQUFTTixTQUFTTyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBYjs7QUFFQSxRQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNSCxPQUFPSSxNQUE3QixFQUFxQ0YsSUFBSUMsR0FBekMsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pERixZQUFPRSxDQUFQLEVBQVVMLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQVVRLEdBQVYsRUFBZTtBQUNqRCxXQUFJQyxPQUFPRCxJQUFJRSxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsdUNBQW5CLENBQVg7QUFDQSxXQUFJQyxNQUFNLEtBQUtkLGFBQUwsQ0FBbUIseUJBQW5CLENBQVY7QUFDQSxXQUFJZSxZQUFZRCxJQUFJZCxhQUFKLENBQWtCLDRCQUFsQixDQUFoQjtBQUNBLFdBQUlnQixVQUFVRixJQUFJZCxhQUFKLENBQWtCLDBCQUFsQixDQUFkO0FBQ0EsV0FBSWlCLFdBQVdILElBQUlkLGFBQUosQ0FBa0IsMkJBQWxCLENBQWY7O0FBRUEsWUFBS0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLDBCQUF0Qjs7QUFFQSxXQUFJTyxJQUFKLEVBQVU7QUFDUixhQUFJTyxhQUFhUCxLQUFLWCxhQUFMLENBQW1CLDRCQUFuQixDQUFqQjtBQUNBLGFBQUltQixXQUFXUixLQUFLWCxhQUFMLENBQW1CLDBCQUFuQixDQUFmO0FBQ0EsYUFBSW9CLFlBQVlULEtBQUtYLGFBQUwsQ0FBbUIsMkJBQW5CLENBQWhCOztBQUVBZSxtQkFBVU0sV0FBVixHQUF3QkMsU0FBU0osV0FBV0csV0FBcEIsRUFBaUMsRUFBakMsQ0FBeEI7QUFDQUwsaUJBQVFLLFdBQVIsR0FBc0JDLFNBQVNILFNBQVNFLFdBQWxCLEVBQStCLEVBQS9CLENBQXRCO0FBQ0FKLGtCQUFTSSxXQUFULEdBQXVCQyxTQUFTRixVQUFVQyxXQUFuQixFQUFnQyxFQUFoQyxDQUF2QjtBQUNEO0FBQ0YsTUFsQkQ7QUFtQkQ7QUFDRixFQXhCRDs7QUEwQkE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJRSxPQUFPeEIsU0FBU08sZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBWDtBQUNBLE9BQUlrQixTQUFTekIsU0FBU08sZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBYjtBQUNBLE9BQUltQixTQUFTMUIsU0FBU08sZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBYjtBQUNBLE9BQUlvQixTQUFTM0IsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFiO0FBQ0EsT0FBSTJCLGNBQWNELE9BQU9wQixnQkFBUCxDQUF3QixpQkFBeEIsQ0FBbEI7QUFDQSxPQUFJc0IsbUJBQW1CRixPQUFPcEIsZ0JBQVAsQ0FBd0Isc0JBQXhCLENBQXZCOztBQUVBb0IsVUFBT0csWUFBUCxDQUFvQixZQUFwQixFQUFrQyxHQUFsQztBQUNBSCxVQUFPRyxZQUFQLENBQW9CLGtCQUFwQixFQUF3QyxHQUF4Qzs7QUFFQSxRQUFLLElBQUl0QixJQUFJLENBQVIsRUFBV0MsTUFBTWlCLE9BQU9oQixNQUE3QixFQUFxQ0YsSUFBSUMsR0FBekMsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pEa0IsWUFBT2xCLENBQVAsRUFBVUwsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBVVEsR0FBVixFQUFlO0FBQ2pELFdBQUlvQixNQUFNcEIsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQVY7QUFDQSxXQUFJQyxNQUFNLEtBQUtkLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBVjtBQUNBLFdBQUkrQixNQUFNckIsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQVY7O0FBRUEsV0FBSWlCLEdBQUosRUFBUztBQUNQLGFBQUlSLFNBQVNSLElBQUlPLFdBQWIsRUFBMEIsRUFBMUIsSUFBZ0MsQ0FBcEMsRUFBdUM7QUFDckNQLGVBQUlPLFdBQUosR0FBa0JDLFNBQVNSLElBQUlPLFdBQWIsRUFBMEIsRUFBMUIsSUFBZ0MsQ0FBbEQ7QUFDRDtBQUNGOztBQUVELFdBQUlVLEdBQUosRUFBUztBQUNQakIsYUFBSU8sV0FBSixHQUFrQkMsU0FBU1IsSUFBSU8sV0FBYixFQUEwQixFQUExQixJQUFnQyxDQUFsRDtBQUNEO0FBQ0YsTUFkRDtBQWVEOztBQUVELFFBQUssSUFBSWQsSUFBSSxDQUFSLEVBQVdDLE1BQU1nQixPQUFPZixNQUE3QixFQUFxQ0YsSUFBSUMsR0FBekMsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFNBQUl5QixlQUFlUixPQUFPakIsQ0FBUCxFQUFVRCxnQkFBVixDQUEyQixrQkFBM0IsQ0FBbkI7QUFDQSxTQUFJMkIsY0FBY1QsT0FBT2pCLENBQVAsRUFBVUQsZ0JBQVYsQ0FBMkIsaUJBQTNCLENBQWxCO0FBQ0EsU0FBSTRCLGNBQWNWLE9BQU9qQixDQUFQLEVBQVVELGdCQUFWLENBQTJCLGtCQUEzQixDQUFsQjs7QUFFQWtCLFlBQU9qQixDQUFQLEVBQVVzQixZQUFWLENBQXVCLG9CQUF2QixFQUE2QyxFQUE3Qzs7QUFFQSxVQUFLLElBQUlNLElBQUksQ0FBUixFQUFXQyxPQUFPRixZQUFZekIsTUFBbkMsRUFBMkMwQixJQUFJQyxJQUEvQyxFQUFxREQsR0FBckQsRUFBMEQ7QUFDeERELG1CQUFZQyxDQUFaLEVBQWVOLFlBQWYsQ0FBNEIsWUFBNUIsRUFBMEMsRUFBMUM7QUFDQUssbUJBQVlDLENBQVosRUFBZUUsT0FBZixDQUF1QkMsS0FBdkIsR0FBK0JMLFlBQVlFLENBQVosRUFBZUUsT0FBZixDQUF1QkMsS0FBdEQ7O0FBRUEsV0FBSUosWUFBWUMsQ0FBWixFQUFlaEMsU0FBZixDQUF5Qm9DLFFBQXpCLENBQWtDLFFBQWxDLENBQUosRUFBaUQ7QUFDL0NmLGdCQUFPakIsQ0FBUCxFQUFVOEIsT0FBVixDQUFrQkcsWUFBbEIsR0FBaUNOLFlBQVlDLENBQVosRUFBZUUsT0FBZixDQUF1QkMsS0FBeEQ7QUFDRDtBQUNGOztBQUVELFVBQUssSUFBSUgsSUFBSSxDQUFSLEVBQVdDLE9BQU9KLGFBQWF2QixNQUFwQyxFQUE0QzBCLElBQUlDLElBQWhELEVBQXNERCxHQUF0RCxFQUEyRDtBQUN6REgsb0JBQWFHLENBQWIsRUFBZ0JkLFdBQWhCLEdBQThCVyxhQUFhRyxDQUFiLEVBQWdCRSxPQUFoQixDQUF3QkksTUFBdEQ7QUFDRDs7QUFFRCxVQUFLLElBQUlOLElBQUksQ0FBUixFQUFXQyxPQUFPSCxZQUFZeEIsTUFBbkMsRUFBMkMwQixJQUFJQyxJQUEvQyxFQUFxREQsR0FBckQsRUFBMEQ7QUFDeERGLG1CQUFZRSxDQUFaLEVBQWVkLFdBQWYsR0FBNkJZLFlBQVlFLENBQVosRUFBZUUsT0FBZixDQUF1QkMsS0FBcEQ7QUFDRDs7QUFFRGQsWUFBT2pCLENBQVAsRUFBVUwsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBVVEsR0FBVixFQUFlO0FBQ2pELFdBQUlnQyxvQkFBb0JoQyxJQUFJRSxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsa0JBQW5CLENBQXhCO0FBQ0EsV0FBSThCLHVCQUF1QixLQUFLckMsZ0JBQUwsQ0FBc0Isa0JBQXRCLENBQTNCOztBQUVBLFdBQUlvQyxpQkFBSixFQUF1QjtBQUNyQixhQUFJLENBQUVBLGtCQUFrQnZDLFNBQWxCLENBQTRCb0MsUUFBNUIsQ0FBcUMsUUFBckMsQ0FBTixFQUF1RDtBQUNyRCxnQkFBSyxJQUFJSixJQUFJLENBQVIsRUFBV0MsT0FBT08scUJBQXFCbEMsTUFBNUMsRUFBb0QwQixJQUFJQyxJQUF4RCxFQUE4REQsR0FBOUQsRUFBbUU7QUFDakVRLGtDQUFxQlIsQ0FBckIsRUFBd0JoQyxTQUF4QixDQUFrQ3lDLE1BQWxDLENBQXlDLFFBQXpDO0FBQ0Q7QUFDRjtBQUNERiwyQkFBa0J2QyxTQUFsQixDQUE0QjBDLEdBQTVCLENBQWdDLFFBQWhDO0FBQ0EsY0FBS1IsT0FBTCxDQUFhRyxZQUFiLEdBQTRCRSxrQkFBa0JMLE9BQWxCLENBQTBCQyxLQUF0RDtBQUNEO0FBQ0YsTUFiRDtBQWNEOztBQUVELFFBQUssSUFBSS9CLElBQUksQ0FBUixFQUFXQyxNQUFNZSxLQUFLZCxNQUEzQixFQUFtQ0YsSUFBSUMsR0FBdkMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DZ0IsVUFBS2hCLENBQUwsRUFBUXNCLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsR0FBbkM7QUFDQU4sVUFBS2hCLENBQUwsRUFBUXNCLFlBQVIsQ0FBcUIsa0JBQXJCLEVBQXlDLEdBQXpDO0FBQ0EsVUFBSyxJQUFJTSxJQUFJLENBQVIsRUFBV0MsT0FBT1osT0FBT2YsTUFBOUIsRUFBc0MwQixJQUFJQyxJQUExQyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDbkRaLFlBQUtoQixDQUFMLEVBQVE4QixPQUFSLENBQWdCUyxVQUFoQixHQUE2QnRCLE9BQU9XLENBQVAsRUFBVUUsT0FBVixDQUFrQkcsWUFBL0M7QUFDRDtBQUNEakIsVUFBS2hCLENBQUwsRUFBUUwsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVVEsR0FBVixFQUFlO0FBQy9DLFdBQUlxQyxzQkFBc0IsS0FBSy9DLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBMUI7QUFDQSxXQUFJZ0Qsa0JBQWtCdEMsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLFlBQW5CLENBQXRCO0FBQ0EsV0FBSW9DLGlCQUFpQnZDLElBQUlFLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixZQUFuQixDQUFyQjtBQUNBLFdBQUlxQyxVQUFVeEMsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQWQ7QUFDQSxXQUFJc0MsZ0JBQWdCLEtBQUtuRCxhQUFMLENBQW1CLFNBQW5CLENBQXBCO0FBQ0EsV0FBSW9ELFVBQVUxQyxJQUFJRSxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsU0FBbkIsQ0FBZDtBQUNBLFdBQUl3QyxVQUFVM0MsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLGFBQW5CLENBQWQ7O0FBRUEsV0FBSW1DLGVBQUosRUFBcUI7QUFDbkIsY0FBS1gsT0FBTCxDQUFhUyxVQUFiLEdBQTBCRSxnQkFBZ0JYLE9BQWhCLENBQXdCRyxZQUFsRDtBQUNBLGFBQUlXLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkEseUJBQWM5QixXQUFkLEdBQTRCLENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFJNkIsT0FBSixFQUFhO0FBQ1gsYUFBSTVCLFNBQVMsS0FBS2UsT0FBTCxDQUFhaUIsS0FBdEIsRUFBNkIsRUFBN0IsSUFBbUMsQ0FBdkMsRUFBMEM7QUFDeEMsZ0JBQUtqQixPQUFMLENBQWFTLFVBQWIsR0FBMEJ4QixTQUFTLEtBQUtlLE9BQUwsQ0FBYVMsVUFBdEIsRUFBa0MsRUFBbEMsSUFBd0N4QixTQUFTeUIsb0JBQW9CVixPQUFwQixDQUE0QkcsWUFBckMsRUFBbUQsRUFBbkQsQ0FBbEU7QUFDQSxnQkFBS0gsT0FBTCxDQUFhaUIsS0FBYixHQUFxQmhDLFNBQVMsS0FBS2UsT0FBTCxDQUFhaUIsS0FBdEIsRUFBNkIsRUFBN0IsSUFBbUMsQ0FBeEQ7QUFDRDtBQUNGOztBQUVELFdBQUlGLE9BQUosRUFBYTtBQUNYLGNBQUtmLE9BQUwsQ0FBYVMsVUFBYixHQUEwQnhCLFNBQVMsS0FBS2UsT0FBTCxDQUFhUyxVQUF0QixFQUFrQyxFQUFsQyxJQUF3Q3hCLFNBQVN5QixvQkFBb0JWLE9BQXBCLENBQTRCRyxZQUFyQyxFQUFtRCxFQUFuRCxDQUFsRTtBQUNBLGNBQUtILE9BQUwsQ0FBYWlCLEtBQWIsR0FBcUJoQyxTQUFTLEtBQUtlLE9BQUwsQ0FBYWlCLEtBQXRCLEVBQTZCLEVBQTdCLElBQW1DLENBQXhEO0FBQ0Q7O0FBRUQsV0FBSUQsT0FBSixFQUFhO0FBQ1gzQixnQkFBT1csT0FBUCxDQUFlaUIsS0FBZixHQUF1QmhDLFNBQVNJLE9BQU9XLE9BQVAsQ0FBZWlCLEtBQXhCLEVBQStCLEVBQS9CLElBQXFDaEMsU0FBUyxLQUFLZSxPQUFMLENBQWFpQixLQUF0QixFQUE2QixFQUE3QixDQUE1RDtBQUNBNUIsZ0JBQU9XLE9BQVAsQ0FBZVMsVUFBZixHQUE0QnhCLFNBQVNJLE9BQU9XLE9BQVAsQ0FBZVMsVUFBeEIsRUFBb0MsRUFBcEMsSUFBMEN4QixTQUFTLEtBQUtlLE9BQUwsQ0FBYVMsVUFBdEIsRUFBa0MsRUFBbEMsQ0FBdEU7QUFDQSxjQUFLLElBQUlYLElBQUksQ0FBUixFQUFXQyxPQUFPVCxZQUFZbEIsTUFBbkMsRUFBMkMwQixJQUFJQyxJQUEvQyxFQUFxREQsR0FBckQsRUFBMEQ7QUFDeERSLHVCQUFZUSxDQUFaLEVBQWVkLFdBQWYsR0FBNkJLLE9BQU9XLE9BQVAsQ0FBZWlCLEtBQTVDO0FBQ0Q7QUFDRCxjQUFLLElBQUluQixJQUFJLENBQVIsRUFBV0MsT0FBT1IsaUJBQWlCbkIsTUFBeEMsRUFBZ0QwQixJQUFJQyxJQUFwRCxFQUEwREQsR0FBMUQsRUFBK0Q7QUFDN0RQLDRCQUFpQk8sQ0FBakIsRUFBb0JkLFdBQXBCLEdBQWtDSyxPQUFPVyxPQUFQLENBQWVTLFVBQWpEO0FBQ0Q7QUFDRjtBQUNGLE1BdENEO0FBdUNEO0FBQ0YsRUFuSEQ7O0FBcUhBO0FBQ0EsRUFBQyxZQUFZO0FBQ1gsT0FBSVMsTUFBTXhELFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBVjtBQUNBLE9BQUl3RCxhQUFhekQsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFqQjtBQUNBLE9BQUl5RCxjQUFjRixJQUFJdkQsYUFBSixDQUFrQixpQkFBbEIsQ0FBbEI7O0FBRUF3RCxjQUFXdEQsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtBQUMvQ3FELFNBQUlwRCxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsaUJBQXJCO0FBQ0QsSUFGRDs7QUFJQXFELGVBQVl2RCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hEcUQsU0FBSXBELFNBQUosQ0FBYzBDLEdBQWQsQ0FBa0IsaUJBQWxCO0FBQ0QsSUFGRDtBQUdELEVBWkQ7O0FBY0E7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJYSxTQUFTM0QsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBYjs7QUFFQSxPQUFJMEQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFNUQsUUFBRixFQUFZNkQsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLG1CQUFGLEVBQXVCRSxXQUF2QixDQUFtQztBQUNqQ0MsMEJBQWlCLE1BRGdCO0FBRWpDQyxxQkFBWSxHQUZxQjtBQUdqQ0MsbUJBQVUsS0FIdUI7QUFJakNULGNBQUssSUFKNEI7QUFLakNVLHFCQUFZO0FBQ1YsaUJBQU07QUFDSkMsb0JBQU87QUFESCxZQURJO0FBSVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQUpJO0FBT1YsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVBJO0FBVVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQVZLO0FBYVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQWJLO0FBZ0JWLGdCQUFLO0FBQ0hBLG9CQUFPO0FBREo7QUFoQks7QUFMcUIsUUFBbkM7QUEwQkQsTUEzQkQ7QUE0QkQ7QUFDRixFQWpDRDs7QUFtQ0E7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJUixTQUFTM0QsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBYjtBQUNBLE9BQUltRSxtQkFBbUJULE9BQU9wRCxnQkFBUCxDQUF3Qiw0QkFBeEIsQ0FBdkI7O0FBRUEsUUFBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTTJELGlCQUFpQjFELE1BQXZDLEVBQStDRixJQUFJQyxHQUFuRCxFQUF3REQsR0FBeEQsRUFBNkQ7QUFDM0Q0RCxzQkFBaUI1RCxDQUFqQixFQUFvQkwsZ0JBQXBCLENBQXFDLFdBQXJDLEVBQWtELFVBQVVRLEdBQVYsRUFBZTtBQUMvRCxXQUFJMEQsa0JBQWtCMUQsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLDJCQUFuQixDQUF0QjtBQUNBLFdBQUl3RCxpQkFBaUIsS0FBS3JFLGFBQUwsQ0FBbUIsMEJBQW5CLENBQXJCOztBQUVBLFdBQUlvRSxlQUFKLEVBQXFCO0FBQ25CQyx3QkFBZWxFLFNBQWYsQ0FBeUIwQyxHQUF6QixDQUE2QixnQ0FBN0I7QUFDQXdCLHdCQUFlbEUsU0FBZixDQUF5QnlDLE1BQXpCLENBQWdDLG1DQUFoQztBQUNEO0FBQ0YsTUFSRDs7QUFVQXVCLHNCQUFpQjVELENBQWpCLEVBQW9CTCxnQkFBcEIsQ0FBcUMsVUFBckMsRUFBaUQsVUFBVVEsR0FBVixFQUFlO0FBQzlELFdBQUkwRCxrQkFBa0IxRCxJQUFJRSxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsMkJBQW5CLENBQXRCO0FBQ0EsV0FBSXdELGlCQUFpQixLQUFLckUsYUFBTCxDQUFtQiwwQkFBbkIsQ0FBckI7O0FBRUEsV0FBSW9FLGVBQUosRUFBcUI7QUFDbkJDLHdCQUFlbEUsU0FBZixDQUF5QnlDLE1BQXpCLENBQWdDLGdDQUFoQztBQUNBeUIsd0JBQWVsRSxTQUFmLENBQXlCMEMsR0FBekIsQ0FBNkIsbUNBQTdCO0FBQ0Q7QUFDRixNQVJEO0FBU0Q7O0FBRUQsT0FBSWEsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFNUQsUUFBRixFQUFZNkQsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLHNCQUFGLEVBQTBCRSxXQUExQixDQUFzQztBQUNwQ0MsMEJBQWlCLE1BRG1CO0FBRXBDQyxxQkFBWSxHQUZ3QjtBQUdwQ0MsbUJBQVUsS0FIMEI7QUFJcENULGNBQUssSUFKK0I7QUFLcENVLHFCQUFZO0FBQ1YsaUJBQU07QUFDSkMsb0JBQU87QUFESCxZQURJO0FBSVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQUpJO0FBT1YsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVBJO0FBVVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQVZLO0FBYVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQWJLO0FBZ0JWLGdCQUFLO0FBQ0hBLG9CQUFPO0FBREo7QUFoQks7QUFMd0IsUUFBdEM7QUEwQkQsTUEzQkQ7QUE0QkQ7QUFDRixFQXhERDs7QUEwREE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJUixTQUFTM0QsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjs7QUFFQSxPQUFJMEQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFNUQsUUFBRixFQUFZNkQsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLHVCQUFGLEVBQTJCRSxXQUEzQixDQUF1QztBQUNyQ0MsMEJBQWlCLE1BRG9CO0FBRXJDQyxxQkFBWSxHQUZ5QjtBQUdyQ0MsbUJBQVUsS0FIMkI7QUFJckNULGNBQUssSUFKZ0M7QUFLckNVLHFCQUFZO0FBQ1YsaUJBQU07QUFDSkMsb0JBQU87QUFESCxZQURJO0FBSVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQUpJO0FBT1YsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVBJO0FBVVYsaUJBQU07QUFDSkEsb0JBQU87QUFESCxZQVZJO0FBYVYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESixZQWJLO0FBZ0JWLGdCQUFLO0FBQ0hBLG9CQUFPO0FBREosWUFoQks7QUFtQlYsZ0JBQUs7QUFDSEEsb0JBQU87QUFESjtBQW5CSztBQUx5QixRQUF2QztBQTZCRCxNQTlCRDtBQStCRDtBQUNGLEVBcENELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE3M2ZhZmIwNGQ3ZDViYTI2YzNkIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtYWluLW5hdlxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJsb2NrX19kcm9wZG93bi1idXR0b24td3JhcCcpO1xuICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICBcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgndXNlci1ibG9ja19fZHJvcGRvd24tYnV0dG9uLXdyYXAtLW9wZW4nKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcbn0pKCk7XG5cbi8vIHNlbGVjLWNhcnRcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydF9fc2VsZWN0LXByaWNlJyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2VsZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGl0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0X19zZWxlY3QtcHJpY2UtZGVzY3JpcHRpb24taXRlbXMnKTtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19zZWxlY3QtcHJpY2UtdmFsJyk7XG4gICAgICB2YXIgdmFsV2VpZ2h0ID0gdmFsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19zZWxlY3QtcHJpY2Utd2VpZ2h0Jyk7XG4gICAgICB2YXIgdmFsU2l6ZSA9IHZhbC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXNpemUnKTtcbiAgICAgIHZhciB2YWxQcmljZSA9IHZhbC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXRvdGFsJyk7XG4gICAgICBcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnY2FydF9fc2VsZWN0LXByaWNlLS1vcGVuJyk7XG4gICAgICBcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHZhciBpdGVtV2VpZ2h0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXdlaWdodCcpO1xuICAgICAgICB2YXIgaXRlbVNpemUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19zZWxlY3QtcHJpY2Utc2l6ZScpO1xuICAgICAgICB2YXIgaXRlbVByaWNlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fc2VsZWN0LXByaWNlLXRvdGFsJyk7XG4gICAgICAgIFxuICAgICAgICB2YWxXZWlnaHQudGV4dENvbnRlbnQgPSBwYXJzZUludChpdGVtV2VpZ2h0LnRleHRDb250ZW50LCAxMCk7XG4gICAgICAgIHZhbFNpemUudGV4dENvbnRlbnQgPSBwYXJzZUludChpdGVtU2l6ZS50ZXh0Q29udGVudCwgMTApO1xuICAgICAgICB2YWxQcmljZS50ZXh0Q29udGVudCA9IHBhcnNlSW50KGl0ZW1QcmljZS50ZXh0Q29udGVudCwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBjYXJ0XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LWpzJyk7XG4gIHZhciBwcmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2VzLWpzJyk7XG4gIHZhciBpbmNEZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5jRGVjLWpzJyk7XG4gIHZhciBiYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0LWpzJyk7XG4gIHZhciBiYXNrZXRDb3VudCA9IGJhc2tldC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0Q291bnQtanMnKTtcbiAgdmFyIGJhc2tldFRvdGFsUHJpY2UgPSBiYXNrZXQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldFRvdGFsUHJpY2UtanMnKTtcbiAgXG4gIGJhc2tldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnLCAnMCcpO1xuICBiYXNrZXQuc2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsLXByaWNlJywgJzAnKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbmNEZWMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpbmNEZWNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgZGVjID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuZGVjLWpzJyk7XG4gICAgICB2YXIgdmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudmFsLWpzJyk7XG4gICAgICB2YXIgaW5jID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuaW5jLWpzJyk7XG4gICAgICBcbiAgICAgIGlmIChkZWMpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbC50ZXh0Q29udGVudCwgMTApID4gMSkge1xuICAgICAgICAgIHZhbC50ZXh0Q29udGVudCA9IHBhcnNlSW50KHZhbC50ZXh0Q29udGVudCwgMTApIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoaW5jKSB7XG4gICAgICAgIHZhbC50ZXh0Q29udGVudCA9IHBhcnNlSW50KHZhbC50ZXh0Q29udGVudCwgMTApICsgMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByaWNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBwcmljZXNXZWlnaHQgPSBwcmljZXNbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLXdlaWdodC1qcycpO1xuICAgIHZhciBwcmljZXNCYXNpYyA9IHByaWNlc1tpXS5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2UtYmFzaWMtanMnKTtcbiAgICB2YXIgcHJpY2VzQ2hpbGQgPSBwcmljZXNbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlcy1jaGlsZC1qcycpO1xuICAgIFxuICAgIHByaWNlc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC1wcmljZScsICcnKTtcbiAgICBcbiAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IHByaWNlc0NoaWxkLmxlbmd0aDsgaiA8IGpMZW47IGorKykge1xuICAgICAgcHJpY2VzQ2hpbGRbal0uc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgcHJpY2VzQ2hpbGRbal0uZGF0YXNldC5wcmljZSA9IHByaWNlc0Jhc2ljW2pdLmRhdGFzZXQucHJpY2U7XG4gICAgICBcbiAgICAgIGlmIChwcmljZXNDaGlsZFtqXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHByaWNlc1tpXS5kYXRhc2V0LmN1cnJlbnRQcmljZSA9IHByaWNlc0NoaWxkW2pdLmRhdGFzZXQucHJpY2U7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZvciAodmFyIGogPSAwLCBqTGVuID0gcHJpY2VzV2VpZ2h0Lmxlbmd0aDsgaiA8IGpMZW47IGorKykge1xuICAgICAgcHJpY2VzV2VpZ2h0W2pdLnRleHRDb250ZW50ID0gcHJpY2VzV2VpZ2h0W2pdLmRhdGFzZXQud2VpZ2h0O1xuICAgIH1cbiAgICBcbiAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IHByaWNlc0Jhc2ljLmxlbmd0aDsgaiA8IGpMZW47IGorKykge1xuICAgICAgcHJpY2VzQmFzaWNbal0udGV4dENvbnRlbnQgPSBwcmljZXNCYXNpY1tqXS5kYXRhc2V0LnByaWNlO1xuICAgIH1cbiAgICBcbiAgICBwcmljZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgcHJpY2VzQ2hpbGRTZWxlY3QgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wcmljZXMtY2hpbGQtanMnKTtcbiAgICAgIHZhciBwcmljZXNDaGlsZHJlblNlbGVjdCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlcy1jaGlsZC1qcycpO1xuICAgICAgXG4gICAgICBpZiAocHJpY2VzQ2hpbGRTZWxlY3QpIHtcbiAgICAgICAgaWYgKCEocHJpY2VzQ2hpbGRTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IHByaWNlc0NoaWxkcmVuU2VsZWN0Lmxlbmd0aDsgaiA8IGpMZW47IGorKykge1xuICAgICAgICAgICAgcHJpY2VzQ2hpbGRyZW5TZWxlY3Rbal0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmljZXNDaGlsZFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LmN1cnJlbnRQcmljZSA9IHByaWNlc0NoaWxkU2VsZWN0LmRhdGFzZXQucHJpY2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJ0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2FydFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnLCAnMScpO1xuICAgIGNhcnRbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsLXByaWNlJywgJzAnKTtcbiAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IHByaWNlcy5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgIGNhcnRbaV0uZGF0YXNldC50b3RhbFByaWNlID0gcHJpY2VzW2pdLmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgIH1cbiAgICBjYXJ0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGNhcnRTZWxlY3RQcmljZVdyYXAgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZXMtanMnKTtcbiAgICAgIHZhciBjYXJ0U2VsZWN0UHJpY2UgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wcmljZXMtanMnKTtcbiAgICAgIHZhciBjYXJ0SW5jRGVjV3JhcCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmluY0RlYy1qcycpO1xuICAgICAgdmFyIGNhcnREZWMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5kZWMtanMnKTtcbiAgICAgIHZhciBjYXJ0SW5jRGVjVmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudmFsLWpzJyk7XG4gICAgICB2YXIgY2FydEluYyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmluYy1qcycpO1xuICAgICAgdmFyIGNhcnRBZGQgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0QWRkLWpzJyk7XG4gICAgICBcbiAgICAgIGlmIChjYXJ0U2VsZWN0UHJpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBjYXJ0U2VsZWN0UHJpY2UuZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgICAgIGlmIChjYXJ0SW5jRGVjVmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgY2FydEluY0RlY1ZhbC50ZXh0Q29udGVudCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGNhcnREZWMpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApID4gMSkge1xuICAgICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KGNhcnRTZWxlY3RQcmljZVdyYXAuZGF0YXNldC5jdXJyZW50UHJpY2UsIDEwKTtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKSAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGNhcnRJbmMpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQoY2FydFNlbGVjdFByaWNlV3JhcC5kYXRhc2V0LmN1cnJlbnRQcmljZSwgMTApO1xuICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKSArIDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChjYXJ0QWRkKSB7XG4gICAgICAgIGJhc2tldC5kYXRhc2V0LmNvdW50ID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQuY291bnQsIDEwKSArIHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApO1xuICAgICAgICBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBiYXNrZXRDb3VudC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICBiYXNrZXRDb3VudFtqXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBqTGVuID0gYmFza2V0VG90YWxQcmljZS5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICBiYXNrZXRUb3RhbFByaWNlW2pdLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBtYWluLW5hdlxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICB2YXIgYnV0dG9uT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xuICB2YXIgYnV0dG9uQ2xvc2UgPSBuYXYucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19leGl0Jyk7XG4gIFxuICBidXR0b25PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW5hdi0tY2xvc2UnKTtcbiAgfSk7XG4gIFxuICBidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtLWNsb3NlJyk7XG4gIH0pO1xufSkoKTtcblxuLy8gZmVhdHVyZXMtc2xpZGVyXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlYXR1cmVzX19zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5mZWF0dXJlc19fc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAxODAwOiB7XG4gICAgICAgICAgICBpdGVtczogN1xuICAgICAgICAgIH0sXG4gICAgICAgICAgMTMzMDoge1xuICAgICAgICAgICAgaXRlbXM6IDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA3MzA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA1MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gY29tcG9zaXRpb24tc2xpZGVyXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvc2l0aW9uX19zbGlkZXInKTtcbiAgdmFyIGNvbXBvc2l0aW9uU2xpZGUgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBvc2l0aW9uX19zbGlkZXItc2xpZGUnKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb21wb3NpdGlvblNsaWRlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29tcG9zaXRpb25TbGlkZVtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgY29tcG9zaXRpb25MaW5rID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY29tcG9zaXRpb25fX3NsaWRlci1saW5rJyk7XG4gICAgICB2YXIgY29tcG9zaXRpb25JbWcgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3NpdGlvbl9fc2xpZGVyLWltZycpO1xuICAgICAgXG4gICAgICBpZiAoY29tcG9zaXRpb25MaW5rKSB7XG4gICAgICAgIGNvbXBvc2l0aW9uSW1nLmNsYXNzTGlzdC5hZGQoJ2NvbXBvc2l0aW9uX19zbGlkZXItaW1nLS1ob3ZlcicpO1xuICAgICAgICBjb21wb3NpdGlvbkltZy5jbGFzc0xpc3QucmVtb3ZlKCdjb21wb3NpdGlvbl9fc2xpZGVyLWltZy0tbm8taG92ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjb21wb3NpdGlvblNsaWRlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGNvbXBvc2l0aW9uTGluayA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNvbXBvc2l0aW9uX19zbGlkZXItbGluaycpO1xuICAgICAgdmFyIGNvbXBvc2l0aW9uSW1nID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY29tcG9zaXRpb25fX3NsaWRlci1pbWcnKTtcbiAgICAgIFxuICAgICAgaWYgKGNvbXBvc2l0aW9uTGluaykge1xuICAgICAgICBjb21wb3NpdGlvbkltZy5jbGFzc0xpc3QucmVtb3ZlKCdjb21wb3NpdGlvbl9fc2xpZGVyLWltZy0taG92ZXInKTtcbiAgICAgICAgY29tcG9zaXRpb25JbWcuY2xhc3NMaXN0LmFkZCgnY29tcG9zaXRpb25fX3NsaWRlci1pbWctLW5vLWhvdmVyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5jb21wb3NpdGlvbl9fc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAxODAwOiB7XG4gICAgICAgICAgICBpdGVtczogN1xuICAgICAgICAgIH0sXG4gICAgICAgICAgMTQxMDoge1xuICAgICAgICAgICAgaXRlbXM6IDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA4MjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA1NTA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gcG9wdWxhci1nb29kLXNsaWRlclxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1bGFyLWdvb2RfX3NsaWRlcicpO1xuICBcbiAgaWYgKHNsaWRlciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLnBvcHVsYXItZ29vZF9fc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAxODQwOiB7XG4gICAgICAgICAgICBpdGVtczogNlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTYwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDVcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyNTA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgOTUwOiB7XG4gICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgNjIwOiB7XG4gICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==