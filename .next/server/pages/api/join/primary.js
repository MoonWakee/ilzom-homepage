"use strict";
(() => {
var exports = {};
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 9823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares_withToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5241);



const handler = async (req, res)=>{
    const { method  } = req;
    if (method !== "POST") {
        return res.status(405).json("Method not allowed");
    }
    if (req.method === "POST") {
        try {
            const token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign)(req.body, process.env.JWT_SECRET);
            await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${process.env.DM_ENDPOINT}/create/application`, req.body, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            res.status(201).json(req.body);
        } catch (err) {
            console.error(err);
            res.status(500).json("Internal server error");
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_withToken__WEBPACK_IMPORTED_MODULE_2__/* .withToken */ .e)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [241], () => (__webpack_exec__(9823)));
module.exports = __webpack_exports__;

})();