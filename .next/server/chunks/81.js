"use strict";
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 3842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/signal_fire.a5c7c81b.webp","height":2425,"width":3513,"blurDataURL":"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAQASqWoAAgACAEHyswwAAgEAJuuXDhoAAgAA7XAcigAAIyPtdQCoAGK4y/LElNVEAFZQOCBMAAAA0AEAnQEqCAAGAAJAOCWwAnQBC0uHywAA/rtlbZKT36f+UM9B68EERvPjTL0UBXpE3FO7f8dYAxtVnk/4yVnL9n7a794CKULofnX4AA=="});

/***/ }),

/***/ 2000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FAQ)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2130);
/* harmony import */ var _themes_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1969);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6076);






const FAQ = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .AppContext */ .I);
    const faq_items = context.faqType === "join" ? _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .join_faq_items */ .W5 : _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .hire_faq_items */ .Zu;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        onClose: ()=>context.updateFaqModalStatus(false),
        isOpen: context.faqModalStatus,
        isCentered: true,
        scrollBehavior: "inside",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                        children: "FAQs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                            defaultIndex: [
                                0
                            ],
                            children: faq_items.map((item, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, {
                                    fontFamily: "spaceMono",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionButton, {
                                            color: "purple",
                                            textTransform: "uppercase",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                    flex: "1",
                                                    textAlign: "left",
                                                    children: item.q
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionIcon, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionPanel, {
                                            pb: 4,
                                            children: item.a
                                        })
                                    ]
                                }, index);
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_themes_styled__WEBPACK_IMPORTED_MODULE_4__/* .StyledPrimaryButton */ .Db, {
                            onClick: ()=>{
                                context.updateFaqModalStatus(false);
                            },
                            children: "Close"
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps , getCheckboxProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useRadio)(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        as: "label",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...input
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                ...checkbox,
                cursor: "pointer",
                color: "#7f5af0",
                boxShadow: "md",
                border: "1px solid #7f5af0",
                fontFamily: "'JetBrains Mono', monospace",
                _checked: {
                    bg: "#7f5af0",
                    color: "white",
                    borderColor: "teal.600"
                },
                px: 2,
                py: 2,
                children: props.children
            })
        ]
    });
}
// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function RadioBox(props) {
    const { getRootProps , getRadioProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useRadioGroup)({
        name: props.name,
        defaultValue: props.defaultValue,
        onChange: (e)=>{
            props.updateRadio(e);
        }
    });
    const group = getRootProps();
    return props.stack === "vertical" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        ...group,
        style: {
            alignItems: "inherit"
        },
        children: props.options.map((value)=>{
            const radio = getRadioProps({
                value
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RadioCard, {
                ...radio,
                children: value
            }, value);
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        ...group,
        children: props.options.map((value)=>{
            const radio = getRadioProps({
                value
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RadioCard, {
                ...radio,
                children: value
            }, value);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioBox);


/***/ }),

/***/ 7148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1969);
/* harmony import */ var _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5881);




const StageButtonGroup = ({ formType , updateStage , updateFaqModalStatus , setButtonClickStatus , stageRule , setData , dataValues , loadingText , isLoading =false , buttonText ="Next"  })=>{
    const { triggerToast  } = (0,_hooks_useWarnings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: {
            base: "column-reverse",
            lg: "row"
        },
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                direction: {
                    base: "column",
                    md: "row"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_themes_styled__WEBPACK_IMPORTED_MODULE_2__/* .StyledSecondaryButton */ .H7, {
                        w: "100%",
                        mr: "1rem",
                        mt: {
                            base: ".5rem"
                        },
                        onClick: ()=>updateStage("previous"),
                        children: "Back"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_themes_styled__WEBPACK_IMPORTED_MODULE_2__/* .StyledSecondaryButton */ .H7, {
                        w: "100%",
                        mt: {
                            base: ".5rem"
                        },
                        onClick: ()=>updateFaqModalStatus(true, formType),
                        children: "Read FAQ"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_themes_styled__WEBPACK_IMPORTED_MODULE_2__/* .StyledPrimaryButton */ .Db, {
                isLoading: isLoading,
                loadingText: loadingText,
                onClick: async ()=>{
                    if (stageRule) {
                        setButtonClickStatus(false);
                        let [param1, param2, param3] = dataValues ? dataValues : [];
                        dataValues && setData(param1, param2, param3);
                        buttonText === "Next" && updateStage("next");
                    } else {
                        setButtonClickStatus(true);
                        triggerToast("Please fill in all the required fields.");
                    }
                },
                children: buttonText
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StageButtonGroup);


/***/ })

};
;