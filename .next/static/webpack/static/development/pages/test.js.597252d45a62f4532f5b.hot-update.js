webpackHotUpdate("static/development/pages/test.js",{

/***/ "./components/blog/post/comments/index.jsx":
/*!*************************************************!*\
  !*** ./components/blog/post/comments/index.jsx ***!
  \*************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comment */ "./components/blog/post/comments/comment.jsx");
/* harmony import */ var _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../public/static/comments-test.json */ "./public/static/comments-test.json");
var _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/static/comments-test.json */ "./public/static/comments-test.json", 1);







var _jsxFileName = "/Users/pooya/Desktop/FrontEndMaster/TheFrontEnd/components/blog/post/comments/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var TextArea = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_10___default.a).withConfig({
  displayName: "comments__TextArea",
  componentId: "sc-1sc0g24-0"
})(["", ";width:100%;height:100%;outline:0;border:0;resize:none;direction:rtl;margin-bottom:1rem !important;"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"]);

var GenerateComments = function GenerateComments(_ref) {
  var data = _ref.data;
  return data.map(function (x) {
    return __jsx(_comment__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, x, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  });
};

var CommentsPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CommentsPage, _Component);

  function CommentsPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentsPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentsPage).call(this, props));
    _this.reply = _this.reply.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.checkLoggedIn = _this.checkLoggedIn.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentsPage, [{
    key: "reply",
    value: function reply() {
      // should handle post
      this.setState({});
    }
  }, {
    key: "checkLoggedIn",
    value: function checkLoggedIn() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Comment"].Group, {
        style: {
          marginTop: '5rem',
          marginBottom: '5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "Show Modal"),
        content: __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "d"),
        actions: ['Snooze', {
          key: 'done',
          content: 'Done',
          positive: true
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        horizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u0646\u0638\u0631\u0627\u062A")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        reply: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(TextArea, {
        onInput: function onInput() {
          return console.log('hello world');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        secondary: true,
        positive: true,
        style: {
          marginBottom: '1rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u062B\u0628\u062A \u0646\u0638\u0631")), __jsx(GenerateComments, {
        data: _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_13__,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }
  }]);

  return CommentsPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CommentsPage);

/***/ })

})
//# sourceMappingURL=test.js.597252d45a62f4532f5b.hot-update.js.map