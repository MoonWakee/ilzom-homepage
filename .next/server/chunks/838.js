"use strict";
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rp": () => (/* binding */ INFURA_ID),
/* harmony export */   "bZ": () => (/* binding */ CONSULTATION_REQUEST_FEE),
/* harmony export */   "eG": () => (/* binding */ SUBMISSION_REQUEST_FEE),
/* harmony export */   "hT": () => (/* binding */ RAID_CONTRACT_ADDRESS),
/* harmony export */   "qh": () => (/* binding */ GA_ID),
/* harmony export */   "xn": () => (/* binding */ DAO_ADDRESS)
/* harmony export */ });
/* unused harmony exports joinTable, hireTable, SUBGRAPH_URL, BLOCK_EXPLORER_URL, RG_XDAI_DAO, explorerUrls */
const airtable = __webpack_require__(4294);
const joinTable = async ()=>{
    airtable.configure({
        endpointUrl: "https://api.airtable.com",
        apiKey: process.env.API_KEY
    });
    const base = airtable.base(process.env.JOINUS_BASE_ID);
    const submissions_table = base("Submissions");
    return submissions_table;
};
const hireTable = async ()=>{
    airtable.configure({
        endpointUrl: "https://api.airtable.com",
        apiKey: process.env.API_KEY
    });
    const base = airtable.base(process.env.JOINUS_BASE_ID);
    const hire_table = base("Hire");
    return hire_table;
};
const devMode = process.env.NEXT_PUBLIC_ENV_MODE === "production" ? false : true;
const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const RAID_CONTRACT_ADDRESS = {
    100: "0x18e9262e68cc6c6004db93105cc7c001bb103e49"
};
const DAO_ADDRESS = {
    100: devMode ? "0x26ff888b86d18793fb1420f2a4108c19bfc65a6e" : "0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f"
};
const SUBGRAPH_URL = {
    4: "https://api.thegraph.com/subgraphs/name/slgraham/guildauctionqueues-rinkeby",
    100: "https://api.thegraph.com/subgraphs/name/slgraham/guildauctionqueues-xdai"
};
const BLOCK_EXPLORER_URL = {
    4: "https://rinkeby.etherscan.io/",
    100: "https://blockscout.com/xdai/mainnet/"
};
const SUBMISSION_REQUEST_FEE = devMode ? 0.001 : 500;
const CONSULTATION_REQUEST_FEE = devMode ? 0.001 : 15000;
const RG_XDAI_DAO = "0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f".toLowerCase();
const explorerUrls = {
    1: "https://etherscan.io",
    4: "https://rinkeby.etherscan.io",
    42: "https://kovan.etherscan.io",
    100: "https://blockscout.com/poa/xdai"
};


/***/ })

};
;