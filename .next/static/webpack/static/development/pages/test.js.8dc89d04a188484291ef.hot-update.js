webpackHotUpdate("static/development/pages/test.js",{

/***/ "./components/blog/post/comments/modal.jsx":
/*!*************************************************!*\
  !*** ./components/blog/post/comments/modal.jsx ***!
  \*************************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/Users/pooya/Desktop/FrontEndMaster/TheFrontEnd/components/blog/post/comments/modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Text = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "modal__Text",
  componentId: "sc-1elnyk7-0"
})(["text-align:center;font-size 1.5rem;"]);

var Alert =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Alert, _Component);

  function Alert(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Alert);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Alert).call(this, props));
    _this.state = {
      open: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Alert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var open = this.props.open;
      this.setState({
        open: open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.props.open;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        basic: true,
        open: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h1",
        content: "\u062B\u0628\u062A \u0646\u0638\u0631",
        style: {
          paddingBottom: '0',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Modal"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u0628\u0631\u0627\u06CC \u062B\u0628\u062A \u0646\u0638\u0631 \u0628\u0627\u06CC\u062F \u062F\u0631 \u0633\u0627\u06CC\u062A \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Modal"].Actions, {
        style: {
          display: 'flex',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "green",
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u0641\u0647\u0645\u06CC\u062F\u0645")));
    }
  }]);

  return Alert;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ })

})
//# sourceMappingURL=test.js.8dc89d04a188484291ef.hot-update.js.map