webpackHotUpdate("static/development/pages/scoreboard.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./redux/api/index.js");


var PROFILE_API = "".concat(___WEBPACK_IMPORTED_MODULE_1__["default"], "/accounts/profile");
function profileUpdateAPI(data, token) {
  console.log("#$%#%^%^#^#");
  console.log(data);
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
var SCOREBOARD_BASE_ADD = "http://81.31.170.5:8000"; // const SCOREBOARD = `${SCOREBOARD_BASE_ADD}/scoreboard/`

var SCOREBOARD = function SCOREBOARD(start_index, end_index, ms_id) {
  return "".concat(SCOREBOARD_BASE_ADD, "/scoreboard/?start_index=").concat(start_index, "&end_index=").concat(end_index, "&ms_id=").concat(ms_id);
};

function scoreboardAPI(startIndex, endIndex, milestoneID, token) {
  console.log("start_index", startIndex);
  console.log("end_index:", endIndex);
  console.log("ms_id:", milestoneID); // return `${BASE_ADDR}/scoreboard/team_score`;

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(SCOREBOARD(startIndex, endIndex, milestoneID) //   {
  //   query: {
  //     start_index: startIndex,
  //     end_index: endIndex,
  //     ms_id: milestoneID
  //   }
  // }
  , {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  });
}

/***/ })

})
//# sourceMappingURL=scoreboard.js.97280351a4e1bc910ebf.hot-update.js.map