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
	
	new WOW().init();
	
	// menu
	(function () {
	  var btn = document.querySelector('.navigaton button');
	  var ticket = document.querySelector('.tick');
	  var subMenu = document.querySelector('.hamb');
	  var subMenuTicket = document.querySelector('.ticket');
	  var nav = document.querySelector('.navigaton--header');
	  var pageHeader = document.querySelector('.page-header');
	  var pageContent = document.querySelector('.page-content');
	  var basket = document.querySelector('.basket');
	  var tel = document.querySelector('.telephone');
	
	  btn.addEventListener('click', function () {
	    this.classList.toggle('open');
	    subMenu.classList.toggle('navigaton__submenu--close');
	    subMenuTicket.classList.add('navigaton__submenu--close');
	    ticket.classList.remove('open');
	  });
	
	  ticket.addEventListener('click', function () {
	    this.classList.toggle('open');
	    subMenuTicket.classList.toggle('navigaton__submenu--close');
	    subMenu.classList.add('navigaton__submenu--close');
	    btn.classList.remove('open');
	  });
	
	  function mediaQuery(x) {
	    if (x.matches) {
	      document.removeEventListener('scroll', function () {
	        var pos = nav.getBoundingClientRect();
	        var ph = pageHeader.getBoundingClientRect();
	        var docPosition = document.documentElement.scrollTop || document.body.scrollTop;
	
	        if (pos.top <= 0) {
	          nav.classList.add('sticky');
	          pageContent.classList.add('navSticky');
	          basket.classList.add('sticky');
	          tel.classList.add('sticky');
	        }
	
	        if (docPosition < 119) {
	          nav.classList.remove('sticky');
	          pageContent.classList.remove('navSticky');
	          basket.classList.remove('sticky');
	          tel.classList.remove('sticky');
	        }
	      });
	    } else {
	      document.addEventListener('scroll', function () {
	        var pos = nav.getBoundingClientRect();
	        var ph = pageHeader.getBoundingClientRect();
	        var docPosition = document.documentElement.scrollTop || document.body.scrollTop;
	
	        if (pos.top <= 0) {
	          nav.classList.add('sticky');
	          pageContent.classList.add('navSticky');
	          basket.classList.add('sticky');
	          tel.classList.add('sticky');
	        }
	
	        if (docPosition < 119) {
	          nav.classList.remove('sticky');
	          pageContent.classList.remove('navSticky');
	          basket.classList.remove('sticky');
	          tel.classList.remove('sticky');
	        }
	      });
	    }
	  }
	  var x = window.matchMedia("(max-width: 640px)");
	  mediaQuery(x);
	  x.addListener(mediaQuery);
	})();
	
	// aside
	(function () {
	  var title = document.querySelectorAll('.aside h2');
	
	  for (var i = 0, len = title.length; i < len; i++) {
	    title[i].addEventListener('click', function () {
	      this.nextElementSibling.classList.toggle('close');
	    });
	  }
	})();
	
	// cart
	(function () {
	  var btn = document.querySelectorAll('.carts__cart .text .row button');
	  var close = document.querySelectorAll('.carts__cart .exit');
	
	  for (var i = 0, len = btn.length; i < len; i++) {
	    btn[i].addEventListener('click', function () {
	      var wrap = this.closest('.carts__cart .text');
	      var cart = this.closest('.carts__cart');
	      var close = cart.querySelector('.exit');
	
	      wrap.nextElementSibling.classList.remove('close');
	      cart.style.borderColor = 'transparent';
	      close.classList.remove('hidden');
	    });
	  };
	
	  for (var _i = 0, _len = close.length; _i < _len; _i++) {
	    close[_i].addEventListener('click', function () {
	      var cart = this.closest('.carts__cart');
	      var description = cart.querySelector('.cart__description');
	
	      this.classList.add('hidden');
	      cart.style.borderColor = '#f0f0f0';
	      description.classList.add('close');
	    });
	  };
	})();
	
	// privacy
	(function () {
	  var privacy = document.querySelector('.reviews-form .privacy');
	
	  if (privacy !== null) {
	    privacy.addEventListener('click', function (evt) {
	      var input = this.querySelector('.reviews-form .privacy input');
	      var span = evt.target.closest('.reviews-form .privacy span');
	
	      if (span) {
	        if (span.classList.contains('check')) {
	          span.classList.remove('check');
	          input.removeAttribute('checked', '');
	        } else {
	          span.classList.add('check');
	          input.setAttribute('checked', '');
	        }
	      };
	    });
	  }
	})();
	
	// basket-order
	(function () {
	  var carts = document.querySelectorAll('.basket-order .cont li p.price');
	
	  var getTotalPrice = function getTotalPrice(elem) {
	    var price = 0;
	    for (var i = 0, len = elem.length; i < len; i++) {
	      price = price + parseInt(elem[i].textContent, 10);
	    };
	
	    return price;
	  };
	
	  console.log(getTotalPrice(carts));
	})();
	
	// slider index
	(function () {
	  var slider = document.querySelector('.slider--index');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".slider--index").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        dots: true,
	        responsive: {
	          1800: {
	            items: 3,
	            margin: 9
	          },
	          1340: {
	            items: 2,
	            margin: 9
	          },
	          1001: {
	            items: 1,
	            margin: 0,
	            dots: false
	          },
	          970: {
	            items: 2,
	            margin: 9,
	            dots: false
	          },
	          320: {
	            items: 1,
	            margin: 0,
	            dots: false
	          }
	        }
	      });
	    });
	  }
	})();
	
	// calendar
	(function () {
	  var calendar = document.querySelector('.calendar');
	
	  if (calendar !== null) {
	    $(document).ready(function () {
	      $(".calendar").datepicker({
	        dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
	        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	        firstDay: 0
	      });
	    });
	  }
	})();
	
	// slider musician
	(function () {
	  var slider = document.querySelector('.slider--musician');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".slider--musician").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        dots: false,
	        responsive: {
	          1800: {
	            items: 7,
	            margin: 22
	          },
	          1360: {
	            items: 5,
	            margin: 22
	          },
	          1001: {
	            items: 3,
	            margin: 22
	          },
	          420: {
	            items: 2,
	            margin: 22
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
	
	// slider reviews
	(function () {
	  var slider = document.querySelector('.slider--reviews');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".slider--reviews").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        dots: true,
	        responsive: {
	          1400: {
	            items: 1,
	            margin: 0
	          },
	          320: {
	            items: 1,
	            margin: 0,
	            dots: false
	          }
	        }
	      });
	    });
	  }
	})();
	
	// slider img
	(function () {
	  var slider = document.querySelector('.slider--img');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".slider--img").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        autoWidth: true,
	        nav: true,
	        dots: true,
	        responsive: {
	          1800: {
	            items: 4,
	            margin: 2
	          },
	          1360: {
	            items: 5,
	            margin: 22
	          },
	          1001: {
	            items: 3,
	            margin: 22,
	            dots: false
	          },
	          420: {
	            items: 2,
	            margin: 22,
	            dots: false
	          },
	          320: {
	            items: 1,
	            margin: 0,
	            dots: false
	          }
	        }
	      });
	    });
	  }
	})();
	
	// slider photo
	(function () {
	  var slider = document.querySelector('.slider--photo');
	
	  if (slider !== null) {
	    $(document).ready(function () {
	      $(".slider--photo").owlCarousel({
	        slideTransition: 'ease',
	        smartSpeed: 200,
	        autoplay: false,
	        nav: true,
	        dots: true,
	        responsive: {
	          1800: {
	            items: 4,
	            margin: 2
	          },
	          1360: {
	            items: 3,
	            margin: 2
	          },
	          1001: {
	            items: 3,
	            margin: 2,
	            dots: false
	          },
	          420: {
	            items: 2,
	            margin: 2,
	            dots: false
	          },
	          320: {
	            items: 1,
	            margin: 0,
	            dots: false
	          }
	        }
	      });
	    });
	  }
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2JhYmU5ODc4MGQ4MDkyYzE5ZDYiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIldPVyIsImluaXQiLCJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aWNrZXQiLCJzdWJNZW51Iiwic3ViTWVudVRpY2tldCIsIm5hdiIsInBhZ2VIZWFkZXIiLCJwYWdlQ29udGVudCIsImJhc2tldCIsInRlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGQiLCJyZW1vdmUiLCJtZWRpYVF1ZXJ5IiwieCIsIm1hdGNoZXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGgiLCJkb2NQb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJ0b3AiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuIiwibGVuZ3RoIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2xvc2UiLCJ3cmFwIiwiY2xvc2VzdCIsImNhcnQiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiZGVzY3JpcHRpb24iLCJwcml2YWN5IiwiZXZ0IiwiaW5wdXQiLCJzcGFuIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJjYXJ0cyIsImdldFRvdGFsUHJpY2UiLCJlbGVtIiwicHJpY2UiLCJwYXJzZUludCIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsInNsaWRlciIsIiQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwic2xpZGVUcmFuc2l0aW9uIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwiZG90cyIsInJlc3BvbnNpdmUiLCJpdGVtcyIsIm1hcmdpbiIsImNhbGVuZGFyIiwiZGF0ZXBpY2tlciIsImRheU5hbWVzTWluIiwibW9udGhOYW1lcyIsImZpcnN0RGF5IiwiYXV0b1dpZHRoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQSxLQUFJQSxHQUFKLEdBQVVDLElBQVY7O0FBRUE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFNQyxNQUFNQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFaO0FBQ0EsT0FBTUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFmO0FBQ0EsT0FBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUNBLE9BQU1HLGdCQUFnQkosU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUF0QjtBQUNBLE9BQU1JLE1BQU1MLFNBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVo7QUFDQSxPQUFNSyxhQUFhTixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsT0FBTU0sY0FBY1AsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLE9BQU1PLFNBQVNSLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLE9BQU1RLE1BQU1ULFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjs7QUFFQUYsT0FBSVcsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4QyxVQUFLQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsTUFBdEI7QUFDQVQsYUFBUVEsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsMkJBQXpCO0FBQ0FSLG1CQUFjTyxTQUFkLENBQXdCRSxHQUF4QixDQUE0QiwyQkFBNUI7QUFDQVgsWUFBT1MsU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0IsTUFBeEI7QUFDRCxJQUxEOztBQU9BWixVQUFPUSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO0FBQzNDLFVBQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixNQUF0QjtBQUNBUixtQkFBY08sU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsMkJBQS9CO0FBQ0FULGFBQVFRLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLDJCQUF0QjtBQUNBZCxTQUFJWSxTQUFKLENBQWNHLE1BQWQsQ0FBcUIsTUFBckI7QUFDRCxJQUxEOztBQU9BLFlBQVNDLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ3JCLFNBQUlBLEVBQUVDLE9BQU4sRUFBZTtBQUNiakIsZ0JBQVNrQixtQkFBVCxDQUE2QixRQUE3QixFQUF1QyxZQUFZO0FBQ2pELGFBQUlDLE1BQU1kLElBQUllLHFCQUFKLEVBQVY7QUFDQSxhQUFJQyxLQUFLZixXQUFXYyxxQkFBWCxFQUFUO0FBQ0EsYUFBSUUsY0FBY3RCLFNBQVN1QixlQUFULENBQXlCQyxTQUF6QixJQUFzQ3hCLFNBQVN5QixJQUFULENBQWNELFNBQXRFOztBQUVBLGFBQUlMLElBQUlPLEdBQUosSUFBVyxDQUFmLEVBQWtCO0FBQ2hCckIsZUFBSU0sU0FBSixDQUFjRSxHQUFkLENBQWtCLFFBQWxCO0FBQ0FOLHVCQUFZSSxTQUFaLENBQXNCRSxHQUF0QixDQUEwQixXQUExQjtBQUNBTCxrQkFBT0csU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsUUFBckI7QUFDQUosZUFBSUUsU0FBSixDQUFjRSxHQUFkLENBQWtCLFFBQWxCO0FBQ0Q7O0FBRUQsYUFBSVMsY0FBYyxHQUFsQixFQUF1QjtBQUNyQmpCLGVBQUlNLFNBQUosQ0FBY0csTUFBZCxDQUFxQixRQUFyQjtBQUNBUCx1QkFBWUksU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsV0FBN0I7QUFDQU4sa0JBQU9HLFNBQVAsQ0FBaUJHLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0FMLGVBQUlFLFNBQUosQ0FBY0csTUFBZCxDQUFxQixRQUFyQjtBQUNEO0FBQ0YsUUFsQkQ7QUFtQkQsTUFwQkQsTUFvQk87QUFDTGQsZ0JBQVNVLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQVk7QUFDOUMsYUFBSVMsTUFBTWQsSUFBSWUscUJBQUosRUFBVjtBQUNBLGFBQUlDLEtBQUtmLFdBQVdjLHFCQUFYLEVBQVQ7QUFDQSxhQUFJRSxjQUFjdEIsU0FBU3VCLGVBQVQsQ0FBeUJDLFNBQXpCLElBQXNDeEIsU0FBU3lCLElBQVQsQ0FBY0QsU0FBdEU7O0FBRUEsYUFBSUwsSUFBSU8sR0FBSixJQUFXLENBQWYsRUFBa0I7QUFDaEJyQixlQUFJTSxTQUFKLENBQWNFLEdBQWQsQ0FBa0IsUUFBbEI7QUFDQU4sdUJBQVlJLFNBQVosQ0FBc0JFLEdBQXRCLENBQTBCLFdBQTFCO0FBQ0FMLGtCQUFPRyxTQUFQLENBQWlCRSxHQUFqQixDQUFxQixRQUFyQjtBQUNBSixlQUFJRSxTQUFKLENBQWNFLEdBQWQsQ0FBa0IsUUFBbEI7QUFDRDs7QUFFRCxhQUFJUyxjQUFjLEdBQWxCLEVBQXVCO0FBQ3JCakIsZUFBSU0sU0FBSixDQUFjRyxNQUFkLENBQXFCLFFBQXJCO0FBQ0FQLHVCQUFZSSxTQUFaLENBQXNCRyxNQUF0QixDQUE2QixXQUE3QjtBQUNBTixrQkFBT0csU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQUwsZUFBSUUsU0FBSixDQUFjRyxNQUFkLENBQXFCLFFBQXJCO0FBQ0Q7QUFDRixRQWxCRDtBQW1CRDtBQUNGO0FBQ0QsT0FBSUUsSUFBSVcsT0FBT0MsVUFBUCxDQUFrQixvQkFBbEIsQ0FBUjtBQUNBYixjQUFXQyxDQUFYO0FBQ0FBLEtBQUVhLFdBQUYsQ0FBY2QsVUFBZDtBQUNELEVBdkVEOztBQXlFQTtBQUNBLEVBQUMsWUFBWTtBQUNYLE9BQU1lLFFBQVE5QixTQUFTK0IsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBZDs7QUFFQSxRQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNSCxNQUFNSSxNQUE1QixFQUFvQ0YsSUFBSUMsR0FBeEMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2hERixXQUFNRSxDQUFOLEVBQVN0QixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDLFlBQUt5QixrQkFBTCxDQUF3QnhCLFNBQXhCLENBQWtDQyxNQUFsQyxDQUF5QyxPQUF6QztBQUNELE1BRkQ7QUFHRDtBQUNGLEVBUkQ7O0FBVUE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFNYixNQUFNQyxTQUFTK0IsZ0JBQVQsQ0FBMEIsZ0NBQTFCLENBQVo7QUFDQSxPQUFNSyxRQUFRcEMsU0FBUytCLGdCQUFULENBQTBCLG9CQUExQixDQUFkOztBQUVBLFFBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLE1BQU1sQyxJQUFJbUMsTUFBMUIsRUFBa0NGLElBQUlDLEdBQXRDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5Q2pDLFNBQUlpQyxDQUFKLEVBQU90QixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO0FBQzNDLFdBQUkyQixPQUFPLEtBQUtDLE9BQUwsQ0FBYSxvQkFBYixDQUFYO0FBQ0EsV0FBSUMsT0FBTyxLQUFLRCxPQUFMLENBQWEsY0FBYixDQUFYO0FBQ0EsV0FBSUYsUUFBUUcsS0FBS3RDLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBWjs7QUFFQW9DLFlBQUtGLGtCQUFMLENBQXdCeEIsU0FBeEIsQ0FBa0NHLE1BQWxDLENBQXlDLE9BQXpDO0FBQ0F5QixZQUFLQyxLQUFMLENBQVdDLFdBQVgsR0FBeUIsYUFBekI7QUFDQUwsYUFBTXpCLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0QsTUFSRDtBQVNEOztBQUVELFFBQUssSUFBSWtCLEtBQUksQ0FBUixFQUFXQyxPQUFNRyxNQUFNRixNQUE1QixFQUFvQ0YsS0FBSUMsSUFBeEMsRUFBNkNELElBQTdDLEVBQWtEO0FBQ2hESSxXQUFNSixFQUFOLEVBQVN0QixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDLFdBQUk2QixPQUFPLEtBQUtELE9BQUwsQ0FBYSxjQUFiLENBQVg7QUFDQSxXQUFJSSxjQUFjSCxLQUFLdEMsYUFBTCxDQUFtQixvQkFBbkIsQ0FBbEI7O0FBRUEsWUFBS1UsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFFBQW5CO0FBQ0EwQixZQUFLQyxLQUFMLENBQVdDLFdBQVgsR0FBeUIsU0FBekI7QUFDQUMsbUJBQVkvQixTQUFaLENBQXNCRSxHQUF0QixDQUEwQixPQUExQjtBQUNELE1BUEQ7QUFRRDtBQUNGLEVBMUJEOztBQTRCQTtBQUNBLEVBQUMsWUFBWTtBQUNYLE9BQU04QixVQUFVM0MsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBaEI7O0FBRUEsT0FBSTBDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJBLGFBQVFqQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVa0MsR0FBVixFQUFlO0FBQy9DLFdBQUlDLFFBQVEsS0FBSzVDLGFBQUwsQ0FBbUIsOEJBQW5CLENBQVo7QUFDQSxXQUFJNkMsT0FBT0YsSUFBSUcsTUFBSixDQUFXVCxPQUFYLENBQW1CLDZCQUFuQixDQUFYOztBQUVBLFdBQUlRLElBQUosRUFBVTtBQUNSLGFBQUlBLEtBQUtuQyxTQUFMLENBQWVxQyxRQUFmLENBQXdCLE9BQXhCLENBQUosRUFBc0M7QUFDcENGLGdCQUFLbkMsU0FBTCxDQUFlRyxNQUFmLENBQXNCLE9BQXRCO0FBQ0ErQixpQkFBTUksZUFBTixDQUFzQixTQUF0QixFQUFpQyxFQUFqQztBQUNELFVBSEQsTUFHTztBQUNMSCxnQkFBS25DLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixPQUFuQjtBQUNBZ0MsaUJBQU1LLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsRUFBOUI7QUFDRDtBQUNGO0FBQ0YsTUFiRDtBQWNEO0FBQ0YsRUFuQkQ7O0FBcUJBO0FBQ0EsRUFBQyxZQUFZO0FBQ1gsT0FBTUMsUUFBUW5ELFNBQVMrQixnQkFBVCxDQUEwQixnQ0FBMUIsQ0FBZDs7QUFFQSxPQUFNcUIsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxJQUFWLEVBQWdCO0FBQ3BDLFNBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQUssSUFBSXRCLElBQUksQ0FBUixFQUFXQyxNQUFNb0IsS0FBS25CLE1BQTNCLEVBQW1DRixJQUFJQyxHQUF2QyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0NzQixlQUFRQSxRQUFRQyxTQUFTRixLQUFLckIsQ0FBTCxFQUFRd0IsV0FBakIsRUFBOEIsRUFBOUIsQ0FBaEI7QUFDRDs7QUFFRCxZQUFPRixLQUFQO0FBQ0QsSUFQRDs7QUFTQUcsV0FBUUMsR0FBUixDQUFZTixjQUFjRCxLQUFkLENBQVo7QUFDRCxFQWJEOztBQWVBO0FBQ0EsRUFBQyxZQUFZO0FBQ1gsT0FBSVEsU0FBUzNELFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWI7O0FBRUEsT0FBSTBELFdBQVcsSUFBZixFQUFxQjtBQUNuQkMsT0FBRTVELFFBQUYsRUFBWTZELEtBQVosQ0FBa0IsWUFBVTtBQUMxQkQsU0FBRSxnQkFBRixFQUFvQkUsV0FBcEIsQ0FBZ0M7QUFDOUJDLDBCQUFpQixNQURhO0FBRTlCQyxxQkFBWSxHQUZrQjtBQUc5QkMsbUJBQVUsS0FIb0I7QUFJOUI1RCxjQUFLLElBSnlCO0FBSzlCNkQsZUFBTSxJQUx3QjtBQU05QkMscUJBQVk7QUFDVixpQkFBTTtBQUNKQyxvQkFBTyxDQURIO0FBRUpDLHFCQUFRO0FBRkosWUFESTtBQUtWLGlCQUFNO0FBQ0pELG9CQUFPLENBREg7QUFFSkMscUJBQVE7QUFGSixZQUxJO0FBU1YsaUJBQU07QUFDSkQsb0JBQU8sQ0FESDtBQUVKQyxxQkFBUSxDQUZKO0FBR0pILG1CQUFNO0FBSEYsWUFUSTtBQWNWLGdCQUFLO0FBQ0hFLG9CQUFPLENBREo7QUFFSEMscUJBQVEsQ0FGTDtBQUdISCxtQkFBTTtBQUhILFlBZEs7QUFtQlYsZ0JBQUs7QUFDSEUsb0JBQU8sQ0FESjtBQUVIQyxxQkFBUSxDQUZMO0FBR0hILG1CQUFNO0FBSEg7QUFuQks7QUFOa0IsUUFBaEM7QUFnQ0QsTUFqQ0Q7QUFrQ0Q7QUFDRixFQXZDRDs7QUF5Q0E7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFNSSxXQUFXdEUsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFqQjs7QUFFQSxPQUFJcUUsYUFBYSxJQUFqQixFQUF1QjtBQUNyQlYsT0FBRTVELFFBQUYsRUFBWTZELEtBQVosQ0FBa0IsWUFBVTtBQUMxQkQsU0FBRyxXQUFILEVBQWlCVyxVQUFqQixDQUE0QjtBQUMxQkMsc0JBQWEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FEYTtBQUUxQkMscUJBQVksQ0FBRSxRQUFGLEVBQVksU0FBWixFQUF1QixNQUF2QixFQUErQixRQUEvQixFQUF5QyxLQUF6QyxFQUFnRCxNQUFoRCxFQUF3RCxNQUF4RCxFQUFnRSxRQUFoRSxFQUEwRSxVQUExRSxFQUFzRixTQUF0RixFQUFpRyxRQUFqRyxFQUEyRyxTQUEzRyxDQUZjO0FBRzFCQyxtQkFBVTtBQUhnQixRQUE1QjtBQUtELE1BTkQ7QUFPRDtBQUNGLEVBWkQ7O0FBY0E7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJZixTQUFTM0QsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBYjs7QUFFQSxPQUFJMEQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFNUQsUUFBRixFQUFZNkQsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLG1CQUFGLEVBQXVCRSxXQUF2QixDQUFtQztBQUNqQ0MsMEJBQWlCLE1BRGdCO0FBRWpDQyxxQkFBWSxHQUZxQjtBQUdqQ0MsbUJBQVUsS0FIdUI7QUFJakM1RCxjQUFLLElBSjRCO0FBS2pDNkQsZUFBTSxLQUwyQjtBQU1qQ0MscUJBQVk7QUFDVixpQkFBTTtBQUNKQyxvQkFBTyxDQURIO0FBRUpDLHFCQUFRO0FBRkosWUFESTtBQUtWLGlCQUFNO0FBQ0pELG9CQUFPLENBREg7QUFFSkMscUJBQVE7QUFGSixZQUxJO0FBU1YsaUJBQU07QUFDSkQsb0JBQU8sQ0FESDtBQUVKQyxxQkFBUTtBQUZKLFlBVEk7QUFhVixnQkFBSztBQUNIRCxvQkFBTyxDQURKO0FBRUhDLHFCQUFRO0FBRkwsWUFiSztBQWlCVixnQkFBSztBQUNIRCxvQkFBTyxDQURKO0FBRUhDLHFCQUFRO0FBRkw7QUFqQks7QUFOcUIsUUFBbkM7QUE2QkQsTUE5QkQ7QUErQkQ7QUFDRixFQXBDRDs7QUFzQ0E7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJVixTQUFTM0QsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBYjs7QUFFQSxPQUFJMEQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFNUQsUUFBRixFQUFZNkQsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLGtCQUFGLEVBQXNCRSxXQUF0QixDQUFrQztBQUNoQ0MsMEJBQWlCLE1BRGU7QUFFaENDLHFCQUFZLEdBRm9CO0FBR2hDQyxtQkFBVSxLQUhzQjtBQUloQzVELGNBQUssSUFKMkI7QUFLaEM2RCxlQUFNLElBTDBCO0FBTWhDQyxxQkFBWTtBQUNWLGlCQUFNO0FBQ0pDLG9CQUFPLENBREg7QUFFSkMscUJBQVE7QUFGSixZQURJO0FBS1YsZ0JBQUs7QUFDSEQsb0JBQU8sQ0FESjtBQUVIQyxxQkFBUSxDQUZMO0FBR0hILG1CQUFNO0FBSEg7QUFMSztBQU5vQixRQUFsQztBQWtCRCxNQW5CRDtBQW9CRDtBQUNGLEVBekJEOztBQTJCQTtBQUNBLEVBQUMsWUFBWTtBQUNYLE9BQUlQLFNBQVMzRCxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWI7O0FBRUEsT0FBSTBELFdBQVcsSUFBZixFQUFxQjtBQUNuQkMsT0FBRTVELFFBQUYsRUFBWTZELEtBQVosQ0FBa0IsWUFBVTtBQUMxQkQsU0FBRSxjQUFGLEVBQWtCRSxXQUFsQixDQUE4QjtBQUM1QkMsMEJBQWlCLE1BRFc7QUFFNUJDLHFCQUFZLEdBRmdCO0FBRzVCQyxtQkFBVSxLQUhrQjtBQUk1QlUsb0JBQVcsSUFKaUI7QUFLNUJ0RSxjQUFLLElBTHVCO0FBTTVCNkQsZUFBTSxJQU5zQjtBQU81QkMscUJBQVk7QUFDVixpQkFBTTtBQUNKQyxvQkFBTyxDQURIO0FBRUpDLHFCQUFRO0FBRkosWUFESTtBQUtWLGlCQUFNO0FBQ0pELG9CQUFPLENBREg7QUFFSkMscUJBQVE7QUFGSixZQUxJO0FBU1YsaUJBQU07QUFDSkQsb0JBQU8sQ0FESDtBQUVKQyxxQkFBUSxFQUZKO0FBR0pILG1CQUFNO0FBSEYsWUFUSTtBQWNWLGdCQUFLO0FBQ0hFLG9CQUFPLENBREo7QUFFSEMscUJBQVEsRUFGTDtBQUdISCxtQkFBTTtBQUhILFlBZEs7QUFtQlYsZ0JBQUs7QUFDSEUsb0JBQU8sQ0FESjtBQUVIQyxxQkFBUSxDQUZMO0FBR0hILG1CQUFNO0FBSEg7QUFuQks7QUFQZ0IsUUFBOUI7QUFpQ0QsTUFsQ0Q7QUFtQ0Q7QUFDRixFQXhDRDs7QUEwQ0E7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJUCxTQUFTM0QsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBYjs7QUFFQSxPQUFJMEQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxPQUFFNUQsUUFBRixFQUFZNkQsS0FBWixDQUFrQixZQUFVO0FBQzFCRCxTQUFFLGdCQUFGLEVBQW9CRSxXQUFwQixDQUFnQztBQUM5QkMsMEJBQWlCLE1BRGE7QUFFOUJDLHFCQUFZLEdBRmtCO0FBRzlCQyxtQkFBVSxLQUhvQjtBQUk5QjVELGNBQUssSUFKeUI7QUFLOUI2RCxlQUFNLElBTHdCO0FBTTlCQyxxQkFBWTtBQUNWLGlCQUFNO0FBQ0pDLG9CQUFPLENBREg7QUFFSkMscUJBQVE7QUFGSixZQURJO0FBS1YsaUJBQU07QUFDSkQsb0JBQU8sQ0FESDtBQUVKQyxxQkFBUTtBQUZKLFlBTEk7QUFTVixpQkFBTTtBQUNKRCxvQkFBTyxDQURIO0FBRUpDLHFCQUFRLENBRko7QUFHSkgsbUJBQU07QUFIRixZQVRJO0FBY1YsZ0JBQUs7QUFDSEUsb0JBQU8sQ0FESjtBQUVIQyxxQkFBUSxDQUZMO0FBR0hILG1CQUFNO0FBSEgsWUFkSztBQW1CVixnQkFBSztBQUNIRSxvQkFBTyxDQURKO0FBRUhDLHFCQUFRLENBRkw7QUFHSEgsbUJBQU07QUFISDtBQW5CSztBQU5rQixRQUFoQztBQWdDRCxNQWpDRDtBQWtDRDtBQUNGLEVBdkNELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNiYWJlOTg3ODBkODA5MmMxOWQ2IiwiJ3VzZSBzdHJpY3QnO1xuXG5uZXcgV09XKCkuaW5pdCgpO1xuXG4vLyBtZW51XG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdG9uIGJ1dHRvbicpO1xuICBjb25zdCB0aWNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGljaycpO1xuICBjb25zdCBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWInKTtcbiAgY29uc3Qgc3ViTWVudVRpY2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWNrZXQnKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRvbi0taGVhZGVyJyk7XG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXInKTtcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250ZW50Jyk7XG4gIGNvbnN0IGJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXQnKTtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbGVwaG9uZScpO1xuICBcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdG9uX19zdWJtZW51LS1jbG9zZScpO1xuICAgIHN1Yk1lbnVUaWNrZXQuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdG9uX19zdWJtZW51LS1jbG9zZScpXG4gICAgdGlja2V0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgfSk7XG4gIFxuICB0aWNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgc3ViTWVudVRpY2tldC5jbGFzc0xpc3QudG9nZ2xlKCduYXZpZ2F0b25fX3N1Ym1lbnUtLWNsb3NlJyk7XG4gICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0b25fX3N1Ym1lbnUtLWNsb3NlJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgfSk7XG4gIFxuICBmdW5jdGlvbiBtZWRpYVF1ZXJ5KHgpIHtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3MgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBwaCA9IHBhZ2VIZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkb2NQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cbiAgICAgICAgaWYgKHBvcy50b3AgPD0gMCkge1xuICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcbiAgICAgICAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCduYXZTdGlja3knKTtcbiAgICAgICAgICBiYXNrZXQuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XG4gICAgICAgICAgdGVsLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmIChkb2NQb3NpdGlvbiA8IDExOSkge1xuICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcbiAgICAgICAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCduYXZTdGlja3knKTtcbiAgICAgICAgICBiYXNrZXQuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XG4gICAgICAgICAgdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9zID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcGggPSBwYWdlSGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jUG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXG4gICAgICAgIGlmIChwb3MudG9wIDw9IDApIHtcbiAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XG4gICAgICAgICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbmF2U3RpY2t5Jyk7XG4gICAgICAgICAgYmFza2V0LmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xuICAgICAgICAgIHRlbC5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcbiAgICAgICAgfSBcblxuICAgICAgICBpZiAoZG9jUG9zaXRpb24gPCAxMTkpIHtcbiAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XG4gICAgICAgICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2U3RpY2t5Jyk7XG4gICAgICAgICAgYmFza2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xuICAgICAgICAgIHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGxldCB4ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2NDBweClcIilcbiAgbWVkaWFRdWVyeSh4KVxuICB4LmFkZExpc3RlbmVyKG1lZGlhUXVlcnkpXG59KSgpO1xuXG4vLyBhc2lkZVxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXNpZGUgaDInKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aXRsZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHRpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gY2FydFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRzX19jYXJ0IC50ZXh0IC5yb3cgYnV0dG9uJyk7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRzX19jYXJ0IC5leGl0Jyk7XG4gIFxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnRuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdyYXAgPSB0aGlzLmNsb3Nlc3QoJy5jYXJ0c19fY2FydCAudGV4dCcpO1xuICAgICAgdmFyIGNhcnQgPSB0aGlzLmNsb3Nlc3QoJy5jYXJ0c19fY2FydCcpO1xuICAgICAgdmFyIGNsb3NlID0gY2FydC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpO1xuICAgICAgXG4gICAgICB3cmFwLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xuICAgICAgY2FydC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICBjbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfTtcbiAgXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbG9zZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhcnQgPSB0aGlzLmNsb3Nlc3QoJy5jYXJ0c19fY2FydCcpO1xuICAgICAgdmFyIGRlc2NyaXB0aW9uID0gY2FydC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fZGVzY3JpcHRpb24nKTtcbiAgICAgIFxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGNhcnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2YwZjBmMCc7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgIH0pO1xuICB9O1xufSkoKTtcblxuLy8gcHJpdmFjeVxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJpdmFjeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzLWZvcm0gLnByaXZhY3knKTtcbiAgXG4gIGlmIChwcml2YWN5ICE9PSBudWxsKSB7XG4gICAgcHJpdmFjeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnJldmlld3MtZm9ybSAucHJpdmFjeSBpbnB1dCcpO1xuICAgICAgdmFyIHNwYW4gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5yZXZpZXdzLWZvcm0gLnByaXZhY3kgc3BhbicpO1xuXG4gICAgICBpZiAoc3Bhbikge1xuICAgICAgICBpZiAoc3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrJykpIHtcbiAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrJyk7XG4gICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIGJhc2tldC1vcmRlclxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0LW9yZGVyIC5jb250IGxpIHAucHJpY2UnKTtcbiAgXG4gIGNvbnN0IGdldFRvdGFsUHJpY2UgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGxldCBwcmljZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHByaWNlID0gcHJpY2UgKyBwYXJzZUludChlbGVtW2ldLnRleHRDb250ZW50LCAxMCk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcHJpY2U7XG4gIH07XG4gIFxuICBjb25zb2xlLmxvZyhnZXRUb3RhbFByaWNlKGNhcnRzKSk7XG59KSgpO1xuXG4vLyBzbGlkZXIgaW5kZXhcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLS1pbmRleCcpO1xuICBcbiAgaWYgKHNsaWRlciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLnNsaWRlci0taW5kZXhcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBzbGlkZVRyYW5zaXRpb246ICdlYXNlJyxcbiAgICAgICAgc21hcnRTcGVlZDogMjAwLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE4MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgbWFyZ2luOiA5XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMzQwOiB7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIG1hcmdpbjogOVxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwMToge1xuICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgOTcwOiB7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIG1hcmdpbjogOSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZG90czogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBjYWxlbmRhclxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXInKTtcbiAgXG4gIGlmIChjYWxlbmRhciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKCBcIi5jYWxlbmRhclwiICkuZGF0ZXBpY2tlcih7XG4gICAgICAgIGRheU5hbWVzTWluOiBbXCLQn9C9XCIsIFwi0JLRglwiLCBcItCh0YBcIiwgXCLQp9GCXCIsIFwi0J/RglwiLCBcItCh0LFcIiwgXCLQktGBXCJdLFxuICAgICAgICBtb250aE5hbWVzOiBbIFwi0K/QvdCy0LDRgNGMXCIsIFwi0KTQtdCy0YDQsNC70YxcIiwgXCLQnNCw0YDRglwiLCBcItCQ0L/RgNC10LvRjFwiLCBcItCc0LDQuVwiLCBcItCY0Y7QvdGMXCIsIFwi0JjRjtC70YxcIiwgXCLQkNCy0LPRg9GB0YJcIiwgXCLQodC10L3RgtGP0LHRgNGMXCIsIFwi0J7QutGC0Y/QsdGA0YxcIiwgXCLQndC+0Y/QsdGA0YxcIiwgXCLQlNC10LrQsNCx0YDRjFwiIF0sXG4gICAgICAgIGZpcnN0RGF5OiAwLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIHNsaWRlciBtdXNpY2lhblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItLW11c2ljaWFuJyk7XG4gIFxuICBpZiAoc2xpZGVyICE9PSBudWxsKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuc2xpZGVyLS1tdXNpY2lhblwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIHNsaWRlVHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgICAgICBzbWFydFNwZWVkOiAyMDAsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE4MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA3LFxuICAgICAgICAgICAgbWFyZ2luOiAyMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTM2MDoge1xuICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICBtYXJnaW46IDIyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDAxOiB7XG4gICAgICAgICAgICBpdGVtczogMyxcbiAgICAgICAgICAgIG1hcmdpbjogMjJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDQyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgICAgICBtYXJnaW46IDIyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gc2xpZGVyIHJldmlld3NcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLS1yZXZpZXdzJyk7XG4gIFxuICBpZiAoc2xpZGVyICE9PSBudWxsKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuc2xpZGVyLS1yZXZpZXdzXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAxNDAwOiB7XG4gICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gc2xpZGVyIGltZ1xuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItLWltZycpO1xuICBcbiAgaWYgKHNsaWRlciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLnNsaWRlci0taW1nXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE4MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICAgICAgbWFyZ2luOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMzYwOiB7XG4gICAgICAgICAgICBpdGVtczogNSxcbiAgICAgICAgICAgIG1hcmdpbjogMjJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDE6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgbWFyZ2luOiAyMixcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICA0MjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICAgICAgbWFyZ2luOiAyMixcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZG90czogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBzbGlkZXIgcGhvdG9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLS1waG90bycpO1xuICBcbiAgaWYgKHNsaWRlciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLnNsaWRlci0tcGhvdG9cIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBzbGlkZVRyYW5zaXRpb246ICdlYXNlJyxcbiAgICAgICAgc21hcnRTcGVlZDogMjAwLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE4MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICAgICAgbWFyZ2luOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMzYwOiB7XG4gICAgICAgICAgICBpdGVtczogMyxcbiAgICAgICAgICAgIG1hcmdpbjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwMToge1xuICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgNDIwOiB7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZG90czogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==