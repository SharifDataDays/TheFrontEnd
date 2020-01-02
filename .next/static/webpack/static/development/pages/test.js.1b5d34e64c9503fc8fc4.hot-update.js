webpackHotUpdate("static/development/pages/test.js",{

/***/ "./components/blog/post/comments/comment.jsx":
/*!***************************************************!*\
  !*** ./components/blog/post/comments/comment.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/pooya/Desktop/FrontEndMaster/TheFrontEnd/components/blog/post/comments/comment.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CommentComp = function CommentComp(_ref) {
  var author = _ref.author,
      date = _ref.date,
      content = _ref.content,
      _ref$isReply = _ref.isReply,
      isReply = _ref$isReply === void 0 ? false : _ref$isReply;
  var marginRight = isReply ? '2rem' : 'auto';
  var display = isReply ? 'none' : 'auto';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
    style: {
      marginRight: marginRight
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Author, {
    as: "a",
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, author), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Metadata, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Text, {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      textAlign: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, content), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Actions, {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u067E\u0627\u0633\u062E \u062F\u0627\u062F\u0646")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    style: {
      display: display
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (CommentComp);

/***/ })

})
//# sourceMappingURL=test.js.1b5d34e64c9503fc8fc4.hot-update.js.map