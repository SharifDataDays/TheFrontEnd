module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.semantic/dist/semantic.rtl.min.css":
/*!*********************************************!*\
  !*** ./.semantic/dist/semantic.rtl.min.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/dashboard/scoreboard/index.jsx":
/*!***************************************************!*\
  !*** ./components/dashboard/scoreboard/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _laptab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./laptab */ "./components/dashboard/scoreboard/laptab.jsx");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile */ "./components/dashboard/scoreboard/mobile.jsx");
/* harmony import */ var _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/static/locales/test-scoreboard/scoreboard.json */ "./public/static/locales/test-scoreboard/scoreboard.json");
var _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/locales/test-scoreboard/scoreboard.json */ "./public/static/locales/test-scoreboard/scoreboard.json", 1);
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "scoreboard__Text",
  componentId: "iajoqr-0"
})(["color:white;margin-top:", " !important;"], props => props.marginTop);

const HeaderScoreBoard = props => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  style: {
    background: 'url(/images/datas.jpeg)',
    backgroundSize: 'cover',
    height: ' 18rem',
    opacity: '.9'
  },
  computer: 10,
  mobile: 15,
  tablet: 16,
  textAlign: "left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, ' ', __jsx(Text, {
  marginTop: "2rem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u062F\u0627\u0646\u0634\u06A9\u062F\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u0634\u0631\u06CC\u0641"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  as: "h2",
  style: {
    color: 'white'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Data days \u0627\u0632 \u062F\u0648\u0645\u06CC\u0646 \u062F\u0648\u0631\u0647\u200C\u06CC \u0645\u0633\u0627\u0628\u0642\u0627\u062A ", props.milestone.name, " \u062C\u062F\u0648\u0644 \u0631\u062F\u0647\u200C\u0628\u0646\u062F\u06CC \u0641\u0627\u0632"), __jsx(Text, {
  marginTop: "6rem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "\u062A\u0639\u062F\u0627\u062F \u0633\u0627\u0628\u0645\u06CC\u062A\u200C\u06A9\u0646\u0646\u062F\u0647\u200C\u0647\u0627 : 763 \u0646\u0641\u0631"));

class ScoreBoard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      padding: '0px !important'
    };
  }

  componentDidMount() {
    const width = window.innerWidth;
    const padding = width <= semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile.maxWidth ? '0px !important' : '!important';
    this.setState({
      padding
    });
  }

  render() {
    const {
      padding
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(HeaderScoreBoard, {
      milestone: this.props.milestone,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      centered: true,
      style: {
        marginTop: '5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      computer: 10,
      mobile: 15,
      tablet: 15,
      style: {
        padding
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile.maxWidth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_mobile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_locales_test_scoreboard_scoreboard_json__WEBPACK_IMPORTED_MODULE_6__,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyTablet.minWidth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_laptab__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

}

/* harmony default export */ __webpack_exports__["default"] = (ScoreBoard);

/***/ }),

/***/ "./components/dashboard/scoreboard/laptab.jsx":
/*!****************************************************!*\
  !*** ./components/dashboard/scoreboard/laptab.jsx ***!
  \****************************************************/
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
/* harmony import */ var dom_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers */ "dom-helpers");
/* harmony import */ var dom_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/laptab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TableHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell).withConfig({
  displayName: "laptab__TableHeader",
  componentId: "qvtjrt-0"
})(["background:rgba(80,87,99,0.05) !important;border-radius:0 !important;color:black !important;"]);
const TableCell = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell).withConfig({
  displayName: "laptab__TableCell",
  componentId: "qvtjrt-1"
})(["border-top:", " !important;border-bottom:", " !important;"], props => props.border, props => props.border);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "laptab__Info",
  componentId: "qvtjrt-2"
})(["text-align:left;margin-top:1rem;margin-left:1rem;"]);

const GenerateMyRow = ({
  team
}) => {
  const color = '#00000066';
  const border = `3px solid ${color}`;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    warning: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
    textAlign: "center",
    style: {
      marginLeft: '3rem !important'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, team.total_score), team.scores.map(score => {
    return __jsx(TableCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, score);
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
    textAlign: "center",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, team.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
    textAlign: "center",
    border: border,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, team.rank));
};

const GenerateRows = ({
  myName,
  teams,
  topRank
}) => {
  let newTeams = teams.slice(topRank - 1, topRank + 19);
  const rows = newTeams.map(x => {
    let background = '#f8f8fa';
    const rank = x.rank;
    if (rank <= 3) background = '#fed76673';else if (rank <= 6) background = '#bbbbbb73';else if (rank <= 9) background = '#cd7f3273';
    const borderRight = `3px solid ${background} !important`;
    if (x.name === myName) return __jsx(GenerateMyRow, {
      team: x,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      style: {
        background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      style: {
        marginLeft: '3rem !important'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, x.total_score), x.scores.map(score => {
      return __jsx(TableCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: undefined
      }, score);
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, x.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      textAlign: "center",
      style: {
        borderRight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, x.rank));
  });
  return rows;
};

const Footer = props => {
  const numberOfTeams = props.teams.length;
  const pageNumbers = Math.ceil(numberOfTeams / 20);
  console.log("page numbers : ", pageNumbers);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, " ", props.topRank + 19, " \u0627\u0644\u06CC ", props.topRank, " \u0631\u062A\u0628\u0647\u200C\u0647\u0627\u06CC"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    defaultActivePage: 1,
    firstItem: null,
    lastItem: null,
    secondary: true,
    defaultActivePage: pageNumbers,
    totalPages: pageNumbers,
    style: {
      marginTop: '0.5rem'
    },
    onPageChange: props.changePage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }))));
};

function onPageChange(e, pageInfo) {
  let newTopRank = (pageInfo.activePage - 1) * 20 + 1;
  this.setState({
    topRank: newTopRank
  });
}

class Scoreboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      milestone: props.milestone,
      teams: props.teams,
      tasks: props.tasks,
      myName: 'parsaalian0',
      topRank: 1
    };
    this.changePage = onPageChange.bind(this);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      celled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "\u0627\u0645\u062A\u06CC\u0627\u0632"), this.state.tasks.map(x => {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, x.name);
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "\u0646\u0627\u0645"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "\u0631\u062A\u0628\u0647"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx(GenerateRows, {
      myName: this.state.myName,
      teams: this.state.teams,
      topRank: this.state.topRank,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }))), __jsx(Footer, {
      teams: this.state.teams,
      changePage: this.changePage,
      topRank: this.state.topRank,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

/***/ }),

/***/ "./components/dashboard/scoreboard/mobile.jsx":
/*!****************************************************!*\
  !*** ./components/dashboard/scoreboard/mobile.jsx ***!
  \****************************************************/
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
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/dashboard/scoreboard/mobile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MyRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"]).withConfig({
  displayName: "mobile__MyRow",
  componentId: "sc-17rkpu1-0"
})(["border-bottom:2px solid rgba(52,136,18,0.25) !important;"]);
const MenuScoreBoard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"]).withConfig({
  displayName: "mobile__MenuScoreBoard",
  componentId: "sc-17rkpu1-1"
})(["border-top:2px solid rgba(34,36,38,0.45);border-bottom:2px solid rgba(34,36,38,0.45);"]);

const GenerateMyRow = ({
  name,
  score,
  rank,
  display
}) => __jsx(MyRow, {
  secondary: true,
  style: {
    display
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  position: "right",
  name: score,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  name: name,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  name: rank,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

const GenerateRows = props => {
  const rows = props.data.map(x => {
    let background = '';
    const rank = x.third;
    if (rank <= 3) background = '#fed76673';else if (rank <= 6) background = '#bbbbbb73';else if (rank <= 9) background = '#cd7f3273';
    if (x.first === props.myName) return __jsx(GenerateMyRow, {
      name: x.first,
      score: x.second,
      rank: x.third,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      secondary: true,
      pointing: true,
      style: {
        background
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      position: "right",
      name: x.second,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: x.first,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: x.third,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }));
  });
  return rows;
};

const Footer = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
  defaultActivePage: 1,
  firstItem: null,
  lastItem: null,
  pointing: true,
  secondary: true,
  totalPages: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
})));

const Scoreboard = ({
  data
}) => {
  const myName = 'پویا معینی';
  const display = data.some(x => x.first === myName) ? 'none' : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MenuScoreBoard, {
    fluid: true,
    secondary: true,
    pointing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    position: "right",
    name: "\u0627\u0645\u062A\u06CC\u0627\u0632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    name: "\u0646\u0627\u0645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    name: "\u0631\u062A\u0628\u0647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), __jsx(GenerateMyRow, {
    name: myName,
    score: "100",
    rank: "12",
    display: display,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(GenerateRows, {
    data: data,
    myName: myName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scoreboard);

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
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/global/footer.jsx";
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

/***/ "./components/global/globalStyles.js":
/*!*******************************************!*\
  !*** ./components/global/globalStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html {
    height: 100%;
    font-family: IRANSans !important;
  }
  body {
    margin: 0;
    min-height: 100%;
    position: relative;
  }
  .markdown {
    direction: rtl !important;
  }
  .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/global/layout.jsx":
/*!**************************************!*\
  !*** ./components/global/layout.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globalStyles */ "./components/global/globalStyles.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar */ "./components/global/navbar.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./components/global/footer.jsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ "./theme.js");
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/global/layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Layout({
  children,
  hasNavbar,
  hasFooter,
  token
}) {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_globalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), hasNavbar && __jsx(_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    token: token,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      width: '100% !important',
      margin: '0 !important',
      minHeight: '100vh'
    },
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children), hasFooter && __jsx(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/global/navbar.jsx":
/*!**************************************!*\
  !*** ./components/global/navbar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/auth */ "./redux/actions/auth.js");
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/global/navbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Menu = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"]).withConfig({
  displayName: "navbar__Menu",
  componentId: "sc-1ljrvg3-0"
})(["position:", " !important;margin:0 !important;border-radius:0 !important;border:0 !important;border-bottom:", " !important;background-color:", " !important;z-index:", " !important;width:100%;"], props => props.transparent ? 'absolute' : 'relative', props => props.transparent ? '0' : '1px solid #e2e2e2', props => props.transparent ? 'transparent' : 'white', props => props.transparent ? 1 : 0);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"]).withConfig({
  displayName: "navbar__Image",
  componentId: "sc-1ljrvg3-1"
})(["position:absolute;top:50%;transform:translateY(-50%);"]);

function NoAuthNavbar({
  transparent
}) {
  return __jsx(Menu, {
    size: "huge",
    transparent: transparent,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u0648\u0631\u0648\u062F"))), __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u0628\u0644\u0627\u06AF"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBlog"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(Menu.Menu, {
    position: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Menu.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 42
    },
    __self: this
  })))));
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_7__["logoutAction"])())
  };
}

const AuthNavbar = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(({
  logout,
  transparent
}) => {
  return __jsx(Menu, {
    size: "huge",
    transparent: transparent,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: e => {
      e.preventDefault();
      logout();
    },
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "\u062E\u0631\u0648\u062C")), __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    href: "/dashboard/tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "\u0645\u0646\u0627\u0628\u0639"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBook"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  })), __jsx(Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("a", {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "\u0628\u0644\u0627\u06AF"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    style: {
      marginLeft: '0.5rem'
    },
    color: "#1d93f7",
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBlog"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx(Menu.Menu, {
    position: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(Menu.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("a", {
    href: "/dashboard/tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(Image, {
    style: {
      marginRight: '1rem',
      marginTop: '2rem'
    },
    size: "mini",
    src: "/images/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  })))));
});

function Navbar({
  token,
  transparent
}) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(token)) {
    return __jsx(NoAuthNavbar, {
      transparent: transparent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    });
  }

  return __jsx(AuthNavbar, {
    transparent: transparent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/auth */ "./redux/actions/auth.js");








var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/components/global/withAuth.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











function getSSRToken(headerCookies) {
  let token = '';

  lodash__WEBPACK_IMPORTED_MODULE_8___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.split(headerCookies, ' '), headerCookie => {
    const key = headerCookie.split('=')[0];

    const value = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.replace(headerCookie.split('=')[1], ';', '');

    if (key === 'token' && value !== '%5Bobject%20Object%5D') {
      token = value;
    }
  });

  return token;
}

function withAuth(loggedIn) {
  return WrappedComponent => {
    class Wrapper extends react__WEBPACK_IMPORTED_MODULE_12__["Component"] {
      static async getInitialProps(ctx) {
        const {
          store,
          isServer,
          req
        } = ctx;
        const token = isServer ? getSSRToken(req.headers.cookie) : js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token');
        await store.dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_16__["authorizeAction"])(token));
        const pageProps = (await WrappedComponent.getInitialProps) && (await WrappedComponent.getInitialProps(ctx, token));
        return _objectSpread({}, pageProps, {
          isServer
        });
      }

      render() {
        const {
          page,
          auth
        } = this.props;
        const pageLoading = page.loading || auth.authorized && !loggedIn || !auth.authorized && loggedIn;

        if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(loggedIn)) {
          return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }));
        }

        if (!auth.authorized && loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login', '/login', {
            shallow: false
          });
        }

        if (auth.authorized && !loggedIn) {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/dashboard/tasks', '/dashboard/tasks', {
            shallow: false
          });
        }

        return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "DataDays 2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dimmer"], {
          active: pageLoading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_15__["ClipLoader"], {
          size: 75,
          color: "#fff",
          loading: pageLoading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })), __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        })));
      }

    }

    function mapStateToProps(state, ownProps) {
      const {
        page,
        auth
      } = state;
      return {
        page,
        auth
      };
    }

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, null)(Wrapper);
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

/***/ "./pages/scoreboard/index.jsx":
/*!************************************!*\
  !*** ./pages/scoreboard/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_scoreboard_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard/scoreboard/index */ "./components/dashboard/scoreboard/index.jsx");
/* harmony import */ var _semantic_dist_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.semantic/dist/semantic.rtl.min.css */ "./.semantic/dist/semantic.rtl.min.css");
/* harmony import */ var _semantic_dist_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_semantic_dist_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout.jsx");
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var _redux_api_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/api/dashboard */ "./redux/api/dashboard.js");
var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/pages/scoreboard/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class MainScoreboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(ctx, token) {
    let milestoneID = 100;
    let startIndex = 1;
    let endIndex = 50;
    const res = await Object(_redux_api_dashboard__WEBPACK_IMPORTED_MODULE_5__["scoreboardAPI"])(startIndex, endIndex, milestoneID, token);
    const {
      milestone
    } = res.data;
    const {
      scoreboard
    } = res.data;
    const {
      tasks
    } = res.data;
    return {
      milestone,
      scoreboard,
      tasks
    };
  }

  render() {
    const {
      milestone,
      scoreboard,
      tasks
    } = this.props;
    return __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasNavbar: true,
      hasFooter: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_components_dashboard_scoreboard_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      milestone: milestone,
      teams: scoreboard,
      tasks: tasks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(true)(MainScoreboard));

/***/ }),

/***/ "./public/static/locales/test-scoreboard/scoreboard.json":
/*!***************************************************************!*\
  !*** ./public/static/locales/test-scoreboard/scoreboard.json ***!
  \***************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"first\":\"احمد احمدی\",\"second\":20,\"third\":1},{\"first\":\"رضا رضایی\",\"second\":100,\"third\":2},{\"first\":\"شهلا شهلایی\",\"second\":90,\"third\":3},{\"first\":\"پویا پویایی\",\"second\":90,\"third\":4},{\"first\":\"مریم مریمی\",\"second\":25,\"third\":5},{\"first\":\"تیمور لنگ\",\"second\":90,\"third\":6},{\"first\":\"سهراب سپهری\",\"second\":100,\"third\":7},{\"first\":\"مرتضی مطهری\",\"second\":120,\"third\":8},{\"first\":\"احمد احمدی\",\"second\":20,\"third\":9},{\"first\":\"رضا رضایی\",\"second\":100,\"third\":10},{\"first\":\"شهلا شهلایی\",\"second\":90,\"third\":11},{\"first\":\"پویا پویایی\",\"second\":90,\"third\":12},{\"first\":\"مریم مریمی\",\"second\":25,\"third\":13},{\"first\":\"تیمور لنگ\",\"second\":90,\"third\":14},{\"first\":\"پویا معینی\",\"second\":100,\"third\":15},{\"first\":\"مرتضی مطهری\",\"second\":120,\"third\":16},{\"first\":\"نیمایوشیج\",\"second\":120,\"third\":17}]");

/***/ }),

/***/ "./redux/actions/auth.js":
/*!*******************************!*\
  !*** ./redux/actions/auth.js ***!
  \*******************************/
/*! exports provided: LOGIN_CLEAR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_CHECK, SET_AUTH, LOGOUT, loginClearAction, loginCheckerAction, loginAction, authorizeAction, logoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CLEAR", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CHECK", function() { return LOGIN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH", function() { return SET_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginClearAction", function() { return loginClearAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCheckerAction", function() { return loginCheckerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorizeAction", function() { return authorizeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth */ "./redux/api/auth.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./redux/actions/page.js");



const LOGIN_CLEAR = 'LOGIN_CLEAR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_CHECK = 'LOGIN_CHECK';
const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT';
function loginClearAction() {
  return {
    type: LOGIN_CLEAR
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
    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__["pageLoadingAction"])(true));
    dispatch(loginClearAction());
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
          dispatch(loginSuccessAction(data.access));
          dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__["pageLoadingAction"])(false));
        } else {
          dispatch(loginFailAction(data.detail));
          dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__["pageLoadingAction"])(false));
        }
      });
    } else {
      dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_2__["pageLoadingAction"])(false));
    }
  };
}

function setAuthAction(auth) {
  return {
    type: SET_AUTH,
    payload: {
      auth
    }
  };
}

function authorizeAction(token) {
  return dispatch => {
    return Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["authAPI"])(token).then(res => {
      if (res.data.status_code !== 200) {
        dispatch(setAuthAction(false));
        return false;
      }

      dispatch(setAuthAction(true));
      return true;
    });
  };
}
function logoutAction() {
  return {
    type: LOGOUT
  };
}

/***/ }),

/***/ "./redux/actions/page.js":
/*!*******************************!*\
  !*** ./redux/actions/page.js ***!
  \*******************************/
/*! exports provided: PAGE_LOADING, pageLoadingAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOADING", function() { return PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoadingAction", function() { return pageLoadingAction; });
const PAGE_LOADING = 'PAGE_LOADING';
function pageLoadingAction(loading) {
  return {
    type: PAGE_LOADING,
    payload: {
      loading
    }
  };
}

/***/ }),

/***/ "./redux/api/auth.js":
/*!***************************!*\
  !*** ./redux/api/auth.js ***!
  \***************************/
/*! exports provided: loginAPI, authAPI, forgotAPI, resetAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAPI", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authAPI", function() { return authAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotAPI", function() { return forgotAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAPI", function() { return resetAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


const LOGIN = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/login/`;
const AUTH = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/profile/`;
const FORGOT = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/password/reset/`;
const RESET = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/password/reset/confirm/`;
function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(LOGIN, data);
}
function authAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(AUTH, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
function forgotAPI(email) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(FORGOT, email);
}
function resetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(RESET, data);
}

/***/ }),

/***/ "./redux/api/dashboard.js":
/*!********************************!*\
  !*** ./redux/api/dashboard.js ***!
  \********************************/
/*! exports provided: profileUpdateAPI, profileAPI, taskListAPI, taskAPI, contestAPI, milestoneAPI, scoreboardAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateAPI", function() { return profileUpdateAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAPI", function() { return profileAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskListAPI", function() { return taskListAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskAPI", function() { return taskAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contestAPI", function() { return contestAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milestoneAPI", function() { return milestoneAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreboardAPI", function() { return scoreboardAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


const PROFILE_API = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/accounts/profile`;
function profileUpdateAPI(data, token) {
  console.log("#$%#%^%^#^#");
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(PROFILE_API, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
function profileAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(PROFILE_API, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

const TASK = id => `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/resources/${id}`;

const TASK_LIST = `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/resources`;
function taskListAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
function taskAPI(id, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

const CONTEST = id => `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/contest/${id}`;

const MILESTONE = (contestID, milestoneID) => `${___WEBPACK_IMPORTED_MODULE_1__["default"]}/contest/${contestID}/${milestoneID}/`;

function contestAPI(contestId, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(CONTEST(contestId), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
function milestoneAPI(contestID, milestoneID, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(MILESTONE(contestID, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
const SCOREBOARD_BASE_ADD = "http://81.31.170.5:8000";

const SCOREBOARD = (start_index, end_index, ms_id) => `${SCOREBOARD_BASE_ADD}/scoreboard/?start_index=${start_index}
&end_index=${end_index}&ms_id=${ms_id}`;

function scoreboardAPI(startIndex, endIndex, milestoneID, token) {
  console.log("start_index", startIndex);
  console.log("end_index:", endIndex);
  console.log("ms_id:", milestoneID); // return `${BASE_ADDR}/scoreboard/team_score`;

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(SCOREBOARD(startIndex, endIndex, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // const BASE_ADDR = 'http://37.152.190.92/test/api';

const BASE_ADDR = 'http://81.31.170.5/api'; // const BASE_ADDR = 'https://datadays.sharif.edu/api';

const TERMS = `${BASE_ADDR}/terms`;
const BASE = 'https://datadays.sharif.edu';
function termsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TERMS);
}
/* harmony default export */ __webpack_exports__["default"] = (BASE_ADDR);

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96, 120],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
});

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./pages/scoreboard/index.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bahar/Desktop/TheFrontEnd/pages/scoreboard/index.jsx */"./pages/scoreboard/index.jsx");


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

/***/ "dom-helpers":
/*!******************************!*\
  !*** external "dom-helpers" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

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
//# sourceMappingURL=scoreboard.js.map