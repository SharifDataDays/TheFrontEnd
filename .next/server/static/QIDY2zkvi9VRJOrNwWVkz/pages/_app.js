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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "L0Tq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./redux/api/index.js
var api = __webpack_require__("eNjs");

// CONCATENATED MODULE: ./redux/api/signup.js


const SIGNUP_API = `${api["b" /* default */]}/accounts/signup`;
function signupAPI(data) {
  return external_axios_default.a.post(SIGNUP_API, data, {
    headers: {
      'Accept-Language': 'fa'
    }
  });
}
// CONCATENATED MODULE: ./redux/actions/signup.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIGNUP_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SIGNUP_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SIGNUP_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SIGNUP_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGNUP_CHECK; });
/* unused harmony export signupCheckerAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return signupAction; });


const SIGNUP_CLEAR = 'SIGNUP_CLEAR';
const SIGNUP_LOAD = 'SIGNUP_LOAD';
const SIGNUP_UNLOAD = 'SIGNUP_UNLOAD';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const SIGNUP_CHECK = 'SIGNUP_CHECK';

function signupClearAction() {
  return {
    type: SIGNUP_CLEAR
  };
}

function signupLoadAction() {
  return {
    type: SIGNUP_LOAD
  };
}

function signupUnloadAction() {
  return {
    type: SIGNUP_UNLOAD
  };
}

function signupSuccessAction() {
  return {
    type: SIGNUP_SUCCESS
  };
}

function signupFailAction(errors) {
  return {
    type: SIGNUP_FAIL,
    payload: {
      errors
    }
  };
}

function signupCheckerAction(fields) {
  return {
    type: SIGNUP_CHECK,
    payload: {
      fields
    }
  };
}
function signupAction(fields) {
  return (dispatch, getState) => {
    dispatch(signupClearAction());
    dispatch(signupLoadAction());
    dispatch(signupCheckerAction(fields));

    if (external_lodash_default.a.isEmpty(getState().signup.errors)) {
      signupAPI(fields).then(res => {
        const {
          data
        } = res;

        if (data.status_code === 200) {
          dispatch(signupSuccessAction());
        } else {
          dispatch(signupFailAction(data.detail));
        }
      });
    } else {
      dispatch(signupUnloadAction());
    }
  };
}

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "WSH7":
/***/ (function(module, exports) {



/***/ }),

/***/ "WZpn":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./.semantic/dist/semantic.rtl.min.css
var semantic_rtl_min = __webpack_require__("WSH7");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// EXTERNAL MODULE: ./redux/actions/auth.js
var auth = __webpack_require__("dKEp");

// CONCATENATED MODULE: ./redux/store/initialState.js
/* harmony default export */ var store_initialState = ({
  signup: {
    errors: {},
    loading: false,
    success: false
  },
  auth: {
    token: {},
    errors: {},
    loading: false,
    success: false
  },
  tasks: {
    list: [],
    current: {}
  }
});
// CONCATENATED MODULE: ./redux/reducers/auth.js





function loginClearReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    draft.loading = false;
    draft.errors = {};
    return draft;
  });
}

function loginLoadReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    draft.loading = true;
    return draft;
  });
}

function loginUnloadReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    draft.loading = false;
    return draft;
  });
}

function loginSuccessReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    const {
      token
    } = action.payload;
    draft.loading = false;
    draft.errors = {};
    draft.token = token;
    return draft;
  });
}

function loginFailReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    const {
      errors
    } = action.payload;
    draft.loading = false;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function loginCheckerReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    const {
      fields
    } = action.payload;

    external_lodash_default.a.forEach(fields, (value, key) => {
      if (value === '') {
        draft.errors[key] = 'فیلد خالی است.';
      }
    });

    return draft;
  });
}

function setTokenReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    const {
      token
    } = action.payload;
    draft.token = token;
    draft.loading = false;
    return draft;
  });
}

function logoutReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    draft.token = {};
    draft.loading = false;
    return draft;
  });
}

function authReducers(state = store_initialState.auth, action) {
  switch (action.type) {
    case auth["b" /* LOGIN_CLEAR */]:
      return loginClearReducer(state, action);

    case auth["d" /* LOGIN_LOAD */]:
      return loginLoadReducer(state, action);

    case auth["f" /* LOGIN_UNLOAD */]:
      return loginUnloadReducer(state, action);

    case auth["c" /* LOGIN_FAIL */]:
      return loginFailReducer(state, action);

    case auth["e" /* LOGIN_SUCCESS */]:
      return loginSuccessReducer(state, action);

    case auth["a" /* LOGIN_CHECK */]:
      return loginCheckerReducer(state, action);

    case auth["h" /* SET_TOKEN */]:
      return setTokenReducer(state, action);

    case auth["g" /* LOGOUT */]:
      return logoutReducer(state, action);

    default:
      return state;
  }
}

/* harmony default export */ var reducers_auth = (authReducers);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__("WZpn");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_);

// EXTERNAL MODULE: ./redux/actions/signup.js + 1 modules
var signup = __webpack_require__("L0Tq");

// CONCATENATED MODULE: ./redux/reducers/signup.js








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }







function signupClearReducer(state = store_initialState.auth, action) {
  return external_immer_default()(state, draft => {
    draft.loading = false;
    draft.success = false;
    draft.errors = {};
    return draft;
  });
}

function signupLoadReducer(state = store_initialState.signup, action) {
  return external_immer_default()(state, draft => {
    draft.loading = true;
    return draft;
  });
}

function signupUnloadReducer(state = store_initialState.signup, action) {
  return external_immer_default()(state, draft => {
    draft.loading = false;
    return draft;
  });
}

function signupSuccessReducer(state = store_initialState.signup, action) {
  return external_immer_default()(state, draft => {
    draft.loading = false;
    draft.success = true;
    draft.error = {};
    return draft;
  });
}

function signupFailReducer(state = store_initialState.signup, action) {
  return external_immer_default()(state, draft => {
    const {
      errors
    } = action.payload;
    draft.loading = false;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function signupChekerReducer(state = store_initialState.signup, action) {
  return external_immer_default()(state, draft => {
    const {
      fields
    } = action.payload;

    const checkFields = _objectSpread({}, fields, {}, fields.profile);

    external_lodash_default.a.forEach(checkFields, (value, key) => {
      if (value === '') {
        draft.errors[key] = 'فیلد خالی است.';
      }
    });

    if (!external_validator_default.a.isEmail(checkFields.email)) {
      draft.errors.email = 'ایمیل غیرمعتبر است.';
    }

    if (checkFields.password_1 !== checkFields.password_2) {
      draft.errors.password_1 = 'گذرواژه‌ها یکسان نیستند.';
      draft.errors.password_2 = 'گذرواژه‌ها یکسان نیستند.';
    }

    return draft;
  });
}

function signupReducers(state = store_initialState.signup, action) {
  switch (action.type) {
    case signup["b" /* SIGNUP_CLEAR */]:
      return signupClearReducer(state, action);

    case signup["d" /* SIGNUP_LOAD */]:
      return signupLoadReducer(state, action);

    case signup["f" /* SIGNUP_UNLOAD */]:
      return signupUnloadReducer(state, action);

    case signup["c" /* SIGNUP_FAIL */]:
      return signupFailReducer(state, action);

    case signup["e" /* SIGNUP_SUCCESS */]:
      return signupSuccessReducer(state, action);

    case signup["a" /* SIGNUP_CHECK */]:
      return signupChekerReducer(state, action);

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/actions/tasks.js + 1 modules
var tasks = __webpack_require__("acqQ");

// CONCATENATED MODULE: ./redux/reducers/tasks.js




function setTaskListReducer(state = store_initialState.tasks, action) {
  return external_immer_default()(state, draft => {
    const {
      taskList
    } = action.payload;
    draft.list = taskList;
    return draft;
  });
}

function setTaskReducer(state = store_initialState.tasks, action) {
  return external_immer_default()(state, draft => {
    const {
      task
    } = action.payload;
    draft.current = task;
    return draft;
  });
}

function tasksReducers(state = store_initialState.tasks, action) {
  switch (action.type) {
    case tasks["b" /* SET_TASK_LIST */]:
      return setTaskListReducer(state, action);

    case tasks["a" /* SET_TASK */]:
      return setTaskReducer(state, action);

    default:
      return state;
  }
}

/* harmony default export */ var reducers_tasks = (tasksReducers);
// CONCATENATED MODULE: ./redux/reducers/index.js




/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  auth: reducers_auth,
  signup: signupReducers,
  tasks: reducers_tasks
}));
// CONCATENATED MODULE: ./redux/store/index.js








function makeStore(initialState, {
  isServer,
  req,
  debug,
  storeKey
}) {
  if (isServer) {
    const store = Object(external_redux_["createStore"])(reducers, initialState || store_initialState, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, external_redux_logger_default.a));
    return store;
  }

  const persistConfig = {
    key: 'root',
    storage: storage_default.a
  };
  const store = Object(external_redux_["createStore"])(Object(external_redux_persist_["persistReducer"])(persistConfig, reducers), initialState, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, external_redux_logger_default.a));
  store.__PERSISTOR = Object(external_redux_persist_["persistStore"])(store);
  return store;
}

/* harmony default export */ var redux_store = (makeStore);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// CONCATENATED MODULE: ./components/global/globalStyles.js

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  html {
    height: 100%;
    font-family: IRANSans !important;
  }
  body {
    margin: 0;
    min-height: 100%;
    position: relative;
  }
  .markdown {
    direction: rtl !important;
  }
  .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
`;
/* harmony default export */ var globalStyles = (GlobalStyle);
// CONCATENATED MODULE: ./theme.js
/* harmony default export */ var theme = ({
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96, 120],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
});
// CONCATENATED MODULE: ./components/global/layout.jsx
var __jsx = external_react_default.a.createElement;






function Layout({
  children
}) {
  return __jsx(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, __jsx(globalStyles, null), __jsx(external_semantic_ui_react_["Container"], {
    style: {
      width: '100% !important',
      margin: '0 !important',
      minHeight: '100vh'
    },
    fluid: true
  }, children));
}

/* harmony default export */ var layout = (Layout);
// CONCATENATED MODULE: ./pages/_app.jsx
var _app_jsx = external_react_default.a.createElement;









class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(react_["PersistGate"], {
      persistor: store.__PERSISTOR,
      loading: null
    }, _app_jsx(layout, null, _app_jsx(Component, pageProps))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(redux_store)(_app_MyApp));

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "acqQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./redux/api/index.js
var api = __webpack_require__("eNjs");

// CONCATENATED MODULE: ./redux/api/dashboard.js


function profileAPI() {
  return `${api["b" /* default */]}/accounts/profile`;
}

const TASK = id => `${api["b" /* default */]}/resources/${id}`;

const TASK_LIST = `${api["b" /* default */]}/resources`;
function taskListAPI(token) {
  return external_axios_default.a.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
function taskAPI(id, token) {
  return external_axios_default.a.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
// CONCATENATED MODULE: ./redux/actions/tasks.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_TASK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadTaskListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadTaskAction; });

const SET_TASK_LIST = 'SET_TASK_LIST';
const SET_TASK = 'SET_TASK';

function setTaskListAction(taskList) {
  return {
    type: SET_TASK_LIST,
    payload: {
      taskList
    }
  };
}

function loadTaskListAction() {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth;
    taskListAPI(token).then(res => {
      if (res.data.status_code === 200) {
        dispatch(setTaskListAction(res.data.documents));
      } else {
        dispatch(setTaskListAction([]));
      }
    });
  };
}

function setTaskAction(task) {
  return {
    type: SET_TASK,
    payload: {
      task
    }
  };
}

function loadTaskAction(id) {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth;
    taskAPI(id, token).then(res => {
      if (res.data.status_code === 200) {
        dispatch(setTaskAction(res.data));
      } else {
        dispatch(setTaskAction({}));
      }
    });
  };
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });