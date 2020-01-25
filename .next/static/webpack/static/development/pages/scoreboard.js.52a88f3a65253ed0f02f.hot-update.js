webpackHotUpdate("static/development/pages/scoreboard.js",{

/***/ "./components/dashboard/scoreboard/laptab.jsx":
/*!****************************************************!*\
  !*** ./components/dashboard/scoreboard/laptab.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var dom_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers */ "./node_modules/dom-helpers/esm/index.js");

var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/laptab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var TableHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell).withConfig({
  displayName: "laptab__TableHeader",
  componentId: "qvtjrt-0"
})(["background:rgba(80,87,99,0.05) !important;border-radius:0 !important;color:black !important;"]);
var TableCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell).withConfig({
  displayName: "laptab__TableCell",
  componentId: "qvtjrt-1"
})(["border-top:", " !important;border-bottom:", " !important;"], function (props) {
  return props.border;
}, function (props) {
  return props.border;
});
var Info = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "laptab__Info",
  componentId: "qvtjrt-2"
})(["text-align:left;margin-top:1rem;margin-left:1rem;"]);

var GenerateMyRow = function GenerateMyRow(_ref) {
  var team = _ref.team;
  var color = '#00000066';
  var border = "3px solid ".concat(color);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
    warning: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    textAlign: "center",
    style: {
      marginLeft: '3rem !important'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, team.total_score), team.scores.map(function (score) {
    return __jsx(TableCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, score);
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    textAlign: "center",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, team.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    textAlign: "center",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, team.rank));
};

var GenerateRows = function GenerateRows(_ref2) {
  var myName = _ref2.myName,
      teams = _ref2.teams;
  var rows = teams.map(function (x) {
    var background = '#f8f8fa';
    var rank = x.rank;
    if (rank <= 3) background = '#fed76673';else if (rank <= 6) background = '#bbbbbb73';else if (rank <= 9) background = '#cd7f3273';
    var borderRight = "3px solid ".concat(background, " !important");
    if (x.name === myName) return __jsx(GenerateMyRow, {
      team: x,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
      style: {
        background: background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
      textAlign: "center",
      style: {
        marginLeft: '3rem !important'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, x.total_score), x.scores.map(function (score) {
      return __jsx(TableCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, score);
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, x.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
      textAlign: "center",
      style: {
        borderRight: borderRight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, x.rank));
  });
  return rows;
};

var onChange = function onChange(e, pageInfo) {
  console.log("event:", e);
  console.log("pageInfo:", pageInfo);
  console.log("active page:", pageInfo.activePage);
};

var Footer = function Footer(props) {
  var _jsx;

  var numberOfTeams = props.teams.length;
  var pageNumbers = numberOfTeams / 2;
  console.log("_________number of teams:", numberOfTeams);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u0631\u062A\u0628\u0647\u200C\u0647\u0627\u06CC 1 \u0627\u0644\u06CC 2"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Pagination"], (_jsx = {
    defaultActivePage: 1,
    firstItem: null,
    lastItem: null,
    secondary: true
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "defaultActivePage", pageNumbers / 2), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "totalPages", pageNumbers), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
    marginTop: '0.5rem'
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onPageChange", onChange), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 101
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx)))));
};

var Scoreboard = function Scoreboard(_ref3) {
  var milestone = _ref3.milestone,
      teams = _ref3.teams,
      tasks = _ref3.tasks;
  // console.log("dataaaaaa:", data)
  var myName = 'team2';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    celled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "\u0627\u0645\u062A\u06CC\u0627\u0632"), tasks.map(function (x) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, x.name);
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "\u0646\u0627\u0645"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\u0631\u062A\u0628\u0647"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(GenerateRows, {
    myName: myName,
    teams: teams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }))), __jsx(Footer, {
    teams: teams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

/***/ })

})
//# sourceMappingURL=scoreboard.js.52a88f3a65253ed0f02f.hot-update.js.map