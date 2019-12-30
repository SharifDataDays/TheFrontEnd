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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+YYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return refreshAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forgotAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resetAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eNjs");


const LOGIN = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/login`;
const AUTH = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/profile`;
const REFRESH = `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/refresh`;
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
  return `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/password/reset/`;
}
function resetAPI() {
  return `${___WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]}/accounts/password/reset/confirm/`;
}

/***/ }),

/***/ "20qM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/global/withAuth.jsx
var withAuth = __webpack_require__("lblT");

// EXTERNAL MODULE: ./components/dashboard/layout.jsx
var layout = __webpack_require__("rKAS");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react-markdown/plugins/html-parser"
var html_parser_ = __webpack_require__("tMdA");
var html_parser_default = /*#__PURE__*/__webpack_require__.n(html_parser_);

// CONCATENATED MODULE: ./components/dashboard/resources/parse.jsx

var __jsx = external_react_default.a.createElement;



/* harmony default export */ var parse = (html_parser_default()({
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
        dir: "RTL"
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'font';
    },

    processNode(node, children) {
      return __jsx("font", Object(esm_extends["a" /* default */])({}, node.attribs, {
        style: {
          lineHeight: 1.5
        },
        face: "IRANSans",
        size: "5"
      }), children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h1';
    },

    processNode(node) {
      return __jsx(external_semantic_ui_react_["Header"], {
        as: "h1",
        style: {
          fontSize: '3rem',
          lineHeight: 1.5,
          marginBottom: '3rem',
          direction: 'rtl'
        }
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h2';
    },

    processNode(node) {
      return __jsx(external_semantic_ui_react_["Header"], {
        as: "h2",
        style: {
          fontSize: '2.25rem',
          lineHeight: 1.5,
          marginBottom: '3rem',
          direction: 'rtl'
        }
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h3';
    },

    processNode(node) {
      return __jsx(external_semantic_ui_react_["Header"], {
        as: "h3",
        style: {
          fontSize: '2rem',
          lineHeight: 1.5,
          marginBottom: '1rem'
        }
      }, node.children[0].data);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'h4';
    },

    processNode(node) {
      return __jsx(external_semantic_ui_react_["Header"], {
        as: "h4",
        style: {
          fontSize: '1.75rem',
          lineHeight: 1.5,
          marginBottom: '1rem'
        }
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
        }
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
        }
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'img';
    },

    processNode(node) {
      return __jsx(external_semantic_ui_react_["Image"], {
        style: {
          margin: '3rem auto'
        },
        src: node.attribs.src
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
        }
      }, __jsx(external_semantic_ui_react_["Table"], {
        celled: true,
        striped: true,
        stackable: false
      }, children));
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'thead';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["Table"].Header, null, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'tbody';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["Table"].Body, null, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'tr';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["Table"].Row, null, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'th';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["Table"].HeaderCell, null, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'td';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["Table"].Cell, null, children);
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
        dir: "RTL"
      }, __jsx(external_semantic_ui_react_["List"], {
        bulleted: true
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
        dir: "RTL"
      }, __jsx(external_semantic_ui_react_["List"], {
        ordered: true
      }, children));
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'li';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["List"].Item, null, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'hr';
    },

    processNode(node, children) {
      return __jsx(external_semantic_ui_react_["Divider"], null);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'br';
    },

    processNode(node, children) {
      return __jsx("br", null);
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
        }
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
        }
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
        rel: "noopener noreferrer"
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
        }
      }, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'strong';
    },

    processNode(node, children) {
      return __jsx("strong", null, children);
    }

  }, {
    shouldProcessNode(node) {
      return node.name && node.name === 'em';
    },

    processNode(node, children) {
      return __jsx("em", null, children);
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
          }
        }, node.nodeValue);
      }

      return __jsx(external_react_default.a.Fragment, null, node.nodeValue);
    }

  }]
}));
// EXTERNAL MODULE: ./node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark = __webpack_require__("nyGS");

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// CONCATENATED MODULE: ./components/dashboard/resources/code.jsx
var code_jsx = external_react_default.a.createElement;




class code_CodeBlock extends external_react_default.a.PureComponent {
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
    external_highlight_js_default.a.highlightBlock(this.codeEl);
  }

  render() {
    const {
      language,
      value
    } = this.props;
    return code_jsx("pre", {
      style: {
        textAlign: 'left',
        direction: 'ltr'
      }
    }, language !== null ? code_jsx("p", {
      dir: "LTR"
    }, "In:") : code_jsx("p", {
      dir: "LTR"
    }, "Out:"), code_jsx("code", {
      ref: this.setRef,
      className: `language-python`
    }, value));
  }

}

/* harmony default export */ var code = (code_CodeBlock);
// CONCATENATED MODULE: ./components/dashboard/resources/container.jsx
var container_jsx = external_react_default.a.createElement;





function Container({
  content
}) {
  return container_jsx(external_react_markdown_default.a, {
    source: content,
    escapeHtml: false,
    skipHtml: false,
    renderers: {
      code: code
    },
    astPlugins: [parse]
  });
}

/* harmony default export */ var container = (Container);
// EXTERNAL MODULE: ./components/global/footer.jsx
var footer = __webpack_require__("Aqs1");

// CONCATENATED MODULE: ./components/dashboard/resources/index.jsx
var resources_jsx = external_react_default.a.createElement;





class resources_Resource extends external_react_["Component"] {
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
    return resources_jsx(external_react_default.a.Fragment, null, resources_jsx(external_semantic_ui_react_["Grid"], {
      style: {
        margin: '2rem auto',
        minHeight: 'calc(100vh - 333px)',
        direction: 'rtl'
      },
      centered: true
    }, resources_jsx(external_semantic_ui_react_["Grid"].Row, null, resources_jsx(external_semantic_ui_react_["Grid"].Column, {
      textAlign: "center",
      computer: 10,
      tablet: 12,
      mobile: 14
    }, resources_jsx(external_semantic_ui_react_["Progress"], {
      style: {
        color: 'black'
      },
      value: page + 1,
      total: content.sections.length + 1,
      progress: "ratio",
      success: true
    }), resources_jsx("div", {
      style: {
        marginBottom: '3rem'
      }
    }, page > 0 ? resources_jsx(external_semantic_ui_react_["Button"], {
      onClick: this.prevPage,
      floated: "left"
    }, "\u0642\u0628\u0644\u06CC") : resources_jsx(external_react_default.a.Fragment, null), page < content.sections.length ? resources_jsx(external_semantic_ui_react_["Button"], {
      onClick: this.nextPage,
      floated: "right"
    }, "\u0628\u0639\u062F\u06CC") : resources_jsx(external_react_default.a.Fragment, null)))), resources_jsx(external_semantic_ui_react_["Grid"].Row, null, resources_jsx(external_semantic_ui_react_["Grid"].Column, {
      textAlign: "center",
      computer: 10,
      tablet: 12,
      mobile: 14
    }, resources_jsx(external_semantic_ui_react_["Header"], {
      as: "h1",
      style: {
        textAlign: 'center'
      }
    }, content.title_fa), resources_jsx("a", {
      style: {
        textAlign: 'center',
        margin: '2rem',
        width: '100%'
      },
      href: content.file,
      download: true
    }, "\u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0646\u0627\u0628\u0639"), resources_jsx(external_semantic_ui_react_["Image"], {
      size: "large",
      style: {
        margin: 'auto'
      },
      src: "/images/header.jpg"
    }))), resources_jsx(external_semantic_ui_react_["Grid"].Row, null, resources_jsx(external_semantic_ui_react_["Grid"].Column, {
      computer: 10,
      tablet: 12,
      mobile: 14
    }, page === 0 ? resources_jsx(container, {
      content: content.description_en
    }) : resources_jsx(container, {
      content: content.sections[page - 1].markdown
    }), resources_jsx("div", {
      style: {
        marginTop: '1rem'
      }
    }, page > 0 ? resources_jsx(external_semantic_ui_react_["Button"], {
      onClick: this.prevPage,
      floated: "left"
    }, "\u0642\u0628\u0644\u06CC") : resources_jsx(external_react_default.a.Fragment, null), page < content.sections.length ? resources_jsx(external_semantic_ui_react_["Button"], {
      onClick: this.nextPage,
      floated: "right"
    }, "\u0628\u0639\u062F\u06CC") : resources_jsx(external_react_default.a.Fragment, null))))), resources_jsx(footer["a" /* default */], null));
  }

}

/* harmony default export */ var resources = (resources_Resource);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/dashboard/resources/notFound.jsx
var notFound_jsx = external_react_default.a.createElement;



const Header = external_styled_components_default()(external_semantic_ui_react_["Header"]).withConfig({
  displayName: "notFound__Header",
  componentId: "sc-1t6gy31-0"
})(["font-size:35px;direction:rtl;position:absolute;width:100%;text-align:center;"]);

function HeaderSection() {
  return notFound_jsx(external_semantic_ui_react_["Grid"], {
    verticalAlign: "middle",
    centered: true
  }, notFound_jsx(external_semantic_ui_react_["Grid"].Column, {
    computer: 7,
    tablet: 7,
    mobile: 15
  }, notFound_jsx(Header, {
    as: "h1"
  }, "\u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0648\u0631\u062F\u200C\u0646\u0638\u0631 \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A.")));
}

/* harmony default export */ var notFound = (HeaderSection);
// EXTERNAL MODULE: ./redux/actions/tasks.js + 1 modules
var actions_tasks = __webpack_require__("acqQ");

// CONCATENATED MODULE: ./pages/dashboard/tasks/[id]/resource.jsx
var resource_jsx = external_react_default.a.createElement;










class resource_ResourcesPage extends external_react_["Component"] {
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
    return resource_jsx(external_react_default.a.Fragment, null, resource_jsx(head_default.a, null, resource_jsx("title", null, "DataDays 2020")), resource_jsx(layout["a" /* default */], null, external_lodash_default.a.isEmpty(tasks.current) ? resource_jsx(notFound, null) : resource_jsx(resources, {
      content: tasks.current
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
    load: id => dispatch(Object(actions_tasks["c" /* loadTaskAction */])(id))
  };
}

/* harmony default export */ var resource = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(true)(Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(resource_ResourcesPage)));

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("20qM");


/***/ }),

/***/ "46kV":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "Aqs1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VAPu");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const FixedMenuLayout = () => __jsx("div", {
  dir: "RTL"
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Segment"], {
  inverted: true,
  vertical: true,
  style: {
    padding: '5em 0em',
    width: '100%'
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], {
  textAlign: "center"
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
  inverted: true,
  stackable: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 3
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 3
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
  inverted: true,
  as: "h4",
  content: "\u0634\u0628\u06A9\u0647\u200C\u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC"
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"], {
  link: true,
  inverted: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "https://instagram.com/datadays_sharif",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"]
}), " \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "https://t.me/datadays_sharif",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTelegram"]
}), " \u062A\u0644\u06AF\u0631\u0627\u0645")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "https://twitter.com/data_days",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitter"]
}), " \u062A\u0648\u06CC\u06CC\u062A\u0631")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
  href: "mailto:datadays@sharif.edu"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"]
}), " \u0627\u06CC\u0645\u06CC\u0644")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Grid"].Column, {
  width: 7
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
  inverted: true,
  as: "h4",
  content: "\u0622\u062F\u0631\u0633"
}), __jsx("p", null, "\u062A\u0647\u0631\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0622\u0632\u0627\u062F\u06CC\u060C \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641\u060C \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
  inverted: true,
  section: true
}), __jsx("p", null, "\u062A\u0645\u0627\u0645\u06CC \u062D\u0642\u0648\u0642 \u0628\u0631\u0627\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A.", ' ', new Date().getFullYear(), "\xA9"))));

/* harmony default export */ __webpack_exports__["a"] = (FixedMenuLayout);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "ETzx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dKEp");
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
    secondary: true
  }, __jsx(Menu.Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: e => {
      e.preventDefault();
      logout();
    },
    primary: true
  }, "\u062E\u0631\u0648\u062C")), __jsx(Menu.Item, null, __jsx("a", {
    href: "/dashboard/tasks"
  }, "\u0645\u0646\u0627\u0628\u0639"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBook"]
  })), __jsx(Menu.Item, null, __jsx("a", {
    href: "/blog"
  }, "\u0628\u0644\u0627\u06AF"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBlog"]
  })), __jsx(Menu.Menu, {
    position: "left"
  }, __jsx(Menu.Header, null, __jsx("a", {
    href: "/dashboard/tasks"
  }, __jsx(Image, {
    style: {
      marginRight: '1rem',
      marginTop: '2rem'
    },
    size: "mini",
    src: "/images/logo.png"
  })))));
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__[/* logoutAction */ "k"])())
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Navbar));

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "acqQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./redux/api/index.js
var api = __webpack_require__("eNjs");

// CONCATENATED MODULE: ./redux/api/dashboard.js


function profileAPI() {
  return `${api["b" /* default */]}/accounts/profile`;
}

const TASK = id => `${api["b" /* default */]}/resources/${id}`;

const TASK_LIST = `${api["b" /* default */]}/resources`;
function taskListAPI(token) {
  return external_axios_default.a.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
function taskAPI(id, token) {
  return external_axios_default.a.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  });
}
// CONCATENATED MODULE: ./redux/actions/tasks.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_TASK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadTaskListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadTaskAction; });

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
    taskListAPI(token).then(res => {
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
    taskAPI(id, token).then(res => {
      if (res.data.status_code === 200) {
        dispatch(setTaskAction(res.data));
      } else {
        dispatch(setTaskAction({}));
      }
    });
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dKEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGOUT; });
/* unused harmony export loginUnloadAction */
/* unused harmony export loginCheckerAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return authorizeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return logoutAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+YYQ");


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
      Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* loginAPI */ "c"])({
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
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* authAPI */ "a"])(token).then(authRes => {
      if (authRes.data.status_code !== 200) {
        Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__[/* refreshAPI */ "d"])(token).then(refreshRes => {
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

/***/ "eNjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return termsAPI; });
const BASE_ADDR = 'https://datadays.sharif.edu/api';
const BASE = 'https://datadays.sharif.edu';
function termsAPI() {
  return `${BASE_ADDR}/terms`;
}
/* harmony default export */ __webpack_exports__["b"] = (BASE_ADDR);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
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

/***/ "lblT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("46kV");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("dKEp");







var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










function withAuth(loggedIn) {
  return WrappedComponent => {
    class Wrapper extends react__WEBPACK_IMPORTED_MODULE_10__["Component"] {
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
          return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", null, "DataDays 2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
            active: auth.loading
          }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_13__["ClipLoader"], {
            size: 75,
            color: "#fff",
            loading: auth.loading
          })));
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isUndefined(loggedIn)) {
          return __jsx(WrappedComponent, this.props);
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(auth.token) && loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');
        }

        if (!lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(auth.token) && !loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/dashboard/tasks');
        }

        return __jsx(WrappedComponent, this.props);
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
        authorize: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_14__[/* authorizeAction */ "i"])())
      };
    }

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Wrapper);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (withAuth);

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nyGS":
/***/ (function(module, exports) {



/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKAS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_navbar_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ETzx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_global_navbar_auth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), children);
}

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "tMdA":
/***/ (function(module, exports) {

module.exports = require("react-markdown/plugins/html-parser");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });