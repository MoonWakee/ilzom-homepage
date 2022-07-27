"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 3490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2130);
/* harmony import */ var _themes_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6463);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1838);
/* harmony import */ var _utils_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4285);









const providerOptions = {
    walletconnect: {
        package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default()),
        options: {
            infuraId: _config__WEBPACK_IMPORTED_MODULE_7__/* .INFURA_ID */ .Rp
        }
    }
};
const useWallet = (requireEns)=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_5__/* .AppContext */ .I);
    const fetchEns = async (chainId, ethersProvider, address)=>{
        if (chainId !== 1) return null;
        const ens = await ethersProvider.lookupAddress(address);
        return ens;
    };
    const validateMembership = async (signerAddress, ethersProvider)=>{
        try {
            let memberInfo = await (0,_utils_web3__WEBPACK_IMPORTED_MODULE_8__/* .getMemberShares */ .aZ)(signerAddress, ethersProvider);
            context.setWeb3Data({
                isMember: memberInfo[3]
            });
        } catch (err) {
            console.log(err);
        }
    };
    const setWeb3Provider = async (modalProvider)=>{
        const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_1__.providers.Web3Provider(modalProvider);
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(modalProvider);
        const signerAddress = await ethersProvider.getSigner().getAddress();
        const chainId = Number(modalProvider.chainId);
        if (requireEns) {
            try {
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: "0x1"
                        }
                    ]
                });
            } catch (err) {
                console.log(err);
            }
        }
        const signerEns = await fetchEns(chainId, ethersProvider, signerAddress) || "Not Found";
        if (chainId === 100) validateMembership(signerAddress, ethersProvider);
        context.setWeb3Data({
            ethersProvider,
            web3,
            signerAddress,
            signerEns,
            chainId
        });
    };
    let web3Modal;
    const connectWallet = async ()=>{
        try {
            web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({
                network: "mainnet",
                cacheProvider: true,
                providerOptions,
                theme: {
                    background: _themes_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.colors.blackLight */ .r.colors.blackLight,
                    main: _themes_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.colors.red */ .r.colors.red,
                    secondary: _themes_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.colors.white */ .r.colors.white,
                    hover: _themes_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.colors.black */ .r.colors.black
                }
            });
            web3Modal.clearCachedProvider();
            const modalProvider = await web3Modal.connect();
            await setWeb3Provider(modalProvider);
            modalProvider.on("accountsChanged", async ()=>{
                const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_1__.providers.Web3Provider(modalProvider);
                const signerAddress = await ethersProvider.getSigner().getAddress();
                const signerEns = await fetchEns(Number(modalProvider.chainId), ethersProvider, signerAddress) || "Not Found";
                if (Number(modalProvider.chainId) === 100) validateMembership(signerAddress, ethersProvider);
                context.setWeb3Data({
                    ethersProvider,
                    signerAddress,
                    signerEns
                });
            });
            modalProvider.on("chainChanged", async (_chainId)=>{
                const chainId = Number(_chainId);
                const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_1__.providers.Web3Provider(modalProvider);
                const signerAddress = await ethersProvider.getSigner().getAddress();
                if (chainId === 100) validateMembership(signerAddress, ethersProvider);
                context.setWeb3Data({
                    chainId,
                    ethersProvider,
                    signerAddress
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
    const disconnect = async ()=>{
        web3Modal.clearCachedProvider();
    };
    return {
        connectWallet,
        disconnect
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWallet);


/***/ }),

/***/ 8988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./themes/theme.js
var theme = __webpack_require__(6463);
// EXTERNAL MODULE: ./themes/styled.js
var styled = __webpack_require__(1969);
;// CONCATENATED MODULE: ./public/assets/logos/3_logo.png
/* harmony default export */ const _3_logo = ({"src":"/_next/static/media/3_logo.e30ac22e.png","height":285,"width":664,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR4nGO83GYlzePR7XzH0GqpC8P3///+sbMzMjL+ZmBgYALiP4y3zhzN5xWTyuaUVTDgZ2BQ/P//vxxQ4jkQiwDxScYrB3dof352h5nh769LhgEp3OzcvL+AioByDMxA/BMAkcQiAlBlSvUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./shared/Footer.jsx






const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: {
            base: "column-reverse",
            md: "row",
            lg: "row"
        },
        alignItems: "flex-start",
        justifyContent: "space-between",
        px: {
            base: "2rem",
            lg: "5rem"
        },
        py: "2rem",
        w: "100%",
        bg: "black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                width: {
                    base: "150px",
                    lg: "168px"
                },
                mr: "auto",
                mt: "2rem",
                onClick: ()=>window.location.href = "/",
                cursor: "pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: _3_logo,
                    alt: "ilzom logo",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: {
                    base: 1,
                    md: 3,
                    lg: 3
                },
                spacing: {
                    base: "2rem",
                    lg: "5rem"
                },
                fontFamily: "spaceMono",
                fontSize: "1rem",
                color: "greyLight",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        alignItems: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styled/* StyledFooterHeaderText */.ue, {
                                fontSize: "1.2rem",
                                children: "For Companies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "/#services",
                                children: "Sponsor Us"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        alignItems: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styled/* StyledFooterHeaderText */.ue, {
                                fontSize: "1.2rem",
                                children: "For the iLZOMers"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "/#culture",
                                children: "Join Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "/#manifesto",
                                children: "Our Handbook"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        alignItems: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styled/* StyledFooterHeaderText */.ue, {
                                fontSize: "1.2rem",
                                children: "For All"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                width: "15px",
                                                marginRight: "5px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            href: "https://twitter.com/ilzom",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Twitter"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                width: "15px",
                                                marginRight: "5px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            href: "https://github.com/MoonWakee/ilzom-DAO",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Github"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                width: "15px",
                                                marginRight: "5px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-discord"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            href: "https://discord.gg/j9Zm3ptT",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Discord"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// UNUSED EXPORTS: NavButton

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./context/AppContext.js
var AppContext = __webpack_require__(2130);
// EXTERNAL MODULE: ./themes/styled.js
var styled = __webpack_require__(1969);
// EXTERNAL MODULE: ./themes/theme.js
var themes_theme = __webpack_require__(6463);
// EXTERNAL MODULE: ./hooks/useWallet.js
var useWallet = __webpack_require__(3490);
;// CONCATENATED MODULE: ./public/assets/logos/1_logo.png
/* harmony default export */ const _1_logo = ({"src":"/_next/static/media/1_logo.698f0a8d.png","height":245,"width":687,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYklEQVR4nGO8VC8ky+O7IfqDsW2fIcNvhn//mNkZGRn/MEDAP8abZ48n8otL1QpKynmyMTH4/P//Xxko8RiIpYB4OePVo3tMv799LmriF7vtz69fisysrD+Aiv4CJdmB+DUAZ2gjO2ETuaYAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./shared/Header.jsx











const StyledButton = styled_default()(react_.Button)`
  &::after {
    box-sizing: inherit;
    transition: all ease-in-out 0.2s;
    background: none repeat scroll 0 0 ${themes_theme/* theme.colors.red */.r.colors.red};
    content: '';
    display: block;
    height: 2px;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: ${themes_theme/* theme.fonts.rubik */.r.fonts.rubik};
  }
  &:hover {
    text-decoration: none;
    ::after {
      width: 100%;
    }
  }
`;
const NavButton = ({ onClick , children  })=>/*#__PURE__*/ _jsx(StyledButton, {
        onClick: onClick,
        transition: "all 0.5s ease 0.4s",
        my: "1rem",
        variant: "link",
        color: `${theme.colors.red}`,
        fontWeight: "normal",
        fontSize: "1.5rem",
        children: children
    });
const getAccountString = (account)=>{
    const len = account.length;
    return `0x${account.substr(2, 3).toUpperCase()}...${account.substr(len - 3, len - 1).toUpperCase()}`;
};
const navItems = [
    {
        name: "About Us",
        href: "/#about_us"
    },
    {
        name: "Sponsor Us",
        href: "/#sponsorship"
    },
    // { name: 'Portfolio', href: '/#portfolio' },
    {
        name: "Join",
        href: "/#culture"
    }
];
const Header = ({ windowWidth , navLinks =true  })=>{
    const context = (0,external_react_.useContext)(AppContext/* AppContext */.I);
    const { connectWallet , disconnect  } = (0,useWallet/* default */.Z)();
    const { 0: isOpen , 1: onOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        w: "100%",
        h: {
            base: "4rem"
        },
        color: "white",
        fontFamily: "spaceMono",
        justify: "space-between",
        align: "center",
        zIndex: 5,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                width: {
                    base: "150px",
                    lg: "168px"
                },
                onClick: ()=>window.location.href = "/",
                cursor: "pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: _1_logo,
                    priority: true,
                    alt: "RaidGuild"
                })
            }),
            !navLinks && !context.signerAddress && /*#__PURE__*/ jsx_runtime_.jsx(styled/* StyledPrimaryButton */.Db, {
                onClick: connectWallet,
                children: "CONNECT"
            }),
            !navLinks && context.signerAddress && /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justify: "center",
                align: "center",
                zIndex: 5,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover, {
                    placement: "left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverTrigger, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                h: "auto",
                                fontWeight: "normal",
                                bg: themes_theme/* theme.colors.blackDark */.r.colors.blackDark,
                                _hover: {
                                    backgroundColor: "greyLight"
                                },
                                p: {
                                    base: 0,
                                    md: 3
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    px: 2,
                                    display: {
                                        base: "none",
                                        md: "flex"
                                    },
                                    fontFamily: "jetbrains",
                                    color: "red",
                                    children: getAccountString(context.signerAddress)
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverContent, {
                            bg: "none",
                            w: "auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                onClick: ()=>{
                                    disconnect();
                                    window.location.reload();
                                },
                                variant: "primary",
                                mt: "0",
                                children: "Disconnect"
                            })
                        })
                    ]
                })
            }),
            windowWidth > 1200 && navLinks && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                minWidth: "30%",
                direction: "row",
                justifyContent: "space-around",
                fontSize: "1.3rem",
                color: "basecolor",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#about_us",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            cursor: "pointer",
                            _hover: {
                                textDecoration: "underline"
                            },
                            children: "About Us"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#sponsorship",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            cursor: "pointer",
                            _hover: {
                                textDecoration: "underline"
                            },
                            children: "Sponsor"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#culture",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            cursor: "pointer",
                            _hover: {
                                textDecoration: "underline"
                            },
                            children: "Join"
                        })
                    })
                ]
            }),
            windowWidth < 1200 && navLinks && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        align: "center",
                        height: "8rem",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                            fontSize: "2rem",
                            onClick: ()=>onOpen((o)=>!o),
                            variant: "link",
                            ml: {
                                base: "0.5rem",
                                sm: "1rem"
                            },
                            zIndex: 7,
                            children: [
                                !isOpen && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        width: "25px",
                                        color: themes_theme/* theme.colors.red */.r.colors.red
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-bars"
                                    })
                                }),
                                isOpen && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        width: "25px",
                                        color: themes_theme/* theme.colors.red */.r.colors.red
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-times"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        zIndex: 6,
                        position: "fixed",
                        left: "0",
                        top: "0",
                        bg: "black",
                        h: "100%",
                        w: "100%",
                        direction: "column",
                        justify: "center",
                        align: "center",
                        transition: "all .8s ease-out",
                        pointerEvents: isOpen ? "all" : "none",
                        css: {
                            clipPath: isOpen ? "circle(calc(100vw + 100vh) at 90% -10%)" : "circle(100px at 90% -20%)"
                        },
                        children: [
                            navItems.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
                                    onClick: ()=>{
                                        onOpen((o)=>!o);
                                        document.location.href = item.href;
                                    },
                                    my: "1rem",
                                    variant: "link",
                                    color: `${themes_theme/* theme.colors.red */.r.colors.red}`,
                                    fontWeight: "normal",
                                    fontSize: "1.5rem",
                                    children: item.name
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "https://discord.gg/CanD2WcK7W",
                                isExternal: true,
                                _hover: {}
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K2": () => (/* binding */ message_to_sign_join),
/* harmony export */   "TG": () => (/* binding */ culture),
/* harmony export */   "W5": () => (/* binding */ join_faq_items),
/* harmony export */   "Zu": () => (/* binding */ hire_faq_items),
/* harmony export */   "eU": () => (/* binding */ hireus_services),
/* harmony export */   "nb": () => (/* binding */ skills),
/* harmony export */   "uZ": () => (/* binding */ services)
/* harmony export */ });
const services = [
    {
        name: "Consultations",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622036153/RaidGuild/icons/red/consultations_lr6ef4.png",
        text: "Validate your ideas and get expert advice on how to build, ship and grow your product."
    },
    {
        name: "Design Sprints",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622036154/RaidGuild/icons/red/designsprints__one_zuzzjt.png",
        text: "Fine tune your product market fit and nail your UX before writing a single line of code."
    },
    {
        name: "Full Stack Dev",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622036154/RaidGuild/icons/red/fullstackdev_pvshh4.png",
        text: "Make your dApp ideas a reality. From contracts to front ends, our Raiders are the best in the biz."
    },
    {
        name: "Marketing",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622036155/RaidGuild/icons/red/marketing_ge6ikg.png",
        text: "Level up your meme game and build a compelling narrative for your brand / product."
    }
];
const culture = [
    {
        name: "Learn New Things",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622036154/RaidGuild/icons/red/learning__two_j9vgyw.png",
        text: "Stay on top of the latest trends and developments while leveling up your skills."
    },
    {
        name: "Cartel Culture",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622036153/RaidGuild/icons/red/cartelculture__one_fgz9va.png",
        text: "We're serious about our work and its impacts on society, but we also know how to have a good time."
    },
    {
        name: "Tip of the Spear",
        img: "https://res.cloudinary.com/saimano/image/upload/v1622037333/RaidGuild/icons/purple/tipofthespear_k2lkvk.png",
        text: "Join the ranks on the front lines and make a direct impact on the world around you."
    }
];
const join_faq_items = [
    {
        q: "How do I get notified when the next cohort starts?",
        a: "After filling out this form you will be notified by email (\uD83D\uDC4B boomer) when the next cohort starts."
    },
    {
        q: "What does the Raid Guild onboarding journey look like and where am I at in it?",
        a: "If your are filling out this form your journey has just begun. The next step is attending the upcoming season. Seasons are our cohort process for introducing the ways of the guild and testing your abilities. After you have completed the cohort and finished a Raid and RIP you are eligible to pledge membership."
    },
    {
        q: "How many hours should I devote to Raids?",
        a: "Choose your own adventure. This is ultimately up to you. Time requirements are specific to the skills required for each Raid and RIP. Some Raiders are only available a few hours per week while others rarely leave the guild."
    },
    {
        q: "What are the expectation on the quality of my work?",
        a: "We are a guild of professionals and expect the highest quality! We maintain high standards and strive for the best. However, we are also here to help you improve and expand your abilities."
    },
    {
        q: "What is the single source of truth in Discord so I can get oriented?",
        a: "Prior to the season TOWN SQUARE is the most important category to follow. During the season COHORT will be relevant. After you become a member GUILD HQ contains the most up-to-date messages."
    },
    {
        q: "What stacks can I expect to encounter on Raid Guild projects?",
        a: "We allow project teams to determine what tools they deem appropriate for the mission. However, HackMD, GitHub, Figma and React are pretty common and good to get familiar with."
    },
    {
        q: "What standards should I expect with regards to backends?",
        a: "The majority of our contracts are written in Solidity. You should also be familiar with the Hardhat development environment and OpenZeppelin libraries."
    },
    {
        q: "Is TypeScript necessary and how strict should Prettier be?",
        a: "While TypeScript is beneficial when deploying production code it is not required to ship an MVP. Raid parties should decide when to sacrifice speed for the benefits of TypeScript. Pretty code with strict rules helps hone our craft and encourage consistency within teams."
    },
    {
        q: "Is there a preferred system for QA or bug tracking?",
        a: "Teams can determine what tools they are most comfortable with. However, we encourage using GiHub Issues and Projects to keep everyone collaborating using the same tools."
    },
    {
        q: "How much is my time worth?",
        a: "You tell us! Web3 should make us all question what we are “worth” and what we value. You will agree to an hourly rate when joining a Raid or RIP."
    },
    {
        q: "When am I compensated for the work I contribute?",
        a: "The spoils of Raids are distributed upon delivery of each milestone. We only get paid to ship!"
    },
    {
        q: "Once I am accepted into a cohort what is the next small step I can take to start getting paid?",
        a: "Look around the guild and identify ways you can help us improve. Update a doc, complete an issue, write a blog post. Share your work in the \uD83D\uDCC8│shill-your-stuff channel on Discord and guild members can reward you with tips of $RAID."
    }
];
const hire_faq_items = [
    {
        q: "What happens after I pay and submit?",
        a: "After you pay and submit, you can start bidding to move up in the queue to get accepted. And once accepted, you will be required to make a one time 15,000 $RAID to secure your spot for a consultation."
    },
    {
        q: "What is the consultation?",
        a: "The consultation is an online call, usually through Discord or Google Meet, with one of our project managers and possibly some extra Raiders. The consultation itself lasts around 45 minutes and in it we will assess the challenges and discuss possible solution paths for your project."
    },
    {
        q: "What are the deliverables?",
        a: "In most cases, our clients know exactly what they need. In this case, the time of the consultation is used to understand requirements and gather information to create a project proposal. This usually includes a quote, list of work required, and a project timeline." + "\nHowever, the huge variety of projects we review means we can’t promise a fixed deliverable to everyone that goes through this process. For some projects, the consultation serves as the initial discussion on the viability of an idea, with clear next steps defined. For others, consultation itself might become a round of troubleshooting or tech support." + "\nWhat we can promise is that we’ll use every resource we have available to help you, your product, and your vision."
    },
    {
        q: "What happens after the consultation?",
        a: "You will hear back from RaidGuild within 3-5 days with either a project proposal with quote, or recommendations for how to move forward with your idea. If we decide Raid Guild is not a good fit for your needs, we will offer you alternative paths forward."
    },
    {
        q: "Why should I pay?",
        a: "We believe in fairly compensating everyone at the Guild for their time. Payment ensures that our project managers are incentivized to marshall our best Raiders quickly, so you get the best consultation possible." + "\nYou may submit this form without paying, but we can’t guarantee that you will receive a response. Submissions without payment usually are non-profit, open source, or otherwise directly for the good of the Ethereum community and ecosystem."
    },
    {
        q: "Can I get a refund?",
        a: "If raiders determine that your project is not a good fit for the Guild, or that there are no Raiders with the right skillset to help you, a cleric will contact you letting you know that we will not proceed with the consultation and will refund the fee." + "\nNo refunds will be given once a consultation has been completed. The fee compensates our members for the time dedicated to providing recommendations for your project."
    }
];
const skills = [
    "Frontend Dev",
    "Backend Dev",
    "Solidity",
    "BizDev",
    "Community",
    "Project Management",
    "Finance",
    "Product Design",
    "UX Research",
    "Game Theory",
    "DevOps",
    "Tokenomics",
    "Content",
    "Memes",
    "Visual Design",
    "UI Design",
    "Illustration",
    "Legal",
    "Accounting"
];
const hireus_services = [
    "DAO (Design, Deployment)",
    "Development (Frontend, Backend)",
    "Marketing (Social Media, Copywriting, Memes/GIFs)",
    "Motion Design (Video, Explainers, Sticker Packs)",
    "NFTs (Contracts, Art, Tokenomics)",
    "Smart Contracts (Solidity, Audits)",
    "Strategy (Product, Launch Planning, Agile)",
    "Tokenomics (Incentives, Distribution, Rewards)",
    "UX (Research, Testing, User Stories)",
    "UI (Interface Design, Interaction Design)",
    "Visual Design (Branding, Illustration, Graphics)",
    "Help me figure out what I need"
];
const message_to_sign_join = "I hereby with the information provided would like to submit my cohort application to RaidGuild.";


/***/ }),

/***/ 4285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aZ": () => (/* binding */ getMemberShares),
/* harmony export */   "jA": () => (/* binding */ balanceOf),
/* harmony export */   "o$": () => (/* binding */ getSignature),
/* harmony export */   "wk": () => (/* binding */ payWithRaidToken)
/* harmony export */ });
/* unused harmony export getENSFromAddress */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1838);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);



const getENSFromAddress = async (ethersProvider, address)=>{
    const ens = await ethersProvider.lookupAddress(address);
    return ens || "Not Found";
};
const getSignature = async (ethersProvider)=>{
    const signer = ethersProvider.getSigner();
    const signature = await signer.signMessage(_constants__WEBPACK_IMPORTED_MODULE_2__/* .message_to_sign_join */ .K2);
    return signature;
};
const balanceOf = async (ethersProvider, token, address)=>{
    const abi = new ethers__WEBPACK_IMPORTED_MODULE_0__.utils.Interface([
        "function balanceOf(address account) view returns(uint256)"
    ]);
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(token, abi, ethersProvider);
    return contract.balanceOf(address);
};
const payWithRaidToken = async (address, ethersProvider, recipient, amount)=>{
    const abi = new ethers__WEBPACK_IMPORTED_MODULE_0__.utils.Interface([
        "function transfer(address recipient, uint256 amount) public virtual override returns (bool)"
    ]);
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(address, abi, ethersProvider.getSigner());
    return contract.transfer(recipient, amount);
};
const getMemberShares = async (signerAddress, ethersProvider)=>{
    const abi = new ethers__WEBPACK_IMPORTED_MODULE_0__.utils.Interface([
        "function members(address account) view returns (address, uint256, uint256, bool, uint256, uint256)"
    ]);
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(_config__WEBPACK_IMPORTED_MODULE_1__/* .DAO_ADDRESS[100] */ .xn[100], abi, ethersProvider);
    const member = await contract.members(signerAddress);
    return member;
};


/***/ })

};
;