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
	  var tableTotalPrice = document.querySelector('.calculation__table-result-price');
	  var tableTotalCount = document.querySelector('.table-total-price-js');
	
	  table.setAttribute('data-total-price', '4000');
	  table.setAttribute('data-total-count', '4');
	
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
	          table.dataset.totalCount = parseInt(table.dataset.totalCount, 10) - 1;
	          table.dataset.totalPrice = parseInt(table.dataset.totalPrice, 10) - parseInt(price.dataset.price, 10);
	          tableTotalCount.textContent = table.dataset.totalCount;
	          tableTotalPrice.textContent = table.dataset.totalPrice;
	        }
	      }
	
	      if (plus) {
	        this.dataset.count = parseInt(this.dataset.count, 10) + 1;
	        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(price.dataset.price, 10);
	        incDecVal.textContent = parseInt(incDecVal.textContent, 10) + 1;
	        totalPrice.textContent = this.dataset.totalPrice;
	        table.dataset.totalCount = parseInt(table.dataset.totalCount, 10) + 1;
	        table.dataset.totalPrice = parseInt(table.dataset.totalPrice, 10) + parseInt(price.dataset.price, 10);
	        tableTotalCount.textContent = table.dataset.totalCount;
	        tableTotalPrice.textContent = table.dataset.totalPrice;
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
	
	    $("#ex13").slider({
	      ticks: [0, 100, 200, 300, 400],
	      ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
	      ticks_snap_bounds: 30
	    });
	
	    var myTrack = document.querySelector('.calculation__range-wrap');
	    var myTooltip = document.querySelector('.tooltip');
	
	    myTrack.addEventListener('mouseenter', function () {
	      myTooltip.style.opacity = '1';
	    });
	
	    myTrack.addEventListener('mouseleave', function () {
	      myTooltip.style.opacity = '0';
	    });
	  });
	})();
	
	//// Range
	//(function () {
	//  var range = document.querySelector('.calculation__range');
	//  var pin = range.querySelector('.calculation__range-bar-pin-wrap');
	//  var bar = range.querySelector('.calculation__range-bar');
	//  
	//  pin.addEventListener('mousedown', function (evt) {
	//    var barRect = bar.getBoundingClientRect();
	//    var pinPosition;
	//    console.log(bar.offsetLeft);
	//    
	//    var startCoords = {
	//      x: evt.clientX
	//    };
	//    
	//    var onMouseMove = function (moveEvt) {
	//      var shift = {
	//        x: startCoords.x - moveEvt.clientX
	//      };
	//      
	//      startCoords = {
	//        x: moveEvt.clientX
	//      };
	//      
	//      pin.style.left = (pin.offsetLeft - shift.x) + 'px';
	//      
	//      if (parseInt(pin.style.left, 10) > barRect.width) {
	//        pin.style.left = barRect.width + 'px';
	//      }
	//    };
	//    
	//    var onMouseUp = function (upEvt) {
	//      document.removeEventListener('mousemove', onMouseMove);
	//      document.removeEventListener('mouseup', onMouseUp);
	//    };
	//    
	//    document.addEventListener('mousemove', onMouseMove);
	//    document.addEventListener('mouseup', onMouseUp);
	//  });
	//})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjJhZDQ3ZjY4NTU3NDgzZWQyNzQiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidmFsIiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0ZXh0Q29udGVudCIsImNoZWNrIiwiaXRlbSIsImlubmVySXRlbSIsIml0ZW1JbnB1dCIsImNoZWNrZWQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGQiLCJpbm5lckl0ZW1JbnB1dCIsImNhcnQiLCJwcmljZSIsInRhYmxlIiwidGFibGVUb3RhbFByaWNlIiwidGFibGVUb3RhbENvdW50IiwiZGF0YXNldCIsImN1cnJlbnRQcmljZSIsInRvdGFsUHJpY2UiLCJzZWxlY3RQcmljZSIsIm1pbnVzIiwiaW5jRGVjVmFsIiwicGx1cyIsInBhcnNlSW50IiwiY291bnQiLCJ0b3RhbENvdW50IiwiJCIsInJlYWR5IiwibWFzayIsInBsYWNlaG9sZGVyIiwic2xpZGVyIiwidGlja3MiLCJ0aWNrc19sYWJlbHMiLCJ0aWNrc19zbmFwX2JvdW5kcyIsIm15VHJhY2siLCJteVRvb2x0aXAiLCJzdHlsZSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOztBQUNBLEVB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QixHQUFuQixDQURTO0FBRWhCQyxxQkFBYyxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsTUFBZixFQUF1QixNQUF2QixFQUErQixNQUEvQixDQUZFO0FBR2hCQywwQkFBbUI7QUFISCxNQUFsQjs7QUFNQSxTQUFJQyxVQUFVaEQsU0FBU1EsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBZDtBQUNBLFNBQUl5QyxZQUFZakQsU0FBU1EsYUFBVCxDQUF1QixVQUF2QixDQUFoQjs7QUFFQXdDLGFBQVEzQyxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFZO0FBQ2pENEMsaUJBQVVDLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLEdBQTFCO0FBQ0QsTUFGRDs7QUFJQUgsYUFBUTNDLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFlBQVk7QUFDakQ0QyxpQkFBVUMsS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsR0FBMUI7QUFDRCxNQUZEO0FBR0QsSUFuQkQ7QUFvQkQsRUFyQkQ7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIyYWQ0N2Y2ODU1NzQ4M2VkMjc0IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTZWxlY3RcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb24tc2VsZWN0Jyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2VsZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnZhbC1qcycpO1xuICAgICAgdmFyIG9wdGlvbiA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLm9wdGlvbi1qcycpO1xuICAgICAgXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NhbGN1bGF0aW9uLXNlbGVjdC0tY2xvc2UnKTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIENoZWNrYm94XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtanMnKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGVjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNoZWNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGl0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1pdGVtLWpzJyk7XG4gICAgICB2YXIgaW5uZXJJdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gtaXRlbS1pbm5lci1qcycpO1xuICAgICAgdmFyIGl0ZW1JbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWl0ZW0taW5wdXQtanMnKTtcbiAgICAgIFxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgaWYgKCEoaXRlbUlucHV0LmNoZWNrZWQpKSB7XG4gICAgICAgICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGN1bGF0aW9uX19maWxsLWNoZWNrYm94LXdyYXAtLWNsb3NlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0aW9uX19maWxsLWNoZWNrYm94LXdyYXAtLWNsb3NlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGlubmVySXRlbSkge1xuICAgICAgICB2YXIgaW5uZXJJdGVtSW5wdXQgPSBpbm5lckl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWl0ZW0taW5uZXItaW5wdXQtanMnKTsgXG4gICAgICAgIGlmICghKGlubmVySXRlbUlucHV0LmNoZWNrZWQpKSB7XG4gICAgICAgICAgaW5uZXJJdGVtSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVySXRlbUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBUYWJsZS1DYXJ0XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGlvbl9fY2FydCcpO1xuICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnQtc2VsZWN0LWpzJyk7XG4gIHZhciBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGlvbl9fY2FydC10ZC1wcmljZScpO1xuICB2YXIgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3RhYmxlJyk7XG4gIHZhciB0YWJsZVRvdGFsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3RhYmxlLXJlc3VsdC1wcmljZScpO1xuICB2YXIgdGFibGVUb3RhbENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXRvdGFsLXByaWNlLWpzJyk7XG4gIFxuICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtcHJpY2UnLCAnNDAwMCcpO1xuICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtY291bnQnLCAnNCcpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByaWNlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgcHJpY2VbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgIHByaWNlW2ldLmRhdGFzZXQucHJpY2UgPSBzZWxlY3RbaV0uZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgcHJpY2VbaV0udGV4dENvbnRlbnQgPSBwcmljZVtpXS5kYXRhc2V0LnByaWNlO1xuICB9XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2VsZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jYXJ0LXNlbGVjdC12YWwnKTtcbiAgICAgIHZhciBvcHRpb24gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYWxjdWxhdGlvbl9fY2FydC1zZWxlY3Qtb3B0aW9uJyk7XG4gICAgICBcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnY2FsY3VsYXRpb25fX2NhcnQtc2VsZWN0LS1jbG9zZScpO1xuICAgICAgXG4gICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgIHZhbC5kYXRhc2V0LmN1cnJlbnRQcmljZSA9IG9wdGlvbi5kYXRhc2V0LnByaWNlO1xuICAgICAgICB0aGlzLmRhdGFzZXQuY3VycmVudFByaWNlID0gdmFsLmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhcnQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjYXJ0W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcsICcxJyk7XG4gICAgY2FydFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtcHJpY2UnLCAnJyk7XG4gICAgY2FydFtpXS5kYXRhc2V0LnRvdGFsUHJpY2UgPSBzZWxlY3RbaV0uZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgY2FydFtpXS5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtdG90YWwtcHJpY2UnKS50ZXh0Q29udGVudCA9IGNhcnRbaV0uZGF0YXNldC50b3RhbFByaWNlO1xuICAgIGNhcnRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgcHJpY2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydC10ZC1wcmljZScpO1xuICAgICAgdmFyIHNlbGVjdFByaWNlID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FydC1zZWxlY3QtanMnKTtcbiAgICAgIHZhciBtaW51cyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0aW9uX19pbmNEZWMtYnV0dG9uLS1taW51cycpO1xuICAgICAgdmFyIGluY0RlY1ZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19pbmNEZWMtdmFsJyk7XG4gICAgICB2YXIgcGx1cyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0aW9uX19pbmNEZWMtYnV0dG9uLS1wbHVzJyk7XG4gICAgICB2YXIgdG90YWxQcmljZSA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jYXJ0LXRkLXRvdGFsLXByaWNlJyk7XG4gICAgICB2YXIgcmVtb3ZlID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2NhcnQtcmVtb3ZlLWJ1dHRvbicpO1xuICAgICAgXG4gICAgICBpZiAoc2VsZWN0UHJpY2UpIHtcbiAgICAgICAgcHJpY2UuZGF0YXNldC5wcmljZSA9IHNlbGVjdFByaWNlLmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IHByaWNlLmRhdGFzZXQucHJpY2U7XG4gICAgICAgIHRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZS5kYXRhc2V0LnByaWNlO1xuICAgICAgICB0aGlzLmRhdGFzZXQudG90YWxQcmljZSA9IHByaWNlLmRhdGFzZXQucHJpY2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChtaW51cykge1xuICAgICAgICBpZiAocGFyc2VJbnQoaW5jRGVjVmFsLnRleHRDb250ZW50LCAxMCkgPiAxKSB7XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LmNvdW50ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LmNvdW50LCAxMCkgLSAxO1xuICAgICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KHByaWNlLmRhdGFzZXQucHJpY2UsIDEwKTtcbiAgICAgICAgICBpbmNEZWNWYWwudGV4dENvbnRlbnQgPSBwYXJzZUludChpbmNEZWNWYWwudGV4dENvbnRlbnQsIDEwKSAtIDE7XG4gICAgICAgICAgdG90YWxQcmljZS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICAgIHRhYmxlLmRhdGFzZXQudG90YWxDb3VudCA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxDb3VudCwgMTApIC0gMTtcbiAgICAgICAgICB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KHByaWNlLmRhdGFzZXQucHJpY2UsIDEwKTtcbiAgICAgICAgICB0YWJsZVRvdGFsQ291bnQudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgdGFibGVUb3RhbFByaWNlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChwbHVzKSB7XG4gICAgICAgIHRoaXMuZGF0YXNldC5jb3VudCA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb3VudCwgMTApICsgMTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQocHJpY2UuZGF0YXNldC5wcmljZSwgMTApO1xuICAgICAgICBpbmNEZWNWYWwudGV4dENvbnRlbnQgPSBwYXJzZUludChpbmNEZWNWYWwudGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgICAgIHRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgdGFibGUuZGF0YXNldC50b3RhbENvdW50ID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbENvdW50LCAxMCkgKyAxO1xuICAgICAgICB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIHBhcnNlSW50KHByaWNlLmRhdGFzZXQucHJpY2UsIDEwKTtcbiAgICAgICAgdGFibGVUb3RhbENvdW50LnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC50b3RhbENvdW50O1xuICAgICAgICB0YWJsZVRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSAwO1xuICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSAwO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBUZWxcbihmdW5jdGlvbiAoKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLnRlbC1qcycpLm1hc2soXCIrMCgwMDApIDAwMC0wMDAwXCIsIHtwbGFjZWhvbGRlcjogXCIrNyhfIF8gXykgXyBfIF8gLSBfIF8gXyBfXCJ9KTtcbiAgICBcbiAgICAkKFwiI2V4MTNcIikuc2xpZGVyKHtcbiAgICAgIHRpY2tzOiBbMCwgMTAwLCAyMDAsIDMwMCwgNDAwXSxcbiAgICAgIHRpY2tzX2xhYmVsczogWyckMCcsICckMTAwJywgJyQyMDAnLCAnJDMwMCcsICckNDAwJ10sXG4gICAgICB0aWNrc19zbmFwX2JvdW5kczogMzBcbiAgICB9KTtcbiAgICBcbiAgICB2YXIgbXlUcmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fcmFuZ2Utd3JhcCcpO1xuICAgIHZhciBteVRvb2x0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcCcpO1xuICAgIFxuICAgIG15VHJhY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG15VG9vbHRpcC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH0pO1xuICAgIFxuICAgIG15VHJhY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG15VG9vbHRpcC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuICB9KTtcbn0pKCk7XG5cbi8vLy8gUmFuZ2Vcbi8vKGZ1bmN0aW9uICgpIHtcbi8vICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3JhbmdlJyk7XG4vLyAgdmFyIHBpbiA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fcmFuZ2UtYmFyLXBpbi13cmFwJyk7XG4vLyAgdmFyIGJhciA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fcmFuZ2UtYmFyJyk7XG4vLyAgXG4vLyAgcGluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbi8vICAgIHZhciBiYXJSZWN0ID0gYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gICAgdmFyIHBpblBvc2l0aW9uO1xuLy8gICAgY29uc29sZS5sb2coYmFyLm9mZnNldExlZnQpO1xuLy8gICAgXG4vLyAgICB2YXIgc3RhcnRDb29yZHMgPSB7XG4vLyAgICAgIHg6IGV2dC5jbGllbnRYXG4vLyAgICB9O1xuLy8gICAgXG4vLyAgICB2YXIgb25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAobW92ZUV2dCkge1xuLy8gICAgICB2YXIgc2hpZnQgPSB7XG4vLyAgICAgICAgeDogc3RhcnRDb29yZHMueCAtIG1vdmVFdnQuY2xpZW50WFxuLy8gICAgICB9O1xuLy8gICAgICBcbi8vICAgICAgc3RhcnRDb29yZHMgPSB7XG4vLyAgICAgICAgeDogbW92ZUV2dC5jbGllbnRYXG4vLyAgICAgIH07XG4vLyAgICAgIFxuLy8gICAgICBwaW4uc3R5bGUubGVmdCA9IChwaW4ub2Zmc2V0TGVmdCAtIHNoaWZ0LngpICsgJ3B4Jztcbi8vICAgICAgXG4vLyAgICAgIGlmIChwYXJzZUludChwaW4uc3R5bGUubGVmdCwgMTApID4gYmFyUmVjdC53aWR0aCkge1xuLy8gICAgICAgIHBpbi5zdHlsZS5sZWZ0ID0gYmFyUmVjdC53aWR0aCArICdweCc7XG4vLyAgICAgIH1cbi8vICAgIH07XG4vLyAgICBcbi8vICAgIHZhciBvbk1vdXNlVXAgPSBmdW5jdGlvbiAodXBFdnQpIHtcbi8vICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuLy8gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbi8vICAgIH07XG4vLyAgICBcbi8vICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbi8vICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuLy8gIH0pO1xuLy99KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==