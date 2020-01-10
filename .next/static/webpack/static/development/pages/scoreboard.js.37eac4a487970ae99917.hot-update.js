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
    var scoresSum = 0;
    x.scores.map(function (score) {
      scoresSum = scoresSum + score;
    });
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
        lineNumber: 53
      },
      __self: this
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      style: {
        background: background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "right",
      style: {
        marginLeft: '3rem !important'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, scoresSum), x.scores.map(function (score) {
      return __jsx(TableCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, score);
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, x.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      style: {
        borderRight: borderRight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
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
      lineNumber: 82
    },
    __self: this
  }, "\u0631\u062A\u0628\u0647\u200C\u0647\u0627\u06CC 1 \u0627\u0644\u06CC 20"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 85
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    celled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\u0627\u0645\u062A\u06CC\u0627\u0632"), tasks.map(function (x) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, x.name);
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "\u0646\u0627\u0645"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "\u0631\u062A\u0628\u0647"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(GenerateMyRow, {
    name: myName,
    score: "100",
    rank: "0",
    display: display,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(GenerateRows, {
    data: data,
    myName: myName,
    teams: teams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

/***/ })

})
//# sourceMappingURL=scoreboard.js.37eac4a487970ae99917.hot-update.js.map