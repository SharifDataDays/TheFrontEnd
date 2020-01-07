webpackHotUpdate("static/development/pages/dashboard/profile.js",{

/***/ "./pages/dashboard/profile.jsx":
/*!*************************************!*\
  !*** ./pages/dashboard/profile.jsx ***!
  \*************************************/
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
/* harmony import */ var _components_dashboard_profile_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dashboard/profile/Container */ "./components/dashboard/profile/Container.jsx");
/* harmony import */ var _redux_api_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/api/dashboard */ "./redux/api/dashboard.js");
/* harmony import */ var _components_global_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/global/withAuth */ "./components/global/withAuth.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/profile */ "./redux/actions/profile.js");
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout.jsx");







var _jsxFileName = "/Users/bahar/Desktop/TheFrontEnd/pages/dashboard/profile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var ProfilePage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProfilePage, _Component);

  function ProfilePage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProfilePage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ProfilePage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfilePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var clear = this.props.clear;
      clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          profileData = _this$props.profileData,
          token = _this$props.token,
          update = _this$props.update,
          profile = _this$props.profile;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        token: token,
        hasNavbar: true,
        hasFooter: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_components_dashboard_profile_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        profile: profile,
        profileData: profileData,
        token: token,
        update: update,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), ";"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, token) {
        var res, profileData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_redux_api_dashboard__WEBPACK_IMPORTED_MODULE_9__["profileAPI"])(token);

              case 2:
                res = _context.sent;
                profileData = res.data;
                return _context.abrupt("return", {
                  profileData: profileData,
                  token: token
                });

              case 5:
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

  return ProfilePage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function mapStateToProps(state, ownProps) {
  var profile = state.profile;
  return {
    profile: profile
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    update: function update(fields, token) {
      dispatch(Object(_redux_actions_profile__WEBPACK_IMPORTED_MODULE_12__["profileUpdateAction"])(fields, token));
    },
    clear: function clear() {
      dispatch(Object(_redux_actions_profile__WEBPACK_IMPORTED_MODULE_12__["profileClearAction"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_global_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(true)(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(ProfilePage)));

/***/ })

})
//# sourceMappingURL=profile.js.167cf63758bc434fd53e.hot-update.js.map