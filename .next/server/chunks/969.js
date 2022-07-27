"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 1969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$N": () => (/* binding */ StyledHeadingLabels),
/* harmony export */   "Db": () => (/* binding */ StyledPrimaryButton),
/* harmony export */   "EJ": () => (/* binding */ StyledSecondaryHeading),
/* harmony export */   "Fy": () => (/* binding */ StyledInput),
/* harmony export */   "H7": () => (/* binding */ StyledSecondaryButton),
/* harmony export */   "O4": () => (/* binding */ StyledPrimaryHeading),
/* harmony export */   "P$": () => (/* binding */ StyledTextArea),
/* harmony export */   "Wi": () => (/* binding */ StyledMessageText),
/* harmony export */   "X2": () => (/* binding */ StyledBodyText),
/* harmony export */   "iN": () => (/* binding */ StyledCardText),
/* harmony export */   "ue": () => (/* binding */ StyledFooterHeaderText)
/* harmony export */ });
/* unused harmony exports StyledFlex, StyledGridChild */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);



const StyledFlex = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex)`
  background-color: black;
  padding: 24px;
  border-radius: 3px;
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 450px;
  flex-direction: column;
  justify-content: center;
`;
const StyledGridChild = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  break-inside: avoid;
  margin-bottom: 1em;
  padding: 2rem;
  /* border: 5px solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 4px 9px 18px -7px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
    background-color: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.blackLight */ .r.colors.blackLight};
  }
`;
// --------- Headings ------------
const StyledPrimaryHeading = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading)`
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.spaceMono */ .r.fonts.spaceMono};
  letter-spacing: 1.2px;
  line-height: 1.5;
  color: white;
`;
const StyledSecondaryHeading = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading)`
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.uncial */ .r.fonts.uncial};
  letter-spacing: 1.2px;
  color: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basecolor */ .r.colors.basecolor};
`;
const StyledHeadingLabels = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading)`
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.texturina */ .r.fonts.texturina};
  letter-spacing: 2px;
  text-align: ${({ textAlign  })=>textAlign ? textAlign : "center"};
  color: white;
`;
// --------- Texts ------------
const StyledBodyText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text)`
  max-width: ${({ maxWidth  })=>maxWidth ? maxWidth : "720px"};
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.texturina */ .r.fonts.texturina};
  line-height: 1.8;
  color: white;
  /* text-align: justify; */
`;
const StyledCardText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text)`
  max-width: 720px;
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.texturina */ .r.fonts.texturina};
  line-height: 1.8;
  color: white;
  text-align: left;
`;
const StyledMessageText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text)`
  font-family: ${({ font  })=>font ? font : _theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.jetbrains */ .r.fonts.jetbrains};
  color: ${({ color  })=>color ? color : "black"};
  line-height: 1.4;
`;
const StyledFooterHeaderText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text)`
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.spaceMono */ .r.fonts.spaceMono};
  font-weight: bold;
  color: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basecolor */ .r.colors.basecolor};
`;
// --------- Buttons ------------
const StyledPrimaryButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button)`
  min-width: 160px;
  height: 50px;
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.spaceMono */ .r.fonts.spaceMono};
  text-transform: uppercase;
  color: white;
  border-radius: 2px;
  background: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basecolor */ .r.colors.basecolor};
  padding-left: 24px;
  padding-right: 24px;
  &:hover {
    background: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basedarker */ .r.colors.basedarker};
  }
`;
const StyledSecondaryButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button)`
  // min-width: 160px;
  // height: 50px;
  // font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.spaceMono */ .r.fonts.spaceMono};
  // text-transform: uppercase;
  // border: 2px solid ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basedarkest */ .r.colors.basedarkest};
  // border-radius: 3px;
  // color: black;
  // background: white;
  // box-decoration-break: clone;
  // padding-left: 24px;
  // padding-right: 24px;
  // &:hover {
  //   background: black;
  //   opacity: 0.6;
  
  min-width: 160px;
  height: 50px;
  font-family: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.fonts.spaceMono */ .r.fonts.spaceMono};
  text-transform: uppercase;
  color: white;
  border-radius: 2px;
  background: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basecolor */ .r.colors.basecolor};
  padding-left: 24px;
  padding-right: 24px;
  &:hover {
    background: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.basedarker */ .r.colors.basedarker};
  }
  }
`;
// --------- Form Inputs ------------
const StyledInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input)`
  background: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.blackLight */ .r.colors.blackLight};
  border: none;
  border-radius: 0;
`;
const StyledTextArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea)`
  background: ${_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.blackLight */ .r.colors.blackLight};
  border: none;
  border-radius: 0;
`;


/***/ })

};
;