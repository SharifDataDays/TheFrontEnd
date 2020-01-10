webpackHotUpdate("static/development/pages/scoreboard.js",{

/***/ "./components/dashboard/scoreboard/laptab.jsx":
/*!****************************************************!*\
  !*** ./components/dashboard/scoreboard/laptab.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var dom_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers */ "./node_modules/dom-helpers/esm/index.js");
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/laptab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var TableHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell).withConfig({
  displayName: "laptab__TableHeader",
  componentId: "qvtjrt-0"
})(["background:rgba(80,87,99,0.05) !important;border-radius:0 !important;color:black !important;"]);
var TableCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell).withConfig({
  displayName: "laptab__TableCell",
  componentId: "qvtjrt-1"
})(["border-top:", " !important;border-bottom:", " !important;"], function (props) {
  return props.border;
}, function (props) {
  return props.border;
});
var Info = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "laptab__Info",
  componentId: "qvtjrt-2"
})(["text-align:left;margin-top:1rem;margin-left:1rem;"]);

var GenerateMyRow = function GenerateMyRow(_ref) {
  var name = _ref.name,
      score = _ref.score,
      rank = _ref.rank,
      display = _ref.display;
  var color = '#00000066';
  var border = "1px solid ".concat(color);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    style: {
      display: display
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(TableCell, {
    textAlign: "right",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, score), __jsx(TableCell, {
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, name), __jsx(TableCell, {
    border: border,
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, rank));
};

var GenerateRows = function GenerateRows(_ref2) {
  var data = _ref2.data,
      myName = _ref2.myName,
      teams = _ref2.teams;
  var rows = teams.map(function (x) {
    var background = '#f8f8fa';
    var rank = x.rank;
    if (rank <= 3) background = '#fed76673';else if (rank <= 6) background = '#bbbbbb73';else if (rank <= 9) background = '#cd7f3273';
    var borderRight = "3px solid ".concat(background, " !important");
    if (x.name === myName) return __jsx(GenerateMyRow, {
      name: x.name,
      score: "10",
      rank: x.rank,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      style: {
        background: background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "right",
      style: {
        marginLeft: '3rem !important'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "points"), x.scores.map(function (score) {
      return __jsx(TableCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, score);
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, x.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      style: {
        borderRight: borderRight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, x.rank));
  });
  return rows;
};

var Footer = function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u0631\u062A\u0628\u0647\u200C\u0647\u0627\u06CC 1 \u0627\u0644\u06CC 20"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    defaultActivePage: 1,
    firstItem: null,
    lastItem: null,
    secondary: true,
    totalPages: 10,
    style: {
      marginTop: '0.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))));
};

var Scoreboard = function Scoreboard(_ref3) {
  var data = _ref3.data,
      milestone = _ref3.milestone,
      teams = _ref3.teams,
      tasks = _ref3.tasks;
  var myName = 'پویا معینی';
  var display = data.some(function (x) {
    return x.first === myName;
  }) ? 'none' : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "salam"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    selectable: true,
    size: "small",
    style: {
      border: '0 !important'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    style: {
      height: '4rem !important'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(TableHeader, {
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u0627\u0645\u062A\u06CC\u0627\u0632"), tasks.map(function (x) {
    return __jsx(TableHeader, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, x.name);
  }), __jsx(TableHeader, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\u0646\u0627\u0645"), __jsx(TableHeader, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "\u0631\u062A\u0628\u0647")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(GenerateMyRow, {
    name: myName,
    score: "100",
    rank: "0",
    display: display,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(GenerateRows, {
    data: data,
    myName: myName,
    teams: teams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/activeElement.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/activeElement.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return activeElement; });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");

/**
 * Return the actively focused element safely.
 *
 * @param doc the document to checl
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addEventListener.js ***!
  \**********************************************************/
/*! exports provided: optionsSupported, onceSupported, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsSupported", function() { return optionsSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceSupported", function() { return onceSupported; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ __webpack_exports__["default"] = (addEventListener);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/animationFrame.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/animationFrame.js ***!
  \********************************************************/
/*! exports provided: cancel, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");


/* https://github.com/component/raf */
var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn, ms);
  prev = curr;
  return handle;
}

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancelMethod = 'clearTimeout';
var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};

if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  vendors.some(function (vendor) {
    var rafMethod = getKey(vendor, 'request');

    if (rafMethod in window) {
      cancelMethod = getKey(vendor, 'cancel'); // @ts-ignore

      rafImpl = function rafImpl(cb) {
        return window[rafMethod](cb);
      };
    }

    return !!rafImpl;
  });
}

var cancel = function cancel(id) {
  // @ts-ignore
  if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
var request = rafImpl;

/***/ }),

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/canUseDOM.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/closest.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/esm/closest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closest; });
/* harmony import */ var _matches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches */ "./node_modules/dom-helpers/esm/matches.js");

function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  var nextNode = node;

  do {
    if (Object(_matches__WEBPACK_IMPORTED_MODULE_0__["default"])(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);

  return null;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/contains.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/contains.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* eslint-disable no-bitwise, no-cond-assign */
// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
function contains(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/css.js":
/*!*********************************************!*\
  !*** ./node_modules/dom-helpers/esm/css.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getComputedStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/esm/getComputedStyle.js");
/* harmony import */ var _hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hyphenateStyle */ "./node_modules/dom-helpers/esm/hyphenateStyle.js");
/* harmony import */ var _isTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isTransform */ "./node_modules/dom-helpers/esm/isTransform.js");




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property)) || Object(_getComputedStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getPropertyValue(Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
    } else if (Object(_isTransform__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/filterEventHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/esm/filterEventHandler.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filterEvents; });
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var _querySelectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");


function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget;
    var target = e.target;
    var matches = Object(_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(top, selector);
    if (matches.some(function (match) {
      return Object(_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(match, target);
    })) handler.call(this, e);
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/getComputedStyle.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/getComputedStyle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/dom-helpers/esm/ownerWindow.js");

function getComputedStyle(node, psuedoElement) {
  return Object(_ownerWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, psuedoElement);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/getScrollAccessor.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/getScrollAccessor.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getscrollAccessor; });
/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");

function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node, val) {
    var win = Object(_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node);

    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }

    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }

  return scrollAccessor;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/height.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/esm/height.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return height; });
/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");


function height(node, client) {
  var win = Object(_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return win ? win.innerHeight : client ? node.clientHeight : Object(_offset__WEBPACK_IMPORTED_MODULE_1__["default"])(node).height;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenate.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hyphenate; });
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenateStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenateStyle.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hyphenateStyleName; });
/* harmony import */ var _hyphenate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/esm/hyphenate.js");
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return Object(_hyphenate__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(msPattern, '-ms-');
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-helpers/esm/index.js ***!
  \***********************************************/
/*! exports provided: addEventListener, removeEventListener, filter, listen, style, activeElement, ownerDocument, ownerWindow, requestAnimationFrame, cancelAnimationFrame, matches, height, width, offset, offsetParent, position, contains, scrollParent, scrollTop, querySelectorAll, closest, addClass, removeClass, hasClass, toggleClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeElement */ "./node_modules/dom-helpers/esm/activeElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activeElement", function() { return _activeElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _addClass__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addEventListener */ "./node_modules/dom-helpers/esm/addEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return _addEventListener__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _animationFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animationFrame */ "./node_modules/dom-helpers/esm/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return _animationFrame__WEBPACK_IMPORTED_MODULE_3__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return _animationFrame__WEBPACK_IMPORTED_MODULE_3__["cancel"]; });

/* harmony import */ var _closest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./closest */ "./node_modules/dom-helpers/esm/closest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _closest__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _css__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _filterEventHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterEventHandler */ "./node_modules/dom-helpers/esm/filterEventHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filterEventHandler__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _hasClass__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./height */ "./node_modules/dom-helpers/esm/height.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "height", function() { return _height__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return _listen__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _matches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./matches */ "./node_modules/dom-helpers/esm/matches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _matches__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _offsetParent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offsetParent */ "./node_modules/dom-helpers/esm/offsetParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offsetParent", function() { return _offsetParent__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return _ownerDocument__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/dom-helpers/esm/ownerWindow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerWindow", function() { return _ownerWindow__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./position */ "./node_modules/dom-helpers/esm/position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _position__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _querySelectorAll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return _querySelectorAll__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _removeClass__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _removeEventListener__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./removeEventListener */ "./node_modules/dom-helpers/esm/removeEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return _removeEventListener__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _scrollParent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scrollParent */ "./node_modules/dom-helpers/esm/scrollParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollParent", function() { return _scrollParent__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/esm/scrollTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return _scrollTop__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _toggleClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toggleClass */ "./node_modules/dom-helpers/esm/toggleClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _toggleClass__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./width */ "./node_modules/dom-helpers/esm/width.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "width", function() { return _width__WEBPACK_IMPORTED_MODULE_23__["default"]; });


























/* harmony default export */ __webpack_exports__["default"] = ({
  addEventListener: _addEventListener__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeEventListener: _removeEventListener__WEBPACK_IMPORTED_MODULE_19__["default"],
  filter: _filterEventHandler__WEBPACK_IMPORTED_MODULE_7__["default"],
  listen: _listen__WEBPACK_IMPORTED_MODULE_10__["default"],
  style: _css__WEBPACK_IMPORTED_MODULE_6__["default"],
  activeElement: _activeElement__WEBPACK_IMPORTED_MODULE_0__["default"],
  ownerDocument: _ownerDocument__WEBPACK_IMPORTED_MODULE_14__["default"],
  ownerWindow: _ownerWindow__WEBPACK_IMPORTED_MODULE_15__["default"],
  requestAnimationFrame: _animationFrame__WEBPACK_IMPORTED_MODULE_3__["request"],
  cancelAnimationFrame: _animationFrame__WEBPACK_IMPORTED_MODULE_3__["cancel"],
  matches: _matches__WEBPACK_IMPORTED_MODULE_11__["default"],
  height: _height__WEBPACK_IMPORTED_MODULE_9__["default"],
  width: _width__WEBPACK_IMPORTED_MODULE_23__["default"],
  offset: _offset__WEBPACK_IMPORTED_MODULE_12__["default"],
  offsetParent: _offsetParent__WEBPACK_IMPORTED_MODULE_13__["default"],
  position: _position__WEBPACK_IMPORTED_MODULE_16__["default"],
  contains: _contains__WEBPACK_IMPORTED_MODULE_5__["default"],
  scrollParent: _scrollParent__WEBPACK_IMPORTED_MODULE_20__["default"],
  scrollTop: _scrollTop__WEBPACK_IMPORTED_MODULE_21__["default"],
  querySelectorAll: _querySelectorAll__WEBPACK_IMPORTED_MODULE_17__["default"],
  closest: _closest__WEBPACK_IMPORTED_MODULE_4__["default"],
  addClass: _addClass__WEBPACK_IMPORTED_MODULE_1__["default"],
  removeClass: _removeClass__WEBPACK_IMPORTED_MODULE_18__["default"],
  hasClass: _hasClass__WEBPACK_IMPORTED_MODULE_8__["default"],
  toggleClass: _toggleClass__WEBPACK_IMPORTED_MODULE_22__["default"]
});

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isDocument.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isDocument.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocument; });
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isTransform.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isTransform.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTransform; });
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isWindow.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isWindow.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isWindow; });
/* harmony import */ var _isDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDocument */ "./node_modules/dom-helpers/esm/isDocument.js");

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (Object(_isDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) return node.defaultView || false;
  return false;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/listen.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/esm/listen.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListener */ "./node_modules/dom-helpers/esm/addEventListener.js");
/* harmony import */ var _removeEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeEventListener */ "./node_modules/dom-helpers/esm/removeEventListener.js");



function listen(node, eventName, handler, options) {
  Object(_addEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(node, eventName, handler, options);
  return function () {
    Object(_removeEventListener__WEBPACK_IMPORTED_MODULE_1__["default"])(node, eventName, handler, options);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (listen);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/matches.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/esm/matches.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matches; });
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }

  return matchesImpl(node, selector);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/offset.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/esm/offset.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return offset; });
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var _scrollLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollLeft */ "./node_modules/dom-helpers/esm/scrollLeft.js");
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/esm/scrollTop.js");




function offset(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !Object(_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + Object(_scrollTop__WEBPACK_IMPORTED_MODULE_3__["default"])(node) - (docElem.clientTop || 0),
    left: box.left + Object(_scrollLeft__WEBPACK_IMPORTED_MODULE_2__["default"])(node) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/offsetParent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/offsetParent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return offsetParent; });
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");



var isHTMLElement = function isHTMLElement(e) {
  return !!e && 'offsetParent' in e;
};

function offsetParent(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(node);
  var parent = node && node.offsetParent;

  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }

  return parent || doc.documentElement;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/ownerDocument.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/ownerDocument.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/ownerWindow.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/ownerWindow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerWindow; });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");

function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc && doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/position.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/position.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return position; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");
/* harmony import */ var _offsetParent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offsetParent */ "./node_modules/dom-helpers/esm/offsetParent.js");
/* harmony import */ var _scrollLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollLeft */ "./node_modules/dom-helpers/esm/scrollLeft.js");
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/esm/scrollTop.js");







var nodeName = function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};

function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if (Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    var parent = offsetParent || Object(_offsetParent__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
    offset = Object(_offset__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
    if (nodeName(parent) !== 'html') parentOffset = Object(_offset__WEBPACK_IMPORTED_MODULE_2__["default"])(parent);
    var borderTop = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - Object(_scrollTop__WEBPACK_IMPORTED_MODULE_5__["default"])(parent) || 0;
    var borderLeft = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - Object(_scrollLeft__WEBPACK_IMPORTED_MODULE_4__["default"])(parent) || 0;
  }

  var marginTop = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'marginTop') || 0);
  var marginLeft = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, offset, {
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/querySelectorAll.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return qsa; });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeEventListener.js":
/*!*************************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeEventListener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (removeEventListener);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollLeft.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollLeft.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollAccessor */ "./node_modules/dom-helpers/esm/getScrollAccessor.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__["default"])('pageXOffset'));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollParent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollParent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollPrarent; });
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./height */ "./node_modules/dom-helpers/esm/height.js");
/* harmony import */ var _isDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isDocument */ "./node_modules/dom-helpers/esm/isDocument.js");
/* eslint-disable no-cond-assign, no-continue */



/**
 * Find the first scrollable parent of an element.
 *
 * @param element Starting element
 * @param firstPossible Stop at the first scrollable parent, even if it's not currently scrollable
 */

function scrollPrarent(element, firstPossible) {
  var position = Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(element, 'position');
  var excludeStatic = position === 'absolute';
  var ownerDoc = element.ownerDocument;
  if (position === 'fixed') return ownerDoc || document; // @ts-ignore

  while ((element = element.parentNode) && !Object(_isDocument__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) {
    var isStatic = excludeStatic && Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(element, 'position') === 'static';
    var style = (Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(element, 'overflow') || '') + (Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(element, 'overflow-y') || '') + Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(element, 'overflow-x');
    if (isStatic) continue;

    if (/(auto|scroll)/.test(style) && (firstPossible || Object(_height__WEBPACK_IMPORTED_MODULE_1__["default"])(element) < element.scrollHeight)) {
      return element;
    }
  }

  return ownerDoc || document;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollTop.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollTop.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollAccessor */ "./node_modules/dom-helpers/esm/getScrollAccessor.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__["default"])('pageYOffset'));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/toggleClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/toggleClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleClass; });
/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");



function toggleClass(element, className) {
  if (element.classList) element.classList.toggle(className);else if (Object(_hasClass__WEBPACK_IMPORTED_MODULE_1__["default"])(element, className)) Object(_removeClass__WEBPACK_IMPORTED_MODULE_2__["default"])(element, className);else Object(_addClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/width.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-helpers/esm/width.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWidth; });
/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");


function getWidth(node, client) {
  var win = Object(_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return win ? win.innerWidth : client ? node.clientWidth : Object(_offset__WEBPACK_IMPORTED_MODULE_1__["default"])(node).width;
}

/***/ })

})
//# sourceMappingURL=scoreboard.js.1148e0d8fef051ba9f3c.hot-update.js.map