webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/index.jsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.jsx ***!
  \***********************************/
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
/* harmony import */ var _components_dashboard_main_milestones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dashboard/main/milestones */ "./components/dashboard/main/milestones.jsx");
/* harmony import */ var _redux_api_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/api/dashboard */ "./redux/api/dashboard.js");
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout.jsx");







var _jsxFileName = "/Users/Saba/Desktop/Front2/TheFrontEnd/pages/dashboard/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Dashboard, _Component);

  function Dashboard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Dashboard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Dashboard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          milestones = _this$props.milestones,
          contest = _this$props.contest;
      return __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        token: token,
        hasNavbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(_components_dashboard_main_milestones__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contest: contest,
        milestones: milestones,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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
        var contestNumber, res, contest, milestones, id, _res, milestone;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                contestNumber = 3;
                console.log(token);
                _context.next = 4;
                return Object(_redux_api_dashboard__WEBPACK_IMPORTED_MODULE_9__["contestAPI"])(contestNumber, token);

              case 4:
                res = _context.sent;
                contest = res.data.contest;
                console.log(res);
                console.log("##@#%@$^#%^#%^#");
                console.log(contest);
                milestones = [];
                id = 0;

              case 11:
                if (!(id < contest.milestones.length)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 14;
                return Object(_redux_api_dashboard__WEBPACK_IMPORTED_MODULE_9__["milestoneAPI"])(contestNumber, contest.milestones[id], token);

              case 14:
                _res = _context.sent;
                milestone = _res.data.milestone;
                console.log(milestone);
                milestones.push(milestone);

              case 18:
                id++;
                _context.next = 11;
                break;

              case 21:
                return _context.abrupt("return", {
                  contest: contest,
                  milestones: milestones
                });

              case 22:
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

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(true)(Dashboard));

/***/ })

})
//# sourceMappingURL=dashboard.js.f8476afe343711ac0fbc.hot-update.js.map