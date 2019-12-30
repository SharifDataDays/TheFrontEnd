module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dashboard/layout.jsx":
/*!*****************************************!*\
  !*** ./components/dashboard/layout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_navbar_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/navbar/auth */ "./components/global/navbar/auth.jsx");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_global_navbar_auth__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/dashboard/resources/code.jsx":
/*!*************************************************!*\
  !*** ./components/dashboard/resources/code.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ "./node_modules/highlight.js/styles/atom-one-dark.css");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js */ "highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/resources/code.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class CodeBlock extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setRef(el) {
    this.codeEl = el;
  }

  highlightCode() {
    highlight_js__WEBPACK_IMPORTED_MODULE_2___default.a.highlightBlock(this.codeEl);
  }

  render() {
    const {
      language,
      value
    } = this.props;
    return __jsx("pre", {
      style: {
        textAlign: 'left',
        direction: 'ltr'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, language !== null ? __jsx("p", {
      dir: "LTR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "In:") : __jsx("p", {
      dir: "LTR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Out:"), __jsx("code", {
      ref: this.setRef,
      className: `language-python`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, value));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

/***/ }),

/***/ "./components/dashboard/resources/container.jsx":
/*!******************************************************!*\
  !*** ./components/dashboard/resources/container.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse */ "./components/dashboard/resources/parse.jsx");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./components/dashboard/resources/code.jsx");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/resources/container.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Container({
  content
}) {
  return __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: content,
    escapeHtml: false,
    skipHtml: false,
    renderers: {
      code: _code__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    astPlugins: [_parse__WEBPACK_IMPORTED_MODULE_2__["default"]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/dashboard/resources/index.jsx":
/*!**************************************************!*\
  !*** ./components/dashboard/resources/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./components/dashboard/resources/container.jsx");
/* harmony import */ var _global_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/footer */ "./components/global/footer.jsx");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/resources/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Resource extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const {
      page
    } = this.state;
    const {
      content
    } = this.props;
    this.setState({
      page: Math.min(page + 1, content.sections.length)
    });
  }

  prevPage(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const {
      page
    } = this.state;
    this.setState({
      page: Math.max(page - 1, 0)
    });
  }

  render() {
    const {
      content
    } = this.props;
    const {
      page
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      style: {
        margin: '2rem auto',
        minHeight: 'calc(100vh - 333px)',
        direction: 'rtl'
      },
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      textAlign: "center",
      computer: 10,
      tablet: 12,
      mobile: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      style: {
        color: 'black'
      },
      value: page + 1,
      total: content.sections.length + 1,
      progress: "ratio",
      success: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("div", {
      style: {
        marginBottom: '3rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, page > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.prevPage,
      floated: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\u0642\u0628\u0644\u06CC") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), page < content.sections.length ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.nextPage,
      floated: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "\u0628\u0639\u062F\u06CC") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      textAlign: "center",
      computer: 10,
      tablet: 12,
      mobile: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h1",
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, content.title_fa), __jsx("a", {
      style: {
        textAlign: 'center',
        margin: '2rem',
        width: '100%'
      },
      href: content.file,
      download: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "\u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0646\u0627\u0628\u0639"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      size: "large",
      style: {
        margin: 'auto'
      },
      src: "/images/header.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      computer: 10,
      tablet: 12,
      mobile: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, page === 0 ? __jsx(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: content.description_en,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }) : __jsx(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: content.sections[page - 1].markdown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("div", {
      style: {
        marginTop: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, page > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.prevPage,
      floated: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "\u0642\u0628\u0644\u06CC") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), page < content.sections.length ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.nextPage,
      floated: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "\u0628\u0639\u062F\u06CC") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null))))), __jsx(_global_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Resource);

/***/ }),

/***/ "./components/dashboard/resources/notFound.jsx":
/*!*****************************************************!*\
  !*** ./components/dashboard/resources/notFound.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/resources/notFound.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"]).withConfig({
  displayName: "notFound__Header",
  componentId: "sc-1t6gy31-0"
})(["font-size:35px;direction:rtl;position:absolute;width:100%;text-align:center;"]);

function HeaderSection() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    verticalAlign: "middle",
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    computer: 7,
    tablet: 7,
    mobile: 15,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(Header, {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0648\u0631\u062F\u200C\u0646\u0638\u0631 \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A.")));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ }),

/***/ "./components/dashboard/resources/parse.jsx":
/*!**************************************************!*\
  !*** ./components/dashboard/resources/parse.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown_plugins_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown/plugins/html-parser */ "react-markdown/plugins/html-parser");
/* harmony import */ var react_markdown_plugins_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown_plugins_html_parser__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/dashboard/resources/parse.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (react_markdown_plugins_html_parser__WEBPACK_IMPORTED_MODULE_3___default()({
  isValidNode: node => true,
  processingInstructions: [{
    shouldProcessNode(node) {
      return node.name && node.name === 'div';
    },

    processNode(node, children) {
      return __jsx("div", {
        style: {
          marginBottom: '1rem'
        },
        dir: "RTL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'font';
    },

    processNode(node, children) {
      return __jsx("font", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, node.attribs, {
        style: {
          lineHeight: 1.5
        },
        face: "IRANSans",
        size: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h1';
    },

    processNode(node) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h1",
        style: {
          fontSize: '3rem',
          lineHeight: 1.5,
          marginBottom: '3rem',
          direction: 'rtl'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h2';
    },

    processNode(node) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h2",
        style: {
          fontSize: '2.25rem',
          lineHeight: 1.5,
          marginBottom: '3rem',
          direction: 'rtl'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h3';
    },

    processNode(node) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h3",
        style: {
          fontSize: '2rem',
          lineHeight: 1.5,
          marginBottom: '1rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h4';
    },

    processNode(node) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h4",
        style: {
          fontSize: '1.75rem',
          lineHeight: 1.5,
          marginBottom: '1rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'figure';
    },

    processNode(node, children) {
      return __jsx("figure", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'figcaption';
    },

    processNode(node, children) {
      return __jsx("figcaption", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'img';
    },

    processNode(node) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: {
          margin: '3rem auto'
        },
        src: node.attribs.src,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      });
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'table';
    },

    processNode(node, children) {
      return __jsx("div", {
        style: {
          marginBottom: '3rem',
          width: '100%',
          overflowX: 'scroll'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        celled: true,
        striped: true,
        stackable: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, children));
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'thead';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'tbody';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'tr';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'th';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'td';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'ul';
    },

    processNode(node, children) {
      return __jsx("div", {
        style: {
          margin: '2rem'
        },
        dir: "RTL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        bulleted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, children));
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'ol';
    },

    processNode(node, children) {
      return __jsx("div", {
        style: {
          margin: '2rem'
        },
        dir: "RTL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        ordered: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, children));
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'li';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'hr';
    },

    processNode(node, children) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      });
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'br';
    },

    processNode(node, children) {
      return __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      });
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'code';
    },

    processNode(node, children) {
      return __jsx("code", {
        style: {
          backgroundColor: '#eeeeee',
          direction: 'ltr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'p';
    },

    processNode(node, children) {
      return __jsx("span", {
        style: {
          fontSize: '1.5rem',
          lineHeight: 1.5,
          marginBottom: '0.75rem',
          direction: 'rtl'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'a';
    },

    processNode(node, children) {
      return __jsx("a", {
        href: node.attribs.href,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'blockquote';
    },

    processNode(node, children) {
      return __jsx("blockquote", {
        style: {
          color: 'grey',
          borderRight: '5px solid #e0e1e2',
          paddingRight: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'strong';
    },

    processNode(node, children) {
      return __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'em';
    },

    processNode(node, children) {
      return __jsx("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.type && node.type === 'text';
    },

    processNode(node) {
      if (!node.parent || node.parent.tagName === 'div' || node.parent.tagName === 'font') {
        return __jsx("span", {
          style: {
            fontSize: '1.5rem',
            lineHeight: 1.5,
            marginBottom: '0.75rem',
            direction: 'rtl'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, node.nodeValue);
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, node.nodeValue);
    }

  }]
}));

/***/ }),

/***/ "./components/global/footer.jsx":
/*!**************************************!*\
  !*** ./components/global/footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/global/footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const FixedMenuLayout = () => __jsx("div", {
  dir: "RTL",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Segment"], {
  inverted: true,
  vertical: true,
  style: {
    padding: '5em 0em',
    width: '100%'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], {
  textAlign: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
  inverted: true,
  stackable: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
  inverted: true,
  as: "h4",
  content: "\u0634\u0628\u06A9\u0647\u200C\u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"], {
  link: true,
  inverted: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  href: "https://instagram.com/datadays_sharif",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), " \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: "https://t.me/datadays_sharif",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTelegram"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), " \u062A\u0644\u06AF\u0631\u0627\u0645")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  href: "https://twitter.com/data_days",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitter"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), " \u062A\u0648\u06CC\u06CC\u062A\u0631")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("a", {
  href: "mailto:datadays@sharif.edu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), " \u0627\u06CC\u0645\u06CC\u0644")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 7,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
  inverted: true,
  as: "h4",
  content: "\u0622\u062F\u0631\u0633",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "\u062A\u0647\u0631\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0622\u0632\u0627\u062F\u06CC\u060C \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641\u060C \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
  inverted: true,
  section: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\u062A\u0645\u0627\u0645\u06CC \u062D\u0642\u0648\u0642 \u0628\u0631\u0627\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A.", ' ', new Date().getFullYear(), "\xA9"))));

/* harmony default export */ __webpack_exports__["default"] = (FixedMenuLayout);

/***/ }),

/***/ "./components/global/navbar/auth.jsx":
/*!*******************************************!*\
  !*** ./components/global/navbar/auth.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/auth */ "./redux/actions/auth.js");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/global/navbar/auth.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Menu = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"]).withConfig({
  displayName: "auth__Menu",
  componentId: "a1fqga-0"
})(["position:", " !important;margin:0 !important;border-radius:0 !important;border:0 !important;border-bottom:", " !important;background-color:", " !important;z-index:", " !important;width:100%;"], props => props.transparent ? 'absolute' : 'relative', props => props.transparent ? '0' : '1px solid #e2e2e2', props => props.transparent ? 'transparent' : 'white', props => props.transparent ? 1 : 0);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"]).withConfig({
  displayName: "auth__Image",
  componentId: "a1fqga-1"
})(["position:absolute;top:50%;transform:translateY(-50%);"]);

function Navbar({
  logout,
  transparent
}) {
  return __jsx(Menu, {
    size: "huge",
    transparent: transparent,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: e => {
      e.preventDefault();
      logout();
    },
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u062E\u0631\u0648\u062C")), __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    href: "/dashboard/tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u0645\u0646\u0627\u0628\u0639"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBook"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u0628\u0644\u0627\u06AF"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBlog"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(Menu.Menu, {
    position: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(Menu.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: "/dashboard/tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Image, {
    style: {
      marginRight: '1rem',
      marginTop: '2rem'
    },
    size: "mini",
    src: "/images/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })))));
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__["logoutAction"])())
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Navbar));

/***/ }),

/***/ "./components/global/withAuth.jsx":
/*!****************************************!*\
  !*** ./components/global/withAuth.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/auth */ "./redux/actions/auth.js");








var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/components/global/withAuth.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










function withAuth(loggedIn) {
  return WrappedComponent => {
    class Wrapper extends react__WEBPACK_IMPORTED_MODULE_11__["Component"] {
      static async getInitialProps(ctx) {
        const pageProps = (await WrappedComponent.getInitialProps) && (await WrappedComponent.getInitialProps(ctx));
        return _objectSpread({}, pageProps);
      }

      componentDidMount() {
        const {
          authorize
        } = this.props;
        authorize();
      }

      render() {
        const {
          auth
        } = this.props;

        if (auth.loading) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, "DataDays 2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Dimmer"], {
            active: auth.loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_14__["ClipLoader"], {
            size: 75,
            color: "#fff",
            loading: auth.loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          })));
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(loggedIn)) {
          return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }));
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(auth.token) && loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');
        }

        if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(auth.token) && !loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/dashboard/tasks');
        }

        return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
      }

    }

    function mapStateToProps(state, ownProps) {
      const {
        auth
      } = state;
      return {
        auth
      };
    }

    function mapDispatchToProps(dispatch, ownProps) {
      return {
        authorize: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_15__["authorizeAction"])())
      };
    }

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Wrapper);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/highlight.js/styles/atom-one-dark.css":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/styles/atom-one-dark.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/dashboard/tasks/[id]/resource.jsx":
/*!*************************************************!*\
  !*** ./pages/dashboard/tasks/[id]/resource.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/dashboard/layout */ "./components/dashboard/layout.jsx");
/* harmony import */ var _components_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/dashboard/resources */ "./components/dashboard/resources/index.jsx");
/* harmony import */ var _components_dashboard_resources_notFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/dashboard/resources/notFound */ "./components/dashboard/resources/notFound.jsx");
/* harmony import */ var _redux_actions_tasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../redux/actions/tasks */ "./redux/actions/tasks.js");
var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/pages/dashboard/tasks/[id]/resource.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










class ResourcesPage extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  static async getInitialProps(ctx) {
    return {
      id: ctx.query.id
    };
  }

  componentDidMount() {
    const {
      load,
      id
    } = this.props;
    load(id);
  }

  render() {
    const {
      tasks
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "DataDays 2020")), __jsx(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(tasks.current) ? __jsx(_components_dashboard_resources_notFound__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }) : __jsx(_components_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: tasks.current,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  }

}

function mapStateToProps(state, ownProps) {
  const {
    tasks
  } = state;
  return {
    tasks
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load: id => dispatch(Object(_redux_actions_tasks__WEBPACK_IMPORTED_MODULE_8__["loadTaskAction"])(id))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(true)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ResourcesPage)));

/***/ }),

/***/ "./redux/actions/auth.js":
/*!*******************************!*\
  !*** ./redux/actions/auth.js ***!
  \*******************************/
/*! exports provided: LOGIN_CLEAR, LOGIN_LOAD, LOGIN_UNLOAD, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_CHECK, SET_TOKEN, LOGOUT, loginUnloadAction, loginCheckerAction, loginAction, authorizeAction, logoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CLEAR", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LOAD", function() { return LOGIN_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_UNLOAD", function() { return LOGIN_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CHECK", function() { return LOGIN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUnloadAction", function() { return loginUnloadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCheckerAction", function() { return loginCheckerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorizeAction", function() { return authorizeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth */ "./redux/api/auth.js");


const LOGIN_CLEAR = 'LOGIN_CLEAR';
const LOGIN_LOAD = 'LOGIN_LOAD';
const LOGIN_UNLOAD = 'LOGIN_UNLOAD';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_CHECK = 'LOGIN_CHECK';
const SET_TOKEN = 'SET_TOKEN';
const LOGOUT = 'LOGOUT';

function loginClearAction() {
  return {
    type: LOGIN_CLEAR
  };
}

function loginLoadAction() {
  return {
    type: LOGIN_LOAD
  };
}

function loginUnloadAction() {
  return {
    type: LOGIN_UNLOAD
  };
}

function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  };
}

function loginFailAction(errors) {
  return {
    type: LOGIN_FAIL,
    payload: {
      errors
    }
  };
}

function loginCheckerAction(fields) {
  return {
    type: LOGIN_CHECK,
    payload: {
      fields
    }
  };
}
function loginAction(username, password) {
  return (dispatch, getState) => {
    dispatch(loginClearAction());
    dispatch(loginLoadAction());
    dispatch(loginCheckerAction({
      username,
      password
    }));

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(getState().auth.errors)) {
      Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["loginAPI"])({
        username,
        password
      }).then(res => {
        const {
          data
        } = res;

        if (data.status_code === 200) {
          const token = {
            refresh: data.refresh,
            access: data.access
          };
          dispatch(loginSuccessAction(token));
        } else {
          dispatch(loginFailAction(data.detail));
        }
      });
    } else {
      dispatch(loginUnloadAction());
    }
  };
}

function setTokenAction(token) {
  return {
    type: SET_TOKEN,
    payload: {
      token
    }
  };
}

function authorizeAction() {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth;
    dispatch(loginLoadAction());
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["authAPI"])(token).then(authRes => {
      if (authRes.data.status_code !== 200) {
        Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["refreshAPI"])(token).then(refreshRes => {
          if (refreshRes.data.status_code !== 200) {
            dispatch(setTokenAction({}));
          } else {
            const newToken = {
              refresh: token.refresh,
              access: refreshRes.data.access
            };
            dispatch(setTokenAction(newToken));
          }
        });
      } else {
        dispatch(setTokenAction(token));
      }
    });
  };
}
function logoutAction() {
  return {
    type: LOGOUT
  };
}

/***/ }),

/***/ "./redux/actions/tasks.js":
/*!********************************!*\
  !*** ./redux/actions/tasks.js ***!
  \********************************/
/*! exports provided: SET_TASK_LIST, SET_TASK, loadTaskListAction, loadTaskAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TASK_LIST", function() { return SET_TASK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TASK", function() { return SET_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTaskListAction", function() { return loadTaskListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTaskAction", function() { return loadTaskAction; });
/* harmony import */ var _api_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/dashboard */ "./redux/api/dashboard.js");

const SET_TASK_LIST = 'SET_TASK_LIST';
const SET_TASK = 'SET_TASK';

function setTaskListAction(taskList) {
  return {
    type: SET_TASK_LIST,
    payload: {
      taskList
    }
  };
}

function loadTaskListAction() {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth;
    Object(_api_dashboard__WEBPACK_IMPORTED_MODULE_0__["taskListAPI"])(token).then(res => {
      if (res.data.status_code === 200) {
        dispatch(setTaskListAction(res.data.documents));
      } else {
        dispatch(setTaskListAction([]));
      }
    });
  };
}

function setTaskAction(task) {
  return {
    type: SET_TASK,
    payload: {
      task
    }
  };
}

function loadTaskAction(id) {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth;
    Object(_api_dashboard__WEBPACK_IMPORTED_MODULE_0__["taskAPI"])(id, token).then(res => {
      if (res.data.status_code === 200) {
        dispatch(setTaskAction(res.data));
      } else {
        dispatch(setTaskAction({}));
      }
    });
  };
}

/***/ }),

/***/ "./redux/api/auth.js":
/*!***************************!*\
  !*** ./redux/api/auth.js ***!
  \***************************/
/*! exports provided: loginAPI, authAPI, refreshAPI, forgotAPI, resetAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAPI", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authAPI", function() { return authAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshAPI", function() { return refreshAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotAPI", function() { return forgotAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAPI", function() { return resetAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


const LOGIN = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/login`;
const AUTH = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/profile`;
const REFRESH = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/refresh`;
function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(LOGIN, data);
}
function authAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(AUTH, {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
function refreshAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(REFRESH, {
    refresh: token.refresh
  });
}
function forgotAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/password/reset/`;
}
function resetAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/password/reset/confirm/`;
}

/***/ }),

/***/ "./redux/api/dashboard.js":
/*!********************************!*\
  !*** ./redux/api/dashboard.js ***!
  \********************************/
/*! exports provided: profileAPI, taskListAPI, taskAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAPI", function() { return profileAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskListAPI", function() { return taskListAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskAPI", function() { return taskAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


function profileAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/profile`;
}

const TASK = id => `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/resources/${id}`;

const TASK_LIST = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/resources`;
function taskListAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
function taskAPI(id, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}

/***/ }),

/***/ "./redux/api/index.js":
/*!****************************!*\
  !*** ./redux/api/index.js ***!
  \****************************/
/*! exports provided: BASE, termsAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE", function() { return BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termsAPI", function() { return termsAPI; });
const BASE_ADDR = 'https://datadays.sharif.edu/api';
const BASE = 'https://datadays.sharif.edu';
function termsAPI() {
  return `${BASE_ADDR}/terms`;
}
/* harmony default export */ __webpack_exports__["default"] = (BASE_ADDR);

/***/ }),

/***/ 7:
/*!*******************************************************!*\
  !*** multi ./pages/dashboard/tasks/[id]/resource.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/pages/dashboard/tasks/[id]/resource.jsx */"./pages/dashboard/tasks/[id]/resource.jsx");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-markdown/plugins/html-parser":
/*!*****************************************************!*\
  !*** external "react-markdown/plugins/html-parser" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown/plugins/html-parser");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=resource.js.map