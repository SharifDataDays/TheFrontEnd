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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+YYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forgotAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eNjs");


const LOGIN = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/login`;
const AUTH = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/profile`;
const FORGOT = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/password/reset/`;
const RESET = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/password/reset/confirm/`;
function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(LOGIN, data);
}
function authAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(AUTH, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
function forgotAPI(email) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(FORGOT, email);
}
function resetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(RESET, data);
}

/***/ }),

/***/ "/Oia":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
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
      onChange: this.handleChange
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OAT7");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "46kV":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "AKhA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// CONCATENATED MODULE: ./components/user/network.js
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
// CONCATENATED MODULE: ./components/user/container.jsx
var __jsx = external_react_default.a.createElement;




class container_Container extends external_react_["Component"] {
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
      neuralnet(this.canvas);
    }
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(external_semantic_ui_react_["Grid"], {
      celled: true,
      padded: true,
      centered: true,
      style: {
        padding: 0,
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      }
    }, __jsx(external_semantic_ui_react_["Grid"].Row, {
      style: {
        height: '100%'
      }
    }, __jsx(external_semantic_ui_react_["Grid"].Column, {
      computer: 8,
      only: "computer"
    }, __jsx("a", {
      href: "/"
    }, __jsx(external_semantic_ui_react_["Image"], {
      style: {
        zIndex: 1,
        position: 'absolute',
        margin: 10
      },
      size: "mini",
      src: "/images/logo.png"
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
      }
    })), __jsx(external_semantic_ui_react_["Grid"].Column, {
      verticalAlign: "middle",
      computer: 8,
      tablet: 8,
      mobile: 14
    }, __jsx("a", {
      href: "/"
    }, "\u0628\u0627\u0632\u06AF\u0634\u062A"), children)));
  }

}

/* harmony default export */ var container = __webpack_exports__["a"] = (container_Container);

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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
// EXTERNAL MODULE: ./redux/actions/page.js
var page = __webpack_require__("LVex");

// CONCATENATED MODULE: ./redux/actions/signup.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIGNUP_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SIGNUP_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGNUP_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return signupClearAction; });
/* unused harmony export signupCheckerAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return signupAction; });



const SIGNUP_CLEAR = 'SIGNUP_CLEAR';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const SIGNUP_CHECK = 'SIGNUP_CHECK';
function signupClearAction() {
  return {
    type: SIGNUP_CLEAR
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
    dispatch(Object(page["b" /* pageLoadingAction */])(true));
    dispatch(signupClearAction());
    dispatch(signupCheckerAction(fields));

    if (external_lodash_default.a.isEmpty(getState().signup.errors)) {
      signupAPI(fields).then(res => {
        const {
          data
        } = res;

        if (data.status_code === 200) {
          dispatch(signupSuccessAction());
          dispatch(Object(page["b" /* pageLoadingAction */])(false));
        } else {
          dispatch(signupFailAction(data.detail));
          dispatch(Object(page["b" /* pageLoadingAction */])(false));
        }
      });
    } else {
      dispatch(Object(page["b" /* pageLoadingAction */])(false));
    }
  };
}

/***/ }),

/***/ "LVex":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pageLoadingAction; });
const PAGE_LOADING = 'PAGE_LOADING';
function pageLoadingAction(loading) {
  return {
    type: PAGE_LOADING,
    payload: {
      loading
    }
  };
}

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OAT7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/global/withAuth.jsx
var withAuth = __webpack_require__("lblT");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/user/container.jsx + 1 modules
var container = __webpack_require__("AKhA");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: ./components/user/input.jsx
var input = __webpack_require__("/Oia");

// EXTERNAL MODULE: external "semantic-ui-calendar-react"
var external_semantic_ui_calendar_react_ = __webpack_require__("ZP4B");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/user/signup/date.jsx
var __jsx = external_react_default.a.createElement;





class date_Date extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, {
    value
  }) {
    this.setState({
      value
    });
  }

  render() {
    const {
      value
    } = this.state;
    const {
      error,
      label
    } = this.props;
    return __jsx(external_semantic_ui_calendar_react_["DateInput"], {
      popupPosition: "top center",
      closeOnMouseLeave: false,
      icon: __jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faCalendar"],
        color: "black"
      }),
      iconPosition: "right",
      label: label,
      value: value,
      error: error,
      onChange: this.handleChange
    });
  }

}

/* harmony default export */ var date = (date_Date);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// CONCATENATED MODULE: ./components/user/signup/terms.jsx
var terms_jsx = external_react_default.a.createElement;




class terms_Terms extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({
      modalOpen: true
    });
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const {
      modalOpen
    } = this.state;
    const {
      terms
    } = this.props;
    return terms_jsx(external_semantic_ui_react_["Modal"], {
      trigger: terms_jsx("a", {
        href: "#",
        onClick: this.handleOpen
      }, "\u0645\u0637\u0627\u0644\u0639\u0647 \u0642\u0648\u0627\u0646\u06CC\u0646"),
      open: modalOpen,
      onClose: this.handleClose,
      size: "small"
    }, terms_jsx(external_semantic_ui_react_["Modal"].Content, null, terms_jsx("div", {
      dir: "RTL"
    }, terms_jsx(external_react_markdown_default.a, {
      source: terms.term
    }))), terms_jsx(external_semantic_ui_react_["Modal"].Actions, null, terms_jsx(external_semantic_ui_react_["Button"], {
      primary: true,
      onClick: this.handleClose
    }, "\u0628\u0633\u062A\u0646")));
  }

}

/* harmony default export */ var signup_terms = (terms_Terms);
// CONCATENATED MODULE: ./components/user/signup/form.jsx
var form_jsx = external_react_default.a.createElement;

/* eslint-disable camelcase */







class form_Form extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const {
      signup,
      request
    } = this.props;
    const fields = {
      username: this.username.state.value,
      email: this.email.state.value,
      password_1: this.password_1.state.value,
      password_2: this.password_2.state.value,
      profile: {
        firstname_fa: this.firstname_fa.state.value,
        firstname_en: this.firstname_en.state.value,
        lastname_fa: this.lastname_fa.state.value,
        lastname_en: this.lastname_en.state.value,
        university: this.university.state.value,
        birth_date: external_lodash_default.a.join(external_lodash_default.a.reverse(external_lodash_default.a.split(this.birth_date.state.value, '-')), '-')
      }
    };
    request(fields);
  }

  render() {
    const {
      terms,
      signup
    } = this.props;
    const {
      success,
      errors
    } = signup;
    return form_jsx(external_semantic_ui_react_["Grid"], null, form_jsx(external_semantic_ui_react_["Grid"].Column, {
      verticalAlign: "middle"
    }, form_jsx(external_semantic_ui_react_["Form"], {
      onSubmit: this.onSubmit
    }, form_jsx(external_semantic_ui_react_["Form"].Group, {
      width: 2,
      dir: "rtl"
    }, form_jsx(input["a" /* default */], {
      ref: c => {
        this.firstname_fa = c;
      },
      error: errors.firstname_fa,
      label: "\u0646\u0627\u0645 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC"
    }), form_jsx(input["a" /* default */], {
      ref: c => {
        this.lastname_fa = c;
      },
      error: errors.lastname_fa,
      label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC"
    })), form_jsx(external_semantic_ui_react_["Form"].Group, {
      width: 2,
      dir: "rtl"
    }, form_jsx(input["a" /* default */], {
      ref: c => {
        this.firstname_en = c;
      },
      error: errors.firstname_en,
      label: "\u0646\u0627\u0645 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"
    }), form_jsx(input["a" /* default */], {
      ref: c => {
        this.lastname_en = c;
      },
      error: errors.lastname_en,
      label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"
    })), form_jsx(external_semantic_ui_react_["Form"].Group, {
      width: 2,
      dir: "rtl"
    }, form_jsx(input["a" /* default */], {
      ref: c => {
        this.university = c;
      },
      error: errors.university,
      label: "\u062F\u0627\u0646\u0634\u06AF\u0627\u0647",
      width: 8
    }), form_jsx(date, {
      ref: c => {
        this.birth_date = c;
      },
      error: errors.birth_date,
      label: "\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F"
    })), form_jsx(external_semantic_ui_react_["Form"].Group, {
      width: 2,
      dir: "rtl"
    }, form_jsx(input["a" /* default */], {
      ref: c => {
        this.username = c;
      },
      error: errors.username,
      label: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
    }), form_jsx(input["a" /* default */], {
      ref: c => {
        this.email = c;
      },
      type: "email",
      error: errors.email,
      label: "\u0627\u06CC\u0645\u06CC\u0644"
    })), form_jsx(external_semantic_ui_react_["Form"].Group, {
      width: 2,
      dir: "rtl"
    }, form_jsx(input["a" /* default */], {
      ref: c => {
        this.password_1 = c;
      },
      type: "password",
      error: errors.password_1,
      label: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647"
    }), form_jsx(input["a" /* default */], {
      ref: c => {
        this.password_2 = c;
      },
      type: "password",
      error: errors.password_2,
      label: "\u062A\u06A9\u0631\u0627\u0631 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647"
    })), form_jsx(external_semantic_ui_react_["Form"].Field, {
      dir: "rtl"
    }, form_jsx(external_semantic_ui_react_["Message"], {
      hidden: !success,
      positive: true
    }, "\u0627\u06CC\u0645\u06CC\u0644 \u062A\u0627\u06CC\u06CC\u062F \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F.")), form_jsx(external_semantic_ui_react_["Form"].Field, {
      dir: "rtl"
    }, form_jsx("a", {
      href: "/login"
    }, "\u0639\u0636\u0648 \u0647\u0633\u062A\u06CC\u062F\u061F \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F!")), form_jsx(external_semantic_ui_react_["Form"].Field, {
      dir: "rtl"
    }, form_jsx(signup_terms, {
      terms: terms
    })), form_jsx(external_semantic_ui_react_["Button"], {
      type: "submit",
      primary: true
    }, "\u0645\u0648\u0627\u0641\u0642\u062A \u0628\u0627 \u0642\u0648\u0627\u0646\u06CC\u0646 \u0648 \u062B\u0628\u062A \u0646\u0627\u0645"))));
  }

}

/* harmony default export */ var signup_form = (form_Form);
// CONCATENATED MODULE: ./components/user/signup/container.jsx
var container_jsx = external_react_default.a.createElement;





function SignupContainer({
  terms,
  signup,
  request
}) {
  return container_jsx(container["a" /* default */], null, container_jsx(external_semantic_ui_react_["Header"], {
    as: "h1",
    dividing: true
  }, "\u062B\u0628\u062A \u0646\u0627\u0645"), container_jsx(signup_form, {
    request: request,
    signup: signup,
    terms: terms
  }));
}

/* harmony default export */ var signup_container = (SignupContainer);
// EXTERNAL MODULE: ./redux/api/index.js
var api = __webpack_require__("eNjs");

// EXTERNAL MODULE: ./redux/actions/signup.js + 1 modules
var actions_signup = __webpack_require__("L0Tq");

// CONCATENATED MODULE: ./pages/signup.jsx
var signup_jsx = external_react_default.a.createElement;








class signup_SignupPage extends external_react_["Component"] {
  static async getInitialProps(ctx) {
    const res = await Object(api["c" /* termsAPI */])();
    const terms = res.data;
    return {
      terms
    };
  }

  componentDidMount() {
    const {
      clear
    } = this.props;
    clear();
  }

  render() {
    const {
      signup,
      request,
      terms
    } = this.props;
    return signup_jsx(external_react_default.a.Fragment, null, signup_jsx(head_default.a, null, signup_jsx("title", null, "\u062B\u0628\u062A \u0646\u0627\u0645 - DataDays 2020")), signup_jsx(signup_container, {
      signup: signup,
      request: request,
      terms: terms
    }));
  }

}

function mapStateToProps(state, ownProps) {
  const {
    signup
  } = state;
  return {
    signup
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    request: fields => {
      dispatch(Object(actions_signup["e" /* signupAction */])(fields));
    },
    clear: () => dispatch(Object(actions_signup["f" /* signupClearAction */])())
  };
}

/* harmony default export */ var pages_signup = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(false)(Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(signup_SignupPage)));

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "ZP4B":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-calendar-react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dKEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loginClearAction; });
/* unused harmony export loginCheckerAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return authorizeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return logoutAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+YYQ");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LVex");



const LOGIN_CLEAR = 'LOGIN_CLEAR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_CHECK = 'LOGIN_CHECK';
const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT';
function loginClearAction() {
  return {
    type: LOGIN_CLEAR
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
    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__[/* pageLoadingAction */ "b"])(true));
    dispatch(loginClearAction());
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
          dispatch(loginSuccessAction(data.access));
          dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__[/* pageLoadingAction */ "b"])(false));
        } else {
          dispatch(loginFailAction(data.detail));
          dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__[/* pageLoadingAction */ "b"])(false));
        }
      });
    } else {
      dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__[/* pageLoadingAction */ "b"])(false));
    }
  };
}

function setAuthAction(auth) {
  return {
    type: SET_AUTH,
    payload: {
      auth
    }
  };
}

function authorizeAction(token) {
  return dispatch => {
    return Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* authAPI */ "a"])(token).then(res => {
      if (res.data.status_code !== 200) {
        dispatch(setAuthAction(false));
        return false;
      }

      dispatch(setAuthAction(true));
      return true;
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_ADDR = 'https://datadays.sharif.edu/api';
const TERMS = `${BASE_ADDR}/terms`;
const BASE = 'https://datadays.sharif.edu';
function termsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TERMS);
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

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("46kV");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("dKEp");







var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











function getSSRToken(headerCookies) {
  let token = '';

  lodash__WEBPACK_IMPORTED_MODULE_7___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_7___default.a.split(headerCookies, ' '), headerCookie => {
    const key = headerCookie.split('=')[0];

    const value = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.replace(headerCookie.split('=')[1], ';', '');

    if (key === 'token' && value !== '%5Bobject%20Object%5D') {
      token = value;
    }
  });

  return token;
}

function withAuth(loggedIn) {
  return WrappedComponent => {
    class Wrapper extends react__WEBPACK_IMPORTED_MODULE_11__["Component"] {
      static async getInitialProps(ctx) {
        const {
          store,
          isServer,
          req
        } = ctx;
        const token = isServer ? getSSRToken(req.headers.cookie) : js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('token');
        await store.dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_15__[/* authorizeAction */ "g"])(token));
        const pageProps = (await WrappedComponent.getInitialProps) && (await WrappedComponent.getInitialProps(ctx, token));
        return _objectSpread({}, pageProps, {
          isServer
        });
      }

      render() {
        const {
          page,
          auth
        } = this.props;
        const pageLoading = page.loading || auth.authorized && !loggedIn || !auth.authorized && loggedIn;

        if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isUndefined(loggedIn)) {
          return __jsx(WrappedComponent, this.props);
        }

        if (!auth.authorized && loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login', '/login', {
            shallow: false
          });
        }

        if (auth.authorized && !loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/dashboard/tasks', '/dashboard/tasks', {
            shallow: false
          });
        }

        return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", null, "DataDays 2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Dimmer"], {
          active: pageLoading
        }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_14__["ClipLoader"], {
          size: 75,
          color: "#fff",
          loading: pageLoading
        })), __jsx(WrappedComponent, this.props));
      }

    }

    function mapStateToProps(state, ownProps) {
      const {
        page,
        auth
      } = state;
      return {
        page,
        auth
      };
    }

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, null)(Wrapper);
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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