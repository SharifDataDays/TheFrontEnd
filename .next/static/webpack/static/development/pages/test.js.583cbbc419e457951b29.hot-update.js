webpackHotUpdate("static/development/pages/test.js",{

/***/ "./components/blog/post/comments/index.jsx":
/*!*************************************************!*\
  !*** ./components/blog/post/comments/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment */ "./components/blog/post/comments/comment.jsx");
/* harmony import */ var _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../public/static/comments-test.json */ "./public/static/comments-test.json");
var _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/static/comments-test.json */ "./public/static/comments-test.json", 1);


var _jsxFileName = "/Users/pooya/Desktop/FrontEndMaster/TheFrontEnd/components/blog/post/comments/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  ", ";\n  width: 100%;\n  height: 100%;\n  outline: 0;\n  border: 0;\n  resize: none;\n  direction: rtl;\n  margin-bottom: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var TextArea = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5___default.a)(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"]);

var GenerateComments = function GenerateComments(_ref) {
  var data = _ref.data;
  return data.map(function (x) {
    return __jsx(_comment__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, x, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  });
};

var CommentExampleMinimal = function CommentExampleMinimal() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Comment"].Group, {
    style: {
      marginTop: '5rem',
      marginBottom: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    horizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u0646\u0638\u0631\u0627\u062A")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    reply: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(TextArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    secondary: true,
    positive: true,
    style: {
      marginBottom: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u062B\u0628\u062A \u0646\u0638\u0631")), __jsx(GenerateComments, {
    data: _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_8__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentExampleMinimal);

/***/ })

})
//# sourceMappingURL=test.js.583cbbc419e457951b29.hot-update.js.map