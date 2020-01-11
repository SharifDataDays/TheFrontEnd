webpackHotUpdate("static/development/pages/dashboard/profile.js",{

/***/ "./redux/actions/profile.js":
/*!**********************************!*\
  !*** ./redux/actions/profile.js ***!
  \**********************************/
/*! exports provided: PROFILE_CHECK, PROFILE_SUCCESS, PROFILE_FAIL, PROFILE_CLEAR, profileClearAction, profileCheckerAction, profileSuccessAction, profileFailAction, profileUpdateAction, passwordUpdateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_CHECK", function() { return PROFILE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SUCCESS", function() { return PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_FAIL", function() { return PROFILE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_CLEAR", function() { return PROFILE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileClearAction", function() { return profileClearAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileCheckerAction", function() { return profileCheckerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSuccessAction", function() { return profileSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFailAction", function() { return profileFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateAction", function() { return profileUpdateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdateAction", function() { return passwordUpdateAction; });
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page */ "./redux/actions/page.js");
/* harmony import */ var _api_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/dashboard */ "./redux/api/dashboard.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




var PROFILE_CHECK = 'PROFILE_CHECK';
var PROFILE_SUCCESS = 'PROFILE_SUCCESS';
var PROFILE_FAIL = 'PROFILE_FAIL';
var PROFILE_CLEAR = 'PROFILE_CLEAR';
function profileClearAction() {
  return {
    type: PROFILE_CLEAR
  };
}
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
    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_8__["pageLoadingAction"])(true));
    dispatch(profileCheckerAction(fields));
    fields = _objectSpread({}, fields.profile);

    if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(getState().profile.errors)) {
      console.log(fields);
      console.log(token);
      Object(_api_dashboard__WEBPACK_IMPORTED_MODULE_9__["profileUpdateAPI"])(fields, token).then(function (res) {
        var data = res.data;
        console.log(data);

        if (data.status_code === 200) {
          dispatch(profileSuccessAction());
        } else {
          dispatch(profileFailAction(data.detail));
        }
      });
    } else {
      dispatch(profileFailAction({}));
    }

    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_8__["pageLoadingAction"])(false));
  };
}
function passwordUpdateAction(fields, token) {
  return function (dispatch, getState) {
    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_8__["pageLoadingAction"])(true));
    dispatch(profileCheckerAction(fields));
    fields = _objectSpread({}, fields.password);
    console.log(fields);

    if (fields.new_password1 != '' && !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isUndefined(fields.new_password1)) {
      if (lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(getState().profile.errors)) {
        console.log(fields);
        console.log(token);
        Object(_api_dashboard__WEBPACK_IMPORTED_MODULE_9__["passwordUpdateAPI"])(fields, token).then(function (res) {
          var data = res.data;
          console.log(data);

          if (data.status_code === 200) {
            dispatch(profileSuccessAction());
          } else {
            dispatch(profileFailAction(data.detail));
          }
        });
      } else {
        dispatch(profileFailAction({}));
      }
    }

    dispatch(Object(_page__WEBPACK_IMPORTED_MODULE_8__["pageLoadingAction"])(false));
  };
}

/***/ })

})
//# sourceMappingURL=profile.js.58ffa250a039a3a470e1.hot-update.js.map