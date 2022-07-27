"use strict";
(() => {
var exports = {};
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


const handler = async (req, res)=>{
    const { method  } = req;
    if (method !== "POST") {
        return res.status(405).json("Method not allowed");
    }
    if (req.method === "POST") {
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({}, process.env.JWT_SECRET, {
            expiresIn: 5 * 60
        });
        try {
            await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${process.env.SENTRY_WEBHOOK}/hireus-v2/submission`, req.body, {
                headers: {
                    authorization: "Bearer " + token
                }
            });
            res.status(201).json(req.body);
        } catch (err) {
            console.error(err);
            res.status(500).json("Internal server error");
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1547));
module.exports = __webpack_exports__;

})();