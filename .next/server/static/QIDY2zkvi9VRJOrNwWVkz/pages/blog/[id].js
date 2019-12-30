module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+YYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return refreshAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forgotAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resetAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eNjs");


const LOGIN = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/login`;
const AUTH = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/profile`;
const REFRESH = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/refresh`;
function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(LOGIN, data);
}
function authAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(AUTH, {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
function refreshAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(REFRESH, {
    refresh: token.refresh
  });
}
function forgotAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/password/reset/`;
}
function resetAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/password/reset/confirm/`;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eH5e");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "46kV":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "Aqs1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VAPu");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const FixedMenuLayout = () => __jsx("div", {
  dir: "RTL"
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Segment"], {
  inverted: true,
  vertical: true,
  style: {
    padding: '5em 0em',
    width: '100%'
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], {
  textAlign: "center"
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
  inverted: true,
  stackable: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 3
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 3
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
  inverted: true,
  as: "h4",
  content: "\u0634\u0628\u06A9\u0647\u200C\u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC"
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"], {
  link: true,
  inverted: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "https://instagram.com/datadays_sharif",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"]
}), " \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "https://t.me/datadays_sharif",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTelegram"]
}), " \u062A\u0644\u06AF\u0631\u0627\u0645")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "https://twitter.com/data_days",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitter"]
}), " \u062A\u0648\u06CC\u06CC\u062A\u0631")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "mailto:datadays@sharif.edu"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"]
}), " \u0627\u06CC\u0645\u06CC\u0644")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 7
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
  inverted: true,
  as: "h4",
  content: "\u0622\u062F\u0631\u0633"
}), __jsx("p", null, "\u062A\u0647\u0631\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0622\u0632\u0627\u062F\u06CC\u060C \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641\u060C \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
  inverted: true,
  section: true
}), __jsx("p", null, "\u062A\u0645\u0627\u0645\u06CC \u062D\u0642\u0648\u0642 \u0628\u0631\u0627\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A.", ' ', new Date().getFullYear(), "\xA9"))));

/* harmony default export */ __webpack_exports__["a"] = (FixedMenuLayout);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "ETzx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dKEp");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Menu = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"]).withConfig({
  displayName: "auth__Menu",
  componentId: "a1fqga-0"
})(["position:", " !important;margin:0 !important;border-radius:0 !important;border:0 !important;border-bottom:", " !important;background-color:", " !important;z-index:", " !important;width:100%;"], props => props.transparent ? 'absolute' : 'relative', props => props.transparent ? '0' : '1px solid #e2e2e2', props => props.transparent ? 'transparent' : 'white', props => props.transparent ? 1 : 0);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"]).withConfig({
  displayName: "auth__Image",
  componentId: "a1fqga-1"
})(["position:absolute;top:50%;transform:translateY(-50%);"]);

function Navbar({
  logout,
  transparent
}) {
  return __jsx(Menu, {
    size: "huge",
    transparent: transparent,
    secondary: true
  }, __jsx(Menu.Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: e => {
      e.preventDefault();
      logout();
    },
    primary: true
  }, "\u062E\u0631\u0648\u062C")), __jsx(Menu.Item, null, __jsx("a", {
    href: "/dashboard/tasks"
  }, "\u0645\u0646\u0627\u0628\u0639"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBook"]
  })), __jsx(Menu.Item, null, __jsx("a", {
    href: "/blog"
  }, "\u0628\u0644\u0627\u06AF"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBlog"]
  })), __jsx(Menu.Menu, {
    position: "left"
  }, __jsx(Menu.Header, null, __jsx("a", {
    href: "/dashboard/tasks"
  }, __jsx(Image, {
    style: {
      marginRight: '1rem',
      marginTop: '2rem'
    },
    size: "mini",
    src: "/images/logo.png"
  })))));
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__[/* logoutAction */ "k"])())
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Navbar));

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "Rgy9":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/mdx");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "VYMa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"]).withConfig({
  displayName: "navbar__Menu",
  componentId: "vt9xwb-0"
})(["position:", " !important;margin:0 !important;border-radius:0 !important;border:0 !important;border-bottom:", " !important;background-color:", " !important;z-index:", " !important;width:100%;"], props => props.transparent ? 'absolute' : 'relative', props => props.transparent ? '0' : '1px solid #e2e2e2', props => props.transparent ? 'transparent' : 'white', props => props.transparent ? 1 : 0);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"]).withConfig({
  displayName: "navbar__Image",
  componentId: "vt9xwb-1"
})(["position:absolute;top:50%;transform:translateY(-50%);"]);

function Navbar({
  transparent
}) {
  return __jsx(Menu, {
    size: "huge",
    transparent: transparent,
    secondary: true
  }, __jsx(Menu.Item, null, __jsx("a", {
    href: "/login"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true
  }, "\u0648\u0631\u0648\u062F"))), __jsx(Menu.Item, null, __jsx("a", {
    href: "/blog"
  }, "\u0628\u0644\u0627\u06AF"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBlog"]
  })), __jsx(Menu.Menu, {
    position: "left"
  }, __jsx(Menu.Header, null, __jsx("a", {
    href: "/"
  }, __jsx(Image, {
    style: {
      marginRight: '1rem',
      marginTop: '2rem'
    },
    size: "mini",
    src: "/images/logo.png"
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dKEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGOUT; });
/* unused harmony export loginUnloadAction */
/* unused harmony export loginCheckerAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return authorizeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return logoutAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+YYQ");


const LOGIN_CLEAR = 'LOGIN_CLEAR';
const LOGIN_LOAD = 'LOGIN_LOAD';
const LOGIN_UNLOAD = 'LOGIN_UNLOAD';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_CHECK = 'LOGIN_CHECK';
const SET_TOKEN = 'SET_TOKEN';
const LOGOUT = 'LOGOUT';

function loginClearAction() {
  return {
    type: LOGIN_CLEAR
  };
}

function loginLoadAction() {
  return {
    type: LOGIN_LOAD
  };
}

function loginUnloadAction() {
  return {
    type: LOGIN_UNLOAD
  };
}

function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  };
}

function loginFailAction(errors) {
  return {
    type: LOGIN_FAIL,
    payload: {
      errors
    }
  };
}

function loginCheckerAction(fields) {
  return {
    type: LOGIN_CHECK,
    payload: {
      fields
    }
  };
}
function loginAction(username, password) {
  return (dispatch, getState) => {
    dispatch(loginClearAction());
    dispatch(loginLoadAction());
    dispatch(loginCheckerAction({
      username,
      password
    }));

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(getState().auth.errors)) {
      Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* loginAPI */ "c"])({
        username,
        password
      }).then(res => {
        const {
          data
        } = res;

        if (data.status_code === 200) {
          const token = {
            refresh: data.refresh,
            access: data.access
          };
          dispatch(loginSuccessAction(token));
        } else {
          dispatch(loginFailAction(data.detail));
        }
      });
    } else {
      dispatch(loginUnloadAction());
    }
  };
}

function setTokenAction(token) {
  return {
    type: SET_TOKEN,
    payload: {
      token
    }
  };
}

function authorizeAction() {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth;
    dispatch(loginLoadAction());
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* authAPI */ "a"])(token).then(authRes => {
      if (authRes.data.status_code !== 200) {
        Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* refreshAPI */ "d"])(token).then(refreshRes => {
          if (refreshRes.data.status_code !== 200) {
            dispatch(setTokenAction({}));
          } else {
            const newToken = {
              refresh: token.refresh,
              access: refreshRes.data.access
            };
            dispatch(setTokenAction(newToken));
          }
        });
      } else {
        dispatch(setTokenAction(token));
      }
    });
  };
}
function logoutAction() {
  return {
    type: LOGOUT
  };
}

/***/ }),

/***/ "eH5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./components/global/withAuth.jsx
var withAuth = __webpack_require__("lblT");

// EXTERNAL MODULE: ./components/global/navbar/index.jsx
var navbar = __webpack_require__("VYMa");

// EXTERNAL MODULE: ./components/global/navbar/auth.jsx
var navbar_auth = __webpack_require__("ETzx");

// EXTERNAL MODULE: ./components/global/footer.jsx
var footer = __webpack_require__("Aqs1");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// CONCATENATED MODULE: ./components/blog/post/body.jsx
var __jsx = external_react_default.a.createElement;




const Grid = external_styled_components_default()(external_semantic_ui_react_["Grid"]).withConfig({
  displayName: "body__Grid",
  componentId: "sc-1jlp4au-0"
})(["", ";"], external_styled_system_["color"]);
const DefaultProps = {
  bg: 'background'
};

function Body({
  children,
  bg
} = DefaultProps) {
  return __jsx(Grid, {
    bg: bg,
    centered: true
  }, __jsx(Grid.Column, {
    computer: 8,
    tablet: 10,
    mobile: 16
  }, children));
}

/* harmony default export */ var body = (Body);
// EXTERNAL MODULE: ./redux/api/index.js
var api = __webpack_require__("eNjs");

// CONCATENATED MODULE: ./components/blog/post/headerImage.jsx
var headerImage_jsx = external_react_default.a.createElement;




function HeaderImage({
  url
}) {
  return headerImage_jsx(external_semantic_ui_react_["Image"], {
    src: api["a" /* BASE */] + url,
    fluid: true
  });
}

/* harmony default export */ var headerImage = (HeaderImage);
// EXTERNAL MODULE: external "jalali-moment"
var external_jalali_moment_ = __webpack_require__("wfCd");
var external_jalali_moment_default = /*#__PURE__*/__webpack_require__.n(external_jalali_moment_);

// CONCATENATED MODULE: ./components/blog/post/header.jsx
var header_jsx = external_react_default.a.createElement;



const header_DefaultProps = {
  title: '',
  desc: '',
  date: '',
  rtl: true
};

function Header({
  title,
  desc,
  date
} = header_DefaultProps) {
  return header_jsx(external_react_default.a.Fragment, null, header_jsx(external_semantic_ui_react_["Header"], {
    style: {
      direction: 'rtl'
    },
    as: "h2"
  }, desc), header_jsx(external_semantic_ui_react_["Header"], {
    style: {
      direction: 'rtl'
    },
    as: "h1"
  }, title), header_jsx(external_semantic_ui_react_["Header"], {
    style: {
      direction: 'rtl'
    },
    as: "h4"
  }, external_jalali_moment_default.a.from(date, 'en').locale('fa').fromNow()), header_jsx(external_semantic_ui_react_["Divider"], null));
}

/* harmony default export */ var post_header = (Header);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: external "buble"
var external_buble_ = __webpack_require__("r7Jm");

// EXTERNAL MODULE: external "@mdx-js/mdx"
var mdx_ = __webpack_require__("Rgy9");
var mdx_default = /*#__PURE__*/__webpack_require__.n(mdx_);

// EXTERNAL MODULE: external "@mdx-js/react"
var react_ = __webpack_require__("c2Xn");

// CONCATENATED MODULE: ./components/global/mdx/runtime.js







/* harmony default export */ var runtime = (function (c) {
  var i = c.scope;
  void 0 === i && (i = {});
  var p = c.components;
  void 0 === p && (p = {});
  var a = c.remarkPlugins;
  void 0 === a && (a = []);
  var s = c.rehypePlugins;
  void 0 === s && (s = []);

  var m = c.children,
      l = function (e, r) {
    var n = {};

    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && -1 === r.indexOf(o) && (n[o] = e[o]);

    return n;
  }(c, ['scope', 'components', 'remarkPlugins', 'rehypePlugins', 'children']),
      d = assign_default()({}, {
    mdx: react_["mdx"],
    MDXProvider: react_["MDXProvider"],
    components: p,
    props: l
  }, i),
      u = mdx_default.a.sync(m, {
    remarkPlugins: a,
    rehypePlugins: s,
    skipExport: !0
  }).trim(),
      v = Object(external_buble_["transform"])(u, {
    objectAssign: 'Object.assign'
  }).code,
      f = keys_default()(d),
      y = values_default()(d);

  return new (Function.prototype.bind.apply(Function, [null].concat(['_fn'], ['React'], f, [v + '\n\n    return React.createElement(MDXProvider, { components },\n      React.createElement(MDXContent, props)\n    );'])))().apply(void 0, [{}, external_react_default.a].concat(y));
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_);

// CONCATENATED MODULE: ./components/global/mdx/code.jsx
var code_jsx = external_react_default.a.createElement;




const SyntaxHighlighter = external_styled_components_default()(external_react_syntax_highlighter_default.a).withConfig({
  displayName: "code__SyntaxHighlighter",
  componentId: "l0fd98-0"
})(["text-align:left !important;"]);

function CodeBlock({
  children,
  className
}) {
  const language = external_lodash_default.a.replace(className, /language-/, '');

  return code_jsx(SyntaxHighlighter, {
    language: language,
    useInlineStyles: true
  }, children);
}

/* harmony default export */ var code = (CodeBlock);
// CONCATENATED MODULE: ./components/global/mdx/defaultComponents.jsx

var defaultComponents_jsx = external_react_default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */



/* harmony default export */ var defaultComponents = ({
  div: props => defaultComponents_jsx("div", Object(esm_extends["a" /* default */])({
    style: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      marginBottom: '0.75rem',
      direction: 'rtl'
    }
  }, props)),
  h1: props => defaultComponents_jsx("div", {
    dir: "RTL"
  }, defaultComponents_jsx(external_semantic_ui_react_["Header"], Object(esm_extends["a" /* default */])({
    as: "h1",
    style: {
      fontSize: '3rem',
      lineHeight: 1.5,
      marginBottom: '3rem'
    }
  }, props))),
  h2: props => defaultComponents_jsx("div", {
    dir: "RTL"
  }, defaultComponents_jsx(external_semantic_ui_react_["Header"], Object(esm_extends["a" /* default */])({
    as: "h2",
    style: {
      fontSize: '2.25rem',
      lineHeight: 1.5,
      marginBottom: '2rem'
    }
  }, props))),
  h3: props => defaultComponents_jsx("div", {
    dir: "RTL"
  }, defaultComponents_jsx(external_semantic_ui_react_["Header"], Object(esm_extends["a" /* default */])({
    as: "h3",
    style: {
      fontSize: '2rem',
      lineHeight: 1.5,
      marginBottom: '1rem'
    }
  }, props))),
  p: props => defaultComponents_jsx("p", Object(esm_extends["a" /* default */])({
    style: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      marginBottom: '0.75rem',
      direction: 'rtl'
    }
  }, props)),
  hr: props => defaultComponents_jsx(external_semantic_ui_react_["Divider"], props),
  ul: props => defaultComponents_jsx("div", {
    dir: "RTL"
  }, defaultComponents_jsx(external_semantic_ui_react_["List"], Object(esm_extends["a" /* default */])({
    bulleted: true
  }, props))),
  ol: props => defaultComponents_jsx("div", {
    dir: "RTL"
  }, defaultComponents_jsx(external_semantic_ui_react_["List"], Object(esm_extends["a" /* default */])({
    ordered: true
  }, props))),
  li: props => defaultComponents_jsx(external_semantic_ui_react_["List"].Item, Object(esm_extends["a" /* default */])({
    style: {
      fontSize: '1.25rem',
      lineHeight: 1.25
    }
  }, props)),
  pre: props => defaultComponents_jsx("div", props),
  code: props => defaultComponents_jsx(code, props),
  table: props => defaultComponents_jsx("div", {
    dir: "RTL"
  }, defaultComponents_jsx(external_semantic_ui_react_["Table"], Object(esm_extends["a" /* default */])({
    celled: true,
    striped: true
  }, props))),
  thead: props => defaultComponents_jsx(external_semantic_ui_react_["Table"].Header, props),
  tbody: props => defaultComponents_jsx(external_semantic_ui_react_["Table"].Body, props),
  tr: props => defaultComponents_jsx(external_semantic_ui_react_["Table"].Row, props),
  td: props => defaultComponents_jsx(external_semantic_ui_react_["Table"].Cell, props),
  img: props => defaultComponents_jsx(external_semantic_ui_react_["Image"], props)
});
// CONCATENATED MODULE: ./components/global/mdx/index.jsx
var mdx_jsx = external_react_default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */




function Content({
  content
}) {
  return mdx_jsx(runtime, {
    style: {
      padding: '1rem'
    },
    components: defaultComponents
  }, content);
}

/* harmony default export */ var mdx = (Content);
// CONCATENATED MODULE: ./components/blog/post/index.jsx
var post_jsx = external_react_default.a.createElement;



 // import Comments from './comments';



function Post({
  image,
  header,
  content,
  comments
}) {
  const {
    title,
    desc,
    date
  } = header;
  return post_jsx(external_react_default.a.Fragment, null, post_jsx(body, null, post_jsx(headerImage, {
    url: image
  }), post_jsx(post_header, {
    title: title,
    desc: desc,
    date: date
  }), post_jsx(mdx, {
    content: content
  })));
}

/* harmony default export */ var blog_post = (Post);
// EXTERNAL MODULE: ./redux/api/blog.js
var blog = __webpack_require__("ny4g");

// CONCATENATED MODULE: ./pages/blog/[id].jsx
var _id_jsx = external_react_default.a.createElement;











class _id_PostPage extends external_react_["Component"] {
  static async getInitialProps(context) {
    const {
      id
    } = context.query;
    const res = await external_isomorphic_unfetch_default()(Object(blog["b" /* postAPI */])(id));
    const post = await res.json();
    return {
      post
    };
  }

  render() {
    const {
      auth,
      post
    } = this.props;
    const {
      image,
      date,
      title_fa,
      text_fa,
      comments
    } = post;
    return _id_jsx(external_react_default.a.Fragment, null, _id_jsx(head_default.a, null, _id_jsx("title", null, `بلاگ DataDays | ${title_fa}`)), external_lodash_default.a.isEmpty(auth.token) ? _id_jsx(navbar["a" /* default */], null) : _id_jsx(navbar_auth["a" /* default */], null), _id_jsx(blog_post, {
      image: image,
      header: {
        title: title_fa,
        desc: '',
        date
      },
      content: external_lodash_default.a.replace(text_fa, '\r', '')
    }), _id_jsx(footer["a" /* default */], null));
  }

}

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])()(_id_PostPage));

/***/ }),

/***/ "eNjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return termsAPI; });
const BASE_ADDR = 'https://datadays.sharif.edu/api';
const BASE = 'https://datadays.sharif.edu';
function termsAPI() {
  return `${BASE_ADDR}/terms`;
}
/* harmony default export */ __webpack_exports__["b"] = (BASE_ADDR);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lblT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("46kV");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("dKEp");







var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










function withAuth(loggedIn) {
  return WrappedComponent => {
    class Wrapper extends react__WEBPACK_IMPORTED_MODULE_10__["Component"] {
      static async getInitialProps(ctx) {
        const pageProps = (await WrappedComponent.getInitialProps) && (await WrappedComponent.getInitialProps(ctx));
        return _objectSpread({}, pageProps);
      }

      componentDidMount() {
        const {
          authorize
        } = this.props;
        authorize();
      }

      render() {
        const {
          auth
        } = this.props;

        if (auth.loading) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", null, "DataDays 2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
            active: auth.loading
          }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_13__["ClipLoader"], {
            size: 75,
            color: "#fff",
            loading: auth.loading
          })));
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isUndefined(loggedIn)) {
          return __jsx(WrappedComponent, this.props);
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(auth.token) && loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');
        }

        if (!lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(auth.token) && !loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/dashboard/tasks');
        }

        return __jsx(WrappedComponent, this.props);
      }

    }

    function mapStateToProps(state, ownProps) {
      const {
        auth
      } = state;
      return {
        auth
      };
    }

    function mapDispatchToProps(dispatch, ownProps) {
      return {
        authorize: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__[/* authorizeAction */ "i"])())
      };
    }

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Wrapper);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (withAuth);

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "ny4g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blogHomeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postAPI; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eNjs");

function blogHomeAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"]}/blog`;
}
function postAPI(id) {
  return `${___WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"]}/blog/${id}`;
}

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7Jm":
/***/ (function(module, exports) {

module.exports = require("buble");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "wfCd":
/***/ (function(module, exports) {

module.exports = require("jalali-moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });