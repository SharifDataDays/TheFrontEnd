webpackHotUpdate("static/development/pages/test.js",{

/***/ "./components/blog/post/comments/comment.jsx":
/*!***************************************************!*\
  !*** ./components/blog/post/comments/comment.jsx ***!
  \***************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal */ "./components/blog/post/comments/modal.jsx");






var _jsxFileName = "/Users/pooya/Desktop/FrontEndMaster/TheFrontEnd/components/blog/post/comments/comment.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var CommentComp =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CommentComp, _Component);

  function CommentComp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentComp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentComp).call(this, props));
    _this.state = {
      displayReply: 'none',
      open: false
    };
    _this.toReply = _this.toReply.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.doneReply = _this.doneReply.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onInput = _this.onInput.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentComp, [{
    key: "onInput",
    value: function onInput() {
      // handle logged in
      this.setState({
        open: true
      });
    }
  }, {
    key: "doneReply",
    value: function doneReply() {
      // post data
      this.setState({
        displayReply: 'none'
      });
    }
  }, {
    key: "toReply",
    value: function toReply() {
      var displayReply = this.state.displayReply;

      if (displayReply === 'block') {
        this.setState({
          displayReply: 'none'
        });
        return;
      }

      this.setState({
        displayReply: 'block'
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          author = _this$props.author,
          date = _this$props.date,
          content = _this$props.content,
          _this$props$isReply = _this$props.isReply,
          isReply = _this$props$isReply === void 0 ? false : _this$props$isReply;
      var marginRight = isReply ? '2rem' : 'auto';
      var display = isReply ? 'none' : 'auto';
      var _this$state = this.state,
          displayReply = _this$state.displayReply,
          open = _this$state.open;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: open,
        handle: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
        style: {
          display: display
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Comment"], {
        style: {
          marginRight: marginRight
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Comment"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Comment"].Author, {
        as: "a",
        style: {
          "float": 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, author), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Comment"].Metadata, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Comment"].Text, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, content), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Comment"].Actions, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        onClick: this.toReply,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u067E\u0627\u0633\u062E \u062F\u0627\u062F\u0646")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        reply: true,
        style: {
          display: displayReply
        },
        onClick: this.onInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].TextArea, {
        style: {
          height: '5em',
          direction: 'rtl'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        secondary: true,
        positive: true,
        style: {
          marginBottom: '1rem'
        },
        onClick: this.doneReply,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u062B\u0628\u062A \u067E\u0627\u0633\u062E")))));
    }
  }]);

  return CommentComp;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CommentComp);

/***/ })

})
//# sourceMappingURL=test.js.7838acb7b6935cc47982.hot-update.js.map