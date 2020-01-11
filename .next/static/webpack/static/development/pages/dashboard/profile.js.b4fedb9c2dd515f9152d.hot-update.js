webpackHotUpdate("static/development/pages/dashboard/profile.js",{

/***/ "./redux/api/dashboard.js":
/*!********************************!*\
  !*** ./redux/api/dashboard.js ***!
  \********************************/
/*! exports provided: passwordUpdateAPI, profileUpdateAPI, profileAPI, taskListAPI, taskAPI, contestAPI, milestoneAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdateAPI", function() { return passwordUpdateAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateAPI", function() { return profileUpdateAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAPI", function() { return profileAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskListAPI", function() { return taskListAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskAPI", function() { return taskAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contestAPI", function() { return contestAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milestoneAPI", function() { return milestoneAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


var PROFILE_API = "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/accounts/profile");
var PASSWORD_RESET_API = "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/accounts/password/change/");
function passwordUpdateAPI(data, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(PASSWORD_RESET_API, data, {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}
function profileUpdateAPI(data, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(PROFILE_API, data, {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}
function profileAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(PROFILE_API, {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}

var TASK = function TASK(id) {
  return "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/resources/").concat(id);
};

var TASK_LIST = "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/resources");
function taskListAPI(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TASK_LIST, {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}
function taskAPI(id, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(TASK(id), {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}

var CONTEST = function CONTEST(id) {
  return "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/contest/").concat(id);
};

var MILESTONE = function MILESTONE(contestID, milestoneID) {
  return "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/contest/").concat(contestID, "/").concat(milestoneID, "/");
};

function contestAPI(contestId, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(CONTEST(contestId), {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}
function milestoneAPI(contestID, milestoneID, token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(MILESTONE(contestID, milestoneID), {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}

/***/ })

})
//# sourceMappingURL=profile.js.b4fedb9c2dd515f9152d.hot-update.js.map