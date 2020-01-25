webpackHotUpdate("static/development/pages/scoreboard.js",{

/***/ "./components/dashboard/scoreboard/laptab.jsx":
/*!****************************************************!*\
  !*** ./components/dashboard/scoreboard/laptab.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var dom_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-helpers */ "./node_modules/dom-helpers/esm/index.js");







var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/laptab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var TableHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].HeaderCell).withConfig({
  displayName: "laptab__TableHeader",
  componentId: "qvtjrt-0"
})(["background:rgba(80,87,99,0.05) !important;border-radius:0 !important;color:black !important;"]);
var TableCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell).withConfig({
  displayName: "laptab__TableCell",
  componentId: "qvtjrt-1"
})(["border-top:", " !important;border-bottom:", " !important;"], function (props) {
  return props.border;
}, function (props) {
  return props.border;
});
var Info = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "laptab__Info",
  componentId: "qvtjrt-2"
})(["text-align:left;margin-top:1rem;margin-left:1rem;"]);

var GenerateMyRow = function GenerateMyRow(_ref) {
  var team = _ref.team;
  var color = '#00000066';
  var border = "3px solid ".concat(color);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Row, {
    warning: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell, {
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
        lineNumber: 33
      },
      __self: this
    }, score);
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell, {
    textAlign: "center",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, team.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell, {
    textAlign: "center",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, team.rank));
};

var GenerateRows = function GenerateRows(_ref2) {
  var myName = _ref2.myName,
      teams = _ref2.teams,
      topRank = _ref2.topRank;
  var newTeams = teams.slice(topRank - 1, topRank + 19);
  var rows = newTeams.map(function (x) {
    var background = '#f8f8fa';
    var rank = x.rank;
    if (rank <= 3) background = '#fed76673';else if (rank <= 6) background = '#bbbbbb73';else if (rank <= 9) background = '#cd7f3273';
    var borderRight = "3px solid ".concat(background, " !important");
    if (x.name === myName) return __jsx(GenerateMyRow, {
      team: x,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Row, {
      style: {
        background: background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell, {
      textAlign: "center",
      style: {
        marginLeft: '3rem !important'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, x.total_score), x.scores.map(function (score) {
      return __jsx(TableCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, score);
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, x.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Cell, {
      textAlign: "center",
      style: {
        borderRight: borderRight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, x.rank));
  });
  return rows;
};

var Footer = function Footer(props) {
  var _jsx;

  var numberOfTeams = props.teams.length;
  var pageNumbers = Math.ceil(numberOfTeams / 20);
  console.log("page numbers : ", pageNumbers);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, " ", props.topRank + 20, " \u0627\u0644\u06CC ", props.topRank, " \u0631\u062A\u0628\u0647\u200C\u0647\u0627\u06CC"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Pagination"], (_jsx = {
    defaultActivePage: 1,
    firstItem: null,
    lastItem: null,
    secondary: true
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "defaultActivePage", pageNumbers), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "totalPages", pageNumbers), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "style", {
    marginTop: '0.5rem'
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "onPageChange", props.changePage), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 90
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__self", this), _jsx)))));
};

function onPageChange(e, pageInfo) {
  var newTopRank = (pageInfo.activePage - 1) * 20 + 1;
  this.setState({
    topRank: newTopRank
  });
}

var Scoreboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Scoreboard, _Component);

  function Scoreboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scoreboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scoreboard).call(this, props));
    _this.state = {
      milestone: props.milestone,
      teams: props.teams,
      tasks: props.tasks,
      myName: 'parsaalian0',
      topRank: 1
    };
    _this.changePage = onPageChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scoreboard, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].HeaderCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\u0627\u0645\u062A\u06CC\u0627\u0632"), this.state.tasks.map(function (x) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].HeaderCell, {
          textAlign: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, x.name);
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].HeaderCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "\u0646\u0627\u0645"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].HeaderCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "\u0631\u062A\u0628\u0647"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx(GenerateRows, {
        myName: this.state.myName,
        teams: this.state.teams,
        topRank: this.state.topRank,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }))), __jsx(Footer, {
        teams: this.state.teams,
        changePage: this.changePage,
        topRank: this.state.topRank,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }));
    }
  }]);

  return Scoreboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

/***/ })

})
//# sourceMappingURL=scoreboard.js.f00cf2d74bdfd4c357fa.hot-update.js.map