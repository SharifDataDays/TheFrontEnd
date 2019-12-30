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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bgEJ");


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

/***/ "LR/J":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SWa5");

/***/ }),

/***/ "Ooci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SignupButton = props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: props.onClick,
    color: props.color
  }, props.text);
};

/* harmony default export */ __webpack_exports__["a"] = (SignupButton);

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "SWa5":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

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

/***/ "bgEJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/global/withAuth.jsx
var withAuth = __webpack_require__("lblT");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./components/user/container.jsx + 1 modules
var container = __webpack_require__("AKhA");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/user/input.jsx
var input = __webpack_require__("/Oia");

// EXTERNAL MODULE: ./components/user/button.jsx
var user_button = __webpack_require__("Ooci");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js
var entries = __webpack_require__("LR/J");
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./components/user/forgot/reset/check.js



function check(fields) {
  const res = {};
  const errors = {};

  external_lodash_default.a.forEach(fields, (value, key) => {
    if (value === '') {
      errors[key] = true;
    }
  });

  if (entries_default()(errors).length !== 0) {
    res.problem = 'incompleteFields';
    res.errors = errors;
    return res;
  }

  if (fields.password_1 !== fields.password_2) {
    res.problem = 'passwordsNotSame';
    errors.password_2 = true;
    res.errors = errors;
    return res;
  }

  return {
    errors: {
      password_1: false,
      password_2: false
    }
  };
}

/* harmony default export */ var reset_check = (check);
// EXTERNAL MODULE: ./redux/api/auth.js
var auth = __webpack_require__("+YYQ");

// CONCATENATED MODULE: ./components/user/forgot/reset/fields.jsx
var __jsx = external_react_default.a.createElement;







class fields_ForgotFields extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      password_1: '',
      password_2: '',
      errors: {
        password_1: false,
        password_2: false
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  onSubmit() {
    this.setState(prevState => {
      const res = reset_check(prevState);

      if (res.problem) {
        const {
          notify
        } = this.props;
        notify(res.problem);
      } else {
        this.reset();
      }

      return {
        errors: res.errors
      };
    });
  }

  handleChange(event, {
    name,
    value
  }) {
    this.setState({
      [name]: value
    });
  }

  reset() {
    const {
      password_1,
      password_2
    } = this.state;
    const {
      uid,
      token,
      notify
    } = this.props;
    external_axios_default.a.post(Object(auth["e" /* resetAPI */])(), {
      uid,
      token,
      new_password1: password_1,
      new_password2: password_2
    }).then(res => {
      const serverData = res.data;
      console.log(serverData);

      if (serverData.status_code !== 200) {
        if (serverData.email) {
          notify('tokenNotValid');
        }

        if (serverData.new_password2) {
          notify('commonPassword');
        }
      } else {
        notify('success');
      }
    });
  }

  render() {
    const {
      password_1,
      password_2
    } = this.state;
    const {
      errors
    } = this.state;
    return __jsx(external_semantic_ui_react_["Grid"], {
      centered: true
    }, __jsx(external_semantic_ui_react_["Grid"].Column, {
      verticalAlign: "middle"
    }, __jsx(external_semantic_ui_react_["Form"], null, __jsx(external_semantic_ui_react_["Form"].Group, {
      width: 2,
      dir: "rtl"
    }, __jsx(input["a" /* default */], {
      onChange: this.handleChange,
      name: "password_1",
      type: "password",
      label: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
      value: password_1,
      error: errors.password_1
    }), __jsx(input["a" /* default */], {
      onChange: this.handleChange,
      name: "password_2",
      label: "\u062A\u06A9\u0631\u0627\u0631 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
      type: "password",
      value: password_2,
      error: errors.password_2
    })), __jsx(external_semantic_ui_react_["Form"].Field, {
      dir: "rtl"
    }, __jsx("a", {
      href: "/login"
    }, "\u0648\u0631\u0648\u062F")), __jsx(user_button["a" /* default */], {
      onClick: this.onSubmit,
      color: "blue",
      text: "\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632"
    }))));
  }

}
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// CONCATENATED MODULE: ./components/user/forgot/reset/container.jsx
var container_jsx = external_react_default.a.createElement;







function container_notify(choice) {
  const options = {
    position: 'bottom-left',
    autoClose: 5000,
    pauseOnVisibilityChange: true,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    newestOnTop: false,
    rtl: true
  };

  switch (choice) {
    case 'passwordsNotSame':
      external_react_toastify_["toast"].error('گذرواژه ها یکسان نیستند.', options);
      break;

    case 'tokenNotValid':
      external_react_toastify_["toast"].error('لینک معتبر نیست.', options);
      break;

    case 'commonPassword':
      external_react_toastify_["toast"].error('گذرواژه‌ی انتخاب‌شده بسیار معمول است.', options);
      break;

    case 'success':
      external_react_toastify_["toast"].success('رمز با موفقیت تغییر یافت.', options);
      break;

    default:
      break;
  }
}

function ResetContainer({
  uid,
  token
}) {
  return container_jsx(container["a" /* default */], null, container_jsx(external_semantic_ui_react_["Header"], {
    dividing: true,
    as: "h1"
  }, "\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"), container_jsx(fields_ForgotFields, {
    uid: uid,
    token: token,
    notify: container_notify
  }), container_jsx(external_react_toastify_["ToastContainer"], {
    position: "bottom-left",
    autoClose: 5000,
    pauseOnVisibilityChange: true,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    newestOnTop: true,
    rtl: true
  }));
}

/* harmony default export */ var reset_container = (ResetContainer);
// CONCATENATED MODULE: ./pages/forgot/reset.jsx
var reset_jsx = external_react_default.a.createElement;

/* eslint-disable react/prefer-stateless-function */





class reset_LoginPage extends external_react_["Component"] {
  static async getInitialProps(ctx) {
    const {
      uid,
      token
    } = ctx.query;
    return {
      uid,
      token
    };
  }

  render() {
    const {
      uid,
      token
    } = this.props;
    return reset_jsx(external_react_default.a.Fragment, null, reset_jsx(head_default.a, null, reset_jsx("title", null, "\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 - DataDays 2020")), reset_jsx(reset_container, {
      uid: uid,
      token: token
    }));
  }

}

/* harmony default export */ var forgot_reset = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(false)(reset_LoginPage));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "jDDT":
/***/ (function(module, exports) {



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

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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