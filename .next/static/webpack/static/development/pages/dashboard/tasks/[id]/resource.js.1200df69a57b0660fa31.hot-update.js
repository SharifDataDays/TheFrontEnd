webpackHotUpdate("static/development/pages/dashboard/tasks/[id]/resource.js",{

/***/ "./pages/dashboard/tasks/[id]/resource.jsx":
/*!*************************************************!*\
  !*** ./pages/dashboard/tasks/[id]/resource.jsx ***!
  \*************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/dashboard/layout */ "./components/dashboard/layout.jsx");
/* harmony import */ var _components_dashboard_resources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/dashboard/resources */ "./components/dashboard/resources/index.jsx");
/* harmony import */ var _components_dashboard_resources_notFound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/dashboard/resources/notFound */ "./components/dashboard/resources/notFound.jsx");
/* harmony import */ var _redux_actions_tasks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../redux/actions/tasks */ "./redux/actions/tasks.js");







var _jsxFileName = "/Users/parsa/Desktop/everything/projects/ongoing/DataDays/TheFrontEnd/pages/dashboard/tasks/[id]/resource.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;










var ResourcesPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ResourcesPage, _Component);

  function ResourcesPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ResourcesPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ResourcesPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ResourcesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          load = _this$props.load,
          id = _this$props.id;
      load(id);
    }
  }, {
    key: "render",
    value: function render() {
      var tasks = this.props.tasks;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      }, "DataDays 2020")), __jsx(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(tasks.current) ? __jsx(_components_dashboard_resources_notFound__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }) : __jsx(_components_dashboard_resources__WEBPACK_IMPORTED_MODULE_13__["default"], {
        content: tasks.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  id: ctx.query.id
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ResourcesPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

function mapStateToProps(state, ownProps) {
  var tasks = state.tasks;
  return {
    tasks: tasks
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load: function load(id) {
      return dispatch(Object(_redux_actions_tasks__WEBPACK_IMPORTED_MODULE_15__["loadTaskAction"])(id));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(true)(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(ResourcesPage)));

/***/ })

})
//# sourceMappingURL=resource.js.1200df69a57b0660fa31.hot-update.js.map