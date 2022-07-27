"use strict";
(() => {
var exports = {};
exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 4294:
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9593);


const handler = async (req, res)=>{
    const { method  } = req;
    if (method !== "POST") {
        return res.status(405).json("Method not allowed");
    }
    const auth_header = req.headers.authorization;
    const token = auth_header && auth_header.split(" ")[1];
    if (token == null) return res.status(401).json("Not Authenticated.");
    let signerAddress = "";
    (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, process.env.JWT_SECRET, (err, address)=>{
        if (err) return res.status(401).json("Invalid Token.");
        signerAddress = address;
    });
    try {
        const hire_table = await (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .hireTable */ .wj)();
        const records = await hire_table.select({
            filterByFormula: `Address = "${signerAddress}"`
        }).firstPage();
        res.status(201).json(records);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
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
var __webpack_exports__ = __webpack_require__.X(0, [593], () => (__webpack_exec__(9268)));
module.exports = __webpack_exports__;

})();