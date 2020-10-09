/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = './static/js/'; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = './markup/static/js/main.js'));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './markup/components/fillial/fillial.js':
      /*!**********************************************!*\
  !*** ./markup/components/fillial/fillial.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function ($) {
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
            return Fillial;
          });
          /* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! owl.carousel/dist/owl.carousel.min */ './node_modules/owl.carousel/dist/owl.carousel.min.js'
          );
          /* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var static_js_plugins_fotorama_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! static/js/plugins/fotorama.js */ './markup/static/js/plugins/fotorama.js'
          );
          /* harmony import */ var static_js_plugins_fotorama_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            static_js_plugins_fotorama_js__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../helpers/helpers */ './markup/components/helpers/helpers.js'
          );
          function _toConsumableArray(arr) {
            return (
              _arrayWithoutHoles(arr) ||
              _iterableToArray(arr) ||
              _unsupportedIterableToArray(arr) ||
              _nonIterableSpread()
            );
          }

          function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === 'Object' && o.constructor) n = o.constructor.name;
            if (n === 'Map' || n === 'Set') return Array.from(o);
            if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          var Fillial = /*#__PURE__*/ (function () {
            function Fillial() {
              _classCallCheck(this, Fillial);

              this._MAX_WIDTH = 850;
              this._$fillial = document.querySelectorAll('.fillial');
            }

            _createClass(Fillial, [
              {
                key: 'init',
                value: function init() {
                  var _this = this;

                  _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__['default'].isMobileWidth(
                    this._MAX_WIDTH,
                    function () {
                      _toConsumableArray(_this._$fillial).forEach(function (fillial) {
                        var $tel = fillial.querySelector('.fillial__tel');
                        fillial.append($tel);
                      });
                    }
                  );
                  $(document).ready(function () {
                    $('.fillial__slider').owlCarousel({
                      slideTransition: 'ease',
                      smartSpeed: 200,
                      autoplay: false,
                      nav: true,
                      responsive: {
                        1840: {
                          items: 4,
                          margin: 40,
                          stagePadding: 50,
                          dots: true
                        },
                        1740: {
                          items: 4,
                          margin: 20,
                          stagePadding: 30,
                          dots: true
                        },
                        1280: {
                          items: 3,
                          margin: 10,
                          stagePadding: 20,
                          nav: false,
                          dots: true
                        },
                        1000: {
                          items: 3,
                          margin: 10,
                          stagePadding: 16,
                          nav: false,
                          dots: true
                        },
                        700: {
                          items: 2,
                          margin: 10,
                          stagePadding: 16,
                          nav: false,
                          dots: true
                        },
                        320: {
                          items: 1,
                          margin: 16,
                          stagePadding: 38,
                          nav: false,
                          dots: false
                        }
                      }
                    });
                  });
                  $('.fillial__slide-img').fotorama();
                }
              }
            ]);

            return Fillial;
          })();

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')));

        /***/
      },

    /***/ './markup/components/form/form.js':
      /*!****************************************!*\
  !*** ./markup/components/form/form.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
          return Form;
        });
        /* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../helpers/helpers */ './markup/components/helpers/helpers.js'
        );
        /* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! imask */ './node_modules/imask/esm/index.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Form = /*#__PURE__*/ (function () {
          function Form() {
            _classCallCheck(this, Form);

            this._MAX_WIDTH = 1700;
            this._MASK = '+{7}(000)000-00-00';
            this._$form = document.querySelector('.form');
            this._$formLeft = this._$form.querySelector('.form__left');
            this._$formRight = this._$form.querySelector('.form__right');
            this._$telInput = this._$form.querySelector('#formTel');
          }

          _createClass(Form, [
            {
              key: 'init',
              value: function init() {
                var _this = this;

                _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__['default'].isMobileWidth(
                  this._MAX_WIDTH,
                  function () {
                    _this._$formLeft.append(_this._$formRight);
                  }
                );

                this._setMask(this._$telInput, this._MASK);
              }
            },
            {
              key: '_setMask',
              value: function _setMask(elem, mask) {
                var maskOptions = {
                  mask: mask
                };
                Object(imask__WEBPACK_IMPORTED_MODULE_1__['default'])(elem, maskOptions);
              }
            }
          ]);

          return Form;
        })();

        /***/
      },

    /***/ './markup/components/helpers/helpers.js':
      /*!**********************************************!*\
  !*** ./markup/components/helpers/helpers.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
          return Helpers;
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Helpers = /*#__PURE__*/ (function () {
          function Helpers() {
            _classCallCheck(this, Helpers);
          }

          _createClass(Helpers, null, [
            {
              key: 'isMobileWidth',
              value: function isMobileWidth() {
                var maxWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1160;
                var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

                if (window.innerWidth <= maxWidth) {
                  cb();
                }
              }
            },
            {
              key: 'isOutOnViewPort',
              value: function isOutOnViewPort($elem) {
                var bounding = $elem.getBoundingClientRect();
                var out = {};
                out.top = bounding.top < 0;
                out.left = bounding.left < 0;
                out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
                out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
                return out;
              }
            }
          ]);

          return Helpers;
        })();

        /***/
      },

    /***/ './markup/components/js/main-nav.js':
      /*!******************************************!*\
  !*** ./markup/components/js/main-nav.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
          return MainNav;
        });
        /* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../helpers/helpers */ './markup/components/helpers/helpers.js'
        );
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var MainNav = /*#__PURE__*/ (function () {
          function MainNav() {
            _classCallCheck(this, MainNav);

            this._MAX_WIDTH = 1160;
            this._$items = document.querySelectorAll('.main-nav__items');
          }

          _createClass(MainNav, [
            {
              key: 'init',
              value: function init() {
                var _this = this;

                if (this._$items) {
                  _toConsumableArray(this._$items).forEach(function ($item) {
                    var $dropdown = $item.querySelector('.main-nav__dropdown');
                    $dropdown.insertAdjacentHTML('afterbegin', _this._getDropdownTitleTemplate());
                    var $dropdownItems = $item.querySelectorAll('.main-nav__dropdown-item');
                    var $titleLink = $dropdownItems[0].querySelector('.main-nav__dropdown-link');
                    var $titleLinkText = $titleLink.querySelector('.main-nav__dropdown-link-text--title');
                    $titleLink.href = $item.querySelector('.main-nav__link').href;
                    $titleLinkText.textContent = $item.querySelector('.main-nav__item-title').textContent;
                    $item.addEventListener('mouseenter', _this._handleItemMouseenter);
                    $dropdown.addEventListener('mouseleave', _this._handleDropdownMouseleave);
                    _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__['default'].isMobileWidth(
                      _this._MAX_WIDTH,
                      function () {
                        $item.removeEventListener('mouseenter', _this._handleItemMouseenter);
                        $dropdown.removeEventListener('mouseleave', _this._handleDropdownMouseleave);
                        var $titleArrows = $item.querySelectorAll('.main-nav__link-arrow');
                        var $dropdownItems = $dropdown.querySelectorAll('.main-nav__dropdown-item');

                        if ($titleArrows) {
                          _toConsumableArray($titleArrows).forEach(function ($titleArrow) {
                            $titleArrow.addEventListener('click', function () {
                              $dropdown.classList.toggle('main-nav__dropdown--open');
                              $dropdown.classList.toggle('main-nav__dropdown--open-inner');
                            });
                          });
                        }

                        if ($dropdownItems) {
                          _toConsumableArray($dropdownItems).forEach(function ($dropdownItem) {
                            var $subItem = $dropdownItem.querySelector('.main-nav__dropdown-inner');
                            var $dropdownArrow = $dropdownItem.querySelector('.main-nav__dropdown-link-icon');

                            if ($dropdownArrow) {
                              $dropdownArrow.addEventListener('click', function () {
                                $subItem.classList.toggle('main-nav__dropdown-inner--open');
                              });
                            }
                          });
                        }
                      }
                    );

                    _toConsumableArray($dropdownItems).forEach(function ($dropdownItem) {
                      $dropdownItem.addEventListener('mouseenter', _this._handleDropdownItemMouseenter);
                      $dropdownItem.addEventListener('mouseleave', _this._handleDropdownItemMouseleave);
                      _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__['default'].isMobileWidth(
                        _this._MAX_WIDTH,
                        function () {
                          $dropdownItem.removeEventListener(
                            'mouseenter',
                            _this._handleDropdownItemMouseenter
                          );
                          $dropdownItem.removeEventListener(
                            'mouseleave',
                            _this._handleDropdownItemMouseleave
                          );
                        }
                      );
                    });
                  });
                }
              }
            },
            {
              key: '_handleItemMouseenter',
              value: function _handleItemMouseenter(evt) {
                var target = evt.target;

                if (target) {
                  var $itemDropdown = target.querySelector('.main-nav__dropdown');
                  $itemDropdown.classList.add('main-nav__dropdown--open');
                }
              }
            },
            {
              key: '_handleDropdownMouseleave',
              value: function _handleDropdownMouseleave(evt) {
                var target = evt.target;

                if (target) {
                  target.classList.remove('main-nav__dropdown--open');
                }
              }
            },
            {
              key: '_handleDropdownItemMouseenter',
              value: function _handleDropdownItemMouseenter(evt) {
                var target = evt.target;
                var $dropdownInner = target.querySelector('.main-nav__dropdown-inner');

                if ($dropdownInner) {
                  $dropdownInner.classList.add('main-nav__dropdown-inner--open');
                  var overflowViewPort = _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ].isOutOnViewPort($dropdownInner);

                  if (overflowViewPort.right) {
                    $dropdownInner.classList.add('main-nav__dropdown-inner--overflow-right');
                  }
                }
              }
            },
            {
              key: '_handleDropdownItemMouseleave',
              value: function _handleDropdownItemMouseleave(evt) {
                var target = evt.target;
                var $dropdownInner = target.querySelector('.main-nav__dropdown-inner');

                if ($dropdownInner) {
                  $dropdownInner.classList.remove('main-nav__dropdown-inner--open');
                }
              }
            },
            {
              key: '_getDropdownTitleTemplate',
              value: function _getDropdownTitleTemplate() {
                return '<li class="main-nav__dropdown-items">\n        <div class="main-nav__dropdown-item">\n            <div class="main-nav__dropdown-link-wrap">\n              <a class="main-nav__dropdown-link" href="">\n                <span class="main-nav__dropdown-link-text main-nav__dropdown-link-text--title"></span>\n              </a>\n            </div>\n        </div>\n      </li>'.trim();
              }
            }
          ]);

          return MainNav;
        })();

        /***/
      },

    /***/ './markup/components/page-header/page-header.js':
      /*!******************************************************!*\
  !*** ./markup/components/page-header/page-header.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
          return PageHeader;
        });
        /* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../helpers/helpers */ './markup/components/helpers/helpers.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var PageHeader = /*#__PURE__*/ (function () {
          function PageHeader() {
            _classCallCheck(this, PageHeader);

            this._MOBILE_WIDTH = 1160;
            this._$body = document.body;
            this._$header = document.querySelector('.page-header');
            this._$rowTop = this._$header.querySelector('#rowTop');
            this._$topList = this._$header.querySelector('#topList');
            this._$logo = this._$header.querySelector('#pageHeaderLogo');
            this._$tel = this._$header.querySelector('.page-header__tel-wrap');
            this._$menuBtn = this._$header.querySelector('.page-header__top-menu-btn');
            this._$mobileMenu = this._$header.querySelector('.page-header__mobile-menu');
            this._$mainNav = this._$header.querySelector('.main-nav');
          }

          _createClass(PageHeader, [
            {
              key: 'init',
              value: function init() {
                var _this = this;

                _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__['default'].isMobileWidth(
                  this._MOBILE_WIDTH,
                  function () {
                    _this._$rowTop.appendChild(_this._$logo);

                    _this._$rowTop.appendChild(_this._$tel);

                    _this._$mobileMenu.prepend(_this._$mainNav);

                    _this._$mobileMenu.prepend(_this._$topList);
                  }
                );

                this._$menuBtn.addEventListener('click', function () {
                  _this._$body.classList.toggle('page--menu-open');

                  _this._$menuBtn.classList.toggle('page-header__top-menu-btn--open');

                  _this._$mobileMenu.classList.toggle('page-header__mobile-menu--open');
                });
              }
            }
          ]);

          return PageHeader;
        })();

        /***/
      },

    /***/ './markup/components/references/references.js':
      /*!****************************************************!*\
  !*** ./markup/components/references/references.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function ($) {
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
            return References;
          });
          /* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! owl.carousel/dist/owl.carousel.min */ './node_modules/owl.carousel/dist/owl.carousel.min.js'
          );
          /* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../helpers/helpers */ './markup/components/helpers/helpers.js'
          );
          function _toConsumableArray(arr) {
            return (
              _arrayWithoutHoles(arr) ||
              _iterableToArray(arr) ||
              _unsupportedIterableToArray(arr) ||
              _nonIterableSpread()
            );
          }

          function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === 'Object' && o.constructor) n = o.constructor.name;
            if (n === 'Map' || n === 'Set') return Array.from(o);
            if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          var References = /*#__PURE__*/ (function () {
            function References() {
              _classCallCheck(this, References);

              this._MAX_WIDTH = 600;
              this._$sliderContainer = document.querySelectorAll('.references__list');
            }

            _createClass(References, [
              {
                key: 'init',
                value: function init() {
                  var _this = this;

                  _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__['default'].isMobileWidth(
                    this._MAX_WIDTH,
                    function () {
                      _toConsumableArray(_this._$sliderContainer).forEach(function (sliderContainer) {
                        sliderContainer.classList.add('owl-carousel');
                      });

                      $(document).ready(function () {
                        $('.references__list').owlCarousel({
                          slideTransition: 'ease',
                          items: 1,
                          margin: 20,
                          stagePadding: 42,
                          smartSpeed: 200,
                          autoplay: false
                        });
                      });
                    }
                  );
                }
              }
            ]);

            return References;
          })();

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')));

        /***/
      },

    /***/ './markup/components/services/services.js':
      /*!************************************************!*\
  !*** ./markup/components/services/services.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function ($) {
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
            return Services;
          });
          /* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../helpers/helpers */ './markup/components/helpers/helpers.js'
          );
          /* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! owl.carousel/dist/owl.carousel.min */ './node_modules/owl.carousel/dist/owl.carousel.min.js'
          );
          /* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_1__
          );
          function _toConsumableArray(arr) {
            return (
              _arrayWithoutHoles(arr) ||
              _iterableToArray(arr) ||
              _unsupportedIterableToArray(arr) ||
              _nonIterableSpread()
            );
          }

          function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === 'Object' && o.constructor) n = o.constructor.name;
            if (n === 'Map' || n === 'Set') return Array.from(o);
            if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          var Services = /*#__PURE__*/ (function () {
            function Services() {
              _classCallCheck(this, Services);

              this._MAX_WIDTH = 890;
              this._$sliderContainer = document.querySelectorAll('.services__body-wrap');
            }

            _createClass(Services, [
              {
                key: 'init',
                value: function init() {
                  var _this = this;

                  _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__['default'].isMobileWidth(
                    this._MAX_WIDTH,
                    function () {
                      var $tables = document.querySelectorAll('.services__table');

                      if ($tables) {
                        _toConsumableArray($tables).forEach(function ($table) {
                          var $tableTrs = $table.querySelectorAll('.services__tr');
                          var $thForm = $table.querySelector('.services__head-th--form');
                          var $thPrice = $table.querySelector('.services__head-th--price');

                          if ($tableTrs) {
                            _toConsumableArray($tableTrs).forEach(function ($tableTr) {
                              var $tdTitle = $tableTr.querySelector('.services__td--title');
                              var tdForm = $tableTr.querySelector('.services__td--form');
                              var tdPrice = $tableTr.querySelector('.services__td--price');

                              var prices = _toConsumableArray(
                                tdPrice.querySelectorAll('.services__td-text')
                              ).map(function (priceText) {
                                return priceText.textContent;
                              });

                              $tdTitle.insertAdjacentHTML(
                                'beforeend',
                                _this._getMobileTemplate(
                                  $thForm.textContent,
                                  $thPrice.textContent,
                                  tdForm.textContent,
                                  prices
                                )
                              );
                            });
                          }
                        });
                      }

                      _toConsumableArray(_this._$sliderContainer).forEach(function (sliderContainer) {
                        sliderContainer.classList.add('owl-carousel');
                      });

                      $(document).ready(function () {
                        $('.services__body-wrap').owlCarousel({
                          slideTransition: 'ease',
                          items: 1,
                          margin: 20,
                          stagePadding: 30,
                          smartSpeed: 200,
                          autoplay: false
                        });
                      });
                    }
                  );
                }
              },
              {
                key: '_getMobileTemplate',
                value: function _getMobileTemplate(thForm, thPrice, tdForm, prices) {
                  return '\n      <ul class="services__td-modile-list">\n        <li class="services__td-mobile-items">\n          <span class="services__td-mobile-title">'
                    .concat(thForm, '</span>\n          <p class="services__td-mobile-text">')
                    .concat(
                      tdForm,
                      '</p>\n        </li>\n         <li class="services__td-mobile-items">\n            <span class="services__td-mobile-title">'
                    )
                    .concat(thPrice, '</span>\n            ')
                    .concat(
                      prices
                        .map(function (price) {
                          return '<p class="services__td-mobile-text">'.concat(price, '</p>');
                        })
                        .join(''),
                      '\n         </li>\n      </ul>\n    '
                    )
                    .trim();
                }
              }
            ]);

            return Services;
          })();

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')));

        /***/
      },

    /***/ './markup/static/js/main.js':
      /*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_page_header_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../components/page-header/page-header */ './markup/components/page-header/page-header.js'
        );
        /* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../components/form/form */ './markup/components/form/form.js'
        );
        /* harmony import */ var _components_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../components/helpers/helpers */ './markup/components/helpers/helpers.js'
        );
        /* harmony import */ var _components_fillial_fillial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../components/fillial/fillial */ './markup/components/fillial/fillial.js'
        );
        /* harmony import */ var _components_services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/services/services */ './markup/components/services/services.js'
        );
        /* harmony import */ var _components_references_references__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/references/references */ './markup/components/references/references.js'
        );
        /* harmony import */ var _components_js_main_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../components/js/main-nav */ './markup/components/js/main-nav.js'
        );

        var MAX_WIDTH = 1160;
        var $pageHeaderInfo = document.querySelector('.page-header__info');
        var $formTitle = document.querySelector('.form__title-wrap');
        var pageHeader = new _components_page_header_page_header__WEBPACK_IMPORTED_MODULE_0__['default']();
        var form = new _components_form_form__WEBPACK_IMPORTED_MODULE_1__['default']();
        var fillial = new _components_fillial_fillial__WEBPACK_IMPORTED_MODULE_3__['default']();
        var services = new _components_services_services__WEBPACK_IMPORTED_MODULE_4__['default']();
        var references = new _components_references_references__WEBPACK_IMPORTED_MODULE_5__['default']();
        var mainNav = new _components_js_main_nav__WEBPACK_IMPORTED_MODULE_6__['default']();
        pageHeader.init();
        form.init();
        fillial.init();
        services.init();
        references.init();
        mainNav.init();
        _components_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__['default'].isMobileWidth(
          MAX_WIDTH,
          function () {
            $pageHeaderInfo.append($formTitle);
          }
        );

        /***/
      },

    /***/ './markup/static/js/plugins/fotorama.js':
      /*!**********************************************!*\
  !*** ./markup/static/js/plugins/fotorama.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (jQuery) {
          function _typeof(obj) {
            '@babel/helpers - typeof';
            if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          /*!
           * Fotorama 4.6.4 | http://fotorama.io/license/
           */
          (fotoramaVersion = '4.6.4'),
            (function (a, b, c, d, e) {
              'use strict';

              function f(a) {
                var b = 'bez_' + d.makeArray(arguments).join('_').replace('.', 'p');

                if ('function' != typeof d.easing[b]) {
                  var c = function c(a, b) {
                    var c = [null, null],
                      d = [null, null],
                      e = [null, null],
                      f = function f(_f, g) {
                        return (
                          (e[g] = 3 * a[g]),
                          (d[g] = 3 * (b[g] - a[g]) - e[g]),
                          (c[g] = 1 - e[g] - d[g]),
                          _f * (e[g] + _f * (d[g] + _f * c[g]))
                        );
                      },
                      g = function g(a) {
                        return e[0] + a * (2 * d[0] + 3 * c[0] * a);
                      },
                      h = function h(a) {
                        for (var b, c = a, d = 0; ++d < 14 && ((b = f(c, 0) - a), !(Math.abs(b) < 0.001)); ) {
                          c -= b / g(c);
                        }

                        return c;
                      };

                    return function (a) {
                      return f(h(a), 1);
                    };
                  };

                  d.easing[b] = function (b, d, e, f, g) {
                    return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e;
                  };
                }

                return b;
              }

              function g() {}

              function h(a, b, c) {
                return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a));
              }

              function i(a) {
                return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4];
              }

              function j(a) {
                return Ic ? +i(a.css('transform')) : +a.css('left').replace('px', '');
              }

              function k(a) {
                var b = {};
                return Ic ? (b.transform = 'translate3d(' + a + 'px,0,0)') : (b.left = a), b;
              }

              function l(a) {
                return {
                  'transition-duration': a + 'ms'
                };
              }

              function m(a, b) {
                return isNaN(a) ? b : a;
              }

              function n(a, b) {
                return m(+String(a).replace(b || 'px', ''));
              }

              function o(a) {
                return /%$/.test(a) ? n(a, '%') : e;
              }

              function p(a, b) {
                return m((o(a) / 100) * b, n(a));
              }

              function q(a) {
                return (!isNaN(n(a)) || !isNaN(n(a, '%'))) && a;
              }

              function r(a, b, c, d) {
                return (a - (d || 0)) * (b + (c || 0));
              }

              function s(a, b, c, d) {
                return -Math.round(a / (b + (c || 0)) - (d || 0));
              }

              function t(a) {
                var b = a.data();

                if (!b.tEnd) {
                  var c = a[0],
                    d = {
                      WebkitTransition: 'webkitTransitionEnd',
                      MozTransition: 'transitionend',
                      OTransition: 'oTransitionEnd otransitionend',
                      msTransition: 'MSTransitionEnd',
                      transition: 'transitionend'
                    };
                  T(c, d[uc.prefixed('transition')], function (a) {
                    b.tProp && a.propertyName.match(b.tProp) && b.onEndFn();
                  }),
                    (b.tEnd = !0);
                }
              }

              function u(a, b, c, d) {
                var e,
                  f = a.data();
                f &&
                  ((f.onEndFn = function () {
                    e || ((e = !0), clearTimeout(f.tT), c());
                  }),
                  (f.tProp = b),
                  clearTimeout(f.tT),
                  (f.tT = setTimeout(function () {
                    f.onEndFn();
                  }, 1.5 * d)),
                  t(a));
              }

              function v(a, b) {
                if (a.length) {
                  var c = a.data();
                  Ic ? (a.css(l(0)), (c.onEndFn = g), clearTimeout(c.tT)) : a.stop();
                  var d = w(b, function () {
                    return j(a);
                  });
                  return a.css(k(d)), d;
                }
              }

              function w() {
                for (
                  var a, b = 0, c = arguments.length;
                  c > b && ((a = b ? arguments[b]() : arguments[b]), 'number' != typeof a);
                  b++
                ) {}

                return a;
              }

              function x(a, b) {
                return Math.round(a + (b - a) / 1.5);
              }

              function y() {
                return (y.p = y.p || ('https:' === c.protocol ? 'https://' : 'http://')), y.p;
              }

              function z(a) {
                var c = b.createElement('a');
                return (c.href = a), c;
              }

              function A(a, b) {
                if ('string' != typeof a) return a;
                a = z(a);
                var c, d;

                if (a.host.match(/youtube\.com/) && a.search) {
                  if ((c = a.search.split('v=')[1])) {
                    var e = c.indexOf('&');
                    -1 !== e && (c = c.substring(0, e)), (d = 'youtube');
                  }
                } else
                  a.host.match(/youtube\.com|youtu\.be/)
                    ? ((c = a.pathname.replace(/^\/(embed\/|v\/)?/, '').replace(/\/.*/, '')), (d = 'youtube'))
                    : a.host.match(/vimeo\.com/) &&
                      ((d = 'vimeo'), (c = a.pathname.replace(/^\/(video\/)?/, '').replace(/\/.*/, '')));

                return (
                  (c && d) || !b || ((c = a.href), (d = 'custom')),
                  c
                    ? {
                        id: c,
                        type: d,
                        s: a.search.replace(/^\?/, ''),
                        p: y()
                      }
                    : !1
                );
              }

              function B(a, b, c) {
                var e,
                  f,
                  g = a.video;
                return (
                  'youtube' === g.type
                    ? ((f = y() + 'img.youtube.com/vi/' + g.id + '/default.jpg'),
                      (e = f.replace(/\/default.jpg$/, '/hqdefault.jpg')),
                      (a.thumbsReady = !0))
                    : 'vimeo' === g.type
                    ? d.ajax({
                        url: y() + 'vimeo.com/api/v2/video/' + g.id + '.json',
                        dataType: 'jsonp',
                        success: function success(d) {
                          (a.thumbsReady = !0),
                            C(
                              b,
                              {
                                img: d[0].thumbnail_large,
                                thumb: d[0].thumbnail_small
                              },
                              a.i,
                              c
                            );
                        }
                      })
                    : (a.thumbsReady = !0),
                  {
                    img: e,
                    thumb: f
                  }
                );
              }

              function C(a, b, c, e) {
                for (var f = 0, g = a.length; g > f; f++) {
                  var h = a[f];

                  if (h.i === c && h.thumbsReady) {
                    var i = {
                      videoReady: !0
                    };
                    (i[Xc] = i[Zc] = i[Yc] = !1), e.splice(f, 1, d.extend({}, h, i, b));
                    break;
                  }
                }
              }

              function D(a) {
                function b(a, b, e) {
                  var f = a.children('img').eq(0),
                    g = a.attr('href'),
                    h = a.attr('src'),
                    i = f.attr('src'),
                    j = b.video,
                    k = e ? A(g, j === !0) : !1;
                  k ? (g = !1) : (k = j),
                    c(
                      a,
                      f,
                      d.extend(b, {
                        video: k,
                        img: b.img || g || h || i,
                        thumb: b.thumb || i || h || g
                      })
                    );
                }

                function c(a, b, c) {
                  var e = c.thumb && c.img !== c.thumb,
                    f = n(c.width || a.attr('width')),
                    g = n(c.height || a.attr('height'));
                  d.extend(c, {
                    width: f,
                    height: g,
                    thumbratio: S(
                      c.thumbratio ||
                        n(c.thumbwidth || (b && b.attr('width')) || e || f) /
                          n(c.thumbheight || (b && b.attr('height')) || e || g)
                    )
                  });
                }

                var e = [];
                return (
                  a.children().each(function () {
                    var a = d(this),
                      f = R(
                        d.extend(a.data(), {
                          id: a.attr('id')
                        })
                      );
                    if (a.is('a, img')) b(a, f, !0);
                    else {
                      if (a.is(':empty')) return;
                      c(
                        a,
                        null,
                        d.extend(f, {
                          html: this,
                          _html: a.html()
                        })
                      );
                    }
                    e.push(f);
                  }),
                  e
                );
              }

              function E(a) {
                return 0 === a.offsetWidth && 0 === a.offsetHeight;
              }

              function F(a) {
                return !d.contains(b.documentElement, a);
              }

              function G(a, b, c, d) {
                return (
                  G.i || ((G.i = 1), (G.ii = [!0])),
                  (d = d || G.i),
                  'undefined' == typeof G.ii[d] && (G.ii[d] = !0),
                  a()
                    ? b()
                    : G.ii[d] &&
                      setTimeout(function () {
                        G.ii[d] && G(a, b, c, d);
                      }, c || 100),
                  G.i++
                );
              }

              function H(a) {
                c.replace(c.protocol + '//' + c.host + c.pathname.replace(/^\/?/, '/') + c.search + '#' + a);
              }

              function I(a, b, c, d) {
                var e = a.data(),
                  f = e.measures;

                if (
                  f &&
                  (!e.l ||
                    e.l.W !== f.width ||
                    e.l.H !== f.height ||
                    e.l.r !== f.ratio ||
                    e.l.w !== b.w ||
                    e.l.h !== b.h ||
                    e.l.m !== c ||
                    e.l.p !== d)
                ) {
                  var g = f.width,
                    i = f.height,
                    j = b.w / b.h,
                    k = f.ratio >= j,
                    l = 'scaledown' === c,
                    m = 'contain' === c,
                    n = 'cover' === c,
                    o = $(d);
                  (k && (l || m)) || (!k && n)
                    ? ((g = h(b.w, 0, l ? g : 1 / 0)), (i = g / f.ratio))
                    : ((k && n) || (!k && (l || m))) && ((i = h(b.h, 0, l ? i : 1 / 0)), (g = i * f.ratio)),
                    a.css({
                      width: g,
                      height: i,
                      left: p(o.x, b.w - g),
                      top: p(o.y, b.h - i)
                    }),
                    (e.l = {
                      W: f.width,
                      H: f.height,
                      r: f.ratio,
                      w: b.w,
                      h: b.h,
                      m: c,
                      p: d
                    });
                }

                return !0;
              }

              function J(a, b) {
                var c = a[0];
                c.styleSheet ? (c.styleSheet.cssText = b) : a.html(b);
              }

              function K(a, b, c) {
                return b === c ? !1 : b >= a ? 'left' : a >= c ? 'right' : 'left right';
              }

              function L(a, b, c, d) {
                if (!c) return !1;
                if (!isNaN(a)) return a - (d ? 0 : 1);

                for (var e, f = 0, g = b.length; g > f; f++) {
                  var h = b[f];

                  if (h.id === a) {
                    e = f;
                    break;
                  }
                }

                return e;
              }

              function M(a, b, c) {
                (c = c || {}),
                  a.each(function () {
                    var a,
                      e = d(this),
                      f = e.data();
                    f.clickOn ||
                      ((f.clickOn = !0),
                      d.extend(
                        cb(e, {
                          onStart: function onStart(b) {
                            (a = b), (c.onStart || g).call(this, b);
                          },
                          onMove: c.onMove || g,
                          onTouchEnd: c.onTouchEnd || g,
                          onEnd: function onEnd(c) {
                            c.moved || b.call(this, a);
                          }
                        }),
                        {
                          noMove: !0
                        }
                      ));
                  });
              }

              function N(a, b) {
                return '<div class="' + a + '">' + (b || '') + '</div>';
              }

              function O(a) {
                for (var b = a.length; b; ) {
                  var c = Math.floor(Math.random() * b--),
                    d = a[b];
                  (a[b] = a[c]), (a[c] = d);
                }

                return a;
              }

              function P(a) {
                return (
                  '[object Array]' == Object.prototype.toString.call(a) &&
                  d.map(a, function (a) {
                    return d.extend({}, a);
                  })
                );
              }

              function Q(a, b, c) {
                a.scrollLeft(b || 0).scrollTop(c || 0);
              }

              function R(a) {
                if (a) {
                  var b = {};
                  return (
                    d.each(a, function (a, c) {
                      b[a.toLowerCase()] = c;
                    }),
                    b
                  );
                }
              }

              function S(a) {
                if (a) {
                  var b = +a;
                  return isNaN(b) ? ((b = a.split('/')), +b[0] / +b[1] || e) : b;
                }
              }

              function T(a, b, c, d) {
                b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent('on' + b, c));
              }

              function U(a) {
                return !!a.getAttribute('disabled');
              }

              function V(a) {
                return {
                  tabindex: -1 * a + '',
                  disabled: a
                };
              }

              function W(a, b) {
                T(a, 'keyup', function (c) {
                  U(a) || (13 == c.keyCode && b.call(a, c));
                });
              }

              function X(a, b) {
                T(
                  a,
                  'focus',
                  (a.onfocusin = function (c) {
                    b.call(a, c);
                  }),
                  !0
                );
              }

              function Y(a, b) {
                a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
                  b && a.stopPropagation && a.stopPropagation();
              }

              function Z(a) {
                return a ? '>' : '<';
              }

              function $(a) {
                return (
                  (a = (a + '').split(/\s+/)),
                  {
                    x: q(a[0]) || bd,
                    y: q(a[1]) || bd
                  }
                );
              }

              function _(a, b) {
                var c = a.data(),
                  e = Math.round(b.pos),
                  f = function f() {
                    (c.sliding = !1), (b.onEnd || g)();
                  };

                'undefined' != typeof b.overPos &&
                  b.overPos !== b.pos &&
                  ((e = b.overPos),
                  (f = function f() {
                    _(
                      a,
                      d.extend({}, b, {
                        overPos: b.pos,
                        time: Math.max(Qc, b.time / 2)
                      })
                    );
                  }));
                var h = d.extend(
                  k(e),
                  b.width && {
                    width: b.width
                  }
                );
                (c.sliding = !0),
                  Ic
                    ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? u(a, 'transform', f, b.time) : f())
                    : a.stop().animate(h, b.time, _c, f);
              }

              function ab(a, b, c, e, f, h) {
                var i = 'undefined' != typeof h;

                if (
                  i ||
                  (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))
                ) {
                  (a = a || d(a)), (b = b || d(b));

                  var j = a[0],
                    k = b[0],
                    l = 'crossfade' === e.method,
                    m = function m() {
                      if (!m.done) {
                        m.done = !0;
                        var a = (i || f.shift()) && f.shift();
                        a && ab.apply(this, a), (e.onEnd || g)(!!a);
                      }
                    },
                    n = e.time / (h || 1);

                  c.removeClass(Rb + ' ' + Qb),
                    a.stop().addClass(Rb),
                    b.stop().addClass(Qb),
                    l && k && a.fadeTo(0, 0),
                    a.fadeTo(l ? n : 0, 1, l && m),
                    b.fadeTo(n, 0, m),
                    (j && l) || k || m();
                }
              }

              function bb(a) {
                var b = (a.touches || [])[0] || a;
                (a._x = b.pageX), (a._y = b.clientY), (a._now = d.now());
              }

              function cb(a, c) {
                function e(a) {
                  return (
                    (m = d(a.target)),
                    (u.checked = p = q = s = !1),
                    k ||
                    u.flow ||
                    (a.touches && a.touches.length > 1) ||
                    a.which > 1 ||
                    (ed && ed.type !== a.type && gd) ||
                    (p = c.select && m.is(c.select, t))
                      ? p
                      : ((o = 'touchstart' === a.type),
                        (q = m.is('a, a *', t)),
                        (n = u.control),
                        (r = u.noMove || u.noSwipe || n ? 16 : u.snap ? 0 : 4),
                        bb(a),
                        (l = ed = a),
                        (fd = a.type.replace(/down|start/, 'move').replace(/Down/, 'Move')),
                        (c.onStart || g).call(t, a, {
                          control: n,
                          $target: m
                        }),
                        (k = u.flow = !0),
                        void ((!o || u.go) && Y(a)))
                  );
                }

                function f(a) {
                  if ((a.touches && a.touches.length > 1) || (Nc && !a.isPrimary) || fd !== a.type || !k)
                    return k && h(), void (c.onTouchEnd || g)();
                  bb(a);
                  var b = Math.abs(a._x - l._x),
                    d = Math.abs(a._y - l._y),
                    e = b - d,
                    f = (u.go || u.x || e >= 0) && !u.noSwipe,
                    i = 0 > e;
                  o && !u.checked
                    ? (k = f) && Y(a)
                    : (Y(a),
                      (c.onMove || g).call(t, a, {
                        touch: o
                      })),
                    !s && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) > r && (s = !0),
                    (u.checked = u.checked || f || i);
                }

                function h(a) {
                  (c.onTouchEnd || g)();
                  var b = k;
                  (u.control = k = !1),
                    b && (u.flow = !1),
                    !b ||
                      (q && !u.checked) ||
                      (a && Y(a),
                      (gd = !0),
                      clearTimeout(hd),
                      (hd = setTimeout(function () {
                        gd = !1;
                      }, 1e3)),
                      (c.onEnd || g).call(t, {
                        moved: s,
                        $target: m,
                        control: n,
                        touch: o,
                        startEvent: l,
                        aborted: !a || 'MSPointerCancel' === a.type
                      }));
                }

                function i() {
                  u.flow ||
                    setTimeout(function () {
                      u.flow = !0;
                    }, 10);
                }

                function j() {
                  u.flow &&
                    setTimeout(function () {
                      u.flow = !1;
                    }, Pc);
                }

                var k,
                  l,
                  m,
                  n,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t = a[0],
                  u = {};
                return (
                  Nc
                    ? (T(t, 'MSPointerDown', e),
                      T(b, 'MSPointerMove', f),
                      T(b, 'MSPointerCancel', h),
                      T(b, 'MSPointerUp', h))
                    : (T(t, 'touchstart', e),
                      T(t, 'touchmove', f),
                      T(t, 'touchend', h),
                      T(b, 'touchstart', i),
                      T(b, 'touchend', j),
                      T(b, 'touchcancel', j),
                      Ec.on('scroll', j),
                      a.on('mousedown', e),
                      Fc.on('mousemove', f).on('mouseup', h)),
                  a.on('click', 'a', function (a) {
                    u.checked && Y(a);
                  }),
                  u
                );
              }

              function db(a, b) {
                function c(c, d) {
                  (A = !0),
                    (j = l = c._x),
                    (q = c._now),
                    (p = [[q, j]]),
                    (m = n = D.noMove || d ? 0 : v(a, (b.getPos || g)())),
                    (b.onStart || g).call(B, c);
                }

                function e(a, b) {
                  (s = D.min),
                    (t = D.max),
                    (u = D.snap),
                    (w = a.altKey),
                    (A = z = !1),
                    (y = b.control),
                    y || C.sliding || c(a);
                }

                function f(d, e) {
                  D.noSwipe ||
                    (A || c(d),
                    (l = d._x),
                    p.push([d._now, l]),
                    (n = m - (j - l)),
                    (o = K(n, s, t)),
                    s >= n ? (n = x(n, s)) : n >= t && (n = x(n, t)),
                    D.noMove ||
                      (a.css(k(n)),
                      z || ((z = !0), e.touch || Nc || a.addClass(ec)),
                      (b.onMove || g).call(B, d, {
                        pos: n,
                        edge: o
                      })));
                }

                function i(e) {
                  if (!D.noSwipe || !e.moved) {
                    A || c(e.startEvent, !0), e.touch || Nc || a.removeClass(ec), (r = d.now());

                    for (
                      var f,
                        i,
                        j,
                        k,
                        o,
                        q,
                        v,
                        x,
                        y,
                        z = r - Pc,
                        C = null,
                        E = Qc,
                        F = b.friction,
                        G = p.length - 1;
                      G >= 0;
                      G--
                    ) {
                      if (((f = p[G][0]), (i = Math.abs(f - z)), null === C || j > i)) (C = f), (k = p[G][1]);
                      else if (C === z || i > j) break;
                      j = i;
                    }

                    v = h(n, s, t);
                    var H = k - l,
                      I = H >= 0,
                      J = r - C,
                      K = J > Pc,
                      L = !K && n !== m && v === n;
                    u && ((v = h(Math[L ? (I ? 'floor' : 'ceil') : 'round'](n / u) * u, s, t)), (s = t = v)),
                      L &&
                        (u || v === n) &&
                        ((y = -(H / J)),
                        (E *= h(Math.abs(y), b.timeLow, b.timeHigh)),
                        (o = Math.round(n + (y * E) / F)),
                        u || (v = o),
                        ((!I && o > t) || (I && s > o)) &&
                          ((q = I ? s : t),
                          (x = o - q),
                          u || (v = q),
                          (x = h(v + 0.03 * x, q - 50, q + 50)),
                          (E = Math.abs((n - x) / (y / F))))),
                      (E *= w ? 10 : 1),
                      (b.onEnd || g).call(
                        B,
                        d.extend(e, {
                          moved: e.moved || (K && u),
                          pos: n,
                          newPos: v,
                          overPos: x,
                          time: E
                        })
                      );
                  }
                }

                var j,
                  l,
                  m,
                  n,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  w,
                  y,
                  z,
                  A,
                  B = a[0],
                  C = a.data(),
                  D = {};
                return (D = d.extend(
                  cb(
                    b.$wrap,
                    d.extend({}, b, {
                      onStart: e,
                      onMove: f,
                      onEnd: i
                    })
                  ),
                  D
                ));
              }

              function eb(a, b) {
                var c,
                  e,
                  f,
                  h = a[0],
                  i = {
                    prevent: {}
                  };
                return (
                  T(h, Oc, function (a) {
                    var h = a.wheelDeltaY || -1 * a.deltaY || 0,
                      j = a.wheelDeltaX || -1 * a.deltaX || 0,
                      k = Math.abs(j) && !Math.abs(h),
                      l = Z(0 > j),
                      m = e === l,
                      n = d.now(),
                      o = Pc > n - f;
                    (e = l),
                      (f = n),
                      k &&
                        i.ok &&
                        (!i.prevent[l] || c) &&
                        (Y(a, !0),
                        (c && m && o) ||
                          (b.shift &&
                            ((c = !0),
                            clearTimeout(i.t),
                            (i.t = setTimeout(function () {
                              c = !1;
                            }, Rc))),
                          (b.onEnd || g)(a, b.shift ? l : j)));
                  }),
                  i
                );
              }

              function fb() {
                d.each(d.Fotorama.instances, function (a, b) {
                  b.index = a;
                });
              }

              function gb(a) {
                d.Fotorama.instances.push(a), fb();
              }

              function hb(a) {
                d.Fotorama.instances.splice(a.index, 1), fb();
              }

              var ib = 'fotorama',
                jb = 'fullscreen',
                kb = ib + '__wrap',
                lb = kb + '--css2',
                mb = kb + '--css3',
                nb = kb + '--video',
                ob = kb + '--fade',
                pb = kb + '--slide',
                qb = kb + '--no-controls',
                rb = kb + '--no-shadows',
                sb = kb + '--pan-y',
                tb = kb + '--rtl',
                ub = kb + '--only-active',
                vb = kb + '--no-captions',
                wb = kb + '--toggle-arrows',
                xb = ib + '__stage',
                yb = xb + '__frame',
                zb = yb + '--video',
                Ab = xb + '__shaft',
                Bb = ib + '__grab',
                Cb = ib + '__pointer',
                Db = ib + '__arr',
                Eb = Db + '--disabled',
                Fb = Db + '--prev',
                Gb = Db + '--next',
                Hb = ib + '__nav',
                Ib = Hb + '-wrap',
                Jb = Hb + '__shaft',
                Kb = Hb + '--dots',
                Lb = Hb + '--thumbs',
                Mb = Hb + '__frame',
                Nb = Mb + '--dot',
                Ob = Mb + '--thumb',
                Pb = ib + '__fade',
                Qb = Pb + '-front',
                Rb = Pb + '-rear',
                Sb = ib + '__shadow',
                Tb = Sb + 's',
                Ub = Tb + '--left',
                Vb = Tb + '--right',
                Wb = ib + '__active',
                Xb = ib + '__select',
                Yb = ib + '--hidden',
                Zb = ib + '--fullscreen',
                $b = ib + '__fullscreen-icon',
                _b = ib + '__error',
                ac = ib + '__loading',
                bc = ib + '__loaded',
                cc = bc + '--full',
                dc = bc + '--img',
                ec = ib + '__grabbing',
                fc = ib + '__img',
                gc = fc + '--full',
                hc = ib + '__dot',
                ic = ib + '__thumb',
                jc = ic + '-border',
                kc = ib + '__html',
                lc = ib + '__video',
                mc = lc + '-play',
                nc = lc + '-close',
                oc = ib + '__caption',
                pc = ib + '__caption__wrap',
                qc = ib + '__spinner',
                rc = '" tabindex="0" role="button',
                sc = d && d.fn.jquery.split('.');

              if (!sc || sc[0] < 1 || (1 == sc[0] && sc[1] < 8))
                throw 'Fotorama requires jQuery 1.8 or later and will not run without it.';

              var tc = {},
                uc = (function (a, b, c) {
                  function d(a) {
                    r.cssText = a;
                  }

                  function e(a, b) {
                    return _typeof(a) === b;
                  }

                  function f(a, b) {
                    return !!~('' + a).indexOf(b);
                  }

                  function g(a, b) {
                    for (var d in a) {
                      var e = a[d];
                      if (!f(e, '-') && r[e] !== c) return 'pfx' == b ? e : !0;
                    }

                    return !1;
                  }

                  function h(a, b, d) {
                    for (var f in a) {
                      var g = b[a[f]];
                      if (g !== c) return d === !1 ? a[f] : e(g, 'function') ? g.bind(d || b) : g;
                    }

                    return !1;
                  }

                  function i(a, b, c) {
                    var d = a.charAt(0).toUpperCase() + a.slice(1),
                      f = (a + ' ' + u.join(d + ' ') + d).split(' ');
                    return e(b, 'string') || e(b, 'undefined')
                      ? g(f, b)
                      : ((f = (a + ' ' + v.join(d + ' ') + d).split(' ')), h(f, b, c));
                  }

                  var j,
                    k,
                    l,
                    m = '2.6.2',
                    n = {},
                    o = b.documentElement,
                    p = 'modernizr',
                    q = b.createElement(p),
                    r = q.style,
                    s = ({}.toString, ' -webkit- -moz- -o- -ms- '.split(' ')),
                    t = 'Webkit Moz O ms',
                    u = t.split(' '),
                    v = t.toLowerCase().split(' '),
                    w = {},
                    x = [],
                    y = x.slice,
                    z = function z(a, c, d, e) {
                      var f,
                        g,
                        h,
                        i,
                        j = b.createElement('div'),
                        k = b.body,
                        l = k || b.createElement('body');
                      if (parseInt(d, 10))
                        for (; d--; ) {
                          (h = b.createElement('div')), (h.id = e ? e[d] : p + (d + 1)), j.appendChild(h);
                        }
                      return (
                        (f = ['&#173;', '<style id="s', p, '">', a, '</style>'].join('')),
                        (j.id = p),
                        ((k ? j : l).innerHTML += f),
                        l.appendChild(j),
                        k ||
                          ((l.style.background = ''),
                          (l.style.overflow = 'hidden'),
                          (i = o.style.overflow),
                          (o.style.overflow = 'hidden'),
                          o.appendChild(l)),
                        (g = c(j, a)),
                        k
                          ? j.parentNode.removeChild(j)
                          : (l.parentNode.removeChild(l), (o.style.overflow = i)),
                        !!g
                      );
                    },
                    A = {}.hasOwnProperty;

                  (l =
                    e(A, 'undefined') || e(A.call, 'undefined')
                      ? function (a, b) {
                          return b in a && e(a.constructor.prototype[b], 'undefined');
                        }
                      : function (a, b) {
                          return A.call(a, b);
                        }),
                    Function.prototype.bind ||
                      (Function.prototype.bind = function (a) {
                        var b = this;
                        if ('function' != typeof b) throw new TypeError();

                        var c = y.call(arguments, 1),
                          d = function d() {
                            if (this instanceof d) {
                              var e = function e() {};

                              e.prototype = b.prototype;
                              var f = new e(),
                                g = b.apply(f, c.concat(y.call(arguments)));
                              return Object(g) === g ? g : f;
                            }

                            return b.apply(a, c.concat(y.call(arguments)));
                          };

                        return d;
                      }),
                    (w.csstransforms3d = function () {
                      var a = !!i('perspective');
                      return a;
                    });

                  for (var B in w) {
                    l(w, B) && ((k = B.toLowerCase()), (n[k] = w[B]()), x.push((n[k] ? '' : 'no-') + k));
                  }

                  return (
                    (n.addTest = function (a, b) {
                      if ('object' == _typeof(a))
                        for (var d in a) {
                          l(a, d) && n.addTest(d, a[d]);
                        }
                      else {
                        if (((a = a.toLowerCase()), n[a] !== c)) return n;
                        (b = 'function' == typeof b ? b() : b),
                          'undefined' != typeof enableClasses &&
                            enableClasses &&
                            (o.className += ' ' + (b ? '' : 'no-') + a),
                          (n[a] = b);
                      }
                      return n;
                    }),
                    d(''),
                    (q = j = null),
                    (n._version = m),
                    (n._prefixes = s),
                    (n._domPrefixes = v),
                    (n._cssomPrefixes = u),
                    (n.testProp = function (a) {
                      return g([a]);
                    }),
                    (n.testAllProps = i),
                    (n.testStyles = z),
                    (n.prefixed = function (a, b, c) {
                      return b ? i(a, b, c) : i(a, 'pfx');
                    }),
                    n
                  );
                })(a, b),
                vc = {
                  ok: !1,
                  is: function is() {
                    return !1;
                  },
                  request: function request() {},
                  cancel: function cancel() {},
                  event: '',
                  prefix: ''
                },
                wc = 'webkit moz o ms khtml'.split(' ');

              if ('undefined' != typeof b.cancelFullScreen) vc.ok = !0;
              else
                for (var xc = 0, yc = wc.length; yc > xc; xc++) {
                  if (((vc.prefix = wc[xc]), 'undefined' != typeof b[vc.prefix + 'CancelFullScreen'])) {
                    vc.ok = !0;
                    break;
                  }
                }
              vc.ok &&
                ((vc.event = vc.prefix + 'fullscreenchange'),
                (vc.is = function () {
                  switch (this.prefix) {
                    case '':
                      return b.fullScreen;

                    case 'webkit':
                      return b.webkitIsFullScreen;

                    default:
                      return b[this.prefix + 'FullScreen'];
                  }
                }),
                (vc.request = function (a) {
                  return '' === this.prefix ? a.requestFullScreen() : a[this.prefix + 'RequestFullScreen']();
                }),
                (vc.cancel = function () {
                  return '' === this.prefix ? b.cancelFullScreen() : b[this.prefix + 'CancelFullScreen']();
                }));
              var zc,
                Ac = {
                  lines: 12,
                  length: 5,
                  width: 2,
                  radius: 7,
                  corners: 1,
                  rotate: 15,
                  color: 'rgba(128, 128, 128, .75)',
                  hwaccel: !0
                },
                Bc = {
                  top: 'auto',
                  left: 'auto',
                  className: ''
                };
              !(function (a, b) {
                zc = b();
              })(this, function () {
                function a(a, c) {
                  var d,
                    e = b.createElement(a || 'div');

                  for (d in c) {
                    e[d] = c[d];
                  }

                  return e;
                }

                function c(a) {
                  for (var b = 1, c = arguments.length; c > b; b++) {
                    a.appendChild(arguments[b]);
                  }

                  return a;
                }

                function d(a, b, c, d) {
                  var e = ['opacity', b, ~~(100 * a), c, d].join('-'),
                    f = 0.01 + (c / d) * 100,
                    g = Math.max(1 - ((1 - a) / b) * (100 - f), a),
                    h = m.substring(0, m.indexOf('Animation')).toLowerCase(),
                    i = (h && '-' + h + '-') || '';
                  return (
                    o[e] ||
                      (p.insertRule(
                        '@' +
                          i +
                          'keyframes ' +
                          e +
                          '{0%{opacity:' +
                          g +
                          '}' +
                          f +
                          '%{opacity:' +
                          a +
                          '}' +
                          (f + 0.01) +
                          '%{opacity:1}' +
                          ((f + b) % 100) +
                          '%{opacity:' +
                          a +
                          '}100%{opacity:' +
                          g +
                          '}}',
                        p.cssRules.length
                      ),
                      (o[e] = 1)),
                    e
                  );
                }

                function f(a, b) {
                  var c,
                    d,
                    f = a.style;

                  for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++) {
                    if (((c = n[d] + b), f[c] !== e)) return c;
                  }

                  return f[b] !== e ? b : void 0;
                }

                function g(a, b) {
                  for (var c in b) {
                    a.style[f(a, c) || c] = b[c];
                  }

                  return a;
                }

                function h(a) {
                  for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];

                    for (var d in c) {
                      a[d] === e && (a[d] = c[d]);
                    }
                  }

                  return a;
                }

                function i(a) {
                  for (
                    var b = {
                      x: a.offsetLeft,
                      y: a.offsetTop
                    };
                    (a = a.offsetParent);

                  ) {
                    (b.x += a.offsetLeft), (b.y += a.offsetTop);
                  }

                  return b;
                }

                function j(a, b) {
                  return 'string' == typeof a ? a : a[b % a.length];
                }

                function k(a) {
                  return 'undefined' == typeof this ? new k(a) : void (this.opts = h(a || {}, k.defaults, q));
                }

                function l() {
                  function b(b, c) {
                    return a('<' + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c);
                  }

                  p.addRule('.spin-vml', 'behavior:url(#default#VML)'),
                    (k.prototype.lines = function (a, d) {
                      function e() {
                        return g(
                          b('group', {
                            coordsize: k + ' ' + k,
                            coordorigin: -i + ' ' + -i
                          }),
                          {
                            width: k,
                            height: k
                          }
                        );
                      }

                      function f(a, f, h) {
                        c(
                          m,
                          c(
                            g(e(), {
                              rotation: (360 / d.lines) * a + 'deg',
                              left: ~~f
                            }),
                            c(
                              g(
                                b('roundrect', {
                                  arcsize: d.corners
                                }),
                                {
                                  width: i,
                                  height: d.width,
                                  left: d.radius,
                                  top: -d.width >> 1,
                                  filter: h
                                }
                              ),
                              b('fill', {
                                color: j(d.color, a),
                                opacity: d.opacity
                              }),
                              b('stroke', {
                                opacity: 0
                              })
                            )
                          )
                        );
                      }

                      var h,
                        i = d.length + d.width,
                        k = 2 * i,
                        l = 2 * -(d.width + d.length) + 'px',
                        m = g(e(), {
                          position: 'absolute',
                          top: l,
                          left: l
                        });
                      if (d.shadow)
                        for (h = 1; h <= d.lines; h++) {
                          f(
                            h,
                            -2,
                            'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)'
                          );
                        }

                      for (h = 1; h <= d.lines; h++) {
                        f(h);
                      }

                      return c(a, m);
                    }),
                    (k.prototype.opacity = function (a, b, c, d) {
                      var e = a.firstChild;
                      (d = (d.shadow && d.lines) || 0),
                        e &&
                          b + d < e.childNodes.length &&
                          ((e = e.childNodes[b + d]),
                          (e = e && e.firstChild),
                          (e = e && e.firstChild),
                          e && (e.opacity = c));
                    });
                }

                var m,
                  n = ['webkit', 'Moz', 'ms', 'O'],
                  o = {},
                  p = (function () {
                    var d = a('style', {
                      type: 'text/css'
                    });
                    return c(b.getElementsByTagName('head')[0], d), d.sheet || d.styleSheet;
                  })(),
                  q = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    corners: 1,
                    color: '#000',
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    opacity: 0.25,
                    fps: 20,
                    zIndex: 2e9,
                    className: 'spinner',
                    top: 'auto',
                    left: 'auto',
                    position: 'relative'
                  };

                (k.defaults = {}),
                  h(k.prototype, {
                    spin: function spin(b) {
                      this.stop();
                      var c,
                        d,
                        e = this,
                        f = e.opts,
                        h = (e.el = g(
                          a(0, {
                            className: f.className
                          }),
                          {
                            position: f.position,
                            width: 0,
                            zIndex: f.zIndex
                          }
                        )),
                        j = f.radius + f.length + f.width;

                      if (
                        (b &&
                          (b.insertBefore(h, b.firstChild || null),
                          (d = i(b)),
                          (c = i(h)),
                          g(h, {
                            left:
                              ('auto' == f.left
                                ? d.x - c.x + (b.offsetWidth >> 1)
                                : parseInt(f.left, 10) + j) + 'px',
                            top:
                              ('auto' == f.top
                                ? d.y - c.y + (b.offsetHeight >> 1)
                                : parseInt(f.top, 10) + j) + 'px'
                          })),
                        h.setAttribute('role', 'progressbar'),
                        e.lines(h, e.opts),
                        !m)
                      ) {
                        var k,
                          l = 0,
                          n = ((f.lines - 1) * (1 - f.direction)) / 2,
                          o = f.fps,
                          p = o / f.speed,
                          q = (1 - f.opacity) / ((p * f.trail) / 100),
                          r = p / f.lines;
                        !(function s() {
                          l++;

                          for (var a = 0; a < f.lines; a++) {
                            (k = Math.max(1 - ((l + (f.lines - a) * r) % p) * q, f.opacity)),
                              e.opacity(h, a * f.direction + n, k, f);
                          }

                          e.timeout = e.el && setTimeout(s, ~~(1e3 / o));
                        })();
                      }

                      return e;
                    },
                    stop: function stop() {
                      var a = this.el;
                      return (
                        a &&
                          (clearTimeout(this.timeout),
                          a.parentNode && a.parentNode.removeChild(a),
                          (this.el = e)),
                        this
                      );
                    },
                    lines: function lines(b, e) {
                      function f(b, c) {
                        return g(a(), {
                          position: 'absolute',
                          width: e.length + e.width + 'px',
                          height: e.width + 'px',
                          background: b,
                          boxShadow: c,
                          transformOrigin: 'left',
                          transform:
                            'rotate(' +
                            ~~((360 / e.lines) * i + e.rotate) +
                            'deg) translate(' +
                            e.radius +
                            'px,0)',
                          borderRadius: ((e.corners * e.width) >> 1) + 'px'
                        });
                      }

                      for (var h, i = 0, k = ((e.lines - 1) * (1 - e.direction)) / 2; i < e.lines; i++) {
                        (h = g(a(), {
                          position: 'absolute',
                          top: 1 + ~(e.width / 2) + 'px',
                          transform: e.hwaccel ? 'translate3d(0,0,0)' : '',
                          opacity: e.opacity,
                          animation:
                            m &&
                            d(e.opacity, e.trail, k + i * e.direction, e.lines) +
                              ' ' +
                              1 / e.speed +
                              's linear infinite'
                        })),
                          e.shadow &&
                            c(
                              h,
                              g(f('#000', '0 0 4px #000'), {
                                top: '2px'
                              })
                            ),
                          c(b, c(h, f(j(e.color, i), '0 0 1px rgba(0,0,0,.1)')));
                      }

                      return b;
                    },
                    opacity: function opacity(a, b, c) {
                      b < a.childNodes.length && (a.childNodes[b].style.opacity = c);
                    }
                  });
                var r = g(a('group'), {
                  behavior: 'url(#default#VML)'
                });
                return !f(r, 'transform') && r.adj ? l() : (m = f(r, 'animation')), k;
              });

              var Cc,
                Dc,
                Ec = d(a),
                Fc = d(b),
                Gc = 'quirks' === c.hash.replace('#', ''),
                Hc = uc.csstransforms3d,
                Ic = Hc && !Gc,
                Jc = Hc || 'CSS1Compat' === b.compatMode,
                Kc = vc.ok,
                Lc = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
                Mc = !Ic || Lc,
                Nc = navigator.msPointerEnabled,
                Oc =
                  'onwheel' in b.createElement('div')
                    ? 'wheel'
                    : b.onmousewheel !== e
                    ? 'mousewheel'
                    : 'DOMMouseScroll',
                Pc = 250,
                Qc = 300,
                Rc = 1400,
                Sc = 5e3,
                Tc = 2,
                Uc = 64,
                Vc = 500,
                Wc = 333,
                Xc = '$stageFrame',
                Yc = '$navDotFrame',
                Zc = '$navThumbFrame',
                $c = 'auto',
                _c = f([0.1, 0, 0.25, 1]),
                ad = 99999,
                bd = '50%',
                cd = {
                  width: null,
                  minwidth: null,
                  maxwidth: '100%',
                  height: null,
                  minheight: null,
                  maxheight: null,
                  ratio: null,
                  margin: Tc,
                  glimpse: 0,
                  fit: 'contain',
                  position: bd,
                  thumbposition: bd,
                  nav: 'dots',
                  navposition: 'bottom',
                  navwidth: null,
                  thumbwidth: Uc,
                  thumbheight: Uc,
                  thumbmargin: Tc,
                  thumbborderwidth: Tc,
                  thumbfit: 'cover',
                  allowfullscreen: !1,
                  transition: 'slide',
                  clicktransition: null,
                  transitionduration: Qc,
                  captions: !0,
                  hash: !1,
                  startindex: 0,
                  loop: !1,
                  autoplay: !1,
                  stopautoplayontouch: !0,
                  keyboard: !1,
                  arrows: !0,
                  click: !0,
                  swipe: !0,
                  trackpad: !1,
                  enableifsingleframe: !1,
                  controlsonstart: !0,
                  shuffle: !1,
                  direction: 'ltr',
                  shadows: !0,
                  spinner: null
                },
                dd = {
                  left: !0,
                  right: !0,
                  down: !1,
                  up: !1,
                  space: !1,
                  home: !1,
                  end: !1
                };

              G.stop = function (a) {
                G.ii[a] = !1;
              };

              var ed, fd, gd, hd;
              (jQuery.Fotorama = function (a, e) {
                function f() {
                  d.each(yd, function (a, b) {
                    if (!b.i) {
                      b.i = me++;
                      var c = A(b.video, !0);

                      if (c) {
                        var d = {};
                        (b.video = c),
                          b.img || b.thumb ? (b.thumbsReady = !0) : (d = B(b, yd, ie)),
                          C(
                            yd,
                            {
                              img: d.img,
                              thumb: d.thumb
                            },
                            b.i,
                            ie
                          );
                      }
                    }
                  });
                }

                function g(a) {
                  return Zd[a] || ie.fullScreen;
                }

                function i(a) {
                  var b = 'keydown.' + ib,
                    c = ib + je,
                    d = 'keydown.' + c,
                    f = 'resize.' + c + ' orientationchange.' + c;
                  a
                    ? (Fc.on(d, function (a) {
                        var b, c;
                        Cd && 27 === a.keyCode
                          ? ((b = !0), md(Cd, !0, !0))
                          : (ie.fullScreen || (e.keyboard && !ie.index)) &&
                            (27 === a.keyCode
                              ? ((b = !0), ie.cancelFullScreen())
                              : (a.shiftKey && 32 === a.keyCode && g('space')) ||
                                (37 === a.keyCode && g('left')) ||
                                (38 === a.keyCode && g('up'))
                              ? (c = '<')
                              : (32 === a.keyCode && g('space')) ||
                                (39 === a.keyCode && g('right')) ||
                                (40 === a.keyCode && g('down'))
                              ? (c = '>')
                              : 36 === a.keyCode && g('home')
                              ? (c = '<<')
                              : 35 === a.keyCode && g('end') && (c = '>>')),
                          (b || c) && Y(a),
                          c &&
                            ie.show({
                              index: c,
                              slow: a.altKey,
                              user: !0
                            });
                      }),
                      ie.index ||
                        Fc.off(b).on(b, 'textarea, input, select', function (a) {
                          !Dc.hasClass(jb) && a.stopPropagation();
                        }),
                      Ec.on(f, ie.resize))
                    : (Fc.off(d), Ec.off(f));
                }

                function j(b) {
                  b !== j.f &&
                    (b
                      ? (a
                          .html('')
                          .addClass(ib + ' ' + ke)
                          .append(qe)
                          .before(oe)
                          .before(pe),
                        gb(ie))
                      : (qe.detach(), oe.detach(), pe.detach(), a.html(ne.urtext).removeClass(ke), hb(ie)),
                    i(b),
                    (j.f = b));
                }

                function m() {
                  (yd = ie.data = yd || P(e.data) || D(a)),
                    (zd = ie.size = yd.length),
                    !xd.ok && e.shuffle && O(yd),
                    f(),
                    (Je = y(Je)),
                    zd && j(!0);
                }

                function o() {
                  var a = (2 > zd && !e.enableifsingleframe) || Cd;
                  (Me.noMove = a || Sd),
                    (Me.noSwipe = a || !e.swipe),
                    !Wd && se.toggleClass(Bb, !e.click && !Me.noMove && !Me.noSwipe),
                    Nc && qe.toggleClass(sb, !Me.noSwipe);
                }

                function t(a) {
                  a === !0 && (a = ''), (e.autoplay = Math.max(+a || Sc, 1.5 * Vd));
                }

                function u() {
                  function a(a, c) {
                    b[a ? 'add' : 'remove'].push(c);
                  }

                  (ie.options = e = R(e)),
                    (Sd = 'crossfade' === e.transition || 'dissolve' === e.transition),
                    (Md = e.loop && (zd > 2 || (Sd && (!Wd || 'slide' !== Wd)))),
                    (Vd = +e.transitionduration || Qc),
                    (Yd = 'rtl' === e.direction),
                    (Zd = d.extend({}, e.keyboard && dd, e.keyboard));
                  var b = {
                    add: [],
                    remove: []
                  };
                  zd > 1 || e.enableifsingleframe
                    ? ((Nd = e.nav), (Pd = 'top' === e.navposition), b.remove.push(Xb), we.toggle(!!e.arrows))
                    : ((Nd = !1), we.hide()),
                    Rb(),
                    (Bd = new zc(
                      d.extend(Ac, e.spinner, Bc, {
                        direction: Yd ? -1 : 1
                      })
                    )),
                    Gc(),
                    Hc(),
                    e.autoplay && t(e.autoplay),
                    (Td = n(e.thumbwidth) || Uc),
                    (Ud = n(e.thumbheight) || Uc),
                    (Ne.ok = Pe.ok = e.trackpad && !Mc),
                    o(),
                    ed(e, [Le]),
                    (Od = 'thumbs' === Nd),
                    Od
                      ? (lc(zd, 'navThumb'),
                        (Ad = Be),
                        (he = Zc),
                        J(
                          oe,
                          d.Fotorama.jst.style({
                            w: Td,
                            h: Ud,
                            b: e.thumbborderwidth,
                            m: e.thumbmargin,
                            s: je,
                            q: !Jc
                          })
                        ),
                        ye.addClass(Lb).removeClass(Kb))
                      : 'dots' === Nd
                      ? (lc(zd, 'navDot'), (Ad = Ae), (he = Yc), ye.addClass(Kb).removeClass(Lb))
                      : ((Nd = !1), ye.removeClass(Lb + ' ' + Kb)),
                    Nd && (Pd ? xe.insertBefore(re) : xe.insertAfter(re), (wc.nav = !1), wc(Ad, ze, 'nav')),
                    (Qd = e.allowfullscreen),
                    Qd ? (De.prependTo(re), (Rd = Kc && 'native' === Qd)) : (De.detach(), (Rd = !1)),
                    a(Sd, ob),
                    a(!Sd, pb),
                    a(!e.captions, vb),
                    a(Yd, tb),
                    a('always' !== e.arrows, wb),
                    (Xd = e.shadows && !Mc),
                    a(!Xd, rb),
                    qe.addClass(b.add.join(' ')).removeClass(b.remove.join(' ')),
                    (Ke = d.extend({}, e));
                }

                function x(a) {
                  return 0 > a ? (zd + (a % zd)) % zd : a >= zd ? a % zd : a;
                }

                function y(a) {
                  return h(a, 0, zd - 1);
                }

                function z(a) {
                  return Md ? x(a) : y(a);
                }

                function E(a) {
                  return a > 0 || Md ? a - 1 : !1;
                }

                function U(a) {
                  return zd - 1 > a || Md ? a + 1 : !1;
                }

                function $() {
                  (Me.min = Md ? -1 / 0 : -r(zd - 1, Le.w, e.margin, Fd)),
                    (Me.max = Md ? 1 / 0 : -r(0, Le.w, e.margin, Fd)),
                    (Me.snap = Le.w + e.margin);
                }

                function bb() {
                  (Oe.min = Math.min(0, Le.nw - ze.width())),
                    (Oe.max = 0),
                    ze.toggleClass(Bb, !(Oe.noMove = Oe.min === Oe.max));
                }

                function cb(a, b, c) {
                  if ('number' == typeof a) {
                    a = new Array(a);
                    var e = !0;
                  }

                  return d.each(a, function (a, d) {
                    if ((e && (d = a), 'number' == typeof d)) {
                      var f = yd[x(d)];

                      if (f) {
                        var g = '$' + b + 'Frame',
                          h = f[g];
                        c.call(this, a, d, f, h, g, h && h.data());
                      }
                    }
                  });
                }

                function fb(a, b, c, d) {
                  (!$d || ('*' === $d && d === Ld)) &&
                    ((a = q(e.width) || q(a) || Vc),
                    (b = q(e.height) || q(b) || Wc),
                    ie.resize(
                      {
                        width: a,
                        ratio: e.ratio || c || a / b
                      },
                      0,
                      d !== Ld && '*'
                    ));
                }

                function Pb(a, b, c, f, g, h) {
                  cb(a, b, function (a, i, j, k, l, m) {
                    function n(a) {
                      var b = x(i);
                      fd(a, {
                        index: b,
                        src: w,
                        frame: yd[b]
                      });
                    }

                    function o() {
                      t.remove(),
                        (d.Fotorama.cache[w] = 'error'),
                        (j.html && 'stage' === b) || !y || y === w
                          ? (!w || j.html || r
                              ? 'stage' === b &&
                                (k
                                  .trigger('f:load')
                                  .removeClass(ac + ' ' + _b)
                                  .addClass(bc),
                                n('load'),
                                fb())
                              : (k.trigger('f:error').removeClass(ac).addClass(_b), n('error')),
                            (m.state = 'error'),
                            !(zd > 1 && yd[i] === j) ||
                              j.html ||
                              j.deleted ||
                              j.video ||
                              r ||
                              ((j.deleted = !0), ie.splice(i, 1)))
                          : ((j[v] = w = y), Pb([i], b, c, f, g, !0));
                    }

                    function p() {
                      (d.Fotorama.measures[w] = u.measures = d.Fotorama.measures[w] || {
                        width: s.width,
                        height: s.height,
                        ratio: s.width / s.height
                      }),
                        fb(u.measures.width, u.measures.height, u.measures.ratio, i),
                        t
                          .off('load error')
                          .addClass(fc + (r ? ' ' + gc : ''))
                          .prependTo(k),
                        I(
                          t,
                          (d.isFunction(c) ? c() : c) || Le,
                          f || j.fit || e.fit,
                          g || j.position || e.position
                        ),
                        (d.Fotorama.cache[w] = m.state = 'loaded'),
                        setTimeout(function () {
                          k
                            .trigger('f:load')
                            .removeClass(ac + ' ' + _b)
                            .addClass(bc + ' ' + (r ? cc : dc)),
                            'stage' === b
                              ? n('load')
                              : (j.thumbratio === $c || (!j.thumbratio && e.thumbratio === $c)) &&
                                ((j.thumbratio = u.measures.ratio), vd());
                        }, 0);
                    }

                    function q() {
                      var a = 10;
                      G(
                        function () {
                          return !fe || (!a-- && !Mc);
                        },
                        function () {
                          p();
                        }
                      );
                    }

                    if (k) {
                      var r = ie.fullScreen && j.full && j.full !== j.img && !m.$full && 'stage' === b;

                      if (!m.$img || h || r) {
                        var s = new Image(),
                          t = d(s),
                          u = t.data();
                        m[r ? '$full' : '$img'] = t;
                        var v = 'stage' === b ? (r ? 'full' : 'img') : 'thumb',
                          w = j[v],
                          y = r ? null : j['stage' === b ? 'thumb' : 'img'];
                        if (('navThumb' === b && (k = m.$wrap), !w)) return void o();
                        d.Fotorama.cache[w]
                          ? !(function z() {
                              'error' === d.Fotorama.cache[w]
                                ? o()
                                : 'loaded' === d.Fotorama.cache[w]
                                ? setTimeout(q, 0)
                                : setTimeout(z, 100);
                            })()
                          : ((d.Fotorama.cache[w] = '*'), t.on('load', q).on('error', o)),
                          (m.state = ''),
                          (s.src = w);
                      }
                    }
                  });
                }

                function Qb(a) {
                  Ie.append(Bd.spin().el).appendTo(a);
                }

                function Rb() {
                  Ie.detach(), Bd && Bd.stop();
                }

                function Sb() {
                  var a = Dd[Xc];
                  a &&
                    !a.data().state &&
                    (Qb(a),
                    a.on('f:load f:error', function () {
                      a.off('f:load f:error'), Rb();
                    }));
                }

                function ec(a) {
                  W(a, sd),
                    X(a, function () {
                      setTimeout(function () {
                        Q(ye);
                      }, 0),
                        Rc({
                          time: Vd,
                          guessIndex: d(this).data().eq,
                          minMax: Oe
                        });
                    });
                }

                function lc(a, b) {
                  cb(a, b, function (a, c, e, f, g, h) {
                    if (!f) {
                      (f = e[g] = qe[g].clone()), (h = f.data()), (h.data = e);
                      var i = f[0];
                      'stage' === b
                        ? (e.html &&
                            d('<div class="' + kc + '"></div>')
                              .append(e._html ? d(e.html).removeAttr('id').html(e._html) : e.html)
                              .appendTo(f),
                          e.caption && d(N(oc, N(pc, e.caption))).appendTo(f),
                          e.video && f.addClass(zb).append(Fe.clone()),
                          X(i, function () {
                            setTimeout(function () {
                              Q(re);
                            }, 0),
                              pd({
                                index: h.eq,
                                user: !0
                              });
                          }),
                          (te = te.add(f)))
                        : 'navDot' === b
                        ? (ec(i), (Ae = Ae.add(f)))
                        : 'navThumb' === b &&
                          (ec(i),
                          (h.$wrap = f.children(':first')),
                          (Be = Be.add(f)),
                          e.video && h.$wrap.append(Fe.clone()));
                    }
                  });
                }

                function sc(a, b, c, d) {
                  return a && a.length && I(a, b, c, d);
                }

                function tc(a) {
                  cb(a, 'stage', function (a, b, c, f, g, h) {
                    if (f) {
                      var i = x(b),
                        j = c.fit || e.fit,
                        k = c.position || e.position;
                      (h.eq = i),
                        (Re[Xc][i] = f.css(
                          d.extend(
                            {
                              left: Sd ? 0 : r(b, Le.w, e.margin, Fd)
                            },
                            Sd && l(0)
                          )
                        )),
                        F(f[0]) && (f.appendTo(se), md(c.$video)),
                        sc(h.$img, Le, j, k),
                        sc(h.$full, Le, j, k);
                    }
                  });
                }

                function uc(a, b) {
                  if ('thumbs' === Nd && !isNaN(a)) {
                    var c = -a,
                      f = -a + Le.nw;
                    Be.each(function () {
                      var a = d(this),
                        g = a.data(),
                        h = g.eq,
                        i = function i() {
                          return {
                            h: Ud,
                            w: g.w
                          };
                        },
                        j = i(),
                        k = yd[h] || {},
                        l = k.thumbfit || e.thumbfit,
                        m = k.thumbposition || e.thumbposition;

                      (j.w = g.w),
                        g.l + g.w < c ||
                          g.l > f ||
                          sc(g.$img, j, l, m) ||
                          (b && Pb([h], 'navThumb', i, l, m));
                    });
                  }
                }

                function wc(a, b, c) {
                  if (!wc[c]) {
                    var f = 'nav' === c && Od,
                      g = 0;
                    b.append(
                      a
                        .filter(function () {
                          for (var a, b = d(this), c = b.data(), e = 0, f = yd.length; f > e; e++) {
                            if (c.data === yd[e]) {
                              (a = !0), (c.eq = e);
                              break;
                            }
                          }

                          return a || (b.remove() && !1);
                        })
                        .sort(function (a, b) {
                          return d(a).data().eq - d(b).data().eq;
                        })
                        .each(function () {
                          if (f) {
                            var a = d(this),
                              b = a.data(),
                              c = Math.round(Ud * b.data.thumbratio) || Td;
                            (b.l = g),
                              (b.w = c),
                              a.css({
                                width: c
                              }),
                              (g += c + e.thumbmargin);
                          }
                        })
                    ),
                      (wc[c] = !0);
                  }
                }

                function xc(a) {
                  return a - Se > Le.w / 3;
                }

                function yc(a) {
                  return !(Md || (Je + a && Je - zd + a) || Cd);
                }

                function Gc() {
                  var a = yc(0),
                    b = yc(1);
                  ue.toggleClass(Eb, a).attr(V(a)), ve.toggleClass(Eb, b).attr(V(b));
                }

                function Hc() {
                  Ne.ok &&
                    (Ne.prevent = {
                      '<': yc(0),
                      '>': yc(1)
                    });
                }

                function Lc(a) {
                  var b,
                    c,
                    d = a.data();
                  return (
                    Od ? ((b = d.l), (c = d.w)) : ((b = a.position().left), (c = a.width())),
                    {
                      c: b + c / 2,
                      min: -b + 10 * e.thumbmargin,
                      max: -b + Le.w - c - 10 * e.thumbmargin
                    }
                  );
                }

                function Oc(a) {
                  var b = Dd[he].data();

                  _(Ce, {
                    time: 1.2 * a,
                    pos: b.l,
                    width: b.w - 2 * e.thumbborderwidth
                  });
                }

                function Rc(a) {
                  var b = yd[a.guessIndex][he];

                  if (b) {
                    var c = Oe.min !== Oe.max,
                      d = a.minMax || (c && Lc(Dd[he])),
                      e = c && (a.keep && Rc.l ? Rc.l : h((a.coo || Le.nw / 2) - Lc(b).c, d.min, d.max)),
                      f = c && h(e, Oe.min, Oe.max),
                      g = 1.1 * a.time;
                    _(ze, {
                      time: g,
                      pos: f || 0,
                      onEnd: function onEnd() {
                        uc(f, !0);
                      }
                    }),
                      ld(ye, K(f, Oe.min, Oe.max)),
                      (Rc.l = e);
                  }
                }

                function Tc() {
                  _c(he), Qe[he].push(Dd[he].addClass(Wb));
                }

                function _c(a) {
                  for (var b = Qe[a]; b.length; ) {
                    b.shift().removeClass(Wb);
                  }
                }

                function bd(a) {
                  var b = Re[a];
                  d.each(Ed, function (a, c) {
                    delete b[x(c)];
                  }),
                    d.each(b, function (a, c) {
                      delete b[a], c.detach();
                    });
                }

                function cd(a) {
                  Fd = Gd = Je;
                  var b = Dd[Xc];
                  b &&
                    (_c(Xc),
                    Qe[Xc].push(b.addClass(Wb)),
                    a || ie.show.onEnd(!0),
                    v(se, 0, !0),
                    bd(Xc),
                    tc(Ed),
                    $(),
                    bb());
                }

                function ed(a, b) {
                  a &&
                    d.each(b, function (b, c) {
                      c &&
                        d.extend(c, {
                          width: a.width || c.width,
                          height: a.height,
                          minwidth: a.minwidth,
                          maxwidth: a.maxwidth,
                          minheight: a.minheight,
                          maxheight: a.maxheight,
                          ratio: S(a.ratio)
                        });
                    });
                }

                function fd(b, c) {
                  a.trigger(ib + ':' + b, [ie, c]);
                }

                function gd() {
                  clearTimeout(hd.t), (fe = 1), e.stopautoplayontouch ? ie.stopAutoplay() : (ce = !0);
                }

                function hd() {
                  fe &&
                    (e.stopautoplayontouch || (id(), jd()),
                    (hd.t = setTimeout(function () {
                      fe = 0;
                    }, Qc + Pc)));
                }

                function id() {
                  ce = !(!Cd && !de);
                }

                function jd() {
                  if ((clearTimeout(jd.t), G.stop(jd.w), !e.autoplay || ce))
                    return void (ie.autoplay && ((ie.autoplay = !1), fd('stopautoplay')));
                  ie.autoplay || ((ie.autoplay = !0), fd('startautoplay'));
                  var a = Je,
                    b = Dd[Xc].data();
                  jd.w = G(
                    function () {
                      return b.state || a !== Je;
                    },
                    function () {
                      jd.t = setTimeout(function () {
                        if (!ce && a === Je) {
                          var b = Kd,
                            c = yd[b][Xc].data();
                          jd.w = G(
                            function () {
                              return c.state || b !== Kd;
                            },
                            function () {
                              ce || b !== Kd || ie.show(Md ? Z(!Yd) : Kd);
                            }
                          );
                        }
                      }, e.autoplay);
                    }
                  );
                }

                function kd() {
                  ie.fullScreen &&
                    ((ie.fullScreen = !1),
                    Kc && vc.cancel(le),
                    Dc.removeClass(jb),
                    Cc.removeClass(jb),
                    a.removeClass(Zb).insertAfter(pe),
                    (Le = d.extend({}, ee)),
                    md(Cd, !0, !0),
                    rd('x', !1),
                    ie.resize(),
                    Pb(Ed, 'stage'),
                    Q(Ec, ae, _d),
                    fd('fullscreenexit'));
                }

                function ld(a, b) {
                  Xd &&
                    (a.removeClass(Ub + ' ' + Vb),
                    b && !Cd && a.addClass(b.replace(/^|\s/g, ' ' + Tb + '--')));
                }

                function md(a, b, c) {
                  b && (qe.removeClass(nb), (Cd = !1), o()),
                    a && a !== Cd && (a.remove(), fd('unloadvideo')),
                    c && (id(), jd());
                }

                function nd(a) {
                  qe.toggleClass(qb, a);
                }

                function od(a) {
                  if (!Me.flow) {
                    var b = a ? a.pageX : od.x,
                      c = b && !yc(xc(b)) && e.click;
                    od.p !== c && re.toggleClass(Cb, c) && ((od.p = c), (od.x = b));
                  }
                }

                function pd(a) {
                  clearTimeout(pd.t),
                    e.clicktransition && e.clicktransition !== e.transition
                      ? setTimeout(function () {
                          var b = e.transition;
                          ie.setOptions({
                            transition: e.clicktransition
                          }),
                            (Wd = b),
                            (pd.t = setTimeout(function () {
                              ie.show(a);
                            }, 10));
                        }, 0)
                      : ie.show(a);
                }

                function qd(a, b) {
                  var c = a.target,
                    f = d(c);
                  f.hasClass(mc)
                    ? ie.playVideo()
                    : c === Ee
                    ? ie.toggleFullScreen()
                    : Cd
                    ? c === He && md(Cd, !0, !0)
                    : b
                    ? nd()
                    : e.click &&
                      pd({
                        index: a.shiftKey || Z(xc(a._x)),
                        slow: a.altKey,
                        user: !0
                      });
                }

                function rd(a, b) {
                  Me[a] = Oe[a] = b;
                }

                function sd(a) {
                  var b = d(this).data().eq;
                  pd({
                    index: b,
                    slow: a.altKey,
                    user: !0,
                    coo: a._x - ye.offset().left
                  });
                }

                function td(a) {
                  pd({
                    index: we.index(this) ? '>' : '<',
                    slow: a.altKey,
                    user: !0
                  });
                }

                function ud(a) {
                  X(a, function () {
                    setTimeout(function () {
                      Q(re);
                    }, 0),
                      nd(!1);
                  });
                }

                function vd() {
                  if ((m(), u(), !vd.i)) {
                    vd.i = !0;
                    var a = e.startindex;
                    (a || (e.hash && c.hash)) &&
                      (Ld = L(a || c.hash.replace(/^#/, ''), yd, 0 === ie.index || a, a)),
                      (Je = Fd = Gd = Hd = Ld = z(Ld) || 0);
                  }

                  if (zd) {
                    if (wd()) return;
                    Cd && md(Cd, !0),
                      (Ed = []),
                      bd(Xc),
                      (vd.ok = !0),
                      ie.show({
                        index: Je,
                        time: 0
                      }),
                      ie.resize();
                  } else ie.destroy();
                }

                function wd() {
                  return !wd.f === Yd ? ((wd.f = Yd), (Je = zd - 1 - Je), ie.reverse(), !0) : void 0;
                }

                function xd() {
                  xd.ok || ((xd.ok = !0), fd('ready'));
                }

                (Cc = d('html')), (Dc = d('body'));

                var yd,
                  zd,
                  Ad,
                  Bd,
                  Cd,
                  Dd,
                  Ed,
                  Fd,
                  Gd,
                  Hd,
                  Id,
                  Jd,
                  Kd,
                  Ld,
                  Md,
                  Nd,
                  Od,
                  Pd,
                  Qd,
                  Rd,
                  Sd,
                  Td,
                  Ud,
                  Vd,
                  Wd,
                  Xd,
                  Yd,
                  Zd,
                  $d,
                  _d,
                  ae,
                  be,
                  ce,
                  de,
                  ee,
                  fe,
                  ge,
                  he,
                  ie = this,
                  je = d.now(),
                  ke = ib + je,
                  le = a[0],
                  me = 1,
                  ne = a.data(),
                  oe = d('<style></style>'),
                  pe = d(N(Yb)),
                  qe = d(N(kb)),
                  re = d(N(xb)).appendTo(qe),
                  se = (re[0], d(N(Ab)).appendTo(re)),
                  te = d(),
                  ue = d(N(Db + ' ' + Fb + rc)),
                  ve = d(N(Db + ' ' + Gb + rc)),
                  we = ue.add(ve).appendTo(re),
                  xe = d(N(Ib)),
                  ye = d(N(Hb)).appendTo(xe),
                  ze = d(N(Jb)).appendTo(ye),
                  Ae = d(),
                  Be = d(),
                  Ce = (se.data(), ze.data(), d(N(jc)).appendTo(ze)),
                  De = d(N($b + rc)),
                  Ee = De[0],
                  Fe = d(N(mc)),
                  Ge = d(N(nc)).appendTo(re),
                  He = Ge[0],
                  Ie = d(N(qc)),
                  Je = !1,
                  Ke = {},
                  Le = {},
                  Me = {},
                  Ne = {},
                  Oe = {},
                  Pe = {},
                  Qe = {},
                  Re = {},
                  Se = 0,
                  Te = [];

                (qe[Xc] = d(N(yb))),
                  (qe[Zc] = d(N(Mb + ' ' + Ob + rc, N(ic)))),
                  (qe[Yc] = d(N(Mb + ' ' + Nb + rc, N(hc)))),
                  (Qe[Xc] = []),
                  (Qe[Zc] = []),
                  (Qe[Yc] = []),
                  (Re[Xc] = {}),
                  qe.addClass(Ic ? mb : lb).toggleClass(qb, !e.controlsonstart),
                  (ne.fotorama = this),
                  (ie.startAutoplay = function (a) {
                    return ie.autoplay ? this : ((ce = de = !1), t(a || e.autoplay), jd(), this);
                  }),
                  (ie.stopAutoplay = function () {
                    return ie.autoplay && ((ce = de = !0), jd()), this;
                  }),
                  (ie.show = function (a) {
                    var b;
                    'object' != _typeof(a) ? ((b = a), (a = {})) : (b = a.index),
                      (b =
                        '>' === b ? Gd + 1 : '<' === b ? Gd - 1 : '<<' === b ? 0 : '>>' === b ? zd - 1 : b),
                      (b = isNaN(b) ? L(b, yd, !0) : b),
                      (b = 'undefined' == typeof b ? Je || 0 : b),
                      (ie.activeIndex = Je = z(b)),
                      (Id = E(Je)),
                      (Jd = U(Je)),
                      (Kd = x(Je + (Yd ? -1 : 1))),
                      (Ed = [Je, Id, Jd]),
                      (Gd = Md ? b : Je);
                    var c = Math.abs(Hd - Gd),
                      d = w(a.time, function () {
                        return Math.min(Vd * (1 + (c - 1) / 12), 2 * Vd);
                      }),
                      f = a.overPos;
                    a.slow && (d *= 10);
                    var g = Dd;
                    ie.activeFrame = Dd = yd[Je];
                    var i = g === Dd && !a.user;
                    md(Cd, Dd.i !== yd[x(Fd)].i),
                      lc(Ed, 'stage'),
                      tc(Mc ? [Gd] : [Gd, E(Gd), U(Gd)]),
                      rd('go', !0),
                      i ||
                        fd('show', {
                          user: a.user,
                          time: d
                        }),
                      (ce = !0);

                    var j = (ie.show.onEnd = function (b) {
                      if (!j.ok) {
                        if (
                          ((j.ok = !0),
                          b || cd(!0),
                          i ||
                            fd('showend', {
                              user: a.user
                            }),
                          !b && Wd && Wd !== e.transition)
                        )
                          return (
                            ie.setOptions({
                              transition: Wd
                            }),
                            void (Wd = !1)
                          );
                        Sb(), Pb(Ed, 'stage'), rd('go', !1), Hc(), od(), id(), jd();
                      }
                    });

                    if (Sd) {
                      var k = Dd[Xc],
                        l = Je !== Hd ? yd[Hd][Xc] : null;
                      ab(
                        k,
                        l,
                        te,
                        {
                          time: d,
                          method: e.transition,
                          onEnd: j
                        },
                        Te
                      );
                    } else
                      _(se, {
                        pos: -r(Gd, Le.w, e.margin, Fd),
                        overPos: f,
                        time: d,
                        onEnd: j
                      });

                    if ((Gc(), Nd)) {
                      Tc();
                      var m = y(Je + h(Gd - Hd, -1, 1));
                      Rc({
                        time: d,
                        coo: m !== Je && a.coo,
                        guessIndex: 'undefined' != typeof a.coo ? m : Je,
                        keep: i
                      }),
                        Od && Oc(d);
                    }

                    return (
                      (be = 'undefined' != typeof Hd && Hd !== Je),
                      (Hd = Je),
                      e.hash && be && !ie.eq && H(Dd.id || Je + 1),
                      this
                    );
                  }),
                  (ie.requestFullScreen = function () {
                    return (
                      Qd &&
                        !ie.fullScreen &&
                        ((_d = Ec.scrollTop()),
                        (ae = Ec.scrollLeft()),
                        Q(Ec),
                        rd('x', !0),
                        (ee = d.extend({}, Le)),
                        a.addClass(Zb).appendTo(Dc.addClass(jb)),
                        Cc.addClass(jb),
                        md(Cd, !0, !0),
                        (ie.fullScreen = !0),
                        Rd && vc.request(le),
                        ie.resize(),
                        Pb(Ed, 'stage'),
                        Sb(),
                        fd('fullscreenenter')),
                      this
                    );
                  }),
                  (ie.cancelFullScreen = function () {
                    return Rd && vc.is() ? vc.cancel(b) : kd(), this;
                  }),
                  (ie.toggleFullScreen = function () {
                    return ie[(ie.fullScreen ? 'cancel' : 'request') + 'FullScreen']();
                  }),
                  T(b, vc.event, function () {
                    !yd || vc.is() || Cd || kd();
                  }),
                  (ie.resize = function (a) {
                    if (!yd) return this;
                    var b = arguments[1] || 0,
                      c = arguments[2];
                    ed(
                      ie.fullScreen
                        ? {
                            width: '100%',
                            maxwidth: null,
                            minwidth: null,
                            height: '100%',
                            maxheight: null,
                            minheight: null
                          }
                        : R(a),
                      [Le, c || ie.fullScreen || e]
                    );
                    var d = Le.width,
                      f = Le.height,
                      g = Le.ratio,
                      i = Ec.height() - (Nd ? ye.height() : 0);
                    return (
                      q(d) &&
                        (qe.addClass(ub).css({
                          width: d,
                          minWidth: Le.minwidth || 0,
                          maxWidth: Le.maxwidth || ad
                        }),
                        (d = Le.W = Le.w = qe.width()),
                        (Le.nw = (Nd && p(e.navwidth, d)) || d),
                        e.glimpse && (Le.w -= Math.round(2 * (p(e.glimpse, d) || 0))),
                        se.css({
                          width: Le.w,
                          marginLeft: (Le.W - Le.w) / 2
                        }),
                        (f = p(f, i)),
                        (f = f || (g && d / g)),
                        f &&
                          ((d = Math.round(d)),
                          (f = Le.h = Math.round(h(f, p(Le.minheight, i), p(Le.maxheight, i)))),
                          re.stop().animate(
                            {
                              width: d,
                              height: f
                            },
                            b,
                            function () {
                              qe.removeClass(ub);
                            }
                          ),
                          cd(),
                          Nd &&
                            (ye.stop().animate(
                              {
                                width: Le.nw
                              },
                              b
                            ),
                            Rc({
                              guessIndex: Je,
                              time: b,
                              keep: !0
                            }),
                            Od && wc.nav && Oc(b)),
                          ($d = c || !0),
                          xd())),
                      (Se = re.offset().left),
                      this
                    );
                  }),
                  (ie.setOptions = function (a) {
                    return d.extend(e, a), vd(), this;
                  }),
                  (ie.shuffle = function () {
                    return yd && O(yd) && vd(), this;
                  }),
                  (ie.destroy = function () {
                    return (
                      ie.cancelFullScreen(),
                      ie.stopAutoplay(),
                      (yd = ie.data = null),
                      j(),
                      (Ed = []),
                      bd(Xc),
                      (vd.ok = !1),
                      this
                    );
                  }),
                  (ie.playVideo = function () {
                    var a = Dd,
                      b = a.video,
                      c = Je;
                    return (
                      'object' == _typeof(b) &&
                        a.videoReady &&
                        (Rd && ie.fullScreen && ie.cancelFullScreen(),
                        G(
                          function () {
                            return !vc.is() || c !== Je;
                          },
                          function () {
                            c === Je &&
                              ((a.$video = a.$video || d(d.Fotorama.jst.video(b))),
                              a.$video.appendTo(a[Xc]),
                              qe.addClass(nb),
                              (Cd = a.$video),
                              o(),
                              we.blur(),
                              De.blur(),
                              fd('loadvideo'));
                          }
                        )),
                      this
                    );
                  }),
                  (ie.stopVideo = function () {
                    return md(Cd, !0, !0), this;
                  }),
                  re.on('mousemove', od),
                  (Me = db(se, {
                    onStart: gd,
                    onMove: function onMove(a, b) {
                      ld(re, b.edge);
                    },
                    onTouchEnd: hd,
                    onEnd: function onEnd(a) {
                      ld(re);
                      var b = ((Nc && !ge) || a.touch) && e.arrows && 'always' !== e.arrows;

                      if (a.moved || (b && a.pos !== a.newPos && !a.control)) {
                        var c = s(a.newPos, Le.w, e.margin, Fd);
                        ie.show({
                          index: c,
                          time: Sd ? Vd : a.time,
                          overPos: a.overPos,
                          user: !0
                        });
                      } else a.aborted || a.control || qd(a.startEvent, b);
                    },
                    timeLow: 1,
                    timeHigh: 1,
                    friction: 2,
                    select: '.' + Xb + ', .' + Xb + ' *',
                    $wrap: re
                  })),
                  (Oe = db(ze, {
                    onStart: gd,
                    onMove: function onMove(a, b) {
                      ld(ye, b.edge);
                    },
                    onTouchEnd: hd,
                    onEnd: function onEnd(a) {
                      function b() {
                        (Rc.l = a.newPos), id(), jd(), uc(a.newPos, !0);
                      }

                      if (a.moved)
                        a.pos !== a.newPos
                          ? ((ce = !0),
                            _(ze, {
                              time: a.time,
                              pos: a.newPos,
                              overPos: a.overPos,
                              onEnd: b
                            }),
                            uc(a.newPos),
                            Xd && ld(ye, K(a.newPos, Oe.min, Oe.max)))
                          : b();
                      else {
                        var c = a.$target.closest('.' + Mb, ze)[0];
                        c && sd.call(c, a.startEvent);
                      }
                    },
                    timeLow: 0.5,
                    timeHigh: 2,
                    friction: 5,
                    $wrap: ye
                  })),
                  (Ne = eb(re, {
                    shift: !0,
                    onEnd: function onEnd(a, b) {
                      gd(),
                        hd(),
                        ie.show({
                          index: b,
                          slow: a.altKey
                        });
                    }
                  })),
                  (Pe = eb(ye, {
                    onEnd: function onEnd(a, b) {
                      gd(), hd();
                      var c = v(ze) + 0.25 * b;
                      ze.css(k(h(c, Oe.min, Oe.max))),
                        Xd && ld(ye, K(c, Oe.min, Oe.max)),
                        (Pe.prevent = {
                          '<': c >= Oe.max,
                          '>': c <= Oe.min
                        }),
                        clearTimeout(Pe.t),
                        (Pe.t = setTimeout(function () {
                          (Rc.l = c), uc(c, !0);
                        }, Pc)),
                        uc(c);
                    }
                  })),
                  qe.hover(
                    function () {
                      setTimeout(function () {
                        fe || nd(!(ge = !0));
                      }, 0);
                    },
                    function () {
                      ge && nd(!(ge = !1));
                    }
                  ),
                  M(
                    we,
                    function (a) {
                      Y(a), td.call(this, a);
                    },
                    {
                      onStart: function onStart() {
                        gd(), (Me.control = !0);
                      },
                      onTouchEnd: hd
                    }
                  ),
                  we.each(function () {
                    W(this, function (a) {
                      td.call(this, a);
                    }),
                      ud(this);
                  }),
                  W(Ee, ie.toggleFullScreen),
                  ud(Ee),
                  d.each('load push pop shift unshift reverse sort splice'.split(' '), function (a, b) {
                    ie[b] = function () {
                      return (
                        (yd = yd || []),
                        'load' !== b
                          ? Array.prototype[b].apply(yd, arguments)
                          : arguments[0] &&
                            'object' == _typeof(arguments[0]) &&
                            arguments[0].length &&
                            (yd = P(arguments[0])),
                        vd(),
                        ie
                      );
                    };
                  }),
                  vd();
              }),
                (d.fn.fotorama = function (b) {
                  return this.each(function () {
                    var c = this,
                      e = d(this),
                      f = e.data(),
                      g = f.fotorama;
                    g
                      ? g.setOptions(b, !0)
                      : G(
                          function () {
                            return !E(c);
                          },
                          function () {
                            (f.urtext = e.html()),
                              new d.Fotorama(e, d.extend({}, cd, a.fotoramaDefaults, b, f));
                          }
                        );
                  });
                }),
                (d.Fotorama.instances = []),
                (d.Fotorama.cache = {}),
                (d.Fotorama.measures = {}),
                (d = d || {}),
                (d.Fotorama = d.Fotorama || {}),
                (d.Fotorama.jst = d.Fotorama.jst || {}),
                (d.Fotorama.jst.style = function (a) {
                  {
                    var b,
                      c = '';
                    tc.escape;
                  }
                  return (c +=
                    '.fotorama' +
                    (null == (b = a.s) ? '' : b) +
                    ' .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:' +
                    (null == (b = a.m) ? '' : b) +
                    'px;\nheight:' +
                    (null == (b = a.h) ? '' : b) +
                    'px}\n.fotorama' +
                    (null == (b = a.s) ? '' : b) +
                    ' .fotorama__thumb-border{\nheight:' +
                    (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? '' : b) +
                    'px;\nborder-width:' +
                    (null == (b = a.b) ? '' : b) +
                    'px;\nmargin-top:' +
                    (null == (b = a.m) ? '' : b) +
                    'px}');
                }),
                (d.Fotorama.jst.video = function (a) {
                  function b() {
                    c += d.call(arguments, '');
                  }

                  var c = '',
                    d = (tc.escape, Array.prototype.join);
                  return (
                    (c += '<div class="fotorama__video"><iframe src="'),
                    b(
                      ('youtube' == a.type
                        ? a.p + 'youtube.com/embed/' + a.id + '?autoplay=1'
                        : 'vimeo' == a.type
                        ? a.p + 'player.vimeo.com/video/' + a.id + '?autoplay=1&badge=0'
                        : a.id) + (a.s && 'custom' != a.type ? '&' + a.s : '')
                    ),
                    (c += '" frameborder="0" allowfullscreen></iframe></div>\n')
                  );
                }),
                d(function () {
                  d('.' + ib + ':not([data-auto="false"])').fotorama();
                });
            })(window, document, location, 'undefined' != typeof jQuery && jQuery);
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')));

        /***/
      },

    /***/ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js ***!
  \**********************************************************************/
      /*! exports provided: _, a, b, c, d, e, f, g, h, i */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '_', function () {
          return _typeof;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () {
          return _createClass;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'b', function () {
          return _classCallCheck;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'c', function () {
          return _objectWithoutProperties;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'd', function () {
          return _inherits;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'e', function () {
          return _possibleConstructorReturn;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'f', function () {
          return _getPrototypeOf;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'g', function () {
          return _get;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'h', function () {
          return _set;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'i', function () {
          return _slicedToArray;
        });
        function _typeof(obj) {
          '@babel/helpers - typeof';

          if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function (obj) {
              return typeof obj;
            };
          } else {
            _typeof = function (obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function');
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };

          return _setPrototypeOf(o, p);
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (typeof call === 'object' || typeof call === 'function')) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
        }

        function _get(target, property, receiver) {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);

              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.get) {
                return desc.get.call(receiver);
              }

              return desc.value;
            };
          }

          return _get(target, property, receiver || target);
        }

        function set(target, property, value, receiver) {
          if (typeof Reflect !== 'undefined' && Reflect.set) {
            set = Reflect.set;
          } else {
            set = function set(target, property, value, receiver) {
              var base = _superPropBase(target, property);

              var desc;

              if (base) {
                desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.set) {
                  desc.set.call(receiver, value);
                  return true;
                } else if (!desc.writable) {
                  return false;
                }
              }

              desc = Object.getOwnPropertyDescriptor(receiver, property);

              if (desc) {
                if (!desc.writable) {
                  return false;
                }

                desc.value = value;
                Object.defineProperty(receiver, property, desc);
              } else {
                _defineProperty(receiver, property, value);
              }

              return true;
            };
          }

          return set(target, property, value, receiver);
        }

        function _set(target, property, value, receiver, isStrict) {
          var s = set(target, property, value, receiver || target);

          if (!s && isStrict) {
            throw new Error('failed to set property');
          }

          return value;
        }

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function _iterableToArrayLimit(arr, i) {
          if (
            !(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')
          ) {
            return;
          }

          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        function _nonIterableRest() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }

        /***/
      },

    /***/ './node_modules/imask/esm/controls/html-contenteditable-mask-element.js':
      /*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./mask-element.js */ './node_modules/imask/esm/controls/mask-element.js'
        );
        /* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./html-mask-element.js */ './node_modules/imask/esm/controls/html-mask-element.js'
        );

        var HTMLContenteditableMaskElement =
          /*#__PURE__*/
          (function (_HTMLMaskElement) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              HTMLContenteditableMaskElement,
              _HTMLMaskElement
            );

            function HTMLContenteditableMaskElement() {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                HTMLContenteditableMaskElement
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  HTMLContenteditableMaskElement
                ).apply(this, arguments)
              );
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(
              HTMLContenteditableMaskElement,
              [
                {
                  key: '_unsafeSelect',

                  /**
      Sets HTMLElement selection
      @override
    */
                  value: function _unsafeSelect(start, end) {
                    if (!this.rootElement.createRange) return;
                    var range = this.rootElement.createRange();
                    range.setStart(this.input.firstChild || this.input, start);
                    range.setEnd(this.input.lastChild || this.input, end);
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();

                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                  }
                  /**
      HTMLElement value
      @override
    */
                },
                {
                  key: '_unsafeSelectionStart',

                  /**
      Returns HTMLElement selection start
      @override
    */
                  get: function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    return selection && selection.anchorOffset;
                  }
                  /**
      Returns HTMLElement selection end
      @override
    */
                },
                {
                  key: '_unsafeSelectionEnd',
                  get: function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    return selection && this._unsafeSelectionStart + String(selection).length;
                  }
                },
                {
                  key: 'value',
                  get: function get() {
                    // $FlowFixMe
                    return this.input.textContent;
                  },
                  set: function set(value) {
                    this.input.textContent = value;
                  }
                }
              ]
            );

            return HTMLContenteditableMaskElement;
          })(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_3__['default']);
        _core_holder_js__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

        /* harmony default export */ __webpack_exports__['default'] = HTMLContenteditableMaskElement;

        /***/
      },

    /***/ './node_modules/imask/esm/controls/html-mask-element.js':
      /*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./mask-element.js */ './node_modules/imask/esm/controls/mask-element.js'
        );

        /** Bridge between HTMLElement and {@link Masked} */

        var HTMLMaskElement =
          /*#__PURE__*/
          (function (_MaskElement) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              HTMLMaskElement,
              _MaskElement
            );

            /** Mapping between HTMLElement events and mask internal events */

            /** HTMLElement to use mask on */

            /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
            function HTMLMaskElement(input) {
              var _this;

              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                HTMLMaskElement
              );

              _this = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  HTMLMaskElement
                ).call(this)
              );
              _this.input = input;
              _this._handlers = {};
              return _this;
            }
            /** */
            // $FlowFixMe https://github.com/facebook/flow/issues/2839

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(HTMLMaskElement, [
              {
                key: '_unsafeSelect',

                /**
      Sets HTMLElement selection
      @override
    */
                value: function _unsafeSelect(start, end) {
                  this.input.setSelectionRange(start, end);
                }
                /**
      HTMLElement value
      @override
    */
              },
              {
                key: 'bindEvents',

                /**
      Binds HTMLElement events to mask internal events
      @override
    */
                value: function bindEvents(handlers) {
                  var _this2 = this;

                  Object.keys(handlers).forEach(function (event) {
                    return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
                  });
                }
                /**
      Unbinds HTMLElement events to mask internal events
      @override
    */
              },
              {
                key: 'unbindEvents',
                value: function unbindEvents() {
                  var _this3 = this;

                  Object.keys(this._handlers).forEach(function (event) {
                    return _this3._toggleEventHandler(event);
                  });
                }
                /** */
              },
              {
                key: '_toggleEventHandler',
                value: function _toggleEventHandler(event, handler) {
                  if (this._handlers[event]) {
                    this.input.removeEventListener(event, this._handlers[event]);
                    delete this._handlers[event];
                  }

                  if (handler) {
                    this.input.addEventListener(event, handler);
                    this._handlers[event] = handler;
                  }
                }
              },
              {
                key: 'rootElement',
                get: function get() {
                  return this.input.getRootNode ? this.input.getRootNode() : document;
                }
                /**
      Is element in focus
      @readonly
    */
              },
              {
                key: 'isActive',
                get: function get() {
                  //$FlowFixMe
                  return this.input === this.rootElement.activeElement;
                }
                /**
      Returns HTMLElement selection start
      @override
    */
              },
              {
                key: '_unsafeSelectionStart',
                get: function get() {
                  return this.input.selectionStart;
                }
                /**
      Returns HTMLElement selection end
      @override
    */
              },
              {
                key: '_unsafeSelectionEnd',
                get: function get() {
                  return this.input.selectionEnd;
                }
              },
              {
                key: 'value',
                get: function get() {
                  return this.input.value;
                },
                set: function set(value) {
                  this.input.value = value;
                }
              }
            ]);

            return HTMLMaskElement;
          })(_mask_element_js__WEBPACK_IMPORTED_MODULE_2__['default']);
        HTMLMaskElement.EVENTS_MAP = {
          selectionChange: 'keydown',
          input: 'input',
          drop: 'drop',
          click: 'click',
          focus: 'focus',
          commit: 'blur'
        };
        _core_holder_js__WEBPACK_IMPORTED_MODULE_1__['default'].HTMLMaskElement = HTMLMaskElement;

        /* harmony default export */ __webpack_exports__['default'] = HTMLMaskElement;

        /***/
      },

    /***/ './node_modules/imask/esm/controls/input.js':
      /*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/action-details.js */ './node_modules/imask/esm/core/action-details.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../masked/base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../masked/factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../masked/pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../masked/pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../masked/pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../masked/regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );
        /* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../masked/pattern.js */ './node_modules/imask/esm/masked/pattern.js'
        );
        /* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../masked/range.js */ './node_modules/imask/esm/masked/range.js'
        );
        /* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../masked/date.js */ './node_modules/imask/esm/masked/date.js'
        );
        /* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./mask-element.js */ './node_modules/imask/esm/controls/mask-element.js'
        );
        /* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./html-mask-element.js */ './node_modules/imask/esm/controls/html-mask-element.js'
        );
        /* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./html-contenteditable-mask-element.js */ './node_modules/imask/esm/controls/html-contenteditable-mask-element.js'
        );

        /** Listens to element events and controls changes between element and {@link Masked} */

        var InputMask =
          /*#__PURE__*/
          (function () {
            /**
    View element
    @readonly
  */

            /**
    Internal {@link Masked} model
    @readonly
  */

            /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
            function InputMask(el, opts) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                InputMask
              );

              this.el =
                el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_15__['default']
                  ? el
                  : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA'
                  ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__['default'](el)
                  : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__['default'](el);
              this.masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_7__['default'])(opts);
              this._listeners = {};
              this._value = '';
              this._unmaskedValue = '';
              this._saveSelection = this._saveSelection.bind(this);
              this._onInput = this._onInput.bind(this);
              this._onChange = this._onChange.bind(this);
              this._onDrop = this._onDrop.bind(this);
              this._onFocus = this._onFocus.bind(this);
              this._onClick = this._onClick.bind(this);
              this.alignCursor = this.alignCursor.bind(this);
              this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

              this._bindEvents(); // refresh

              this.updateValue();

              this._onChange();
            }
            /** Read or update mask */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(InputMask, [
              {
                key: 'maskEquals',
                value: function maskEquals(mask) {
                  return (
                    mask == null ||
                    mask === this.masked.mask ||
                    (mask === Date &&
                      this.masked instanceof _masked_date_js__WEBPACK_IMPORTED_MODULE_14__['default'])
                  );
                }
              },
              {
                key: '_bindEvents',

                /**
      Starts listening to element events
      @protected
    */
                value: function _bindEvents() {
                  this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                  });
                }
                /**
      Stops listening to element events
      @protected
     */
              },
              {
                key: '_unbindEvents',
                value: function _unbindEvents() {
                  if (this.el) this.el.unbindEvents();
                }
                /**
      Fires custom event
      @protected
     */
              },
              {
                key: '_fireEvent',
                value: function _fireEvent(ev) {
                  for (
                    var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                    _key < _len;
                    _key++
                  ) {
                    args[_key - 1] = arguments[_key];
                  }

                  var listeners = this._listeners[ev];
                  if (!listeners) return;
                  listeners.forEach(function (l) {
                    return l.apply(void 0, args);
                  });
                }
                /**
      Current selection start
      @readonly
    */
              },
              {
                key: '_saveSelection',

                /**
      Stores current selection
      @protected
    */
                value: function _saveSelection() /* ev */
                {
                  if (this.value !== this.el.value) {
                    console.warn(
                      'Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'
                    ); // eslint-disable-line no-console
                  }

                  this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                  };
                }
                /** Syncronizes model value from view */
              },
              {
                key: 'updateValue',
                value: function updateValue() {
                  this.masked.value = this.el.value;
                  this._value = this.masked.value;
                }
                /** Syncronizes view from model value, fires change events */
              },
              {
                key: 'updateControl',
                value: function updateControl() {
                  var newUnmaskedValue = this.masked.unmaskedValue;
                  var newValue = this.masked.value;
                  var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                  this._unmaskedValue = newUnmaskedValue;
                  this._value = newValue;
                  if (this.el.value !== newValue) this.el.value = newValue;
                  if (isChanged) this._fireChangeEvents();
                }
                /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */
              },
              {
                key: 'updateOptions',
                value: function updateOptions(opts) {
                  var mask = opts.mask,
                    restOpts = Object(
                      _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['c']
                    )(opts, ['mask']);

                  var updateMask = !this.maskEquals(mask);
                  var updateOpts = !Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['objectIncludes'])(
                    this.masked,
                    restOpts
                  );
                  if (updateMask) this.mask = mask;
                  if (updateOpts) this.masked.updateOptions(restOpts);
                  if (updateMask || updateOpts) this.updateControl();
                }
                /** Updates cursor */
              },
              {
                key: 'updateCursor',
                value: function updateCursor(cursorPos) {
                  if (cursorPos == null) return;
                  this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

                  this._delayUpdateCursor(cursorPos);
                }
                /**
      Delays cursor update to support mobile browsers
      @private
    */
              },
              {
                key: '_delayUpdateCursor',
                value: function _delayUpdateCursor(cursorPos) {
                  var _this = this;

                  this._abortUpdateCursor();

                  this._changingCursorPos = cursorPos;
                  this._cursorChanging = setTimeout(function () {
                    if (!_this.el) return; // if was destroyed

                    _this.cursorPos = _this._changingCursorPos;

                    _this._abortUpdateCursor();
                  }, 10);
                }
                /**
      Fires custom events
      @protected
    */
              },
              {
                key: '_fireChangeEvents',
                value: function _fireChangeEvents() {
                  this._fireEvent('accept', this._inputEvent);

                  if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
                }
                /**
      Aborts delayed cursor update
      @private
    */
              },
              {
                key: '_abortUpdateCursor',
                value: function _abortUpdateCursor() {
                  if (this._cursorChanging) {
                    clearTimeout(this._cursorChanging);
                    delete this._cursorChanging;
                  }
                }
                /** Aligns cursor to nearest available position */
              },
              {
                key: 'alignCursor',
                value: function alignCursor() {
                  this.cursorPos = this.masked.nearestInputPos(
                    this.cursorPos,
                    _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT
                  );
                }
                /** Aligns cursor only if selection is empty */
              },
              {
                key: 'alignCursorFriendly',
                value: function alignCursorFriendly() {
                  if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

                  this.alignCursor();
                }
                /** Adds listener on custom event */
              },
              {
                key: 'on',
                value: function on(ev, handler) {
                  if (!this._listeners[ev]) this._listeners[ev] = [];

                  this._listeners[ev].push(handler);

                  return this;
                }
                /** Removes custom event listener */
              },
              {
                key: 'off',
                value: function off(ev, handler) {
                  if (!this._listeners[ev]) return this;

                  if (!handler) {
                    delete this._listeners[ev];
                    return this;
                  }

                  var hIndex = this._listeners[ev].indexOf(handler);

                  if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                  return this;
                }
                /** Handles view input event */
              },
              {
                key: '_onInput',
                value: function _onInput(e) {
                  this._inputEvent = e;

                  this._abortUpdateCursor(); // fix strange IE behavior

                  if (!this._selection) return this.updateValue();
                  var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__['default']( // new state
                    this.el.value,
                    this.cursorPos, // old state
                    this.value,
                    this._selection
                  );
                  var oldRawValue = this.masked.rawInputValue;
                  var offset = this.masked.splice(
                    details.startChangePos,
                    details.removed.length,
                    details.inserted,
                    details.removeDirection
                  ).offset; // force align in remove direction only if no input chars were removed
                  // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

                  var removeDirection =
                    oldRawValue === this.masked.rawInputValue
                      ? details.removeDirection
                      : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE;
                  var cursorPos = this.masked.nearestInputPos(
                    details.startChangePos + offset,
                    removeDirection
                  );
                  this.updateControl();
                  this.updateCursor(cursorPos);
                  delete this._inputEvent;
                }
                /** Handles view change event and commits model value */
              },
              {
                key: '_onChange',
                value: function _onChange() {
                  if (this.value !== this.el.value) {
                    this.updateValue();
                  }

                  this.masked.doCommit();
                  this.updateControl();

                  this._saveSelection();
                }
                /** Handles view drop event, prevents by default */
              },
              {
                key: '_onDrop',
                value: function _onDrop(ev) {
                  ev.preventDefault();
                  ev.stopPropagation();
                }
                /** Restore last selection on focus */
              },
              {
                key: '_onFocus',
                value: function _onFocus(ev) {
                  this.alignCursorFriendly();
                }
                /** Restore last selection on focus */
              },
              {
                key: '_onClick',
                value: function _onClick(ev) {
                  this.alignCursorFriendly();
                }
                /** Unbind view events and removes element reference */
              },
              {
                key: 'destroy',
                value: function destroy() {
                  this._unbindEvents(); // $FlowFixMe why not do so?

                  this._listeners.length = 0; // $FlowFixMe

                  delete this.el;
                }
              },
              {
                key: 'mask',
                get: function get() {
                  return this.masked.mask;
                },
                set: function set(mask) {
                  if (this.maskEquals(mask)) return;

                  if (
                    !(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_5__['default'].Masked) &&
                    this.masked.constructor ===
                      Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_7__['maskedClass'])(mask)
                  ) {
                    this.masked.updateOptions({
                      mask: mask
                    });
                    return;
                  }

                  var masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_7__['default'])({
                    mask: mask
                  });
                  masked.unmaskedValue = this.masked.unmaskedValue;
                  this.masked = masked;
                }
                /** Raw value */
              },
              {
                key: 'value',
                get: function get() {
                  return this._value;
                },
                set: function set(str) {
                  this.masked.value = str;
                  this.updateControl();
                  this.alignCursor();
                }
                /** Unmasked value */
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this._unmaskedValue;
                },
                set: function set(str) {
                  this.masked.unmaskedValue = str;
                  this.updateControl();
                  this.alignCursor();
                }
                /** Typed unmasked value */
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.masked.typedValue;
                },
                set: function set(val) {
                  this.masked.typedValue = val;
                  this.updateControl();
                  this.alignCursor();
                }
              },
              {
                key: 'selectionStart',
                get: function get() {
                  return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
                }
                /** Current cursor position */
              },
              {
                key: 'cursorPos',
                get: function get() {
                  return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
                },
                set: function set(pos) {
                  if (!this.el || !this.el.isActive) return;
                  this.el.select(pos, pos);

                  this._saveSelection();
                }
              }
            ]);

            return InputMask;
          })();
        _core_holder_js__WEBPACK_IMPORTED_MODULE_5__['default'].InputMask = InputMask;

        /* harmony default export */ __webpack_exports__['default'] = InputMask;

        /***/
      },

    /***/ './node_modules/imask/esm/controls/mask-element.js':
      /*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );

        /**
  Generic element API to use with mask
  @interface
*/
        var MaskElement =
          /*#__PURE__*/
          (function () {
            function MaskElement() {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskElement
              );
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskElement, [
              {
                key: 'select',

                /** Safely sets element selection */
                value: function select(start, end) {
                  if (
                    start == null ||
                    end == null ||
                    (start === this.selectionStart && end === this.selectionEnd)
                  )
                    return;

                  try {
                    this._unsafeSelect(start, end);
                  } catch (e) {}
                }
                /** Should be overriden in subclasses */
              },
              {
                key: '_unsafeSelect',
                value: function _unsafeSelect(start, end) {}
                /** Should be overriden in subclasses */
              },
              {
                key: 'bindEvents',

                /** Should be overriden in subclasses */
                value: function bindEvents(handlers) {}
                /** Should be overriden in subclasses */
              },
              {
                key: 'unbindEvents',
                value: function unbindEvents() {}
              },
              {
                key: 'selectionStart',

                /** */

                /** */

                /** */

                /** Safely returns selection start */
                get: function get() {
                  var start;

                  try {
                    start = this._unsafeSelectionStart;
                  } catch (e) {}

                  return start != null ? start : this.value.length;
                }
                /** Safely returns selection end */
              },
              {
                key: 'selectionEnd',
                get: function get() {
                  var end;

                  try {
                    end = this._unsafeSelectionEnd;
                  } catch (e) {}

                  return end != null ? end : this.value.length;
                }
              },
              {
                key: 'isActive',
                get: function get() {
                  return false;
                }
              }
            ]);

            return MaskElement;
          })();
        _core_holder_js__WEBPACK_IMPORTED_MODULE_1__['default'].MaskElement = MaskElement;

        /* harmony default export */ __webpack_exports__['default'] = MaskElement;

        /***/
      },

    /***/ './node_modules/imask/esm/core/action-details.js':
      /*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./utils.js */ './node_modules/imask/esm/core/utils.js'
        );

        /** Provides details of changing input */

        var ActionDetails =
          /*#__PURE__*/
          (function () {
            /** Current input value */

            /** Current cursor position */

            /** Old input value */

            /** Old selection */
            function ActionDetails(value, cursorPos, oldValue, oldSelection) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                ActionDetails
              );

              this.value = value;
              this.cursorPos = cursorPos;
              this.oldValue = oldValue;
              this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

              while (
                this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)
              ) {
                --this.oldSelection.start;
              }
            }
            /**
    Start changing position
    @readonly
  */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(ActionDetails, [
              {
                key: 'startChangePos',
                get: function get() {
                  return Math.min(this.cursorPos, this.oldSelection.start);
                }
                /**
      Inserted symbols count
      @readonly
    */
              },
              {
                key: 'insertedCount',
                get: function get() {
                  return this.cursorPos - this.startChangePos;
                }
                /**
      Inserted symbols
      @readonly
    */
              },
              {
                key: 'inserted',
                get: function get() {
                  return this.value.substr(this.startChangePos, this.insertedCount);
                }
                /**
      Removed symbols count
      @readonly
    */
              },
              {
                key: 'removedCount',
                get: function get() {
                  // Math.max for opposite operation
                  return Math.max(
                    this.oldSelection.end - this.startChangePos || // for Delete
                      this.oldValue.length - this.value.length,
                    0
                  );
                }
                /**
      Removed symbols
      @readonly
    */
              },
              {
                key: 'removed',
                get: function get() {
                  return this.oldValue.substr(this.startChangePos, this.removedCount);
                }
                /**
      Unchanged head symbols
      @readonly
    */
              },
              {
                key: 'head',
                get: function get() {
                  return this.value.substring(0, this.startChangePos);
                }
                /**
      Unchanged tail symbols
      @readonly
    */
              },
              {
                key: 'tail',
                get: function get() {
                  return this.value.substring(this.startChangePos + this.insertedCount);
                }
                /**
      Remove direction
      @readonly
    */
              },
              {
                key: 'removeDirection',
                get: function get() {
                  if (!this.removedCount || this.insertedCount)
                    return _utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE; // align right if delete at right or if range removed (event with backspace)

                  return this.oldSelection.end === this.cursorPos ||
                    this.oldSelection.start === this.cursorPos
                    ? _utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].RIGHT
                    : _utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT;
                }
              }
            ]);

            return ActionDetails;
          })();

        /* harmony default export */ __webpack_exports__['default'] = ActionDetails;

        /***/
      },

    /***/ './node_modules/imask/esm/core/change-details.js':
      /*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );

        /**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
        var ChangeDetails =
          /*#__PURE__*/
          (function () {
            /** Inserted symbols */

            /** Can skip chars */

            /** Additional offset if any changes occurred before tail */

            /** Raw inserted is used by dynamic mask */
            function ChangeDetails(details) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                ChangeDetails
              );

              Object.assign(
                this,
                {
                  inserted: '',
                  rawInserted: '',
                  skip: false,
                  tailShift: 0
                },
                details
              );
            }
            /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(ChangeDetails, [
              {
                key: 'aggregate',
                value: function aggregate(details) {
                  this.rawInserted += details.rawInserted;
                  this.skip = this.skip || details.skip;
                  this.inserted += details.inserted;
                  this.tailShift += details.tailShift;
                  return this;
                }
                /** Total offset considering all changes */
              },
              {
                key: 'offset',
                get: function get() {
                  return this.tailShift + this.inserted.length;
                }
              }
            ]);

            return ChangeDetails;
          })();

        /* harmony default export */ __webpack_exports__['default'] = ChangeDetails;

        /***/
      },

    /***/ './node_modules/imask/esm/core/continuous-tail-details.js':
      /*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );

        /** Provides details of continuous extracted tail */
        var ContinuousTailDetails =
          /*#__PURE__*/
          (function () {
            /** Tail value as string */

            /** Tail start position */

            /** Start position */
            function ContinuousTailDetails() {
              var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var stop = arguments.length > 2 ? arguments[2] : undefined;

              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                ContinuousTailDetails
              );

              this.value = value;
              this.from = from;
              this.stop = stop;
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(
              ContinuousTailDetails,
              [
                {
                  key: 'toString',
                  value: function toString() {
                    return this.value;
                  }
                },
                {
                  key: 'extend',
                  value: function extend(tail) {
                    this.value += String(tail);
                  }
                },
                {
                  key: 'appendTo',
                  value: function appendTo(masked) {
                    return masked
                      .append(this.toString(), {
                        tail: true
                      })
                      .aggregate(masked._appendPlaceholder());
                  }
                },
                {
                  key: 'shiftBefore',
                  value: function shiftBefore(pos) {
                    if (this.from >= pos || !this.value.length) return '';
                    var shiftChar = this.value[0];
                    this.value = this.value.slice(1);
                    return shiftChar;
                  }
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      value: this.value,
                      from: this.from,
                      stop: this.stop
                    };
                  },
                  set: function set(state) {
                    Object.assign(this, state);
                  }
                }
              ]
            );

            return ContinuousTailDetails;
          })();

        /* harmony default export */ __webpack_exports__['default'] = ContinuousTailDetails;

        /***/
      },

    /***/ './node_modules/imask/esm/core/holder.js':
      /*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /**
         * Applies mask on element.
         * @constructor
         * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
         * @param {Object} opts - Custom mask options
         * @return {InputMask}
         */
        function IMask(el) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          // currently available only for input-like elements
          return new IMask.InputMask(el, opts);
        }

        /* harmony default export */ __webpack_exports__['default'] = IMask;

        /***/
      },

    /***/ './node_modules/imask/esm/core/utils.js':
      /*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
      /*! exports provided: DIRECTION, escapeRegExp, forceDirection, indexInDirection, isString, objectIncludes, posInDirection */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DIRECTION', function () {
          return DIRECTION;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'escapeRegExp',
          function () {
            return escapeRegExp;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'forceDirection',
          function () {
            return forceDirection;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'indexInDirection',
          function () {
            return indexInDirection;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isString', function () {
          return isString;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'objectIncludes',
          function () {
            return objectIncludes;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'posInDirection',
          function () {
            return posInDirection;
          }
        );
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );

        /** Checks if value is string */
        function isString(str) {
          return typeof str === 'string' || str instanceof String;
        }
        /**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

        var DIRECTION = {
          NONE: 'NONE',
          LEFT: 'LEFT',
          FORCE_LEFT: 'FORCE_LEFT',
          RIGHT: 'RIGHT',
          FORCE_RIGHT: 'FORCE_RIGHT'
        };
        /**
  Direction
  @enum {string}
*/

        /** Returns next char index in direction */
        function indexInDirection(pos, direction) {
          if (direction === DIRECTION.LEFT) --pos;
          return pos;
        }
        /** Returns next char position in direction */

        function posInDirection(pos, direction) {
          switch (direction) {
            case DIRECTION.LEFT:
            case DIRECTION.FORCE_LEFT:
              return --pos;

            case DIRECTION.RIGHT:
            case DIRECTION.FORCE_RIGHT:
              return ++pos;

            default:
              return pos;
          }
        }
        /** */

        function forceDirection(direction) {
          switch (direction) {
            case DIRECTION.LEFT:
              return DIRECTION.FORCE_LEFT;

            case DIRECTION.RIGHT:
              return DIRECTION.FORCE_RIGHT;

            default:
              return direction;
          }
        }
        /** Escapes regular expression control chars */

        function escapeRegExp(str) {
          return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
        } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

        function objectIncludes(b, a) {
          if (a === b) return true;
          var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i;

          if (arrA && arrB) {
            if (a.length != b.length) return false;

            for (i = 0; i < a.length; i++) {
              if (!objectIncludes(a[i], b[i])) return false;
            }

            return true;
          }

          if (arrA != arrB) return false;

          if (
            a &&
            b &&
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['_'])(a) === 'object' &&
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['_'])(b) === 'object'
          ) {
            var dateA = a instanceof Date,
              dateB = b instanceof Date;
            if (dateA && dateB) return a.getTime() == b.getTime();
            if (dateA != dateB) return false;
            var regexpA = a instanceof RegExp,
              regexpB = b instanceof RegExp;
            if (regexpA && regexpB) return a.toString() == b.toString();
            if (regexpA != regexpB) return false;
            var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

            for (i = 0; i < keys.length; i++) {
              if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            }

            for (i = 0; i < keys.length; i++) {
              if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
            }

            return true;
          } else if (a && b && typeof a === 'function' && typeof b === 'function') {
            return a.toString() === b.toString();
          }

          return false;
        }
        /** Selection range */

        /***/
      },

    /***/ './node_modules/imask/esm/imask.js':
      /*!*****************************************!*\
  !*** ./node_modules/imask/esm/imask.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core/action-details.js */ './node_modules/imask/esm/core/action-details.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./masked/base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./masked/factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./masked/pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./masked/pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./masked/pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./masked/regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );
        /* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./masked/pattern.js */ './node_modules/imask/esm/masked/pattern.js'
        );
        /* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./masked/range.js */ './node_modules/imask/esm/masked/range.js'
        );
        /* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./masked/date.js */ './node_modules/imask/esm/masked/date.js'
        );
        /* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./controls/mask-element.js */ './node_modules/imask/esm/controls/mask-element.js'
        );
        /* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./controls/html-mask-element.js */ './node_modules/imask/esm/controls/html-mask-element.js'
        );
        /* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./controls/html-contenteditable-mask-element.js */ './node_modules/imask/esm/controls/html-contenteditable-mask-element.js'
        );
        /* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./controls/input.js */ './node_modules/imask/esm/controls/input.js'
        );

        /* harmony default export */ __webpack_exports__['default'] =
          _core_holder_js__WEBPACK_IMPORTED_MODULE_5__['default'];

        /***/
      },

    /***/ './node_modules/imask/esm/index.js':
      /*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
      /*! exports provided: Masked, createMask, MaskedRegExp, MaskedPattern, MaskedRange, MaskedDate, MaskElement, HTMLMaskElement, HTMLContenteditableMaskElement, InputMask, MaskedEnum, MaskedNumber, MaskedFunction, MaskedDynamic, PIPE_TYPE, createPipe, pipe, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core/action-details.js */ './node_modules/imask/esm/core/action-details.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./masked/base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'Masked', function () {
          return _masked_base_js__WEBPACK_IMPORTED_MODULE_6__['default'];
        });

        /* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./masked/factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'createMask', function () {
          return _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__['default'];
        });

        /* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./masked/pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./masked/pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./masked/pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./masked/regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MaskedRegExp', function () {
          return _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__['default'];
        });

        /* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./masked/pattern.js */ './node_modules/imask/esm/masked/pattern.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MaskedPattern',
          function () {
            return _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__['default'];
          }
        );

        /* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./masked/range.js */ './node_modules/imask/esm/masked/range.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MaskedRange', function () {
          return _masked_range_js__WEBPACK_IMPORTED_MODULE_13__['default'];
        });

        /* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./masked/date.js */ './node_modules/imask/esm/masked/date.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MaskedDate', function () {
          return _masked_date_js__WEBPACK_IMPORTED_MODULE_14__['default'];
        });

        /* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./controls/mask-element.js */ './node_modules/imask/esm/controls/mask-element.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MaskElement', function () {
          return _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_15__['default'];
        });

        /* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./controls/html-mask-element.js */ './node_modules/imask/esm/controls/html-mask-element.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'HTMLMaskElement',
          function () {
            return _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__['default'];
          }
        );

        /* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./controls/html-contenteditable-mask-element.js */ './node_modules/imask/esm/controls/html-contenteditable-mask-element.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'HTMLContenteditableMaskElement',
          function () {
            return _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__['default'];
          }
        );

        /* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./controls/input.js */ './node_modules/imask/esm/controls/input.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'InputMask', function () {
          return _controls_input_js__WEBPACK_IMPORTED_MODULE_18__['default'];
        });

        /* harmony import */ var _imask_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./imask.js */ './node_modules/imask/esm/imask.js'
        );
        /* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./masked/enum.js */ './node_modules/imask/esm/masked/enum.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MaskedEnum', function () {
          return _masked_enum_js__WEBPACK_IMPORTED_MODULE_20__['default'];
        });

        /* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./masked/number.js */ './node_modules/imask/esm/masked/number.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MaskedNumber', function () {
          return _masked_number_js__WEBPACK_IMPORTED_MODULE_21__['default'];
        });

        /* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./masked/function.js */ './node_modules/imask/esm/masked/function.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MaskedFunction',
          function () {
            return _masked_function_js__WEBPACK_IMPORTED_MODULE_22__['default'];
          }
        );

        /* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./masked/dynamic.js */ './node_modules/imask/esm/masked/dynamic.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MaskedDynamic',
          function () {
            return _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_23__['default'];
          }
        );

        /* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./masked/pipe.js */ './node_modules/imask/esm/masked/pipe.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'PIPE_TYPE', function () {
          return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__['PIPE_TYPE'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'createPipe', function () {
          return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__['createPipe'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'pipe', function () {
          return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__['pipe'];
        });

        try {
          globalThis.IMask = _imask_js__WEBPACK_IMPORTED_MODULE_19__['default'];
        } catch (e) {}

        /* harmony default export */ __webpack_exports__['default'] =
          _imask_js__WEBPACK_IMPORTED_MODULE_19__['default'];

        /***/
      },

    /***/ './node_modules/imask/esm/masked/base.js':
      /*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );

        /** Supported mask type */

        /** Provides common masking stuff */
        var Masked =
          /*#__PURE__*/
          (function () {
            // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

            /** @type {Mask} */

            /** */
            // $FlowFixMe no ideas

            /** Transforms value before mask processing */

            /** Validates if value is acceptable */

            /** Does additional processing in the end of editing */

            /** Format typed value to string */

            /** Parse strgin to get typed value */

            /** Enable characters overwriting */

            /** */
            function Masked(opts) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(this, Masked);

              this._value = '';

              this._update(Object.assign({}, Masked.DEFAULTS, {}, opts));

              this.isInitialized = true;
            }
            /** Sets and applies new options */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(Masked, [
              {
                key: 'updateOptions',
                value: function updateOptions(opts) {
                  if (!Object.keys(opts).length) return;
                  this.withValueRefresh(this._update.bind(this, opts));
                }
                /**
      Sets new options
      @protected
    */
              },
              {
                key: '_update',
                value: function _update(opts) {
                  Object.assign(this, opts);
                }
                /** Mask state */
              },
              {
                key: 'reset',

                /** Resets value */
                value: function reset() {
                  this._value = '';
                }
                /** */
              },
              {
                key: 'resolve',

                /** Resolve new value */
                value: function resolve(value) {
                  this.reset();
                  this.append(
                    value,
                    {
                      input: true
                    },
                    ''
                  );
                  this.doCommit();
                  return this.value;
                }
                /** */
              },
              {
                key: 'nearestInputPos',

                /** Finds nearest input position in direction */
                value: function nearestInputPos(cursorPos, direction) {
                  return cursorPos;
                }
                /** Extracts value in range considering flags */
              },
              {
                key: 'extractInput',
                value: function extractInput() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  return this.value.slice(fromPos, toPos);
                }
                /** Extracts tail in range */
              },
              {
                key: 'extractTail',
                value: function extractTail() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default'](
                    this.extractInput(fromPos, toPos),
                    fromPos
                  );
                }
                /** Appends tail */
                // $FlowFixMe no ideas
              },
              {
                key: 'appendTail',
                value: function appendTail(tail) {
                  if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['isString'])(tail))
                    tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default'](
                      String(tail)
                    );
                  return tail.appendTo(this);
                }
                /** Appends char */
              },
              {
                key: '_appendCharRaw',
                value: function _appendCharRaw(ch) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  ch = this.doPrepare(ch, flags);
                  if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  this._value += ch;
                  return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']({
                    inserted: ch,
                    rawInserted: ch
                  });
                }
                /** Appends char */
              },
              {
                key: '_appendChar',
                value: function _appendChar(ch) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  var checkTail = arguments.length > 2 ? arguments[2] : undefined;
                  var consistentState = this.state;

                  var details = this._appendCharRaw(ch, flags);

                  if (details.inserted) {
                    var consistentTail;
                    var appended = this.doValidate(flags) !== false;

                    if (appended && checkTail != null) {
                      // validation ok, check tail
                      var beforeTailState = this.state;

                      if (this.overwrite) {
                        consistentTail = checkTail.state;
                        checkTail.shiftBefore(this.value.length);
                      }

                      var tailDetails = this.appendTail(checkTail);
                      appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

                      if (appended && tailDetails.inserted) this.state = beforeTailState;
                    } // revert all if something went wrong

                    if (!appended) {
                      details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                      this.state = consistentState;
                      if (checkTail && consistentTail) checkTail.state = consistentTail;
                    }
                  }

                  return details;
                }
                /** Appends optional placeholder at end */
              },
              {
                key: '_appendPlaceholder',
                value: function _appendPlaceholder() {
                  return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                }
                /** Appends symbols considering flags */
                // $FlowFixMe no ideas
              },
              {
                key: 'append',
                value: function append(str, flags, tail) {
                  if (!Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['isString'])(str))
                    throw new Error('value should be string');
                  var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  var checkTail = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['isString'])(tail)
                    ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default'](
                        String(tail)
                      )
                    : tail;
                  if (flags.tail) flags._beforeTailState = this.state;

                  for (var ci = 0; ci < str.length; ++ci) {
                    details.aggregate(this._appendChar(str[ci], flags, checkTail));
                  } // append tail but aggregate only tailShift

                  if (checkTail != null) {
                    details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
                    // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
                    // this._resetBeforeTailState();
                  }

                  return details;
                }
                /** */
              },
              {
                key: 'remove',
                value: function remove() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                  return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                }
                /** Calls function and reapplies current value */
              },
              {
                key: 'withValueRefresh',
                value: function withValueRefresh(fn) {
                  if (this._refreshing || !this.isInitialized) return fn();
                  this._refreshing = true;
                  var rawInput = this.rawInputValue;
                  var value = this.value;
                  var ret = fn();
                  this.rawInputValue = rawInput; // append lost trailing chars at end

                  if (this.value !== value && value.indexOf(this.value) === 0) {
                    this.append(value.slice(this.value.length), {}, '');
                  }

                  delete this._refreshing;
                  return ret;
                }
                /** */
              },
              {
                key: 'runIsolated',
                value: function runIsolated(fn) {
                  if (this._isolated || !this.isInitialized) return fn(this);
                  this._isolated = true;
                  var state = this.state;
                  var ret = fn(this);
                  this.state = state;
                  delete this._isolated;
                  return ret;
                }
                /**
      Prepares string before mask processing
      @protected
    */
              },
              {
                key: 'doPrepare',
                value: function doPrepare(str) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  return this.prepare ? this.prepare(str, this, flags) : str;
                }
                /**
      Validates if value is acceptable
      @protected
    */
              },
              {
                key: 'doValidate',
                value: function doValidate(flags) {
                  return (
                    (!this.validate || this.validate(this.value, this, flags)) &&
                    (!this.parent || this.parent.doValidate(flags))
                  );
                }
                /**
      Does additional processing in the end of editing
      @protected
    */
              },
              {
                key: 'doCommit',
                value: function doCommit() {
                  if (this.commit) this.commit(this.value, this);
                }
                /** */
              },
              {
                key: 'doFormat',
                value: function doFormat(value) {
                  return this.format ? this.format(value, this) : value;
                }
                /** */
              },
              {
                key: 'doParse',
                value: function doParse(str) {
                  return this.parse ? this.parse(str, this) : str;
                }
                /** */
              },
              {
                key: 'splice',
                value: function splice(start, deleteCount, inserted, removeDirection) {
                  var tailPos = start + deleteCount;
                  var tail = this.extractTail(tailPos);
                  var startChangePos = this.nearestInputPos(start, removeDirection);
                  var changeDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']({
                    tailShift: startChangePos - start // adjust tailShift if start was aligned
                  })
                    .aggregate(this.remove(startChangePos))
                    .aggregate(
                      this.append(
                        inserted,
                        {
                          input: true
                        },
                        tail
                      )
                    );
                  return changeDetails;
                }
              },
              {
                key: 'state',
                get: function get() {
                  return {
                    _value: this.value
                  };
                },
                set: function set(state) {
                  this._value = state._value;
                }
              },
              {
                key: 'value',
                get: function get() {
                  return this._value;
                },
                set: function set(value) {
                  this.resolve(value);
                }
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this.value;
                },
                set: function set(value) {
                  this.reset();
                  this.append(value, {}, '');
                  this.doCommit();
                }
                /** */
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.doParse(this.value);
                },
                set: function set(value) {
                  this.value = this.doFormat(value);
                }
                /** Value that includes raw user input */
              },
              {
                key: 'rawInputValue',
                get: function get() {
                  return this.extractInput(0, this.value.length, {
                    raw: true
                  });
                },
                set: function set(value) {
                  this.reset();
                  this.append(
                    value,
                    {
                      raw: true
                    },
                    ''
                  );
                  this.doCommit();
                }
                /** */
              },
              {
                key: 'isComplete',
                get: function get() {
                  return true;
                }
              }
            ]);

            return Masked;
          })();
        Masked.DEFAULTS = {
          format: function format(v) {
            return v;
          },
          parse: function parse(v) {
            return v;
          }
        };
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].Masked = Masked;

        /* harmony default export */ __webpack_exports__['default'] = Masked;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/date.js':
      /*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );
        /* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./pattern.js */ './node_modules/imask/esm/masked/pattern.js'
        );
        /* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./range.js */ './node_modules/imask/esm/masked/range.js'
        );

        /** Date mask */

        var MaskedDate =
          /*#__PURE__*/
          (function (_MaskedPattern) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedDate,
              _MaskedPattern
            );

            /** Pattern mask for date according to {@link MaskedDate#format} */

            /** Start date */

            /** End date */

            /** */

            /**
    @param {Object} opts
  */
            function MaskedDate(opts) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedDate
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedDate
                ).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts))
              );
            }
            /**
    @override
  */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedDate, [
              {
                key: '_update',
                value: function _update(opts) {
                  if (opts.mask === Date) delete opts.mask;
                  if (opts.pattern) opts.mask = opts.pattern;
                  var blocks = opts.blocks;
                  opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

                  if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                  if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

                  if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                    opts.blocks.m.from = opts.min.getMonth() + 1;
                    opts.blocks.m.to = opts.max.getMonth() + 1;

                    if (opts.blocks.m.from === opts.blocks.m.to) {
                      opts.blocks.d.from = opts.min.getDate();
                      opts.blocks.d.to = opts.max.getDate();
                    }
                  }

                  Object.assign(opts.blocks, blocks); // add autofix

                  Object.keys(opts.blocks).forEach(function (bk) {
                    var b = opts.blocks[bk];
                    if (!('autofix' in b)) b.autofix = opts.autofix;
                  });

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDate.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);
                }
                /**
      @override
    */
              },
              {
                key: 'doValidate',
                value: function doValidate() {
                  var _get2;

                  var date = this.date;

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return (
                    (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedDate.prototype
                      ),
                      'doValidate',
                      this
                    )).call.apply(_get2, [this].concat(args)) &&
                    (!this.isComplete ||
                      (this.isDateExist(this.value) &&
                        date != null &&
                        (this.min == null || this.min <= date) &&
                        (this.max == null || date <= this.max)))
                  );
                }
                /** Checks if date is exists */
              },
              {
                key: 'isDateExist',
                value: function isDateExist(str) {
                  return this.format(this.parse(str, this), this).indexOf(str) >= 0;
                }
                /** Parsed Date */
              },
              {
                key: 'date',
                get: function get() {
                  return this.typedValue;
                },
                set: function set(date) {
                  this.typedValue = date;
                }
                /**
      @override
    */
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.isComplete
                    ? Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                        Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                          MaskedDate.prototype
                        ),
                        'typedValue',
                        this
                      )
                    : null;
                },
                set: function set(value) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDate.prototype
                    ),
                    'typedValue',
                    value,
                    this,
                    true
                  );
                }
              }
            ]);

            return MaskedDate;
          })(_pattern_js__WEBPACK_IMPORTED_MODULE_11__['default']);
        MaskedDate.DEFAULTS = {
          pattern: 'd{.}`m{.}`Y',
          format: function format(date) {
            var day = String(date.getDate()).padStart(2, '0');
            var month = String(date.getMonth() + 1).padStart(2, '0');
            var year = date.getFullYear();
            return [day, month, year].join('.');
          },
          parse: function parse(str) {
            var _str$split = str.split('.'),
              _str$split2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['i'])(
                _str$split,
                3
              ),
              day = _str$split2[0],
              month = _str$split2[1],
              year = _str$split2[2];

            return new Date(year, month - 1, day);
          }
        };

        MaskedDate.GET_DEFAULT_BLOCKS = function () {
          return {
            d: {
              mask: _range_js__WEBPACK_IMPORTED_MODULE_12__['default'],
              from: 1,
              to: 31,
              maxLength: 2
            },
            m: {
              mask: _range_js__WEBPACK_IMPORTED_MODULE_12__['default'],
              from: 1,
              to: 12,
              maxLength: 2
            },
            Y: {
              mask: _range_js__WEBPACK_IMPORTED_MODULE_12__['default'],
              from: 1900,
              to: 9999
            }
          };
        };

        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedDate = MaskedDate;

        /* harmony default export */ __webpack_exports__['default'] = MaskedDate;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/dynamic.js':
      /*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./factory.js */ './node_modules/imask/esm/masked/factory.js'
        );

        /** Dynamic mask for choosing apropriate mask in run-time */
        var MaskedDynamic =
          /*#__PURE__*/
          (function (_Masked) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedDynamic,
              _Masked
            );

            /** Currently chosen mask */

            /** Compliled {@link Masked} options */

            /** Chooses {@link Masked} depending on input value */

            /**
    @param {Object} opts
  */
            function MaskedDynamic(opts) {
              var _this;

              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedDynamic
              );

              _this = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedDynamic
                ).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts))
              );
              _this.currentMask = null;
              return _this;
            }
            /**
    @override
  */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedDynamic, [
              {
                key: '_update',
                value: function _update(opts) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDynamic.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);

                  if ('mask' in opts) {
                    // mask could be totally dynamic with only `dispatch` option
                    this.compiledMasks = Array.isArray(opts.mask)
                      ? opts.mask.map(function (m) {
                          return Object(_factory_js__WEBPACK_IMPORTED_MODULE_6__['default'])(m);
                        })
                      : [];
                  }
                }
                /**
      @override
    */
              },
              {
                key: '_appendCharRaw',
                value: function _appendCharRaw() {
                  var details = this._applyDispatch.apply(this, arguments);

                  if (this.currentMask) {
                    var _this$currentMask;

                    details.aggregate(
                      (_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments)
                    );
                  }

                  return details;
                }
              },
              {
                key: '_applyDispatch',
                value: function _applyDispatch() {
                  var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  var prevValueBeforeTail =
                    flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
                  var inputValue = this.rawInputValue;
                  var insertValue =
                    flags.tail && flags._beforeTailState != null // $FlowFixMe - tired to fight with type system
                      ? flags._beforeTailState._rawInputValue
                      : inputValue;
                  var tailValue = inputValue.slice(insertValue.length);
                  var prevMask = this.currentMask;
                  var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

                  this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

                  if (this.currentMask) {
                    if (this.currentMask !== prevMask) {
                      // if mask changed reapply input
                      this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

                      var d = this.currentMask.append(insertValue, {
                        raw: true
                      });
                      details.tailShift = d.inserted.length - prevValueBeforeTail.length;

                      if (tailValue) {
                        // $FlowFixMe - it's ok, we don't change current mask above
                        details.tailShift += this.currentMask.append(tailValue, {
                          raw: true,
                          tail: true
                        }).tailShift;
                      }
                    } else {
                      // Dispatch can do something bad with state, so
                      // restore prev mask state
                      this.currentMask.state = prevMaskState;
                    }
                  }

                  return details;
                }
              },
              {
                key: '_appendPlaceholder',
                value: function _appendPlaceholder() {
                  var details = this._applyDispatch.apply(this, arguments);

                  if (this.currentMask) {
                    details.aggregate(this.currentMask._appendPlaceholder());
                  }

                  return details;
                }
                /**
      @override
    */
              },
              {
                key: 'doDispatch',
                value: function doDispatch(appended) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  return this.dispatch(appended, this, flags);
                }
                /**
      @override
    */
              },
              {
                key: 'doValidate',
                value: function doValidate() {
                  var _get2, _this$currentMask2;

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return (
                    (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedDynamic.prototype
                      ),
                      'doValidate',
                      this
                    )).call.apply(_get2, [this].concat(args)) &&
                    (!this.currentMask ||
                      (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args))
                  );
                }
                /**
      @override
    */
              },
              {
                key: 'reset',
                value: function reset() {
                  if (this.currentMask) this.currentMask.reset();
                  this.compiledMasks.forEach(function (m) {
                    return m.reset();
                  });
                }
                /**
      @override
    */
              },
              {
                key: 'remove',

                /**
      @override
    */
                value: function remove() {
                  var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();

                  if (this.currentMask) {
                    var _this$currentMask3;

                    details
                      .aggregate(
                        (_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)
                      ) // update with dispatch
                      .aggregate(this._applyDispatch());
                  }

                  return details;
                }
                /**
      @override
    */
              },
              {
                key: 'extractInput',

                /**
      @override
    */
                value: function extractInput() {
                  var _this$currentMask4;

                  return this.currentMask
                    ? (_this$currentMask4 = this.currentMask).extractInput.apply(
                        _this$currentMask4,
                        arguments
                      )
                    : '';
                }
                /**
      @override
    */
              },
              {
                key: 'extractTail',
                value: function extractTail() {
                  var _this$currentMask5, _get3;

                  for (
                    var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
                    _key2 < _len2;
                    _key2++
                  ) {
                    args[_key2] = arguments[_key2];
                  }

                  return this.currentMask
                    ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args)
                    : (_get3 = Object(
                        _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g']
                      )(
                        Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                          MaskedDynamic.prototype
                        ),
                        'extractTail',
                        this
                      )).call.apply(_get3, [this].concat(args));
                }
                /**
      @override
    */
              },
              {
                key: 'doCommit',
                value: function doCommit() {
                  if (this.currentMask) this.currentMask.doCommit();

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDynamic.prototype
                    ),
                    'doCommit',
                    this
                  ).call(this);
                }
                /**
      @override
    */
              },
              {
                key: 'nearestInputPos',
                value: function nearestInputPos() {
                  var _this$currentMask6, _get4;

                  for (
                    var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
                    _key3 < _len3;
                    _key3++
                  ) {
                    args[_key3] = arguments[_key3];
                  }

                  return this.currentMask
                    ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args)
                    : (_get4 = Object(
                        _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g']
                      )(
                        Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                          MaskedDynamic.prototype
                        ),
                        'nearestInputPos',
                        this
                      )).call.apply(_get4, [this].concat(args));
                }
              },
              {
                key: 'value',
                get: function get() {
                  return this.currentMask ? this.currentMask.value : '';
                },
                set: function set(value) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDynamic.prototype
                    ),
                    'value',
                    value,
                    this,
                    true
                  );
                }
                /**
      @override
    */
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this.currentMask ? this.currentMask.unmaskedValue : '';
                },
                set: function set(unmaskedValue) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDynamic.prototype
                    ),
                    'unmaskedValue',
                    unmaskedValue,
                    this,
                    true
                  );
                }
                /**
      @override
    */
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.currentMask ? this.currentMask.typedValue : '';
                }, // probably typedValue should not be used with dynamic
                set: function set(value) {
                  var unmaskedValue = String(value); // double check it

                  if (this.currentMask) {
                    this.currentMask.typedValue = value;
                    unmaskedValue = this.currentMask.unmaskedValue;
                  }

                  this.unmaskedValue = unmaskedValue;
                }
                /**
      @override
    */
              },
              {
                key: 'isComplete',
                get: function get() {
                  return !!this.currentMask && this.currentMask.isComplete;
                }
              },
              {
                key: 'state',
                get: function get() {
                  return Object.assign(
                    {},
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedDynamic.prototype
                      ),
                      'state',
                      this
                    ),
                    {
                      _rawInputValue: this.rawInputValue,
                      compiledMasks: this.compiledMasks.map(function (m) {
                        return m.state;
                      }),
                      currentMaskRef: this.currentMask,
                      currentMask: this.currentMask && this.currentMask.state
                    }
                  );
                },
                set: function set(state) {
                  var compiledMasks = state.compiledMasks,
                    currentMaskRef = state.currentMaskRef,
                    currentMask = state.currentMask,
                    maskedState = Object(
                      _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['c']
                    )(state, ['compiledMasks', 'currentMaskRef', 'currentMask']);

                  this.compiledMasks.forEach(function (m, mi) {
                    return (m.state = compiledMasks[mi]);
                  });

                  if (currentMaskRef != null) {
                    this.currentMask = currentMaskRef;
                    this.currentMask.state = currentMask;
                  }

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedDynamic.prototype
                    ),
                    'state',
                    maskedState,
                    this,
                    true
                  );
                }
              },
              {
                key: 'overwrite',
                get: function get() {
                  return this.currentMask
                    ? this.currentMask.overwrite
                    : Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                        Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                          MaskedDynamic.prototype
                        ),
                        'overwrite',
                        this
                      );
                },
                set: function set(overwrite) {
                  console.warn(
                    '"overwrite" option is not available in dynamic mask, use this option in siblings'
                  );
                }
              }
            ]);

            return MaskedDynamic;
          })(_base_js__WEBPACK_IMPORTED_MODULE_5__['default']);
        MaskedDynamic.DEFAULTS = {
          dispatch: function dispatch(appended, masked, flags) {
            if (!masked.compiledMasks.length) return;
            var inputValue = masked.rawInputValue; // simulate input

            var inputs = masked.compiledMasks.map(function (m, index) {
              m.reset();
              m.append(inputValue, {
                raw: true
              });
              m.append(appended, flags);
              var weight = m.rawInputValue.length;
              return {
                weight: weight,
                index: index
              };
            }); // pop masks with longer values first

            inputs.sort(function (i1, i2) {
              return i2.weight - i1.weight;
            });
            return masked.compiledMasks[inputs[0].index];
          }
        };
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedDynamic = MaskedDynamic;

        /* harmony default export */ __webpack_exports__['default'] = MaskedDynamic;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/enum.js':
      /*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );
        /* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./pattern.js */ './node_modules/imask/esm/masked/pattern.js'
        );

        /** Pattern which validates enum values */

        var MaskedEnum =
          /*#__PURE__*/
          (function (_MaskedPattern) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedEnum,
              _MaskedPattern
            );

            function MaskedEnum() {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedEnum
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedEnum
                ).apply(this, arguments)
              );
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedEnum, [
              {
                key: '_update',

                /**
      @override
      @param {Object} opts
    */
                value: function _update(opts) {
                  // TODO type
                  if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedEnum.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);
                }
                /**
      @override
    */
              },
              {
                key: 'doValidate',
                value: function doValidate() {
                  var _this = this,
                    _get2;

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return (
                    this.enum.some(function (e) {
                      return e.indexOf(_this.unmaskedValue) >= 0;
                    }) &&
                    (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedEnum.prototype
                      ),
                      'doValidate',
                      this
                    )).call.apply(_get2, [this].concat(args))
                  );
                }
              }
            ]);

            return MaskedEnum;
          })(_pattern_js__WEBPACK_IMPORTED_MODULE_11__['default']);
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedEnum = MaskedEnum;

        /* harmony default export */ __webpack_exports__['default'] = MaskedEnum;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/factory.js':
      /*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
      /*! exports provided: default, maskedClass */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'maskedClass', function () {
          return maskedClass;
        });
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );

        /** Get Masked class by mask type */

        function maskedClass(mask) {
          if (mask == null) {
            throw new Error('mask property should be defined');
          } // $FlowFixMe

          if (mask instanceof RegExp)
            return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].MaskedRegExp; // $FlowFixMe

          if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['isString'])(mask))
            return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].MaskedPattern; // $FlowFixMe

          if (mask instanceof Date || mask === Date)
            return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].MaskedDate; // $FlowFixMe

          if (mask instanceof Number || typeof mask === 'number' || mask === Number)
            return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].MaskedNumber; // $FlowFixMe

          if (Array.isArray(mask) || mask === Array)
            return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].MaskedDynamic; // $FlowFixMe

          if (
            _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked &&
            mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked
          )
            return mask; // $FlowFixMe

          if (mask instanceof Function)
            return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].MaskedFunction; // $FlowFixMe

          if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked)
            return mask.constructor;
          console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
          // $FlowFixMe

          return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked;
        }
        /** Creates new {@link Masked} depending on mask type */

        function createMask(opts) {
          // $FlowFixMe
          if (
            _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked &&
            opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked
          )
            return opts;
          opts = Object.assign({}, opts);
          var mask = opts.mask; // $FlowFixMe

          if (
            _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked &&
            mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].Masked
          )
            return mask;
          var MaskedClass = maskedClass(mask);
          if (!MaskedClass)
            throw new Error(
              'Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.'
            );
          return new MaskedClass(opts);
        }
        _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].createMask = createMask;

        /* harmony default export */ __webpack_exports__['default'] = createMask;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/function.js':
      /*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );

        /** Masking by custom Function */

        var MaskedFunction =
          /*#__PURE__*/
          (function (_Masked) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedFunction,
              _Masked
            );

            function MaskedFunction() {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedFunction
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedFunction
                ).apply(this, arguments)
              );
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedFunction, [
              {
                key: '_update',

                /**
      @override
      @param {Object} opts
    */
                value: function _update(opts) {
                  if (opts.mask) opts.validate = opts.mask;

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedFunction.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);
                }
              }
            ]);

            return MaskedFunction;
          })(_base_js__WEBPACK_IMPORTED_MODULE_5__['default']);
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedFunction = MaskedFunction;

        /* harmony default export */ __webpack_exports__['default'] = MaskedFunction;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/number.js':
      /*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );

        /**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
        var MaskedNumber =
          /*#__PURE__*/
          (function (_Masked) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedNumber,
              _Masked
            );

            /** Single char */

            /** Single char */

            /** Array of single chars */

            /** */

            /** */

            /** Digits after point */

            /** */

            /** Flag to remove leading and trailing zeros in the end of editing */

            /** Flag to pad trailing zeros after point in the end of editing */
            function MaskedNumber(opts) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedNumber
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedNumber
                ).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts))
              );
            }
            /**
    @override
  */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedNumber, [
              {
                key: '_update',
                value: function _update(opts) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedNumber.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);

                  this._updateRegExps();
                }
                /** */
              },
              {
                key: '_updateRegExps',
                value: function _updateRegExps() {
                  // use different regexp to process user input (more strict, input suffix) and tail shifting
                  var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
                  var midInput = '(0|([1-9]+\\d*))?';
                  var mid = '\\d*';
                  var end =
                    (this.scale
                      ? '(' +
                        Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['escapeRegExp'])(this.radix) +
                        '\\d{0,' +
                        this.scale +
                        '})?'
                      : '') + '$';
                  this._numberRegExpInput = new RegExp(start + midInput + end);
                  this._numberRegExp = new RegExp(start + mid + end);
                  this._mapToRadixRegExp = new RegExp(
                    '[' +
                      this.mapToRadix
                        .map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['escapeRegExp'])
                        .join('') +
                      ']',
                    'g'
                  );
                  this._thousandsSeparatorRegExp = new RegExp(
                    Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['escapeRegExp'])(
                      this.thousandsSeparator
                    ),
                    'g'
                  );
                }
                /** */
              },
              {
                key: '_removeThousandsSeparators',
                value: function _removeThousandsSeparators(value) {
                  return value.replace(this._thousandsSeparatorRegExp, '');
                }
                /** */
              },
              {
                key: '_insertThousandsSeparators',
                value: function _insertThousandsSeparators(value) {
                  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                  var parts = value.split(this.radix);
                  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                  return parts.join(this.radix);
                }
                /**
      @override
    */
              },
              {
                key: 'doPrepare',
                value: function doPrepare(str) {
                  var _get2;

                  for (
                    var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                    _key < _len;
                    _key++
                  ) {
                    args[_key - 1] = arguments[_key];
                  }

                  return (_get2 = Object(
                    _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g']
                  )(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedNumber.prototype
                    ),
                    'doPrepare',
                    this
                  )).call.apply(
                    _get2,
                    [
                      this,
                      this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))
                    ].concat(args)
                  );
                }
                /** */
              },
              {
                key: '_separatorsCount',
                value: function _separatorsCount(to) {
                  var extendOnSeparators =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                  var count = 0;

                  for (var pos = 0; pos < to; ++pos) {
                    if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                      ++count;
                      if (extendOnSeparators) to += this.thousandsSeparator.length;
                    }
                  }

                  return count;
                }
                /** */
              },
              {
                key: '_separatorsCountFromSlice',
                value: function _separatorsCountFromSlice() {
                  var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
                  return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
                }
                /**
      @override
    */
              },
              {
                key: 'extractInput',
                value: function extractInput() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  var flags = arguments.length > 2 ? arguments[2] : undefined;

                  var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

                  var _this$_adjustRangeWit2 = Object(
                    _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['i']
                  )(_this$_adjustRangeWit, 2);

                  fromPos = _this$_adjustRangeWit2[0];
                  toPos = _this$_adjustRangeWit2[1];
                  return this._removeThousandsSeparators(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedNumber.prototype
                      ),
                      'extractInput',
                      this
                    ).call(this, fromPos, toPos, flags)
                  );
                }
                /**
      @override
    */
              },
              {
                key: '_appendCharRaw',
                value: function _appendCharRaw(ch) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  if (!this.thousandsSeparator)
                    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedNumber.prototype
                      ),
                      '_appendCharRaw',
                      this
                    ).call(this, ch, flags);
                  var prevBeforeTailValue =
                    flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                  var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

                  this._value = this._removeThousandsSeparators(this.value);

                  var appendDetails = Object(
                    _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g']
                  )(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedNumber.prototype
                    ),
                    '_appendCharRaw',
                    this
                  ).call(this, ch, flags);

                  this._value = this._insertThousandsSeparators(this._value);
                  var beforeTailValue =
                    flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                  var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

                  appendDetails.tailShift +=
                    (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) *
                    this.thousandsSeparator.length;
                  appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                  return appendDetails;
                }
                /** */
              },
              {
                key: '_findSeparatorAround',
                value: function _findSeparatorAround(pos) {
                  if (this.thousandsSeparator) {
                    var searchFrom = pos - this.thousandsSeparator.length + 1;
                    var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                    if (separatorPos <= pos) return separatorPos;
                  }

                  return -1;
                }
              },
              {
                key: '_adjustRangeWithSeparators',
                value: function _adjustRangeWithSeparators(from, to) {
                  var separatorAroundFromPos = this._findSeparatorAround(from);

                  if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

                  var separatorAroundToPos = this._findSeparatorAround(to);

                  if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                  return [from, to];
                }
                /**
      @override
    */
              },
              {
                key: 'remove',
                value: function remove() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                  var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

                  var _this$_adjustRangeWit4 = Object(
                    _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['i']
                  )(_this$_adjustRangeWit3, 2);

                  fromPos = _this$_adjustRangeWit4[0];
                  toPos = _this$_adjustRangeWit4[1];
                  var valueBeforePos = this.value.slice(0, fromPos);
                  var valueAfterPos = this.value.slice(toPos);

                  var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

                  this._value = this._insertThousandsSeparators(
                    this._removeThousandsSeparators(valueBeforePos + valueAfterPos)
                  );

                  var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

                  return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']({
                    tailShift:
                      (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) *
                      this.thousandsSeparator.length
                  });
                }
                /**
      @override
    */
              },
              {
                key: 'nearestInputPos',
                value: function nearestInputPos(cursorPos, direction) {
                  if (!this.thousandsSeparator) return cursorPos;

                  switch (direction) {
                    case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE:
                    case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT:
                    case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT: {
                      var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

                      if (separatorAtLeftPos >= 0) {
                        var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                        if (
                          cursorPos < separatorAtLeftEndPos ||
                          this.value.length <= separatorAtLeftEndPos ||
                          direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT
                        ) {
                          return separatorAtLeftPos;
                        }
                      }

                      break;
                    }

                    case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].RIGHT:
                    case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_RIGHT: {
                      var separatorAtRightPos = this._findSeparatorAround(cursorPos);

                      if (separatorAtRightPos >= 0) {
                        return separatorAtRightPos + this.thousandsSeparator.length;
                      }
                    }
                  }

                  return cursorPos;
                }
                /**
      @override
    */
              },
              {
                key: 'doValidate',
                value: function doValidate(flags) {
                  var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

                  var valid = regexp.test(this._removeThousandsSeparators(this.value));

                  if (valid) {
                    // validate as number
                    var number = this.number;
                    valid =
                      valid &&
                      !isNaN(number) && // check min bound for negative values
                      (this.min == null || this.min >= 0 || this.min <= this.number) && // check max bound for positive values
                      (this.max == null || this.max <= 0 || this.number <= this.max);
                  }

                  return (
                    valid &&
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedNumber.prototype
                      ),
                      'doValidate',
                      this
                    ).call(this, flags)
                  );
                }
                /**
      @override
    */
              },
              {
                key: 'doCommit',
                value: function doCommit() {
                  if (this.value) {
                    var number = this.number;
                    var validnum = number; // check bounds

                    if (this.min != null) validnum = Math.max(validnum, this.min);
                    if (this.max != null) validnum = Math.min(validnum, this.max);
                    if (validnum !== number) this.unmaskedValue = String(validnum);
                    var formatted = this.value;
                    if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                    if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
                    this._value = formatted;
                  }

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedNumber.prototype
                    ),
                    'doCommit',
                    this
                  ).call(this);
                }
                /** */
              },
              {
                key: '_normalizeZeros',
                value: function _normalizeZeros(value) {
                  var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros

                  parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
                    return sign + num;
                  }); // add leading zero

                  if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

                  if (parts.length > 1) {
                    parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

                    if (!parts[1].length) parts.length = 1; // remove fractional
                  }

                  return this._insertThousandsSeparators(parts.join(this.radix));
                }
                /** */
              },
              {
                key: '_padFractionalZeros',
                value: function _padFractionalZeros(value) {
                  if (!value) return value;
                  var parts = value.split(this.radix);
                  if (parts.length < 2) parts.push('');
                  parts[1] = parts[1].padEnd(this.scale, '0');
                  return parts.join(this.radix);
                }
                /**
      @override
    */
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(
                    this.radix,
                    '.'
                  );
                },
                set: function set(unmaskedValue) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedNumber.prototype
                    ),
                    'unmaskedValue',
                    unmaskedValue.replace('.', this.radix),
                    this,
                    true
                  );
                }
                /**
      @override
    */
              },
              {
                key: 'typedValue',
                get: function get() {
                  return Number(this.unmaskedValue);
                },
                set: function set(n) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedNumber.prototype
                    ),
                    'unmaskedValue',
                    String(n),
                    this,
                    true
                  );
                }
                /** Parsed Number */
              },
              {
                key: 'number',
                get: function get() {
                  return this.typedValue;
                },
                set: function set(number) {
                  this.typedValue = number;
                }
                /**
      Is negative allowed
      @readonly
    */
              },
              {
                key: 'allowNegative',
                get: function get() {
                  return (
                    this.signed || (this.min != null && this.min < 0) || (this.max != null && this.max < 0)
                  );
                }
              }
            ]);

            return MaskedNumber;
          })(_base_js__WEBPACK_IMPORTED_MODULE_5__['default']);
        MaskedNumber.DEFAULTS = {
          radix: ',',
          thousandsSeparator: '',
          mapToRadix: ['.'],
          scale: 2,
          signed: false,
          normalizeZeros: true,
          padFractionalZeros: false
        };
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedNumber = MaskedNumber;

        /* harmony default export */ __webpack_exports__['default'] = MaskedNumber;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/pattern.js':
      /*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );

        /**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
        var MaskedPattern =
          /*#__PURE__*/
          (function (_Masked) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedPattern,
              _Masked
            );

            /** */

            /** */

            /** Single char for empty input */

            /** Show placeholder only when needed */
            function MaskedPattern() {
              var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedPattern
              );

              // TODO type $Shape<MaskedPatternOptions>={} does not work
              opts.definitions = Object.assign(
                {},
                _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__['DEFAULT_INPUT_DEFINITIONS'],
                opts.definitions
              );
              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedPattern
                ).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts))
              );
            }
            /**
    @override
    @param {Object} opts
  */

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedPattern, [
              {
                key: '_update',
                value: function _update() {
                  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  opts.definitions = Object.assign({}, this.definitions, opts.definitions);

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);

                  this._rebuildMask();
                }
                /** */
              },
              {
                key: '_rebuildMask',
                value: function _rebuildMask() {
                  var _this = this;

                  var defs = this.definitions;
                  this._blocks = [];
                  this._stops = [];
                  this._maskedBlocks = {};
                  var pattern = this.mask;
                  if (!pattern || !defs) return;
                  var unmaskingBlock = false;
                  var optionalBlock = false;

                  for (var i = 0; i < pattern.length; ++i) {
                    if (this.blocks) {
                      var _ret = (function () {
                        var p = pattern.slice(i);
                        var bNames = Object.keys(_this.blocks).filter(function (bName) {
                          return p.indexOf(bName) === 0;
                        }); // order by key length

                        bNames.sort(function (a, b) {
                          return b.length - a.length;
                        }); // use block name with max length

                        var bName = bNames[0];

                        if (bName) {
                          var maskedBlock = Object(_factory_js__WEBPACK_IMPORTED_MODULE_6__['default'])(
                            Object.assign(
                              {
                                parent: _this,
                                lazy: _this.lazy,
                                placeholderChar: _this.placeholderChar,
                                overwrite: _this.overwrite
                              },
                              _this.blocks[bName]
                            )
                          );

                          if (maskedBlock) {
                            _this._blocks.push(maskedBlock); // store block index

                            if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                            _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                          }

                          i += bName.length - 1;
                          return 'continue';
                        }
                      })();

                      if (_ret === 'continue') continue;
                    }

                    var char = pattern[i];

                    var _isInput = char in defs;

                    if (char === MaskedPattern.STOP_CHAR) {
                      this._stops.push(this._blocks.length);

                      continue;
                    }

                    if (char === '{' || char === '}') {
                      unmaskingBlock = !unmaskingBlock;
                      continue;
                    }

                    if (char === '[' || char === ']') {
                      optionalBlock = !optionalBlock;
                      continue;
                    }

                    if (char === MaskedPattern.ESCAPE_CHAR) {
                      ++i;
                      char = pattern[i];
                      if (!char) break;
                      _isInput = false;
                    }

                    var def = _isInput
                      ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__['default']({
                          parent: this,
                          lazy: this.lazy,
                          placeholderChar: this.placeholderChar,
                          mask: defs[char],
                          isOptional: optionalBlock
                        })
                      : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__['default']({
                          char: char,
                          isUnmasking: unmaskingBlock
                        });

                    this._blocks.push(def);
                  }
                }
                /**
      @override
    */
              },
              {
                key: 'reset',

                /**
      @override
    */
                value: function reset() {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'reset',
                    this
                  ).call(this);

                  this._blocks.forEach(function (b) {
                    return b.reset();
                  });
                }
                /**
      @override
    */
              },
              {
                key: 'doCommit',

                /**
      @override
    */
                value: function doCommit() {
                  this._blocks.forEach(function (b) {
                    return b.doCommit();
                  });

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'doCommit',
                    this
                  ).call(this);
                }
                /**
      @override
    */
              },
              {
                key: 'appendTail',

                /**
      @override
    */
                value: function appendTail(tail) {
                  return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'appendTail',
                    this
                  )
                    .call(this, tail)
                    .aggregate(this._appendPlaceholder());
                }
                /**
      @override
    */
              },
              {
                key: '_appendCharRaw',
                value: function _appendCharRaw(ch) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  ch = this.doPrepare(ch, flags);

                  var blockIter = this._mapPosToBlock(this.value.length);

                  var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  if (!blockIter) return details;

                  for (var bi = blockIter.index; ; ++bi) {
                    var _block = this._blocks[bi];
                    if (!_block) break;

                    var blockDetails = _block._appendChar(ch, flags);

                    var skip = blockDetails.skip;
                    details.aggregate(blockDetails);
                    if (skip || blockDetails.rawInserted) break; // go next char
                  }

                  return details;
                }
                /**
      @override
    */
              },
              {
                key: 'extractTail',
                value: function extractTail() {
                  var _this2 = this;

                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__[
                    'default'
                  ]();
                  if (fromPos === toPos) return chunkTail;

                  this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
                    var blockChunk = b.extractTail(bFromPos, bToPos);
                    blockChunk.stop = _this2._findStopBefore(bi);
                    blockChunk.from = _this2._blockStartPos(bi);
                    if (
                      blockChunk instanceof
                      _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__['default']
                    )
                      blockChunk.blockIndex = bi;
                    chunkTail.extend(blockChunk);
                  });

                  return chunkTail;
                }
                /**
      @override
    */
              },
              {
                key: 'extractInput',
                value: function extractInput() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  if (fromPos === toPos) return '';
                  var input = '';

                  this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
                    input += b.extractInput(fromPos, toPos, flags);
                  });

                  return input;
                }
              },
              {
                key: '_findStopBefore',
                value: function _findStopBefore(blockIndex) {
                  var stopBefore;

                  for (var si = 0; si < this._stops.length; ++si) {
                    var stop = this._stops[si];
                    if (stop <= blockIndex) stopBefore = stop;
                    else break;
                  }

                  return stopBefore;
                }
                /** Appends placeholder depending on laziness */
              },
              {
                key: '_appendPlaceholder',
                value: function _appendPlaceholder(toBlockIndex) {
                  var _this3 = this;

                  var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  if (this.lazy && toBlockIndex == null) return details;

                  var startBlockIter = this._mapPosToBlock(this.value.length);

                  if (!startBlockIter) return details;
                  var startBlockIndex = startBlockIter.index;
                  var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

                  this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
                    if (!b.lazy || toBlockIndex != null) {
                      // $FlowFixMe `_blocks` may not be present
                      var args = b._blocks != null ? [b._blocks.length] : [];

                      var bDetails = b._appendPlaceholder.apply(b, args);

                      _this3._value += bDetails.inserted;
                      details.aggregate(bDetails);
                    }
                  });

                  return details;
                }
                /** Finds block in pos */
              },
              {
                key: '_mapPosToBlock',
                value: function _mapPosToBlock(pos) {
                  var accVal = '';

                  for (var bi = 0; bi < this._blocks.length; ++bi) {
                    var _block2 = this._blocks[bi];
                    var blockStartPos = accVal.length;
                    accVal += _block2.value;

                    if (pos <= accVal.length) {
                      return {
                        index: bi,
                        offset: pos - blockStartPos
                      };
                    }
                  }
                }
                /** */
              },
              {
                key: '_blockStartPos',
                value: function _blockStartPos(blockIndex) {
                  return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
                    return (pos += b.value.length);
                  }, 0);
                }
                /** */
              },
              {
                key: '_forEachBlocksInRange',
                value: function _forEachBlocksInRange(fromPos) {
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                  var fn = arguments.length > 2 ? arguments[2] : undefined;

                  var fromBlockIter = this._mapPosToBlock(fromPos);

                  if (fromBlockIter) {
                    var toBlockIter = this._mapPosToBlock(toPos); // process first block

                    var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                    var fromBlockStartPos = fromBlockIter.offset;
                    var fromBlockEndPos =
                      toBlockIter && isSameBlock
                        ? toBlockIter.offset
                        : this._blocks[fromBlockIter.index].value.length;
                    fn(
                      this._blocks[fromBlockIter.index],
                      fromBlockIter.index,
                      fromBlockStartPos,
                      fromBlockEndPos
                    );

                    if (toBlockIter && !isSameBlock) {
                      // process intermediate blocks
                      for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
                        fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                      } // process last block

                      fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                    }
                  }
                }
                /**
      @override
    */
              },
              {
                key: 'remove',
                value: function remove() {
                  var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  var toPos =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                  var removeDetails = Object(
                    _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g']
                  )(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'remove',
                    this
                  ).call(this, fromPos, toPos);

                  this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
                    removeDetails.aggregate(b.remove(bFromPos, bToPos));
                  });

                  return removeDetails;
                }
                /**
      @override
    */
              },
              {
                key: 'nearestInputPos',
                value: function nearestInputPos(cursorPos) {
                  var direction =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE;
                  // TODO refactor - extract alignblock
                  var beginBlockData = this._mapPosToBlock(cursorPos) || {
                    index: 0,
                    offset: 0
                  };
                  var beginBlockOffset = beginBlockData.offset,
                    beginBlockIndex = beginBlockData.index;
                  var beginBlock = this._blocks[beginBlockIndex];
                  if (!beginBlock) return cursorPos;
                  var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

                  if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
                    beginBlockCursorPos = beginBlock.nearestInputPos(
                      beginBlockOffset,
                      Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['forceDirection'])(direction)
                    );
                  }

                  var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
                  var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

                  if (!cursorAtLeft && !cursorAtRight)
                    return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
                  var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

                  if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE) {
                    // NONE direction used to calculate start input position if no chars were removed
                    // FOR NONE:
                    // -
                    // input|any
                    // ->
                    //  any|input
                    // <-
                    //  filled-input|any
                    // check if first block at left is input
                    if (searchBlockIndex > 0) {
                      var blockIndexAtLeft = searchBlockIndex - 1;
                      var blockAtLeft = this._blocks[blockIndexAtLeft];
                      var blockInputPos = blockAtLeft.nearestInputPos(
                        0,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE
                      ); // is input

                      if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
                        return this._blockStartPos(searchBlockIndex);
                      }
                    } // ->

                    var firstInputAtRight = searchBlockIndex;

                    for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
                      var blockAtRight = this._blocks[bi];

                      var _blockInputPos = blockAtRight.nearestInputPos(
                        0,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE
                      );

                      if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
                        return this._blockStartPos(bi) + _blockInputPos;
                      }
                    } // <-
                    // find first non-fixed symbol

                    for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
                      var _block3 = this._blocks[_bi];

                      var _blockInputPos2 = _block3.nearestInputPos(
                        0,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE
                      ); // is input

                      if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
                        return this._blockStartPos(_bi) + _block3.value.length;
                      }
                    }

                    return cursorPos;
                  }

                  if (
                    direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT ||
                    direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT
                  ) {
                    // -
                    //  any|filled-input
                    // <-
                    //  any|first not empty is not-len-aligned
                    //  not-0-aligned|any
                    // ->
                    //  any|not-len-aligned or end
                    // check if first block at right is filled input
                    var firstFilledBlockIndexAtRight;

                    for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
                      if (this._blocks[_bi2].value) {
                        firstFilledBlockIndexAtRight = _bi2;
                        break;
                      }
                    }

                    if (firstFilledBlockIndexAtRight != null) {
                      var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

                      var _blockInputPos3 = filledBlock.nearestInputPos(
                        0,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].RIGHT
                      );

                      if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
                        // filled block is input
                        return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
                      }
                    } // <-
                    // find this vars

                    var firstFilledInputBlockIndex = -1;
                    var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

                    for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
                      var _block4 = this._blocks[_bi3];

                      var _blockInputPos4 = _block4.nearestInputPos(
                        _block4.value.length,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT
                      );

                      if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

                      if (_blockInputPos4 !== 0) {
                        if (_blockInputPos4 !== _block4.value.length) {
                          // aligned inside block - return immediately
                          return this._blockStartPos(_bi3) + _blockInputPos4;
                        } else {
                          // found filled
                          firstFilledInputBlockIndex = _bi3;
                          break;
                        }
                      }
                    }

                    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT) {
                      // try find first empty input before start searching position only when not forced
                      for (
                        var _bi4 = firstFilledInputBlockIndex + 1;
                        _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1);
                        ++_bi4
                      ) {
                        var _block5 = this._blocks[_bi4];

                        var _blockInputPos5 = _block5.nearestInputPos(
                          0,
                          _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE
                        );

                        var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

                        if (blockAlignedPos > cursorPos) break; // if block is not lazy input

                        if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
                      }
                    } // process overflow

                    if (firstFilledInputBlockIndex >= 0) {
                      return (
                        this._blockStartPos(firstFilledInputBlockIndex) +
                        this._blocks[firstFilledInputBlockIndex].value.length
                      );
                    } // for lazy if has aligned left inside fixed and has came to the start - use start position

                    if (
                      direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT ||
                      (this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex]))
                    ) {
                      return 0;
                    }

                    if (firstEmptyInputBlockIndex != null) {
                      return this._blockStartPos(firstEmptyInputBlockIndex);
                    } // find first input

                    for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
                      var _block6 = this._blocks[_bi5];

                      var _blockInputPos6 = _block6.nearestInputPos(
                        0,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE
                      ); // is input

                      if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
                        return this._blockStartPos(_bi5) + _blockInputPos6;
                      }
                    }

                    return 0;
                  }

                  if (
                    direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].RIGHT ||
                    direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_RIGHT
                  ) {
                    // ->
                    //  any|not-len-aligned and filled
                    //  any|not-len-aligned
                    // <-
                    //  not-0-aligned or start|any
                    var firstInputBlockAlignedIndex;
                    var firstInputBlockAlignedPos;

                    for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
                      var _block7 = this._blocks[_bi6];

                      var _blockInputPos7 = _block7.nearestInputPos(
                        0,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE
                      );

                      if (_blockInputPos7 !== _block7.value.length) {
                        firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
                        firstInputBlockAlignedIndex = _bi6;
                        break;
                      }
                    }

                    if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
                      for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
                        var _block8 = this._blocks[_bi7];

                        var _blockInputPos8 = _block8.nearestInputPos(
                          0,
                          _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_RIGHT
                        );

                        if (_blockInputPos8 !== _block8.value.length) {
                          return this._blockStartPos(_bi7) + _blockInputPos8;
                        }
                      }

                      return direction ===
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_RIGHT
                        ? this.value.length
                        : firstInputBlockAlignedPos;
                    }

                    for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
                      var _block9 = this._blocks[_bi8];

                      var _blockInputPos9 = _block9.nearestInputPos(
                        _block9.value.length,
                        _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT
                      );

                      if (_blockInputPos9 !== 0) {
                        var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

                        if (alignedPos >= cursorPos) return alignedPos;
                        break;
                      }
                    }
                  }

                  return cursorPos;
                }
                /** Get block by name */
              },
              {
                key: 'maskedBlock',
                value: function maskedBlock(name) {
                  return this.maskedBlocks(name)[0];
                }
                /** Get all blocks by name */
              },
              {
                key: 'maskedBlocks',
                value: function maskedBlocks(name) {
                  var _this4 = this;

                  var indices = this._maskedBlocks[name];
                  if (!indices) return [];
                  return indices.map(function (gi) {
                    return _this4._blocks[gi];
                  });
                }
              },
              {
                key: 'state',
                get: function get() {
                  return Object.assign(
                    {},
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedPattern.prototype
                      ),
                      'state',
                      this
                    ),
                    {
                      _blocks: this._blocks.map(function (b) {
                        return b.state;
                      })
                    }
                  );
                },
                set: function set(state) {
                  var _blocks = state._blocks,
                    maskedState = Object(
                      _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['c']
                    )(state, ['_blocks']);

                  this._blocks.forEach(function (b, bi) {
                    return (b.state = _blocks[bi]);
                  });

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'state',
                    maskedState,
                    this,
                    true
                  );
                }
              },
              {
                key: 'isComplete',
                get: function get() {
                  return this._blocks.every(function (b) {
                    return b.isComplete;
                  });
                }
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this._blocks.reduce(function (str, b) {
                    return (str += b.unmaskedValue);
                  }, '');
                },
                set: function set(unmaskedValue) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'unmaskedValue',
                    unmaskedValue,
                    this,
                    true
                  );
                }
                /**
      @override
    */
              },
              {
                key: 'value',
                get: function get() {
                  // TODO return _value when not in change?
                  return this._blocks.reduce(function (str, b) {
                    return (str += b.value);
                  }, '');
                },
                set: function set(value) {
                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['h'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedPattern.prototype
                    ),
                    'value',
                    value,
                    this,
                    true
                  );
                }
              }
            ]);

            return MaskedPattern;
          })(_base_js__WEBPACK_IMPORTED_MODULE_5__['default']);
        MaskedPattern.DEFAULTS = {
          lazy: true,
          placeholderChar: '_'
        };
        MaskedPattern.STOP_CHAR = '`';
        MaskedPattern.ESCAPE_CHAR = '\\';
        MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__['default'];
        MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__['default'];

        function isInput(block) {
          if (!block) return false;
          var value = block.value;
          return (
            !value ||
            block.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE) !==
              value.length
          );
        }

        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedPattern = MaskedPattern;

        /* harmony default export */ __webpack_exports__['default'] = MaskedPattern;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );

        var ChunksTailDetails =
          /*#__PURE__*/
          (function () {
            /** */
            function ChunksTailDetails() {
              var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                ChunksTailDetails
              );

              this.chunks = chunks;
              this.from = from;
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(
              ChunksTailDetails,
              [
                {
                  key: 'toString',
                  value: function toString() {
                    return this.chunks.map(String).join('');
                  } // $FlowFixMe no ideas
                },
                {
                  key: 'extend',
                  value: function extend(tailChunk) {
                    if (!String(tailChunk)) return;
                    if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['isString'])(tailChunk))
                      tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__[
                        'default'
                      ](String(tailChunk));
                    var lastChunk = this.chunks[this.chunks.length - 1];
                    var extendLast =
                      lastChunk && // if stops are same or tail has no stop
                      (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
                      tailChunk.from === lastChunk.from + lastChunk.toString().length;

                    if (
                      tailChunk instanceof
                      _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default']
                    ) {
                      // check the ability to extend previous chunk
                      if (extendLast) {
                        // extend previous chunk
                        lastChunk.extend(tailChunk.toString());
                      } else {
                        // append new chunk
                        this.chunks.push(tailChunk);
                      }
                    } else if (tailChunk instanceof ChunksTailDetails) {
                      if (tailChunk.stop == null) {
                        // unwrap floating chunks to parent, keeping `from` pos
                        var firstTailChunk;

                        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
                          firstTailChunk = tailChunk.chunks.shift();
                          firstTailChunk.from += tailChunk.from;
                          this.extend(firstTailChunk);
                        }
                      } // if tail chunk still has value

                      if (tailChunk.toString()) {
                        // if chunks contains stops, then popup stop to container
                        tailChunk.stop = tailChunk.blockIndex;
                        this.chunks.push(tailChunk);
                      }
                    }
                  }
                },
                {
                  key: 'appendTo',
                  value: function appendTo(masked) {
                    // $FlowFixMe
                    if (
                      !(
                        masked instanceof
                        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedPattern
                      )
                    ) {
                      var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default'](
                        this.toString()
                      );
                      return tail.appendTo(masked);
                    }

                    var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();

                    for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                      var chunk = this.chunks[ci];

                      var lastBlockIter = masked._mapPosToBlock(masked.value.length);

                      var stop = chunk.stop;
                      var chunkBlock = void 0;

                      if (
                        stop != null && // if block not found or stop is behind lastBlock
                        (!lastBlockIter || lastBlockIter.index <= stop)
                      ) {
                        if (
                          chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                          masked._stops.indexOf(stop) >= 0
                        ) {
                          details.aggregate(masked._appendPlaceholder(stop));
                        }

                        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                      }

                      if (chunkBlock) {
                        var tailDetails = chunkBlock.appendTail(chunk);
                        tailDetails.skip = false; // always ignore skip, it will be set on last

                        details.aggregate(tailDetails);
                        masked._value += tailDetails.inserted; // get not inserted chars

                        var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                        if (remainChars)
                          details.aggregate(
                            masked.append(remainChars, {
                              tail: true
                            })
                          );
                      } else {
                        details.aggregate(
                          masked.append(chunk.toString(), {
                            tail: true
                          })
                        );
                      }
                    }
                    return details;
                  }
                },
                {
                  key: 'shiftBefore',
                  value: function shiftBefore(pos) {
                    if (this.from >= pos || !this.chunks.length) return '';
                    var chunkShiftPos = pos - this.from;
                    var ci = 0;

                    while (ci < this.chunks.length) {
                      var chunk = this.chunks[ci];
                      var shiftChar = chunk.shiftBefore(chunkShiftPos);

                      if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        ++ci;
                      } else {
                        // clean if chunk has no value
                        this.chunks.splice(ci, 1);
                      }

                      if (shiftChar) return shiftChar;
                    }

                    return '';
                  }
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      chunks: this.chunks.map(function (c) {
                        return c.state;
                      }),
                      from: this.from,
                      stop: this.stop,
                      blockIndex: this.blockIndex
                    };
                  },
                  set: function set(state) {
                    var chunks = state.chunks,
                      props = Object(
                        _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['c']
                      )(state, ['chunks']);

                    Object.assign(this, props);
                    this.chunks = chunks.map(function (cstate) {
                      var chunk =
                        'chunks' in cstate
                          ? new ChunksTailDetails()
                          : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default'](); // $FlowFixMe already checked above

                      chunk.state = cstate;
                      return chunk;
                    });
                  }
                }
              ]
            );

            return ChunksTailDetails;
          })();

        /* harmony default export */ __webpack_exports__['default'] = ChunksTailDetails;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/pattern/fixed-definition.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );

        var PatternFixedDefinition =
          /*#__PURE__*/
          (function () {
            /** */

            /** */

            /** */

            /** */
            function PatternFixedDefinition(opts) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                PatternFixedDefinition
              );

              Object.assign(this, opts);
              this._value = '';
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(
              PatternFixedDefinition,
              [
                {
                  key: 'reset',
                  value: function reset() {
                    this._isRawInput = false;
                    this._value = '';
                  }
                },
                {
                  key: 'remove',
                  value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos =
                      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                    if (!this._value) this._isRawInput = false;
                    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  }
                },
                {
                  key: 'nearestInputPos',
                  value: function nearestInputPos(cursorPos) {
                    var direction =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE;
                    var minPos = 0;
                    var maxPos = this._value.length;

                    switch (direction) {
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT:
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT:
                        return minPos;

                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE:
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].RIGHT:
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_RIGHT:
                      default:
                        return maxPos;
                    }
                  }
                },
                {
                  key: 'extractInput',
                  value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos =
                      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                    var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    return (flags.raw && this._isRawInput && this._value.slice(fromPos, toPos)) || '';
                  }
                },
                {
                  key: '_appendChar',
                  value: function _appendChar(str) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                    if (this._value) return details;
                    var appended = this.char === str[0];
                    var isResolved =
                      appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
                    if (isResolved) details.rawInserted = this.char;
                    this._value = details.inserted = this.char;
                    this._isRawInput = isResolved && (flags.raw || flags.input);
                    return details;
                  }
                },
                {
                  key: '_appendPlaceholder',
                  value: function _appendPlaceholder() {
                    var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                    if (this._value) return details;
                    this._value = details.inserted = this.char;
                    return details;
                  }
                },
                {
                  key: 'extractTail',
                  value: function extractTail() {
                    var toPos =
                      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default']('');
                  } // $FlowFixMe no ideas
                },
                {
                  key: 'appendTail',
                  value: function appendTail(tail) {
                    if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__['isString'])(tail))
                      tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__['default'](
                        String(tail)
                      );
                    return tail.appendTo(this);
                  }
                },
                {
                  key: 'append',
                  value: function append(str, flags, tail) {
                    var details = this._appendChar(str, flags);

                    if (tail != null) {
                      details.tailShift += this.appendTail(tail).tailShift;
                    }

                    return details;
                  }
                },
                {
                  key: 'doCommit',
                  value: function doCommit() {}
                },
                {
                  key: 'value',
                  get: function get() {
                    return this._value;
                  }
                },
                {
                  key: 'unmaskedValue',
                  get: function get() {
                    return this.isUnmasking ? this.value : '';
                  }
                },
                {
                  key: 'isComplete',
                  get: function get() {
                    return true;
                  }
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      _value: this._value,
                      _isRawInput: this._isRawInput
                    };
                  },
                  set: function set(state) {
                    Object.assign(this, state);
                  }
                }
              ]
            );

            return PatternFixedDefinition;
          })();

        /* harmony default export */ __webpack_exports__['default'] = PatternFixedDefinition;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/pattern/input-definition.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
      /*! exports provided: default, DEFAULT_INPUT_DEFINITIONS */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DEFAULT_INPUT_DEFINITIONS',
          function () {
            return DEFAULT_INPUT_DEFINITIONS;
          }
        );
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../factory.js */ './node_modules/imask/esm/masked/factory.js'
        );

        var DEFAULT_INPUT_DEFINITIONS = {
          0: /\d/,
          a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          // http://stackoverflow.com/a/22075070
          '*': /./
        };
        /** */

        var PatternInputDefinition =
          /*#__PURE__*/
          (function () {
            /** */

            /** */

            /** */

            /** */

            /** */

            /** */
            function PatternInputDefinition(opts) {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                PatternInputDefinition
              );

              var mask = opts.mask,
                blockOpts = Object(
                  _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['c']
                )(opts, ['mask']);

              this.masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_4__['default'])({
                mask: mask
              });
              Object.assign(this, blockOpts);
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(
              PatternInputDefinition,
              [
                {
                  key: 'reset',
                  value: function reset() {
                    this._isFilled = false;
                    this.masked.reset();
                  }
                },
                {
                  key: 'remove',
                  value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos =
                      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                    if (fromPos === 0 && toPos >= 1) {
                      this._isFilled = false;
                      return this.masked.remove(fromPos, toPos);
                    }

                    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                  }
                },
                {
                  key: '_appendChar',
                  value: function _appendChar(str) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    if (this._isFilled)
                      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                    var state = this.masked.state; // simulate input

                    var details = this.masked._appendChar(str, flags);

                    if (details.inserted && this.doValidate(flags) === false) {
                      details.inserted = details.rawInserted = '';
                      this.masked.state = state;
                    }

                    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
                      details.inserted = this.placeholderChar;
                    }

                    details.skip = !details.inserted && !this.isOptional;
                    this._isFilled = Boolean(details.inserted);
                    return details;
                  }
                },
                {
                  key: 'append',
                  value: function append() {
                    var _this$masked;

                    return (_this$masked = this.masked).append.apply(_this$masked, arguments);
                  }
                },
                {
                  key: '_appendPlaceholder',
                  value: function _appendPlaceholder() {
                    var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__['default']();
                    if (this._isFilled || this.isOptional) return details;
                    this._isFilled = true;
                    details.inserted = this.placeholderChar;
                    return details;
                  }
                },
                {
                  key: 'extractTail',
                  value: function extractTail() {
                    var _this$masked2;

                    return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
                  }
                },
                {
                  key: 'appendTail',
                  value: function appendTail() {
                    var _this$masked3;

                    return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
                  }
                },
                {
                  key: 'extractInput',
                  value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos =
                      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 ? arguments[2] : undefined;
                    return this.masked.extractInput(fromPos, toPos, flags);
                  }
                },
                {
                  key: 'nearestInputPos',
                  value: function nearestInputPos(cursorPos) {
                    var direction =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE;
                    var minPos = 0;
                    var maxPos = this.value.length;
                    var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

                    switch (direction) {
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].LEFT:
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_LEFT:
                        return this.isComplete ? boundPos : minPos;

                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].RIGHT:
                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].FORCE_RIGHT:
                        return this.isComplete ? boundPos : maxPos;

                      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__['DIRECTION'].NONE:
                      default:
                        return boundPos;
                    }
                  }
                },
                {
                  key: 'doValidate',
                  value: function doValidate() {
                    var _this$masked4, _this$parent;

                    return (
                      (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) &&
                      (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments))
                    );
                  }
                },
                {
                  key: 'doCommit',
                  value: function doCommit() {
                    this.masked.doCommit();
                  }
                },
                {
                  key: 'value',
                  get: function get() {
                    return (
                      this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '')
                    );
                  }
                },
                {
                  key: 'unmaskedValue',
                  get: function get() {
                    return this.masked.unmaskedValue;
                  }
                },
                {
                  key: 'isComplete',
                  get: function get() {
                    return Boolean(this.masked.value) || this.isOptional;
                  }
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      masked: this.masked.state,
                      _isFilled: this._isFilled
                    };
                  },
                  set: function set(state) {
                    this.masked.state = state.masked;
                    this._isFilled = state._isFilled;
                  }
                }
              ]
            );

            return PatternInputDefinition;
          })();

        /* harmony default export */ __webpack_exports__['default'] = PatternInputDefinition;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/pipe.js':
      /*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
      /*! exports provided: PIPE_TYPE, createPipe, pipe */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PIPE_TYPE', function () {
          return PIPE_TYPE;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'createPipe', function () {
          return createPipe;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'pipe', function () {
          return pipe;
        });
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./factory.js */ './node_modules/imask/esm/masked/factory.js'
        );

        /** Mask pipe source and destination types */

        var PIPE_TYPE = {
          MASKED: 'value',
          UNMASKED: 'unmaskedValue',
          TYPED: 'typedValue'
        };
        /** Creates new pipe function depending on mask type, source and destination options */

        function createPipe(mask) {
          var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
          var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
          var masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_3__['default'])(mask);
          return function (value) {
            return masked.runIsolated(function (m) {
              m[from] = value;
              return m[to];
            });
          };
        }
        /** Pipes value through mask depending on mask type, source and destination options */

        function pipe(value) {
          for (
            var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          ) {
            pipeArgs[_key - 1] = arguments[_key];
          }

          return createPipe.apply(void 0, pipeArgs)(value);
        }
        _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].PIPE_TYPE = PIPE_TYPE;
        _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].createPipe = createPipe;
        _core_holder_js__WEBPACK_IMPORTED_MODULE_2__['default'].pipe = pipe;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/range.js':
      /*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );
        /* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./factory.js */ './node_modules/imask/esm/masked/factory.js'
        );
        /* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./pattern/input-definition.js */ './node_modules/imask/esm/masked/pattern/input-definition.js'
        );
        /* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./pattern/fixed-definition.js */ './node_modules/imask/esm/masked/pattern/fixed-definition.js'
        );
        /* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./pattern/chunk-tail-details.js */ './node_modules/imask/esm/masked/pattern/chunk-tail-details.js'
        );
        /* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./regexp.js */ './node_modules/imask/esm/masked/regexp.js'
        );
        /* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./pattern.js */ './node_modules/imask/esm/masked/pattern.js'
        );

        /** Pattern which accepts ranges */

        var MaskedRange =
          /*#__PURE__*/
          (function (_MaskedPattern) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedRange,
              _MaskedPattern
            );

            function MaskedRange() {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedRange
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedRange
                ).apply(this, arguments)
              );
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedRange, [
              {
                key: '_update',

                /**
      @override
    */
                value: function _update(opts) {
                  // TODO type
                  opts = Object.assign(
                    {
                      to: this.to || 0,
                      from: this.from || 0
                    },
                    opts
                  );
                  var maxLength = String(opts.to).length;
                  if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
                  opts.maxLength = maxLength;
                  var fromStr = String(opts.from).padStart(maxLength, '0');
                  var toStr = String(opts.to).padStart(maxLength, '0');
                  var sameCharsCount = 0;

                  while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
                    ++sameCharsCount;
                  }

                  opts.mask =
                    toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') +
                    '0'.repeat(maxLength - sameCharsCount);

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedRange.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);
                }
                /**
      @override
    */
              },
              {
                key: 'boundaries',
                value: function boundaries(str) {
                  var minstr = '';
                  var maxstr = '';

                  var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
                    _ref2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['i'])(
                      _ref,
                      3
                    ),
                    placeholder = _ref2[1],
                    num = _ref2[2];

                  if (num) {
                    minstr = '0'.repeat(placeholder.length) + num;
                    maxstr = '9'.repeat(placeholder.length) + num;
                  }

                  minstr = minstr.padEnd(this.maxLength, '0');
                  maxstr = maxstr.padEnd(this.maxLength, '9');
                  return [minstr, maxstr];
                }
                /**
      @override
    */
              },
              {
                key: 'doPrepare',
                value: function doPrepare(str) {
                  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  str = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedRange.prototype
                    ),
                    'doPrepare',
                    this
                  )
                    .call(this, str, flags)
                    .replace(/\D/g, '');
                  if (!this.autofix) return str;
                  var fromStr = String(this.from).padStart(this.maxLength, '0');
                  var toStr = String(this.to).padStart(this.maxLength, '0');
                  var val = this.value;
                  var prepStr = '';

                  for (var ci = 0; ci < str.length; ++ci) {
                    var nextVal = val + prepStr + str[ci];

                    var _this$boundaries = this.boundaries(nextVal),
                      _this$boundaries2 = Object(
                        _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['i']
                      )(_this$boundaries, 2),
                      minstr = _this$boundaries2[0],
                      maxstr = _this$boundaries2[1];

                    if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];
                    else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];
                    else prepStr += str[ci];
                  }

                  return prepStr;
                }
                /**
      @override
    */
              },
              {
                key: 'doValidate',
                value: function doValidate() {
                  var _get2;

                  var str = this.value;
                  var firstNonZero = str.search(/[^0]/);
                  if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

                  var _this$boundaries3 = this.boundaries(str),
                    _this$boundaries4 = Object(
                      _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['i']
                    )(_this$boundaries3, 2),
                    minstr = _this$boundaries4[0],
                    maxstr = _this$boundaries4[1];

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return (
                    this.from <= Number(maxstr) &&
                    Number(minstr) <= this.to &&
                    (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedRange.prototype
                      ),
                      'doValidate',
                      this
                    )).call.apply(_get2, [this].concat(args))
                  );
                }
              },
              {
                key: '_matchFrom',

                /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

                /** Min bound */

                /** Max bound */

                /** */
                get: function get() {
                  return this.maxLength - String(this.from).length;
                }
              },
              {
                key: 'isComplete',
                get: function get() {
                  return (
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                        MaskedRange.prototype
                      ),
                      'isComplete',
                      this
                    ) && Boolean(this.value)
                  );
                }
              }
            ]);

            return MaskedRange;
          })(_pattern_js__WEBPACK_IMPORTED_MODULE_11__['default']);
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedRange = MaskedRange;

        /* harmony default export */ __webpack_exports__['default'] = MaskedRange;

        /***/
      },

    /***/ './node_modules/imask/esm/masked/regexp.js':
      /*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ './node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js'
        );
        /* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/utils.js */ './node_modules/imask/esm/core/utils.js'
        );
        /* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../core/change-details.js */ './node_modules/imask/esm/core/change-details.js'
        );
        /* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../core/continuous-tail-details.js */ './node_modules/imask/esm/core/continuous-tail-details.js'
        );
        /* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/holder.js */ './node_modules/imask/esm/core/holder.js'
        );
        /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./base.js */ './node_modules/imask/esm/masked/base.js'
        );

        /** Masking by RegExp */

        var MaskedRegExp =
          /*#__PURE__*/
          (function (_Masked) {
            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['d'])(
              MaskedRegExp,
              _Masked
            );

            function MaskedRegExp() {
              Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['b'])(
                this,
                MaskedRegExp
              );

              return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['e'])(
                this,
                Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                  MaskedRegExp
                ).apply(this, arguments)
              );
            }

            Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['a'])(MaskedRegExp, [
              {
                key: '_update',

                /**
      @override
      @param {Object} opts
    */
                value: function _update(opts) {
                  if (opts.mask)
                    opts.validate = function (value) {
                      return value.search(opts.mask) >= 0;
                    };

                  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['g'])(
                    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__['f'])(
                      MaskedRegExp.prototype
                    ),
                    '_update',
                    this
                  ).call(this, opts);
                }
              }
            ]);

            return MaskedRegExp;
          })(_base_js__WEBPACK_IMPORTED_MODULE_5__['default']);
        _core_holder_js__WEBPACK_IMPORTED_MODULE_4__['default'].MaskedRegExp = MaskedRegExp;

        /* harmony default export */ __webpack_exports__['default'] = MaskedRegExp;

        /***/
      },

    /***/ './node_modules/jquery/dist/jquery.js':
      /*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * jQuery JavaScript Library v3.5.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2020-05-04T22:49Z
         */
        (function (global, factory) {
          'use strict';

          if (true && typeof module.exports === 'object') {
            // For CommonJS and CommonJS-like environments where a proper `window`
            // is present, execute the factory and get jQuery.
            // For environments that do not have a `window` with a `document`
            // (such as Node.js), expose a factory as module.exports.
            // This accentuates the need for the creation of a real `window`.
            // e.g. var jQuery = require("jquery")(window);
            // See ticket #14549 for more info.
            module.exports = global.document
              ? factory(global, true)
              : function (w) {
                  if (!w.document) {
                    throw new Error('jQuery requires a window with a document');
                  }
                  return factory(w);
                };
          } else {
            factory(global);
          }

          // Pass this if window is not defined yet
        })(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
          // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
          // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
          // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
          // enough that all such attempts are guarded in a try block.
          'use strict';

          var arr = [];

          var getProto = Object.getPrototypeOf;

          var slice = arr.slice;

          var flat = arr.flat
            ? function (array) {
                return arr.flat.call(array);
              }
            : function (array) {
                return arr.concat.apply([], array);
              };

          var push = arr.push;

          var indexOf = arr.indexOf;

          var class2type = {};

          var toString = class2type.toString;

          var hasOwn = class2type.hasOwnProperty;

          var fnToString = hasOwn.toString;

          var ObjectFunctionString = fnToString.call(Object);

          var support = {};

          var isFunction = function isFunction(obj) {
            // Support: Chrome <=57, Firefox <=52
            // In some browsers, typeof returns "function" for HTML <object> elements
            // (i.e., `typeof document.createElement( "object" ) === "function"`).
            // We don't want to classify *any* DOM node as a function.
            return typeof obj === 'function' && typeof obj.nodeType !== 'number';
          };

          var isWindow = function isWindow(obj) {
            return obj != null && obj === obj.window;
          };

          var document = window.document;

          var preservedScriptAttributes = {
            type: true,
            src: true,
            nonce: true,
            noModule: true
          };

          function DOMEval(code, node, doc) {
            doc = doc || document;

            var i,
              val,
              script = doc.createElement('script');

            script.text = code;
            if (node) {
              for (i in preservedScriptAttributes) {
                // Support: Firefox 64+, Edge 18+
                // Some browsers don't support the "nonce" property on scripts.
                // On the other hand, just using `getAttribute` is not enough as
                // the `nonce` attribute is reset to an empty string whenever it
                // becomes browsing-context connected.
                // See https://github.com/whatwg/html/issues/2369
                // See https://html.spec.whatwg.org/#nonce-attributes
                // The `node.getAttribute` check was added for the sake of
                // `jQuery.globalEval` so that it can fake a nonce-containing node
                // via an object.
                val = node[i] || (node.getAttribute && node.getAttribute(i));
                if (val) {
                  script.setAttribute(i, val);
                }
              }
            }
            doc.head.appendChild(script).parentNode.removeChild(script);
          }

          function toType(obj) {
            if (obj == null) {
              return obj + '';
            }

            // Support: Android <=2.3 only (functionish RegExp)
            return typeof obj === 'object' || typeof obj === 'function'
              ? class2type[toString.call(obj)] || 'object'
              : typeof obj;
          }
          /* global Symbol */
          // Defining this global in .eslintrc.json would create a danger of using the global
          // unguarded in another place, it seems safer to define global only for this module

          var version = '3.5.1',
            // Define a local copy of jQuery
            jQuery = function (selector, context) {
              // The jQuery object is actually just the init constructor 'enhanced'
              // Need init if jQuery is called (just allow error to be thrown if not included)
              return new jQuery.fn.init(selector, context);
            };

          jQuery.fn = jQuery.prototype = {
            // The current version of jQuery being used
            jquery: version,

            constructor: jQuery,

            // The default length of a jQuery object is 0
            length: 0,

            toArray: function () {
              return slice.call(this);
            },

            // Get the Nth element in the matched element set OR
            // Get the whole matched element set as a clean array
            get: function (num) {
              // Return all the elements in a clean array
              if (num == null) {
                return slice.call(this);
              }

              // Return just the one element from the set
              return num < 0 ? this[num + this.length] : this[num];
            },

            // Take an array of elements and push it onto the stack
            // (returning the new matched element set)
            pushStack: function (elems) {
              // Build a new jQuery matched element set
              var ret = jQuery.merge(this.constructor(), elems);

              // Add the old object onto the stack (as a reference)
              ret.prevObject = this;

              // Return the newly-formed element set
              return ret;
            },

            // Execute a callback for every element in the matched set.
            each: function (callback) {
              return jQuery.each(this, callback);
            },

            map: function (callback) {
              return this.pushStack(
                jQuery.map(this, function (elem, i) {
                  return callback.call(elem, i, elem);
                })
              );
            },

            slice: function () {
              return this.pushStack(slice.apply(this, arguments));
            },

            first: function () {
              return this.eq(0);
            },

            last: function () {
              return this.eq(-1);
            },

            even: function () {
              return this.pushStack(
                jQuery.grep(this, function (_elem, i) {
                  return (i + 1) % 2;
                })
              );
            },

            odd: function () {
              return this.pushStack(
                jQuery.grep(this, function (_elem, i) {
                  return i % 2;
                })
              );
            },

            eq: function (i) {
              var len = this.length,
                j = +i + (i < 0 ? len : 0);
              return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
            },

            end: function () {
              return this.prevObject || this.constructor();
            },

            // For internal use only.
            // Behaves like an Array's method, not like a jQuery method.
            push: push,
            sort: arr.sort,
            splice: arr.splice
          };

          jQuery.extend = jQuery.fn.extend = function () {
            var options,
              name,
              src,
              copy,
              copyIsArray,
              clone,
              target = arguments[0] || {},
              i = 1,
              length = arguments.length,
              deep = false;

            // Handle a deep copy situation
            if (typeof target === 'boolean') {
              deep = target;

              // Skip the boolean and the target
              target = arguments[i] || {};
              i++;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if (typeof target !== 'object' && !isFunction(target)) {
              target = {};
            }

            // Extend jQuery itself if only one argument is passed
            if (i === length) {
              target = this;
              i--;
            }

            for (; i < length; i++) {
              // Only deal with non-null/undefined values
              if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                  copy = options[name];

                  // Prevent Object.prototype pollution
                  // Prevent never-ending loop
                  if (name === '__proto__' || target === copy) {
                    continue;
                  }

                  // Recurse if we're merging plain objects or arrays
                  if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];

                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) {
                      clone = [];
                    } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                      clone = {};
                    } else {
                      clone = src;
                    }
                    copyIsArray = false;

                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);

                    // Don't bring in undefined values
                  } else if (copy !== undefined) {
                    target[name] = copy;
                  }
                }
              }
            }

            // Return the modified object
            return target;
          };

          jQuery.extend({
            // Unique for each copy of jQuery on the page
            expando: 'jQuery' + (version + Math.random()).replace(/\D/g, ''),

            // Assume jQuery is ready without the ready module
            isReady: true,

            error: function (msg) {
              throw new Error(msg);
            },

            noop: function () {},

            isPlainObject: function (obj) {
              var proto, Ctor;

              // Detect obvious negatives
              // Use toString instead of jQuery.type to catch host objects
              if (!obj || toString.call(obj) !== '[object Object]') {
                return false;
              }

              proto = getProto(obj);

              // Objects with no prototype (e.g., `Object.create( null )`) are plain
              if (!proto) {
                return true;
              }

              // Objects with prototype are plain iff they were constructed by a global Object function
              Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
              return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
            },

            isEmptyObject: function (obj) {
              var name;

              for (name in obj) {
                return false;
              }
              return true;
            },

            // Evaluates a script in a provided context; falls back to the global one
            // if not specified.
            globalEval: function (code, options, doc) {
              DOMEval(code, { nonce: options && options.nonce }, doc);
            },

            each: function (obj, callback) {
              var length,
                i = 0;

              if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                  if (callback.call(obj[i], i, obj[i]) === false) {
                    break;
                  }
                }
              } else {
                for (i in obj) {
                  if (callback.call(obj[i], i, obj[i]) === false) {
                    break;
                  }
                }
              }

              return obj;
            },

            // results is for internal usage only
            makeArray: function (arr, results) {
              var ret = results || [];

              if (arr != null) {
                if (isArrayLike(Object(arr))) {
                  jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
                } else {
                  push.call(ret, arr);
                }
              }

              return ret;
            },

            inArray: function (elem, arr, i) {
              return arr == null ? -1 : indexOf.call(arr, elem, i);
            },

            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            merge: function (first, second) {
              var len = +second.length,
                j = 0,
                i = first.length;

              for (; j < len; j++) {
                first[i++] = second[j];
              }

              first.length = i;

              return first;
            },

            grep: function (elems, callback, invert) {
              var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

              // Go through the array, only saving the items
              // that pass the validator function
              for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                  matches.push(elems[i]);
                }
              }

              return matches;
            },

            // arg is for internal usage only
            map: function (elems, callback, arg) {
              var length,
                value,
                i = 0,
                ret = [];

              // Go through the array, translating each of the items to their new values
              if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                  value = callback(elems[i], i, arg);

                  if (value != null) {
                    ret.push(value);
                  }
                }

                // Go through every key on the object,
              } else {
                for (i in elems) {
                  value = callback(elems[i], i, arg);

                  if (value != null) {
                    ret.push(value);
                  }
                }
              }

              // Flatten any nested arrays
              return flat(ret);
            },

            // A global GUID counter for objects
            guid: 1,

            // jQuery.support is not used in Core but other projects attach their
            // properties to it so it needs to exist.
            support: support
          });

          if (typeof Symbol === 'function') {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
          }

          // Populate the class2type map
          jQuery.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
            function (_i, name) {
              class2type['[object ' + name + ']'] = name.toLowerCase();
            }
          );

          function isArrayLike(obj) {
            // Support: real iOS 8.2 only (not reproducible in simulator)
            // `in` check used to prevent JIT error (gh-2145)
            // hasOwn isn't used here due to false negatives
            // regarding Nodelist length in IE
            var length = !!obj && 'length' in obj && obj.length,
              type = toType(obj);

            if (isFunction(obj) || isWindow(obj)) {
              return false;
            }

            return (
              type === 'array' ||
              length === 0 ||
              (typeof length === 'number' && length > 0 && length - 1 in obj)
            );
          }
          var Sizzle =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            (function (window) {
              var i,
                support,
                Expr,
                getText,
                isXML,
                tokenize,
                compile,
                select,
                outermostContext,
                sortInput,
                hasDuplicate,
                // Local document vars
                setDocument,
                document,
                docElem,
                documentIsHTML,
                rbuggyQSA,
                rbuggyMatches,
                matches,
                contains,
                // Instance-specific data
                expando = 'sizzle' + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                nonnativeSelectorCache = createCache(),
                sortOrder = function (a, b) {
                  if (a === b) {
                    hasDuplicate = true;
                  }
                  return 0;
                },
                // Instance methods
                hasOwn = {}.hasOwnProperty,
                arr = [],
                pop = arr.pop,
                pushNative = arr.push,
                push = arr.push,
                slice = arr.slice,
                // Use a stripped-down indexOf as it's faster than native
                // https://jsperf.com/thor-indexof-vs-for/5
                indexOf = function (list, elem) {
                  var i = 0,
                    len = list.length;
                  for (; i < len; i++) {
                    if (list[i] === elem) {
                      return i;
                    }
                  }
                  return -1;
                },
                booleans =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|' +
                  'ismap|loop|multiple|open|readonly|required|scoped',
                // Regular expressions

                // http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = '[\\x20\\t\\r\\n\\f]',
                // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
                identifier =
                  '(?:\\\\[\\da-fA-F]{1,6}' + whitespace + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes =
                  '\\[' +
                  whitespace +
                  '*(' +
                  identifier +
                  ')(?:' +
                  whitespace +
                  // Operator (capture 2)
                  '*([*^$|!~]?=)' +
                  whitespace +
                  // "Attribute values must be CSS identifiers [capture 5]
                  // or strings [capture 3 or capture 4]"
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  identifier +
                  '))|)' +
                  whitespace +
                  '*\\]',
                pseudos =
                  ':(' +
                  identifier +
                  ')(?:\\((' +
                  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                  // 1. quoted (capture 3; capture 4 or capture 5)
                  '(\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|' +
                  // 2. simple (capture 6)
                  '((?:\\\\.|[^\\\\()[\\]]|' +
                  attributes +
                  ')*)|' +
                  // 3. anything else (capture 2)
                  '.*' +
                  ')\\)|)',
                // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + '+', 'g'),
                rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$', 'g'),
                rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*'),
                rcombinators = new RegExp(
                  '^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace + '*'
                ),
                rdescend = new RegExp(whitespace + '|>'),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp('^' + identifier + '$'),
                matchExpr = {
                  ID: new RegExp('^#(' + identifier + ')'),
                  CLASS: new RegExp('^\\.(' + identifier + ')'),
                  TAG: new RegExp('^(' + identifier + '|[*])'),
                  ATTR: new RegExp('^' + attributes),
                  PSEUDO: new RegExp('^' + pseudos),
                  CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                      whitespace +
                      '*(even|odd|(([+-]|)(\\d*)n|)' +
                      whitespace +
                      '*(?:([+-]|)' +
                      whitespace +
                      '*(\\d+)|))' +
                      whitespace +
                      '*\\)|)',
                    'i'
                  ),
                  bool: new RegExp('^(?:' + booleans + ')$', 'i'),

                  // For use in libraries implementing .is()
                  // We use this for POS matching in `select`
                  needsContext: new RegExp(
                    '^' +
                      whitespace +
                      '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                      whitespace +
                      '*((?:-\\d)?\\d*)' +
                      whitespace +
                      '*\\)|)(?=[^-]|$)',
                    'i'
                  )
                },
                rhtml = /HTML$/i,
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rnative = /^[^{]+\{\s*\[native \w/,
                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rsibling = /[+~]/,
                // CSS escapes
                // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp('\\\\[\\da-fA-F]{1,6}' + whitespace + '?|\\\\([^\\r\\n\\f])', 'g'),
                funescape = function (escape, nonHex) {
                  var high = '0x' + escape.slice(1) - 0x10000;

                  return nonHex
                    ? // Strip the backslash prefix from a non-hex escape sequence
                      nonHex
                    : // Replace a hexadecimal escape sequence with the encoded Unicode code point
                    // Support: IE <=11+
                    // For values outside the Basic Multilingual Plane (BMP), manually construct a
                    // surrogate pair
                    high < 0
                    ? String.fromCharCode(high + 0x10000)
                    : String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
                },
                // CSS string/identifier serialization
                // https://drafts.csswg.org/cssom/#common-serializing-idioms
                rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fcssescape = function (ch, asCodePoint) {
                  if (asCodePoint) {
                    // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                    if (ch === '\0') {
                      return '\uFFFD';
                    }

                    // Control characters and (dependent upon position) numbers get escaped as code points
                    return ch.slice(0, -1) + '\\' + ch.charCodeAt(ch.length - 1).toString(16) + ' ';
                  }

                  // Other potentially-special ASCII characters get backslash-escaped
                  return '\\' + ch;
                },
                // Used for iframes
                // See setDocument()
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE
                unloadHandler = function () {
                  setDocument();
                },
                inDisabledFieldset = addCombinator(
                  function (elem) {
                    return elem.disabled === true && elem.nodeName.toLowerCase() === 'fieldset';
                  },
                  { dir: 'parentNode', next: 'legend' }
                );

              // Optimize for push.apply( _, NodeList )
              try {
                push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);

                // Support: Android<4.0
                // Detect silently failing push.apply
                // eslint-disable-next-line no-unused-expressions
                arr[preferredDoc.childNodes.length].nodeType;
              } catch (e) {
                push = {
                  apply: arr.length
                    ? // Leverage slice if possible
                      function (target, els) {
                        pushNative.apply(target, slice.call(els));
                      }
                    : // Support: IE<9
                      // Otherwise append directly
                      function (target, els) {
                        var j = target.length,
                          i = 0;

                        // Can't trust NodeList.length
                        while ((target[j++] = els[i++])) {}
                        target.length = j - 1;
                      }
                };
              }

              function Sizzle(selector, context, results, seed) {
                var m,
                  i,
                  elem,
                  nid,
                  match,
                  groups,
                  newSelector,
                  newContext = context && context.ownerDocument,
                  // nodeType defaults to 9, since context defaults to document
                  nodeType = context ? context.nodeType : 9;

                results = results || [];

                // Return early from calls with invalid selector or context
                if (
                  typeof selector !== 'string' ||
                  !selector ||
                  (nodeType !== 1 && nodeType !== 9 && nodeType !== 11)
                ) {
                  return results;
                }

                // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {
                  setDocument(context);
                  context = context || document;

                  if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                      // ID selector
                      if ((m = match[1])) {
                        // Document context
                        if (nodeType === 9) {
                          if ((elem = context.getElementById(m))) {
                            // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (elem.id === m) {
                              results.push(elem);
                              return results;
                            }
                          } else {
                            return results;
                          }

                          // Element context
                        } else {
                          // Support: IE, Opera, Webkit
                          // TODO: identify versions
                          // getElementById can match elements by name instead of ID
                          if (
                            newContext &&
                            (elem = newContext.getElementById(m)) &&
                            contains(context, elem) &&
                            elem.id === m
                          ) {
                            results.push(elem);
                            return results;
                          }
                        }

                        // Type selector
                      } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;

                        // Class selector
                      } else if (
                        (m = match[3]) &&
                        support.getElementsByClassName &&
                        context.getElementsByClassName
                      ) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                      }
                    }

                    // Take advantage of querySelectorAll
                    if (
                      support.qsa &&
                      !nonnativeSelectorCache[selector + ' '] &&
                      (!rbuggyQSA || !rbuggyQSA.test(selector)) &&
                      // Support: IE 8 only
                      // Exclude object elements
                      (nodeType !== 1 || context.nodeName.toLowerCase() !== 'object')
                    ) {
                      newSelector = selector;
                      newContext = context;

                      // qSA considers elements outside a scoping root when evaluating child or
                      // descendant combinators, which is not what we want.
                      // In such cases, we work around the behavior by prefixing every selector in the
                      // list with an ID selector referencing the scope context.
                      // The technique has to be used as well when a leading combinator is used
                      // as such selectors are not recognized by querySelectorAll.
                      // Thanks to Andrew Dupont for this technique.
                      if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                        // Expand context for sibling selectors
                        newContext = (rsibling.test(selector) && testContext(context.parentNode)) || context;

                        // We can use :scope instead of the ID hack if the browser
                        // supports it & if we're not changing the context.
                        if (newContext !== context || !support.scope) {
                          // Capture the context ID, setting it first if necessary
                          if ((nid = context.getAttribute('id'))) {
                            nid = nid.replace(rcssescape, fcssescape);
                          } else {
                            context.setAttribute('id', (nid = expando));
                          }
                        }

                        // Prefix every selector in the list
                        groups = tokenize(selector);
                        i = groups.length;
                        while (i--) {
                          groups[i] = (nid ? '#' + nid : ':scope') + ' ' + toSelector(groups[i]);
                        }
                        newSelector = groups.join(',');
                      }

                      try {
                        push.apply(results, newContext.querySelectorAll(newSelector));
                        return results;
                      } catch (qsaError) {
                        nonnativeSelectorCache(selector, true);
                      } finally {
                        if (nid === expando) {
                          context.removeAttribute('id');
                        }
                      }
                    }
                  }
                }

                // All others
                return select(selector.replace(rtrim, '$1'), context, results, seed);
              }

              /**
               * Create key-value caches of limited size
               * @returns {function(string, object)} Returns the Object data after storing it on itself with
               *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
               *	deleting the oldest entry
               */
              function createCache() {
                var keys = [];

                function cache(key, value) {
                  // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                  if (keys.push(key + ' ') > Expr.cacheLength) {
                    // Only keep the most recent entries
                    delete cache[keys.shift()];
                  }
                  return (cache[key + ' '] = value);
                }
                return cache;
              }

              /**
               * Mark a function for special use by Sizzle
               * @param {Function} fn The function to mark
               */
              function markFunction(fn) {
                fn[expando] = true;
                return fn;
              }

              /**
               * Support testing using an element
               * @param {Function} fn Passed the created element and returns a boolean result
               */
              function assert(fn) {
                var el = document.createElement('fieldset');

                try {
                  return !!fn(el);
                } catch (e) {
                  return false;
                } finally {
                  // Remove from its parent by default
                  if (el.parentNode) {
                    el.parentNode.removeChild(el);
                  }

                  // release memory in IE
                  el = null;
                }
              }

              /**
               * Adds the same handler for all of the specified attrs
               * @param {String} attrs Pipe-separated list of attributes
               * @param {Function} handler The method that will be applied
               */
              function addHandle(attrs, handler) {
                var arr = attrs.split('|'),
                  i = arr.length;

                while (i--) {
                  Expr.attrHandle[arr[i]] = handler;
                }
              }

              /**
               * Checks document order of two siblings
               * @param {Element} a
               * @param {Element} b
               * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
               */
              function siblingCheck(a, b) {
                var cur = b && a,
                  diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

                // Use IE sourceIndex if available on both nodes
                if (diff) {
                  return diff;
                }

                // Check if b follows a
                if (cur) {
                  while ((cur = cur.nextSibling)) {
                    if (cur === b) {
                      return -1;
                    }
                  }
                }

                return a ? 1 : -1;
              }

              /**
               * Returns a function to use in pseudos for input types
               * @param {String} type
               */
              function createInputPseudo(type) {
                return function (elem) {
                  var name = elem.nodeName.toLowerCase();
                  return name === 'input' && elem.type === type;
                };
              }

              /**
               * Returns a function to use in pseudos for buttons
               * @param {String} type
               */
              function createButtonPseudo(type) {
                return function (elem) {
                  var name = elem.nodeName.toLowerCase();
                  return (name === 'input' || name === 'button') && elem.type === type;
                };
              }

              /**
               * Returns a function to use in pseudos for :enabled/:disabled
               * @param {Boolean} disabled true for :disabled; false for :enabled
               */
              function createDisabledPseudo(disabled) {
                // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                return function (elem) {
                  // Only certain elements can match :enabled or :disabled
                  // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                  // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                  if ('form' in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                      // Option elements defer to a parent optgroup if present
                      if ('label' in elem) {
                        if ('label' in elem.parentNode) {
                          return elem.parentNode.disabled === disabled;
                        } else {
                          return elem.disabled === disabled;
                        }
                      }

                      // Support: IE 6 - 11
                      // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                      return (
                        elem.isDisabled === disabled ||
                        // Where there is no isDisabled, check manually
                        /* jshint -W018 */
                        (elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled)
                      );
                    }

                    return elem.disabled === disabled;

                    // Try to winnow out elements that can't be disabled before trusting the disabled property.
                    // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                    // even exist on them, let alone have a boolean value.
                  } else if ('label' in elem) {
                    return elem.disabled === disabled;
                  }

                  // Remaining elements are neither :enabled nor :disabled
                  return false;
                };
              }

              /**
               * Returns a function to use in pseudos for positionals
               * @param {Function} fn
               */
              function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                  argument = +argument;
                  return markFunction(function (seed, matches) {
                    var j,
                      matchIndexes = fn([], seed.length, argument),
                      i = matchIndexes.length;

                    // Match elements found at the specified indexes
                    while (i--) {
                      if (seed[(j = matchIndexes[i])]) {
                        seed[j] = !(matches[j] = seed[j]);
                      }
                    }
                  });
                });
              }

              /**
               * Checks a node for validity as a Sizzle context
               * @param {Element|Object=} context
               * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
               */
              function testContext(context) {
                return context && typeof context.getElementsByTagName !== 'undefined' && context;
              }

              // Expose support vars for convenience
              support = Sizzle.support = {};

              /**
               * Detects XML nodes
               * @param {Element|Object} elem An element or a document
               * @returns {Boolean} True iff elem is a non-HTML XML node
               */
              isXML = Sizzle.isXML = function (elem) {
                var namespace = elem.namespaceURI,
                  docElem = (elem.ownerDocument || elem).documentElement;

                // Support: IE <=8
                // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
                // https://bugs.jquery.com/ticket/4833
                return !rhtml.test(namespace || (docElem && docElem.nodeName) || 'HTML');
              };

              /**
               * Sets document-related variables once based on the current document
               * @param {Element|Object} [doc] An element or document object to use to set the document
               * @returns {Object} Returns the current document
               */
              setDocument = Sizzle.setDocument = function (node) {
                var hasCompare,
                  subWindow,
                  doc = node ? node.ownerDocument || node : preferredDoc;

                // Return early if doc is invalid or already selected
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
                  return document;
                }

                // Update global variables
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);

                // Support: IE 9 - 11+, Edge 12 - 18+
                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if (
                  preferredDoc != document &&
                  (subWindow = document.defaultView) &&
                  subWindow.top !== subWindow
                ) {
                  // Support: IE 11, Edge
                  if (subWindow.addEventListener) {
                    subWindow.addEventListener('unload', unloadHandler, false);

                    // Support: IE 9 - 10 only
                  } else if (subWindow.attachEvent) {
                    subWindow.attachEvent('onunload', unloadHandler);
                  }
                }

                // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
                // Safari 4 - 5 only, Opera <=11.6 - 12.x only
                // IE/Edge & older browsers don't support the :scope pseudo-class.
                // Support: Safari 6.0 only
                // Safari 6.0 supports :scope but it's an alias of :root there.
                support.scope = assert(function (el) {
                  docElem.appendChild(el).appendChild(document.createElement('div'));
                  return (
                    typeof el.querySelectorAll !== 'undefined' &&
                    !el.querySelectorAll(':scope fieldset div').length
                  );
                });

                /* Attributes
	---------------------------------------------------------------------- */

                // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function (el) {
                  el.className = 'i';
                  return !el.getAttribute('className');
                });

                /* getElement(s)By*
	---------------------------------------------------------------------- */

                // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function (el) {
                  el.appendChild(document.createComment(''));
                  return !el.getElementsByTagName('*').length;
                });

                // Support: IE<9
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);

                // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programmatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function (el) {
                  docElem.appendChild(el).id = expando;
                  return !document.getElementsByName || !document.getElementsByName(expando).length;
                });

                // ID filter and find
                if (support.getById) {
                  Expr.filter['ID'] = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                      return elem.getAttribute('id') === attrId;
                    };
                  };
                  Expr.find['ID'] = function (id, context) {
                    if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
                      var elem = context.getElementById(id);
                      return elem ? [elem] : [];
                    }
                  };
                } else {
                  Expr.filter['ID'] = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                      var node = typeof elem.getAttributeNode !== 'undefined' && elem.getAttributeNode('id');
                      return node && node.value === attrId;
                    };
                  };

                  // Support: IE 6 - 7 only
                  // getElementById is not reliable as a find shortcut
                  Expr.find['ID'] = function (id, context) {
                    if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
                      var node,
                        i,
                        elems,
                        elem = context.getElementById(id);

                      if (elem) {
                        // Verify the id attribute
                        node = elem.getAttributeNode('id');
                        if (node && node.value === id) {
                          return [elem];
                        }

                        // Fall back on getElementsByName
                        elems = context.getElementsByName(id);
                        i = 0;
                        while ((elem = elems[i++])) {
                          node = elem.getAttributeNode('id');
                          if (node && node.value === id) {
                            return [elem];
                          }
                        }
                      }

                      return [];
                    }
                  };
                }

                // Tag
                Expr.find['TAG'] = support.getElementsByTagName
                  ? function (tag, context) {
                      if (typeof context.getElementsByTagName !== 'undefined') {
                        return context.getElementsByTagName(tag);

                        // DocumentFragment nodes don't have gEBTN
                      } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                      }
                    }
                  : function (tag, context) {
                      var elem,
                        tmp = [],
                        i = 0,
                        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                        results = context.getElementsByTagName(tag);

                      // Filter out possible comments
                      if (tag === '*') {
                        while ((elem = results[i++])) {
                          if (elem.nodeType === 1) {
                            tmp.push(elem);
                          }
                        }

                        return tmp;
                      }
                      return results;
                    };

                // Class
                Expr.find['CLASS'] =
                  support.getElementsByClassName &&
                  function (className, context) {
                    if (typeof context.getElementsByClassName !== 'undefined' && documentIsHTML) {
                      return context.getElementsByClassName(className);
                    }
                  };

                /* QSA/matchesSelector
	---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = [];

                // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See https://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];

                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                  // Build QSA regex
                  // Regex strategy adopted from Diego Perini
                  assert(function (el) {
                    var input;

                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // https://bugs.jquery.com/ticket/12359
                    docElem.appendChild(el).innerHTML =
                      "<a id='" +
                      expando +
                      "'></a>" +
                      "<select id='" +
                      expando +
                      "-\r\\' msallowcapture=''>" +
                      "<option selected=''></option></select>";

                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (el.querySelectorAll("[msallowcapture^='']").length) {
                      rbuggyQSA.push('[*^$]=' + whitespace + '*(?:\'\'|"")');
                    }

                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!el.querySelectorAll('[selected]').length) {
                      rbuggyQSA.push('\\[' + whitespace + '*(?:value|' + booleans + ')');
                    }

                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!el.querySelectorAll('[id~=' + expando + '-]').length) {
                      rbuggyQSA.push('~=');
                    }

                    // Support: IE 11+, Edge 15 - 18+
                    // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                    // Adding a temporary attribute to the document before the selection works
                    // around the issue.
                    // Interestingly, IE 10 & older don't seem to have the issue.
                    input = document.createElement('input');
                    input.setAttribute('name', '');
                    el.appendChild(input);
                    if (!el.querySelectorAll("[name='']").length) {
                      rbuggyQSA.push(
                        '\\[' + whitespace + '*name' + whitespace + '*=' + whitespace + '*(?:\'\'|"")'
                      );
                    }

                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!el.querySelectorAll(':checked').length) {
                      rbuggyQSA.push(':checked');
                    }

                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibling-combinator selector` fails
                    if (!el.querySelectorAll('a#' + expando + '+*').length) {
                      rbuggyQSA.push('.#.+[+~]');
                    }

                    // Support: Firefox <=3.6 - 5 only
                    // Old Firefox doesn't throw on a badly-escaped identifier.
                    el.querySelectorAll('\\\f');
                    rbuggyQSA.push('[\\r\\n\\f]');
                  });

                  assert(function (el) {
                    el.innerHTML =
                      "<a href='' disabled='disabled'></a>" +
                      "<select disabled='disabled'><option/></select>";

                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    el.appendChild(input).setAttribute('name', 'D');

                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (el.querySelectorAll('[name=d]').length) {
                      rbuggyQSA.push('name' + whitespace + '*[*^$|!~]?=');
                    }

                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (el.querySelectorAll(':enabled').length !== 2) {
                      rbuggyQSA.push(':enabled', ':disabled');
                    }

                    // Support: IE9-11+
                    // IE's :disabled selector does not pick up the children of disabled fieldsets
                    docElem.appendChild(el).disabled = true;
                    if (el.querySelectorAll(':disabled').length !== 2) {
                      rbuggyQSA.push(':enabled', ':disabled');
                    }

                    // Support: Opera 10 - 11 only
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    el.querySelectorAll('*,:x');
                    rbuggyQSA.push(',.*:');
                  });
                }

                if (
                  (support.matchesSelector = rnative.test(
                    (matches =
                      docElem.matches ||
                      docElem.webkitMatchesSelector ||
                      docElem.mozMatchesSelector ||
                      docElem.oMatchesSelector ||
                      docElem.msMatchesSelector)
                  ))
                ) {
                  assert(function (el) {
                    // Check to see if it's possible to do matchesSelector
                    // on a disconnected node (IE 9)
                    support.disconnectedMatch = matches.call(el, '*');

                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    matches.call(el, "[s!='']:x");
                    rbuggyMatches.push('!=', pseudos);
                  });
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|'));

                /* Contains
	---------------------------------------------------------------------- */
                hasCompare = rnative.test(docElem.compareDocumentPosition);

                // Element contains another
                // Purposefully self-exclusive
                // As in, an element does not contain itself
                contains =
                  hasCompare || rnative.test(docElem.contains)
                    ? function (a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                          bup = b && b.parentNode;
                        return (
                          a === bup ||
                          !!(
                            bup &&
                            bup.nodeType === 1 &&
                            (adown.contains
                              ? adown.contains(bup)
                              : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16)
                          )
                        );
                      }
                    : function (a, b) {
                        if (b) {
                          while ((b = b.parentNode)) {
                            if (b === a) {
                              return true;
                            }
                          }
                        }
                        return false;
                      };

                /* Sorting
	---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = hasCompare
                  ? function (a, b) {
                      // Flag for duplicate removal
                      if (a === b) {
                        hasDuplicate = true;
                        return 0;
                      }

                      // Sort on method existence if only one input has compareDocumentPosition
                      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                      if (compare) {
                        return compare;
                      }

                      // Calculate position if both inputs belong to the same document
                      // Support: IE 11+, Edge 17 - 18+
                      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                      // two documents; shallow comparisons work.
                      // eslint-disable-next-line eqeqeq
                      compare =
                        (a.ownerDocument || a) == (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : // Otherwise we know they are disconnected
                            1;

                      // Disconnected nodes
                      if (
                        compare & 1 ||
                        (!support.sortDetached && b.compareDocumentPosition(a) === compare)
                      ) {
                        // Choose the first element that is related to our preferred document
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (a == document || (a.ownerDocument == preferredDoc && contains(preferredDoc, a))) {
                          return -1;
                        }

                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (b == document || (b.ownerDocument == preferredDoc && contains(preferredDoc, b))) {
                          return 1;
                        }

                        // Maintain original order
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                      }

                      return compare & 4 ? -1 : 1;
                    }
                  : function (a, b) {
                      // Exit early if the nodes are identical
                      if (a === b) {
                        hasDuplicate = true;
                        return 0;
                      }

                      var cur,
                        i = 0,
                        aup = a.parentNode,
                        bup = b.parentNode,
                        ap = [a],
                        bp = [b];

                      // Parentless nodes are either documents or disconnected
                      if (!aup || !bup) {
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        /* eslint-disable eqeqeq */
                        return a == document
                          ? -1
                          : b == document
                          ? 1
                          : /* eslint-enable eqeqeq */
                          aup
                          ? -1
                          : bup
                          ? 1
                          : sortInput
                          ? indexOf(sortInput, a) - indexOf(sortInput, b)
                          : 0;

                        // If the nodes are siblings, we can do a quick check
                      } else if (aup === bup) {
                        return siblingCheck(a, b);
                      }

                      // Otherwise we need full lists of their ancestors for comparison
                      cur = a;
                      while ((cur = cur.parentNode)) {
                        ap.unshift(cur);
                      }
                      cur = b;
                      while ((cur = cur.parentNode)) {
                        bp.unshift(cur);
                      }

                      // Walk down the tree looking for a discrepancy
                      while (ap[i] === bp[i]) {
                        i++;
                      }

                      return i
                        ? // Do a sibling check if the nodes have a common ancestor
                          siblingCheck(ap[i], bp[i])
                        : // Otherwise nodes in our document sort first
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        /* eslint-disable eqeqeq */
                        ap[i] == preferredDoc
                        ? -1
                        : bp[i] == preferredDoc
                        ? 1
                        : /* eslint-enable eqeqeq */
                          0;
                    };

                return document;
              };

              Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements);
              };

              Sizzle.matchesSelector = function (elem, expr) {
                setDocument(elem);

                if (
                  support.matchesSelector &&
                  documentIsHTML &&
                  !nonnativeSelectorCache[expr + ' '] &&
                  (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                  (!rbuggyQSA || !rbuggyQSA.test(expr))
                ) {
                  try {
                    var ret = matches.call(elem, expr);

                    // IE 9's matchesSelector returns false on disconnected nodes
                    if (
                      ret ||
                      support.disconnectedMatch ||
                      // As well, disconnected nodes are said to be in a document
                      // fragment in IE 9
                      (elem.document && elem.document.nodeType !== 11)
                    ) {
                      return ret;
                    }
                  } catch (e) {
                    nonnativeSelectorCache(expr, true);
                  }
                }

                return Sizzle(expr, document, null, [elem]).length > 0;
              };

              Sizzle.contains = function (context, elem) {
                // Set document vars if needed
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if ((context.ownerDocument || context) != document) {
                  setDocument(context);
                }
                return contains(context, elem);
              };

              Sizzle.attr = function (elem, name) {
                // Set document vars if needed
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if ((elem.ownerDocument || elem) != document) {
                  setDocument(elem);
                }

                var fn = Expr.attrHandle[name.toLowerCase()],
                  // Don't get fooled by Object.prototype properties (jQuery #13807)
                  val =
                    fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                      ? fn(elem, name, !documentIsHTML)
                      : undefined;

                return val !== undefined
                  ? val
                  : support.attributes || !documentIsHTML
                  ? elem.getAttribute(name)
                  : (val = elem.getAttributeNode(name)) && val.specified
                  ? val.value
                  : null;
              };

              Sizzle.escape = function (sel) {
                return (sel + '').replace(rcssescape, fcssescape);
              };

              Sizzle.error = function (msg) {
                throw new Error('Syntax error, unrecognized expression: ' + msg);
              };

              /**
               * Document sorting and removing duplicates
               * @param {ArrayLike} results
               */
              Sizzle.uniqueSort = function (results) {
                var elem,
                  duplicates = [],
                  j = 0,
                  i = 0;

                // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);

                if (hasDuplicate) {
                  while ((elem = results[i++])) {
                    if (elem === results[i]) {
                      j = duplicates.push(i);
                    }
                  }
                  while (j--) {
                    results.splice(duplicates[j], 1);
                  }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;

                return results;
              };

              /**
               * Utility function for retrieving the text value of an array of DOM nodes
               * @param {Array|Element} elem
               */
              getText = Sizzle.getText = function (elem) {
                var node,
                  ret = '',
                  i = 0,
                  nodeType = elem.nodeType;

                if (!nodeType) {
                  // If no nodeType, this is expected to be an array
                  while ((node = elem[i++])) {
                    // Do not traverse comment nodes
                    ret += getText(node);
                  }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                  // Use textContent for elements
                  // innerText usage removed for consistency of new lines (jQuery #11153)
                  if (typeof elem.textContent === 'string') {
                    return elem.textContent;
                  } else {
                    // Traverse its children
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                      ret += getText(elem);
                    }
                  }
                } else if (nodeType === 3 || nodeType === 4) {
                  return elem.nodeValue;
                }

                // Do not include comment or processing instruction nodes

                return ret;
              };

              Expr = Sizzle.selectors = {
                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                  '>': { dir: 'parentNode', first: true },
                  ' ': { dir: 'parentNode' },
                  '+': { dir: 'previousSibling', first: true },
                  '~': { dir: 'previousSibling' }
                },

                preFilter: {
                  ATTR: function (match) {
                    match[1] = match[1].replace(runescape, funescape);

                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || '').replace(runescape, funescape);

                    if (match[2] === '~=') {
                      match[3] = ' ' + match[3] + ' ';
                    }

                    return match.slice(0, 4);
                  },

                  CHILD: function (match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                    match[1] = match[1].toLowerCase();

                    if (match[1].slice(0, 3) === 'nth') {
                      // nth-* requires argument
                      if (!match[3]) {
                        Sizzle.error(match[0]);
                      }

                      // numeric x and y parameters for Expr.filter.CHILD
                      // remember that false/true cast respectively to 0/1
                      match[4] = +(match[4]
                        ? match[5] + (match[6] || 1)
                        : 2 * (match[3] === 'even' || match[3] === 'odd'));
                      match[5] = +(match[7] + match[8] || match[3] === 'odd');

                      // other types prohibit arguments
                    } else if (match[3]) {
                      Sizzle.error(match[0]);
                    }

                    return match;
                  },

                  PSEUDO: function (match) {
                    var excess,
                      unquoted = !match[6] && match[2];

                    if (matchExpr['CHILD'].test(match[0])) {
                      return null;
                    }

                    // Accept quoted arguments as-is
                    if (match[3]) {
                      match[2] = match[4] || match[5] || '';

                      // Strip excess characters from unquoted arguments
                    } else if (
                      unquoted &&
                      rpseudo.test(unquoted) &&
                      // Get excess from tokenize (recursively)
                      (excess = tokenize(unquoted, true)) &&
                      // advance to the next closing parenthesis
                      (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)
                    ) {
                      // excess is a negative index
                      match[0] = match[0].slice(0, excess);
                      match[2] = unquoted.slice(0, excess);
                    }

                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                  }
                },

                filter: {
                  TAG: function (nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === '*'
                      ? function () {
                          return true;
                        }
                      : function (elem) {
                          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                  },

                  CLASS: function (className) {
                    var pattern = classCache[className + ' '];

                    return (
                      pattern ||
                      ((pattern = new RegExp(
                        '(^|' + whitespace + ')' + className + '(' + whitespace + '|$)'
                      )) &&
                        classCache(className, function (elem) {
                          return pattern.test(
                            (typeof elem.className === 'string' && elem.className) ||
                              (typeof elem.getAttribute !== 'undefined' && elem.getAttribute('class')) ||
                              ''
                          );
                        }))
                    );
                  },

                  ATTR: function (name, operator, check) {
                    return function (elem) {
                      var result = Sizzle.attr(elem, name);

                      if (result == null) {
                        return operator === '!=';
                      }
                      if (!operator) {
                        return true;
                      }

                      result += '';

                      /* eslint-disable max-len */

                      return operator === '='
                        ? result === check
                        : operator === '!='
                        ? result !== check
                        : operator === '^='
                        ? check && result.indexOf(check) === 0
                        : operator === '*='
                        ? check && result.indexOf(check) > -1
                        : operator === '$='
                        ? check && result.slice(-check.length) === check
                        : operator === '~='
                        ? (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) > -1
                        : operator === '|='
                        ? result === check || result.slice(0, check.length + 1) === check + '-'
                        : false;
                      /* eslint-enable max-len */
                    };
                  },

                  CHILD: function (type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== 'nth',
                      forward = type.slice(-4) !== 'last',
                      ofType = what === 'of-type';

                    return first === 1 && last === 0
                      ? // Shortcut for :nth-*(n)
                        function (elem) {
                          return !!elem.parentNode;
                        }
                      : function (elem, _context, xml) {
                          var cache,
                            uniqueCache,
                            outerCache,
                            node,
                            nodeIndex,
                            start,
                            dir = simple !== forward ? 'nextSibling' : 'previousSibling',
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            diff = false;

                          if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                              while (dir) {
                                node = elem;
                                while ((node = node[dir])) {
                                  if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                    return false;
                                  }
                                }

                                // Reverse direction for :only-* (if we haven't yet done so)
                                start = dir = type === 'only' && !start && 'nextSibling';
                              }
                              return true;
                            }

                            start = [forward ? parent.firstChild : parent.lastChild];

                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                              // Seek `elem` from a previously-cached index

                              // ...in a gzip-friendly way
                              node = parent;
                              outerCache = node[expando] || (node[expando] = {});

                              // Support: IE <9 only
                              // Defend against cloned attroperties (jQuery gh-1709)
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

                              cache = uniqueCache[type] || [];
                              nodeIndex = cache[0] === dirruns && cache[1];
                              diff = nodeIndex && cache[2];
                              node = nodeIndex && parent.childNodes[nodeIndex];

                              while (
                                (node =
                                  (++nodeIndex && node && node[dir]) ||
                                  // Fallback to seeking `elem` from the start
                                  (diff = nodeIndex = 0) ||
                                  start.pop())
                              ) {
                                // When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                  uniqueCache[type] = [dirruns, nodeIndex, diff];
                                  break;
                                }
                              }
                            } else {
                              // Use previously-cached element index if available
                              if (useCache) {
                                // ...in a gzip-friendly way
                                node = elem;
                                outerCache = node[expando] || (node[expando] = {});

                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex;
                              }

                              // xml :nth-child(...)
                              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                              if (diff === false) {
                                // Use the same loop as above to seek `elem` from the start
                                while (
                                  (node =
                                    (++nodeIndex && node && node[dir]) ||
                                    (diff = nodeIndex = 0) ||
                                    start.pop())
                                ) {
                                  if (
                                    (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) &&
                                    ++diff
                                  ) {
                                    // Cache the index of each encountered element
                                    if (useCache) {
                                      outerCache = node[expando] || (node[expando] = {});

                                      // Support: IE <9 only
                                      // Defend against cloned attroperties (jQuery gh-1709)
                                      uniqueCache =
                                        outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

                                      uniqueCache[type] = [dirruns, diff];
                                    }

                                    if (node === elem) {
                                      break;
                                    }
                                  }
                                }
                              }
                            }

                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || (diff % first === 0 && diff / first >= 0);
                          }
                        };
                  },

                  PSEUDO: function (pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args,
                      fn =
                        Expr.pseudos[pseudo] ||
                        Expr.setFilters[pseudo.toLowerCase()] ||
                        Sizzle.error('unsupported pseudo: ' + pseudo);

                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) {
                      return fn(argument);
                    }

                    // But maintain support for old signatures
                    if (fn.length > 1) {
                      args = [pseudo, pseudo, '', argument];
                      return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                        ? markFunction(function (seed, matches) {
                            var idx,
                              matched = fn(seed, argument),
                              i = matched.length;
                            while (i--) {
                              idx = indexOf(seed, matched[i]);
                              seed[idx] = !(matches[idx] = matched[i]);
                            }
                          })
                        : function (elem) {
                            return fn(elem, 0, args);
                          };
                    }

                    return fn;
                  }
                },

                pseudos: {
                  // Potentially complex pseudos
                  not: markFunction(function (selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [],
                      results = [],
                      matcher = compile(selector.replace(rtrim, '$1'));

                    return matcher[expando]
                      ? markFunction(function (seed, matches, _context, xml) {
                          var elem,
                            unmatched = matcher(seed, null, xml, []),
                            i = seed.length;

                          // Match elements unmatched by `matcher`
                          while (i--) {
                            if ((elem = unmatched[i])) {
                              seed[i] = !(matches[i] = elem);
                            }
                          }
                        })
                      : function (elem, _context, xml) {
                          input[0] = elem;
                          matcher(input, null, xml, results);

                          // Don't keep the element (issue #299)
                          input[0] = null;
                          return !results.pop();
                        };
                  }),

                  has: markFunction(function (selector) {
                    return function (elem) {
                      return Sizzle(selector, elem).length > 0;
                    };
                  }),

                  contains: markFunction(function (text) {
                    text = text.replace(runescape, funescape);
                    return function (elem) {
                      return (elem.textContent || getText(elem)).indexOf(text) > -1;
                    };
                  }),

                  // "Whether an element is represented by a :lang() selector
                  // is based solely on the element's language value
                  // being equal to the identifier C,
                  // or beginning with the identifier C immediately followed by "-".
                  // The matching of C against the element's language value is performed case-insensitively.
                  // The identifier C does not have to be a valid language name."
                  // http://www.w3.org/TR/selectors/#lang-pseudo
                  lang: markFunction(function (lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || '')) {
                      Sizzle.error('unsupported lang: ' + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function (elem) {
                      var elemLang;
                      do {
                        if (
                          (elemLang = documentIsHTML
                            ? elem.lang
                            : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))
                        ) {
                          elemLang = elemLang.toLowerCase();
                          return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
                        }
                      } while ((elem = elem.parentNode) && elem.nodeType === 1);
                      return false;
                    };
                  }),

                  // Miscellaneous
                  target: function (elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                  },

                  root: function (elem) {
                    return elem === docElem;
                  },

                  focus: function (elem) {
                    return (
                      elem === document.activeElement &&
                      (!document.hasFocus || document.hasFocus()) &&
                      !!(elem.type || elem.href || ~elem.tabIndex)
                    );
                  },

                  // Boolean properties
                  enabled: createDisabledPseudo(false),
                  disabled: createDisabledPseudo(true),

                  checked: function (elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return (
                      (nodeName === 'input' && !!elem.checked) || (nodeName === 'option' && !!elem.selected)
                    );
                  },

                  selected: function (elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) {
                      // eslint-disable-next-line no-unused-expressions
                      elem.parentNode.selectedIndex;
                    }

                    return elem.selected === true;
                  },

                  // Contents
                  empty: function (elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                      if (elem.nodeType < 6) {
                        return false;
                      }
                    }
                    return true;
                  },

                  parent: function (elem) {
                    return !Expr.pseudos['empty'](elem);
                  },

                  // Element/input types
                  header: function (elem) {
                    return rheader.test(elem.nodeName);
                  },

                  input: function (elem) {
                    return rinputs.test(elem.nodeName);
                  },

                  button: function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === 'input' && elem.type === 'button') || name === 'button';
                  },

                  text: function (elem) {
                    var attr;
                    return (
                      elem.nodeName.toLowerCase() === 'input' &&
                      elem.type === 'text' &&
                      // Support: IE<8
                      // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                      ((attr = elem.getAttribute('type')) == null || attr.toLowerCase() === 'text')
                    );
                  },

                  // Position-in-collection
                  first: createPositionalPseudo(function () {
                    return [0];
                  }),

                  last: createPositionalPseudo(function (_matchIndexes, length) {
                    return [length - 1];
                  }),

                  eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
                    return [argument < 0 ? argument + length : argument];
                  }),

                  even: createPositionalPseudo(function (matchIndexes, length) {
                    var i = 0;
                    for (; i < length; i += 2) {
                      matchIndexes.push(i);
                    }
                    return matchIndexes;
                  }),

                  odd: createPositionalPseudo(function (matchIndexes, length) {
                    var i = 1;
                    for (; i < length; i += 2) {
                      matchIndexes.push(i);
                    }
                    return matchIndexes;
                  }),

                  lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument > length ? length : argument;
                    for (; --i >= 0; ) {
                      matchIndexes.push(i);
                    }
                    return matchIndexes;
                  }),

                  gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; ++i < length; ) {
                      matchIndexes.push(i);
                    }
                    return matchIndexes;
                  })
                }
              };

              Expr.pseudos['nth'] = Expr.pseudos['eq'];

              // Add button/input type pseudos
              for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
                Expr.pseudos[i] = createInputPseudo(i);
              }
              for (i in { submit: true, reset: true }) {
                Expr.pseudos[i] = createButtonPseudo(i);
              }

              // Easy API for creating new setFilters
              function setFilters() {}
              setFilters.prototype = Expr.filters = Expr.pseudos;
              Expr.setFilters = new setFilters();

              tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                var matched,
                  match,
                  tokens,
                  type,
                  soFar,
                  groups,
                  preFilters,
                  cached = tokenCache[selector + ' '];

                if (cached) {
                  return parseOnly ? 0 : cached.slice(0);
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;

                while (soFar) {
                  // Comma and first run
                  if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                      // Don't consume trailing commas as valid
                      soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push((tokens = []));
                  }

                  matched = false;

                  // Combinators
                  if ((match = rcombinators.exec(soFar))) {
                    matched = match.shift();
                    tokens.push({
                      value: matched,

                      // Cast descendant combinators to space
                      type: match[0].replace(rtrim, ' ')
                    });
                    soFar = soFar.slice(matched.length);
                  }

                  // Filters
                  for (type in Expr.filter) {
                    if (
                      (match = matchExpr[type].exec(soFar)) &&
                      (!preFilters[type] || (match = preFilters[type](match)))
                    ) {
                      matched = match.shift();
                      tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                      });
                      soFar = soFar.slice(matched.length);
                    }
                  }

                  if (!matched) {
                    break;
                  }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly
                  ? soFar.length
                  : soFar
                  ? Sizzle.error(selector)
                  : // Cache the tokens
                    tokenCache(selector, groups).slice(0);
              };

              function toSelector(tokens) {
                var i = 0,
                  len = tokens.length,
                  selector = '';
                for (; i < len; i++) {
                  selector += tokens[i].value;
                }
                return selector;
              }

              function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                  skip = combinator.next,
                  key = skip || dir,
                  checkNonElements = base && key === 'parentNode',
                  doneName = done++;

                return combinator.first
                  ? // Check against closest ancestor/preceding element
                    function (elem, context, xml) {
                      while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                          return matcher(elem, context, xml);
                        }
                      }
                      return false;
                    }
                  : // Check against all ancestor/preceding elements
                    function (elem, context, xml) {
                      var oldCache,
                        uniqueCache,
                        outerCache,
                        newCache = [dirruns, doneName];

                      // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                      if (xml) {
                        while ((elem = elem[dir])) {
                          if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                              return true;
                            }
                          }
                        }
                      } else {
                        while ((elem = elem[dir])) {
                          if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});

                            // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)
                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                            if (skip && skip === elem.nodeName.toLowerCase()) {
                              elem = elem[dir] || elem;
                            } else if (
                              (oldCache = uniqueCache[key]) &&
                              oldCache[0] === dirruns &&
                              oldCache[1] === doneName
                            ) {
                              // Assign to newCache so results back-propagate to previous elements
                              return (newCache[2] = oldCache[2]);
                            } else {
                              // Reuse newcache so results back-propagate to previous elements
                              uniqueCache[key] = newCache;

                              // A match means we're done; a fail means we have to keep checking
                              if ((newCache[2] = matcher(elem, context, xml))) {
                                return true;
                              }
                            }
                          }
                        }
                      }
                      return false;
                    };
              }

              function elementMatcher(matchers) {
                return matchers.length > 1
                  ? function (elem, context, xml) {
                      var i = matchers.length;
                      while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                          return false;
                        }
                      }
                      return true;
                    }
                  : matchers[0];
              }

              function multipleContexts(selector, contexts, results) {
                var i = 0,
                  len = contexts.length;
                for (; i < len; i++) {
                  Sizzle(selector, contexts[i], results);
                }
                return results;
              }

              function condense(unmatched, map, filter, context, xml) {
                var elem,
                  newUnmatched = [],
                  i = 0,
                  len = unmatched.length,
                  mapped = map != null;

                for (; i < len; i++) {
                  if ((elem = unmatched[i])) {
                    if (!filter || filter(elem, context, xml)) {
                      newUnmatched.push(elem);
                      if (mapped) {
                        map.push(i);
                      }
                    }
                  }
                }

                return newUnmatched;
              }

              function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                  postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                  postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function (seed, results, context, xml) {
                  var temp,
                    i,
                    elem,
                    preMap = [],
                    postMap = [],
                    preexisting = results.length,
                    // Get initial elements from seed or context
                    elems =
                      seed || multipleContexts(selector || '*', context.nodeType ? [context] : context, []),
                    // Prefilter to get matcher input, preserving a map for seed-results synchronization
                    matcherIn =
                      preFilter && (seed || !selector)
                        ? condense(elems, preMap, preFilter, context, xml)
                        : elems,
                    matcherOut = matcher
                      ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                        postFinder || (seed ? preFilter : preexisting || postFilter)
                        ? // ...intermediate processing is necessary
                          []
                        : // ...otherwise use results directly
                          results
                      : matcherIn;

                  // Find primary matches
                  if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                  }

                  // Apply postFilter
                  if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);

                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while (i--) {
                      if ((elem = temp[i])) {
                        matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                      }
                    }
                  }

                  if (seed) {
                    if (postFinder || preFilter) {
                      if (postFinder) {
                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                        temp = [];
                        i = matcherOut.length;
                        while (i--) {
                          if ((elem = matcherOut[i])) {
                            // Restore matcherIn since elem is not yet a final match
                            temp.push((matcherIn[i] = elem));
                          }
                        }
                        postFinder(null, (matcherOut = []), temp, xml);
                      }

                      // Move matched elements from seed to results to keep them synchronized
                      i = matcherOut.length;
                      while (i--) {
                        if (
                          (elem = matcherOut[i]) &&
                          (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1
                        ) {
                          seed[temp] = !(results[temp] = elem);
                        }
                      }
                    }

                    // Add elements to results, through postFinder if defined
                  } else {
                    matcherOut = condense(
                      matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                    );
                    if (postFinder) {
                      postFinder(null, results, matcherOut, xml);
                    } else {
                      push.apply(results, matcherOut);
                    }
                  }
                });
              }

              function matcherFromTokens(tokens) {
                var checkContext,
                  matcher,
                  j,
                  len = tokens.length,
                  leadingRelative = Expr.relative[tokens[0].type],
                  implicitRelative = leadingRelative || Expr.relative[' '],
                  i = leadingRelative ? 1 : 0,
                  // The foundational matcher ensures that elements are reachable from top-level context(s)
                  matchContext = addCombinator(
                    function (elem) {
                      return elem === checkContext;
                    },
                    implicitRelative,
                    true
                  ),
                  matchAnyContext = addCombinator(
                    function (elem) {
                      return indexOf(checkContext, elem) > -1;
                    },
                    implicitRelative,
                    true
                  ),
                  matchers = [
                    function (elem, context, xml) {
                      var ret =
                        (!leadingRelative && (xml || context !== outermostContext)) ||
                        ((checkContext = context).nodeType
                          ? matchContext(elem, context, xml)
                          : matchAnyContext(elem, context, xml));

                      // Avoid hanging onto element (issue #299)
                      checkContext = null;
                      return ret;
                    }
                  ];

                for (; i < len; i++) {
                  if ((matcher = Expr.relative[tokens[i].type])) {
                    matchers = [addCombinator(elementMatcher(matchers), matcher)];
                  } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                    // Return special upon seeing a positional matcher
                    if (matcher[expando]) {
                      // Find the next relative operator (if any) for proper handling
                      j = ++i;
                      for (; j < len; j++) {
                        if (Expr.relative[tokens[j].type]) {
                          break;
                        }
                      }
                      return setMatcher(
                        i > 1 && elementMatcher(matchers),
                        i > 1 &&
                          toSelector(
                            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                            tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === ' ' ? '*' : '' })
                          ).replace(rtrim, '$1'),
                        matcher,
                        i < j && matcherFromTokens(tokens.slice(i, j)),
                        j < len && matcherFromTokens((tokens = tokens.slice(j))),
                        j < len && toSelector(tokens)
                      );
                    }
                    matchers.push(matcher);
                  }
                }

                return elementMatcher(matchers);
              }

              function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                  byElement = elementMatchers.length > 0,
                  superMatcher = function (seed, context, xml, results, outermost) {
                    var elem,
                      j,
                      matcher,
                      matchedCount = 0,
                      i = '0',
                      unmatched = seed && [],
                      setMatched = [],
                      contextBackup = outermostContext,
                      // We must always have either seed elements or outermost context
                      elems = seed || (byElement && Expr.find['TAG']('*', outermost)),
                      // Use integer dirruns iff this is the outermost matcher
                      dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                      len = elems.length;

                    if (outermost) {
                      // Support: IE 11+, Edge 17 - 18+
                      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                      // two documents; shallow comparisons work.
                      // eslint-disable-next-line eqeqeq
                      outermostContext = context == document || context || outermost;
                    }

                    // Add elements passing elementMatchers directly to results
                    // Support: IE<9, Safari
                    // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                    for (; i !== len && (elem = elems[i]) != null; i++) {
                      if (byElement && elem) {
                        j = 0;

                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                          setDocument(elem);
                          xml = !documentIsHTML;
                        }
                        while ((matcher = elementMatchers[j++])) {
                          if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                          }
                        }
                        if (outermost) {
                          dirruns = dirrunsUnique;
                        }
                      }

                      // Track unmatched elements for set filters
                      if (bySet) {
                        // They will have gone through all possible matchers
                        if ((elem = !matcher && elem)) {
                          matchedCount--;
                        }

                        // Lengthen the array for every element, matched or not
                        if (seed) {
                          unmatched.push(elem);
                        }
                      }
                    }

                    // `i` is now the count of elements visited above, and adding it to `matchedCount`
                    // makes the latter nonnegative.
                    matchedCount += i;

                    // Apply set filters to unmatched elements
                    // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                    // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                    // no element matchers and no seed.
                    // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                    // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                    // numerically zero.
                    if (bySet && i !== matchedCount) {
                      j = 0;
                      while ((matcher = setMatchers[j++])) {
                        matcher(unmatched, setMatched, context, xml);
                      }

                      if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                          while (i--) {
                            if (!(unmatched[i] || setMatched[i])) {
                              setMatched[i] = pop.call(results);
                            }
                          }
                        }

                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                      }

                      // Add matches to results
                      push.apply(results, setMatched);

                      // Seedless set matches succeeding multiple successful matchers stipulate sorting
                      if (
                        outermost &&
                        !seed &&
                        setMatched.length > 0 &&
                        matchedCount + setMatchers.length > 1
                      ) {
                        Sizzle.uniqueSort(results);
                      }
                    }

                    // Override manipulation of globals by nested matchers
                    if (outermost) {
                      dirruns = dirrunsUnique;
                      outermostContext = contextBackup;
                    }

                    return unmatched;
                  };

                return bySet ? markFunction(superMatcher) : superMatcher;
              }

              compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
                var i,
                  setMatchers = [],
                  elementMatchers = [],
                  cached = compilerCache[selector + ' '];

                if (!cached) {
                  // Generate a function of recursive functions that can be used to check each element
                  if (!match) {
                    match = tokenize(selector);
                  }
                  i = match.length;
                  while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                      setMatchers.push(cached);
                    } else {
                      elementMatchers.push(cached);
                    }
                  }

                  // Cache the compiled function
                  cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

                  // Save selector and tokenization
                  cached.selector = selector;
                }
                return cached;
              };

              /**
               * A low-level selection function that works with Sizzle's compiled
               *  selector functions
               * @param {String|Function} selector A selector or a pre-compiled
               *  selector function built with Sizzle.compile
               * @param {Element} context
               * @param {Array} [results]
               * @param {Array} [seed] A set of elements to match against
               */
              select = Sizzle.select = function (selector, context, results, seed) {
                var i,
                  tokens,
                  token,
                  type,
                  find,
                  compiled = typeof selector === 'function' && selector,
                  match = !seed && tokenize((selector = compiled.selector || selector));

                results = results || [];

                // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) {
                  // Reduce context if the leading compound selector is an ID
                  tokens = match[0] = match[0].slice(0);
                  if (
                    tokens.length > 2 &&
                    (token = tokens[0]).type === 'ID' &&
                    context.nodeType === 9 &&
                    documentIsHTML &&
                    Expr.relative[tokens[1].type]
                  ) {
                    context = (Expr.find['ID'](token.matches[0].replace(runescape, funescape), context) ||
                      [])[0];
                    if (!context) {
                      return results;

                      // Precompiled matchers will still verify ancestry, so step up a level
                    } else if (compiled) {
                      context = context.parentNode;
                    }

                    selector = selector.slice(tokens.shift().value.length);
                  }

                  // Fetch a seed set for right-to-left matching
                  i = matchExpr['needsContext'].test(selector) ? 0 : tokens.length;
                  while (i--) {
                    token = tokens[i];

                    // Abort if we hit a combinator
                    if (Expr.relative[(type = token.type)]) {
                      break;
                    }
                    if ((find = Expr.find[type])) {
                      // Search, expanding context for leading sibling combinators
                      if (
                        (seed = find(
                          token.matches[0].replace(runescape, funescape),
                          (rsibling.test(tokens[0].type) && testContext(context.parentNode)) || context
                        ))
                      ) {
                        // If seed is empty or no tokens remain, we can return early
                        tokens.splice(i, 1);
                        selector = seed.length && toSelector(tokens);
                        if (!selector) {
                          push.apply(results, seed);
                          return results;
                        }

                        break;
                      }
                    }
                  }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(
                  seed,
                  context,
                  !documentIsHTML,
                  results,
                  !context || (rsibling.test(selector) && testContext(context.parentNode)) || context
                );
                return results;
              };

              // One-time assignments

              // Sort stability
              support.sortStable = expando.split('').sort(sortOrder).join('') === expando;

              // Support: Chrome 14-35+
              // Always assume duplicates if they aren't passed to the comparison function
              support.detectDuplicates = !!hasDuplicate;

              // Initialize against the default document
              setDocument();

              // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
              // Detached nodes confoundingly follow *each other*
              support.sortDetached = assert(function (el) {
                // Should return 1, but returns 4 (following)
                return el.compareDocumentPosition(document.createElement('fieldset')) & 1;
              });

              // Support: IE<8
              // Prevent attribute/property "interpolation"
              // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
              if (
                !assert(function (el) {
                  el.innerHTML = "<a href='#'></a>";
                  return el.firstChild.getAttribute('href') === '#';
                })
              ) {
                addHandle('type|href|height|width', function (elem, name, isXML) {
                  if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === 'type' ? 1 : 2);
                  }
                });
              }

              // Support: IE<9
              // Use defaultValue in place of getAttribute("value")
              if (
                !support.attributes ||
                !assert(function (el) {
                  el.innerHTML = '<input/>';
                  el.firstChild.setAttribute('value', '');
                  return el.firstChild.getAttribute('value') === '';
                })
              ) {
                addHandle('value', function (elem, _name, isXML) {
                  if (!isXML && elem.nodeName.toLowerCase() === 'input') {
                    return elem.defaultValue;
                  }
                });
              }

              // Support: IE<9
              // Use getAttributeNode to fetch booleans when getAttribute lies
              if (
                !assert(function (el) {
                  return el.getAttribute('disabled') == null;
                })
              ) {
                addHandle(booleans, function (elem, name, isXML) {
                  var val;
                  if (!isXML) {
                    return elem[name] === true
                      ? name.toLowerCase()
                      : (val = elem.getAttributeNode(name)) && val.specified
                      ? val.value
                      : null;
                  }
                });
              }

              return Sizzle;
            })(window);

          jQuery.find = Sizzle;
          jQuery.expr = Sizzle.selectors;

          // Deprecated
          jQuery.expr[':'] = jQuery.expr.pseudos;
          jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
          jQuery.text = Sizzle.getText;
          jQuery.isXMLDoc = Sizzle.isXML;
          jQuery.contains = Sizzle.contains;
          jQuery.escapeSelector = Sizzle.escape;

          var dir = function (elem, dir, until) {
            var matched = [],
              truncate = until !== undefined;

            while ((elem = elem[dir]) && elem.nodeType !== 9) {
              if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                  break;
                }
                matched.push(elem);
              }
            }
            return matched;
          };

          var siblings = function (n, elem) {
            var matched = [];

            for (; n; n = n.nextSibling) {
              if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
              }
            }

            return matched;
          };

          var rneedsContext = jQuery.expr.match.needsContext;

          function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
          }
          var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

          // Implement the identical functionality for filter and not
          function winnow(elements, qualifier, not) {
            if (isFunction(qualifier)) {
              return jQuery.grep(elements, function (elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
              });
            }

            // Single element
            if (qualifier.nodeType) {
              return jQuery.grep(elements, function (elem) {
                return (elem === qualifier) !== not;
              });
            }

            // Arraylike of elements (jQuery, arguments, Array)
            if (typeof qualifier !== 'string') {
              return jQuery.grep(elements, function (elem) {
                return indexOf.call(qualifier, elem) > -1 !== not;
              });
            }

            // Filtered directly for both simple and complex selectors
            return jQuery.filter(qualifier, elements, not);
          }

          jQuery.filter = function (expr, elems, not) {
            var elem = elems[0];

            if (not) {
              expr = ':not(' + expr + ')';
            }

            if (elems.length === 1 && elem.nodeType === 1) {
              return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
            }

            return jQuery.find.matches(
              expr,
              jQuery.grep(elems, function (elem) {
                return elem.nodeType === 1;
              })
            );
          };

          jQuery.fn.extend({
            find: function (selector) {
              var i,
                ret,
                len = this.length,
                self = this;

              if (typeof selector !== 'string') {
                return this.pushStack(
                  jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) {
                      if (jQuery.contains(self[i], this)) {
                        return true;
                      }
                    }
                  })
                );
              }

              ret = this.pushStack([]);

              for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
              }

              return len > 1 ? jQuery.uniqueSort(ret) : ret;
            },
            filter: function (selector) {
              return this.pushStack(winnow(this, selector || [], false));
            },
            not: function (selector) {
              return this.pushStack(winnow(this, selector || [], true));
            },
            is: function (selector) {
              return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === 'string' && rneedsContext.test(selector)
                  ? jQuery(selector)
                  : selector || [],
                false
              ).length;
            }
          });

          // Initialize a jQuery object

          // A central reference to the root jQuery(document)
          var rootjQuery,
            // A simple way to check for HTML strings
            // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
            // Strict HTML recognition (#11290: must start with <)
            // Shortcut simple #id case for speed
            rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            init = (jQuery.fn.init = function (selector, context, root) {
              var match, elem;

              // HANDLE: $(""), $(null), $(undefined), $(false)
              if (!selector) {
                return this;
              }

              // Method init() accepts an alternate rootjQuery
              // so migrate can support jQuery.sub (gh-2101)
              root = root || rootjQuery;

              // Handle HTML strings
              if (typeof selector === 'string') {
                if (selector[0] === '<' && selector[selector.length - 1] === '>' && selector.length >= 3) {
                  // Assume that strings that start and end with <> are HTML and skip the regex check
                  match = [null, selector, null];
                } else {
                  match = rquickExpr.exec(selector);
                }

                // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) {
                  // HANDLE: $(html) -> $(array)
                  if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;

                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(
                      this,
                      jQuery.parseHTML(
                        match[1],
                        context && context.nodeType ? context.ownerDocument || context : document,
                        true
                      )
                    );

                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                      for (match in context) {
                        // Properties of context are called as methods if possible
                        if (isFunction(this[match])) {
                          this[match](context[match]);

                          // ...and otherwise set as attributes
                        } else {
                          this.attr(match, context[match]);
                        }
                      }
                    }

                    return this;

                    // HANDLE: $(#id)
                  } else {
                    elem = document.getElementById(match[2]);

                    if (elem) {
                      // Inject the element directly into the jQuery object
                      this[0] = elem;
                      this.length = 1;
                    }
                    return this;
                  }

                  // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                  return (context || root).find(selector);

                  // HANDLE: $(expr, context)
                  // (which is just equivalent to: $(context).find(expr)
                } else {
                  return this.constructor(context).find(selector);
                }

                // HANDLE: $(DOMElement)
              } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
              } else if (isFunction(selector)) {
                return root.ready !== undefined
                  ? root.ready(selector)
                  : // Execute immediately if ready is not present
                    selector(jQuery);
              }

              return jQuery.makeArray(selector, this);
            });

          // Give the init function the jQuery prototype for later instantiation
          init.prototype = jQuery.fn;

          // Initialize central reference
          rootjQuery = jQuery(document);

          var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            // Methods guaranteed to produce a unique set when starting from a unique set
            guaranteedUnique = {
              children: true,
              contents: true,
              next: true,
              prev: true
            };

          jQuery.fn.extend({
            has: function (target) {
              var targets = jQuery(target, this),
                l = targets.length;

              return this.filter(function () {
                var i = 0;
                for (; i < l; i++) {
                  if (jQuery.contains(this, targets[i])) {
                    return true;
                  }
                }
              });
            },

            closest: function (selectors, context) {
              var cur,
                i = 0,
                l = this.length,
                matched = [],
                targets = typeof selectors !== 'string' && jQuery(selectors);

              // Positional selectors never match, since there's no _selection_ context
              if (!rneedsContext.test(selectors)) {
                for (; i < l; i++) {
                  for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    // Always skip document fragments
                    if (
                      cur.nodeType < 11 &&
                      (targets
                        ? targets.index(cur) > -1
                        : // Don't pass non-elements to Sizzle
                          cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))
                    ) {
                      matched.push(cur);
                      break;
                    }
                  }
                }
              }

              return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },

            // Determine the position of an element within the set
            index: function (elem) {
              // No argument, return index in parent
              if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
              }

              // Index in selector
              if (typeof elem === 'string') {
                return indexOf.call(jQuery(elem), this[0]);
              }

              // Locate the position of the desired element
              return indexOf.call(
                this,

                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem
              );
            },

            add: function (selector, context) {
              return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
            },

            addBack: function (selector) {
              return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            }
          });

          function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur;
          }

          jQuery.each(
            {
              parent: function (elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
              },
              parents: function (elem) {
                return dir(elem, 'parentNode');
              },
              parentsUntil: function (elem, _i, until) {
                return dir(elem, 'parentNode', until);
              },
              next: function (elem) {
                return sibling(elem, 'nextSibling');
              },
              prev: function (elem) {
                return sibling(elem, 'previousSibling');
              },
              nextAll: function (elem) {
                return dir(elem, 'nextSibling');
              },
              prevAll: function (elem) {
                return dir(elem, 'previousSibling');
              },
              nextUntil: function (elem, _i, until) {
                return dir(elem, 'nextSibling', until);
              },
              prevUntil: function (elem, _i, until) {
                return dir(elem, 'previousSibling', until);
              },
              siblings: function (elem) {
                return siblings((elem.parentNode || {}).firstChild, elem);
              },
              children: function (elem) {
                return siblings(elem.firstChild);
              },
              contents: function (elem) {
                if (
                  elem.contentDocument != null &&
                  // Support: IE 11+
                  // <object> elements with no `data` attribute has an object
                  // `contentDocument` with a `null` prototype.
                  getProto(elem.contentDocument)
                ) {
                  return elem.contentDocument;
                }

                // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                // Treat the template element as a regular one in browsers that
                // don't support it.
                if (nodeName(elem, 'template')) {
                  elem = elem.content || elem;
                }

                return jQuery.merge([], elem.childNodes);
              }
            },
            function (name, fn) {
              jQuery.fn[name] = function (until, selector) {
                var matched = jQuery.map(this, fn, until);

                if (name.slice(-5) !== 'Until') {
                  selector = until;
                }

                if (selector && typeof selector === 'string') {
                  matched = jQuery.filter(selector, matched);
                }

                if (this.length > 1) {
                  // Remove duplicates
                  if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched);
                  }

                  // Reverse order for parents* and prev-derivatives
                  if (rparentsprev.test(name)) {
                    matched.reverse();
                  }
                }

                return this.pushStack(matched);
              };
            }
          );
          var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

          // Convert String-formatted options into Object-formatted ones
          function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
              object[flag] = true;
            });
            return object;
          }

          /*
           * Create a callback list using the following parameters:
           *
           *	options: an optional list of space-separated options that will change how
           *			the callback list behaves or a more traditional option object
           *
           * By default a callback list will act like an event callback list and can be
           * "fired" multiple times.
           *
           * Possible options:
           *
           *	once:			will ensure the callback list can only be fired once (like a Deferred)
           *
           *	memory:			will keep track of previous values and will call any callback added
           *					after the list has been fired right away with the latest "memorized"
           *					values (like a Deferred)
           *
           *	unique:			will ensure a callback can only be added once (no duplicate in the list)
           *
           *	stopOnFalse:	interrupt callings when a callback returns false
           *
           */
          jQuery.Callbacks = function (options) {
            // Convert options from String-formatted to Object-formatted if needed
            // (we check in cache first)
            options = typeof options === 'string' ? createOptions(options) : jQuery.extend({}, options);

            var // Flag to know if list is currently firing
              firing,
              // Last fire value for non-forgettable lists
              memory,
              // Flag to know if list was already fired
              fired,
              // Flag to prevent firing
              locked,
              // Actual callback list
              list = [],
              // Queue of execution data for repeatable lists
              queue = [],
              // Index of currently firing callback (modified by add/remove as needed)
              firingIndex = -1,
              // Fire callbacks
              fire = function () {
                // Enforce single-firing
                locked = locked || options.once;

                // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                  memory = queue.shift();
                  while (++firingIndex < list.length) {
                    // Run callback and check for early termination
                    if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                      // Jump to end and forget the data so .add doesn't re-fire
                      firingIndex = list.length;
                      memory = false;
                    }
                  }
                }

                // Forget the data if we're done with it
                if (!options.memory) {
                  memory = false;
                }

                firing = false;

                // Clean up if we're done firing for good
                if (locked) {
                  // Keep an empty list if we have data for future add calls
                  if (memory) {
                    list = [];

                    // Otherwise, this object is spent
                  } else {
                    list = '';
                  }
                }
              },
              // Actual Callbacks object
              self = {
                // Add a callback or a collection of callbacks to the list
                add: function () {
                  if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                      firingIndex = list.length - 1;
                      queue.push(memory);
                    }

                    (function add(args) {
                      jQuery.each(args, function (_, arg) {
                        if (isFunction(arg)) {
                          if (!options.unique || !self.has(arg)) {
                            list.push(arg);
                          }
                        } else if (arg && arg.length && toType(arg) !== 'string') {
                          // Inspect recursively
                          add(arg);
                        }
                      });
                    })(arguments);

                    if (memory && !firing) {
                      fire();
                    }
                  }
                  return this;
                },

                // Remove a callback from the list
                remove: function () {
                  jQuery.each(arguments, function (_, arg) {
                    var index;
                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                      list.splice(index, 1);

                      // Handle firing indexes
                      if (index <= firingIndex) {
                        firingIndex--;
                      }
                    }
                  });
                  return this;
                },

                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function (fn) {
                  return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                },

                // Remove all callbacks from the list
                empty: function () {
                  if (list) {
                    list = [];
                  }
                  return this;
                },

                // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function () {
                  locked = queue = [];
                  list = memory = '';
                  return this;
                },
                disabled: function () {
                  return !list;
                },

                // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function () {
                  locked = queue = [];
                  if (!memory && !firing) {
                    list = memory = '';
                  }
                  return this;
                },
                locked: function () {
                  return !!locked;
                },

                // Call all callbacks with the given context and arguments
                fireWith: function (context, args) {
                  if (!locked) {
                    args = args || [];
                    args = [context, args.slice ? args.slice() : args];
                    queue.push(args);
                    if (!firing) {
                      fire();
                    }
                  }
                  return this;
                },

                // Call all the callbacks with the given arguments
                fire: function () {
                  self.fireWith(this, arguments);
                  return this;
                },

                // To know if the callbacks have already been called at least once
                fired: function () {
                  return !!fired;
                }
              };

            return self;
          };

          function Identity(v) {
            return v;
          }
          function Thrower(ex) {
            throw ex;
          }

          function adoptValue(value, resolve, reject, noValue) {
            var method;

            try {
              // Check for promise aspect first to privilege synchronous behavior
              if (value && isFunction((method = value.promise))) {
                method.call(value).done(resolve).fail(reject);

                // Other thenables
              } else if (value && isFunction((method = value.then))) {
                method.call(value, resolve, reject);

                // Other non-thenables
              } else {
                // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                // * false: [ value ].slice( 0 ) => resolve( value )
                // * true: [ value ].slice( 1 ) => resolve()
                resolve.apply(undefined, [value].slice(noValue));
              }

              // For Promises/A+, convert exceptions into rejections
              // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
              // Deferred#then to conditionally suppress rejection.
            } catch (value) {
              // Support: Android 4.0 only
              // Strict mode functions invoked without .call/.apply get global-object context
              reject.apply(undefined, [value]);
            }
          }

          jQuery.extend({
            Deferred: function (func) {
              var tuples = [
                  // action, add listener, callbacks,
                  // ... .then handlers, argument index, [final state]
                  ['notify', 'progress', jQuery.Callbacks('memory'), jQuery.Callbacks('memory'), 2],
                  [
                    'resolve',
                    'done',
                    jQuery.Callbacks('once memory'),
                    jQuery.Callbacks('once memory'),
                    0,
                    'resolved'
                  ],
                  [
                    'reject',
                    'fail',
                    jQuery.Callbacks('once memory'),
                    jQuery.Callbacks('once memory'),
                    1,
                    'rejected'
                  ]
                ],
                state = 'pending',
                promise = {
                  state: function () {
                    return state;
                  },
                  always: function () {
                    deferred.done(arguments).fail(arguments);
                    return this;
                  },
                  catch: function (fn) {
                    return promise.then(null, fn);
                  },

                  // Keep pipe for back-compat
                  pipe: function (/* fnDone, fnFail, fnProgress */) {
                    var fns = arguments;

                    return jQuery
                      .Deferred(function (newDefer) {
                        jQuery.each(tuples, function (_i, tuple) {
                          // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                          var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                          // deferred.progress(function() { bind to newDefer or newDefer.notify })
                          // deferred.done(function() { bind to newDefer or newDefer.resolve })
                          // deferred.fail(function() { bind to newDefer or newDefer.reject })
                          deferred[tuple[1]](function () {
                            var returned = fn && fn.apply(this, arguments);
                            if (returned && isFunction(returned.promise)) {
                              returned
                                .promise()
                                .progress(newDefer.notify)
                                .done(newDefer.resolve)
                                .fail(newDefer.reject);
                            } else {
                              newDefer[tuple[0] + 'With'](this, fn ? [returned] : arguments);
                            }
                          });
                        });
                        fns = null;
                      })
                      .promise();
                  },
                  then: function (onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                      return function () {
                        var that = this,
                          args = arguments,
                          mightThrow = function () {
                            var returned, then;

                            // Support: Promises/A+ section 2.3.3.3.3
                            // https://promisesaplus.com/#point-59
                            // Ignore double-resolution attempts
                            if (depth < maxDepth) {
                              return;
                            }

                            returned = handler.apply(that, args);

                            // Support: Promises/A+ section 2.3.1
                            // https://promisesaplus.com/#point-48
                            if (returned === deferred.promise()) {
                              throw new TypeError('Thenable self-resolution');
                            }

                            // Support: Promises/A+ sections 2.3.3.1, 3.5
                            // https://promisesaplus.com/#point-54
                            // https://promisesaplus.com/#point-75
                            // Retrieve `then` only once
                            then =
                              returned &&
                              // Support: Promises/A+ section 2.3.4
                              // https://promisesaplus.com/#point-64
                              // Only check objects and functions for thenability
                              (typeof returned === 'object' || typeof returned === 'function') &&
                              returned.then;

                            // Handle a returned thenable
                            if (isFunction(then)) {
                              // Special processors (notify) just wait for resolution
                              if (special) {
                                then.call(
                                  returned,
                                  resolve(maxDepth, deferred, Identity, special),
                                  resolve(maxDepth, deferred, Thrower, special)
                                );

                                // Normal processors (resolve) also hook into progress
                              } else {
                                // ...and disregard older resolution values
                                maxDepth++;

                                then.call(
                                  returned,
                                  resolve(maxDepth, deferred, Identity, special),
                                  resolve(maxDepth, deferred, Thrower, special),
                                  resolve(maxDepth, deferred, Identity, deferred.notifyWith)
                                );
                              }

                              // Handle all other returned values
                            } else {
                              // Only substitute handlers pass on context
                              // and multiple values (non-spec behavior)
                              if (handler !== Identity) {
                                that = undefined;
                                args = [returned];
                              }

                              // Process the value(s)
                              // Default process is resolve
                              (special || deferred.resolveWith)(that, args);
                            }
                          },
                          // Only normal processors (resolve) catch and reject exceptions
                          process = special
                            ? mightThrow
                            : function () {
                                try {
                                  mightThrow();
                                } catch (e) {
                                  if (jQuery.Deferred.exceptionHook) {
                                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                  }

                                  // Support: Promises/A+ section 2.3.3.3.4.1
                                  // https://promisesaplus.com/#point-61
                                  // Ignore post-resolution exceptions
                                  if (depth + 1 >= maxDepth) {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Thrower) {
                                      that = undefined;
                                      args = [e];
                                    }

                                    deferred.rejectWith(that, args);
                                  }
                                }
                              };

                        // Support: Promises/A+ section 2.3.3.3.1
                        // https://promisesaplus.com/#point-57
                        // Re-resolve promises immediately to dodge false rejection from
                        // subsequent errors
                        if (depth) {
                          process();
                        } else {
                          // Call an optional hook to record the stack, in case of exception
                          // since it's otherwise lost when execution goes async
                          if (jQuery.Deferred.getStackHook) {
                            process.stackTrace = jQuery.Deferred.getStackHook();
                          }
                          window.setTimeout(process);
                        }
                      };
                    }

                    return jQuery
                      .Deferred(function (newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(
                          resolve(
                            0,
                            newDefer,
                            isFunction(onProgress) ? onProgress : Identity,
                            newDefer.notifyWith
                          )
                        );

                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(
                          resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)
                        );

                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                      })
                      .promise();
                  },

                  // Get a promise for this deferred
                  // If obj is provided, the promise aspect is added to the object
                  promise: function (obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                  }
                },
                deferred = {};

              // Add list-specific methods
              jQuery.each(tuples, function (i, tuple) {
                var list = tuple[2],
                  stateString = tuple[5];

                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;

                // Handle state
                if (stateString) {
                  list.add(
                    function () {
                      // state = "resolved" (i.e., fulfilled)
                      // state = "rejected"
                      state = stateString;
                    },

                    // rejected_callbacks.disable
                    // fulfilled_callbacks.disable
                    tuples[3 - i][2].disable,

                    // rejected_handlers.disable
                    // fulfilled_handlers.disable
                    tuples[3 - i][3].disable,

                    // progress_callbacks.lock
                    tuples[0][2].lock,

                    // progress_handlers.lock
                    tuples[0][3].lock
                  );
                }

                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);

                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function () {
                  deferred[tuple[0] + 'With'](this === deferred ? undefined : this, arguments);
                  return this;
                };

                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + 'With'] = list.fireWith;
              });

              // Make the deferred a promise
              promise.promise(deferred);

              // Call given func if any
              if (func) {
                func.call(deferred, deferred);
              }

              // All done!
              return deferred;
            },

            // Deferred helper
            when: function (singleValue) {
              var // count of uncompleted subordinates
                remaining = arguments.length,
                // count of unprocessed arguments
                i = remaining,
                // subordinate fulfillment data
                resolveContexts = Array(i),
                resolveValues = slice.call(arguments),
                // the master Deferred
                master = jQuery.Deferred(),
                // subordinate callback factory
                updateFunc = function (i) {
                  return function (value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) {
                      master.resolveWith(resolveContexts, resolveValues);
                    }
                  };
                };

              // Single- and empty arguments are adopted like Promise.resolve
              if (remaining <= 1) {
                adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (master.state() === 'pending' || isFunction(resolveValues[i] && resolveValues[i].then)) {
                  return master.then();
                }
              }

              // Multiple arguments are aggregated like Promise.all array elements
              while (i--) {
                adoptValue(resolveValues[i], updateFunc(i), master.reject);
              }

              return master.promise();
            }
          });

          // These usually indicate a programmer mistake during development,
          // warn about them ASAP rather than swallowing them by default.
          var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

          jQuery.Deferred.exceptionHook = function (error, stack) {
            // Support: IE 8 - 9 only
            // Console exists when dev tools are open, which can happen at any time
            if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
              window.console.warn('jQuery.Deferred exception: ' + error.message, error.stack, stack);
            }
          };

          jQuery.readyException = function (error) {
            window.setTimeout(function () {
              throw error;
            });
          };

          // The deferred used on DOM ready
          var readyList = jQuery.Deferred();

          jQuery.fn.ready = function (fn) {
            readyList
              .then(fn)

              // Wrap jQuery.readyException in a function so that the lookup
              // happens at the time of error handling instead of callback
              // registration.
              .catch(function (error) {
                jQuery.readyException(error);
              });

            return this;
          };

          jQuery.extend({
            // Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,

            // A counter to track how many items to wait for before
            // the ready event fires. See #6781
            readyWait: 1,

            // Handle when the DOM is ready
            ready: function (wait) {
              // Abort if there are pending holds or we're already ready
              if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
              }

              // Remember that the DOM is ready
              jQuery.isReady = true;

              // If a normal DOM Ready event fired, decrement, and wait if need be
              if (wait !== true && --jQuery.readyWait > 0) {
                return;
              }

              // If there are functions bound, to execute
              readyList.resolveWith(document, [jQuery]);
            }
          });

          jQuery.ready.then = readyList.then;

          // The ready event handler and self cleanup method
          function completed() {
            document.removeEventListener('DOMContentLoaded', completed);
            window.removeEventListener('load', completed);
            jQuery.ready();
          }

          // Catch cases where $(document).ready() is called
          // after the browser event has already occurred.
          // Support: IE <=9 - 10 only
          // Older IE sometimes signals "interactive" too soon
          if (
            document.readyState === 'complete' ||
            (document.readyState !== 'loading' && !document.documentElement.doScroll)
          ) {
            // Handle it asynchronously to allow scripts the opportunity to delay ready
            window.setTimeout(jQuery.ready);
          } else {
            // Use the handy event callback
            document.addEventListener('DOMContentLoaded', completed);

            // A fallback to window.onload, that will always work
            window.addEventListener('load', completed);
          }

          // Multifunctional method to get and set values of a collection
          // The value/s can optionally be executed if it's a function
          var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0,
              len = elems.length,
              bulk = key == null;

            // Sets many values
            if (toType(key) === 'object') {
              chainable = true;
              for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
              }

              // Sets one value
            } else if (value !== undefined) {
              chainable = true;

              if (!isFunction(value)) {
                raw = true;
              }

              if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                  fn.call(elems, value);
                  fn = null;

                  // ...except when executing function values
                } else {
                  bulk = fn;
                  fn = function (elem, _key, value) {
                    return bulk.call(jQuery(elem), value);
                  };
                }
              }

              if (fn) {
                for (; i < len; i++) {
                  fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
              }
            }

            if (chainable) {
              return elems;
            }

            // Gets
            if (bulk) {
              return fn.call(elems);
            }

            return len ? fn(elems[0], key) : emptyGet;
          };

          // Matches dashed string for camelizing
          var rmsPrefix = /^-ms-/,
            rdashAlpha = /-([a-z])/g;

          // Used by camelCase as callback to replace()
          function fcamelCase(_all, letter) {
            return letter.toUpperCase();
          }

          // Convert dashed to camelCase; used by the css and data modules
          // Support: IE <=9 - 11, Edge 12 - 15
          // Microsoft forgot to hump their vendor prefix (#9572)
          function camelCase(string) {
            return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
          }
          var acceptData = function (owner) {
            // Accepts only:
            //  - Node
            //    - Node.ELEMENT_NODE
            //    - Node.DOCUMENT_NODE
            //  - Object
            //    - Any
            return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
          };

          function Data() {
            this.expando = jQuery.expando + Data.uid++;
          }

          Data.uid = 1;

          Data.prototype = {
            cache: function (owner) {
              // Check if the owner object already has a cache
              var value = owner[this.expando];

              // If not, create one
              if (!value) {
                value = {};

                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                  // If it is a node unlikely to be stringify-ed or looped over
                  // use plain assignment
                  if (owner.nodeType) {
                    owner[this.expando] = value;

                    // Otherwise secure it in a non-enumerable property
                    // configurable must be true to allow the property to be
                    // deleted when data is removed
                  } else {
                    Object.defineProperty(owner, this.expando, {
                      value: value,
                      configurable: true
                    });
                  }
                }
              }

              return value;
            },
            set: function (owner, data, value) {
              var prop,
                cache = this.cache(owner);

              // Handle: [ owner, key, value ] args
              // Always use camelCase key (gh-2257)
              if (typeof data === 'string') {
                cache[camelCase(data)] = value;

                // Handle: [ owner, { properties } ] args
              } else {
                // Copy the properties one-by-one to the cache object
                for (prop in data) {
                  cache[camelCase(prop)] = data[prop];
                }
              }
              return cache;
            },
            get: function (owner, key) {
              return key === undefined
                ? this.cache(owner)
                : // Always use camelCase key (gh-2257)
                  owner[this.expando] && owner[this.expando][camelCase(key)];
            },
            access: function (owner, key, value) {
              // In cases where either:
              //
              //   1. No key was specified
              //   2. A string key was specified, but no value provided
              //
              // Take the "read" path and allow the get method to determine
              // which value to return, respectively either:
              //
              //   1. The entire cache object
              //   2. The data stored at the key
              //
              if (key === undefined || (key && typeof key === 'string' && value === undefined)) {
                return this.get(owner, key);
              }

              // When the key is not a string, or both a key and value
              // are specified, set or extend (existing objects) with either:
              //
              //   1. An object of properties
              //   2. A key and value
              //
              this.set(owner, key, value);

              // Since the "set" path can have two possible entry points
              // return the expected data based on which path was taken[*]
              return value !== undefined ? value : key;
            },
            remove: function (owner, key) {
              var i,
                cache = owner[this.expando];

              if (cache === undefined) {
                return;
              }

              if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) {
                  // If key is an array of keys...
                  // We always set camelCase keys, so remove that.
                  key = key.map(camelCase);
                } else {
                  key = camelCase(key);

                  // If a key with the spaces exists, use it.
                  // Otherwise, create an array by matching non-whitespace
                  key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
                }

                i = key.length;

                while (i--) {
                  delete cache[key[i]];
                }
              }

              // Remove the expando if there's no more data
              if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) {
                  owner[this.expando] = undefined;
                } else {
                  delete owner[this.expando];
                }
              }
            },
            hasData: function (owner) {
              var cache = owner[this.expando];
              return cache !== undefined && !jQuery.isEmptyObject(cache);
            }
          };
          var dataPriv = new Data();

          var dataUser = new Data();

          //	Implementation Summary
          //
          //	1. Enforce API surface and semantic compatibility with 1.9.x branch
          //	2. Improve the module's maintainability by reducing the storage
          //		paths to a single mechanism.
          //	3. Use the same single mechanism to support "private" and "user" data.
          //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
          //	5. Avoid exposing implementation details on user objects (eg. expando properties)
          //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

          var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /[A-Z]/g;

          function getData(data) {
            if (data === 'true') {
              return true;
            }

            if (data === 'false') {
              return false;
            }

            if (data === 'null') {
              return null;
            }

            // Only convert to a number if it doesn't change the string
            if (data === +data + '') {
              return +data;
            }

            if (rbrace.test(data)) {
              return JSON.parse(data);
            }

            return data;
          }

          function dataAttr(elem, key, data) {
            var name;

            // If nothing was found internally, try to fetch any
            // data from the HTML5 data-* attribute
            if (data === undefined && elem.nodeType === 1) {
              name = 'data-' + key.replace(rmultiDash, '-$&').toLowerCase();
              data = elem.getAttribute(name);

              if (typeof data === 'string') {
                try {
                  data = getData(data);
                } catch (e) {}

                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
              } else {
                data = undefined;
              }
            }
            return data;
          }

          jQuery.extend({
            hasData: function (elem) {
              return dataUser.hasData(elem) || dataPriv.hasData(elem);
            },

            data: function (elem, name, data) {
              return dataUser.access(elem, name, data);
            },

            removeData: function (elem, name) {
              dataUser.remove(elem, name);
            },

            // TODO: Now that all calls to _data and _removeData have been replaced
            // with direct calls to dataPriv methods, these can be deprecated.
            _data: function (elem, name, data) {
              return dataPriv.access(elem, name, data);
            },

            _removeData: function (elem, name) {
              dataPriv.remove(elem, name);
            }
          });

          jQuery.fn.extend({
            data: function (key, value) {
              var i,
                name,
                data,
                elem = this[0],
                attrs = elem && elem.attributes;

              // Gets all values
              if (key === undefined) {
                if (this.length) {
                  data = dataUser.get(elem);

                  if (elem.nodeType === 1 && !dataPriv.get(elem, 'hasDataAttrs')) {
                    i = attrs.length;
                    while (i--) {
                      // Support: IE 11 only
                      // The attrs elements can be null (#14894)
                      if (attrs[i]) {
                        name = attrs[i].name;
                        if (name.indexOf('data-') === 0) {
                          name = camelCase(name.slice(5));
                          dataAttr(elem, name, data[name]);
                        }
                      }
                    }
                    dataPriv.set(elem, 'hasDataAttrs', true);
                  }
                }

                return data;
              }

              // Sets multiple values
              if (typeof key === 'object') {
                return this.each(function () {
                  dataUser.set(this, key);
                });
              }

              return access(
                this,
                function (value) {
                  var data;

                  // The calling jQuery object (element matches) is not empty
                  // (and therefore has an element appears at this[ 0 ]) and the
                  // `value` parameter was not undefined. An empty jQuery object
                  // will result in `undefined` for elem = this[ 0 ] which will
                  // throw an exception if an attempt to read a data cache is made.
                  if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) {
                      return data;
                    }

                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) {
                      return data;
                    }

                    // We tried really hard, but the data doesn't exist.
                    return;
                  }

                  // Set the data...
                  this.each(function () {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                  });
                },
                null,
                value,
                arguments.length > 1,
                null,
                true
              );
            },

            removeData: function (key) {
              return this.each(function () {
                dataUser.remove(this, key);
              });
            }
          });

          jQuery.extend({
            queue: function (elem, type, data) {
              var queue;

              if (elem) {
                type = (type || 'fx') + 'queue';
                queue = dataPriv.get(elem, type);

                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                  if (!queue || Array.isArray(data)) {
                    queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                  } else {
                    queue.push(data);
                  }
                }
                return queue || [];
              }
            },

            dequeue: function (elem, type) {
              type = type || 'fx';

              var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function () {
                  jQuery.dequeue(elem, type);
                };

              // If the fx queue is dequeued, always remove the progress sentinel
              if (fn === 'inprogress') {
                fn = queue.shift();
                startLength--;
              }

              if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === 'fx') {
                  queue.unshift('inprogress');
                }

                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
              }

              if (!startLength && hooks) {
                hooks.empty.fire();
              }
            },

            // Not public - generate a queueHooks object, or return the current one
            _queueHooks: function (elem, type) {
              var key = type + 'queueHooks';
              return (
                dataPriv.get(elem, key) ||
                dataPriv.access(elem, key, {
                  empty: jQuery.Callbacks('once memory').add(function () {
                    dataPriv.remove(elem, [type + 'queue', key]);
                  })
                })
              );
            }
          });

          jQuery.fn.extend({
            queue: function (type, data) {
              var setter = 2;

              if (typeof type !== 'string') {
                data = type;
                type = 'fx';
                setter--;
              }

              if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
              }

              return data === undefined
                ? this
                : this.each(function () {
                    var queue = jQuery.queue(this, type, data);

                    // Ensure a hooks for this queue
                    jQuery._queueHooks(this, type);

                    if (type === 'fx' && queue[0] !== 'inprogress') {
                      jQuery.dequeue(this, type);
                    }
                  });
            },
            dequeue: function (type) {
              return this.each(function () {
                jQuery.dequeue(this, type);
              });
            },
            clearQueue: function (type) {
              return this.queue(type || 'fx', []);
            },

            // Get a promise resolved when queues of a certain type
            // are emptied (fx is the type by default)
            promise: function (type, obj) {
              var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function () {
                  if (!--count) {
                    defer.resolveWith(elements, [elements]);
                  }
                };

              if (typeof type !== 'string') {
                obj = type;
                type = undefined;
              }
              type = type || 'fx';

              while (i--) {
                tmp = dataPriv.get(elements[i], type + 'queueHooks');
                if (tmp && tmp.empty) {
                  count++;
                  tmp.empty.add(resolve);
                }
              }
              resolve();
              return defer.promise(obj);
            }
          });
          var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

          var rcssNum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i');

          var cssExpand = ['Top', 'Right', 'Bottom', 'Left'];

          var documentElement = document.documentElement;

          var isAttached = function (elem) {
              return jQuery.contains(elem.ownerDocument, elem);
            },
            composed = { composed: true };

          // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
          // Check attachment across shadow DOM boundaries when possible (gh-3504)
          // Support: iOS 10.0-10.2 only
          // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
          // leading to errors. We need to check for `getRootNode`.
          if (documentElement.getRootNode) {
            isAttached = function (elem) {
              return (
                jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument
              );
            };
          }
          var isHiddenWithinTree = function (elem, el) {
            // isHiddenWithinTree might be called from jQuery#filter function;
            // in that case, element will be second argument
            elem = el || elem;

            // Inline style trumps all
            return (
              elem.style.display === 'none' ||
              (elem.style.display === '' &&
                // Otherwise, check computed style
                // Support: Firefox <=43 - 45
                // Disconnected elements can have computed display: none, so first confirm that elem is
                // in the document.
                isAttached(elem) &&
                jQuery.css(elem, 'display') === 'none')
            );
          };

          function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted,
              scale,
              maxIterations = 20,
              currentValue = tween
                ? function () {
                    return tween.cur();
                  }
                : function () {
                    return jQuery.css(elem, prop, '');
                  },
              initial = currentValue(),
              unit = (valueParts && valueParts[3]) || (jQuery.cssNumber[prop] ? '' : 'px'),
              // Starting value computation is required for potential unit mismatches
              initialInUnit =
                elem.nodeType &&
                (jQuery.cssNumber[prop] || (unit !== 'px' && +initial)) &&
                rcssNum.exec(jQuery.css(elem, prop));

            if (initialInUnit && initialInUnit[3] !== unit) {
              // Support: Firefox <=54
              // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
              initial = initial / 2;

              // Trust units reported by jQuery.css
              unit = unit || initialInUnit[3];

              // Iteratively approximate from a nonzero starting point
              initialInUnit = +initial || 1;

              while (maxIterations--) {
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                  maxIterations = 0;
                }
                initialInUnit = initialInUnit / scale;
              }

              initialInUnit = initialInUnit * 2;
              jQuery.style(elem, prop, initialInUnit + unit);

              // Make sure we update the tween properties later on
              valueParts = valueParts || [];
            }

            if (valueParts) {
              initialInUnit = +initialInUnit || +initial || 0;

              // Apply relative offset (+=/-=) if specified
              adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
              if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
              }
            }
            return adjusted;
          }

          var defaultDisplayMap = {};

          function getDefaultDisplay(elem) {
            var temp,
              doc = elem.ownerDocument,
              nodeName = elem.nodeName,
              display = defaultDisplayMap[nodeName];

            if (display) {
              return display;
            }

            temp = doc.body.appendChild(doc.createElement(nodeName));
            display = jQuery.css(temp, 'display');

            temp.parentNode.removeChild(temp);

            if (display === 'none') {
              display = 'block';
            }
            defaultDisplayMap[nodeName] = display;

            return display;
          }

          function showHide(elements, show) {
            var display,
              elem,
              values = [],
              index = 0,
              length = elements.length;

            // Determine new display value for elements that need to change
            for (; index < length; index++) {
              elem = elements[index];
              if (!elem.style) {
                continue;
              }

              display = elem.style.display;
              if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === 'none') {
                  values[index] = dataPriv.get(elem, 'display') || null;
                  if (!values[index]) {
                    elem.style.display = '';
                  }
                }
                if (elem.style.display === '' && isHiddenWithinTree(elem)) {
                  values[index] = getDefaultDisplay(elem);
                }
              } else {
                if (display !== 'none') {
                  values[index] = 'none';

                  // Remember what we're overwriting
                  dataPriv.set(elem, 'display', display);
                }
              }
            }

            // Set the display of the elements in a second loop to avoid constant reflow
            for (index = 0; index < length; index++) {
              if (values[index] != null) {
                elements[index].style.display = values[index];
              }
            }

            return elements;
          }

          jQuery.fn.extend({
            show: function () {
              return showHide(this, true);
            },
            hide: function () {
              return showHide(this);
            },
            toggle: function (state) {
              if (typeof state === 'boolean') {
                return state ? this.show() : this.hide();
              }

              return this.each(function () {
                if (isHiddenWithinTree(this)) {
                  jQuery(this).show();
                } else {
                  jQuery(this).hide();
                }
              });
            }
          });
          var rcheckableType = /^(?:checkbox|radio)$/i;

          var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;

          var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

          (function () {
            var fragment = document.createDocumentFragment(),
              div = fragment.appendChild(document.createElement('div')),
              input = document.createElement('input');

            // Support: Android 4.0 - 4.3 only
            // Check state lost if the name is set (#11217)
            // Support: Windows Web Apps (WWA)
            // `name` and `type` must use .setAttribute for WWA (#14901)
            input.setAttribute('type', 'radio');
            input.setAttribute('checked', 'checked');
            input.setAttribute('name', 't');

            div.appendChild(input);

            // Support: Android <=4.1 only
            // Older WebKit doesn't clone checked state correctly in fragments
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

            // Support: IE <=11 only
            // Make sure textarea (and checkbox) defaultValue is properly cloned
            div.innerHTML = '<textarea>x</textarea>';
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

            // Support: IE <=9 only
            // IE <=9 replaces <option> tags with their contents when inserted outside of
            // the select element.
            div.innerHTML = '<option></option>';
            support.option = !!div.lastChild;
          })();

          // We have to close these tags to support XHTML (#13200)
          var wrapMap = {
            // XHTML parsers do not magically insert elements in the
            // same way that tag soup parsers do. So we cannot shorten
            // this by omitting <tbody> or other required elements.
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],

            _default: [0, '', '']
          };

          wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
          wrapMap.th = wrapMap.td;

          // Support: IE <=9 only
          if (!support.option) {
            wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", '</select>'];
          }

          function getAll(context, tag) {
            // Support: IE <=9 - 11 only
            // Use typeof to avoid zero-argument method invocation on host objects (#15151)
            var ret;

            if (typeof context.getElementsByTagName !== 'undefined') {
              ret = context.getElementsByTagName(tag || '*');
            } else if (typeof context.querySelectorAll !== 'undefined') {
              ret = context.querySelectorAll(tag || '*');
            } else {
              ret = [];
            }

            if (tag === undefined || (tag && nodeName(context, tag))) {
              return jQuery.merge([context], ret);
            }

            return ret;
          }

          // Mark scripts as having already been evaluated
          function setGlobalEval(elems, refElements) {
            var i = 0,
              l = elems.length;

            for (; i < l; i++) {
              dataPriv.set(
                elems[i],
                'globalEval',
                !refElements || dataPriv.get(refElements[i], 'globalEval')
              );
            }
          }

          var rhtml = /<|&#?\w+;/;

          function buildFragment(elems, context, scripts, selection, ignored) {
            var elem,
              tmp,
              tag,
              wrap,
              attached,
              j,
              fragment = context.createDocumentFragment(),
              nodes = [],
              i = 0,
              l = elems.length;

            for (; i < l; i++) {
              elem = elems[i];

              if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === 'object') {
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                  // Convert non-html into a text node
                } else if (!rhtml.test(elem)) {
                  nodes.push(context.createTextNode(elem));

                  // Convert html into DOM nodes
                } else {
                  tmp = tmp || fragment.appendChild(context.createElement('div'));

                  // Deserialize a standard representation
                  tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase();
                  wrap = wrapMap[tag] || wrapMap._default;
                  tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                  // Descend through wrappers to the right content
                  j = wrap[0];
                  while (j--) {
                    tmp = tmp.lastChild;
                  }

                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge(nodes, tmp.childNodes);

                  // Remember the top-level container
                  tmp = fragment.firstChild;

                  // Ensure the created nodes are orphaned (#12392)
                  tmp.textContent = '';
                }
              }
            }

            // Remove wrapper from fragment
            fragment.textContent = '';

            i = 0;
            while ((elem = nodes[i++])) {
              // Skip elements already in the context collection (trac-4087)
              if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                  ignored.push(elem);
                }
                continue;
              }

              attached = isAttached(elem);

              // Append to fragment
              tmp = getAll(fragment.appendChild(elem), 'script');

              // Preserve script evaluation history
              if (attached) {
                setGlobalEval(tmp);
              }

              // Capture executables
              if (scripts) {
                j = 0;
                while ((elem = tmp[j++])) {
                  if (rscriptType.test(elem.type || '')) {
                    scripts.push(elem);
                  }
                }
              }
            }

            return fragment;
          }

          var rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

          function returnTrue() {
            return true;
          }

          function returnFalse() {
            return false;
          }

          // Support: IE <=9 - 11+
          // focus() and blur() are asynchronous, except when they are no-op.
          // So expect focus to be synchronous when the element is already active,
          // and blur to be synchronous when the element is not already active.
          // (focus and blur are always synchronous in other supported browsers,
          // this just defines when we can count on it).
          function expectSync(elem, type) {
            return (elem === safeActiveElement()) === (type === 'focus');
          }

          // Support: IE <=9 only
          // Accessing document.activeElement can throw unexpectedly
          // https://bugs.jquery.com/ticket/13393
          function safeActiveElement() {
            try {
              return document.activeElement;
            } catch (err) {}
          }

          function on(elem, types, selector, data, fn, one) {
            var origFn, type;

            // Types can be a map of types/handlers
            if (typeof types === 'object') {
              // ( types-Object, selector, data )
              if (typeof selector !== 'string') {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
              }
              for (type in types) {
                on(elem, type, selector, data, types[type], one);
              }
              return elem;
            }

            if (data == null && fn == null) {
              // ( types, fn )
              fn = selector;
              data = selector = undefined;
            } else if (fn == null) {
              if (typeof selector === 'string') {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
              } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
              }
            }
            if (fn === false) {
              fn = returnFalse;
            } else if (!fn) {
              return elem;
            }

            if (one === 1) {
              origFn = fn;
              fn = function (event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
              };

              // Use same guid so caller can remove using origFn
              fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return elem.each(function () {
              jQuery.event.add(this, types, fn, data, selector);
            });
          }

          /*
           * Helper functions for managing events -- not part of the public interface.
           * Props to Dean Edwards' addEvent library for many of the ideas.
           */
          jQuery.event = {
            global: {},

            add: function (elem, types, handler, data, selector) {
              var handleObjIn,
                eventHandle,
                tmp,
                events,
                t,
                handleObj,
                special,
                handlers,
                type,
                namespaces,
                origType,
                elemData = dataPriv.get(elem);

              // Only attach events to objects that accept data
              if (!acceptData(elem)) {
                return;
              }

              // Caller can pass in an object of custom data in lieu of the handler
              if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
              }

              // Ensure that invalid selectors throw exceptions at attach time
              // Evaluate against documentElement in case elem is a non-element node (e.g., document)
              if (selector) {
                jQuery.find.matchesSelector(documentElement, selector);
              }

              // Make sure that the handler has a unique ID, used to find/remove it later
              if (!handler.guid) {
                handler.guid = jQuery.guid++;
              }

              // Init the element's event structure and main handler, if this is the first
              if (!(events = elemData.events)) {
                events = elemData.events = Object.create(null);
              }
              if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function (e) {
                  // Discard the second event of a jQuery.event.trigger() and
                  // when an event is called after a page has unloaded
                  return typeof jQuery !== 'undefined' && jQuery.event.triggered !== e.type
                    ? jQuery.event.dispatch.apply(elem, arguments)
                    : undefined;
                };
              }

              // Handle multiple events separated by a space
              types = (types || '').match(rnothtmlwhite) || [''];
              t = types.length;
              while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || '').split('.').sort();

                // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                  continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend(
                  {
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join('.')
                  },
                  handleObjIn
                );

                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                  handlers = events[type] = [];
                  handlers.delegateCount = 0;

                  // Only use addEventListener if the special events handler returns false
                  if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                    if (elem.addEventListener) {
                      elem.addEventListener(type, eventHandle);
                    }
                  }
                }

                if (special.add) {
                  special.add.call(elem, handleObj);

                  if (!handleObj.handler.guid) {
                    handleObj.handler.guid = handler.guid;
                  }
                }

                // Add to the element's handler list, delegates in front
                if (selector) {
                  handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                  handlers.push(handleObj);
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
              }
            },

            // Detach an event or set of events from an element
            remove: function (elem, types, handler, selector, mappedTypes) {
              var j,
                origCount,
                tmp,
                events,
                t,
                handleObj,
                special,
                handlers,
                type,
                namespaces,
                origType,
                elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

              if (!elemData || !(events = elemData.events)) {
                return;
              }

              // Once for each type.namespace in types; type may be omitted
              types = (types || '').match(rnothtmlwhite) || [''];
              t = types.length;
              while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || '').split('.').sort();

                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                  for (type in events) {
                    jQuery.event.remove(elem, type + types[t], handler, selector, true);
                  }
                  continue;
                }

                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)');

                // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                  handleObj = handlers[j];

                  if (
                    (mappedTypes || origType === handleObj.origType) &&
                    (!handler || handler.guid === handleObj.guid) &&
                    (!tmp || tmp.test(handleObj.namespace)) &&
                    (!selector ||
                      selector === handleObj.selector ||
                      (selector === '**' && handleObj.selector))
                  ) {
                    handlers.splice(j, 1);

                    if (handleObj.selector) {
                      handlers.delegateCount--;
                    }
                    if (special.remove) {
                      special.remove.call(elem, handleObj);
                    }
                  }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                  if (
                    !special.teardown ||
                    special.teardown.call(elem, namespaces, elemData.handle) === false
                  ) {
                    jQuery.removeEvent(elem, type, elemData.handle);
                  }

                  delete events[type];
                }
              }

              // Remove data and the expando if it's no longer used
              if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, 'handle events');
              }
            },

            dispatch: function (nativeEvent) {
              var i,
                j,
                ret,
                matched,
                handleObj,
                handlerQueue,
                args = new Array(arguments.length),
                // Make a writable jQuery.Event from the native event object
                event = jQuery.event.fix(nativeEvent),
                handlers = (dataPriv.get(this, 'events') || Object.create(null))[event.type] || [],
                special = jQuery.event.special[event.type] || {};

              // Use the fix-ed jQuery.Event rather than the (read-only) native event
              args[0] = event;

              for (i = 1; i < arguments.length; i++) {
                args[i] = arguments[i];
              }

              event.delegateTarget = this;

              // Call the preDispatch hook for the mapped type, and let it bail if desired
              if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
              }

              // Determine handlers
              handlerQueue = jQuery.event.handlers.call(this, event, handlers);

              // Run delegates first; they may want to stop propagation beneath us
              i = 0;
              while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;

                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                  // If the event is namespaced, then each handler is only invoked if it is
                  // specially universal or its namespaces are a superset of the event's.
                  if (
                    !event.rnamespace ||
                    handleObj.namespace === false ||
                    event.rnamespace.test(handleObj.namespace)
                  ) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;

                    ret = (
                      (jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler
                    ).apply(matched.elem, args);

                    if (ret !== undefined) {
                      if ((event.result = ret) === false) {
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }
                  }
                }
              }

              // Call the postDispatch hook for the mapped type
              if (special.postDispatch) {
                special.postDispatch.call(this, event);
              }

              return event.result;
            },

            handlers: function (event, handlers) {
              var i,
                handleObj,
                sel,
                matchedHandlers,
                matchedSelectors,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

              // Find delegate handlers
              if (
                delegateCount &&
                // Support: IE <=9
                // Black-hole SVG <use> instance trees (trac-13180)
                cur.nodeType &&
                // Support: Firefox <=42
                // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                // Support: IE 11 only
                // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                !(event.type === 'click' && event.button >= 1)
              ) {
                for (; cur !== this; cur = cur.parentNode || this) {
                  // Don't check non-elements (#13208)
                  // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                  if (cur.nodeType === 1 && !(event.type === 'click' && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for (i = 0; i < delegateCount; i++) {
                      handleObj = handlers[i];

                      // Don't conflict with Object.prototype properties (#13203)
                      sel = handleObj.selector + ' ';

                      if (matchedSelectors[sel] === undefined) {
                        matchedSelectors[sel] = handleObj.needsContext
                          ? jQuery(sel, this).index(cur) > -1
                          : jQuery.find(sel, this, null, [cur]).length;
                      }
                      if (matchedSelectors[sel]) {
                        matchedHandlers.push(handleObj);
                      }
                    }
                    if (matchedHandlers.length) {
                      handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                    }
                  }
                }
              }

              // Add the remaining (directly-bound) handlers
              cur = this;
              if (delegateCount < handlers.length) {
                handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
              }

              return handlerQueue;
            },

            addProp: function (name, hook) {
              Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,

                get: isFunction(hook)
                  ? function () {
                      if (this.originalEvent) {
                        return hook(this.originalEvent);
                      }
                    }
                  : function () {
                      if (this.originalEvent) {
                        return this.originalEvent[name];
                      }
                    },

                set: function (value) {
                  Object.defineProperty(this, name, {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: value
                  });
                }
              });
            },

            fix: function (originalEvent) {
              return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
            },

            special: {
              load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
              },
              click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function (data) {
                  // For mutual compressibility with _default, replace `this` access with a local var.
                  // `|| data` is dead code meant only to preserve the variable through minification.
                  var el = this || data;

                  // Claim the first handler
                  if (rcheckableType.test(el.type) && el.click && nodeName(el, 'input')) {
                    // dataPriv.set( el, "click", ... )
                    leverageNative(el, 'click', returnTrue);
                  }

                  // Return false to allow normal processing in the caller
                  return false;
                },
                trigger: function (data) {
                  // For mutual compressibility with _default, replace `this` access with a local var.
                  // `|| data` is dead code meant only to preserve the variable through minification.
                  var el = this || data;

                  // Force setup before triggering a click
                  if (rcheckableType.test(el.type) && el.click && nodeName(el, 'input')) {
                    leverageNative(el, 'click');
                  }

                  // Return non-false to allow normal event-path propagation
                  return true;
                },

                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function (event) {
                  var target = event.target;
                  return (
                    (rcheckableType.test(target.type) &&
                      target.click &&
                      nodeName(target, 'input') &&
                      dataPriv.get(target, 'click')) ||
                    nodeName(target, 'a')
                  );
                }
              },

              beforeunload: {
                postDispatch: function (event) {
                  // Support: Firefox 20+
                  // Firefox doesn't alert if the returnValue field is not set.
                  if (event.result !== undefined && event.originalEvent) {
                    event.originalEvent.returnValue = event.result;
                  }
                }
              }
            }
          };

          // Ensure the presence of an event listener that handles manually-triggered
          // synthetic events by interrupting progress until reinvoked in response to
          // *native* events that it fires directly, ensuring that state changes have
          // already occurred before other listeners are invoked.
          function leverageNative(el, type, expectSync) {
            // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
            if (!expectSync) {
              if (dataPriv.get(el, type) === undefined) {
                jQuery.event.add(el, type, returnTrue);
              }
              return;
            }

            // Register the controller as a special universal handler for all event namespaces
            dataPriv.set(el, type, false);
            jQuery.event.add(el, type, {
              namespace: false,
              handler: function (event) {
                var notAsync,
                  result,
                  saved = dataPriv.get(this, type);

                if (event.isTrigger & 1 && this[type]) {
                  // Interrupt processing of the outer synthetic .trigger()ed event
                  // Saved data should be false in such cases, but might be a leftover capture object
                  // from an async native handler (gh-4350)
                  if (!saved.length) {
                    // Store arguments for use when handling the inner native event
                    // There will always be at least one argument (an event object), so this array
                    // will not be confused with a leftover capture object.
                    saved = slice.call(arguments);
                    dataPriv.set(this, type, saved);

                    // Trigger the native event and capture its result
                    // Support: IE <=9 - 11+
                    // focus() and blur() are asynchronous
                    notAsync = expectSync(this, type);
                    this[type]();
                    result = dataPriv.get(this, type);
                    if (saved !== result || notAsync) {
                      dataPriv.set(this, type, false);
                    } else {
                      result = {};
                    }
                    if (saved !== result) {
                      // Cancel the outer synthetic event
                      event.stopImmediatePropagation();
                      event.preventDefault();
                      return result.value;
                    }

                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering the
                    // native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                  } else if ((jQuery.event.special[type] || {}).delegateType) {
                    event.stopPropagation();
                  }

                  // If this is a native event triggered above, everything is now in order
                  // Fire an inner synthetic event with the original arguments
                } else if (saved.length) {
                  // ...and capture the result
                  dataPriv.set(this, type, {
                    value: jQuery.event.trigger(
                      // Support: IE <=9 - 11+
                      // Extend with the prototype to reset the above stopImmediatePropagation()
                      jQuery.extend(saved[0], jQuery.Event.prototype),
                      saved.slice(1),
                      this
                    )
                  });

                  // Abort handling of the native event
                  event.stopImmediatePropagation();
                }
              }
            });
          }

          jQuery.removeEvent = function (elem, type, handle) {
            // This "if" is needed for plain objects
            if (elem.removeEventListener) {
              elem.removeEventListener(type, handle);
            }
          };

          jQuery.Event = function (src, props) {
            // Allow instantiation without the 'new' keyword
            if (!(this instanceof jQuery.Event)) {
              return new jQuery.Event(src, props);
            }

            // Event object
            if (src && src.type) {
              this.originalEvent = src;
              this.type = src.type;

              // Events bubbling up the document may have been marked as prevented
              // by a handler lower down the tree; reflect the correct value.
              this.isDefaultPrevented =
                src.defaultPrevented ||
                (src.defaultPrevented === undefined &&
                  // Support: Android <=2.3 only
                  src.returnValue === false)
                  ? returnTrue
                  : returnFalse;

              // Create target properties
              // Support: Safari <=6 - 7 only
              // Target should not be a text node (#504, #13143)
              this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

              this.currentTarget = src.currentTarget;
              this.relatedTarget = src.relatedTarget;

              // Event type
            } else {
              this.type = src;
            }

            // Put explicitly provided properties onto the event object
            if (props) {
              jQuery.extend(this, props);
            }

            // Create a timestamp if incoming event doesn't have one
            this.timeStamp = (src && src.timeStamp) || Date.now();

            // Mark it as fixed
            this[jQuery.expando] = true;
          };

          // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
          // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
          jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: false,

            preventDefault: function () {
              var e = this.originalEvent;

              this.isDefaultPrevented = returnTrue;

              if (e && !this.isSimulated) {
                e.preventDefault();
              }
            },
            stopPropagation: function () {
              var e = this.originalEvent;

              this.isPropagationStopped = returnTrue;

              if (e && !this.isSimulated) {
                e.stopPropagation();
              }
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;

              this.isImmediatePropagationStopped = returnTrue;

              if (e && !this.isSimulated) {
                e.stopImmediatePropagation();
              }

              this.stopPropagation();
            }
          };

          // Includes all common event props including KeyEvent and MouseEvent specific props
          jQuery.each(
            {
              altKey: true,
              bubbles: true,
              cancelable: true,
              changedTouches: true,
              ctrlKey: true,
              detail: true,
              eventPhase: true,
              metaKey: true,
              pageX: true,
              pageY: true,
              shiftKey: true,
              view: true,
              char: true,
              code: true,
              charCode: true,
              key: true,
              keyCode: true,
              button: true,
              buttons: true,
              clientX: true,
              clientY: true,
              offsetX: true,
              offsetY: true,
              pointerId: true,
              pointerType: true,
              screenX: true,
              screenY: true,
              targetTouches: true,
              toElement: true,
              touches: true,

              which: function (event) {
                var button = event.button;

                // Add which for key events
                if (event.which == null && rkeyEvent.test(event.type)) {
                  return event.charCode != null ? event.charCode : event.keyCode;
                }

                // Add which for click: 1 === left; 2 === middle; 3 === right
                if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                  if (button & 1) {
                    return 1;
                  }

                  if (button & 2) {
                    return 3;
                  }

                  if (button & 4) {
                    return 2;
                  }

                  return 0;
                }

                return event.which;
              }
            },
            jQuery.event.addProp
          );

          jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (type, delegateType) {
            jQuery.event.special[type] = {
              // Utilize native event if possible so blur/focus sequence is correct
              setup: function () {
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, expectSync);

                // Return false to allow normal processing in the caller
                return false;
              },
              trigger: function () {
                // Force setup before trigger
                leverageNative(this, type);

                // Return non-false to allow normal event-path propagation
                return true;
              },

              delegateType: delegateType
            };
          });

          // Create mouseenter/leave events using mouseover/out and event-time checks
          // so that event delegation works in jQuery.
          // Do the same for pointerenter/pointerleave and pointerover/pointerout
          //
          // Support: Safari 7 only
          // Safari sends mouseenter too often; see:
          // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
          // for the description of the bug (it existed in older Chrome versions as well).
          jQuery.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout'
            },
            function (orig, fix) {
              jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,

                handle: function (event) {
                  var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                  // For mouseenter/leave call the handler if related is outside the target.
                  // NB: No relatedTarget if the mouse left/entered the browser window
                  if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                  }
                  return ret;
                }
              };
            }
          );

          jQuery.fn.extend({
            on: function (types, selector, data, fn) {
              return on(this, types, selector, data, fn);
            },
            one: function (types, selector, data, fn) {
              return on(this, types, selector, data, fn, 1);
            },
            off: function (types, selector, fn) {
              var handleObj, type;
              if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(
                  handleObj.namespace ? handleObj.origType + '.' + handleObj.namespace : handleObj.origType,
                  handleObj.selector,
                  handleObj.handler
                );
                return this;
              }
              if (typeof types === 'object') {
                // ( types-object [, selector] )
                for (type in types) {
                  this.off(type, selector, types[type]);
                }
                return this;
              }
              if (selector === false || typeof selector === 'function') {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
              }
              if (fn === false) {
                fn = returnFalse;
              }
              return this.each(function () {
                jQuery.event.remove(this, types, fn, selector);
              });
            }
          });

          var // Support: IE <=10 - 11, Edge 12 - 13 only
            // In IE/Edge using regex groups here causes severe slowdowns.
            // See https://connect.microsoft.com/IE/feedback/details/1736512/
            rnoInnerhtml = /<script|<style|<link/i,
            // checked="checked" or checked
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

          // Prefer a tbody over its parent table for containing new rows
          function manipulationTarget(elem, content) {
            if (
              nodeName(elem, 'table') &&
              nodeName(content.nodeType !== 11 ? content : content.firstChild, 'tr')
            ) {
              return jQuery(elem).children('tbody')[0] || elem;
            }

            return elem;
          }

          // Replace/restore the type attribute of script elements for safe DOM manipulation
          function disableScript(elem) {
            elem.type = (elem.getAttribute('type') !== null) + '/' + elem.type;
            return elem;
          }
          function restoreScript(elem) {
            if ((elem.type || '').slice(0, 5) === 'true/') {
              elem.type = elem.type.slice(5);
            } else {
              elem.removeAttribute('type');
            }

            return elem;
          }

          function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, udataOld, udataCur, events;

            if (dest.nodeType !== 1) {
              return;
            }

            // 1. Copy private data: events, handlers, etc.
            if (dataPriv.hasData(src)) {
              pdataOld = dataPriv.get(src);
              events = pdataOld.events;

              if (events) {
                dataPriv.remove(dest, 'handle events');

                for (type in events) {
                  for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                  }
                }
              }
            }

            // 2. Copy user data
            if (dataUser.hasData(src)) {
              udataOld = dataUser.access(src);
              udataCur = jQuery.extend({}, udataOld);

              dataUser.set(dest, udataCur);
            }
          }

          // Fix IE bugs, see support tests
          function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();

            // Fails to persist the checked state of a cloned checkbox or radio button.
            if (nodeName === 'input' && rcheckableType.test(src.type)) {
              dest.checked = src.checked;

              // Fails to return the selected option to the default selected state when cloning options
            } else if (nodeName === 'input' || nodeName === 'textarea') {
              dest.defaultValue = src.defaultValue;
            }
          }

          function domManip(collection, args, callback, ignored) {
            // Flatten any nested arrays
            args = flat(args);

            var fragment,
              first,
              scripts,
              hasScripts,
              node,
              doc,
              i = 0,
              l = collection.length,
              iNoClone = l - 1,
              value = args[0],
              valueIsFunction = isFunction(value);

            // We can't cloneNode fragments that contain checked, in WebKit
            if (
              valueIsFunction ||
              (l > 1 && typeof value === 'string' && !support.checkClone && rchecked.test(value))
            ) {
              return collection.each(function (index) {
                var self = collection.eq(index);
                if (valueIsFunction) {
                  args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
              });
            }

            if (l) {
              fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
              first = fragment.firstChild;

              if (fragment.childNodes.length === 1) {
                fragment = first;
              }

              // Require either new content or an interest in ignored elements to invoke the callback
              if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, 'script'), disableScript);
                hasScripts = scripts.length;

                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (; i < l; i++) {
                  node = fragment;

                  if (i !== iNoClone) {
                    node = jQuery.clone(node, true, true);

                    // Keep references to cloned scripts for later restoration
                    if (hasScripts) {
                      // Support: Android <=4.0 only, PhantomJS 1 only
                      // push.apply(_, arraylike) throws on ancient WebKit
                      jQuery.merge(scripts, getAll(node, 'script'));
                    }
                  }

                  callback.call(collection[i], node, i);
                }

                if (hasScripts) {
                  doc = scripts[scripts.length - 1].ownerDocument;

                  // Reenable scripts
                  jQuery.map(scripts, restoreScript);

                  // Evaluate executable scripts on first document insertion
                  for (i = 0; i < hasScripts; i++) {
                    node = scripts[i];
                    if (
                      rscriptType.test(node.type || '') &&
                      !dataPriv.access(node, 'globalEval') &&
                      jQuery.contains(doc, node)
                    ) {
                      if (node.src && (node.type || '').toLowerCase() !== 'module') {
                        // Optional AJAX dependency, but won't run scripts if not present
                        if (jQuery._evalUrl && !node.noModule) {
                          jQuery._evalUrl(
                            node.src,
                            {
                              nonce: node.nonce || node.getAttribute('nonce')
                            },
                            doc
                          );
                        }
                      } else {
                        DOMEval(node.textContent.replace(rcleanScript, ''), node, doc);
                      }
                    }
                  }
                }
              }
            }

            return collection;
          }

          function remove(elem, selector, keepData) {
            var node,
              nodes = selector ? jQuery.filter(selector, elem) : elem,
              i = 0;

            for (; (node = nodes[i]) != null; i++) {
              if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
              }

              if (node.parentNode) {
                if (keepData && isAttached(node)) {
                  setGlobalEval(getAll(node, 'script'));
                }
                node.parentNode.removeChild(node);
              }
            }

            return elem;
          }

          jQuery.extend({
            htmlPrefilter: function (html) {
              return html;
            },

            clone: function (elem, dataAndEvents, deepDataAndEvents) {
              var i,
                l,
                srcElements,
                destElements,
                clone = elem.cloneNode(true),
                inPage = isAttached(elem);

              // Fix IE cloning issues
              if (
                !support.noCloneChecked &&
                (elem.nodeType === 1 || elem.nodeType === 11) &&
                !jQuery.isXMLDoc(elem)
              ) {
                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);

                for (i = 0, l = srcElements.length; i < l; i++) {
                  fixInput(srcElements[i], destElements[i]);
                }
              }

              // Copy the events from the original to the clone
              if (dataAndEvents) {
                if (deepDataAndEvents) {
                  srcElements = srcElements || getAll(elem);
                  destElements = destElements || getAll(clone);

                  for (i = 0, l = srcElements.length; i < l; i++) {
                    cloneCopyEvent(srcElements[i], destElements[i]);
                  }
                } else {
                  cloneCopyEvent(elem, clone);
                }
              }

              // Preserve script evaluation history
              destElements = getAll(clone, 'script');
              if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, 'script'));
              }

              // Return the cloned set
              return clone;
            },

            cleanData: function (elems) {
              var data,
                elem,
                type,
                special = jQuery.event.special,
                i = 0;

              for (; (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                  if ((data = elem[dataPriv.expando])) {
                    if (data.events) {
                      for (type in data.events) {
                        if (special[type]) {
                          jQuery.event.remove(elem, type);

                          // This is a shortcut to avoid jQuery.event.remove's overhead
                        } else {
                          jQuery.removeEvent(elem, type, data.handle);
                        }
                      }
                    }

                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                  }
                  if (elem[dataUser.expando]) {
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataUser.expando] = undefined;
                  }
                }
              }
            }
          });

          jQuery.fn.extend({
            detach: function (selector) {
              return remove(this, selector, true);
            },

            remove: function (selector) {
              return remove(this, selector);
            },

            text: function (value) {
              return access(
                this,
                function (value) {
                  return value === undefined
                    ? jQuery.text(this)
                    : this.empty().each(function () {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                          this.textContent = value;
                        }
                      });
                },
                null,
                value,
                arguments.length
              );
            },

            append: function () {
              return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  var target = manipulationTarget(this, elem);
                  target.appendChild(elem);
                }
              });
            },

            prepend: function () {
              return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  var target = manipulationTarget(this, elem);
                  target.insertBefore(elem, target.firstChild);
                }
              });
            },

            before: function () {
              return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                  this.parentNode.insertBefore(elem, this);
                }
              });
            },

            after: function () {
              return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                  this.parentNode.insertBefore(elem, this.nextSibling);
                }
              });
            },

            empty: function () {
              var elem,
                i = 0;

              for (; (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                  // Prevent memory leaks
                  jQuery.cleanData(getAll(elem, false));

                  // Remove any remaining nodes
                  elem.textContent = '';
                }
              }

              return this;
            },

            clone: function (dataAndEvents, deepDataAndEvents) {
              dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
              deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

              return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
              });
            },

            html: function (value) {
              return access(
                this,
                function (value) {
                  var elem = this[0] || {},
                    i = 0,
                    l = this.length;

                  if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                  }

                  // See if we can take a shortcut and just use innerHTML
                  if (
                    typeof value === 'string' &&
                    !rnoInnerhtml.test(value) &&
                    !wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]
                  ) {
                    value = jQuery.htmlPrefilter(value);

                    try {
                      for (; i < l; i++) {
                        elem = this[i] || {};

                        // Remove element nodes and prevent memory leaks
                        if (elem.nodeType === 1) {
                          jQuery.cleanData(getAll(elem, false));
                          elem.innerHTML = value;
                        }
                      }

                      elem = 0;

                      // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                  }

                  if (elem) {
                    this.empty().append(value);
                  }
                },
                null,
                value,
                arguments.length
              );
            },

            replaceWith: function () {
              var ignored = [];

              // Make the changes, replacing each non-ignored context element with the new content
              return domManip(
                this,
                arguments,
                function (elem) {
                  var parent = this.parentNode;

                  if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                      parent.replaceChild(elem, this);
                    }
                  }

                  // Force callback invocation
                },
                ignored
              );
            }
          });

          jQuery.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith'
            },
            function (name, original) {
              jQuery.fn[name] = function (selector) {
                var elems,
                  ret = [],
                  insert = jQuery(selector),
                  last = insert.length - 1,
                  i = 0;

                for (; i <= last; i++) {
                  elems = i === last ? this : this.clone(true);
                  jQuery(insert[i])[original](elems);

                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // .get() because push.apply(_, arraylike) throws on ancient WebKit
                  push.apply(ret, elems.get());
                }

                return this.pushStack(ret);
              };
            }
          );
          var rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i');

          var getStyles = function (elem) {
            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            var view = elem.ownerDocument.defaultView;

            if (!view || !view.opener) {
              view = window;
            }

            return view.getComputedStyle(elem);
          };

          var swap = function (elem, options, callback) {
            var ret,
              name,
              old = {};

            // Remember the old values, and insert the new ones
            for (name in options) {
              old[name] = elem.style[name];
              elem.style[name] = options[name];
            }

            ret = callback.call(elem);

            // Revert the old values
            for (name in options) {
              elem.style[name] = old[name];
            }

            return ret;
          };

          var rboxStyle = new RegExp(cssExpand.join('|'), 'i');

          (function () {
            // Executing both pixelPosition & boxSizingReliable tests require only one layout
            // so they're executed at the same time to save the second computation.
            function computeStyleTests() {
              // This is a singleton, we need to execute it only once
              if (!div) {
                return;
              }

              container.style.cssText =
                'position:absolute;left:-11111px;width:60px;' + 'margin-top:1px;padding:0;border:0';
              div.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;' +
                'margin:auto;border:1px;padding:1px;' +
                'width:60%;top:1%';
              documentElement.appendChild(container).appendChild(div);

              var divStyle = window.getComputedStyle(div);
              pixelPositionVal = divStyle.top !== '1%';

              // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
              reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

              // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
              // Some styles come back with percentage values, even though they shouldn't
              div.style.right = '60%';
              pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

              // Support: IE 9 - 11 only
              // Detect misreporting of content dimensions for box-sizing:border-box elements
              boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

              // Support: IE 9 only
              // Detect overflow:scroll screwiness (gh-3699)
              // Support: Chrome <=64
              // Don't get tricked when zoom affects offsetWidth (gh-4029)
              div.style.position = 'absolute';
              scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

              documentElement.removeChild(container);

              // Nullify the div so it wouldn't be stored in the memory and
              // it will also be a sign that checks already performed
              div = null;
            }

            function roundPixelMeasures(measure) {
              return Math.round(parseFloat(measure));
            }

            var pixelPositionVal,
              boxSizingReliableVal,
              scrollboxSizeVal,
              pixelBoxStylesVal,
              reliableTrDimensionsVal,
              reliableMarginLeftVal,
              container = document.createElement('div'),
              div = document.createElement('div');

            // Finish early in limited (non-browser) environments
            if (!div.style) {
              return;
            }

            // Support: IE <=9 - 11 only
            // Style of cloned element affects source element cloned (#8908)
            div.style.backgroundClip = 'content-box';
            div.cloneNode(true).style.backgroundClip = '';
            support.clearCloneStyle = div.style.backgroundClip === 'content-box';

            jQuery.extend(support, {
              boxSizingReliable: function () {
                computeStyleTests();
                return boxSizingReliableVal;
              },
              pixelBoxStyles: function () {
                computeStyleTests();
                return pixelBoxStylesVal;
              },
              pixelPosition: function () {
                computeStyleTests();
                return pixelPositionVal;
              },
              reliableMarginLeft: function () {
                computeStyleTests();
                return reliableMarginLeftVal;
              },
              scrollboxSize: function () {
                computeStyleTests();
                return scrollboxSizeVal;
              },

              // Support: IE 9 - 11+, Edge 15 - 18+
              // IE/Edge misreport `getComputedStyle` of table rows with width/height
              // set in CSS while `offset*` properties report correct values.
              // Behavior in IE 9 is more subtle than in newer versions & it passes
              // some versions of this test; make sure not to make it pass there!
              reliableTrDimensions: function () {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                  table = document.createElement('table');
                  tr = document.createElement('tr');
                  trChild = document.createElement('div');

                  table.style.cssText = 'position:absolute;left:-11111px';
                  tr.style.height = '1px';
                  trChild.style.height = '9px';

                  documentElement.appendChild(table).appendChild(tr).appendChild(trChild);

                  trStyle = window.getComputedStyle(tr);
                  reliableTrDimensionsVal = parseInt(trStyle.height) > 3;

                  documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
              }
            });
          })();

          function curCSS(elem, name, computed) {
            var width,
              minWidth,
              maxWidth,
              ret,
              // Support: Firefox 51+
              // Retrieving style before computed somehow
              // fixes an issue with getting wrong values
              // on detached elements
              style = elem.style;

            computed = computed || getStyles(elem);

            // getPropertyValue is needed for:
            //   .css('filter') (IE 9 only, #12537)
            //   .css('--customProperty) (#3144)
            if (computed) {
              ret = computed.getPropertyValue(name) || computed[name];

              if (ret === '' && !isAttached(elem)) {
                ret = jQuery.style(elem, name);
              }

              // A tribute to the "awesome hack by Dean Edwards"
              // Android Browser returns percentage for some values,
              // but width seems to be reliably pixels.
              // This is against the CSSOM draft spec:
              // https://drafts.csswg.org/cssom/#resolved-values
              if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;

                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;

                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
              }
            }

            return ret !== undefined
              ? // Support: IE <=9 - 11 only
                // IE returns zIndex value as an integer.
                ret + ''
              : ret;
          }

          function addGetHookIf(conditionFn, hookFn) {
            // Define the hook, we'll check on the first run if it's really needed.
            return {
              get: function () {
                if (conditionFn()) {
                  // Hook not needed (or it's not possible to use it due
                  // to missing dependency), remove it.
                  delete this.get;
                  return;
                }

                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
              }
            };
          }

          var cssPrefixes = ['Webkit', 'Moz', 'ms'],
            emptyStyle = document.createElement('div').style,
            vendorProps = {};

          // Return a vendor-prefixed property or undefined
          function vendorPropName(name) {
            // Check for vendor prefixed names
            var capName = name[0].toUpperCase() + name.slice(1),
              i = cssPrefixes.length;

            while (i--) {
              name = cssPrefixes[i] + capName;
              if (name in emptyStyle) {
                return name;
              }
            }
          }

          // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
          function finalPropName(name) {
            var final = jQuery.cssProps[name] || vendorProps[name];

            if (final) {
              return final;
            }
            if (name in emptyStyle) {
              return name;
            }
            return (vendorProps[name] = vendorPropName(name) || name);
          }

          var // Swappable if display is none or starts with table
            // except "table", "table-cell", or "table-caption"
            // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
            rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rcustomProp = /^--/,
            cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' },
            cssNormalTransform = {
              letterSpacing: '0',
              fontWeight: '400'
            };

          function setPositiveNumber(_elem, value, subtract) {
            // Any relative (+/-) values have already been
            // normalized at this point
            var matches = rcssNum.exec(value);
            return matches
              ? // Guard against undefined "subtract", e.g., when used as in cssHooks
                Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || 'px')
              : value;
          }

          function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
            var i = dimension === 'width' ? 1 : 0,
              extra = 0,
              delta = 0;

            // Adjustment may not be necessary
            if (box === (isBorderBox ? 'border' : 'content')) {
              return 0;
            }

            for (; i < 4; i += 2) {
              // Both box models exclude margin
              if (box === 'margin') {
                delta += jQuery.css(elem, box + cssExpand[i], true, styles);
              }

              // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
              if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, 'padding' + cssExpand[i], true, styles);

                // For "border" or "margin", add border
                if (box !== 'padding') {
                  delta += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);

                  // But still keep track of it otherwise
                } else {
                  extra += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
                }

                // If we get here with a border-box (content + padding + border), we're seeking "content" or
                // "padding" or "margin"
              } else {
                // For "content", subtract padding
                if (box === 'content') {
                  delta -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
                }

                // For "content" or "padding", subtract border
                if (box !== 'margin') {
                  delta -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
                }
              }
            }

            // Account for positive content-box scroll gutter when requested by providing computedVal
            if (!isBorderBox && computedVal >= 0) {
              // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
              // Assuming integer scroll gutter, subtract the rest and round down
              delta +=
                Math.max(
                  0,
                  Math.ceil(
                    elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
                      computedVal -
                      delta -
                      extra -
                      0.5

                    // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
                    // Use an explicit zero to avoid NaN (gh-3964)
                  )
                ) || 0;
            }

            return delta;
          }

          function getWidthOrHeight(elem, dimension, extra) {
            // Start with computed style
            var styles = getStyles(elem),
              // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
              // Fake content-box until we know it's needed to know the true value.
              boxSizingNeeded = !support.boxSizingReliable() || extra,
              isBorderBox = boxSizingNeeded && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box',
              valueIsBorderBox = isBorderBox,
              val = curCSS(elem, dimension, styles),
              offsetProp = 'offset' + dimension[0].toUpperCase() + dimension.slice(1);

            // Support: Firefox <=54
            // Return a confounding non-pixel value or feign ignorance, as appropriate.
            if (rnumnonpx.test(val)) {
              if (!extra) {
                return val;
              }
              val = 'auto';
            }

            // Support: IE 9 - 11 only
            // Use offsetWidth/offsetHeight for when box sizing is unreliable.
            // In those cases, the computed value can be trusted to be border-box.
            if (
              ((!support.boxSizingReliable() && isBorderBox) ||
                // Support: IE 10 - 11+, Edge 15 - 18+
                // IE/Edge misreport `getComputedStyle` of table rows with width/height
                // set in CSS while `offset*` properties report correct values.
                // Interestingly, in some cases IE 9 doesn't suffer from this issue.
                (!support.reliableTrDimensions() && nodeName(elem, 'tr')) ||
                // Fall back to offsetWidth/offsetHeight when value is "auto"
                // This happens for inline elements with no explicit setting (gh-3571)
                val === 'auto' ||
                // Support: Android <=4.1 - 4.3 only
                // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
                (!parseFloat(val) && jQuery.css(elem, 'display', false, styles) === 'inline')) &&
              // Make sure the element is visible & connected
              elem.getClientRects().length
            ) {
              isBorderBox = jQuery.css(elem, 'boxSizing', false, styles) === 'border-box';

              // Where available, offsetWidth/offsetHeight approximate border box dimensions.
              // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
              // retrieved value as a content box dimension.
              valueIsBorderBox = offsetProp in elem;
              if (valueIsBorderBox) {
                val = elem[offsetProp];
              }
            }

            // Normalize "" and auto
            val = parseFloat(val) || 0;

            // Adjust for the element's box model
            return (
              val +
              boxModelAdjustment(
                elem,
                dimension,
                extra || (isBorderBox ? 'border' : 'content'),
                valueIsBorderBox,
                styles,

                // Provide the current computed size to request scroll gutter calculation (gh-3589)
                val
              ) +
              'px'
            );
          }

          jQuery.extend({
            // Add in style property hooks for overriding the default
            // behavior of getting and setting a style property
            cssHooks: {
              opacity: {
                get: function (elem, computed) {
                  if (computed) {
                    // We should always get a number back from opacity
                    var ret = curCSS(elem, 'opacity');
                    return ret === '' ? '1' : ret;
                  }
                }
              }
            },

            // Don't automatically add "px" to these possibly-unitless properties
            cssNumber: {
              animationIterationCount: true,
              columnCount: true,
              fillOpacity: true,
              flexGrow: true,
              flexShrink: true,
              fontWeight: true,
              gridArea: true,
              gridColumn: true,
              gridColumnEnd: true,
              gridColumnStart: true,
              gridRow: true,
              gridRowEnd: true,
              gridRowStart: true,
              lineHeight: true,
              opacity: true,
              order: true,
              orphans: true,
              widows: true,
              zIndex: true,
              zoom: true
            },

            // Add in properties whose names you wish to fix before
            // setting or getting the value
            cssProps: {},

            // Get and set the style property on a DOM Node
            style: function (elem, name, value, extra) {
              // Don't set styles on text and comment nodes
              if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
              }

              // Make sure that we're working with the right name
              var ret,
                type,
                hooks,
                origName = camelCase(name),
                isCustomProp = rcustomProp.test(name),
                style = elem.style;

              // Make sure that we're working with the right name. We don't
              // want to query the value if it is a CSS custom property
              // since they are user-defined.
              if (!isCustomProp) {
                name = finalPropName(origName);
              }

              // Gets hook for the prefixed version, then unprefixed version
              hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

              // Check if we're setting a value
              if (value !== undefined) {
                type = typeof value;

                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === 'string' && (ret = rcssNum.exec(value)) && ret[1]) {
                  value = adjustCSS(elem, name, ret);

                  // Fixes bug #9237
                  type = 'number';
                }

                // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) {
                  return;
                }

                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === 'number' && !isCustomProp) {
                  value += (ret && ret[3]) || (jQuery.cssNumber[origName] ? '' : 'px');
                }

                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
                  style[name] = 'inherit';
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !('set' in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                  if (isCustomProp) {
                    style.setProperty(name, value);
                  } else {
                    style[name] = value;
                  }
                }
              } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && 'get' in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                  return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
              }
            },

            css: function (elem, name, extra, styles) {
              var val,
                num,
                hooks,
                origName = camelCase(name),
                isCustomProp = rcustomProp.test(name);

              // Make sure that we're working with the right name. We don't
              // want to modify the value if it is a CSS custom property
              // since they are user-defined.
              if (!isCustomProp) {
                name = finalPropName(origName);
              }

              // Try prefixed name followed by the unprefixed name
              hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

              // If a hook was provided get the computed value from there
              if (hooks && 'get' in hooks) {
                val = hooks.get(elem, true, extra);
              }

              // Otherwise, if a way to get the computed value exists, use that
              if (val === undefined) {
                val = curCSS(elem, name, styles);
              }

              // Convert "normal" to computed value
              if (val === 'normal' && name in cssNormalTransform) {
                val = cssNormalTransform[name];
              }

              // Make numeric if forced or a qualifier was provided and val looks numeric
              if (extra === '' || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
              }

              return val;
            }
          });

          jQuery.each(['height', 'width'], function (_i, dimension) {
            jQuery.cssHooks[dimension] = {
              get: function (elem, computed, extra) {
                if (computed) {
                  // Certain elements can have dimension info if we invisibly show them
                  // but it must have a current display style that would benefit
                  return rdisplayswap.test(jQuery.css(elem, 'display')) &&
                    // Support: Safari 8+
                    // Table columns in Safari have non-zero offsetWidth & zero
                    // getBoundingClientRect().width unless display is changed.
                    // Support: IE <=11 only
                    // Running getBoundingClientRect on a disconnected node
                    // in IE throws an error.
                    (!elem.getClientRects().length || !elem.getBoundingClientRect().width)
                    ? swap(elem, cssShow, function () {
                        return getWidthOrHeight(elem, dimension, extra);
                      })
                    : getWidthOrHeight(elem, dimension, extra);
                }
              },

              set: function (elem, value, extra) {
                var matches,
                  styles = getStyles(elem),
                  // Only read styles.position if the test has a chance to fail
                  // to avoid forcing a reflow.
                  scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === 'absolute',
                  // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                  boxSizingNeeded = scrollboxSizeBuggy || extra,
                  isBorderBox =
                    boxSizingNeeded && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box',
                  subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;

                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) {
                  subtract -= Math.ceil(
                    elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
                      parseFloat(styles[dimension]) -
                      boxModelAdjustment(elem, dimension, 'border', false, styles) -
                      0.5
                  );
                }

                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || 'px') !== 'px') {
                  elem.style[dimension] = value;
                  value = jQuery.css(elem, dimension);
                }

                return setPositiveNumber(elem, value, subtract);
              }
            };
          });

          jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
            if (computed) {
              return (
                (parseFloat(curCSS(elem, 'marginLeft')) ||
                  elem.getBoundingClientRect().left -
                    swap(elem, { marginLeft: 0 }, function () {
                      return elem.getBoundingClientRect().left;
                    })) + 'px'
              );
            }
          });

          // These hooks are used by animate to expand properties
          jQuery.each(
            {
              margin: '',
              padding: '',
              border: 'Width'
            },
            function (prefix, suffix) {
              jQuery.cssHooks[prefix + suffix] = {
                expand: function (value) {
                  var i = 0,
                    expanded = {},
                    // Assumes a single number if not a string
                    parts = typeof value === 'string' ? value.split(' ') : [value];

                  for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                  }

                  return expanded;
                }
              };

              if (prefix !== 'margin') {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
              }
            }
          );

          jQuery.fn.extend({
            css: function (name, value) {
              return access(
                this,
                function (elem, name, value) {
                  var styles,
                    len,
                    map = {},
                    i = 0;

                  if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;

                    for (; i < len; i++) {
                      map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }

                    return map;
                  }

                  return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                },
                name,
                value,
                arguments.length > 1
              );
            }
          });

          function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing);
          }
          jQuery.Tween = Tween;

          Tween.prototype = {
            constructor: Tween,
            init: function (elem, options, prop, end, easing, unit) {
              this.elem = elem;
              this.prop = prop;
              this.easing = easing || jQuery.easing._default;
              this.options = options;
              this.start = this.now = this.cur();
              this.end = end;
              this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px');
            },
            cur: function () {
              var hooks = Tween.propHooks[this.prop];

              return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function (percent) {
              var eased,
                hooks = Tween.propHooks[this.prop];

              if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](
                  percent,
                  this.options.duration * percent,
                  0,
                  1,
                  this.options.duration
                );
              } else {
                this.pos = eased = percent;
              }
              this.now = (this.end - this.start) * eased + this.start;

              if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
              }

              if (hooks && hooks.set) {
                hooks.set(this);
              } else {
                Tween.propHooks._default.set(this);
              }
              return this;
            }
          };

          Tween.prototype.init.prototype = Tween.prototype;

          Tween.propHooks = {
            _default: {
              get: function (tween) {
                var result;

                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (
                  tween.elem.nodeType !== 1 ||
                  (tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null)
                ) {
                  return tween.elem[tween.prop];
                }

                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, '');

                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === 'auto' ? 0 : result;
              },
              set: function (tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) {
                  jQuery.fx.step[tween.prop](tween);
                } else if (
                  tween.elem.nodeType === 1 &&
                  (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)
                ) {
                  jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                  tween.elem[tween.prop] = tween.now;
                }
              }
            }
          };

          // Support: IE <=9 only
          // Panic based approach to setting things on disconnected nodes
          Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function (tween) {
              if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
              }
            }
          };

          jQuery.easing = {
            linear: function (p) {
              return p;
            },
            swing: function (p) {
              return 0.5 - Math.cos(p * Math.PI) / 2;
            },
            _default: 'swing'
          };

          jQuery.fx = Tween.prototype.init;

          // Back compat <1.8 extension point
          jQuery.fx.step = {};

          var fxNow,
            inProgress,
            rfxtypes = /^(?:toggle|show|hide)$/,
            rrun = /queueHooks$/;

          function schedule() {
            if (inProgress) {
              if (document.hidden === false && window.requestAnimationFrame) {
                window.requestAnimationFrame(schedule);
              } else {
                window.setTimeout(schedule, jQuery.fx.interval);
              }

              jQuery.fx.tick();
            }
          }

          // Animations created synchronously will run synchronously
          function createFxNow() {
            window.setTimeout(function () {
              fxNow = undefined;
            });
            return (fxNow = Date.now());
          }

          // Generate parameters to create a standard animation
          function genFx(type, includeWidth) {
            var which,
              i = 0,
              attrs = { height: type };

            // If we include width, step value is 1 to do all cssExpand values,
            // otherwise step value is 2 to skip over Left and Right
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
              which = cssExpand[i];
              attrs['margin' + which] = attrs['padding' + which] = type;
            }

            if (includeWidth) {
              attrs.opacity = attrs.width = type;
            }

            return attrs;
          }

          function createTween(value, prop, animation) {
            var tween,
              collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners['*']),
              index = 0,
              length = collection.length;
            for (; index < length; index++) {
              if ((tween = collection[index].call(animation, prop, value))) {
                // We're done with this property
                return tween;
              }
            }
          }

          function defaultPrefilter(elem, props, opts) {
            var prop,
              value,
              toggle,
              hooks,
              oldfire,
              propTween,
              restoreDisplay,
              display,
              isBox = 'width' in props || 'height' in props,
              anim = this,
              orig = {},
              style = elem.style,
              hidden = elem.nodeType && isHiddenWithinTree(elem),
              dataShow = dataPriv.get(elem, 'fxshow');

            // Queue-skipping animations hijack the fx hooks
            if (!opts.queue) {
              hooks = jQuery._queueHooks(elem, 'fx');
              if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function () {
                  if (!hooks.unqueued) {
                    oldfire();
                  }
                };
              }
              hooks.unqueued++;

              anim.always(function () {
                // Ensure the complete handler is called before this completes
                anim.always(function () {
                  hooks.unqueued--;
                  if (!jQuery.queue(elem, 'fx').length) {
                    hooks.empty.fire();
                  }
                });
              });
            }

            // Detect show/hide animations
            for (prop in props) {
              value = props[prop];
              if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === 'toggle';
                if (value === (hidden ? 'hide' : 'show')) {
                  // Pretend to be hidden if this is a "show" and
                  // there is still data from a stopped show/hide
                  if (value === 'show' && dataShow && dataShow[prop] !== undefined) {
                    hidden = true;

                    // Ignore all other no-op show/hide data
                  } else {
                    continue;
                  }
                }
                orig[prop] = (dataShow && dataShow[prop]) || jQuery.style(elem, prop);
              }
            }

            // Bail out if this is a no-op like .hide().hide()
            propTween = !jQuery.isEmptyObject(props);
            if (!propTween && jQuery.isEmptyObject(orig)) {
              return;
            }

            // Restrict "overflow" and "display" styles during box animations
            if (isBox && elem.nodeType === 1) {
              // Support: IE <=9 - 11, Edge 12 - 15
              // Record all 3 overflow attributes because IE does not infer the shorthand
              // from identically-valued overflowX and overflowY and Edge just mirrors
              // the overflowX value there.
              opts.overflow = [style.overflow, style.overflowX, style.overflowY];

              // Identify a display type, preferring old show/hide data over the CSS cascade
              restoreDisplay = dataShow && dataShow.display;
              if (restoreDisplay == null) {
                restoreDisplay = dataPriv.get(elem, 'display');
              }
              display = jQuery.css(elem, 'display');
              if (display === 'none') {
                if (restoreDisplay) {
                  display = restoreDisplay;
                } else {
                  // Get nonempty value(s) by temporarily forcing visibility
                  showHide([elem], true);
                  restoreDisplay = elem.style.display || restoreDisplay;
                  display = jQuery.css(elem, 'display');
                  showHide([elem]);
                }
              }

              // Animate inline elements as inline-block
              if (display === 'inline' || (display === 'inline-block' && restoreDisplay != null)) {
                if (jQuery.css(elem, 'float') === 'none') {
                  // Restore the original display value at the end of pure show/hide animations
                  if (!propTween) {
                    anim.done(function () {
                      style.display = restoreDisplay;
                    });
                    if (restoreDisplay == null) {
                      display = style.display;
                      restoreDisplay = display === 'none' ? '' : display;
                    }
                  }
                  style.display = 'inline-block';
                }
              }
            }

            if (opts.overflow) {
              style.overflow = 'hidden';
              anim.always(function () {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
              });
            }

            // Implement show/hide animations
            propTween = false;
            for (prop in orig) {
              // General show/hide setup for this element animation
              if (!propTween) {
                if (dataShow) {
                  if ('hidden' in dataShow) {
                    hidden = dataShow.hidden;
                  }
                } else {
                  dataShow = dataPriv.access(elem, 'fxshow', { display: restoreDisplay });
                }

                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) {
                  dataShow.hidden = !hidden;
                }

                // Show elements before animating them
                if (hidden) {
                  showHide([elem], true);
                }

                /* eslint-disable no-loop-func */

                anim.done(function () {
                  /* eslint-enable no-loop-func */

                  // The final step of a "hide" animation is actually hiding the element
                  if (!hidden) {
                    showHide([elem]);
                  }
                  dataPriv.remove(elem, 'fxshow');
                  for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                  }
                });
              }

              // Per-property setup
              propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
              if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                  propTween.end = propTween.start;
                  propTween.start = 0;
                }
              }
            }
          }

          function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;

            // camelCase, specialEasing and expand cssHook pass
            for (index in props) {
              name = camelCase(index);
              easing = specialEasing[name];
              value = props[index];
              if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
              }

              if (index !== name) {
                props[name] = value;
                delete props[index];
              }

              hooks = jQuery.cssHooks[name];
              if (hooks && 'expand' in hooks) {
                value = hooks.expand(value);
                delete props[name];

                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for (index in value) {
                  if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                  }
                }
              } else {
                specialEasing[name] = easing;
              }
            }
          }

          function Animation(elem, properties, options) {
            var result,
              stopped,
              index = 0,
              length = Animation.prefilters.length,
              deferred = jQuery.Deferred().always(function () {
                // Don't match elem in the :animated selector
                delete tick.elem;
              }),
              tick = function () {
                if (stopped) {
                  return false;
                }
                var currentTime = fxNow || createFxNow(),
                  remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                  // Support: Android 2.3 only
                  // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                  temp = remaining / animation.duration || 0,
                  percent = 1 - temp,
                  index = 0,
                  length = animation.tweens.length;

                for (; index < length; index++) {
                  animation.tweens[index].run(percent);
                }

                deferred.notifyWith(elem, [animation, percent, remaining]);

                // If there's more to do, yield
                if (percent < 1 && length) {
                  return remaining;
                }

                // If this was an empty animation, synthesize a final progress notification
                if (!length) {
                  deferred.notifyWith(elem, [animation, 1, 0]);
                }

                // Resolve the animation and report its conclusion
                deferred.resolveWith(elem, [animation]);
                return false;
              },
              animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(
                  true,
                  {
                    specialEasing: {},
                    easing: jQuery.easing._default
                  },
                  options
                ),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                  var tween = jQuery.Tween(
                    elem,
                    animation.opts,
                    prop,
                    end,
                    animation.opts.specialEasing[prop] || animation.opts.easing
                  );
                  animation.tweens.push(tween);
                  return tween;
                },
                stop: function (gotoEnd) {
                  var index = 0,
                    // If we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                    length = gotoEnd ? animation.tweens.length : 0;
                  if (stopped) {
                    return this;
                  }
                  stopped = true;
                  for (; index < length; index++) {
                    animation.tweens[index].run(1);
                  }

                  // Resolve when we played the last frame; otherwise, reject
                  if (gotoEnd) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                    deferred.resolveWith(elem, [animation, gotoEnd]);
                  } else {
                    deferred.rejectWith(elem, [animation, gotoEnd]);
                  }
                  return this;
                }
              }),
              props = animation.props;

            propFilter(props, animation.opts.specialEasing);

            for (; index < length; index++) {
              result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
              if (result) {
                if (isFunction(result.stop)) {
                  jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                }
                return result;
              }
            }

            jQuery.map(props, createTween, animation);

            if (isFunction(animation.opts.start)) {
              animation.opts.start.call(elem, animation);
            }

            // Attach callbacks from options
            animation
              .progress(animation.opts.progress)
              .done(animation.opts.done, animation.opts.complete)
              .fail(animation.opts.fail)
              .always(animation.opts.always);

            jQuery.fx.timer(
              jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
              })
            );

            return animation;
          }

          jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
              '*': [
                function (prop, value) {
                  var tween = this.createTween(prop, value);
                  adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                  return tween;
                }
              ]
            },

            tweener: function (props, callback) {
              if (isFunction(props)) {
                callback = props;
                props = ['*'];
              } else {
                props = props.match(rnothtmlwhite);
              }

              var prop,
                index = 0,
                length = props.length;

              for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
              }
            },

            prefilters: [defaultPrefilter],

            prefilter: function (callback, prepend) {
              if (prepend) {
                Animation.prefilters.unshift(callback);
              } else {
                Animation.prefilters.push(callback);
              }
            }
          });

          jQuery.speed = function (speed, easing, fn) {
            var opt =
              speed && typeof speed === 'object'
                ? jQuery.extend({}, speed)
                : {
                    complete: fn || (!fn && easing) || (isFunction(speed) && speed),
                    duration: speed,
                    easing: (fn && easing) || (easing && !isFunction(easing) && easing)
                  };

            // Go to the end state if fx are off
            if (jQuery.fx.off) {
              opt.duration = 0;
            } else {
              if (typeof opt.duration !== 'number') {
                if (opt.duration in jQuery.fx.speeds) {
                  opt.duration = jQuery.fx.speeds[opt.duration];
                } else {
                  opt.duration = jQuery.fx.speeds._default;
                }
              }
            }

            // Normalize opt.queue - true/undefined/null -> "fx"
            if (opt.queue == null || opt.queue === true) {
              opt.queue = 'fx';
            }

            // Queueing
            opt.old = opt.complete;

            opt.complete = function () {
              if (isFunction(opt.old)) {
                opt.old.call(this);
              }

              if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
              }
            };

            return opt;
          };

          jQuery.fn.extend({
            fadeTo: function (speed, to, easing, callback) {
              // Show any hidden elements after setting opacity to 0
              return (
                this.filter(isHiddenWithinTree)
                  .css('opacity', 0)
                  .show()

                  // Animate to the value specified
                  .end()
                  .animate({ opacity: to }, speed, easing, callback)
              );
            },
            animate: function (prop, speed, easing, callback) {
              var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function () {
                  // Operate on a copy of prop so per-property easing won't be lost
                  var anim = Animation(this, jQuery.extend({}, prop), optall);

                  // Empty animations, or finishing resolves immediately
                  if (empty || dataPriv.get(this, 'finish')) {
                    anim.stop(true);
                  }
                };
              doAnimation.finish = doAnimation;

              return empty || optall.queue === false
                ? this.each(doAnimation)
                : this.queue(optall.queue, doAnimation);
            },
            stop: function (type, clearQueue, gotoEnd) {
              var stopQueue = function (hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
              };

              if (typeof type !== 'string') {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
              }
              if (clearQueue) {
                this.queue(type || 'fx', []);
              }

              return this.each(function () {
                var dequeue = true,
                  index = type != null && type + 'queueHooks',
                  timers = jQuery.timers,
                  data = dataPriv.get(this);

                if (index) {
                  if (data[index] && data[index].stop) {
                    stopQueue(data[index]);
                  }
                } else {
                  for (index in data) {
                    if (data[index] && data[index].stop && rrun.test(index)) {
                      stopQueue(data[index]);
                    }
                  }
                }

                for (index = timers.length; index--; ) {
                  if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                  }
                }

                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) {
                  jQuery.dequeue(this, type);
                }
              });
            },
            finish: function (type) {
              if (type !== false) {
                type = type || 'fx';
              }
              return this.each(function () {
                var index,
                  data = dataPriv.get(this),
                  queue = data[type + 'queue'],
                  hooks = data[type + 'queueHooks'],
                  timers = jQuery.timers,
                  length = queue ? queue.length : 0;

                // Enable finishing flag on private data
                data.finish = true;

                // Empty the queue first
                jQuery.queue(this, type, []);

                if (hooks && hooks.stop) {
                  hooks.stop.call(this, true);
                }

                // Look for any active animations, and finish them
                for (index = timers.length; index--; ) {
                  if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                  }
                }

                // Look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                  if (queue[index] && queue[index].finish) {
                    queue[index].finish.call(this);
                  }
                }

                // Turn off finishing flag
                delete data.finish;
              });
            }
          });

          jQuery.each(['toggle', 'show', 'hide'], function (_i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function (speed, easing, callback) {
              return speed == null || typeof speed === 'boolean'
                ? cssFn.apply(this, arguments)
                : this.animate(genFx(name, true), speed, easing, callback);
            };
          });

          // Generate shortcuts for custom animations
          jQuery.each(
            {
              slideDown: genFx('show'),
              slideUp: genFx('hide'),
              slideToggle: genFx('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' }
            },
            function (name, props) {
              jQuery.fn[name] = function (speed, easing, callback) {
                return this.animate(props, speed, easing, callback);
              };
            }
          );

          jQuery.timers = [];
          jQuery.fx.tick = function () {
            var timer,
              i = 0,
              timers = jQuery.timers;

            fxNow = Date.now();

            for (; i < timers.length; i++) {
              timer = timers[i];

              // Run the timer and safely remove it when done (allowing for external removal)
              if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
              }
            }

            if (!timers.length) {
              jQuery.fx.stop();
            }
            fxNow = undefined;
          };

          jQuery.fx.timer = function (timer) {
            jQuery.timers.push(timer);
            jQuery.fx.start();
          };

          jQuery.fx.interval = 13;
          jQuery.fx.start = function () {
            if (inProgress) {
              return;
            }

            inProgress = true;
            schedule();
          };

          jQuery.fx.stop = function () {
            inProgress = null;
          };

          jQuery.fx.speeds = {
            slow: 600,
            fast: 200,

            // Default speed
            _default: 400
          };

          // Based off of the plugin by Clint Helfers, with permission.
          // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
          jQuery.fn.delay = function (time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || 'fx';

            return this.queue(type, function (next, hooks) {
              var timeout = window.setTimeout(next, time);
              hooks.stop = function () {
                window.clearTimeout(timeout);
              };
            });
          };

          (function () {
            var input = document.createElement('input'),
              select = document.createElement('select'),
              opt = select.appendChild(document.createElement('option'));

            input.type = 'checkbox';

            // Support: Android <=4.3 only
            // Default value for a checkbox should be "on"
            support.checkOn = input.value !== '';

            // Support: IE <=11 only
            // Must access selectedIndex to make default options select
            support.optSelected = opt.selected;

            // Support: IE <=11 only
            // An input loses its value after becoming a radio
            input = document.createElement('input');
            input.value = 't';
            input.type = 'radio';
            support.radioValue = input.value === 't';
          })();

          var boolHook,
            attrHandle = jQuery.expr.attrHandle;

          jQuery.fn.extend({
            attr: function (name, value) {
              return access(this, jQuery.attr, name, value, arguments.length > 1);
            },

            removeAttr: function (name) {
              return this.each(function () {
                jQuery.removeAttr(this, name);
              });
            }
          });

          jQuery.extend({
            attr: function (elem, name, value) {
              var ret,
                hooks,
                nType = elem.nodeType;

              // Don't get/set attributes on text, comment and attribute nodes
              if (nType === 3 || nType === 8 || nType === 2) {
                return;
              }

              // Fallback to prop when attributes are not supported
              if (typeof elem.getAttribute === 'undefined') {
                return jQuery.prop(elem, name, value);
              }

              // Attribute hooks are determined by the lowercase version
              // Grab necessary hook if one is defined
              if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                hooks =
                  jQuery.attrHooks[name.toLowerCase()] ||
                  (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
              }

              if (value !== undefined) {
                if (value === null) {
                  jQuery.removeAttr(elem, name);
                  return;
                }

                if (hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                  return ret;
                }

                elem.setAttribute(name, value + '');
                return value;
              }

              if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
              }

              ret = jQuery.find.attr(elem, name);

              // Non-existent attributes return null, we normalize to undefined
              return ret == null ? undefined : ret;
            },

            attrHooks: {
              type: {
                set: function (elem, value) {
                  if (!support.radioValue && value === 'radio' && nodeName(elem, 'input')) {
                    var val = elem.value;
                    elem.setAttribute('type', value);
                    if (val) {
                      elem.value = val;
                    }
                    return value;
                  }
                }
              }
            },

            removeAttr: function (elem, value) {
              var name,
                i = 0,
                // Attribute names can contain non-HTML whitespace characters
                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                attrNames = value && value.match(rnothtmlwhite);

              if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                  elem.removeAttribute(name);
                }
              }
            }
          });

          // Hooks for boolean attributes
          boolHook = {
            set: function (elem, value, name) {
              if (value === false) {
                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
              } else {
                elem.setAttribute(name, name);
              }
              return name;
            }
          };

          jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;

            attrHandle[name] = function (elem, name, isXML) {
              var ret,
                handle,
                lowercaseName = name.toLowerCase();

              if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
              }
              return ret;
            };
          });

          var rfocusable = /^(?:input|select|textarea|button)$/i,
            rclickable = /^(?:a|area)$/i;

          jQuery.fn.extend({
            prop: function (name, value) {
              return access(this, jQuery.prop, name, value, arguments.length > 1);
            },

            removeProp: function (name) {
              return this.each(function () {
                delete this[jQuery.propFix[name] || name];
              });
            }
          });

          jQuery.extend({
            prop: function (elem, name, value) {
              var ret,
                hooks,
                nType = elem.nodeType;

              // Don't get/set properties on text, comment and attribute nodes
              if (nType === 3 || nType === 8 || nType === 2) {
                return;
              }

              if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
              }

              if (value !== undefined) {
                if (hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                  return ret;
                }

                return (elem[name] = value);
              }

              if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
              }

              return elem[name];
            },

            propHooks: {
              tabIndex: {
                get: function (elem) {
                  // Support: IE <=9 - 11 only
                  // elem.tabIndex doesn't always return the
                  // correct value when it hasn't been explicitly set
                  // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                  // Use proper attribute retrieval(#12072)
                  var tabindex = jQuery.find.attr(elem, 'tabindex');

                  if (tabindex) {
                    return parseInt(tabindex, 10);
                  }

                  if (rfocusable.test(elem.nodeName) || (rclickable.test(elem.nodeName) && elem.href)) {
                    return 0;
                  }

                  return -1;
                }
              }
            },

            propFix: {
              for: 'htmlFor',
              class: 'className'
            }
          });

          // Support: IE <=11 only
          // Accessing the selectedIndex property
          // forces the browser to respect setting selected
          // on the option
          // The getter ensures a default option is selected
          // when in an optgroup
          // eslint rule "no-unused-expressions" is disabled for this code
          // since it considers such accessions noop
          if (!support.optSelected) {
            jQuery.propHooks.selected = {
              get: function (elem) {
                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
                return null;
              },
              set: function (elem) {
                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if (parent) {
                  parent.selectedIndex;

                  if (parent.parentNode) {
                    parent.parentNode.selectedIndex;
                  }
                }
              }
            };
          }

          jQuery.each(
            [
              'tabIndex',
              'readOnly',
              'maxLength',
              'cellSpacing',
              'cellPadding',
              'rowSpan',
              'colSpan',
              'useMap',
              'frameBorder',
              'contentEditable'
            ],
            function () {
              jQuery.propFix[this.toLowerCase()] = this;
            }
          );

          // Strip and collapse whitespace according to HTML spec
          // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
          function stripAndCollapse(value) {
            var tokens = value.match(rnothtmlwhite) || [];
            return tokens.join(' ');
          }

          function getClass(elem) {
            return (elem.getAttribute && elem.getAttribute('class')) || '';
          }

          function classesToArray(value) {
            if (Array.isArray(value)) {
              return value;
            }
            if (typeof value === 'string') {
              return value.match(rnothtmlwhite) || [];
            }
            return [];
          }

          jQuery.fn.extend({
            addClass: function (value) {
              var classes,
                elem,
                cur,
                curValue,
                clazz,
                j,
                finalValue,
                i = 0;

              if (isFunction(value)) {
                return this.each(function (j) {
                  jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
              }

              classes = classesToArray(value);

              if (classes.length) {
                while ((elem = this[i++])) {
                  curValue = getClass(elem);
                  cur = elem.nodeType === 1 && ' ' + stripAndCollapse(curValue) + ' ';

                  if (cur) {
                    j = 0;
                    while ((clazz = classes[j++])) {
                      if (cur.indexOf(' ' + clazz + ' ') < 0) {
                        cur += clazz + ' ';
                      }
                    }

                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                      elem.setAttribute('class', finalValue);
                    }
                  }
                }
              }

              return this;
            },

            removeClass: function (value) {
              var classes,
                elem,
                cur,
                curValue,
                clazz,
                j,
                finalValue,
                i = 0;

              if (isFunction(value)) {
                return this.each(function (j) {
                  jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
              }

              if (!arguments.length) {
                return this.attr('class', '');
              }

              classes = classesToArray(value);

              if (classes.length) {
                while ((elem = this[i++])) {
                  curValue = getClass(elem);

                  // This expression is here for better compressibility (see addClass)
                  cur = elem.nodeType === 1 && ' ' + stripAndCollapse(curValue) + ' ';

                  if (cur) {
                    j = 0;
                    while ((clazz = classes[j++])) {
                      // Remove *all* instances
                      while (cur.indexOf(' ' + clazz + ' ') > -1) {
                        cur = cur.replace(' ' + clazz + ' ', ' ');
                      }
                    }

                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                      elem.setAttribute('class', finalValue);
                    }
                  }
                }
              }

              return this;
            },

            toggleClass: function (value, stateVal) {
              var type = typeof value,
                isValidValue = type === 'string' || Array.isArray(value);

              if (typeof stateVal === 'boolean' && isValidValue) {
                return stateVal ? this.addClass(value) : this.removeClass(value);
              }

              if (isFunction(value)) {
                return this.each(function (i) {
                  jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                });
              }

              return this.each(function () {
                var className, i, self, classNames;

                if (isValidValue) {
                  // Toggle individual class names
                  i = 0;
                  self = jQuery(this);
                  classNames = classesToArray(value);

                  while ((className = classNames[i++])) {
                    // Check each className given, space separated list
                    if (self.hasClass(className)) {
                      self.removeClass(className);
                    } else {
                      self.addClass(className);
                    }
                  }

                  // Toggle whole class name
                } else if (value === undefined || type === 'boolean') {
                  className = getClass(this);
                  if (className) {
                    // Store className if set
                    dataPriv.set(this, '__className__', className);
                  }

                  // If the element has a class name or if we're passed `false`,
                  // then remove the whole classname (if there was one, the above saved it).
                  // Otherwise bring back whatever was previously saved (if anything),
                  // falling back to the empty string if nothing was stored.
                  if (this.setAttribute) {
                    this.setAttribute(
                      'class',
                      className || value === false ? '' : dataPriv.get(this, '__className__') || ''
                    );
                  }
                }
              });
            },

            hasClass: function (selector) {
              var className,
                elem,
                i = 0;

              className = ' ' + selector + ' ';
              while ((elem = this[i++])) {
                if (
                  elem.nodeType === 1 &&
                  (' ' + stripAndCollapse(getClass(elem)) + ' ').indexOf(className) > -1
                ) {
                  return true;
                }
              }

              return false;
            }
          });

          var rreturn = /\r/g;

          jQuery.fn.extend({
            val: function (value) {
              var hooks,
                ret,
                valueIsFunction,
                elem = this[0];

              if (!arguments.length) {
                if (elem) {
                  hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

                  if (hooks && 'get' in hooks && (ret = hooks.get(elem, 'value')) !== undefined) {
                    return ret;
                  }

                  ret = elem.value;

                  // Handle most common string cases
                  if (typeof ret === 'string') {
                    return ret.replace(rreturn, '');
                  }

                  // Handle cases where value is null/undef or number
                  return ret == null ? '' : ret;
                }

                return;
              }

              valueIsFunction = isFunction(value);

              return this.each(function (i) {
                var val;

                if (this.nodeType !== 1) {
                  return;
                }

                if (valueIsFunction) {
                  val = value.call(this, i, jQuery(this).val());
                } else {
                  val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                  val = '';
                } else if (typeof val === 'number') {
                  val += '';
                } else if (Array.isArray(val)) {
                  val = jQuery.map(val, function (value) {
                    return value == null ? '' : value + '';
                  });
                }

                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

                // If set returns undefined, fall back to normal setting
                if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
                  this.value = val;
                }
              });
            }
          });

          jQuery.extend({
            valHooks: {
              option: {
                get: function (elem) {
                  var val = jQuery.find.attr(elem, 'value');
                  return val != null
                    ? val
                    : // Support: IE <=10 - 11 only
                      // option.text throws exceptions (#14686, #14858)
                      // Strip and collapse whitespace
                      // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                      stripAndCollapse(jQuery.text(elem));
                }
              },
              select: {
                get: function (elem) {
                  var value,
                    option,
                    i,
                    options = elem.options,
                    index = elem.selectedIndex,
                    one = elem.type === 'select-one',
                    values = one ? null : [],
                    max = one ? index + 1 : options.length;

                  if (index < 0) {
                    i = max;
                  } else {
                    i = one ? index : 0;
                  }

                  // Loop through all the selected options
                  for (; i < max; i++) {
                    option = options[i];

                    // Support: IE <=9 only
                    // IE8-9 doesn't update selected after form reset (#2551)
                    if (
                      (option.selected || i === index) &&
                      // Don't return options that are disabled or in a disabled optgroup
                      !option.disabled &&
                      (!option.parentNode.disabled || !nodeName(option.parentNode, 'optgroup'))
                    ) {
                      // Get the specific value for the option
                      value = jQuery(option).val();

                      // We don't need an array for one selects
                      if (one) {
                        return value;
                      }

                      // Multi-Selects return an array
                      values.push(value);
                    }
                  }

                  return values;
                },

                set: function (elem, value) {
                  var optionSet,
                    option,
                    options = elem.options,
                    values = jQuery.makeArray(value),
                    i = options.length;

                  while (i--) {
                    option = options[i];

                    /* eslint-disable no-cond-assign */

                    if ((option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1)) {
                      optionSet = true;
                    }

                    /* eslint-enable no-cond-assign */
                  }

                  // Force browsers to behave consistently when non-matching value is set
                  if (!optionSet) {
                    elem.selectedIndex = -1;
                  }
                  return values;
                }
              }
            }
          });

          // Radios and checkboxes getter/setter
          jQuery.each(['radio', 'checkbox'], function () {
            jQuery.valHooks[this] = {
              set: function (elem, value) {
                if (Array.isArray(value)) {
                  return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                }
              }
            };
            if (!support.checkOn) {
              jQuery.valHooks[this].get = function (elem) {
                return elem.getAttribute('value') === null ? 'on' : elem.value;
              };
            }
          });

          // Return jQuery for attributes-only inclusion

          support.focusin = 'onfocusin' in window;

          var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
            stopPropagationCallback = function (e) {
              e.stopPropagation();
            };

          jQuery.extend(jQuery.event, {
            trigger: function (event, data, elem, onlyHandlers) {
              var i,
                cur,
                tmp,
                bubbleType,
                ontype,
                handle,
                special,
                lastElement,
                eventPath = [elem || document],
                type = hasOwn.call(event, 'type') ? event.type : event,
                namespaces = hasOwn.call(event, 'namespace') ? event.namespace.split('.') : [];

              cur = lastElement = tmp = elem = elem || document;

              // Don't do events on text and comment nodes
              if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
              }

              // focus/blur morphs to focusin/out; ensure we're not firing them right now
              if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
              }

              if (type.indexOf('.') > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split('.');
                type = namespaces.shift();
                namespaces.sort();
              }
              ontype = type.indexOf(':') < 0 && 'on' + type;

              // Caller can pass in a jQuery.Event object, Object, or just an event type string
              event = event[jQuery.expando]
                ? event
                : new jQuery.Event(type, typeof event === 'object' && event);

              // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
              event.isTrigger = onlyHandlers ? 2 : 3;
              event.namespace = namespaces.join('.');
              event.rnamespace = event.namespace
                ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null;

              // Clean up the event in case it is being reused
              event.result = undefined;
              if (!event.target) {
                event.target = elem;
              }

              // Clone any incoming data and prepend the event, creating the handler arg list
              data = data == null ? [event] : jQuery.makeArray(data, [event]);

              // Allow special events to draw outside the lines
              special = jQuery.event.special[type] || {};
              if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
              }

              // Determine event propagation path in advance, per W3C events spec (#9951)
              // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
              if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                  cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                  eventPath.push(cur);
                  tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                  eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
              }

              // Fire handlers on the event path
              i = 0;
              while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;

                // jQuery handler
                handle =
                  (dataPriv.get(cur, 'events') || Object.create(null))[event.type] &&
                  dataPriv.get(cur, 'handle');
                if (handle) {
                  handle.apply(cur, data);
                }

                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                  event.result = handle.apply(cur, data);
                  if (event.result === false) {
                    event.preventDefault();
                  }
                }
              }
              event.type = type;

              // If nobody prevented the default action, do it now
              if (!onlyHandlers && !event.isDefaultPrevented()) {
                if (
                  (!special._default || special._default.apply(eventPath.pop(), data) === false) &&
                  acceptData(elem)
                ) {
                  // Call a native DOM method on the target with the same name as the event.
                  // Don't do default actions on window, that's where global variables be (#6170)
                  if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                    // Don't re-trigger an onFOO event when we call its FOO() method
                    tmp = elem[ontype];

                    if (tmp) {
                      elem[ontype] = null;
                    }

                    // Prevent re-triggering of the same event, since we already bubbled it above
                    jQuery.event.triggered = type;

                    if (event.isPropagationStopped()) {
                      lastElement.addEventListener(type, stopPropagationCallback);
                    }

                    elem[type]();

                    if (event.isPropagationStopped()) {
                      lastElement.removeEventListener(type, stopPropagationCallback);
                    }

                    jQuery.event.triggered = undefined;

                    if (tmp) {
                      elem[ontype] = tmp;
                    }
                  }
                }
              }

              return event.result;
            },

            // Piggyback on a donor event to simulate a different one
            // Used only for `focus(in | out)` events
            simulate: function (type, elem, event) {
              var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
              });

              jQuery.event.trigger(e, null, elem);
            }
          });

          jQuery.fn.extend({
            trigger: function (type, data) {
              return this.each(function () {
                jQuery.event.trigger(type, data, this);
              });
            },
            triggerHandler: function (type, data) {
              var elem = this[0];
              if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
              }
            }
          });

          // Support: Firefox <=44
          // Firefox doesn't have focus(in | out) events
          // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
          //
          // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
          // focus(in | out) events fire after focus & blur events,
          // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
          // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
          if (!support.focusin) {
            jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (orig, fix) {
              // Attach a single capturing handler on the document while someone wants focusin/focusout
              var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
              };

              jQuery.event.special[fix] = {
                setup: function () {
                  // Handle: regular nodes (via `this.ownerDocument`), window
                  // (via `this.document`) & document (via `this`).
                  var doc = this.ownerDocument || this.document || this,
                    attaches = dataPriv.access(doc, fix);

                  if (!attaches) {
                    doc.addEventListener(orig, handler, true);
                  }
                  dataPriv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function () {
                  var doc = this.ownerDocument || this.document || this,
                    attaches = dataPriv.access(doc, fix) - 1;

                  if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);
                  } else {
                    dataPriv.access(doc, fix, attaches);
                  }
                }
              };
            });
          }
          var location = window.location;

          var nonce = { guid: Date.now() };

          var rquery = /\?/;

          // Cross-browser xml parsing
          jQuery.parseXML = function (data) {
            var xml;
            if (!data || typeof data !== 'string') {
              return null;
            }

            // Support: IE 9 - 11 only
            // IE throws on parseFromString with invalid input.
            try {
              xml = new window.DOMParser().parseFromString(data, 'text/xml');
            } catch (e) {
              xml = undefined;
            }

            if (!xml || xml.getElementsByTagName('parsererror').length) {
              jQuery.error('Invalid XML: ' + data);
            }
            return xml;
          };

          var rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;

          function buildParams(prefix, obj, traditional, add) {
            var name;

            if (Array.isArray(obj)) {
              // Serialize array item.
              jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {
                  // Treat each array item as a scalar.
                  add(prefix, v);
                } else {
                  // Item is non-scalar (array or object), encode its numeric index.
                  buildParams(
                    prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']',
                    v,
                    traditional,
                    add
                  );
                }
              });
            } else if (!traditional && toType(obj) === 'object') {
              // Serialize object item.
              for (name in obj) {
                buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
              }
            } else {
              // Serialize scalar item.
              add(prefix, obj);
            }
          }

          // Serialize an array of form elements or a set of
          // key/values into a query string
          jQuery.param = function (a, traditional) {
            var prefix,
              s = [],
              add = function (key, valueOrFunction) {
                // If value is a function, invoke it and use its return value
                var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

                s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value == null ? '' : value);
              };

            if (a == null) {
              return '';
            }

            // If an array was passed in, assume that it is an array of form elements.
            if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
              // Serialize the form elements
              jQuery.each(a, function () {
                add(this.name, this.value);
              });
            } else {
              // If traditional, encode the "old" way (the way 1.3.2 or older
              // did it), otherwise encode params recursively.
              for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
              }
            }

            // Return the resulting serialization
            return s.join('&');
          };

          jQuery.fn.extend({
            serialize: function () {
              return jQuery.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, 'elements');
                return elements ? jQuery.makeArray(elements) : this;
              })
                .filter(function () {
                  var type = this.type;

                  // Use .is( ":disabled" ) so that fieldset[disabled] works
                  return (
                    this.name &&
                    !jQuery(this).is(':disabled') &&
                    rsubmittable.test(this.nodeName) &&
                    !rsubmitterTypes.test(type) &&
                    (this.checked || !rcheckableType.test(type))
                  );
                })
                .map(function (_i, elem) {
                  var val = jQuery(this).val();

                  if (val == null) {
                    return null;
                  }

                  if (Array.isArray(val)) {
                    return jQuery.map(val, function (val) {
                      return { name: elem.name, value: val.replace(rCRLF, '\r\n') };
                    });
                  }

                  return { name: elem.name, value: val.replace(rCRLF, '\r\n') };
                })
                .get();
            }
          });

          var r20 = /%20/g,
            rhash = /#.*$/,
            rantiCache = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            // #7653, #8125, #8152: local protocol detection
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            /* Prefilters
             * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
             * 2) These are called:
             *    - BEFORE asking for a transport
             *    - AFTER param serialization (s.data is a string if s.processData is true)
             * 3) key is the dataType
             * 4) the catchall symbol "*" can be used
             * 5) execution will start with transport dataType and THEN continue down to "*" if needed
             */
            prefilters = {},
            /* Transports bindings
             * 1) key is the dataType
             * 2) the catchall symbol "*" can be used
             * 3) selection will start with transport dataType and THEN go to "*" if needed
             */
            transports = {},
            // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
            allTypes = '*/'.concat('*'),
            // Anchor tag for parsing the document origin
            originAnchor = document.createElement('a');
          originAnchor.href = location.href;

          // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
          function addToPrefiltersOrTransports(structure) {
            // dataTypeExpression is optional and defaults to "*"
            return function (dataTypeExpression, func) {
              if (typeof dataTypeExpression !== 'string') {
                func = dataTypeExpression;
                dataTypeExpression = '*';
              }

              var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

              if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while ((dataType = dataTypes[i++])) {
                  // Prepend if requested
                  if (dataType[0] === '+') {
                    dataType = dataType.slice(1) || '*';
                    (structure[dataType] = structure[dataType] || []).unshift(func);

                    // Otherwise append
                  } else {
                    (structure[dataType] = structure[dataType] || []).push(func);
                  }
                }
              }
            };
          }

          // Base inspection function for prefilters and transports
          function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {},
              seekingTransport = structure === transports;

            function inspect(dataType) {
              var selected;
              inspected[dataType] = true;
              jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (
                  typeof dataTypeOrTransport === 'string' &&
                  !seekingTransport &&
                  !inspected[dataTypeOrTransport]
                ) {
                  options.dataTypes.unshift(dataTypeOrTransport);
                  inspect(dataTypeOrTransport);
                  return false;
                } else if (seekingTransport) {
                  return !(selected = dataTypeOrTransport);
                }
              });
              return selected;
            }

            return inspect(options.dataTypes[0]) || (!inspected['*'] && inspect('*'));
          }

          // A special extend for ajax options
          // that takes "flat" options (not to be deep extended)
          // Fixes #9887
          function ajaxExtend(target, src) {
            var key,
              deep,
              flatOptions = jQuery.ajaxSettings.flatOptions || {};

            for (key in src) {
              if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
              }
            }
            if (deep) {
              jQuery.extend(true, target, deep);
            }

            return target;
          }

          /* Handles responses to an ajax request:
           * - finds the right dataType (mediates between content-type and expected dataType)
           * - returns the corresponding response
           */
          function ajaxHandleResponses(s, jqXHR, responses) {
            var ct,
              type,
              finalDataType,
              firstDataType,
              contents = s.contents,
              dataTypes = s.dataTypes;

            // Remove auto dataType and get content-type in the process
            while (dataTypes[0] === '*') {
              dataTypes.shift();
              if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader('Content-Type');
              }
            }

            // Check if we're dealing with a known content-type
            if (ct) {
              for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                  dataTypes.unshift(type);
                  break;
                }
              }
            }

            // Check to see if we have a response for the expected dataType
            if (dataTypes[0] in responses) {
              finalDataType = dataTypes[0];
            } else {
              // Try convertible dataTypes
              for (type in responses) {
                if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
                  finalDataType = type;
                  break;
                }
                if (!firstDataType) {
                  firstDataType = type;
                }
              }

              // Or just use first one
              finalDataType = finalDataType || firstDataType;
            }

            // If we found a dataType
            // We add the dataType to the list if needed
            // and return the corresponding response
            if (finalDataType) {
              if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
              }
              return responses[finalDataType];
            }
          }

          /* Chain conversions given the request and the original response
           * Also sets the responseXXX fields on the jqXHR instance
           */
          function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2,
              current,
              conv,
              tmp,
              prev,
              converters = {},
              // Work with a copy of dataTypes in case we need to modify it for conversion
              dataTypes = s.dataTypes.slice();

            // Create converters map with lowercased keys
            if (dataTypes[1]) {
              for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
              }
            }

            current = dataTypes.shift();

            // Convert to each sequential dataType
            while (current) {
              if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
              }

              // Apply the dataFilter if provided
              if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
              }

              prev = current;
              current = dataTypes.shift();

              if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === '*') {
                  current = prev;

                  // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== '*' && prev !== current) {
                  // Seek a direct converter
                  conv = converters[prev + ' ' + current] || converters['* ' + current];

                  // If none found, seek a pair
                  if (!conv) {
                    for (conv2 in converters) {
                      // If conv2 outputs current
                      tmp = conv2.split(' ');
                      if (tmp[1] === current) {
                        // If prev can be converted to accepted input
                        conv = converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]];
                        if (conv) {
                          // Condense equivalence converters
                          if (conv === true) {
                            conv = converters[conv2];

                            // Otherwise, insert the intermediate dataType
                          } else if (converters[conv2] !== true) {
                            current = tmp[0];
                            dataTypes.unshift(tmp[1]);
                          }
                          break;
                        }
                      }
                    }
                  }

                  // Apply converter (if not an equivalence)
                  if (conv !== true) {
                    // Unless errors are allowed to bubble, catch and return them
                    if (conv && s.throws) {
                      response = conv(response);
                    } else {
                      try {
                        response = conv(response);
                      } catch (e) {
                        return {
                          state: 'parsererror',
                          error: conv ? e : 'No conversion from ' + prev + ' to ' + current
                        };
                      }
                    }
                  }
                }
              }
            }

            return { state: 'success', data: response };
          }

          jQuery.extend({
            // Counter for holding the number of active queries
            active: 0,

            // Last-Modified header cache for next request
            lastModified: {},
            etag: {},

            ajaxSettings: {
              url: location.href,
              type: 'GET',
              isLocal: rlocalProtocol.test(location.protocol),
              global: true,
              processData: true,
              async: true,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

              /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

              accepts: {
                '*': allTypes,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
              },

              contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
              },

              responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
              },

              // Data converters
              // Keys separate source (or catchall "*") and destination types with a single space
              converters: {
                // Convert anything to text
                '* text': String,

                // Text to html (true = no transformation)
                'text html': true,

                // Evaluate text as a json expression
                'text json': JSON.parse,

                // Parse text as xml
                'text xml': jQuery.parseXML
              },

              // For options that shouldn't be deep extended:
              // you can add your own custom options here if
              // and when you create one that shouldn't be
              // deep extended (see ajaxExtend)
              flatOptions: {
                url: true,
                context: true
              }
            },

            // Creates a full fledged settings object into target
            // with both ajaxSettings and settings fields.
            // If target is omitted, writes into ajaxSettings.
            ajaxSetup: function (target, settings) {
              return settings
                ? // Building a settings object
                  ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
                : // Extending ajaxSettings
                  ajaxExtend(jQuery.ajaxSettings, target);
            },

            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),

            // Main method
            ajax: function (url, options) {
              // If url is an object, simulate pre-1.5 signature
              if (typeof url === 'object') {
                options = url;
                url = undefined;
              }

              // Force options to be an object
              options = options || {};

              var transport,
                // URL without anti-cache param
                cacheURL,
                // Response headers
                responseHeadersString,
                responseHeaders,
                // timeout handle
                timeoutTimer,
                // Url cleanup var
                urlAnchor,
                // Request state (becomes false upon send and true upon completion)
                completed,
                // To know if global events are to be dispatched
                fireGlobals,
                // Loop variable
                i,
                // uncached part of the url
                uncached,
                // Create the final options object
                s = jQuery.ajaxSetup({}, options),
                // Callbacks context
                callbackContext = s.context || s,
                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext =
                  s.context && (callbackContext.nodeType || callbackContext.jquery)
                    ? jQuery(callbackContext)
                    : jQuery.event,
                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks('once memory'),
                // Status-dependent callbacks
                statusCode = s.statusCode || {},
                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},
                // Default abort message
                strAbort = 'canceled',
                // Fake xhr
                jqXHR = {
                  readyState: 0,

                  // Builds headers hashtable if needed
                  getResponseHeader: function (key) {
                    var match;
                    if (completed) {
                      if (!responseHeaders) {
                        responseHeaders = {};
                        while ((match = rheaders.exec(responseHeadersString))) {
                          responseHeaders[match[1].toLowerCase() + ' '] = (
                            responseHeaders[match[1].toLowerCase() + ' '] || []
                          ).concat(match[2]);
                        }
                      }
                      match = responseHeaders[key.toLowerCase() + ' '];
                    }
                    return match == null ? null : match.join(', ');
                  },

                  // Raw string
                  getAllResponseHeaders: function () {
                    return completed ? responseHeadersString : null;
                  },

                  // Caches the header
                  setRequestHeader: function (name, value) {
                    if (completed == null) {
                      name = requestHeadersNames[name.toLowerCase()] =
                        requestHeadersNames[name.toLowerCase()] || name;
                      requestHeaders[name] = value;
                    }
                    return this;
                  },

                  // Overrides response content-type header
                  overrideMimeType: function (type) {
                    if (completed == null) {
                      s.mimeType = type;
                    }
                    return this;
                  },

                  // Status-dependent callbacks
                  statusCode: function (map) {
                    var code;
                    if (map) {
                      if (completed) {
                        // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                      } else {
                        // Lazy-add the new callbacks in a way that preserves old ones
                        for (code in map) {
                          statusCode[code] = [statusCode[code], map[code]];
                        }
                      }
                    }
                    return this;
                  },

                  // Cancel the request
                  abort: function (statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                      transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                  }
                };

              // Attach deferreds
              deferred.promise(jqXHR);

              // Add protocol if not provided (prefilters might expect it)
              // Handle falsy url in the settings object (#10093: consistency with old signature)
              // We also use the url parameter if available
              s.url = ((url || s.url || location.href) + '').replace(rprotocol, location.protocol + '//');

              // Alias method option to type as per ticket #12004
              s.type = options.method || options.type || s.method || s.type;

              // Extract dataTypes list
              s.dataTypes = (s.dataType || '*').toLowerCase().match(rnothtmlwhite) || [''];

              // A cross-domain request is in order when the origin doesn't match the current origin.
              if (s.crossDomain == null) {
                urlAnchor = document.createElement('a');

                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                  urlAnchor.href = s.url;

                  // Support: IE <=8 - 11 only
                  // Anchor's host property isn't correctly set when s.url is relative
                  urlAnchor.href = urlAnchor.href;
                  s.crossDomain =
                    originAnchor.protocol + '//' + originAnchor.host !==
                    urlAnchor.protocol + '//' + urlAnchor.host;
                } catch (e) {
                  // If there is an error parsing the URL, assume it is crossDomain,
                  // it can be rejected by the transport if it is invalid
                  s.crossDomain = true;
                }
              }

              // Convert data if not already a string
              if (s.data && s.processData && typeof s.data !== 'string') {
                s.data = jQuery.param(s.data, s.traditional);
              }

              // Apply prefilters
              inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

              // If request was aborted inside a prefilter, stop there
              if (completed) {
                return jqXHR;
              }

              // We can fire global events as of now if asked to
              // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
              fireGlobals = jQuery.event && s.global;

              // Watch for a new set of requests
              if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger('ajaxStart');
              }

              // Uppercase the type
              s.type = s.type.toUpperCase();

              // Determine if request has content
              s.hasContent = !rnoContent.test(s.type);

              // Save the URL in case we're toying with the If-Modified-Since
              // and/or If-None-Match header later on
              // Remove hash to simplify url manipulation
              cacheURL = s.url.replace(rhash, '');

              // More options handling for requests with no content
              if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);

                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === 'string')) {
                  cacheURL += (rquery.test(cacheURL) ? '&' : '?') + s.data;

                  // #9682: remove data so that it's not used in an eventual retry
                  delete s.data;
                }

                // Add or update anti-cache param if needed
                if (s.cache === false) {
                  cacheURL = cacheURL.replace(rantiCache, '$1');
                  uncached = (rquery.test(cacheURL) ? '&' : '?') + '_=' + nonce.guid++ + uncached;
                }

                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;

                // Change '%20' to '+' if this is encoded form body content (gh-2658)
              } else if (
                s.data &&
                s.processData &&
                (s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0
              ) {
                s.data = s.data.replace(r20, '+');
              }

              // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
              if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                  jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                  jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL]);
                }
              }

              // Set the correct header, if data is being sent
              if ((s.data && s.hasContent && s.contentType !== false) || options.contentType) {
                jqXHR.setRequestHeader('Content-Type', s.contentType);
              }

              // Set the Accepts header for the server, depending on the dataType
              jqXHR.setRequestHeader(
                'Accept',
                s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                  ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '')
                  : s.accepts['*']
              );

              // Check for headers option
              for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
              }

              // Allow custom headers/mimetypes and early abort
              if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
                // Abort if not done already and return
                return jqXHR.abort();
              }

              // Aborting is no longer a cancellation
              strAbort = 'abort';

              // Install callbacks on deferreds
              completeDeferred.add(s.complete);
              jqXHR.done(s.success);
              jqXHR.fail(s.error);

              // Get transport
              transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

              // If no transport, we auto-abort
              if (!transport) {
                done(-1, 'No Transport');
              } else {
                jqXHR.readyState = 1;

                // Send global event
                if (fireGlobals) {
                  globalEventContext.trigger('ajaxSend', [jqXHR, s]);
                }

                // If request was aborted inside ajaxSend, stop there
                if (completed) {
                  return jqXHR;
                }

                // Timeout
                if (s.async && s.timeout > 0) {
                  timeoutTimer = window.setTimeout(function () {
                    jqXHR.abort('timeout');
                  }, s.timeout);
                }

                try {
                  completed = false;
                  transport.send(requestHeaders, done);
                } catch (e) {
                  // Rethrow post-completion exceptions
                  if (completed) {
                    throw e;
                  }

                  // Propagate others as results
                  done(-1, e);
                }
              }

              // Callback for when everything is done
              function done(status, nativeStatusText, responses, headers) {
                var isSuccess,
                  success,
                  error,
                  response,
                  modified,
                  statusText = nativeStatusText;

                // Ignore repeat invocations
                if (completed) {
                  return;
                }

                completed = true;

                // Clear timeout if it exists
                if (timeoutTimer) {
                  window.clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || '';

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = (status >= 200 && status < 300) || status === 304;

                // Get response data
                if (responses) {
                  response = ajaxHandleResponses(s, jqXHR, responses);
                }

                // Use a noop converter for missing script
                if (!isSuccess && jQuery.inArray('script', s.dataTypes) > -1) {
                  s.converters['text script'] = function () {};
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);

                // If successful, handle type chaining
                if (isSuccess) {
                  // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                  if (s.ifModified) {
                    modified = jqXHR.getResponseHeader('Last-Modified');
                    if (modified) {
                      jQuery.lastModified[cacheURL] = modified;
                    }
                    modified = jqXHR.getResponseHeader('etag');
                    if (modified) {
                      jQuery.etag[cacheURL] = modified;
                    }
                  }

                  // if no content
                  if (status === 204 || s.type === 'HEAD') {
                    statusText = 'nocontent';

                    // if not modified
                  } else if (status === 304) {
                    statusText = 'notmodified';

                    // If we have data, let's convert it
                  } else {
                    statusText = response.state;
                    success = response.data;
                    error = response.error;
                    isSuccess = !error;
                  }
                } else {
                  // Extract error from statusText and normalize for non-aborts
                  error = statusText;
                  if (status || !statusText) {
                    statusText = 'error';
                    if (status < 0) {
                      status = 0;
                    }
                  }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + '';

                // Success/Error
                if (isSuccess) {
                  deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                  deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;

                if (fireGlobals) {
                  globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError', [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                  ]);
                }

                // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                  globalEventContext.trigger('ajaxComplete', [jqXHR, s]);

                  // Handle the global AJAX counter
                  if (!--jQuery.active) {
                    jQuery.event.trigger('ajaxStop');
                  }
                }
              }

              return jqXHR;
            },

            getJSON: function (url, data, callback) {
              return jQuery.get(url, data, callback, 'json');
            },

            getScript: function (url, callback) {
              return jQuery.get(url, undefined, callback, 'script');
            }
          });

          jQuery.each(['get', 'post'], function (_i, method) {
            jQuery[method] = function (url, data, callback, type) {
              // Shift arguments if data argument was omitted
              if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
              }

              // The url can be an options object (which then must have .url)
              return jQuery.ajax(
                jQuery.extend(
                  {
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                  },
                  jQuery.isPlainObject(url) && url
                )
              );
            };
          });

          jQuery.ajaxPrefilter(function (s) {
            var i;
            for (i in s.headers) {
              if (i.toLowerCase() === 'content-type') {
                s.contentType = s.headers[i] || '';
              }
            }
          });

          jQuery._evalUrl = function (url, options, doc) {
            return jQuery.ajax({
              url: url,

              // Make this explicit, since user can override this through ajaxSetup (#11264)
              type: 'GET',
              dataType: 'script',
              cache: true,
              async: false,
              global: false,

              // Only evaluate the response if it is successful (gh-4126)
              // dataFilter is not invoked for failure responses, so using it instead
              // of the default converter is kludgy but it works.
              converters: {
                'text script': function () {}
              },
              dataFilter: function (response) {
                jQuery.globalEval(response, options, doc);
              }
            });
          };

          jQuery.fn.extend({
            wrapAll: function (html) {
              var wrap;

              if (this[0]) {
                if (isFunction(html)) {
                  html = html.call(this[0]);
                }

                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                  wrap.insertBefore(this[0]);
                }

                wrap
                  .map(function () {
                    var elem = this;

                    while (elem.firstElementChild) {
                      elem = elem.firstElementChild;
                    }

                    return elem;
                  })
                  .append(this);
              }

              return this;
            },

            wrapInner: function (html) {
              if (isFunction(html)) {
                return this.each(function (i) {
                  jQuery(this).wrapInner(html.call(this, i));
                });
              }

              return this.each(function () {
                var self = jQuery(this),
                  contents = self.contents();

                if (contents.length) {
                  contents.wrapAll(html);
                } else {
                  self.append(html);
                }
              });
            },

            wrap: function (html) {
              var htmlIsFunction = isFunction(html);

              return this.each(function (i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
              });
            },

            unwrap: function (selector) {
              this.parent(selector)
                .not('body')
                .each(function () {
                  jQuery(this).replaceWith(this.childNodes);
                });
              return this;
            }
          });

          jQuery.expr.pseudos.hidden = function (elem) {
            return !jQuery.expr.pseudos.visible(elem);
          };
          jQuery.expr.pseudos.visible = function (elem) {
            return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
          };

          jQuery.ajaxSettings.xhr = function () {
            try {
              return new window.XMLHttpRequest();
            } catch (e) {}
          };

          var xhrSuccessStatus = {
              // File protocol always yields status code 0, assume 200
              0: 200,

              // Support: IE <=9 only
              // #1450: sometimes IE returns 1223 when it should be 204
              1223: 204
            },
            xhrSupported = jQuery.ajaxSettings.xhr();

          support.cors = !!xhrSupported && 'withCredentials' in xhrSupported;
          support.ajax = xhrSupported = !!xhrSupported;

          jQuery.ajaxTransport(function (options) {
            var callback, errorCallback;

            // Cross domain only allowed if supported through XMLHttpRequest
            if (support.cors || (xhrSupported && !options.crossDomain)) {
              return {
                send: function (headers, complete) {
                  var i,
                    xhr = options.xhr();

                  xhr.open(options.type, options.url, options.async, options.username, options.password);

                  // Apply custom fields if provided
                  if (options.xhrFields) {
                    for (i in options.xhrFields) {
                      xhr[i] = options.xhrFields[i];
                    }
                  }

                  // Override mime type if needed
                  if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                  }

                  // X-Requested-With header
                  // For cross-domain requests, seeing as conditions for a preflight are
                  // akin to a jigsaw puzzle, we simply never set it to be sure.
                  // (it can always be set on a per-request basis or even using ajaxSetup)
                  // For same-domain requests, won't change header if already provided.
                  if (!options.crossDomain && !headers['X-Requested-With']) {
                    headers['X-Requested-With'] = 'XMLHttpRequest';
                  }

                  // Set headers
                  for (i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                  }

                  // Callback
                  callback = function (type) {
                    return function () {
                      if (callback) {
                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                        if (type === 'abort') {
                          xhr.abort();
                        } else if (type === 'error') {
                          // Support: IE <=9 only
                          // On a manual native abort, IE9 throws
                          // errors on any property access that is not readyState
                          if (typeof xhr.status !== 'number') {
                            complete(0, 'error');
                          } else {
                            complete(
                              // File: protocol always yields status 0; see #8605, #14207
                              xhr.status,
                              xhr.statusText
                            );
                          }
                        } else {
                          complete(
                            xhrSuccessStatus[xhr.status] || xhr.status,
                            xhr.statusText,

                            // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || 'text') !== 'text' || typeof xhr.responseText !== 'string'
                              ? { binary: xhr.response }
                              : { text: xhr.responseText },
                            xhr.getAllResponseHeaders()
                          );
                        }
                      }
                    };
                  };

                  // Listen to events
                  xhr.onload = callback();
                  errorCallback = xhr.onerror = xhr.ontimeout = callback('error');

                  // Support: IE 9 only
                  // Use onreadystatechange to replace onabort
                  // to handle uncaught aborts
                  if (xhr.onabort !== undefined) {
                    xhr.onabort = errorCallback;
                  } else {
                    xhr.onreadystatechange = function () {
                      // Check readyState before timeout as it changes
                      if (xhr.readyState === 4) {
                        // Allow onerror to be called first,
                        // but that will not handle a native abort
                        // Also, save errorCallback to a variable
                        // as xhr.onerror cannot be accessed
                        window.setTimeout(function () {
                          if (callback) {
                            errorCallback();
                          }
                        });
                      }
                    };
                  }

                  // Create the abort callback
                  callback = callback('abort');

                  try {
                    // Do send the request (this may raise an exception)
                    xhr.send((options.hasContent && options.data) || null);
                  } catch (e) {
                    // #14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) {
                      throw e;
                    }
                  }
                },

                abort: function () {
                  if (callback) {
                    callback();
                  }
                }
              };
            }
          });

          // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
          jQuery.ajaxPrefilter(function (s) {
            if (s.crossDomain) {
              s.contents.script = false;
            }
          });

          // Install script dataType
          jQuery.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, ' +
                'application/ecmascript, application/x-ecmascript'
            },
            contents: {
              script: /\b(?:java|ecma)script\b/
            },
            converters: {
              'text script': function (text) {
                jQuery.globalEval(text);
                return text;
              }
            }
          });

          // Handle cache's special case and crossDomain
          jQuery.ajaxPrefilter('script', function (s) {
            if (s.cache === undefined) {
              s.cache = false;
            }
            if (s.crossDomain) {
              s.type = 'GET';
            }
          });

          // Bind script tag hack transport
          jQuery.ajaxTransport('script', function (s) {
            // This transport only deals with cross domain or forced-by-attrs requests
            if (s.crossDomain || s.scriptAttrs) {
              var script, callback;
              return {
                send: function (_, complete) {
                  script = jQuery('<script>')
                    .attr(s.scriptAttrs || {})
                    .prop({ charset: s.scriptCharset, src: s.url })
                    .on(
                      'load error',
                      (callback = function (evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                          complete(evt.type === 'error' ? 404 : 200, evt.type);
                        }
                      })
                    );

                  // Use native DOM manipulation to avoid our domManip AJAX trickery
                  document.head.appendChild(script[0]);
                },
                abort: function () {
                  if (callback) {
                    callback();
                  }
                }
              };
            }
          });

          var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;

          // Default jsonp settings
          jQuery.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
              var callback = oldCallbacks.pop() || jQuery.expando + '_' + nonce.guid++;
              this[callback] = true;
              return callback;
            }
          });

          // Detect, normalize options and install callbacks for jsonp requests
          jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
            var callbackName,
              overwritten,
              responseContainer,
              jsonProp =
                s.jsonp !== false &&
                (rjsonp.test(s.url)
                  ? 'url'
                  : typeof s.data === 'string' &&
                    (s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                    rjsonp.test(s.data) &&
                    'data');

            // Handle iff the expected data type is "jsonp" or we have a parameter to set
            if (jsonProp || s.dataTypes[0] === 'jsonp') {
              // Get callback name, remembering preexisting value associated with it
              callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
                ? s.jsonpCallback()
                : s.jsonpCallback;

              // Insert callback into url or form data
              if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName);
              } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName;
              }

              // Use data converter to retrieve json after script execution
              s.converters['script json'] = function () {
                if (!responseContainer) {
                  jQuery.error(callbackName + ' was not called');
                }
                return responseContainer[0];
              };

              // Force json dataType
              s.dataTypes[0] = 'json';

              // Install callback
              overwritten = window[callbackName];
              window[callbackName] = function () {
                responseContainer = arguments;
              };

              // Clean-up function (fires after converters)
              jqXHR.always(function () {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) {
                  jQuery(window).removeProp(callbackName);

                  // Otherwise restore preexisting value
                } else {
                  window[callbackName] = overwritten;
                }

                // Save back as free
                if (s[callbackName]) {
                  // Make sure that re-using the options doesn't screw things around
                  s.jsonpCallback = originalSettings.jsonpCallback;

                  // Save the callback name for future use
                  oldCallbacks.push(callbackName);
                }

                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) {
                  overwritten(responseContainer[0]);
                }

                responseContainer = overwritten = undefined;
              });

              // Delegate to script
              return 'script';
            }
          });

          // Support: Safari 8 only
          // In Safari 8 documents created via document.implementation.createHTMLDocument
          // collapse sibling forms: the second one becomes a child of the first one.
          // Because of that, this security measure has to be disabled in Safari 8.
          // https://bugs.webkit.org/show_bug.cgi?id=137337
          support.createHTMLDocument = (function () {
            var body = document.implementation.createHTMLDocument('').body;
            body.innerHTML = '<form></form><form></form>';
            return body.childNodes.length === 2;
          })();

          // Argument "data" should be string of html
          // context (optional): If specified, the fragment will be created in this context,
          // defaults to document
          // keepScripts (optional): If true, will include scripts passed in the html string
          jQuery.parseHTML = function (data, context, keepScripts) {
            if (typeof data !== 'string') {
              return [];
            }
            if (typeof context === 'boolean') {
              keepScripts = context;
              context = false;
            }

            var base, parsed, scripts;

            if (!context) {
              // Stop scripts or inline event handlers from being executed immediately
              // by using document.implementation
              if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument('');

                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement('base');
                base.href = document.location.href;
                context.head.appendChild(base);
              } else {
                context = document;
              }
            }

            parsed = rsingleTag.exec(data);
            scripts = !keepScripts && [];

            // Single tag
            if (parsed) {
              return [context.createElement(parsed[1])];
            }

            parsed = buildFragment([data], context, scripts);

            if (scripts && scripts.length) {
              jQuery(scripts).remove();
            }

            return jQuery.merge([], parsed.childNodes);
          };

          /**
           * Load a url into a page
           */
          jQuery.fn.load = function (url, params, callback) {
            var selector,
              type,
              response,
              self = this,
              off = url.indexOf(' ');

            if (off > -1) {
              selector = stripAndCollapse(url.slice(off));
              url = url.slice(0, off);
            }

            // If it's a function
            if (isFunction(params)) {
              // We assume that it's the callback
              callback = params;
              params = undefined;

              // Otherwise, build a param string
            } else if (params && typeof params === 'object') {
              type = 'POST';
            }

            // If we have elements to modify, make the request
            if (self.length > 0) {
              jQuery
                .ajax({
                  url: url,

                  // If "type" variable is undefined, then "GET" method will be used.
                  // Make value of this field explicit since
                  // user can override it through ajaxSetup method
                  type: type || 'GET',
                  dataType: 'html',
                  data: params
                })
                .done(function (responseText) {
                  // Save response for use in complete callback
                  response = arguments;

                  self.html(
                    selector
                      ? // If a selector was specified, locate the right elements in a dummy div
                        // Exclude scripts to avoid IE 'Permission Denied' errors
                        jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector)
                      : // Otherwise use the full result
                        responseText
                  );

                  // If the request succeeds, this function gets "data", "status", "jqXHR"
                  // but they are ignored because response was set above.
                  // If it fails, this function gets "jqXHR", "status", "error"
                })
                .always(
                  callback &&
                    function (jqXHR, status) {
                      self.each(function () {
                        callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                      });
                    }
                );
            }

            return this;
          };

          jQuery.expr.pseudos.animated = function (elem) {
            return jQuery.grep(jQuery.timers, function (fn) {
              return elem === fn.elem;
            }).length;
          };

          jQuery.offset = {
            setOffset: function (elem, options, i) {
              var curPosition,
                curLeft,
                curCSSTop,
                curTop,
                curOffset,
                curCSSLeft,
                calculatePosition,
                position = jQuery.css(elem, 'position'),
                curElem = jQuery(elem),
                props = {};

              // Set position first, in-case top/left are set even on static elem
              if (position === 'static') {
                elem.style.position = 'relative';
              }

              curOffset = curElem.offset();
              curCSSTop = jQuery.css(elem, 'top');
              curCSSLeft = jQuery.css(elem, 'left');
              calculatePosition =
                (position === 'absolute' || position === 'fixed') &&
                (curCSSTop + curCSSLeft).indexOf('auto') > -1;

              // Need to be able to calculate position if either
              // top or left is auto and position is either absolute or fixed
              if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
              } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
              }

              if (isFunction(options)) {
                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call(elem, i, jQuery.extend({}, curOffset));
              }

              if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
              }
              if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
              }

              if ('using' in options) {
                options.using.call(elem, props);
              } else {
                if (typeof props.top === 'number') {
                  props.top += 'px';
                }
                if (typeof props.left === 'number') {
                  props.left += 'px';
                }
                curElem.css(props);
              }
            }
          };

          jQuery.fn.extend({
            // offset() relates an element's border box to the document origin
            offset: function (options) {
              // Preserve chaining for setter
              if (arguments.length) {
                return options === undefined
                  ? this
                  : this.each(function (i) {
                      jQuery.offset.setOffset(this, options, i);
                    });
              }

              var rect,
                win,
                elem = this[0];

              if (!elem) {
                return;
              }

              // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
              // Support: IE <=11 only
              // Running getBoundingClientRect on a
              // disconnected node in IE throws an error
              if (!elem.getClientRects().length) {
                return { top: 0, left: 0 };
              }

              // Get document-relative position by adding viewport scroll to viewport-relative gBCR
              rect = elem.getBoundingClientRect();
              win = elem.ownerDocument.defaultView;
              return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
              };
            },

            // position() relates an element's margin box to its offset parent's padding box
            // This corresponds to the behavior of CSS absolute positioning
            position: function () {
              if (!this[0]) {
                return;
              }

              var offsetParent,
                offset,
                doc,
                elem = this[0],
                parentOffset = { top: 0, left: 0 };

              // position:fixed elements are offset from the viewport, which itself always has zero offset
              if (jQuery.css(elem, 'position') === 'fixed') {
                // Assume position:fixed implies availability of getBoundingClientRect
                offset = elem.getBoundingClientRect();
              } else {
                offset = this.offset();

                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while (
                  offsetParent &&
                  (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                  jQuery.css(offsetParent, 'position') === 'static'
                ) {
                  offsetParent = offsetParent.parentNode;
                }
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                  // Incorporate borders into its offset, since they are outside its content origin
                  parentOffset = jQuery(offsetParent).offset();
                  parentOffset.top += jQuery.css(offsetParent, 'borderTopWidth', true);
                  parentOffset.left += jQuery.css(offsetParent, 'borderLeftWidth', true);
                }
              }

              // Subtract parent offsets and element margins
              return {
                top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
                left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true)
              };
            },

            // This method will return documentElement in the following cases:
            // 1) For the element inside the iframe without offsetParent, this method will return
            //    documentElement of the parent window
            // 2) For the hidden or detached element
            // 3) For body or html element, i.e. in case of the html node - it will return itself
            //
            // but those exceptions were never presented as a real life use-cases
            // and might be considered as more preferable results.
            //
            // This logic, however, is not guaranteed and can change at any point in the future
            offsetParent: function () {
              return this.map(function () {
                var offsetParent = this.offsetParent;

                while (offsetParent && jQuery.css(offsetParent, 'position') === 'static') {
                  offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || documentElement;
              });
            }
          });

          // Create scrollLeft and scrollTop methods
          jQuery.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (method, prop) {
            var top = 'pageYOffset' === prop;

            jQuery.fn[method] = function (val) {
              return access(
                this,
                function (elem, method, val) {
                  // Coalesce documents and windows
                  var win;
                  if (isWindow(elem)) {
                    win = elem;
                  } else if (elem.nodeType === 9) {
                    win = elem.defaultView;
                  }

                  if (val === undefined) {
                    return win ? win[prop] : elem[method];
                  }

                  if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                  } else {
                    elem[method] = val;
                  }
                },
                method,
                val,
                arguments.length
              );
            };
          });

          // Support: Safari <=7 - 9.1, Chrome <=37 - 49
          // Add the top/left cssHooks using jQuery.fn.position
          // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
          // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
          // getComputedStyle returns percent when specified for top/left/bottom/right;
          // rather than make the css module depend on the offset module, just check for it here
          jQuery.each(['top', 'left'], function (_i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);

                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + 'px' : computed;
              }
            });
          });

          // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
          jQuery.each({ Height: 'height', Width: 'width' }, function (name, type) {
            jQuery.each({ padding: 'inner' + name, content: type, '': 'outer' + name }, function (
              defaultExtra,
              funcName
            ) {
              // Margin is only for outerHeight, outerWidth
              jQuery.fn[funcName] = function (margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== 'boolean'),
                  extra = defaultExtra || (margin === true || value === true ? 'margin' : 'border');

                return access(
                  this,
                  function (elem, type, value) {
                    var doc;

                    if (isWindow(elem)) {
                      // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                      return funcName.indexOf('outer') === 0
                        ? elem['inner' + name]
                        : elem.document.documentElement['client' + name];
                    }

                    // Get document width or height
                    if (elem.nodeType === 9) {
                      doc = elem.documentElement;

                      // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                      // whichever is greatest
                      return Math.max(
                        elem.body['scroll' + name],
                        doc['scroll' + name],
                        elem.body['offset' + name],
                        doc['offset' + name],
                        doc['client' + name]
                      );
                    }

                    return value === undefined
                      ? // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css(elem, type, extra)
                      : // Set width or height on the element
                        jQuery.style(elem, type, value, extra);
                  },
                  type,
                  chainable ? margin : undefined,
                  chainable
                );
              };
            });
          });

          jQuery.each(
            ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
            function (_i, type) {
              jQuery.fn[type] = function (fn) {
                return this.on(type, fn);
              };
            }
          );

          jQuery.fn.extend({
            bind: function (types, data, fn) {
              return this.on(types, null, data, fn);
            },
            unbind: function (types, fn) {
              return this.off(types, null, fn);
            },

            delegate: function (selector, types, data, fn) {
              return this.on(types, selector, data, fn);
            },
            undelegate: function (selector, types, fn) {
              // ( namespace ) or ( selector, types [, fn] )
              return arguments.length === 1
                ? this.off(selector, '**')
                : this.off(types, selector || '**', fn);
            },

            hover: function (fnOver, fnOut) {
              return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
            }
          });

          jQuery.each(
            (
              'blur focus focusin focusout resize scroll click dblclick ' +
              'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
              'change select submit keydown keypress keyup contextmenu'
            ).split(' '),
            function (_i, name) {
              // Handle event binding
              jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
              };
            }
          );

          // Support: Android <=4.0 only
          // Make sure we trim BOM and NBSP
          var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

          // Bind a function to a context, optionally partially applying any
          // arguments.
          // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
          // However, it is not slated for removal any time soon
          jQuery.proxy = function (fn, context) {
            var tmp, args, proxy;

            if (typeof context === 'string') {
              tmp = fn[context];
              context = fn;
              fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!isFunction(fn)) {
              return undefined;
            }

            // Simulated bind
            args = slice.call(arguments, 2);
            proxy = function () {
              return fn.apply(context || this, args.concat(slice.call(arguments)));
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
          };

          jQuery.holdReady = function (hold) {
            if (hold) {
              jQuery.readyWait++;
            } else {
              jQuery.ready(true);
            }
          };
          jQuery.isArray = Array.isArray;
          jQuery.parseJSON = JSON.parse;
          jQuery.nodeName = nodeName;
          jQuery.isFunction = isFunction;
          jQuery.isWindow = isWindow;
          jQuery.camelCase = camelCase;
          jQuery.type = toType;

          jQuery.now = Date.now;

          jQuery.isNumeric = function (obj) {
            // As of jQuery 3.0, isNumeric is limited to
            // strings and numbers (primitives or objects)
            // that can be coerced to finite numbers (gh-2662)
            var type = jQuery.type(obj);
            return (
              (type === 'number' || type === 'string') &&
              // parseFloat NaNs numeric-cast false positives ("")
              // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
              // subtraction forces infinities to NaN
              !isNaN(obj - parseFloat(obj))
            );
          };

          jQuery.trim = function (text) {
            return text == null ? '' : (text + '').replace(rtrim, '');
          };

          // Register as a named AMD module, since jQuery can be concatenated with other
          // files that may use define, but not via a proper concatenation script that
          // understands anonymous AMD modules. A named AMD is safest and most robust
          // way to register. Lowercase jquery is used because AMD module names are
          // derived from file names, and jQuery is normally delivered in a lowercase
          // file name. Do this after creating the global so that if an AMD module wants
          // to call noConflict to hide this version of jQuery, it will work.

          // Note that for maximum portability, libraries that are not jQuery should
          // declare themselves as anonymous modules, and avoid setting a global if an
          // AMD loader is present. jQuery is a special case. For more information, see
          // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

          if (true) {
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return jQuery;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          }

          var // Map over jQuery in case of overwrite
            _jQuery = window.jQuery,
            // Map over the $ in case of overwrite
            _$ = window.$;

          jQuery.noConflict = function (deep) {
            if (window.$ === jQuery) {
              window.$ = _$;
            }

            if (deep && window.jQuery === jQuery) {
              window.jQuery = _jQuery;
            }

            return jQuery;
          };

          // Expose jQuery and $ identifiers, even in AMD
          // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
          // and CommonJS for browser emulators (#13566)
          if (typeof noGlobal === 'undefined') {
            window.jQuery = window.$ = jQuery;
          }

          return jQuery;
        });

        /***/
      },

    /***/ './node_modules/owl.carousel/dist/owl.carousel.min.js':
      /*!************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/owl.carousel.min.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (__webpack_provided_window_dot_jQuery, jQuery) {
          /**
           * Owl Carousel v2.3.4
           * Copyright 2013-2018 David Deutsch
           * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
           */
          !(function (a, b, c, d) {
            function e(b, c) {
              (this.settings = null),
                (this.options = a.extend({}, e.Defaults, c)),
                (this.$element = a(b)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = {
                  time: null,
                  target: null,
                  pointer: null,
                  stage: { start: null, current: null },
                  direction: null
                }),
                (this._states = {
                  current: {},
                  tags: { initializing: ['busy'], animating: ['busy'], dragging: ['interacting'] }
                }),
                a.each(
                  ['onResize', 'onThrottledResize'],
                  a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                  }, this)
                ),
                a.each(
                  e.Plugins,
                  a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                  }, this)
                ),
                a.each(
                  e.Workers,
                  a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                  }, this)
                ),
                this.setup(),
                this.initialize();
            }
            (e.Defaults = {
              items: 3,
              loop: !1,
              center: !1,
              rewind: !1,
              checkVisibility: !0,
              mouseDrag: !0,
              touchDrag: !0,
              pullDrag: !0,
              freeDrag: !1,
              margin: 0,
              stagePadding: 0,
              merge: !1,
              mergeFit: !0,
              autoWidth: !1,
              startPosition: 0,
              rtl: !1,
              smartSpeed: 250,
              fluidSpeed: !1,
              dragEndSpeed: !1,
              responsive: {},
              responsiveRefreshRate: 200,
              responsiveBaseElement: b,
              fallbackEasing: 'swing',
              slideTransition: '',
              info: !1,
              nestedItemSelector: !1,
              itemElement: 'div',
              stageElement: 'div',
              refreshClass: 'owl-refresh',
              loadedClass: 'owl-loaded',
              loadingClass: 'owl-loading',
              rtlClass: 'owl-rtl',
              responsiveClass: 'owl-responsive',
              dragClass: 'owl-drag',
              itemClass: 'owl-item',
              stageClass: 'owl-stage',
              stageOuterClass: 'owl-stage-outer',
              grabClass: 'owl-grab'
            }),
              (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
              (e.Type = { Event: 'event', State: 'state' }),
              (e.Plugins = {}),
              (e.Workers = [
                {
                  filter: ['width', 'settings'],
                  run: function () {
                    this._width = this.$element.width();
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                  }
                },
                {
                  filter: ['items', 'settings'],
                  run: function () {
                    this.$stage.children('.cloned').remove();
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function (a) {
                    var b = this.settings.margin || '',
                      c = !this.settings.autoWidth,
                      d = this.settings.rtl,
                      e = { width: 'auto', 'margin-left': d ? b : '', 'margin-right': d ? '' : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                      c = null,
                      d = this._items.length,
                      e = !this.settings.autoWidth,
                      f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                      (c = this._mergers[d]),
                        (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c),
                        (a.items.merge = c > 1 || a.items.merge),
                        (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                  }
                },
                {
                  filter: ['items', 'settings'],
                  run: function () {
                    var b = [],
                      c = this._items,
                      d = this.settings,
                      e = Math.max(2 * d.items, 4),
                      f = 2 * Math.ceil(c.length / 2),
                      g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                      h = '',
                      i = '';
                    for (g /= 2; g > 0; )
                      b.push(this.normalize(b.length / 2, !0)),
                        (h += c[b[b.length - 1]][0].outerHTML),
                        b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                        (i = c[b[b.length - 1]][0].outerHTML + i),
                        (g -= 1);
                    (this._clones = b),
                      a(h).addClass('cloned').appendTo(this.$stage),
                      a(i).addClass('cloned').prependTo(this.$stage);
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function () {
                    for (
                      var a = this.settings.rtl ? 1 : -1,
                        b = this._clones.length + this._items.length,
                        c = -1,
                        d = 0,
                        e = 0,
                        f = [];
                      ++c < b;

                    )
                      (d = f[c - 1] || 0),
                        (e = this._widths[this.relative(c)] + this.settings.margin),
                        f.push(d + e * a);
                    this._coordinates = f;
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function () {
                    var a = this.settings.stagePadding,
                      b = this._coordinates,
                      c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        'padding-left': a || '',
                        'padding-right': a || ''
                      };
                    this.$stage.css(c);
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function (a) {
                    var b = this._coordinates.length,
                      c = !this.settings.autoWidth,
                      d = this.$stage.children();
                    if (c && a.items.merge)
                      for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                  }
                },
                {
                  filter: ['items'],
                  run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr('style');
                  }
                },
                {
                  filter: ['width', 'items', 'settings'],
                  run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0),
                      (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))),
                      this.reset(a.current);
                  }
                },
                {
                  filter: ['position'],
                  run: function () {
                    this.animate(this.coordinates(this._current));
                  }
                },
                {
                  filter: ['width', 'position', 'items', 'settings'],
                  run: function () {
                    var a,
                      b,
                      c,
                      d,
                      e = this.settings.rtl ? 1 : -1,
                      f = 2 * this.settings.stagePadding,
                      g = this.coordinates(this.current()) + f,
                      h = g + this.width() * e,
                      i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                      (a = this._coordinates[c - 1] || 0),
                        (b = Math.abs(this._coordinates[c]) + f * e),
                        ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                          (this.op(b, '<', g) && this.op(b, '>', h))) &&
                          i.push(c);
                    this.$stage.children('.active').removeClass('active'),
                      this.$stage.children(':eq(' + i.join('), :eq(') + ')').addClass('active'),
                      this.$stage.children('.center').removeClass('center'),
                      this.settings.center && this.$stage.children().eq(this.current()).addClass('center');
                  }
                }
              ]),
              (e.prototype.initializeStage = function () {
                (this.$stage = this.$element.find('.' + this.settings.stageClass)),
                  this.$stage.length ||
                    (this.$element.addClass(this.options.loadingClass),
                    (this.$stage = a('<' + this.settings.stageElement + '>', {
                      class: this.settings.stageClass
                    }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
                    this.$element.append(this.$stage.parent()));
              }),
              (e.prototype.initializeItems = function () {
                var b = this.$element.find('.owl-item');
                if (b.length)
                  return (
                    (this._items = b.get().map(function (b) {
                      return a(b);
                    })),
                    (this._mergers = this._items.map(function () {
                      return 1;
                    })),
                    void this.refresh()
                  );
                this.replace(this.$element.children().not(this.$stage.parent())),
                  this.isVisible() ? this.refresh() : this.invalidate('width'),
                  this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
              }),
              (e.prototype.initialize = function () {
                if (
                  (this.enter('initializing'),
                  this.trigger('initialize'),
                  this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
                  this.settings.autoWidth && !this.is('pre-loading'))
                ) {
                  var a, b, c;
                  (a = this.$element.find('img')),
                    (b = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : d),
                    (c = this.$element.children(b).width()),
                    a.length && c <= 0 && this.preloadAutoWidthImages(a);
                }
                this.initializeStage(),
                  this.initializeItems(),
                  this.registerEventHandlers(),
                  this.leave('initializing'),
                  this.trigger('initialized');
              }),
              (e.prototype.isVisible = function () {
                return !this.settings.checkVisibility || this.$element.is(':visible');
              }),
              (e.prototype.setup = function () {
                var b = this.viewport(),
                  c = this.options.responsive,
                  d = -1,
                  e = null;
                c
                  ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                    }),
                    (e = a.extend({}, this.options, c[d])),
                    'function' == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                    delete e.responsive,
                    e.responsiveClass &&
                      this.$element.attr(
                        'class',
                        this.$element
                          .attr('class')
                          .replace(
                            new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'),
                            '$1' + d
                          )
                      ))
                  : (e = a.extend({}, this.options)),
                  this.trigger('change', { property: { name: 'settings', value: e } }),
                  (this._breakpoint = d),
                  (this.settings = e),
                  this.invalidate('settings'),
                  this.trigger('changed', { property: { name: 'settings', value: this.settings } });
              }),
              (e.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
              }),
              (e.prototype.prepare = function (b) {
                var c = this.trigger('prepare', { content: b });
                return (
                  c.data ||
                    (c.data = a('<' + this.settings.itemElement + '/>')
                      .addClass(this.options.itemClass)
                      .append(b)),
                  this.trigger('prepared', { content: c.data }),
                  c.data
                );
              }),
              (e.prototype.update = function () {
                for (
                  var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                      return this[a];
                    }, this._invalidated),
                    e = {};
                  b < c;

                )
                  (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
                    this._pipe[b].run(e),
                    b++;
                (this._invalidated = {}), !this.is('valid') && this.enter('valid');
              }),
              (e.prototype.width = function (a) {
                switch ((a = a || e.Width.Default)) {
                  case e.Width.Inner:
                  case e.Width.Outer:
                    return this._width;
                  default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
              }),
              (e.prototype.refresh = function () {
                this.enter('refreshing'),
                  this.trigger('refresh'),
                  this.setup(),
                  this.optionsLogic(),
                  this.$element.addClass(this.options.refreshClass),
                  this.update(),
                  this.$element.removeClass(this.options.refreshClass),
                  this.leave('refreshing'),
                  this.trigger('refreshed');
              }),
              (e.prototype.onThrottledResize = function () {
                b.clearTimeout(this.resizeTimer),
                  (this.resizeTimer = b.setTimeout(
                    this._handlers.onResize,
                    this.settings.responsiveRefreshRate
                  ));
              }),
              (e.prototype.onResize = function () {
                return (
                  !!this._items.length &&
                  this._width !== this.$element.width() &&
                  !!this.isVisible() &&
                  (this.enter('resizing'),
                  this.trigger('resize').isDefaultPrevented()
                    ? (this.leave('resizing'), !1)
                    : (this.invalidate('width'),
                      this.refresh(),
                      this.leave('resizing'),
                      void this.trigger('resized')))
                );
              }),
              (e.prototype.registerEventHandlers = function () {
                a.support.transition &&
                  this.$stage.on(a.support.transition.end + '.owl.core', a.proxy(this.onTransitionEnd, this)),
                  !1 !== this.settings.responsive && this.on(b, 'resize', this._handlers.onThrottledResize),
                  this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
                    this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
                      return !1;
                    })),
                  this.settings.touchDrag &&
                    (this.$stage.on('touchstart.owl.core', a.proxy(this.onDragStart, this)),
                    this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)));
              }),
              (e.prototype.onDragStart = function (b) {
                var d = null;
                3 !== b.which &&
                  (a.support.transform
                    ? ((d = this.$stage
                        .css('transform')
                        .replace(/.*\(|\)| /g, '')
                        .split(',')),
                      (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()),
                      (d = {
                        x: this.settings.rtl
                          ? d.left + this.$stage.width() - this.width() + this.settings.margin
                          : d.left,
                        y: d.top
                      })),
                  this.is('animating') &&
                    (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
                    this.invalidate('position')),
                  this.$element.toggleClass(this.options.grabClass, 'mousedown' === b.type),
                  this.speed(0),
                  (this._drag.time = new Date().getTime()),
                  (this._drag.target = a(b.target)),
                  (this._drag.stage.start = d),
                  (this._drag.stage.current = d),
                  (this._drag.pointer = this.pointer(b)),
                  a(c).on('mouseup.owl.core touchend.owl.core', a.proxy(this.onDragEnd, this)),
                  a(c).one(
                    'mousemove.owl.core touchmove.owl.core',
                    a.proxy(function (b) {
                      var d = this.difference(this._drag.pointer, this.pointer(b));
                      a(c).on('mousemove.owl.core touchmove.owl.core', a.proxy(this.onDragMove, this)),
                        (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                          (b.preventDefault(), this.enter('dragging'), this.trigger('drag'));
                    }, this)
                  ));
              }),
              (e.prototype.onDragMove = function (a) {
                var b = null,
                  c = null,
                  d = null,
                  e = this.difference(this._drag.pointer, this.pointer(a)),
                  f = this.difference(this._drag.stage.start, e);
                this.is('dragging') &&
                  (a.preventDefault(),
                  this.settings.loop
                    ? ((b = this.coordinates(this.minimum())),
                      (c = this.coordinates(this.maximum() + 1) - b),
                      (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl
                        ? this.coordinates(this.maximum())
                        : this.coordinates(this.minimum())),
                      (c = this.settings.rtl
                        ? this.coordinates(this.minimum())
                        : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                  (this._drag.stage.current = f),
                  this.animate(f.x));
              }),
              (e.prototype.onDragEnd = function (b) {
                var d = this.difference(this._drag.pointer, this.pointer(b)),
                  e = this._drag.stage.current,
                  f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right';
                a(c).off('.owl.core'),
                  this.$element.removeClass(this.options.grabClass),
                  ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate('position'),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                      this._drag.target.one('click.owl.core', function () {
                        return !1;
                      })),
                  this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'));
              }),
              (e.prototype.closest = function (b, c) {
                var e = -1,
                  f = 30,
                  g = this.width(),
                  h = this.coordinates();
                return (
                  this.settings.freeDrag ||
                    a.each(
                      h,
                      a.proxy(function (a, i) {
                        return (
                          'left' === c && b > i - f && b < i + f
                            ? (e = a)
                            : 'right' === c && b > i - g - f && b < i - g + f
                            ? (e = a + 1)
                            : this.op(b, '<', i) &&
                              this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) &&
                              (e = 'left' === c ? a + 1 : a),
                          -1 === e
                        );
                      }, this)
                    ),
                  this.settings.loop ||
                    (this.op(b, '>', h[this.minimum()])
                      ? (e = b = this.minimum())
                      : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
                  e
                );
              }),
              (e.prototype.animate = function (b) {
                var c = this.speed() > 0;
                this.is('animating') && this.onTransitionEnd(),
                  c && (this.enter('animating'), this.trigger('translate')),
                  a.support.transform3d && a.support.transition
                    ? this.$stage.css({
                        transform: 'translate3d(' + b + 'px,0px,0px)',
                        transition:
                          this.speed() / 1e3 +
                          's' +
                          (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '')
                      })
                    : c
                    ? this.$stage.animate(
                        { left: b + 'px' },
                        this.speed(),
                        this.settings.fallbackEasing,
                        a.proxy(this.onTransitionEnd, this)
                      )
                    : this.$stage.css({ left: b + 'px' });
              }),
              (e.prototype.is = function (a) {
                return this._states.current[a] && this._states.current[a] > 0;
              }),
              (e.prototype.current = function (a) {
                if (a === d) return this._current;
                if (0 === this._items.length) return d;
                if (((a = this.normalize(a)), this._current !== a)) {
                  var b = this.trigger('change', { property: { name: 'position', value: a } });
                  b.data !== d && (a = this.normalize(b.data)),
                    (this._current = a),
                    this.invalidate('position'),
                    this.trigger('changed', { property: { name: 'position', value: this._current } });
                }
                return this._current;
              }),
              (e.prototype.invalidate = function (b) {
                return (
                  'string' === a.type(b) &&
                    ((this._invalidated[b] = !0), this.is('valid') && this.leave('valid')),
                  a.map(this._invalidated, function (a, b) {
                    return b;
                  })
                );
              }),
              (e.prototype.reset = function (a) {
                (a = this.normalize(a)) !== d &&
                  ((this._speed = 0),
                  (this._current = a),
                  this.suppress(['translate', 'translated']),
                  this.animate(this.coordinates(a)),
                  this.release(['translate', 'translated']));
              }),
              (e.prototype.normalize = function (a, b) {
                var c = this._items.length,
                  e = b ? 0 : this._clones.length;
                return (
                  !this.isNumeric(a) || c < 1
                    ? (a = d)
                    : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2),
                  a
                );
              }),
              (e.prototype.relative = function (a) {
                return (a -= this._clones.length / 2), this.normalize(a, !0);
              }),
              (e.prototype.maximum = function (a) {
                var b,
                  c,
                  d,
                  e = this.settings,
                  f = this._coordinates.length;
                if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
                else if (e.autoWidth || e.merge) {
                  if ((b = this._items.length))
                    for (
                      c = this._items[--b].width(), d = this.$element.width();
                      b-- && !((c += this._items[b].width() + this.settings.margin) > d);

                    );
                  f = b + 1;
                } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
                return a && (f -= this._clones.length / 2), Math.max(f, 0);
              }),
              (e.prototype.minimum = function (a) {
                return a ? 0 : this._clones.length / 2;
              }),
              (e.prototype.items = function (a) {
                return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
              }),
              (e.prototype.mergers = function (a) {
                return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
              }),
              (e.prototype.clones = function (b) {
                var c = this._clones.length / 2,
                  e = c + this._items.length,
                  f = function (a) {
                    return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
                  };
                return b === d
                  ? a.map(this._clones, function (a, b) {
                      return f(b);
                    })
                  : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                    });
              }),
              (e.prototype.speed = function (a) {
                return a !== d && (this._speed = a), this._speed;
              }),
              (e.prototype.coordinates = function (b) {
                var c,
                  e = 1,
                  f = b - 1;
                return b === d
                  ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                        return this.coordinates(b);
                      }, this)
                    )
                  : (this.settings.center
                      ? (this.settings.rtl && ((e = -1), (f = b + 1)),
                        (c = this._coordinates[b]),
                        (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
                      : (c = this._coordinates[f] || 0),
                    (c = Math.ceil(c)));
              }),
              (e.prototype.duration = function (a, b, c) {
                return 0 === c
                  ? 0
                  : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
              }),
              (e.prototype.to = function (a, b) {
                var c = this.current(),
                  d = null,
                  e = a - this.relative(c),
                  f = (e > 0) - (e < 0),
                  g = this._items.length,
                  h = this.minimum(),
                  i = this.maximum();
                this.settings.loop
                  ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
                    (a = c + e),
                    (d = ((((a - h) % g) + g) % g) + h) !== a &&
                      d - e <= i &&
                      d - e > 0 &&
                      ((c = d - e), (a = d), this.reset(c)))
                  : this.settings.rewind
                  ? ((i += 1), (a = ((a % i) + i) % i))
                  : (a = Math.max(h, Math.min(i, a))),
                  this.speed(this.duration(c, a, b)),
                  this.current(a),
                  this.isVisible() && this.update();
              }),
              (e.prototype.next = function (a) {
                (a = a || !1), this.to(this.relative(this.current()) + 1, a);
              }),
              (e.prototype.prev = function (a) {
                (a = a || !1), this.to(this.relative(this.current()) - 1, a);
              }),
              (e.prototype.onTransitionEnd = function (a) {
                if (
                  a !== d &&
                  (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
                )
                  return !1;
                this.leave('animating'), this.trigger('translated');
              }),
              (e.prototype.viewport = function () {
                var d;
                return (
                  this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn('Can not detect viewport width.'),
                  d
                );
              }),
              (e.prototype.replace = function (b) {
                this.$stage.empty(),
                  (this._items = []),
                  b && (b = b instanceof jQuery ? b : a(b)),
                  this.settings.nestedItemSelector && (b = b.find('.' + this.settings.nestedItemSelector)),
                  b
                    .filter(function () {
                      return 1 === this.nodeType;
                    })
                    .each(
                      a.proxy(function (a, b) {
                        (b = this.prepare(b)),
                          this.$stage.append(b),
                          this._items.push(b),
                          this._mergers.push(
                            1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1
                          );
                      }, this)
                    ),
                  this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                  this.invalidate('items');
              }),
              (e.prototype.add = function (b, c) {
                var e = this.relative(this._current);
                (c = c === d ? this._items.length : this.normalize(c, !0)),
                  (b = b instanceof jQuery ? b : a(b)),
                  this.trigger('add', { content: b, position: c }),
                  (b = this.prepare(b)),
                  0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(
                        1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1
                      ))
                    : (this._items[c].before(b),
                      this._items.splice(c, 0, b),
                      this._mergers.splice(
                        c,
                        0,
                        1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1
                      )),
                  this._items[e] && this.reset(this._items[e].index()),
                  this.invalidate('items'),
                  this.trigger('added', { content: b, position: c });
              }),
              (e.prototype.remove = function (a) {
                (a = this.normalize(a, !0)) !== d &&
                  (this.trigger('remove', { content: this._items[a], position: a }),
                  this._items[a].remove(),
                  this._items.splice(a, 1),
                  this._mergers.splice(a, 1),
                  this.invalidate('items'),
                  this.trigger('removed', { content: null, position: a }));
              }),
              (e.prototype.preloadAutoWidthImages = function (b) {
                b.each(
                  a.proxy(function (b, c) {
                    this.enter('pre-loading'),
                      (c = a(c)),
                      a(new Image())
                        .one(
                          'load',
                          a.proxy(function (a) {
                            c.attr('src', a.target.src),
                              c.css('opacity', 1),
                              this.leave('pre-loading'),
                              !this.is('pre-loading') && !this.is('initializing') && this.refresh();
                          }, this)
                        )
                        .attr('src', c.attr('src') || c.attr('data-src') || c.attr('data-src-retina'));
                  }, this)
                );
              }),
              (e.prototype.destroy = function () {
                this.$element.off('.owl.core'),
                  this.$stage.off('.owl.core'),
                  a(c).off('.owl.core'),
                  !1 !== this.settings.responsive &&
                    (b.clearTimeout(this.resizeTimer),
                    this.off(b, 'resize', this._handlers.onThrottledResize));
                for (var d in this._plugins) this._plugins[d].destroy();
                this.$stage.children('.cloned').remove(),
                  this.$stage.unwrap(),
                  this.$stage.children().contents().unwrap(),
                  this.$stage.children().unwrap(),
                  this.$stage.remove(),
                  this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr(
                      'class',
                      this.$element
                        .attr('class')
                        .replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')
                    )
                    .removeData('owl.carousel');
              }),
              (e.prototype.op = function (a, b, c) {
                var d = this.settings.rtl;
                switch (b) {
                  case '<':
                    return d ? a > c : a < c;
                  case '>':
                    return d ? a < c : a > c;
                  case '>=':
                    return d ? a <= c : a >= c;
                  case '<=':
                    return d ? a >= c : a <= c;
                }
              }),
              (e.prototype.on = function (a, b, c, d) {
                a.addEventListener
                  ? a.addEventListener(b, c, d)
                  : a.attachEvent && a.attachEvent('on' + b, c);
              }),
              (e.prototype.off = function (a, b, c, d) {
                a.removeEventListener
                  ? a.removeEventListener(b, c, d)
                  : a.detachEvent && a.detachEvent('on' + b, c);
              }),
              (e.prototype.trigger = function (b, c, d, f, g) {
                var h = { item: { count: this._items.length, index: this.current() } },
                  i = a.camelCase(
                    a
                      .grep(['on', b, d], function (a) {
                        return a;
                      })
                      .join('-')
                      .toLowerCase()
                  ),
                  j = a.Event(
                    [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
                    a.extend({ relatedTarget: this }, h, c)
                  );
                return (
                  this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                      b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && 'function' == typeof this.settings[i] && this.settings[i].call(this, j)),
                  j
                );
              }),
              (e.prototype.enter = function (b) {
                a.each(
                  [b].concat(this._states.tags[b] || []),
                  a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                  }, this)
                );
              }),
              (e.prototype.leave = function (b) {
                a.each(
                  [b].concat(this._states.tags[b] || []),
                  a.proxy(function (a, b) {
                    this._states.current[b]--;
                  }, this)
                );
              }),
              (e.prototype.register = function (b) {
                if (b.type === e.Type.Event) {
                  if (
                    (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)
                  ) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                      return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf('owl'))
                        ? a.namespace && a.namespace.indexOf('owl') > -1
                        : c.apply(this, arguments);
                    }),
                      (a.event.special[b.name].owl = !0);
                  }
                } else
                  b.type === e.Type.State &&
                    (this._states.tags[b.name]
                      ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags))
                      : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                      this._states.tags[b.name],
                      a.proxy(function (c, d) {
                        return a.inArray(c, this._states.tags[b.name]) === d;
                      }, this)
                    )));
              }),
              (e.prototype.suppress = function (b) {
                a.each(
                  b,
                  a.proxy(function (a, b) {
                    this._supress[b] = !0;
                  }, this)
                );
              }),
              (e.prototype.release = function (b) {
                a.each(
                  b,
                  a.proxy(function (a, b) {
                    delete this._supress[b];
                  }, this)
                );
              }),
              (e.prototype.pointer = function (a) {
                var c = { x: null, y: null };
                return (
                  (a = a.originalEvent || a || b.event),
                  (a =
                    a.touches && a.touches.length
                      ? a.touches[0]
                      : a.changedTouches && a.changedTouches.length
                      ? a.changedTouches[0]
                      : a),
                  a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                  c
                );
              }),
              (e.prototype.isNumeric = function (a) {
                return !isNaN(parseFloat(a));
              }),
              (e.prototype.difference = function (a, b) {
                return { x: a.x - b.x, y: a.y - b.y };
              }),
              (a.fn.owlCarousel = function (b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                  var d = a(this),
                    f = d.data('owl.carousel');
                  f ||
                    ((f = new e(this, 'object' == typeof b && b)),
                    d.data('owl.carousel', f),
                    a.each(
                      ['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'],
                      function (b, c) {
                        f.register({ type: e.Type.Event, name: c }),
                          f.$element.on(
                            c + '.owl.carousel.core',
                            a.proxy(function (a) {
                              a.namespace &&
                                a.relatedTarget !== this &&
                                (this.suppress([c]),
                                f[c].apply(this, [].slice.call(arguments, 1)),
                                this.release([c]));
                            }, f)
                          );
                      }
                    )),
                    'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c);
                });
              }),
              (a.fn.owlCarousel.Constructor = e);
          })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              var e = function (b) {
                (this._core = b),
                  (this._interval = null),
                  (this._visible = null),
                  (this._handlers = {
                    'initialized.owl.carousel': a.proxy(function (a) {
                      a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this)
                  }),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                  this._core.$element.on(this._handlers);
              };
              (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                (e.prototype.watch = function () {
                  this._interval ||
                    ((this._visible = this._core.isVisible()),
                    (this._interval = b.setInterval(
                      a.proxy(this.refresh, this),
                      this._core.settings.autoRefreshInterval
                    )));
                }),
                (e.prototype.refresh = function () {
                  this._core.isVisible() !== this._visible &&
                    ((this._visible = !this._visible),
                    this._core.$element.toggleClass('owl-hidden', !this._visible),
                    this._visible && this._core.invalidate('width') && this._core.refresh());
                }),
                (e.prototype.destroy = function () {
                  var a, c;
                  b.clearInterval(this._interval);
                  for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                  for (c in Object.getOwnPropertyNames(this))
                    'function' != typeof this[c] && (this[c] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              var e = function (b) {
                (this._core = b),
                  (this._loaded = []),
                  (this._handlers = {
                    'initialized.owl.carousel change.owl.carousel resized.owl.carousel': a.proxy(function (
                      b
                    ) {
                      if (
                        b.namespace &&
                        this._core.settings &&
                        this._core.settings.lazyLoad &&
                        ((b.property && 'position' == b.property.name) || 'initialized' == b.type)
                      ) {
                        var c = this._core.settings,
                          e = (c.center && Math.ceil(c.items / 2)) || c.items,
                          f = (c.center && -1 * e) || 0,
                          g =
                            (b.property && b.property.value !== d ? b.property.value : this._core.current()) +
                            f,
                          h = this._core.clones().length,
                          i = a.proxy(function (a, b) {
                            this.load(b);
                          }, this);
                        for (
                          c.lazyLoadEager > 0 &&
                          ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++));
                          f++ < e;

                        )
                          this.load(h / 2 + this._core.relative(g)),
                            h && a.each(this._core.clones(this._core.relative(g)), i),
                            g++;
                      }
                    },
                    this)
                  }),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                  this._core.$element.on(this._handlers);
              };
              (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                (e.prototype.load = function (c) {
                  var d = this._core.$stage.children().eq(c),
                    e = d && d.find('.owl-lazy');
                  !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                      a.proxy(function (c, d) {
                        var e,
                          f = a(d),
                          g =
                            (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                            f.attr('data-src') ||
                            f.attr('data-srcset');
                        this._core.trigger('load', { element: f, url: g }, 'lazy'),
                          f.is('img')
                            ? f
                                .one(
                                  'load.owl.lazy',
                                  a.proxy(function () {
                                    f.css('opacity', 1),
                                      this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                                  }, this)
                                )
                                .attr('src', g)
                            : f.is('source')
                            ? f
                                .one(
                                  'load.owl.lazy',
                                  a.proxy(function () {
                                    this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                                  }, this)
                                )
                                .attr('srcset', g)
                            : ((e = new Image()),
                              (e.onload = a.proxy(function () {
                                f.css({ 'background-image': 'url("' + g + '")', opacity: '1' }),
                                  this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                              }, this)),
                              (e.src = g));
                      }, this)
                    ),
                    this._loaded.push(d.get(0)));
                }),
                (e.prototype.destroy = function () {
                  var a, b;
                  for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                  for (b in Object.getOwnPropertyNames(this))
                    'function' != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              var e = function (c) {
                (this._core = c),
                  (this._previousHeight = null),
                  (this._handlers = {
                    'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (a) {
                      a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    'changed.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        this._core.settings.autoHeight &&
                        'position' === a.property.name &&
                        this.update();
                    }, this),
                    'loaded.owl.lazy': a.proxy(function (a) {
                      a.namespace &&
                        this._core.settings.autoHeight &&
                        a.element.closest('.' + this._core.settings.itemClass).index() ===
                          this._core.current() &&
                        this.update();
                    }, this)
                  }),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                  this._core.$element.on(this._handlers),
                  (this._intervalId = null);
                var d = this;
                a(b).on('load', function () {
                  d._core.settings.autoHeight && d.update();
                }),
                  a(b).resize(function () {
                    d._core.settings.autoHeight &&
                      (null != d._intervalId && clearTimeout(d._intervalId),
                      (d._intervalId = setTimeout(function () {
                        d.update();
                      }, 250)));
                  });
              };
              (e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
                (e.prototype.update = function () {
                  var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.settings.lazyLoad,
                    e = this._core.$stage.children().toArray().slice(b, c),
                    f = [],
                    g = 0;
                  a.each(e, function (b, c) {
                    f.push(a(c).height());
                  }),
                    (g = Math.max.apply(null, f)),
                    g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                    (this._previousHeight = g),
                    this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
                }),
                (e.prototype.destroy = function () {
                  var a, b;
                  for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                  for (b in Object.getOwnPropertyNames(this))
                    'function' != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              var e = function (b) {
                (this._core = b),
                  (this._videos = {}),
                  (this._playing = null),
                  (this._handlers = {
                    'initialized.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
                    }, this),
                    'resize.owl.carousel': a.proxy(function (a) {
                      a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    'refreshed.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        this._core.is('resizing') &&
                        this._core.$stage.find('.cloned .owl-video-frame').remove();
                    }, this),
                    'changed.owl.carousel': a.proxy(function (a) {
                      a.namespace && 'position' === a.property.name && this._playing && this.stop();
                    }, this),
                    'prepared.owl.carousel': a.proxy(function (b) {
                      if (b.namespace) {
                        var c = a(b.content).find('.owl-video');
                        c.length && (c.css('display', 'none'), this.fetch(c, a(b.content)));
                      }
                    }, this)
                  }),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                  this._core.$element.on(this._handlers),
                  this._core.$element.on(
                    'click.owl.video',
                    '.owl-video-play-icon',
                    a.proxy(function (a) {
                      this.play(a);
                    }, this)
                  );
              };
              (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
                (e.prototype.fetch = function (a, b) {
                  var c = (function () {
                      return a.attr('data-vimeo-id')
                        ? 'vimeo'
                        : a.attr('data-vzaar-id')
                        ? 'vzaar'
                        : 'youtube';
                    })(),
                    d = a.attr('data-vimeo-id') || a.attr('data-youtube-id') || a.attr('data-vzaar-id'),
                    e = a.attr('data-width') || this._core.settings.videoWidth,
                    f = a.attr('data-height') || this._core.settings.videoHeight,
                    g = a.attr('href');
                  if (!g) throw new Error('Missing video URL.');
                  if (
                    ((d = g.match(
                      /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    )),
                    d[3].indexOf('youtu') > -1)
                  )
                    c = 'youtube';
                  else if (d[3].indexOf('vimeo') > -1) c = 'vimeo';
                  else {
                    if (!(d[3].indexOf('vzaar') > -1)) throw new Error('Video URL not supported.');
                    c = 'vzaar';
                  }
                  (d = d[6]),
                    (this._videos[g] = { type: c, id: d, width: e, height: f }),
                    b.attr('data-video', g),
                    this.thumbnail(a, this._videos[g]);
                }),
                (e.prototype.thumbnail = function (b, c) {
                  var d,
                    e,
                    f,
                    g = c.width && c.height ? 'width:' + c.width + 'px;height:' + c.height + 'px;' : '',
                    h = b.find('img'),
                    i = 'src',
                    j = '',
                    k = this._core.settings,
                    l = function (c) {
                      (e = '<div class="owl-video-play-icon"></div>'),
                        (d = k.lazyLoad
                          ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c })
                          : a('<div/>', {
                              class: 'owl-video-tn',
                              style: 'opacity:1;background-image:url(' + c + ')'
                            })),
                        b.after(d),
                        b.after(e);
                    };
                  if (
                    (b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })),
                    this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
                    h.length)
                  )
                    return l(h.attr(i)), h.remove(), !1;
                  'youtube' === c.type
                    ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
                    : 'vimeo' === c.type
                    ? a.ajax({
                        type: 'GET',
                        url: '//vimeo.com/api/v2/video/' + c.id + '.json',
                        jsonp: 'callback',
                        dataType: 'jsonp',
                        success: function (a) {
                          (f = a[0].thumbnail_large), l(f);
                        }
                      })
                    : 'vzaar' === c.type &&
                      a.ajax({
                        type: 'GET',
                        url: '//vzaar.com/api/videos/' + c.id + '.json',
                        jsonp: 'callback',
                        dataType: 'jsonp',
                        success: function (a) {
                          (f = a.framegrab_url), l(f);
                        }
                      });
                }),
                (e.prototype.stop = function () {
                  this._core.trigger('stop', null, 'video'),
                    this._playing.find('.owl-video-frame').remove(),
                    this._playing.removeClass('owl-video-playing'),
                    (this._playing = null),
                    this._core.leave('playing'),
                    this._core.trigger('stopped', null, 'video');
                }),
                (e.prototype.play = function (b) {
                  var c,
                    d = a(b.target),
                    e = d.closest('.' + this._core.settings.itemClass),
                    f = this._videos[e.attr('data-video')],
                    g = f.width || '100%',
                    h = f.height || this._core.$stage.height();
                  this._playing ||
                    (this._core.enter('playing'),
                    this._core.trigger('play', null, 'video'),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    (c = a(
                      '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                    )),
                    c.attr('height', h),
                    c.attr('width', g),
                    'youtube' === f.type
                      ? c.attr('src', '//www.youtube.com/embed/' + f.id + '?autoplay=1&rel=0&v=' + f.id)
                      : 'vimeo' === f.type
                      ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
                      : 'vzaar' === f.type &&
                        c.attr('src', '//view.vzaar.com/' + f.id + '/player?autoplay=true'),
                    a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find('.owl-video')),
                    (this._playing = e.addClass('owl-video-playing')));
                }),
                (e.prototype.isInFullScreen = function () {
                  var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                  return b && a(b).parent().hasClass('owl-video-frame');
                }),
                (e.prototype.destroy = function () {
                  var a, b;
                  this._core.$element.off('click.owl.video');
                  for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                  for (b in Object.getOwnPropertyNames(this))
                    'function' != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Video = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              var e = function (b) {
                (this.core = b),
                  (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                  (this.swapping = !0),
                  (this.previous = d),
                  (this.next = d),
                  (this.handlers = {
                    'change.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        'position' == a.property.name &&
                        ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': a.proxy(function (a) {
                      a.namespace && (this.swapping = 'translated' == a.type);
                    }, this),
                    'translate.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        this.swapping &&
                        (this.core.options.animateOut || this.core.options.animateIn) &&
                        this.swap();
                    }, this)
                  }),
                  this.core.$element.on(this.handlers);
              };
              (e.Defaults = { animateOut: !1, animateIn: !1 }),
                (e.prototype.swap = function () {
                  if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                      c = a.proxy(this.clear, this),
                      d = this.core.$stage.children().eq(this.previous),
                      e = this.core.$stage.children().eq(this.next),
                      f = this.core.settings.animateIn,
                      g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                      (g &&
                        ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                        d
                          .one(a.support.animation.end, c)
                          .css({ left: b + 'px' })
                          .addClass('animated owl-animated-out')
                          .addClass(g)),
                      f &&
                        e.one(a.support.animation.end, c).addClass('animated owl-animated-in').addClass(f));
                  }
                }),
                (e.prototype.clear = function (b) {
                  a(b.target)
                    .css({ left: '' })
                    .removeClass('animated owl-animated-out owl-animated-in')
                    .removeClass(this.core.settings.animateIn)
                    .removeClass(this.core.settings.animateOut),
                    this.core.onTransitionEnd();
                }),
                (e.prototype.destroy = function () {
                  var a, b;
                  for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                  for (b in Object.getOwnPropertyNames(this))
                    'function' != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              var e = function (b) {
                (this._core = b),
                  (this._call = null),
                  (this._time = 0),
                  (this._timeout = 0),
                  (this._paused = !0),
                  (this._handlers = {
                    'changed.owl.carousel': a.proxy(function (a) {
                      a.namespace && 'settings' === a.property.name
                        ? this._core.settings.autoplay
                          ? this.play()
                          : this.stop()
                        : a.namespace && 'position' === a.property.name && this._paused && (this._time = 0);
                    }, this),
                    'initialized.owl.carousel': a.proxy(function (a) {
                      a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    'play.owl.autoplay': a.proxy(function (a, b, c) {
                      a.namespace && this.play(b, c);
                    }, this),
                    'stop.owl.autoplay': a.proxy(function (a) {
                      a.namespace && this.stop();
                    }, this),
                    'mouseover.owl.autoplay': a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
                    }, this),
                    'mouseleave.owl.autoplay': a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play();
                    }, this),
                    'touchstart.owl.core': a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
                    }, this),
                    'touchend.owl.core': a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this.play();
                    }, this)
                  }),
                  this._core.$element.on(this._handlers),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options));
              };
              (e.Defaults = {
                autoplay: !1,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !1,
                autoplaySpeed: !1
              }),
                (e.prototype._next = function (d) {
                  (this._call = b.setTimeout(
                    a.proxy(this._next, this, d),
                    this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
                  )),
                    this._core.is('interacting') ||
                      c.hidden ||
                      this._core.next(d || this._core.settings.autoplaySpeed);
                }),
                (e.prototype.read = function () {
                  return new Date().getTime() - this._time;
                }),
                (e.prototype.play = function (c, d) {
                  var e;
                  this._core.is('rotating') || this._core.enter('rotating'),
                    (c = c || this._core.settings.autoplayTimeout),
                    (e = Math.min(this._time % (this._timeout || c), c)),
                    this._paused
                      ? ((this._time = this.read()), (this._paused = !1))
                      : b.clearTimeout(this._call),
                    (this._time += (this.read() % c) - e),
                    (this._timeout = c),
                    (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
                }),
                (e.prototype.stop = function () {
                  this._core.is('rotating') &&
                    ((this._time = 0),
                    (this._paused = !0),
                    b.clearTimeout(this._call),
                    this._core.leave('rotating'));
                }),
                (e.prototype.pause = function () {
                  this._core.is('rotating') &&
                    !this._paused &&
                    ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
                }),
                (e.prototype.destroy = function () {
                  var a, b;
                  this.stop();
                  for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                  for (b in Object.getOwnPropertyNames(this))
                    'function' != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              'use strict';
              var e = function (b) {
                (this._core = b),
                  (this._initialized = !1),
                  (this._pages = []),
                  (this._controls = {}),
                  (this._templates = []),
                  (this.$element = this._core.$element),
                  (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                  (this._handlers = {
                    'prepared.owl.carousel': a.proxy(function (b) {
                      b.namespace &&
                        this._core.settings.dotsData &&
                        this._templates.push(
                          '<div class="' +
                            this._core.settings.dotClass +
                            '">' +
                            a(b.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') +
                            '</div>'
                        );
                    }, this),
                    'added.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        this._core.settings.dotsData &&
                        this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    'remove.owl.carousel': a.proxy(function (a) {
                      a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    'changed.owl.carousel': a.proxy(function (a) {
                      a.namespace && 'position' == a.property.name && this.draw();
                    }, this),
                    'initialized.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        !this._initialized &&
                        (this._core.trigger('initialize', null, 'navigation'),
                        this.initialize(),
                        this.update(),
                        this.draw(),
                        (this._initialized = !0),
                        this._core.trigger('initialized', null, 'navigation'));
                    }, this),
                    'refreshed.owl.carousel': a.proxy(function (a) {
                      a.namespace &&
                        this._initialized &&
                        (this._core.trigger('refresh', null, 'navigation'),
                        this.update(),
                        this.draw(),
                        this._core.trigger('refreshed', null, 'navigation'));
                    }, this)
                  }),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                  this.$element.on(this._handlers);
              };
              (e.Defaults = {
                nav: !1,
                navText: [
                  '<span aria-label="Previous">&#x2039;</span>',
                  '<span aria-label="Next">&#x203a;</span>'
                ],
                navSpeed: !1,
                navElement: 'button type="button" role="presentation"',
                navContainer: !1,
                navContainerClass: 'owl-nav',
                navClass: ['owl-prev', 'owl-next'],
                slideBy: 1,
                dotClass: 'owl-dot',
                dotsClass: 'owl-dots',
                dots: !0,
                dotsEach: !1,
                dotsData: !1,
                dotsSpeed: !1,
                dotsContainer: !1
              }),
                (e.prototype.initialize = function () {
                  var b,
                    c = this._core.settings;
                  (this._controls.$relative = (c.navContainer
                    ? a(c.navContainer)
                    : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)
                  ).addClass('disabled')),
                    (this._controls.$previous = a('<' + c.navElement + '>')
                      .addClass(c.navClass[0])
                      .html(c.navText[0])
                      .prependTo(this._controls.$relative)
                      .on(
                        'click',
                        a.proxy(function (a) {
                          this.prev(c.navSpeed);
                        }, this)
                      )),
                    (this._controls.$next = a('<' + c.navElement + '>')
                      .addClass(c.navClass[1])
                      .html(c.navText[1])
                      .appendTo(this._controls.$relative)
                      .on(
                        'click',
                        a.proxy(function (a) {
                          this.next(c.navSpeed);
                        }, this)
                      )),
                    c.dotsData ||
                      (this._templates = [
                        a('<button role="button">').addClass(c.dotClass).append(a('<span>')).prop('outerHTML')
                      ]),
                    (this._controls.$absolute = (c.dotsContainer
                      ? a(c.dotsContainer)
                      : a('<div>').addClass(c.dotsClass).appendTo(this.$element)
                    ).addClass('disabled')),
                    this._controls.$absolute.on(
                      'click',
                      'button',
                      a.proxy(function (b) {
                        var d = a(b.target).parent().is(this._controls.$absolute)
                          ? a(b.target).index()
                          : a(b.target).parent().index();
                        b.preventDefault(), this.to(d, c.dotsSpeed);
                      }, this)
                    );
                  for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
                }),
                (e.prototype.destroy = function () {
                  var a, b, c, d, e;
                  e = this._core.settings;
                  for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                  for (b in this._controls)
                    '$relative' === b && e.navContainer
                      ? this._controls[b].html('')
                      : this._controls[b].remove();
                  for (d in this.overides) this._core[d] = this._overrides[d];
                  for (c in Object.getOwnPropertyNames(this))
                    'function' != typeof this[c] && (this[c] = null);
                }),
                (e.prototype.update = function () {
                  var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                  if (
                    ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
                    g.dots || 'page' == g.slideBy)
                  )
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                      if (b >= h || 0 === b) {
                        if (
                          (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }),
                          Math.min(f, a - d) === f)
                        )
                          break;
                        (b = 0), ++c;
                      }
                      b += this._core.mergers(this._core.relative(a));
                    }
                }),
                (e.prototype.draw = function () {
                  var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                  this._controls.$relative.toggleClass('disabled', !c.nav || d),
                    c.nav &&
                      (this._controls.$previous.toggleClass('disabled', !f && e <= this._core.minimum(!0)),
                      this._controls.$next.toggleClass('disabled', !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass('disabled', !c.dots || d),
                    c.dots &&
                      ((b = this._pages.length - this._controls.$absolute.children().length),
                      c.dotsData && 0 !== b
                        ? this._controls.$absolute.html(this._templates.join(''))
                        : b > 0
                        ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                        : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                      this._controls.$absolute.find('.active').removeClass('active'),
                      this._controls.$absolute
                        .children()
                        .eq(a.inArray(this.current(), this._pages))
                        .addClass('active'));
                }),
                (e.prototype.onTrigger = function (b) {
                  var c = this._core.settings;
                  b.page = {
                    index: a.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
                  };
                }),
                (e.prototype.current = function () {
                  var b = this._core.relative(this._core.current());
                  return a
                    .grep(
                      this._pages,
                      a.proxy(function (a, c) {
                        return a.start <= b && a.end >= b;
                      }, this)
                    )
                    .pop();
                }),
                (e.prototype.getPosition = function (b) {
                  var c,
                    d,
                    e = this._core.settings;
                  return (
                    'page' == e.slideBy
                      ? ((c = a.inArray(this.current(), this._pages)),
                        (d = this._pages.length),
                        b ? ++c : --c,
                        (c = this._pages[((c % d) + d) % d].start))
                      : ((c = this._core.relative(this._core.current())),
                        (d = this._core.items().length),
                        b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                  );
                }),
                (e.prototype.next = function (b) {
                  a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
                }),
                (e.prototype.prev = function (b) {
                  a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
                }),
                (e.prototype.to = function (b, c, d) {
                  var e;
                  !d && this._pages.length
                    ? ((e = this._pages.length),
                      a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c))
                    : a.proxy(this._overrides.to, this._core)(b, c);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              'use strict';
              var e = function (c) {
                (this._core = c),
                  (this._hashes = {}),
                  (this.$element = this._core.$element),
                  (this._handlers = {
                    'initialized.owl.carousel': a.proxy(function (c) {
                      c.namespace &&
                        'URLHash' === this._core.settings.startPosition &&
                        a(b).trigger('hashchange.owl.navigation');
                    }, this),
                    'prepared.owl.carousel': a.proxy(function (b) {
                      if (b.namespace) {
                        var c = a(b.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
                        if (!c) return;
                        this._hashes[c] = b.content;
                      }
                    }, this),
                    'changed.owl.carousel': a.proxy(function (c) {
                      if (c.namespace && 'position' === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                          e = a
                            .map(this._hashes, function (a, b) {
                              return a === d ? b : null;
                            })
                            .join();
                        if (!e || b.location.hash.slice(1) === e) return;
                        b.location.hash = e;
                      }
                    }, this)
                  }),
                  (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                  this.$element.on(this._handlers),
                  a(b).on(
                    'hashchange.owl.navigation',
                    a.proxy(function (a) {
                      var c = b.location.hash.substring(1),
                        e = this._core.$stage.children(),
                        f = this._hashes[c] && e.index(this._hashes[c]);
                      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                  );
              };
              (e.Defaults = { URLhashListener: !1 }),
                (e.prototype.destroy = function () {
                  var c, d;
                  a(b).off('hashchange.owl.navigation');
                  for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                  for (d in Object.getOwnPropertyNames(this))
                    'function' != typeof this[d] && (this[d] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document),
            (function (a, b, c, d) {
              function e(b, c) {
                var e = !1,
                  f = b.charAt(0).toUpperCase() + b.slice(1);
                return (
                  a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                  }),
                  e
                );
              }
              function f(a) {
                return e(a, !0);
              }
              var g = a('<support>').get(0).style,
                h = 'Webkit Moz O ms'.split(' '),
                i = {
                  transition: {
                    end: {
                      WebkitTransition: 'webkitTransitionEnd',
                      MozTransition: 'transitionend',
                      OTransition: 'oTransitionEnd',
                      transition: 'transitionend'
                    }
                  },
                  animation: {
                    end: {
                      WebkitAnimation: 'webkitAnimationEnd',
                      MozAnimation: 'animationend',
                      OAnimation: 'oAnimationEnd',
                      animation: 'animationend'
                    }
                  }
                },
                j = {
                  csstransforms: function () {
                    return !!e('transform');
                  },
                  csstransforms3d: function () {
                    return !!e('perspective');
                  },
                  csstransitions: function () {
                    return !!e('transition');
                  },
                  cssanimations: function () {
                    return !!e('animation');
                  }
                };
              j.csstransitions() &&
                ((a.support.transition = new String(f('transition'))),
                (a.support.transition.end = i.transition.end[a.support.transition])),
                j.cssanimations() &&
                  ((a.support.animation = new String(f('animation'))),
                  (a.support.animation.end = i.animation.end[a.support.animation])),
                j.csstransforms() &&
                  ((a.support.transform = new String(f('transform'))),
                  (a.support.transform3d = j.csstransforms3d()));
            })(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js'),
          __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')
        ));

        /***/
      }

    /******/
  }
);