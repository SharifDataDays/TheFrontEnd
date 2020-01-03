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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./components/blog/post/comments/comment.jsx");
/* harmony import */ var _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/static/comments-test.json */ "./public/static/comments-test.json");
var _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/static/comments-test.json */ "./public/static/comments-test.json", 1);

var _jsxFileName = "/Users/pooya/Desktop/FrontEndMaster/TheFrontEnd/components/blog/post/comments/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var GenerateComments = function GenerateComments(_ref) {
  var data = _ref.data;
  return data.map(function (x) {
    return __jsx(_comment__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, x, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  });
};

var CommentExampleMinimal = function CommentExampleMinimal() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Comment"].Group, {
    style: {
      marginTop: '5rem',
      marginBottom: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    horizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u0646\u0638\u0631\u0627\u062A")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    reply: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].TextArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    secondary: true,
    positive: true,
    style: {
      marginBottom: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\u062B\u0628\u062A \u0646\u0638\u0631")), __jsx(GenerateComments, {
    data: _public_static_comments_test_json__WEBPACK_IMPORTED_MODULE_4__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentExampleMinimal);

/***/ })

})
//# sourceMappingURL=test.js.c90ae57a71a58a7292ce.hot-update.js.map