webpackHotUpdate("static/development/pages/dashboard/tasks/[id]/resource.js",{

/***/ "./components/dashboard/resources/index.jsx":
/*!**************************************************!*\
  !*** ./components/dashboard/resources/index.jsx ***!
  \**************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container */ "./components/dashboard/resources/container.jsx");






var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/resources/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





function Pagination(_ref) {
  var page = _ref.page,
      prevPage = _ref.prevPage,
      nextPage = _ref.nextPage,
      content = _ref.content;
  return __jsx("div", {
    style: {
      marginBottom: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, page > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: prevPage,
    floated: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u0642\u0628\u0644\u06CC") : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null), page < content.sections.length ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: nextPage,
    floated: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u0628\u0639\u062F\u06CC") : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null));
}

var Resource =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Resource, _Component);

  function Resource(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resource);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Resource).call(this, props));
    _this.state = {
      page: 0
    };
    _this.nextPage = _this.nextPage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.prevPage = _this.prevPage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resource, [{
    key: "nextPage",
    value: function nextPage(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      var page = this.state.page;
      var content = this.props.content;
      this.setState({
        page: Math.min(page + 1, content.sections.length)
      });
    }
  }, {
    key: "prevPage",
    value: function prevPage(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      var page = this.state.page;
      this.setState({
        page: Math.max(page - 1, 0)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.content;
      var page = this.state.page;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        style: {
          margin: '2rem auto',
          minHeight: 'calc(100vh - 333px)',
          direction: 'rtl'
        },
        centered: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        textAlign: "center",
        computer: 10,
        tablet: 12,
        mobile: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Progress"], {
        style: {
          color: 'black'
        },
        value: page + 1,
        total: content.sections.length + 1,
        progress: "ratio",
        success: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx(Pagination, {
        page: page,
        content: content,
        prevPage: this.prevPage,
        nextPage: this.nextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        textAlign: "center",
        computer: 10,
        tablet: 12,
        mobile: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h1",
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, content.title_fa), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h4",
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u0632\u0645\u0627\u0646 \u0645\u0637\u0627\u0644\u0639\u0647: ", content.time_to_read, " \u062F\u0642\u06CC\u0642\u0647"), !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(content.file) && __jsx("a", {
        style: {
          textAlign: 'center',
          margin: '2rem',
          width: '100%'
        },
        href: content.file,
        download: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "\u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0646\u0627\u0628\u0639"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), page > 0 && !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(content.sections[page - 1].link_to_colab) && __jsx("a", {
        style: {
          textAlign: 'center',
          margin: '2rem',
          width: '100%'
        },
        href: content.sections[page - 1].link_to_colab,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u062F\u0631 Google Colab"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        size: "large",
        style: {
          margin: 'auto'
        },
        src: "/images/header.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        computer: 10,
        tablet: 12,
        mobile: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, page === 0 ? __jsx(_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: content.description_en,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }) : __jsx(_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: content.sections[page - 1].markdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), __jsx(Pagination, {
        page: page,
        content: content,
        prevPage: this.prevPage,
        nextPage: this.nextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })))));
    }
  }]);

  return Resource;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Resource);

/***/ })

})
//# sourceMappingURL=resource.js.ccac9823d209e6b4a495.hot-update.js.map