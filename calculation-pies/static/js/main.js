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
	  var selectStep = document.querySelector('.calculation__checkbox-number--step1');
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var val = this.querySelector('.val-js');
	      var option = evt.target.closest('.option-js');
	
	      this.classList.toggle('calculation-select--close');
	
	      if (option) {
	        val.textContent = option.textContent;
	        selectStep.style.backgroundColor = '#37B84C';
	        selectStep.style.color = '#ffffff';
	      }
	    });
	  }
	})();
	
	// Checkbox
	(function () {
	  var check = document.querySelectorAll('.checkbox-js');
	  var checkStep = document.querySelector('.calculation__checkbox-number--step3');
	
	  for (var i = 0, len = check.length; i < len; i++) {
	    check[i].addEventListener('click', function (evt) {
	      var item = evt.target.closest('.checkbox-item-js');
	      var innerItem = evt.target.closest('.checkbox-item-inner-js');
	      var itemInput = this.querySelector('.checkbox-item-input-js');
	
	      if (item) {
	        if (!itemInput.checked) {
	          itemInput.setAttribute('checked', '');
	          this.classList.remove('calculation__fill-checkbox-wrap--close');
	          checkStep.classList.add('step3-checked');
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
	  var step2 = document.querySelector('.calculation__checkbox-number--step2');
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
	
	    myTrack.addEventListener('mousemove', function () {
	      if (parseInt(myTooltip.style.left, 10) >= 2) {
	        step2.style.backgroundColor = '#37B84C';
	        step2.style.color = '#ffffff';
	      }
	    });
	
	    myTrack.addEventListener('mouseleave', function () {
	      myTooltip.style.opacity = '0';
	    });
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWJjNmZlNmFkMDg3YjNkZjNlODUiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdFN0ZXAiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImxlbiIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ2YWwiLCJvcHRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2hlY2siLCJjaGVja1N0ZXAiLCJpdGVtIiwiaW5uZXJJdGVtIiwiaXRlbUlucHV0IiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImFkZCIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVySXRlbUlucHV0IiwiY2FydCIsInByaWNlIiwidGFibGUiLCJ0YWJsZVRvdGFsUHJpY2UiLCJ0YWJsZVRvdGFsQ291bnQiLCJkYXRhc2V0IiwiY3VycmVudFByaWNlIiwidG90YWxQcmljZSIsInNlbGVjdFByaWNlIiwibWludXMiLCJpbmNEZWNWYWwiLCJwbHVzIiwicGFyc2VJbnQiLCJjb3VudCIsInRvdGFsQ291bnQiLCJzdGVwMiIsIiQiLCJyZWFkeSIsIm1hc2siLCJwbGFjZWhvbGRlciIsInNsaWRlciIsInRpY2tzIiwidGlja3NfbGFiZWxzIiwidGlja3Nfc25hcF9ib3VuZHMiLCJteVRyYWNrIiwibXlUb29sdGlwIiwib3BhY2l0eSIsImxlZnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFH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QVIsQ0FBeUIsWUFBekIsRUFBdUMsWUFBWTtBQUNqRGdELGlCQUFVdkMsS0FBVixDQUFnQndDLE9BQWhCLEdBQTBCLEdBQTFCO0FBQ0QsTUFGRDtBQUdELElBM0JEO0FBNEJELEVBOUJELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDliYzZmZTZhZDA4N2IzZGYzZTg1IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTZWxlY3RcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb24tc2VsZWN0Jyk7XG4gIHZhciBzZWxlY3RTdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jaGVja2JveC1udW1iZXItLXN0ZXAxJyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2VsZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnZhbC1qcycpO1xuICAgICAgdmFyIG9wdGlvbiA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLm9wdGlvbi1qcycpO1xuICAgICAgXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NhbGN1bGF0aW9uLXNlbGVjdC0tY2xvc2UnKTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgIHNlbGVjdFN0ZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzN0I4NEMnO1xuICAgICAgICBzZWxlY3RTdGVwLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBDaGVja2JveFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LWpzJyk7XG4gIHZhciBjaGVja1N0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NoZWNrYm94LW51bWJlci0tc3RlcDMnKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGVjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNoZWNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGl0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1pdGVtLWpzJyk7XG4gICAgICB2YXIgaW5uZXJJdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gtaXRlbS1pbm5lci1qcycpO1xuICAgICAgdmFyIGl0ZW1JbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWl0ZW0taW5wdXQtanMnKTtcbiAgICAgIFxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgaWYgKCEoaXRlbUlucHV0LmNoZWNrZWQpKSB7XG4gICAgICAgICAgaXRlbUlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGN1bGF0aW9uX19maWxsLWNoZWNrYm94LXdyYXAtLWNsb3NlJyk7XG4gICAgICAgICAgY2hlY2tTdGVwLmNsYXNzTGlzdC5hZGQoJ3N0ZXAzLWNoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRpb25fX2ZpbGwtY2hlY2tib3gtd3JhcC0tY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoaW5uZXJJdGVtKSB7XG4gICAgICAgIHZhciBpbm5lckl0ZW1JbnB1dCA9IGlubmVySXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtaXRlbS1pbm5lci1pbnB1dC1qcycpOyBcbiAgICAgICAgaWYgKCEoaW5uZXJJdGVtSW5wdXQuY2hlY2tlZCkpIHtcbiAgICAgICAgICBpbm5lckl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5uZXJJdGVtSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIFRhYmxlLUNhcnRcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uX19jYXJ0Jyk7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1zZWxlY3QtanMnKTtcbiAgdmFyIHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uX19jYXJ0LXRkLXByaWNlJyk7XG4gIHZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fdGFibGUnKTtcbiAgdmFyIHRhYmxlVG90YWxQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fdGFibGUtcmVzdWx0LXByaWNlJyk7XG4gIHZhciB0YWJsZVRvdGFsQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtdG90YWwtcHJpY2UtanMnKTtcbiAgXG4gIHRhYmxlLnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1wcmljZScsICc0MDAwJyk7XG4gIHRhYmxlLnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1jb3VudCcsICc0Jyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcHJpY2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBwcmljZVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XG4gICAgcHJpY2VbaV0uZGF0YXNldC5wcmljZSA9IHNlbGVjdFtpXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICBwcmljZVtpXS50ZXh0Q29udGVudCA9IHByaWNlW2ldLmRhdGFzZXQucHJpY2U7XG4gIH1cbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxlY3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzZWxlY3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgdmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NhcnQtc2VsZWN0LXZhbCcpO1xuICAgICAgdmFyIG9wdGlvbiA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0aW9uX19jYXJ0LXNlbGVjdC1vcHRpb24nKTtcbiAgICAgIFxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjYWxjdWxhdGlvbl9fY2FydC1zZWxlY3QtLWNsb3NlJyk7XG4gICAgICBcbiAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgdmFsLmRhdGFzZXQuY3VycmVudFByaWNlID0gb3B0aW9uLmRhdGFzZXQucHJpY2U7XG4gICAgICAgIHRoaXMuZGF0YXNldC5jdXJyZW50UHJpY2UgPSB2YWwuZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgICAgIHZhbC50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FydC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNhcnRbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgJzEnKTtcbiAgICBjYXJ0W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1wcmljZScsICcnKTtcbiAgICBjYXJ0W2ldLmRhdGFzZXQudG90YWxQcmljZSA9IHNlbGVjdFtpXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICBjYXJ0W2ldLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydC10ZC10b3RhbC1wcmljZScpLnRleHRDb250ZW50ID0gY2FydFtpXS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgY2FydFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBwcmljZSA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jYXJ0LXRkLXByaWNlJyk7XG4gICAgICB2YXIgc2VsZWN0UHJpY2UgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0LXNlbGVjdC1qcycpO1xuICAgICAgdmFyIG1pbnVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2luY0RlYy1idXR0b24tLW1pbnVzJyk7XG4gICAgICB2YXIgaW5jRGVjVmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2luY0RlYy12YWwnKTtcbiAgICAgIHZhciBwbHVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2luY0RlYy1idXR0b24tLXBsdXMnKTtcbiAgICAgIHZhciB0b3RhbFByaWNlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtdG90YWwtcHJpY2UnKTtcbiAgICAgIHZhciByZW1vdmUgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYWxjdWxhdGlvbl9fY2FydC1yZW1vdmUtYnV0dG9uJyk7XG4gICAgICBcbiAgICAgIGlmIChzZWxlY3RQcmljZSkge1xuICAgICAgICBwcmljZS5kYXRhc2V0LnByaWNlID0gc2VsZWN0UHJpY2UuZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gcHJpY2UuZGF0YXNldC5wcmljZTtcbiAgICAgICAgdG90YWxQcmljZS50ZXh0Q29udGVudCA9IHByaWNlLmRhdGFzZXQucHJpY2U7XG4gICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcHJpY2UuZGF0YXNldC5wcmljZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKG1pbnVzKSB7XG4gICAgICAgIGlmIChwYXJzZUludChpbmNEZWNWYWwudGV4dENvbnRlbnQsIDEwKSA+IDEpIHtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQuY291bnQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY291bnQsIDEwKSAtIDE7XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApIC0gcGFyc2VJbnQocHJpY2UuZGF0YXNldC5wcmljZSwgMTApO1xuICAgICAgICAgIGluY0RlY1ZhbC50ZXh0Q29udGVudCA9IHBhcnNlSW50KGluY0RlY1ZhbC50ZXh0Q29udGVudCwgMTApIC0gMTtcbiAgICAgICAgICB0b3RhbFByaWNlLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgdGFibGUuZGF0YXNldC50b3RhbENvdW50ID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbENvdW50LCAxMCkgLSAxO1xuICAgICAgICAgIHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSwgMTApIC0gcGFyc2VJbnQocHJpY2UuZGF0YXNldC5wcmljZSwgMTApO1xuICAgICAgICAgIHRhYmxlVG90YWxDb3VudC50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQudG90YWxDb3VudDtcbiAgICAgICAgICB0YWJsZVRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHBsdXMpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0LmNvdW50ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LmNvdW50LCAxMCkgKyAxO1xuICAgICAgICB0aGlzLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgKyBwYXJzZUludChwcmljZS5kYXRhc2V0LnByaWNlLCAxMCk7XG4gICAgICAgIGluY0RlY1ZhbC50ZXh0Q29udGVudCA9IHBhcnNlSW50KGluY0RlY1ZhbC50ZXh0Q29udGVudCwgMTApICsgMTtcbiAgICAgICAgdG90YWxQcmljZS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQsIDEwKSArIDE7XG4gICAgICAgIHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQocHJpY2UuZGF0YXNldC5wcmljZSwgMTApO1xuICAgICAgICB0YWJsZVRvdGFsQ291bnQudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQ7XG4gICAgICAgIHRhYmxlVG90YWxQcmljZS50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICB0aGlzLmRhdGFzZXQudG90YWxQcmljZSA9IDA7XG4gICAgICAgIHRoaXMuZGF0YXNldC5jb3VudCA9IDA7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIFRlbFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0ZXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jaGVja2JveC1udW1iZXItLXN0ZXAyJyk7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLnRlbC1qcycpLm1hc2soXCIrMCgwMDApIDAwMC0wMDAwXCIsIHtwbGFjZWhvbGRlcjogXCIrNyhfIF8gXykgXyBfIF8gLSBfIF8gXyBfXCJ9KTtcbiAgICBcbiAgICAkKFwiI2V4MTNcIikuc2xpZGVyKHtcbiAgICAgIHRpY2tzOiBbMCwgMTAwLCAyMDAsIDMwMCwgNDAwXSxcbiAgICAgIHRpY2tzX2xhYmVsczogWyckMCcsICckMTAwJywgJyQyMDAnLCAnJDMwMCcsICckNDAwJ10sXG4gICAgICB0aWNrc19zbmFwX2JvdW5kczogMzBcbiAgICB9KTtcbiAgICBcbiAgICB2YXIgbXlUcmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fcmFuZ2Utd3JhcCcpO1xuICAgIHZhciBteVRvb2x0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcCcpO1xuICAgIFxuICAgIFxuICAgIG15VHJhY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG15VG9vbHRpcC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH0pO1xuICAgIFxuICAgIG15VHJhY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHBhcnNlSW50KG15VG9vbHRpcC5zdHlsZS5sZWZ0LCAxMCkgPj0gMikge1xuICAgICAgICBzdGVwMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM3Qjg0Qyc7XG4gICAgICAgIHN0ZXAyLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIG15VHJhY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG15VG9vbHRpcC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuICB9KTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9