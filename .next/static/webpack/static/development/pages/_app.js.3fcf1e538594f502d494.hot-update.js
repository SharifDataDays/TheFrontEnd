webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/actions/profile.js":
/*!**********************************!*\
  !*** ./redux/actions/profile.js ***!
  \**********************************/
/*! exports provided: PROFILE_CHECK, PROFILE_SUCCESS, PROFILE_FAIL, profileCheckerAction, profileSuccessAction, profileFailAction, profileUpdateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_CHECK", function() { return PROFILE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SUCCESS", function() { return PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_FAIL", function() { return PROFILE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileCheckerAction", function() { return profileCheckerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSuccessAction", function() { return profileSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFailAction", function() { return profileFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateAction", function() { return profileUpdateAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./redux/actions/page.js");
/* harmony import */ var _api_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/dashboard */ "./redux/api/dashboard.js");



var PROFILE_CHECK = 'PROFILE_CHECK';
var PROFILE_SUCCESS = 'PROFILE_SUCCESS';
var PROFILE_FAIL = 'PROFILE_FAIL';
function profileCheckerAction(fields) {
  return {
    type: PROFILE_CHECK,
    payload: {
      fields: fields
    }
  };
}
function profileSuccessAction() {
  return {
    type: PROFILE_SUCCESS
  };
}
function profileFailAction(errors) {
  return {
    type: PROFILE_FAIL,
    payload: {
      errors: errors
    }
  };
}
function profileUpdateAction(fields, token) {
  return function (dispatch, getState) {
    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_1__["pageLoadingAction"])(true));
    dispatch(profileCheckerAction(fields));

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(getState().profile.errors)) {
      Object(_api_dashboard__WEBPACK_IMPORTED_MODULE_2__["profileUpdateAPI"])(fields, token).then(function (res) {
        var data = res.data;

        if (data.status_code === 200) {
          dispatch(profileSuccessAction());
        } else {
          dispatch(profileFailAction(data.detail));
        }
      });
    }

    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_1__["pageLoadingAction"])(false));
  };
}

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./redux/reducers/page.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./redux/reducers/auth.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./redux/reducers/signup.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./redux/reducers/profile.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  page: _page__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  signup: _signup__WEBPACK_IMPORTED_MODULE_3__["default"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./redux/reducers/profile.js":
/*!***********************************!*\
  !*** ./redux/reducers/profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profileReducers; });
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/profile */ "./redux/actions/profile.js");
/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initialState */ "./redux/store/initialState.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");




function profileCheckerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_initialState__WEBPACK_IMPORTED_MODULE_1__["default"].profile;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    var fields = action.payload.fields; // todo
  });
} // todo


function profileFailReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_initialState__WEBPACK_IMPORTED_MODULE_1__["default"].profile;
  var action = arguments.length > 1 ? arguments[1] : undefined;
} // todo


function profileSuccessReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_initialState__WEBPACK_IMPORTED_MODULE_1__["default"].profile;
  var action = arguments.length > 1 ? arguments[1] : undefined;
}

function profileReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_initialState__WEBPACK_IMPORTED_MODULE_1__["default"].profile;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_profile__WEBPACK_IMPORTED_MODULE_0__["PROFILE_CHECK"]:
      return profileCheckerReducer(state, action);

    case _actions_profile__WEBPACK_IMPORTED_MODULE_0__["PROFILE_FAIL"]:
      return profileFailReducer(state, action);

    case _actions_profile__WEBPACK_IMPORTED_MODULE_0__["PROFILE_SUCCESS"]:
      return profileSuccessReducer(state, action);

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.3fcf1e538594f502d494.hot-update.js.map