"use strict";
(() => {
var exports = {};
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 4294:
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ 5867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9593);

const handler = async (req, res)=>{
    const { method  } = req;
    if (method !== "POST") {
        return res.status(405).json("Method not allowed");
    }
    if (req.method === "POST") {
        try {
            const submissions_table = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* .hireTable */ .wj)();
            await submissions_table.create(req.body);
            res.status(201).json(req.body);
        } catch (err) {
            console.log(err);
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
var __webpack_exports__ = __webpack_require__.X(0, [593], () => (__webpack_exec__(5867)));
module.exports = __webpack_exports__;

})();