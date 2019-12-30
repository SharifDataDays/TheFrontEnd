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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/global/withAuth.jsx":
/*!****************************************!*\
  !*** ./components/global/withAuth.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/auth */ "./redux/actions/auth.js");








var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/global/withAuth.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










function withAuth(loggedIn) {
  return WrappedComponent => {
    class Wrapper extends react__WEBPACK_IMPORTED_MODULE_11__["Component"] {
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
          return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, "DataDays 2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Dimmer"], {
            active: auth.loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_14__["ClipLoader"], {
            size: 75,
            color: "#fff",
            loading: auth.loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          })));
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(loggedIn)) {
          return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }));
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(auth.token) && loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');
        }

        if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(auth.token) && !loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/dashboard/tasks');
        }

        return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
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
        authorize: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_15__["authorizeAction"])())
      };
    }

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Wrapper);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./components/user/container.jsx":
/*!***************************************!*\
  !*** ./components/user/container.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network */ "./components/user/network.js");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/user/container.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Container extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.renderCanvas = this.renderCanvas.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth >= 768) {
      this.renderCanvas();
    }
  }

  componentDidUpdate() {
    if (window.innerWidth >= 768) {
      this.renderCanvas();
    }
  }

  renderCanvas() {
    if (window.innerWidth >= 700) {
      Object(_network__WEBPACK_IMPORTED_MODULE_2__["default"])(this.canvas);
    }
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      celled: true,
      padded: true,
      centered: true,
      style: {
        padding: 0,
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      style: {
        height: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      computer: 8,
      only: "computer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      style: {
        zIndex: 1,
        position: 'absolute',
        margin: 10
      },
      size: "mini",
      src: "/images/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), __jsx("canvas", {
      ref: r => {
        this.canvas = r;
      },
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      verticalAlign: "middle",
      computer: 8,
      tablet: 8,
      mobile: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "\u0628\u0627\u0632\u06AF\u0634\u062A"), children)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/user/input.jsx":
/*!***********************************!*\
  !*** ./components/user/input.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/user/input.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Input extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const {
      error,
      type,
      label,
      width,
      name
    } = this.props;
    const {
      value
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      style: {
        marginBottom: 10
      },
      error: error,
      type: type,
      value: value,
      label: label,
      width: width || 8,
      name: name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/user/login/container.jsx":
/*!*********************************************!*\
  !*** ./components/user/login/container.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container */ "./components/user/container.jsx");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./components/user/login/form.jsx");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/user/login/container.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function LoginContainer({
  auth,
  login
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
    active: auth.loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_2__["ClipLoader"], {
    size: 75,
    color: "#fff",
    loading: auth.loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    dividing: true,
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u0648\u0631\u0648\u062F"), __jsx(_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    auth: auth,
    login: login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginContainer);

/***/ }),

/***/ "./components/user/login/form.jsx":
/*!****************************************!*\
  !*** ./components/user/login/form.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input */ "./components/user/input.jsx");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/user/login/form.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






class Form extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const {
      auth,
      login
    } = this.props;
    login(this.username.state.value, this.password.state.value);
    console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(auth.errors));
    /* if (_.isEmpty(auth.errors)) {
      Router.push('/dashboard/tasks', '/dashboard/tasks', { shallow: false });
    } */
  }

  render() {
    const {
      auth
    } = this.props;
    const {
      errors
    } = auth;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
      verticalAlign: "middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      width: 2,
      dir: "rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: c => {
        this.username = c;
      },
      label: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC",
      error: errors.username,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: c => {
        this.password = c;
      },
      label: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
      type: "password",
      error: errors.password,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      dir: "rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
      hidden: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(errors),
      negative: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0635\u062D\u06CC\u062D \u0646\u0645\u06CC\u200C\u0628\u0627\u0634\u062F.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      dir: "rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\u0639\u0636\u0648 \u0646\u06CC\u0633\u062A\u06CC\u062F\u061F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0633\u0627\u0632\u06CC\u062F!")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      dir: "rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("a", {
      href: "/forgot/email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "submit",
      primary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "\u0648\u0631\u0648\u062F"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/user/network.js":
/*!************************************!*\
  !*** ./components/user/network.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return neuralnet; });
function neuralnet(canvas) {
  let w = canvas.width = 3 * window.innerWidth / 5;
  let h = canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const opts = {
    range: 180,
    baseConnections: 3,
    addedConnections: 5,
    baseSize: 5,
    minSize: 1,
    dataToConnectionSize: 0.4,
    sizeMultiplier: 0.7,
    allowedDist: 40,
    baseDist: 40,
    addedDist: 30,
    connectionAttempts: 60,
    dataToConnections: 1,
    baseSpeed: 0.04,
    addedSpeed: 0.05,
    baseGlowSpeed: 0.4,
    addedGlowSpeed: 0.4,
    rotVelX: 0.003,
    rotVelY: 0.002,
    repaintColor: '#202020',
    connectionColor: 'hsla(200,60%,light%,alp)',
    rootColor: 'hsla(0,60%,light%,alp)',
    endColor: 'hsla(160,20%,light%,alp)',
    dataColor: 'hsla(40,80%,light%,alp)',
    wireframeWidth: 0.1,
    wireframeColor: '#88f',
    depth: 250,
    focalLength: 250,
    vanishPoint: {
      x: w / 2,
      y: h / 2
    }
  };
  const squareRange = opts.range * opts.range;
  const squareAllowed = opts.allowedDist * opts.allowedDist;
  const mostDistant = opts.depth + opts.range;
  let sinX = 0;
  let sinY = 0;
  let cosX = 0;
  let cosY = 0;
  const connections = [];
  const toDevelop = [];
  const data = [];
  const all = [];
  let tick = 0;
  let animating = false;
  const Tau = Math.PI * 2;
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ccc';
  ctx.font = '50px Verdana';
  ctx.fillText('Calculating Nodes', w / 2 - ctx.measureText('Calculating Nodes').width / 2, h / 2 - 15);
  window.setTimeout(init, 4); // to render the loading screen

  function init() {
    connections.length = 0;
    data.length = 0;
    all.length = 0;
    toDevelop.length = 0;
    var connection = new Connection(0, 0, 0, opts.baseSize);
    connection.step = Connection.rootStep;
    connections.push(connection);
    all.push(connection);
    connection.link();

    while (toDevelop.length > 0) {
      toDevelop[0].link();
      toDevelop.shift();
    }

    if (!animating) {
      animating = true;
      anim();
    }
  }

  function Connection(x, y, z, size) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.screen = {};
    this.links = [];
    this.probabilities = [];
    this.isEnd = false;
    this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
  }

  Connection.prototype.link = function () {
    if (this.size < opts.minSize) return this.isEnd = true;
    var links = [],
        connectionsNum = opts.baseConnections + Math.random() * opts.addedConnections | 0,
        attempt = opts.connectionAttempts,
        alpha,
        beta,
        len,
        cosA,
        sinA,
        cosB,
        sinB,
        pos = {},
        passedExisting,
        passedBuffered;

    while (links.length < connectionsNum && --attempt > 0) {
      alpha = Math.random() * Math.PI;
      beta = Math.random() * Tau;
      len = opts.baseDist + opts.addedDist * Math.random();
      cosA = Math.cos(alpha);
      sinA = Math.sin(alpha);
      cosB = Math.cos(beta);
      sinB = Math.sin(beta);
      pos.x = this.x + len * cosA * sinB;
      pos.y = this.y + len * sinA * sinB;
      pos.z = this.z + len * cosB;

      if (pos.x * pos.x + pos.y * pos.y + pos.z * pos.z < squareRange) {
        passedExisting = true;
        passedBuffered = true;

        for (var i = 0; i < connections.length; ++i) if (squareDist(pos, connections[i]) < squareAllowed) passedExisting = false;

        if (passedExisting) for (var i = 0; i < links.length; ++i) if (squareDist(pos, links[i]) < squareAllowed) passedBuffered = false;
        if (passedExisting && passedBuffered) links.push({
          x: pos.x,
          y: pos.y,
          z: pos.z
        });
      }
    }

    if (links.length === 0) this.isEnd = true;else {
      for (var i = 0; i < links.length; ++i) {
        var pos = links[i],
            connection = new Connection(pos.x, pos.y, pos.z, this.size * opts.sizeMultiplier);
        this.links[i] = connection;
        all.push(connection);
        connections.push(connection);
      }

      for (var i = 0; i < this.links.length; ++i) toDevelop.push(this.links[i]);
    }
  };

  Connection.prototype.step = function () {
    this.setScreen();
    this.screen.color = (this.isEnd ? opts.endColor : opts.connectionColor).replace('light', 30 + tick * this.glowSpeed % 30).replace('alp', 0.2 + (1 - this.screen.z / mostDistant) * 0.8);

    for (var i = 0; i < this.links.length; ++i) {
      ctx.moveTo(this.screen.x, this.screen.y);
      ctx.lineTo(this.links[i].screen.x, this.links[i].screen.y);
    }
  };

  Connection.rootStep = function () {
    this.setScreen();
    this.screen.color = opts.rootColor.replace('light', 30 + tick * this.glowSpeed % 30).replace('alp', (1 - this.screen.z / mostDistant) * 0.8);

    for (var i = 0; i < this.links.length; ++i) {
      ctx.moveTo(this.screen.x, this.screen.y);
      ctx.lineTo(this.links[i].screen.x, this.links[i].screen.y);
    }
  };

  Connection.prototype.draw = function () {
    ctx.fillStyle = this.screen.color;
    ctx.beginPath();
    ctx.arc(this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau);
    ctx.fill();
  };

  function Data(connection) {
    this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
    this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();
    this.screen = {};
    this.setConnection(connection);
  }

  Data.prototype.reset = function () {
    this.setConnection(connections[0]);
    this.ended = 2;
  };

  Data.prototype.step = function () {
    this.proportion += this.speed;

    if (this.proportion < 1) {
      this.x = this.ox + this.dx * this.proportion;
      this.y = this.oy + this.dy * this.proportion;
      this.z = this.oz + this.dz * this.proportion;
      this.size = (this.os + this.ds * this.proportion) * opts.dataToConnectionSize;
    } else this.setConnection(this.nextConnection);

    this.screen.lastX = this.screen.x;
    this.screen.lastY = this.screen.y;
    this.setScreen();
    this.screen.color = opts.dataColor.replace('light', 40 + tick * this.glowSpeed % 50).replace('alp', 0.2 + (1 - this.screen.z / mostDistant) * 0.6);
  };

  Data.prototype.draw = function () {
    if (this.ended) return --this.ended; // not sre why the thing lasts 2 frames, but it does

    ctx.beginPath();
    ctx.strokeStyle = this.screen.color;
    ctx.lineWidth = this.size * this.screen.scale;
    ctx.moveTo(this.screen.lastX, this.screen.lastY);
    ctx.lineTo(this.screen.x, this.screen.y);
    ctx.stroke();
  };

  Data.prototype.setConnection = function (connection) {
    if (connection.isEnd) this.reset();else {
      this.connection = connection;
      this.nextConnection = connection.links[connection.links.length * Math.random() | 0];
      this.ox = connection.x; // original coordinates

      this.oy = connection.y;
      this.oz = connection.z;
      this.os = connection.size; // base size

      this.nx = this.nextConnection.x; // new

      this.ny = this.nextConnection.y;
      this.nz = this.nextConnection.z;
      this.ns = this.nextConnection.size;
      this.dx = this.nx - this.ox; // delta

      this.dy = this.ny - this.oy;
      this.dz = this.nz - this.oz;
      this.ds = this.ns - this.os;
      this.proportion = 0;
    }
  };

  Connection.prototype.setScreen = Data.prototype.setScreen = function () {
    var x = this.x,
        y = this.y,
        z = this.z; // apply rotation on X axis

    var Y = y;
    y = y * cosX - z * sinX;
    z = z * cosX + Y * sinX; // rot on Y

    var Z = z;
    z = z * cosY - x * sinY;
    x = x * cosY + Z * sinY;
    this.screen.z = z; // translate on Z

    z += opts.depth;
    this.screen.scale = opts.focalLength / z;
    this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
    this.screen.y = opts.vanishPoint.y + y * this.screen.scale;
  };

  function squareDist(a, b) {
    var x = b.x - a.x,
        y = b.y - a.y,
        z = b.z - a.z;
    return x * x + y * y + z * z;
  }

  function anim() {
    window.requestAnimationFrame(anim);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = opts.repaintColor;
    ctx.fillRect(0, 0, w, h);
    ++tick;
    var rotX = tick * opts.rotVelX,
        rotY = tick * opts.rotVelY;
    cosX = Math.cos(rotX);
    sinX = Math.sin(rotX);
    cosY = Math.cos(rotY);
    sinY = Math.sin(rotY);

    if (data.length < connections.length * opts.dataToConnections) {
      var datum = new Data(connections[0]);
      data.push(datum);
      all.push(datum);
    }

    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.lineWidth = opts.wireframeWidth;
    ctx.strokeStyle = opts.wireframeColor;
    all.map(function (item) {
      item.step();
    });
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    all.sort(function (a, b) {
      return b.screen.z - a.screen.z;
    });
    all.map(function (item) {
      item.draw();
    });
  }

  window.addEventListener('resize', function () {
    opts.vanishPoint.x = (w = canvas.width = 4 * window.innerWidth / 5) / 2;
    opts.vanishPoint.y = (h = canvas.height = window.innerHeight) / 2;
    ctx.fillRect(0, 0, w, h);
  }); //   window.addEventListener('click', init);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var _components_user_login_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user/login/container */ "./components/user/login/container.jsx");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/auth */ "./redux/actions/auth.js");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/pages/login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable react/prefer-stateless-function */








class LoginPage extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render() {
    const {
      auth,
      login
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\u0648\u0631\u0648\u062F - DataDays 2020")), __jsx(_components_user_login_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      auth: auth,
      login: login,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
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
    login: (username, password) => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__["loginAction"])(username, password))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(false)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(LoginPage)));

/***/ }),

/***/ "./redux/actions/auth.js":
/*!*******************************!*\
  !*** ./redux/actions/auth.js ***!
  \*******************************/
/*! exports provided: LOGIN_CLEAR, LOGIN_LOAD, LOGIN_UNLOAD, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_CHECK, SET_TOKEN, LOGOUT, loginUnloadAction, loginCheckerAction, loginAction, authorizeAction, logoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CLEAR", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LOAD", function() { return LOGIN_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_UNLOAD", function() { return LOGIN_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CHECK", function() { return LOGIN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUnloadAction", function() { return loginUnloadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCheckerAction", function() { return loginCheckerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorizeAction", function() { return authorizeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth */ "./redux/api/auth.js");


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
      Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["loginAPI"])({
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
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["authAPI"])(token).then(authRes => {
      if (authRes.data.status_code !== 200) {
        Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["refreshAPI"])(token).then(refreshRes => {
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

/***/ "./redux/api/auth.js":
/*!***************************!*\
  !*** ./redux/api/auth.js ***!
  \***************************/
/*! exports provided: loginAPI, authAPI, refreshAPI, forgotAPI, resetAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAPI", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authAPI", function() { return authAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshAPI", function() { return refreshAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotAPI", function() { return forgotAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAPI", function() { return resetAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


const LOGIN = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/login`;
const AUTH = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/profile`;
const REFRESH = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/refresh`;
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
  return `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/password/reset/`;
}
function resetAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/password/reset/confirm/`;
}

/***/ }),

/***/ "./redux/api/index.js":
/*!****************************!*\
  !*** ./redux/api/index.js ***!
  \****************************/
/*! exports provided: BASE, termsAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE", function() { return BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termsAPI", function() { return termsAPI; });
const BASE_ADDR = 'https://datadays.sharif.edu/api';
const BASE = 'https://datadays.sharif.edu';
function termsAPI() {
  return `${BASE_ADDR}/terms`;
}
/* harmony default export */ __webpack_exports__["default"] = (BASE_ADDR);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/login.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/pages/login.jsx */"./pages/login.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map