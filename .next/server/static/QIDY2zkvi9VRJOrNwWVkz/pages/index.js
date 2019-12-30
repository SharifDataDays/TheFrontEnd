module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


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

/***/ "EjUv":
/***/ (function(module, exports) {

module.exports = require("@merc/react-timeline");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "HfBV":
/***/ (function(module, exports) {

module.exports = require("react-reveal");

/***/ }),

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KK4J":
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: ./redux/api/index.js
var api = __webpack_require__("eNjs");

// CONCATENATED MODULE: ./redux/api/home.js

function subscribeAPI() {
  return `${api["b" /* default */]}/subscribe/email`;
}
function homeAPI() {
  return `${api["b" /* default */]}/`;
}
// EXTERNAL MODULE: ./components/global/navbar/index.jsx
var navbar = __webpack_require__("VYMa");

// EXTERNAL MODULE: ./components/global/footer.jsx
var footer = __webpack_require__("Aqs1");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__("INZR");
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__("KK4J");
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/home/subscribe.jsx
var __jsx = external_react_default.a.createElement;





const Segment = external_styled_components_default()(external_semantic_ui_react_["Button"]).withConfig({
  displayName: "subscribe__Segment",
  componentId: "biucb4-0"
})(["position:absolute;top:80%;right:50%;transform:translateX(50%);"]);

class subscribe_Subscribe extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({
      modalOpen: true
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit() {
    const {
      value
    } = this.state;
    external_axios_default.a.post(subscribeAPI(), {
      email: value
    }).then(res => {
      this.setState({
        modalOpen: false
      });
    }).catch(err => {
      this.setState({
        modalOpen: false
      });
    });
  }

  render() {
    const {
      modalOpen
    } = this.state;
    return __jsx(external_semantic_ui_react_["Modal"], {
      trigger: __jsx(Segment, {
        primary: true,
        onClick: this.handleOpen
      }, "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647"),
      textAlign: "center",
      open: modalOpen,
      onClose: this.handleClose,
      basic: true,
      size: "small"
    }, __jsx("div", {
      dir: "RTL"
    }, __jsx(external_semantic_ui_react_["Header"], {
      style: {
        color: 'white'
      },
      content: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647"
    }), __jsx(external_semantic_ui_react_["Modal"].Content, null, __jsx(external_semantic_ui_react_["Input"], {
      onChange: this.handleChange,
      style: {
        width: '100%'
      },
      placeholder: "\u0627\u06CC\u0645\u06CC\u0644"
    })), __jsx(external_semantic_ui_react_["Modal"].Actions, {
      style: {
        marginTop: '1rem'
      }
    }, __jsx(external_semantic_ui_react_["Button"], {
      onClick: this.handleClose,
      basic: true,
      color: "red",
      inverted: true
    }, "\u0644\u063A\u0648"), __jsx(external_semantic_ui_react_["Button"], {
      onClick: this.handleSubmit,
      color: "green",
      inverted: true
    }, "\u0627\u0634\u062A\u0631\u0627\u06A9"))));
  }

}

/* harmony default export */ var subscribe = (subscribe_Subscribe);
// CONCATENATED MODULE: ./components/home/header.jsx
var header_jsx = external_react_default.a.createElement;






const Image = external_styled_components_default()(external_semantic_ui_react_["Image"]).withConfig({
  displayName: "header__Image",
  componentId: "fu0b56-0"
})(["position:absolute !important;left:50%;top:50%;@media (min-width:768px){height:100vh;}transform:translateX(-50%) translateY(-50%);padding:2rem;"]);

function ParticleContainer({
  particleCount
}) {
  return header_jsx(external_react_particles_js_default.a, {
    width: "100vw",
    height: "100vh",
    style: {
      backgroundImage: 'linear-gradient(to bottom, #101010, #141414, #171717, #1a1a1a, #202020)'
    },
    params: {
      particles: {
        number: {
          value: particleCount
        },
        coloe: {
          value: '#1d93f7'
        },
        line_linked: {
          color: '#1d93f7',
          width: 2
        },
        size: {
          value: 1
        }
      }
    }
  });
}

function Header() {
  return header_jsx(external_react_no_ssr_default.a, null, header_jsx(Image, {
    size: "large",
    src: "/images/center.png"
  }), header_jsx(external_semantic_ui_react_["Responsive"], {
    maxWidth: external_semantic_ui_react_["Responsive"].onlyMobile.maxWidth
  }, header_jsx(ParticleContainer, {
    particleCount: 30
  }), header_jsx(subscribe, null)), header_jsx(external_semantic_ui_react_["Responsive"], {
    minWidth: external_semantic_ui_react_["Responsive"].onlyTablet.minWidth
  }, header_jsx(ParticleContainer, {
    particleCount: 100
  }), header_jsx(subscribe, null)));
}

/* harmony default export */ var home_header = (Header);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// CONCATENATED MODULE: ./components/home/sponsors/logo.jsx
var logo_jsx = external_react_default.a.createElement;




function change(color, visible) {
  if (visible) return false;
  return color === 'gray';
}

const logo_Image = external_styled_components_default()(external_semantic_ui_react_["Image"]).withConfig({
  displayName: "logo__Image",
  componentId: "sc-9fco9-0"
})(["filter:", ";opacity:", ";margin-left:auto;margin-right:auto;"], props => change(props.color, props.visible) ? 'invert(1)' : 'invert(1)', props => change(props.color, props.visible) ? 0.66 : 1);

class logo_Logo extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      color: 'gray'
    };
    this.changeToColor = this.changeToColor.bind(this);
    this.changeToGray = this.changeToGray.bind(this);
  }

  changeToColor() {
    this.setState({
      color: 'colored'
    });
  }

  changeToGray() {
    this.setState({
      color: 'gray'
    });
  }

  render() {
    const {
      height,
      src,
      visible
    } = this.props;
    const {
      color
    } = this.state;
    return logo_jsx("a", {
      href: src.link,
      target: "_blank",
      rel: "noopener noreferrer"
    }, logo_jsx(logo_Image, {
      src: src.image,
      height: height,
      color: color,
      visible: visible,
      onMouseEnter: this.changeToColor,
      onMouseLeave: this.changeToGray
    }));
  }

}

/* harmony default export */ var sponsors_logo = (logo_Logo);
// CONCATENATED MODULE: ./components/home/sponsors/index.jsx
var sponsors_jsx = external_react_default.a.createElement;







const logo1 = {
  image: '/images/sponsors/ssc.png',
  link: 'https://ssc.ce.sharif.edu/'
};
const logo2 = {
  image: '/images/sponsors/sharif.png',
  link: 'https://ce.sharif.edu/'
};
const logos = [logo1, logo2];
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "sponsors__Container",
  componentId: "sc-1qxeu5k-0"
})(["", ";color:white;background-color:#202020;margin-top:-8px;"], external_styled_system_["space"]);

class sponsors_Sponsors extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.setState({
      visible: isVisible
    });
  }

  render() {
    const {
      visible
    } = this.state;
    return sponsors_jsx(external_react_default.a.Fragment, null, sponsors_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onChange,
      offset: {
        top: 150,
        bottom: 150,
        left: -30,
        right: -30
      }
    }, sponsors_jsx(Container, {
      py: [3, 4, 4]
    }, sponsors_jsx(external_semantic_ui_react_["Grid"], {
      centered: true
    }, external_lodash_default.a.map(logos, (logo, i) => {
      return sponsors_jsx(external_semantic_ui_react_["Grid"].Column, {
        textAlign: "center",
        computer: 2,
        tablet: 3,
        mobile: 5,
        key: i
      }, sponsors_jsx(sponsors_logo, {
        src: logo,
        height: 60,
        visible: visible
      }));
    })))));
  }

}

/* harmony default export */ var sponsors = (sponsors_Sponsors);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__("HfBV");

// CONCATENATED MODULE: ./components/home/introduction.jsx
var introduction_jsx = external_react_default.a.createElement;






const introduction_Container = external_styled_components_default.a.div.withConfig({
  displayName: "introduction__Container",
  componentId: "sc-1l2hmt8-0"
})(["", ";color:white;position:relative;background-color:#1d93f7;"], external_styled_system_["space"]);
const introduction_Header = external_styled_components_default()(external_semantic_ui_react_["Header"]).withConfig({
  displayName: "introduction__Header",
  componentId: "sc-1l2hmt8-1"
})(["", ""], external_styled_system_["typography"]);
const Text = external_styled_components_default.a.p.withConfig({
  displayName: "introduction__Text",
  componentId: "sc-1l2hmt8-2"
})(["", ";direction:rtl;"], external_styled_system_["typography"]);

function Introduction({
  header,
  content
}) {
  return introduction_jsx(external_react_no_ssr_default.a, null, introduction_jsx(external_semantic_ui_react_["Responsive"], {
    minWidth: external_semantic_ui_react_["Responsive"].onlyTablet.minWidth
  }, introduction_jsx(introduction_Container, {
    style: {
      backgroundImage: "url('/images/intro.png')",
      backgroundSize: 'cover' // backgroundPosition: 'center',

    },
    py: [5, 6, 6]
  }, introduction_jsx(external_semantic_ui_react_["Grid"], {
    stackable: true,
    inverted: true,
    centered: true
  }, introduction_jsx(external_semantic_ui_react_["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle",
    width: 6
  }), introduction_jsx(external_semantic_ui_react_["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle",
    width: 6
  }, introduction_jsx(external_react_reveal_["Fade"], {
    right: true
  }, introduction_jsx(introduction_Header, {
    as: "h1",
    fontSize: (5, 6, 6)
  }, header), introduction_jsx(Text, {
    fontSize: [4, 5, 5]
  }, content)))))), introduction_jsx(external_semantic_ui_react_["Responsive"], {
    maxWidth: external_semantic_ui_react_["Responsive"].onlyMobile.maxWidth
  }, introduction_jsx(introduction_Container, {
    py: [5, 6, 6]
  }, introduction_jsx(external_semantic_ui_react_["Grid"], {
    centered: true
  }, introduction_jsx(external_semantic_ui_react_["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle",
    width: 14
  }, introduction_jsx(external_react_reveal_["Fade"], {
    right: true
  }, introduction_jsx(introduction_Header, {
    as: "h1",
    fontSize: (5, 6, 6)
  }, header), introduction_jsx(Text, {
    fontSize: [4, 5, 5]
  }, content)))))));
}

/* harmony default export */ var introduction = (Introduction);
// EXTERNAL MODULE: external "@merc/react-timeline"
var react_timeline_ = __webpack_require__("EjUv");

// CONCATENATED MODULE: ./components/home/timeline.jsx
var timeline_jsx = external_react_default.a.createElement;



const customTheme = Object(react_timeline_["createTheme"])(react_timeline_["themes"].default, {
  timeline: {
    backgroundColor: '#202020',
    fontSize: '1.5rem',
    fontFamily: 'IRANSans'
  },
  timelineTrack: {
    right: '50%',
    width: '2px',
    height: '90%',
    backgroundColor: '#1d93f7',
    content: "''"
  },
  marker: {
    backgroundColor: '#202020',
    border: '2px solid #1d93f7',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    zIndex: 100
  },
  card: {
    textAlign: 'right',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    padding: '1rem',
    // boxShadow: '0 6px 10px 3px hsla(0, 0%, 0%, 0.4)',
    width: '100%',
    maxWidth: '560px',
    a: {
      color: '#1d93f7'
    }
  },
  button: {
    fontSize: '14px',
    backgroundColor: '#1d93f7',
    borderRadius: '4px',
    padding: '6px',
    color: '#fff',
    margin: '10px 5px 5px 0',
    border: 'none',
    cursor: 'pointer'
  },
  date: {
    backgroundColor: '#1d93f7',
    padding: '4px',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '1.5rem'
  },
  events: {
    textAlign: 'right',
    padding: '10px'
  },
  event: {
    textAlign: 'right',
    marginBottom: '20px'
  },
  textAtom: {}
});
function Merc({
  timeline
}) {
  return timeline_jsx(react_timeline_["Timeline"], {
    theme: customTheme
  }, timeline_jsx(react_timeline_["Events"], null, external_lodash_default.a.map(timeline, (event, i) => {
    return timeline_jsx(react_timeline_["TextEvent"], {
      key: i,
      date: event.title_fa,
      text: external_lodash_default.a.replace(event.text_fa, '\r', '')
    });
  })));
}
// CONCATENATED MODULE: ./components/home/prize.jsx
var prize_jsx = external_react_default.a.createElement;






const prize_Container = external_styled_components_default.a.div.withConfig({
  displayName: "prize__Container",
  componentId: "sc-1iyjyks-0"
})(["", ";background-color:#202020;"], external_styled_system_["space"]);
const prize_Header = external_styled_components_default()(external_semantic_ui_react_["Header"]).withConfig({
  displayName: "prize__Header",
  componentId: "sc-1iyjyks-1"
})(["color:white;"]);

function Prize({
  prizes
}) {
  const firstMain = prizes[3].prize_fa;
  const secondMain = prizes[4].prize_fa;
  const thirdMain = prizes[5].prize_fa;
  return prize_jsx(external_react_no_ssr_default.a, null, prize_jsx(prize_Container, {
    py: [5, 6, 6]
  }, prize_jsx(external_semantic_ui_react_["Responsive"], {
    minWidth: external_semantic_ui_react_["Responsive"].onlyTablet.minWidth
  }, prize_jsx(external_semantic_ui_react_["Grid"], {
    dir: "RTL",
    centered: true
  }, prize_jsx(external_semantic_ui_react_["Grid"].Row, null, prize_jsx(external_semantic_ui_react_["Grid"].Column, {
    style: {
      marginTop: '10rem'
    },
    computer: 4,
    tablet: 5,
    mobile: 14,
    textAlign: "center"
  }, prize_jsx(external_react_reveal_["Zoom"], null, prize_jsx(external_semantic_ui_react_["Image"], {
    style: {
      margin: 'auto'
    },
    size: "medium",
    src: "/images/second.png"
  }), prize_jsx(prize_Header, {
    as: "h2",
    style: {
      margin: '1rem'
    }
  }, secondMain))), prize_jsx(external_semantic_ui_react_["Grid"].Column, {
    computer: 4,
    tablet: 5,
    mobile: 14,
    textAlign: "center"
  }, prize_jsx(external_react_reveal_["Zoom"], null, prize_jsx(external_semantic_ui_react_["Image"], {
    style: {
      margin: 'auto'
    },
    size: "medium",
    src: "/images/first.png"
  }), prize_jsx(prize_Header, {
    as: "h2",
    style: {
      margin: '1rem'
    }
  }, firstMain))), prize_jsx(external_semantic_ui_react_["Grid"].Column, {
    style: {
      marginTop: '10rem'
    },
    computer: 4,
    tablet: 5,
    mobile: 14,
    textAlign: "center"
  }, prize_jsx(external_react_reveal_["Zoom"], null, prize_jsx(external_semantic_ui_react_["Image"], {
    style: {
      margin: 'auto'
    },
    size: "medium",
    src: "/images/third.png"
  }), prize_jsx(prize_Header, {
    as: "h2",
    style: {
      margin: '1rem'
    }
  }, thirdMain)))), prize_jsx(external_semantic_ui_react_["Divider"], {
    hidden: true
  }), prize_jsx(external_semantic_ui_react_["Divider"], {
    hidden: true
  }), prize_jsx(external_semantic_ui_react_["Divider"], {
    hidden: true
  }), prize_jsx(external_semantic_ui_react_["Grid"].Row, null, prize_jsx(external_react_reveal_["Fade"], null, prize_jsx(prize_Header, {
    as: "h3",
    style: {
      margin: '1rem'
    }
  }, "\u062F\u0648 \u062A\u06CC\u0645 \u0627\u0632 \u062A\u06CC\u0645\u200C\u0647\u0627\u06CC \u0686\u0647\u0627\u0631\u0645 \u062A\u0627 \u0628\u06CC\u0633\u062A\u0645: \u0647\u0631\u06A9\u062F\u0627\u0645 \u06F2 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646"))))), prize_jsx(external_semantic_ui_react_["Responsive"], {
    maxWidth: external_semantic_ui_react_["Responsive"].onlyMobile.maxWidth
  }, prize_jsx(external_semantic_ui_react_["Grid"], {
    dir: "RTL",
    centered: true
  }, prize_jsx(external_semantic_ui_react_["Grid"].Row, null, prize_jsx(external_semantic_ui_react_["Grid"].Column, {
    computer: 4,
    tablet: 5,
    mobile: 14,
    textAlign: "center"
  }, prize_jsx(external_react_reveal_["Zoom"], null, prize_jsx(external_semantic_ui_react_["Image"], {
    style: {
      margin: 'auto'
    },
    size: "small",
    src: "/images/first.png"
  }), prize_jsx(prize_Header, {
    as: "h2",
    style: {
      margin: '2rem'
    }
  }, firstMain))), prize_jsx(external_semantic_ui_react_["Grid"].Column, {
    computer: 4,
    tablet: 5,
    mobile: 14,
    textAlign: "center"
  }, prize_jsx(external_react_reveal_["Zoom"], null, prize_jsx(external_semantic_ui_react_["Image"], {
    style: {
      margin: 'auto'
    },
    size: "small",
    src: "/images/second.png"
  }), prize_jsx(prize_Header, {
    as: "h2",
    style: {
      margin: '2rem'
    }
  }, secondMain))), prize_jsx(external_semantic_ui_react_["Grid"].Column, {
    computer: 4,
    tablet: 5,
    mobile: 14,
    textAlign: "center"
  }, prize_jsx(external_react_reveal_["Zoom"], null, prize_jsx(external_semantic_ui_react_["Image"], {
    style: {
      margin: 'auto'
    },
    size: "small",
    src: "/images/third.png"
  }), prize_jsx(prize_Header, {
    as: "h2",
    style: {
      margin: '2rem'
    }
  }, thirdMain)))), prize_jsx(external_semantic_ui_react_["Divider"], {
    hidden: true
  }), prize_jsx(external_semantic_ui_react_["Divider"], {
    hidden: true
  }), prize_jsx(external_semantic_ui_react_["Divider"], {
    hidden: true
  }), prize_jsx(external_semantic_ui_react_["Grid"].Row, null, prize_jsx(external_react_reveal_["Fade"], null, prize_jsx(prize_Header, {
    as: "h3",
    style: {
      margin: '1rem',
      padding: '1.5rem'
    }
  }, "\u062F\u0648 \u062A\u06CC\u0645 \u0627\u0632 \u062A\u06CC\u0645\u200C\u0647\u0627\u06CC \u0686\u0647\u0627\u0631\u0645 \u062A\u0627 \u0628\u06CC\u0633\u062A\u0645: \u0647\u0631\u06A9\u062F\u0627\u0645 \u06F2 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646")))))));
}

/* harmony default export */ var prize = (Prize);
// CONCATENATED MODULE: ./pages/index.jsx
var pages_jsx = external_react_default.a.createElement;













class pages_HomePage extends external_react_["Component"] {
  static async getInitialProps(ctx) {
    const res = await external_isomorphic_unfetch_default()(homeAPI());
    const content = await res.json();
    return {
      content
    };
  }

  render() {
    const {
      content
    } = this.props;
    const {
      intro,
      timeline,
      prizes
    } = content;
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, "DataDays 2020")), pages_jsx(navbar["a" /* default */], {
      transparent: true
    }), pages_jsx(home_header, null), pages_jsx(sponsors, null), pages_jsx(introduction, {
      header: intro.header_fa,
      content: intro.text_fa
    }), pages_jsx(Merc, {
      timeline: timeline
    }), pages_jsx(prize, {
      prizes: prizes
    }), pages_jsx(footer["a" /* default */], null));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(false)(pages_HomePage));

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

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });