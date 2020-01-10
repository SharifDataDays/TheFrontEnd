webpackHotUpdate("static/development/pages/scoreboard.js",{

/***/ "./components/dashboard/scoreboard/index.jsx":
/*!***************************************************!*\
  !*** ./components/dashboard/scoreboard/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _laptab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./laptab */ "./components/dashboard/scoreboard/laptab.jsx");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobile */ "./components/dashboard/scoreboard/mobile.jsx");
/* harmony import */ var _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/static/locales/test-scoreboard/scoreboard.json */ "./public/static/locales/test-scoreboard/scoreboard.json");
var _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/locales/test-scoreboard/scoreboard.json */ "./public/static/locales/test-scoreboard/scoreboard.json", 1);





var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var Text = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "scoreboard__Text",
  componentId: "iajoqr-0"
})(["color:white;margin-top:", " !important;"], function (props) {
  return props.marginTop;
});

var HeaderScoreBoard = function HeaderScoreBoard() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    style: {
      background: 'url(/images/datas.jpeg)',
      backgroundSize: 'cover',
      height: ' 18rem',
      opacity: '.9'
    },
    computer: 15,
    mobile: 15,
    tablet: 16,
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, ' ', __jsx(Text, {
    marginTop: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h2",
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Data days \u062C\u062F\u0648\u0644 \u0631\u062F\u0647\u200C\u0628\u0646\u062F\u06CC \u0641\u0627\u0632 \u0627\u0648\u0644 \u0627\u0632 \u062F\u0648\u0645\u06CC\u0646 \u062F\u0648\u0631\u0647\u200C\u06CC \u0645\u0633\u0627\u0628\u0642\u0627\u062A", ' '), __jsx(Text, {
    marginTop: "6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u062A\u0639\u062F\u0627\u062F \u0633\u0627\u0628\u0645\u06CC\u062A\u200C\u06A9\u0646\u0646\u062F\u0647\u200C\u0647\u0627 : 763 \u0646\u0641\u0631"));
};

var ScoreBoard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ScoreBoard, _Component);

  function ScoreBoard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScoreBoard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScoreBoard).call(this, props));
    _this.state = {
      padding: '0px !important'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScoreBoard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = window.innerWidth;
      var padding = width <= semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"].onlyMobile.maxWidth ? '0px !important' : '!important';
      this.setState({
        padding: padding
      });
    }
  }, {
    key: "render",
    value: function render() {
      var padding = this.state.padding;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        centered: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(HeaderScoreBoard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        centered: true,
        style: {
          marginTop: '5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        computer: 10,
        mobile: 15,
        tablet: 15,
        style: {
          padding: padding
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"], {
        maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"].onlyMobile.maxWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_mobile__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_11__,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"], {
        minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"].onlyTablet.minWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_laptab__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_11__,
        milestone: this.props.milestone,
        teams: this.props.teams,
        tasks: this.props.tasks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))))));
    }
  }]);

  return ScoreBoard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ScoreBoard);

/***/ })

})
//# sourceMappingURL=scoreboard.js.b3eb556cb7148902d8bb.hot-update.js.map