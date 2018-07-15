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
	
	// .price-options-items-js
	
	(function () {
	  var priceOptionWrap = document.querySelectorAll('.priceOptionWrap-js');
	  var priceOption = document.querySelectorAll('.priceOptionsItems-js');
	
	  var setPrice = function setPrice(elem) {
	    var dataPrice = elem.dataset.price;
	    var elemChild = elem.querySelector('.priceOptionsItemPrice-js');
	
	    elemChild.textContent = dataPrice;
	  };
	
	  var getPrice = function getPrice(elem) {
	    for (var i = 0, len = elem.length; i < len; i++) {
	      setPrice(elem[i]);
	    }
	  };
	
	  var selectablePrices = function selectablePrices(elem) {
	    for (var i = 0, len = elem.length; i < len; i++) {
	      elem[i].addEventListener('click', function (evt) {
	        var item = evt.target.closest('.priceOptionsItems-js');
	        var parentChildren = this.querySelectorAll('.priceOptionsItems-js');
	
	        if (item) {
	          if (!item.classList.contains('active')) {
	            for (var j = 0, jLen = parentChildren.length; j < jLen; j++) {
	              parentChildren[j].classList.remove('active');
	            }
	          };
	          item.classList.add('active');
	          this.dataset.currentPrice = item.dataset.price;
	          this.dataset.currentWeight = item.dataset.weight;
	        }
	      });
	    }
	  };
	
	  getPrice(priceOption);
	  selectablePrices(priceOptionWrap);
	})();
	
	// cart-js
	(function () {
	  var carts = document.querySelectorAll('.cart-js');
	  var basket = document.querySelector('.basket-js');
	  var basketCount = basket.querySelectorAll('.basketCount-js');
	  var basketTotalPrice = basket.querySelector('.basketTotalPrice-js');
	  var basketCountNum = parseInt(basket.dataset.count, 10);
	  var basketTotalPriceNum = parseInt(basket.dataset.totalPrice, 10);
	  var openBasketButton = basket.querySelector('.user-basket__open-button');
	  var openBasketButtonSecond = basket.querySelector('.user-basket__description-min');
	  var basketCartContainer = basket.querySelector('.user-basket__order-list');
	  var basketCart = basket.querySelector('.basketCart-js').content.querySelector('.user-basket__order-items');
	  var basketTotalOrderPriceWrap = basket.querySelector('.user-basket__order-total-wrap');
	  var basketTotalOrderPrice = basket.querySelector('.user-basket__order-total-price-num');
	  var basketEmptyHeadline = basket.querySelector('.user-basket__order-empty-headline-wrap');
	  var basketTotalOrderInput = basket.querySelector('.user-basket__order-input-list-wrap');
	
	  for (var i = 0, len = carts.length; i < len; i++) {
	    carts[i].addEventListener('click', function (evt) {
	      var minus = evt.target.closest('.calculate-items-minus-js');
	      var val = this.querySelector('.calculate-items-value-js');
	      var plus = evt.target.closest('.calculate-items-plus-js');
	      var valNum = parseInt(val.textContent, 10);
	      var itemOption = evt.target.closest('.priceOptionWrap-js');
	      var dataCountNum = parseInt(this.dataset.count, 10);
	      var add = evt.target.closest('.add-js');
	      var cartName = this.querySelector('.cart__content-title');
	      var basketLi = evt.target.closest('.user-basket__order-items');
	
	      if (itemOption) {
	        this.dataset.basicPrice = itemOption.dataset.currentPrice;
	        this.dataset.totalPrice = this.dataset.basicPrice;
	        this.dataset.weight = itemOption.dataset.currentWeight;
	        val.textContent = 1;
	      }
	
	      if (minus) {
	        if (valNum > 1) {
	          val.textContent = valNum - 1;
	          this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) - parseInt(this.dataset.basicPrice, 10);
	          this.dataset.count = dataCountNum - 1;
	        }
	      }
	
	      if (plus) {
	        val.textContent = valNum + 1;
	        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(this.dataset.basicPrice, 10);
	        this.dataset.count = dataCountNum + 1;
	      }
	
	      if (add) {
	        var newElem = basketCart.cloneNode(true);
	
	        basket.dataset.count = parseInt(basket.dataset.count, 10) + parseInt(this.dataset.count, 10);
	        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(this.dataset.totalPrice, 10);
	        basket.dataset.name = cartName.textContent;
	        newElem.querySelector('.user-basket__order-item-headline').textContent = basket.dataset.name;
	        newElem.querySelector('.user-basket__order-item-weight').textContent = this.dataset.weight;
	        newElem.querySelector('.user-basket__order-item-calculating-text').textContent = val.textContent;
	        newElem.querySelector('.user-basket__order-item-total-price').textContent = this.dataset.totalPrice;
	        newElem.querySelector('.user-basket__order-item-total-price-wrap').dataset.basicPrice = this.dataset.basicPrice;
	        if (parseInt(basket.dataset.count, 10) < 1) {
	          basketTotalOrderPriceWrap.classList.add('user-basket__order-total-wrap--hidden');
	          basketEmptyHeadline.classList.remove('user-basket__order-empty-headline-wrap--hidden');
	          basketTotalOrderInput.classList.add('user-basket__order-input-list-wrap--hidden');
	        } else {
	          basketTotalOrderPriceWrap.classList.remove('user-basket__order-total-wrap--hidden');
	          basketEmptyHeadline.classList.add('user-basket__order-empty-headline-wrap--hidden');
	          basketTotalOrderInput.classList.remove('user-basket__order-input-list-wrap--hidden');
	        }
	        newElem.addEventListener('click', function (evt) {
	          var basketMinus = evt.target.closest('.basketItemMinus-js');
	          var basketVal = this.querySelector('.basketItemVal-js');
	          var basketPlus = evt.target.closest('.basketItemPlus-js');
	          var basketBasicPrice = this.querySelector('.user-basket__order-item-total-price-wrap');
	          var basketTotalPriceLi = this.querySelector('.user-basket__order-item-total-price');
	          var basketRemove = evt.target.closest('.user-basket__order-item-exit');
	
	          if (basketMinus) {
	            if (parseInt(basketVal.textContent, 10) > 1) {
	              basketVal.textContent = parseInt(basketVal.textContent, 10) - 1;
	              basket.dataset.count = parseInt(basket.dataset.count, 10) - 1;
	              basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) - parseInt(basketBasicPrice.dataset.basicPrice, 10);
	              basketTotalPriceLi.textContent = parseInt(basketTotalPriceLi.textContent, 10) - parseInt(basketBasicPrice.dataset.basicPrice, 10);
	              basketTotalOrderPrice.textContent = basket.dataset.totalPrice;
	              basketTotalPrice.textContent = basket.dataset.totalPrice;
	              for (var j = 0, jLen = basketCount.length; j < jLen; j++) {
	                basketCount[j].textContent = basket.dataset.count;
	              }
	            }
	          }
	
	          if (basketPlus) {
	            basketVal.textContent = parseInt(basketVal.textContent, 10) + 1;
	            basket.dataset.count = parseInt(basket.dataset.count, 10) + 1;
	            basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(basketBasicPrice.dataset.basicPrice, 10);
	            basketTotalPriceLi.textContent = parseInt(basketTotalPriceLi.textContent, 10) + parseInt(basketBasicPrice.dataset.basicPrice, 10);
	            basketTotalOrderPrice.textContent = basket.dataset.totalPrice;
	            basketTotalPrice.textContent = basket.dataset.totalPrice;
	            for (var j = 0, jLen = basketCount.length; j < jLen; j++) {
	              basketCount[j].textContent = basket.dataset.count;
	            }
	          }
	
	          if (basketRemove) {
	            basket.dataset.count = parseInt(basket.dataset.count, 10) - parseInt(basketVal.textContent, 10);
	            basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) - parseInt(basketTotalPriceLi.textContent, 10);
	            basketTotalOrderPrice.textContent = basket.dataset.totalPrice;
	            basketTotalPrice.textContent = basket.dataset.totalPrice;
	            for (var j = 0, jLen = basketCount.length; j < jLen; j++) {
	              basketCount[j].textContent = basket.dataset.count;
	            }
	            if (parseInt(basket.dataset.count, 10) < 1) {
	              basketTotalOrderPriceWrap.classList.add('user-basket__order-total-wrap--hidden');
	              basketEmptyHeadline.classList.remove('user-basket__order-empty-headline-wrap--hidden');
	              basketTotalOrderInput.classList.add('user-basket__order-input-list-wrap--hidden');
	            } else {
	              basketTotalOrderPriceWrap.classList.remove('user-basket__order-total-wrap--hidden');
	              basketEmptyHeadline.classList.add('user-basket__order-empty-headline-wrap--hidden');
	              basketTotalOrderInput.classList.remove('user-basket__order-input-list-wrap--hidden');
	            }
	            this.remove();
	          }
	        });
	        for (var j = 0, jLen = basketCount.length; j < jLen; j++) {
	          basketCount[j].textContent = basket.dataset.count;
	        }
	        basketTotalPrice.textContent = basket.dataset.totalPrice;
	        basketCartContainer.appendChild(newElem);
	        basketTotalOrderPrice.textContent = basket.dataset.totalPrice;
	      }
	    });
	  }
	
	  openBasketButton.addEventListener('click', function () {
	    if (parseInt(basket.dataset.count, 10) < 1) {
	      basketTotalOrderPriceWrap.classList.add('user-basket__order-total-wrap--hidden');
	      basketEmptyHeadline.classList.remove('user-basket__order-empty-headline-wrap--hidden');
	      basketTotalOrderInput.classList.add('user-basket__order-input-list-wrap--hidden');
	    } else {
	      basketTotalOrderPriceWrap.classList.remove('user-basket__order-total-wrap--hidden');
	      basketEmptyHeadline.classList.add('user-basket__order-empty-headline-wrap--hidden');
	      basketTotalOrderInput.classList.remove('user-basket__order-input-list-wrap--hidden');
	    }
	    basket.classList.toggle('user-basket--open');
	  });
	
	  openBasketButtonSecond.addEventListener('click', function () {
	    if (parseInt(basket.dataset.count, 10) < 1) {
	      basketTotalOrderPriceWrap.classList.add('user-basket__order-total-wrap--hidden');
	      basketEmptyHeadline.classList.remove('user-basket__order-empty-headline-wrap--hidden');
	      basketTotalOrderInput.classList.add('user-basket__order-input-list-wrap--hidden');
	    } else {
	      basketTotalOrderPriceWrap.classList.remove('user-basket__order-total-wrap--hidden');
	      basketEmptyHeadline.classList.add('user-basket__order-empty-headline-wrap--hidden');
	      basketTotalOrderInput.classList.remove('user-basket__order-input-list-wrap--hidden');
	    }
	    basket.classList.add('user-basket--open');
	  });
	})();
	
	// Slider
	(function () {
	  var slider = document.querySelector('.popular-goods__slider');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".popular-goods__slider").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        responsive: {
	          1800: {
	            items: 3,
	            margin: 100
	          },
	          1200: {
	            items: 3,
	            margin: 50
	          },
	          1000: {
	            items: 2,
	            margin: 25
	          },
	          320: {
	            items: 1,
	            margin: 0
	          }
	        }
	      });
	    });
	  }
	})();
	
	(function () {
	  var menu = document.querySelector('.page-header__menu-button-wrap');
	  var menuNav = document.querySelector('.main-nav__list');
	  var menuExit = document.querySelector('.main-nav__list-exit-button');
	
	  menu.addEventListener('click', function () {
	    menuNav.classList.add('main-nav__list--open');
	  });
	
	  menuExit.addEventListener('click', function () {
	    menuNav.classList.remove('main-nav__list--open');
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzg4ZjI4MGIzZjdjYWY0N2E5N2QiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInByaWNlT3B0aW9uV3JhcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInByaWNlT3B0aW9uIiwic2V0UHJpY2UiLCJlbGVtIiwiZGF0YVByaWNlIiwiZGF0YXNldCIsInByaWNlIiwiZWxlbUNoaWxkIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZ2V0UHJpY2UiLCJpIiwibGVuIiwibGVuZ3RoIiwic2VsZWN0YWJsZVByaWNlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJpdGVtIiwidGFyZ2V0IiwiY2xvc2VzdCIsInBhcmVudENoaWxkcmVuIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJqIiwiakxlbiIsInJlbW92ZSIsImFkZCIsImN1cnJlbnRQcmljZSIsImN1cnJlbnRXZWlnaHQiLCJ3ZWlnaHQiLCJjYXJ0cyIsImJhc2tldCIsImJhc2tldENvdW50IiwiYmFza2V0VG90YWxQcmljZSIsImJhc2tldENvdW50TnVtIiwicGFyc2VJbnQiLCJjb3VudCIsImJhc2tldFRvdGFsUHJpY2VOdW0iLCJ0b3RhbFByaWNlIiwib3BlbkJhc2tldEJ1dHRvbiIsIm9wZW5CYXNrZXRCdXR0b25TZWNvbmQiLCJiYXNrZXRDYXJ0Q29udGFpbmVyIiwiYmFza2V0Q2FydCIsImNvbnRlbnQiLCJiYXNrZXRUb3RhbE9yZGVyUHJpY2VXcmFwIiwiYmFza2V0VG90YWxPcmRlclByaWNlIiwiYmFza2V0RW1wdHlIZWFkbGluZSIsImJhc2tldFRvdGFsT3JkZXJJbnB1dCIsIm1pbnVzIiwidmFsIiwicGx1cyIsInZhbE51bSIsIml0ZW1PcHRpb24iLCJkYXRhQ291bnROdW0iLCJjYXJ0TmFtZSIsImJhc2tldExpIiwiYmFzaWNQcmljZSIsIm5ld0VsZW0iLCJjbG9uZU5vZGUiLCJuYW1lIiwiYmFza2V0TWludXMiLCJiYXNrZXRWYWwiLCJiYXNrZXRQbHVzIiwiYmFza2V0QmFzaWNQcmljZSIsImJhc2tldFRvdGFsUHJpY2VMaSIsImJhc2tldFJlbW92ZSIsImFwcGVuZENoaWxkIiwidG9nZ2xlIiwic2xpZGVyIiwiJCIsInJlYWR5Iiwib3dsQ2Fyb3VzZWwiLCJzbGlkZVRyYW5zaXRpb24iLCJzbWFydFNwZWVkIiwiYXV0b3BsYXkiLCJuYXYiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJtYXJnaW4iLCJtZW51IiwibWVudU5hdiIsIm1lbnVFeGl0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJQSxrQkFBa0JDLFNBQVNDLGdCQUFULENBQTBCLHFCQUExQixDQUF0QjtBQUNBLE9BQUlDLGNBQWNGLFNBQVNDLGdCQUFULENBQTBCLHVCQUExQixDQUFsQjs7QUFFQSxPQUFJRSxXQUFXLFNBQVhBLFFBQVcsQ0FBVUMsSUFBVixFQUFnQjtBQUM3QixTQUFJQyxZQUFZRCxLQUFLRSxPQUFMLENBQWFDLEtBQTdCO0FBQ0EsU0FBSUMsWUFBWUosS0FBS0ssYUFBTCxDQUFtQiwyQkFBbkIsQ0FBaEI7O0FBRUFELGVBQVVFLFdBQVYsR0FBd0JMLFNBQXhCO0FBQ0QsSUFMRDs7QUFPQSxPQUFJTSxXQUFXLFNBQVhBLFFBQVcsQ0FBVVAsSUFBVixFQUFnQjtBQUM3QixVQUFLLElBQUlRLElBQUksQ0FBUixFQUFXQyxNQUFNVCxLQUFLVSxNQUEzQixFQUFtQ0YsSUFBSUMsR0FBdkMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DVCxnQkFBU0MsS0FB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LGlCQUF2QixDQUFkO0FBQ0EsT0FBSXlFLFdBQVdsRixTQUFTUyxhQUFULENBQXVCLDZCQUF2QixDQUFmOztBQUVBdUUsUUFBS2hFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekNpRSxhQUFRM0QsU0FBUixDQUFrQkssR0FBbEIsQ0FBc0Isc0JBQXRCO0FBQ0QsSUFGRDs7QUFJQXVELFlBQVNsRSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDaUUsYUFBUTNELFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLHNCQUF6QjtBQUNELElBRkQ7QUFHRCxFQVpELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4OGYyODBiM2Y3Y2FmNDdhOTdkIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAucHJpY2Utb3B0aW9ucy1pdGVtcy1qc1xuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaWNlT3B0aW9uV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZU9wdGlvbldyYXAtanMnKTtcbiAgdmFyIHByaWNlT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlT3B0aW9uc0l0ZW1zLWpzJyk7XG4gIFxuICB2YXIgc2V0UHJpY2UgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHZhciBkYXRhUHJpY2UgPSBlbGVtLmRhdGFzZXQucHJpY2U7XG4gICAgdmFyIGVsZW1DaGlsZCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLnByaWNlT3B0aW9uc0l0ZW1QcmljZS1qcycpO1xuXG4gICAgZWxlbUNoaWxkLnRleHRDb250ZW50ID0gZGF0YVByaWNlO1xuICB9O1xuICBcbiAgdmFyIGdldFByaWNlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgc2V0UHJpY2UoZWxlbVtpXSk7XG4gICAgfVxuICB9O1xuICBcbiAgdmFyIHNlbGVjdGFibGVQcmljZXMgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBlbGVtW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLnByaWNlT3B0aW9uc0l0ZW1zLWpzJyk7XG4gICAgICAgIHZhciBwYXJlbnRDaGlsZHJlbiA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlT3B0aW9uc0l0ZW1zLWpzJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIGlmICghKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqTGVuID0gcGFyZW50Q2hpbGRyZW4ubGVuZ3RoOyBqIDwgakxlbjsgaisrKSB7XG4gICAgICAgICAgICAgIHBhcmVudENoaWxkcmVuW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQuY3VycmVudFByaWNlID0gaXRlbS5kYXRhc2V0LnByaWNlO1xuICAgICAgICAgIHRoaXMuZGF0YXNldC5jdXJyZW50V2VpZ2h0ID0gaXRlbS5kYXRhc2V0LndlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBcbiAgZ2V0UHJpY2UocHJpY2VPcHRpb24pO1xuICBzZWxlY3RhYmxlUHJpY2VzKHByaWNlT3B0aW9uV3JhcCk7XG59KSgpO1xuXG4vLyBjYXJ0LWpzXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY2FydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1qcycpO1xuICB2YXIgYmFza2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldC1qcycpO1xuICB2YXIgYmFza2V0Q291bnQgPSBiYXNrZXQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldENvdW50LWpzJyk7XG4gIHZhciBiYXNrZXRUb3RhbFByaWNlID0gYmFza2V0LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRUb3RhbFByaWNlLWpzJyk7XG4gIHZhciBiYXNrZXRDb3VudE51bSA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCk7XG4gIHZhciBiYXNrZXRUb3RhbFByaWNlTnVtID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSwgMTApO1xuICB2YXIgb3BlbkJhc2tldEJ1dHRvbiA9IGJhc2tldC5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29wZW4tYnV0dG9uJyk7XG4gIHZhciBvcGVuQmFza2V0QnV0dG9uU2Vjb25kID0gYmFza2V0LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJhc2tldF9fZGVzY3JpcHRpb24tbWluJyk7XG4gIHZhciBiYXNrZXRDYXJ0Q29udGFpbmVyID0gYmFza2V0LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJhc2tldF9fb3JkZXItbGlzdCcpO1xuICB2YXIgYmFza2V0Q2FydCA9IGJhc2tldC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0Q2FydC1qcycpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLnVzZXItYmFza2V0X19vcmRlci1pdGVtcycpO1xuICB2YXIgYmFza2V0VG90YWxPcmRlclByaWNlV3JhcCA9IGJhc2tldC5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLXRvdGFsLXdyYXAnKTtcbiAgdmFyIGJhc2tldFRvdGFsT3JkZXJQcmljZSA9IGJhc2tldC5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLXRvdGFsLXByaWNlLW51bScpO1xuICB2YXIgYmFza2V0RW1wdHlIZWFkbGluZSA9IGJhc2tldC5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLWVtcHR5LWhlYWRsaW5lLXdyYXAnKTtcbiAgdmFyIGJhc2tldFRvdGFsT3JkZXJJbnB1dCA9IGJhc2tldC5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLWlucHV0LWxpc3Qtd3JhcCcpOyBcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNhcnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIG1pbnVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRlLWl0ZW1zLW1pbnVzLWpzJyk7XG4gICAgICB2YXIgdmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRlLWl0ZW1zLXZhbHVlLWpzJyk7XG4gICAgICB2YXIgcGx1cyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0ZS1pdGVtcy1wbHVzLWpzJyk7XG4gICAgICB2YXIgdmFsTnVtID0gcGFyc2VJbnQodmFsLnRleHRDb250ZW50LCAxMCk7XG4gICAgICB2YXIgaXRlbU9wdGlvbiA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLnByaWNlT3B0aW9uV3JhcC1qcycpO1xuICAgICAgdmFyIGRhdGFDb3VudE51bSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApO1xuICAgICAgdmFyIGFkZCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmFkZC1qcycpO1xuICAgICAgdmFyIGNhcnROYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2FydF9fY29udGVudC10aXRsZScpO1xuICAgICAgdmFyIGJhc2tldExpID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcudXNlci1iYXNrZXRfX29yZGVyLWl0ZW1zJyk7XG4gICAgICBcbiAgICAgIGlmIChpdGVtT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlID0gaXRlbU9wdGlvbi5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSB0aGlzLmRhdGFzZXQuYmFzaWNQcmljZTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LndlaWdodCA9IGl0ZW1PcHRpb24uZGF0YXNldC5jdXJyZW50V2VpZ2h0O1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAobWludXMpIHtcbiAgICAgICAgaWYgKHZhbE51bSA+IDEpIHtcbiAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSB2YWxOdW0gLSAxO1xuICAgICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LmNvdW50ID0gZGF0YUNvdW50TnVtIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGx1cykge1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSB2YWxOdW0gKyAxO1xuICAgICAgICB0aGlzLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgKyBwYXJzZUludCh0aGlzLmRhdGFzZXQuYmFzaWNQcmljZSwgMTApO1xuICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBkYXRhQ291bnROdW0gKyAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoYWRkKSB7XG4gICAgICAgIHZhciBuZXdFbGVtID0gYmFza2V0Q2FydC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBiYXNrZXQuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgKyBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKTtcbiAgICAgICAgYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIHBhcnNlSW50KHRoaXMuZGF0YXNldC50b3RhbFByaWNlLCAxMCk7XG4gICAgICAgIGJhc2tldC5kYXRhc2V0Lm5hbWUgPSBjYXJ0TmFtZS50ZXh0Q29udGVudDtcbiAgICAgICAgbmV3RWxlbS5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLWl0ZW0taGVhZGxpbmUnKS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0Lm5hbWU7XG4gICAgICAgIG5ld0VsZW0ucXVlcnlTZWxlY3RvcignLnVzZXItYmFza2V0X19vcmRlci1pdGVtLXdlaWdodCcpLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LndlaWdodDtcbiAgICAgICAgbmV3RWxlbS5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLWl0ZW0tY2FsY3VsYXRpbmctdGV4dCcpLnRleHRDb250ZW50ID0gdmFsLnRleHRDb250ZW50O1xuICAgICAgICBuZXdFbGVtLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJhc2tldF9fb3JkZXItaXRlbS10b3RhbC1wcmljZScpLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgIG5ld0VsZW0ucXVlcnlTZWxlY3RvcignLnVzZXItYmFza2V0X19vcmRlci1pdGVtLXRvdGFsLXByaWNlLXdyYXAnKS5kYXRhc2V0LmJhc2ljUHJpY2UgPSB0aGlzLmRhdGFzZXQuYmFzaWNQcmljZTtcbiAgICAgICAgaWYgKHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgPCAxKSB7XG4gICAgICAgICAgYmFza2V0VG90YWxPcmRlclByaWNlV3JhcC5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldF9fb3JkZXItdG90YWwtd3JhcC0taGlkZGVuJyk7XG4gICAgICAgICAgYmFza2V0RW1wdHlIZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWJhc2tldF9fb3JkZXItZW1wdHktaGVhZGxpbmUtd3JhcC0taGlkZGVuJyk7XG4gICAgICAgICAgYmFza2V0VG90YWxPcmRlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3VzZXItYmFza2V0X19vcmRlci1pbnB1dC1saXN0LXdyYXAtLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2tldFRvdGFsT3JkZXJQcmljZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndXNlci1iYXNrZXRfX29yZGVyLXRvdGFsLXdyYXAtLWhpZGRlbicpO1xuICAgICAgICAgIGJhc2tldEVtcHR5SGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgndXNlci1iYXNrZXRfX29yZGVyLWVtcHR5LWhlYWRsaW5lLXdyYXAtLWhpZGRlbicpO1xuICAgICAgICAgIGJhc2tldFRvdGFsT3JkZXJJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWJhc2tldF9fb3JkZXItaW5wdXQtbGlzdC13cmFwLS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIHZhciBiYXNrZXRNaW51cyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmJhc2tldEl0ZW1NaW51cy1qcycpO1xuICAgICAgICAgIHZhciBiYXNrZXRWYWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRJdGVtVmFsLWpzJyk7XG4gICAgICAgICAgdmFyIGJhc2tldFBsdXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5iYXNrZXRJdGVtUGx1cy1qcycpO1xuICAgICAgICAgIHZhciBiYXNrZXRCYXNpY1ByaWNlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudXNlci1iYXNrZXRfX29yZGVyLWl0ZW0tdG90YWwtcHJpY2Utd3JhcCcpO1xuICAgICAgICAgIHZhciBiYXNrZXRUb3RhbFByaWNlTGkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJhc2tldF9fb3JkZXItaXRlbS10b3RhbC1wcmljZScpO1xuICAgICAgICAgIHZhciBiYXNrZXRSZW1vdmUgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy51c2VyLWJhc2tldF9fb3JkZXItaXRlbS1leGl0Jyk7XG5cbiAgICAgICAgICBpZiAoYmFza2V0TWludXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChiYXNrZXRWYWwudGV4dENvbnRlbnQsIDEwKSA+IDEpIHtcbiAgICAgICAgICAgICAgYmFza2V0VmFsLnRleHRDb250ZW50ID0gcGFyc2VJbnQoYmFza2V0VmFsLnRleHRDb250ZW50LCAxMCkgLSAxO1xuICAgICAgICAgICAgICBiYXNrZXQuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgLSAxO1xuICAgICAgICAgICAgICBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQoYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSwgMTApIC0gcGFyc2VJbnQoYmFza2V0QmFzaWNQcmljZS5kYXRhc2V0LmJhc2ljUHJpY2UsIDEwKTtcbiAgICAgICAgICAgICAgYmFza2V0VG90YWxQcmljZUxpLnRleHRDb250ZW50ID0gcGFyc2VJbnQoYmFza2V0VG90YWxQcmljZUxpLnRleHRDb250ZW50LCAxMCkgLSBwYXJzZUludChiYXNrZXRCYXNpY1ByaWNlLmRhdGFzZXQuYmFzaWNQcmljZSwgMTApO1xuICAgICAgICAgICAgICBiYXNrZXRUb3RhbE9yZGVyUHJpY2UudGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICAgICAgICBiYXNrZXRUb3RhbFByaWNlLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBiYXNrZXRDb3VudC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBiYXNrZXRDb3VudFtqXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChiYXNrZXRQbHVzKSB7XG4gICAgICAgICAgICBiYXNrZXRWYWwudGV4dENvbnRlbnQgPSBwYXJzZUludChiYXNrZXRWYWwudGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgICAgICAgICBiYXNrZXQuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgKyAxO1xuICAgICAgICAgICAgYmFza2V0LmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIHBhcnNlSW50KGJhc2tldEJhc2ljUHJpY2UuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgICAgICBiYXNrZXRUb3RhbFByaWNlTGkudGV4dENvbnRlbnQgPSBwYXJzZUludChiYXNrZXRUb3RhbFByaWNlTGkudGV4dENvbnRlbnQsIDEwKSArIHBhcnNlSW50KGJhc2tldEJhc2ljUHJpY2UuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgICAgICBiYXNrZXRUb3RhbE9yZGVyUHJpY2UudGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICAgICAgYmFza2V0VG90YWxQcmljZS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IGJhc2tldENvdW50Lmxlbmd0aDsgaiA8IGpMZW47IGorKykge1xuICAgICAgICAgICAgICBiYXNrZXRDb3VudFtqXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoYmFza2V0UmVtb3ZlKSB7XG4gICAgICAgICAgICBiYXNrZXQuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KGJhc2tldC5kYXRhc2V0LmNvdW50LCAxMCkgLSBwYXJzZUludChiYXNrZXRWYWwudGV4dENvbnRlbnQsIDEwKTtcbiAgICAgICAgICAgIGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludChiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgLSBwYXJzZUludChiYXNrZXRUb3RhbFByaWNlTGkudGV4dENvbnRlbnQsIDEwKTtcbiAgICAgICAgICAgIGJhc2tldFRvdGFsT3JkZXJQcmljZS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgICBiYXNrZXRUb3RhbFByaWNlLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqTGVuID0gYmFza2V0Q291bnQubGVuZ3RoOyBqIDwgakxlbjsgaisrKSB7XG4gICAgICAgICAgICAgIGJhc2tldENvdW50W2pdLnRleHRDb250ZW50ID0gYmFza2V0LmRhdGFzZXQuY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYmFza2V0LmRhdGFzZXQuY291bnQsIDEwKSA8IDEpIHtcbiAgICAgICAgICAgICAgYmFza2V0VG90YWxPcmRlclByaWNlV3JhcC5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldF9fb3JkZXItdG90YWwtd3JhcC0taGlkZGVuJyk7XG4gICAgICAgICAgICAgIGJhc2tldEVtcHR5SGVhZGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgndXNlci1iYXNrZXRfX29yZGVyLWVtcHR5LWhlYWRsaW5lLXdyYXAtLWhpZGRlbicpO1xuICAgICAgICAgICAgICBiYXNrZXRUb3RhbE9yZGVySW5wdXQuY2xhc3NMaXN0LmFkZCgndXNlci1iYXNrZXRfX29yZGVyLWlucHV0LWxpc3Qtd3JhcC0taGlkZGVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBiYXNrZXRUb3RhbE9yZGVyUHJpY2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3VzZXItYmFza2V0X19vcmRlci10b3RhbC13cmFwLS1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgYmFza2V0RW1wdHlIZWFkbGluZS5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldF9fb3JkZXItZW1wdHktaGVhZGxpbmUtd3JhcC0taGlkZGVuJyk7XG4gICAgICAgICAgICAgIGJhc2tldFRvdGFsT3JkZXJJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWJhc2tldF9fb3JkZXItaW5wdXQtbGlzdC13cmFwLS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBiYXNrZXRDb3VudC5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICBiYXNrZXRDb3VudFtqXS50ZXh0Q29udGVudCA9IGJhc2tldC5kYXRhc2V0LmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGJhc2tldFRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICBiYXNrZXRDYXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW0pO1xuICAgICAgICBiYXNrZXRUb3RhbE9yZGVyUHJpY2UudGV4dENvbnRlbnQgPSBiYXNrZXQuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBvcGVuQmFza2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwYXJzZUludChiYXNrZXQuZGF0YXNldC5jb3VudCwgMTApIDwgMSkge1xuICAgICAgYmFza2V0VG90YWxPcmRlclByaWNlV3JhcC5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldF9fb3JkZXItdG90YWwtd3JhcC0taGlkZGVuJyk7XG4gICAgICBiYXNrZXRFbXB0eUhlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3VzZXItYmFza2V0X19vcmRlci1lbXB0eS1oZWFkbGluZS13cmFwLS1oaWRkZW4nKTtcbiAgICAgIGJhc2tldFRvdGFsT3JkZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldF9fb3JkZXItaW5wdXQtbGlzdC13cmFwLS1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFza2V0VG90YWxPcmRlclByaWNlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWJhc2tldF9fb3JkZXItdG90YWwtd3JhcC0taGlkZGVuJyk7XG4gICAgICBiYXNrZXRFbXB0eUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ3VzZXItYmFza2V0X19vcmRlci1lbXB0eS1oZWFkbGluZS13cmFwLS1oaWRkZW4nKTtcbiAgICAgIGJhc2tldFRvdGFsT3JkZXJJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWJhc2tldF9fb3JkZXItaW5wdXQtbGlzdC13cmFwLS1oaWRkZW4nKTtcbiAgICB9XG4gICAgYmFza2V0LmNsYXNzTGlzdC50b2dnbGUoJ3VzZXItYmFza2V0LS1vcGVuJyk7XG4gIH0pO1xuICBcbiAgb3BlbkJhc2tldEJ1dHRvblNlY29uZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGFyc2VJbnQoYmFza2V0LmRhdGFzZXQuY291bnQsIDEwKSA8IDEpIHtcbiAgICAgIGJhc2tldFRvdGFsT3JkZXJQcmljZVdyYXAuY2xhc3NMaXN0LmFkZCgndXNlci1iYXNrZXRfX29yZGVyLXRvdGFsLXdyYXAtLWhpZGRlbicpO1xuICAgICAgYmFza2V0RW1wdHlIZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWJhc2tldF9fb3JkZXItZW1wdHktaGVhZGxpbmUtd3JhcC0taGlkZGVuJyk7XG4gICAgICBiYXNrZXRUb3RhbE9yZGVySW5wdXQuY2xhc3NMaXN0LmFkZCgndXNlci1iYXNrZXRfX29yZGVyLWlucHV0LWxpc3Qtd3JhcC0taGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2tldFRvdGFsT3JkZXJQcmljZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndXNlci1iYXNrZXRfX29yZGVyLXRvdGFsLXdyYXAtLWhpZGRlbicpO1xuICAgICAgYmFza2V0RW1wdHlIZWFkbGluZS5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldF9fb3JkZXItZW1wdHktaGVhZGxpbmUtd3JhcC0taGlkZGVuJyk7XG4gICAgICBiYXNrZXRUb3RhbE9yZGVySW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgndXNlci1iYXNrZXRfX29yZGVyLWlucHV0LWxpc3Qtd3JhcC0taGlkZGVuJyk7XG4gICAgfVxuICAgIGJhc2tldC5jbGFzc0xpc3QuYWRkKCd1c2VyLWJhc2tldC0tb3BlbicpO1xuICB9KTtcbn0pKCk7XG5cbi8vIFNsaWRlclxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1bGFyLWdvb2RzX19zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5wb3B1bGFyLWdvb2RzX19zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBzbGlkZVRyYW5zaXRpb246ICdlYXNlJyxcbiAgICAgICAgc21hcnRTcGVlZDogMjAwLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE4MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgbWFyZ2luOiAxMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgbWFyZ2luOiA1MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgICAgICBtYXJnaW46IDI1XG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX21lbnUtYnV0dG9uLXdyYXAnKTtcbiAgdmFyIG1lbnVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2xpc3QnKTtcbiAgdmFyIG1lbnVFeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19saXN0LWV4aXQtYnV0dG9uJyk7XG4gIFxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXZfX2xpc3QtLW9wZW4nKTtcbiAgfSk7XG4gIFxuICBtZW51RXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2X19saXN0LS1vcGVuJyk7XG4gIH0pO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=