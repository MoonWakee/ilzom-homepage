"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 5912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);
/* harmony import */ var _useWarnings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5881);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6754);
/* harmony import */ var _utils_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4285);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1838);







const useSubmit = (formType)=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .AppContext */ .I);
    const { triggerToast  } = (0,_useWarnings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: submissionTextUpdates , 1: setSubmissionTextUpdates  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: submissionPendingStatus , 1: setSubmissionPendingStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const submitCohortApplication = async ()=>{
        try {
            setSubmissionPendingStatus(!submissionPendingStatus);
            setSubmissionTextUpdates("Awaiting signature..");
            const signature = await (0,_utils_web3__WEBPACK_IMPORTED_MODULE_5__/* .getSignature */ .o$)(context.ethersProvider);
            if (signature) {
                setSubmissionTextUpdates("Verifying..");
                await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .submitApplicationToAirtable */ .vB)(context, signature);
                setSubmissionTextUpdates("Sending..");
                await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .submitApplicationToMongo */ .at)(context, signature);
                setSubmissionTextUpdates("Notifying..");
                await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .notifyApplicationSubmission */ .cQ)(context, signature);
            }
            setSubmissionPendingStatus(!submissionPendingStatus);
            context.updateStage("next");
        } catch (err) {
            setSubmissionPendingStatus(!submissionPendingStatus);
        }
    };
    const submitConsultationApplication = async ()=>{
        try {
            if (context.signerAddress && context.chainId !== 100) {
                triggerToast("Please switch to the Gnosis Network.");
                return;
            }
            //if member
            if (context.chainId === 100 && context.isMember) {
                setSubmissionPendingStatus((prevState)=>!prevState);
                setSubmissionTextUpdates("Sending request..");
                await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .submitConsultationToAirtable */ .X6)({
                    ...context,
                    h_submissionHash: null
                });
                const record = await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .submitConsultationToMongo */ .gR)({
                    ...context,
                    h_submissionHash: null
                });
                setSubmissionTextUpdates("Notifying..");
                await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .notifyConsultationRequest */ .Cl)({
                    ...context,
                    h_id: record._id,
                    h_submissionHash: null
                });
                setSubmissionPendingStatus((prevState)=>!prevState);
                context.updateStage("next");
            }
            // if not a member
            if (context.chainId === 100 && !context.isMember) {
                setSubmissionPendingStatus((prevState)=>!prevState);
                setSubmissionTextUpdates("Checking Balance..");
                const tokenBalance = await (0,_utils_web3__WEBPACK_IMPORTED_MODULE_5__/* .balanceOf */ .jA)(context.ethersProvider, _config__WEBPACK_IMPORTED_MODULE_6__/* .RAID_CONTRACT_ADDRESS */ .hT[context.chainId], context.signerAddress);
                if (ethers__WEBPACK_IMPORTED_MODULE_1__.utils.formatEther(tokenBalance) < _config__WEBPACK_IMPORTED_MODULE_6__/* .SUBMISSION_REQUEST_FEE */ .eG) {
                    context.updateAlertModalStatus();
                    setSubmissionPendingStatus((prevState)=>!prevState);
                    return;
                }
                setSubmissionTextUpdates("Paying..");
                const tx = await (0,_utils_web3__WEBPACK_IMPORTED_MODULE_5__/* .payWithRaidToken */ .wk)(_config__WEBPACK_IMPORTED_MODULE_6__/* .RAID_CONTRACT_ADDRESS */ .hT[context.chainId], context.ethersProvider, _config__WEBPACK_IMPORTED_MODULE_6__/* .DAO_ADDRESS */ .xn[context.chainId], context.web3.utils.toWei(_config__WEBPACK_IMPORTED_MODULE_6__/* .SUBMISSION_REQUEST_FEE.toString */ .eG.toString()));
                if (tx) {
                    const { status  } = await tx.wait();
                    if (status === 1) {
                        setSubmissionTextUpdates("Sending request..");
                        await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .submitConsultationToAirtable */ .X6)({
                            ...context,
                            h_submissionHash: tx.hash
                        });
                        await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .submitConsultationToMongo */ .gR)({
                            ...context,
                            h_submissionHash: tx.hash
                        });
                        setSubmissionTextUpdates("Notifying..");
                        await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .notifyConsultationRequest */ .Cl)({
                            ...context,
                            h_submissionHash: tx.hash
                        });
                        setSubmissionPendingStatus((prevState)=>!prevState);
                        context.updateStage("next");
                    } else {
                        (0,_useWarnings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("Error paying for submission.");
                        setSubmissionPendingStatus((prevState)=>!prevState);
                        return;
                    }
                } else {
                    (0,_useWarnings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("Error paying for submission.");
                    setSubmissionPendingStatus((prevState)=>!prevState);
                    return;
                }
            }
        } catch (err) {
            console.log(err);
            setSubmissionPendingStatus((prevState)=>!prevState);
        }
    };
    const bookConsultation = async (submissionHash, airtableRecordId)=>{
        try {
            if (context.signerAddress && context.chainId !== 100) {
                triggerToast("Please switch to the Gnosis Network.");
                return;
            }
            if (context.chainId === 100) {
                setSubmissionTextUpdates("Checking Balance..");
                const tokenBalance = await (0,_utils_web3__WEBPACK_IMPORTED_MODULE_5__/* .balanceOf */ .jA)(context.ethersProvider, _config__WEBPACK_IMPORTED_MODULE_6__/* .RAID_CONTRACT_ADDRESS */ .hT[context.chainId], context.signerAddress);
                if (ethers__WEBPACK_IMPORTED_MODULE_1__.utils.formatEther(tokenBalance) < _config__WEBPACK_IMPORTED_MODULE_6__/* .CONSULTATION_REQUEST_FEE */ .bZ) {
                    context.updateAlertModalStatus();
                    return;
                }
                setSubmissionTextUpdates("Paying..");
                const tx = await (0,_utils_web3__WEBPACK_IMPORTED_MODULE_5__/* .payWithRaidToken */ .wk)(_config__WEBPACK_IMPORTED_MODULE_6__/* .RAID_CONTRACT_ADDRESS */ .hT[context.chainId], context.ethersProvider, _config__WEBPACK_IMPORTED_MODULE_6__/* .DAO_ADDRESS */ .xn[context.chainId], context.web3.utils.toWei(_config__WEBPACK_IMPORTED_MODULE_6__/* .CONSULTATION_REQUEST_FEE.toString */ .bZ.toString()));
                if (tx) {
                    const { status  } = await tx.wait();
                    if (status === 1) {
                        context.setWeb3Data({
                            h_consultationHash: tx.hash
                        });
                        setSubmissionTextUpdates("Updating records..");
                        await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .updateConsultationToAirtable */ .lN)(airtableRecordId, tx.hash);
                        await (0,_utils_requests__WEBPACK_IMPORTED_MODULE_4__/* .updateConsultationToMongo */ .Gx)(submissionHash, tx.hash);
                    } else {
                        (0,_useWarnings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("Error paying for consultation.");
                        return;
                    }
                } else {
                    (0,_useWarnings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("Error paying for consultation.");
                    return;
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    const submitApplication = async ()=>{
        if (formType === "join") submitCohortApplication();
        if (formType === "hire") submitConsultationApplication();
    };
    return {
        submissionTextUpdates,
        submissionPendingStatus,
        submitApplication,
        bookConsultation
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSubmit);


/***/ }),

/***/ 5881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const useWarnings = ()=>{
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const triggerToast = (message)=>{
        toast({
            duration: 3000,
            position: "top",
            render: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    color: "white",
                    p: 3,
                    bg: "basedarker",
                    fontFamily: "jetbrains",
                    textAlign: "center",
                    children: message
                })
        });
    };
    return {
        triggerToast
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWarnings);


/***/ }),

/***/ 6754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ds": () => (/* binding */ fetchClientInfoFromAirtable),
  "cQ": () => (/* binding */ notifyApplicationSubmission),
  "Cl": () => (/* binding */ notifyConsultationRequest),
  "vB": () => (/* binding */ submitApplicationToAirtable),
  "at": () => (/* binding */ submitApplicationToMongo),
  "X6": () => (/* binding */ submitConsultationToAirtable),
  "gR": () => (/* binding */ submitConsultationToMongo),
  "rP": () => (/* binding */ updateBidToAirtable),
  "lN": () => (/* binding */ updateConsultationToAirtable),
  "Gx": () => (/* binding */ updateConsultationToMongo)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./utils/helpers.js
const formatJoinUsData = (state, type)=>{
    if (type === "airtable") {
        const data = {
            Name: state.j_name,
            Email: state.j_email,
            Graduation: state.j_graduation,
            Bio: state.j_bio,
            Goals: state.j_goals,
            Discord: state.j_discordHandle,
            Telegram: state.j_telegramHandle,
            Twitter: state.j_twitterHandle,
            Github: state.j_githubHandle,
            "ETH Address": state.signerAddress,
            "ENS Address": state.signerEns,
            "Primary Skills": state.j_primarySkills,
            "Secondary Skills": state.j_secondarySkills,
            Class: state.j_classType,
            Passion: state.j_passion,
            "Favourite Media": state.j_favoriteMedia,
            Thrills: state.j_thrills,
            Interests: state.j_interest,
            "DAO Familiarity": state.j_daoFamiliarity,
            "Crypto Experience": state.j_cryptoExp,
            Availability: state.j_availability,
            Comments: state.j_comments,
            "Handbook Read": state.j_handbookRead,
            "Pledge Readiness": state.j_pledgeReadiness //pledge_readiness
        };
        return data;
    }
    if (type === "mongo") {
        const data1 = {
            name: state.j_name,
            email_address: state.j_email,
            graduation: state.j_graduation,
            introduction: state.j_bio,
            learning_goals: state.j_goals,
            discord_handle: state.j_discordHandle,
            telegram_handle: state.j_telegramHandle,
            twitter_handle: state.j_twitterHandle,
            github_handle: state.j_githubHandle,
            eth_address: state.signerAddress,
            ens_name: state.signerEns,
            primary_skills: state.j_primarySkills,
            secondary_skills: state.j_secondarySkills,
            skill_type: state.j_classType,
            passion: state.j_passion,
            favourite_media: state.j_favoriteMedia,
            crypto_thrills: state.j_thrills,
            why_raidguild: state.j_interest,
            dao_familiarity: state.j_daoFamiliarity,
            crypto_exp: state.j_cryptoExp,
            availability: state.j_availability,
            comments: state.j_comments,
            handbook_read: state.j_handbookRead,
            pledge_readiness: state.j_pledgeReadiness
        };
        return data1;
    }
    if (type === "discord") {
        const data2 = {
            name: state.j_name,
            bio: state.j_bio,
            goals: state.j_goals,
            discord: state.j_discordHandle,
            twitter: state.j_twitterHandle,
            primary_skills: state.j_primarySkills.toString(),
            class_type: state.j_classType,
            passion: state.j_passion,
            crypto_exp: state.j_cryptoExp,
            availability: state.j_availability,
            eth_address: state.signerAddress
        };
        return data2;
    }
};
const formatHireUsData = (state, type)=>{
    if (type === "airtable") {
        const data = {
            Name: state.h_name,
            Address: state.signerAddress,
            Email: state.h_email,
            Bio: state.h_bio,
            Discord: state.h_discordHandle,
            Telegram: state.h_telegramHandle,
            Twitter: state.h_twitterHandle,
            Github: state.h_githubHandle,
            "Project Name": state.h_projectName,
            "Project Type": state.h_projectType,
            "Specs Availability": state.h_specsType,
            "Project Link": state.h_projectLink,
            "Project Description": state.h_projectDesc,
            "Services Needed": state.h_servicesNeeded,
            "Budget Range": state.h_budgetRange,
            "Expected Deadline": state.h_expectedDeadline,
            "Specific Needs": state.h_specificNeed,
            Priorities: state.h_priorities,
            "Submission Hash": state.h_submissionHash
        };
        return data;
    }
    if (type === "mongo") {
        const data1 = {
            contact_name: state.h_name,
            contact_email: state.h_email,
            contact_bio: state.h_bio,
            contact_discord: state.h_discordHandle,
            contact_telegram: state.h_telegramHandle,
            contact_twitter: state.h_twitterHandle,
            contact_github: state.h_githubHandle,
            project_name: state.h_projectName,
            project_type: state.h_projectType,
            project_specs: state.h_specsType,
            specs_link: state.h_projectLink,
            project_desc: state.h_projectDesc,
            services_req: state.h_servicesNeeded,
            budget: state.h_budgetRange,
            desired_delivery: state.h_expectedDeadline,
            additional_info: state.h_specificNeed,
            delivery_priorities: state.h_priorities,
            submission_hash: state.h_submissionHash,
            submission_type: "Paid"
        };
        return data1;
    }
    if (type === "discord") {
        const data2 = {
            name: state.h_name,
            discord: state.h_discordHandle,
            project_name: state.h_projectName,
            project_type: state.h_projectType,
            project_link: state.h_projectLink,
            services_needed: state.h_servicesNeeded,
            budget_range: state.h_budgetRange,
            submission_hash: state.h_submissionHash,
            consultation_id: state.h_id
        };
        return data2;
    }
};

;// CONCATENATED MODULE: ./utils/requests.js



const submitApplicationToMongo = async (state, signature)=>{
    const formattedData = formatJoinUsData(state, "mongo");
    const signedToken = external_jsonwebtoken_default().sign(signature, process.env.NEXT_PUBLIC_JWT_SECRET);
    await external_axios_default().post("/api/join/primary", formattedData, {
        headers: {
            Authorization: "Bearer " + signedToken
        }
    });
};
const submitApplicationToAirtable = async (state, signature)=>{
    const formattedData = formatJoinUsData(state, "airtable");
    const signedToken = external_jsonwebtoken_default().sign(signature, process.env.NEXT_PUBLIC_JWT_SECRET);
    await external_axios_default().post("/api/join/secondary", formattedData, {
        headers: {
            Authorization: "Bearer " + signedToken
        }
    });
};
const notifyApplicationSubmission = async (state, signature)=>{
    const formattedData = formatJoinUsData(state, "discord");
    const signedToken = external_jsonwebtoken_default().sign(signature, process.env.NEXT_PUBLIC_JWT_SECRET);
    await external_axios_default().post("/api/join/notify", formattedData, {
        headers: {
            Authorization: "Bearer " + signedToken
        }
    });
};
const submitConsultationToMongo = async (state)=>{
    const formattedData = formatHireUsData(state, "mongo");
    const { data  } = await external_axios_default().post("/api/hire/primary", formattedData);
    return data;
};
const submitConsultationToAirtable = async (state)=>{
    const formattedData = formatHireUsData(state, "airtable");
    await external_axios_default().post("/api/hire/secondary", formattedData);
};
const updateConsultationToMongo = async (submissionHash, consultationHash)=>{
    const formattedData = {
        submission_hash: submissionHash,
        consultation_hash: consultationHash
    };
    await external_axios_default().post("/api/consult/primary", formattedData);
};
const updateConsultationToAirtable = async (airtableRecordId, consultationHash)=>{
    const formattedData = {
        id: airtableRecordId,
        consultation_hash: consultationHash
    };
    await external_axios_default().post("/api/consult/secondary", formattedData);
};
const updateBidToAirtable = async (airtableRecordId, bidHash, bidAmount)=>{
    const formattedData = {
        id: airtableRecordId,
        bid_hash: bidHash,
        bid_amount: bidAmount
    };
    await external_axios_default().post("/api/consult/bid", formattedData);
};
const notifyConsultationRequest = async (state)=>{
    const formattedData = formatHireUsData(state, "discord");
    await external_axios_default().post("/api/hire/notify", formattedData);
};
const fetchClientInfoFromAirtable = async (signerAddress)=>{
    const signedToken = external_jsonwebtoken_default().sign(signerAddress, process.env.NEXT_PUBLIC_JWT_SECRET);
    const result = await external_axios_default().post("/api/fetch/client", {}, {
        headers: {
            Authorization: "Bearer " + signedToken
        }
    });
    return result;
};


/***/ })

};
;