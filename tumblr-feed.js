/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const loadTumblrFeed = (blog, cb, posts) => {
  const url = `https://${blog}.tumblr.com/api/read/json?callback=${cb}&num=${posts}`;
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.id = `tumblr-${blog}`;
  document.body.appendChild(script);
}
/* harmony export (immutable) */ __webpack_exports__["a"] = loadTumblrFeed;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tumblr__ = __webpack_require__(0);




class TumblrFeed extends HTMLElement {
  
  constructor(){
    super();
    this.state = {
      blog: this.getAttribute('blog') || 'staff',
      callback: this.getAttribute('callback') || 'tumblr',
      posts: this.getAttribute('posts') || 10
    }
  }

  connectedCallback () {
    this._addScript();
  }

  _addScript(){
    this.dispatchEvent(new CustomEvent('tumblr-feed-attached'));
    this._checkMinimum();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tumblr__["a" /* loadTumblrFeed */])(this.state.blog, this.state.callback, this.state.posts);
  }

  _checkMinimum(){
    const n = parseInt(this.state.posts);
    n < 0 ? this.state.posts = 0 : null;
  }

}

customElements.define('tumblr-feed', TumblrFeed);

/***/ })
/******/ ]);
//# sourceMappingURL=tumblr-feed.js.map