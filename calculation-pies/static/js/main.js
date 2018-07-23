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
	
	// Select
	
	(function () {
	  var select = document.querySelectorAll('.calculation-select');
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var val = this.querySelector('.val-js');
	      var option = evt.target.closest('.option-js');
	
	      this.classList.toggle('calculation-select--close');
	
	      if (option) {
	        val.textContent = option.textContent;
	      }
	    });
	  }
	})();
	
	// Checkbox
	(function () {
	  var check = document.querySelectorAll('.checkbox-js');
	
	  for (var i = 0, len = check.length; i < len; i++) {
	    check[i].addEventListener('click', function (evt) {
	      var item = evt.target.closest('.checkbox-item-js');
	      var innerItem = evt.target.closest('.checkbox-item-inner-js');
	      var itemInput = this.querySelector('.checkbox-item-input-js');
	
	      if (item) {
	        if (!itemInput.checked) {
	          itemInput.setAttribute('checked', '');
	          this.classList.remove('calculation__fill-checkbox-wrap--close');
	        } else {
	          itemInput.removeAttribute('checked', '');
	          this.classList.add('calculation__fill-checkbox-wrap--close');
	        }
	      }
	
	      if (innerItem) {
	        var innerItemInput = innerItem.querySelector('.checkbox-item-inner-input-js');
	        if (!innerItemInput.checked) {
	          innerItemInput.setAttribute('checked', '');
	        } else {
	          innerItemInput.removeAttribute('checked', '');
	        }
	      }
	    });
	  }
	})();
	
	// Table-Cart
	(function () {
	  var cart = document.querySelectorAll('.calculation__cart');
	  var select = document.querySelectorAll('.cart-select-js');
	  var price = document.querySelectorAll('.calculation__cart-td-price');
	  var table = document.querySelector('.calculation__table');
	
	  table.setAttribute('data-totalPrice', '');
	  console.log(table.querySelector('.calculation__cart').dataset.count);
	
	  var calculateTablePrice = function calculateTablePrice(elem) {
	    var tableCarts = elem.querySelectorAll('.calculation__cart');
	    var totalPrice;
	    var sum = 0;
	
	    for (var j = 0, jlen = tableCarts.length; j < jlen; j++) {
	      totalPrice = parseInt(tableCarts[j].dataset.totalPrice, 10);
	      sum = sum + totalPrice;
	    }
	
	    return sum;
	  };
	
	  console.log(calculateTablePrice(table));
	
	  for (var i = 0, len = price.length; i < len; i++) {
	    price[i].setAttribute('data-price', '');
	    price[i].dataset.price = select[i].dataset.currentPrice;
	    price[i].textContent = price[i].dataset.price;
	  }
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var val = this.querySelector('.calculation__cart-select-val');
	      var option = evt.target.closest('.calculation__cart-select-option');
	
	      this.classList.toggle('calculation__cart-select--close');
	
	      if (option) {
	        val.dataset.currentPrice = option.dataset.price;
	        this.dataset.currentPrice = val.dataset.currentPrice;
	        val.textContent = option.textContent;
	      }
	    });
	  }
	
	  for (var i = 0, len = cart.length; i < len; i++) {
	    cart[i].setAttribute('data-count', '1');
	    cart[i].setAttribute('data-total-price', '');
	    cart[i].dataset.totalPrice = select[i].dataset.currentPrice;
	    cart[i].querySelector('.calculation__cart-td-total-price').textContent = cart[i].dataset.totalPrice;
	    cart[i].addEventListener('click', function (evt) {
	      var price = this.querySelector('.calculation__cart-td-price');
	      var selectPrice = evt.target.closest('.cart-select-js');
	      var minus = evt.target.closest('.calculation__incDec-button--minus');
	      var incDecVal = this.querySelector('.calculation__incDec-val');
	      var plus = evt.target.closest('.calculation__incDec-button--plus');
	      var totalPrice = this.querySelector('.calculation__cart-td-total-price');
	      var remove = evt.target.closest('.calculation__cart-remove-button');
	
	      if (selectPrice) {
	        price.dataset.price = selectPrice.dataset.currentPrice;
	        price.textContent = price.dataset.price;
	        totalPrice.textContent = price.dataset.price;
	        this.dataset.totalPrice = price.dataset.price;
	      }
	
	      if (minus) {
	        if (parseInt(incDecVal.textContent, 10) > 1) {
	          this.dataset.count = parseInt(this.dataset.count, 10) - 1;
	          this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) - parseInt(price.dataset.price, 10);
	          incDecVal.textContent = parseInt(incDecVal.textContent, 10) - 1;
	          totalPrice.textContent = this.dataset.totalPrice;
	        }
	      }
	
	      if (plus) {
	        this.dataset.count = parseInt(this.dataset.count, 10) + 1;
	        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(price.dataset.price, 10);
	        incDecVal.textContent = parseInt(incDecVal.textContent, 10) + 1;
	        totalPrice.textContent = this.dataset.totalPrice;
	      }
	
	      if (remove) {
	        this.dataset.totalPrice = 0;
	        this.dataset.count = 0;
	        this.remove();
	      }
	    });
	  }
	})();
	
	// Tel
	(function () {
	  $(document).ready(function () {
	    $('.tel-js').mask("+0(000) 000-0000", { placeholder: "+7(_ _ _) _ _ _ - _ _ _ _" });
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWIyOWMxNzVkNDE0YmMwNzIyZjQiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidmFsIiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0ZXh0Q29udGVudCIsImNoZWNrIiwiaXRlbSIsImlubmVySXRlbSIsIml0ZW1JbnB1dCIsImNoZWNrZWQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGQiLCJpbm5lckl0ZW1JbnB1dCIsImNhcnQiLCJwcmljZSIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImRhdGFzZXQiLCJjb3VudCIsImNhbGN1bGF0ZVRhYmxlUHJpY2UiLCJlbGVtIiwidGFibGVDYXJ0cyIsInRvdGFsUHJpY2UiLCJzdW0iLCJqIiwiamxlbiIsInBhcnNlSW50IiwiY3VycmVudFByaWNlIiwic2VsZWN0UHJpY2UiLCJtaW51cyIsImluY0RlY1ZhbCIsInBsdXMiLCIkIiwicmVhZHkiLCJtYXNrIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOztBQUNBLEVBQUMsWUFBWTtBQUNYLE9BQUlBLFNBQVNDLFNBQVNDLGdCQUFULENBQTBCLHFCQUExQixDQUFiOztBQUVBLFFBQUss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QUFjSixLQUF2QixFQUE4QixFQUE5QixDQUFsRTtBQUNBaUIsbUJBQVU3QixXQUFWLEdBQXdCeUIsU0FBU0ksVUFBVTdCLFdBQW5CLEVBQWdDLEVBQWhDLElBQXNDLENBQTlEO0FBQ0FxQixvQkFBV3JCLFdBQVgsR0FBeUIsS0FBS2dCLE9BQUwsQ0FBYUssVUFBdEM7QUFDRDs7QUFFRCxXQUFJZCxNQUFKLEVBQVk7QUFDVixjQUFLUyxPQUFMLENBQWFLLFVBQWIsR0FBMEIsQ0FBMUI7QUFDQSxjQUFLTCxPQUFMLENBQWFDLEtBQWIsR0FBcUIsQ0FBckI7QUFDQSxjQUFLVixNQUFMO0FBQ0Q7QUFDRixNQXJDRDtBQXNDRDtBQUNGLEVBekZEOztBQTJGQTtBQUNBLEVBQUMsWUFBWTtBQUNYd0IsS0FBRTdDLFFBQUYsRUFBWThDLEtBQVosQ0FBa0IsWUFBVTtBQUMxQkQsT0FBRSxTQUFGLEVBQWFFLElBQWIsQ0FBa0Isa0JBQWxCLEVBQXNDLEVBQUNDLGFBQWEsMkJBQWQsRUFBdEM7QUFDRCxJQUZEO0FBR0QsRUFKRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhYjI5YzE3NWQ0MTRiYzA3MjJmNCIsIid1c2Ugc3RyaWN0JztcblxuLy8gU2VsZWN0XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uLXNlbGVjdCcpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNlbGVjdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy52YWwtanMnKTtcbiAgICAgIHZhciBvcHRpb24gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5vcHRpb24tanMnKTtcbiAgICAgIFxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjYWxjdWxhdGlvbi1zZWxlY3QtLWNsb3NlJyk7XG4gICAgICBcbiAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgdmFsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBDaGVja2JveFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LWpzJyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hlY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjaGVja1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBpdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gtaXRlbS1qcycpO1xuICAgICAgdmFyIGlubmVySXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrYm94LWl0ZW0taW5uZXItanMnKTtcbiAgICAgIHZhciBpdGVtSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1pdGVtLWlucHV0LWpzJyk7XG4gICAgICBcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIGlmICghKGl0ZW1JbnB1dC5jaGVja2VkKSkge1xuICAgICAgICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjYWxjdWxhdGlvbl9fZmlsbC1jaGVja2JveC13cmFwLS1jbG9zZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjYWxjdWxhdGlvbl9fZmlsbC1jaGVja2JveC13cmFwLS1jbG9zZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChpbm5lckl0ZW0pIHtcbiAgICAgICAgdmFyIGlubmVySXRlbUlucHV0ID0gaW5uZXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1pdGVtLWlubmVyLWlucHV0LWpzJyk7IFxuICAgICAgICBpZiAoIShpbm5lckl0ZW1JbnB1dC5jaGVja2VkKSkge1xuICAgICAgICAgIGlubmVySXRlbUlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbm5lckl0ZW1JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gVGFibGUtQ2FydFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQnKTtcbiAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LXNlbGVjdC1qcycpO1xuICB2YXIgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtcHJpY2UnKTtcbiAgdmFyIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX190YWJsZScpO1xuICBcbiAgdGFibGUuc2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsUHJpY2UnLCAnJyk7XG4gIGNvbnNvbGUubG9nKHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydCcpLmRhdGFzZXQuY291bnQpO1xuICBcbiAgdmFyIGNhbGN1bGF0ZVRhYmxlUHJpY2UgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHZhciB0YWJsZUNhcnRzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQnKTtcbiAgICB2YXIgdG90YWxQcmljZTtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBcbiAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IHRhYmxlQ2FydHMubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICB0b3RhbFByaWNlID0gcGFyc2VJbnQodGFibGVDYXJ0c1tqXS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKTtcbiAgICAgIHN1bSA9IHN1bSArIHRvdGFsUHJpY2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdW1cbiAgfTtcbiAgXG4gIGNvbnNvbGUubG9nKGNhbGN1bGF0ZVRhYmxlUHJpY2UodGFibGUpKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcmljZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHByaWNlW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICBwcmljZVtpXS5kYXRhc2V0LnByaWNlID0gc2VsZWN0W2ldLmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgIHByaWNlW2ldLnRleHRDb250ZW50ID0gcHJpY2VbaV0uZGF0YXNldC5wcmljZTtcbiAgfVxuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNlbGVjdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydC1zZWxlY3QtdmFsJyk7XG4gICAgICB2YXIgb3B0aW9uID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2NhcnQtc2VsZWN0LW9wdGlvbicpO1xuICAgICAgXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NhbGN1bGF0aW9uX19jYXJ0LXNlbGVjdC0tY2xvc2UnKTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICB2YWwuZGF0YXNldC5jdXJyZW50UHJpY2UgPSBvcHRpb24uZGF0YXNldC5wcmljZTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LmN1cnJlbnRQcmljZSA9IHZhbC5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgdmFsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJ0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2FydFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnLCAnMScpO1xuICAgIGNhcnRbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsLXByaWNlJywgJycpO1xuICAgIGNhcnRbaV0uZGF0YXNldC50b3RhbFByaWNlID0gc2VsZWN0W2ldLmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgIGNhcnRbaV0ucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jYXJ0LXRkLXRvdGFsLXByaWNlJykudGV4dENvbnRlbnQgPSBjYXJ0W2ldLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICBjYXJ0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIHByaWNlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtcHJpY2UnKTtcbiAgICAgIHZhciBzZWxlY3RQcmljZSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhcnQtc2VsZWN0LWpzJyk7XG4gICAgICB2YXIgbWludXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYWxjdWxhdGlvbl9faW5jRGVjLWJ1dHRvbi0tbWludXMnKTtcbiAgICAgIHZhciBpbmNEZWNWYWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9faW5jRGVjLXZhbCcpO1xuICAgICAgdmFyIHBsdXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYWxjdWxhdGlvbl9faW5jRGVjLWJ1dHRvbi0tcGx1cycpO1xuICAgICAgdmFyIHRvdGFsUHJpY2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydC10ZC10b3RhbC1wcmljZScpO1xuICAgICAgdmFyIHJlbW92ZSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0aW9uX19jYXJ0LXJlbW92ZS1idXR0b24nKTtcbiAgICAgIFxuICAgICAgaWYgKHNlbGVjdFByaWNlKSB7XG4gICAgICAgIHByaWNlLmRhdGFzZXQucHJpY2UgPSBzZWxlY3RQcmljZS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmljZS5kYXRhc2V0LnByaWNlO1xuICAgICAgICB0b3RhbFByaWNlLnRleHRDb250ZW50ID0gcHJpY2UuZGF0YXNldC5wcmljZTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwcmljZS5kYXRhc2V0LnByaWNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAobWludXMpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KGluY0RlY1ZhbC50ZXh0Q29udGVudCwgMTApID4gMSkge1xuICAgICAgICAgIHRoaXMuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApIC0gMTtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgLSBwYXJzZUludChwcmljZS5kYXRhc2V0LnByaWNlLCAxMCk7XG4gICAgICAgICAgaW5jRGVjVmFsLnRleHRDb250ZW50ID0gcGFyc2VJbnQoaW5jRGVjVmFsLnRleHRDb250ZW50LCAxMCkgLSAxO1xuICAgICAgICAgIHRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAocGx1cykge1xuICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKSArIDE7XG4gICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIHBhcnNlSW50KHByaWNlLmRhdGFzZXQucHJpY2UsIDEwKTtcbiAgICAgICAgaW5jRGVjVmFsLnRleHRDb250ZW50ID0gcGFyc2VJbnQoaW5jRGVjVmFsLnRleHRDb250ZW50LCAxMCkgKyAxO1xuICAgICAgICB0b3RhbFByaWNlLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSAwO1xuICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSAwO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBUZWxcbihmdW5jdGlvbiAoKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLnRlbC1qcycpLm1hc2soXCIrMCgwMDApIDAwMC0wMDAwXCIsIHtwbGFjZWhvbGRlcjogXCIrNyhfIF8gXykgXyBfIF8gLSBfIF8gXyBfXCJ9KTtcbiAgfSk7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==