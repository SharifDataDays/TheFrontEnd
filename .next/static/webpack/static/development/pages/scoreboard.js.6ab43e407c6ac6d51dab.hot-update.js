webpackHotUpdate("static/development/pages/scoreboard.js",{

/***/ "./pages/scoreboard/index.jsx":
/*!************************************!*\
  !*** ./pages/scoreboard/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_dashboard_scoreboard_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dashboard/scoreboard/index */ "./components/dashboard/scoreboard/index.jsx");
/* harmony import */ var _semantic_dist_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../.semantic/dist/semantic.rtl.min.css */ "./.semantic/dist/semantic.rtl.min.css");
/* harmony import */ var _semantic_dist_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_semantic_dist_semantic_rtl_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout.jsx");
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var _redux_api_dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/api/dashboard */ "./redux/api/dashboard.js");







var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/pages/scoreboard/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var MainScoreboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MainScoreboard, _Component);

  function MainScoreboard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MainScoreboard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MainScoreboard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MainScoreboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          milestone = _this$props.milestone,
          scoreboard = _this$props.scoreboard,
          tasks = _this$props.tasks;
      console.log("^^^%^%^%^%^%^%^");
      console.log("milestone:", milestone);
      return __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(_components_dashboard_scoreboard_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, token) {
        var milestoneID, startIndex, endIndex, res, milestone, scoreboard, tasks;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('herererererererererere');
                milestoneID = 100;
                startIndex = 1;
                endIndex = 50;
                _context.next = 6;
                return Object(_redux_api_dashboard__WEBPACK_IMPORTED_MODULE_12__["scoreboardAPI"])(startIndex, endIndex, milestoneID, token);

              case 6:
                res = _context.sent;
                console.log('^^^^^^^^^^^^^^^ res.data');
                console.log(res.data);
                milestone = res.data.milestone;
                scoreboard = res.data.scoreboard;
                tasks = res.data.tasks;
                return _context.abrupt("return", {
                  milestone: milestone,
                  scoreboard: scoreboard,
                  tasks: tasks
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x, _x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MainScoreboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(true)(MainScoreboard)); // const ScoreboardTest = (props) => (
// <Layout>
//   <Scoreboard />
// </Layout>
// );
// export default ScoreboardTest;

/***/ })

})
//# sourceMappingURL=scoreboard.js.6ab43e407c6ac6d51dab.hot-update.js.map