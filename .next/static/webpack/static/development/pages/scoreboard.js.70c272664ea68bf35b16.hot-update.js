webpackHotUpdate("static/development/pages/scoreboard.js",{

/***/ "./components/dashboard/scoreboard/mobile.jsx":
/*!****************************************************!*\
  !*** ./components/dashboard/scoreboard/mobile.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/mobile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MyRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"]).withConfig({
  displayName: "mobile__MyRow",
  componentId: "sc-17rkpu1-0"
})(["border-bottom:2px solid rgba(52,136,18,0.25) !important;"]);
var MenuScoreBoard = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"]).withConfig({
  displayName: "mobile__MenuScoreBoard",
  componentId: "sc-17rkpu1-1"
})(["border-top:2px solid rgba(34,36,38,0.45);border-bottom:2px solid rgba(34,36,38,0.45);"]);

var GenerateMyRow = function GenerateMyRow(_ref) {
  var name = _ref.name,
      score = _ref.score,
      rank = _ref.rank,
      display = _ref.display;
  return __jsx(MyRow, {
    secondary: true,
    style: {
      display: display
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    position: "right",
    name: score,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: rank,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

var GenerateRows = function GenerateRows(props) {
  var rows = props.data.map(function (x) {
    var background = '';
    var rank = x.third;
    if (rank <= 3) background = '#fed76673';else if (rank <= 6) background = '#bbbbbb73';else if (rank <= 9) background = '#cd7f3273';
    if (x.first === props.myName) return __jsx(GenerateMyRow, {
      name: x.first,
      score: x.second,
      rank: x.third,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      secondary: true,
      pointing: true,
      style: {
        background: background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      position: "right",
      name: x.second,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: x.first,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: x.third,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  });
  return rows;
};

var Footer = function Footer() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    defaultActivePage: 1,
    firstItem: null,
    lastItem: null,
    pointing: true,
    secondary: true,
    totalPages: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
};

var Scoreboard = function Scoreboard(_ref2) {
  var data = _ref2.data;
  var myName = 'پویا معینی';
  var display = data.some(function (x) {
    return x.first === myName;
  }) ? 'none' : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MenuScoreBoard, {
    fluid: true,
    secondary: true,
    pointing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    position: "right",
    name: "\u0627\u0645\u062A\u06CC\u0627\u0632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "task1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    name: "\u0646\u0627\u0645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    name: "\u0631\u062A\u0628\u0647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

/***/ })

})
//# sourceMappingURL=scoreboard.js.70c272664ea68bf35b16.hot-update.js.map