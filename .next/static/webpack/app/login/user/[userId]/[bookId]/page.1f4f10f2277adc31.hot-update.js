"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/user/[userId]/[bookId]/page",{

/***/ "(app-pages-browser)/./app/login/user/[userId]/[bookId]/bookdetails.jsx":
/*!**********************************************************!*\
  !*** ./app/login/user/[userId]/[bookId]/bookdetails.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Purchase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_repo_libraryrepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/repo/libraryrepo */ \"(app-pages-browser)/./app/repo/libraryrepo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page.jsx */ \"(app-pages-browser)/./app/page.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nfunction Purchase(param) {\n    let { users, books, transactions, userId, id } = param;\n    // const searchParams = useSearchParams()\n    // const [id, setId] = useState(Object.fromEntries(searchParams) || {})\n    const index = books.findIndex((book)=>book.id == Number(id));\n    const book = books[index];\n    const indx = users.findIndex((user)=>user.id == userId);\n    const usr = users[indx];\n    const handleLogin = ()=>{\n        window.location.href = \"http://localhost:3000\";\n    };\n    const handleGoBack = ()=>{\n        window.location.href = \"http://localhost:3000/login/user/\".concat(userId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"NextPage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchbtn),\n                                onClick: handleL,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().balance),\n                                id: \"balance\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Balance\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: usr.balance\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"shop\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"poster\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: book.img\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().bookinfo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        id: \"title\",\n                                        children: book.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            children: [\n                                                \"By \",\n                                                book.author\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 18\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: book.genre\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                \" \",\n                                                book.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 18\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: book.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"quantty\",\n                                                children: \"Quantity\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"number\",\n                                                id: \"quantty\",\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().ship),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"ship\",\n                                                children: \"Shipping address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"textarea\",\n                                                id: \"ship\",\n                                                placeholder: \"Enter shipping address here\",\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().purchasebtn),\n                                                onclick: \"purchaseBook(${book.id})\",\n                                                children: \"Purchase\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 16\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().backbtn),\n                                                onClick: handleGoBack,\n                                                children: \"Back\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 20\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"message\",\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().errormessage)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().pHistory),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Purchase History\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"purchaseHistory\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/[bookId]/bookdetails.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            \")\"\n        ]\n    }, void 0, true);\n}\n_c = Purchase;\nvar _c;\n$RefreshReg$(_c, \"Purchase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi91c2VyL1t1c2VySWRdL1tib29rSWRdL2Jvb2tkZXRhaWxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNFO0FBQ1Q7QUFDYjtBQUNJO0FBQzJCO0FBRzdDLFNBQVNTLFNBQVMsS0FBd0M7UUFBeEMsRUFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxFQUFFQyxFQUFFLEVBQUMsR0FBeEM7SUFDN0IseUNBQXlDO0lBQ3pDLHVFQUF1RTtJQUN2RSxNQUFNQyxRQUFRSixNQUFNSyxTQUFTLENBQUNDLENBQUFBLE9BQVFBLEtBQUtILEVBQUUsSUFBSUksT0FBT0o7SUFDeEQsTUFBTUcsT0FBT04sS0FBSyxDQUFDSSxNQUFNO0lBRXpCLE1BQU1JLE9BQU9ULE1BQU1NLFNBQVMsQ0FBQ0ksQ0FBQUEsT0FBUUEsS0FBS04sRUFBRSxJQUFHRDtJQUMvQyxNQUFNUSxNQUFNWCxLQUFLLENBQUNTLEtBQUs7SUFFdkIsTUFBTUcsY0FBYztRQUNoQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFFRixNQUFNQyxlQUFlO1FBQ2pCSCxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxvQ0FBMkMsT0FBUFo7SUFDN0Q7SUFFRixxQkFDQTs7MEJBQ0EsOERBQUNjO2dCQUFJQyxXQUFXeEIsb0VBQWE7O2tDQUN6Qiw4REFBQ3VCO3dCQUFJQyxXQUFXeEIsa0VBQVc7a0NBR3ZCLDRFQUFDMkI7c0NBQUc7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDSjt3QkFBSUMsV0FBV3hCLG1FQUFZOzswQ0FDeEIsOERBQUM2QjtnQ0FBT0wsV0FBV3hCLHVFQUFnQjtnQ0FBRStCLFNBQVNDOzBDQUFTOzs7Ozs7MENBQzNELDhEQUFDVDtnQ0FBSUMsV0FBV3hCLHFFQUFjO2dDQUFFVSxJQUFHOztrREFDL0IsOERBQUN3QjtrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTtrREFBR2pCLElBQUlnQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUW5CLDhEQUFDVjtnQkFBSWIsSUFBRzswQkFDSiw0RUFBQ2E7OEJBQ0QsNEVBQUNBO3dCQUFJQyxXQUFXeEIscUVBQWM7OzBDQUNwQyw4REFBQ3VCO2dDQUFJYSxPQUFNOzBDQUNYLDRFQUFDQztvQ0FBSUMsS0FBS3pCLEtBQUt3QixHQUFHOzs7Ozs7Ozs7OzswQ0FFbEIsOERBQUNkO2dDQUFJQyxXQUFXeEIsc0VBQWU7O2tEQUN0Qiw4REFBQ2tDO3dDQUFFeEIsSUFBRztrREFBU0csS0FBSzJCLEtBQUs7Ozs7OztrREFDMUIsOERBQUNOO2tEQUFFLDRFQUFDTzs7Z0RBQUU7Z0RBQUk1QixLQUFLNkIsTUFBTTs7Ozs7Ozs7Ozs7O2tEQUNyQiw4REFBQ1I7a0RBQUdyQixLQUFLOEIsS0FBSzs7Ozs7O2tEQUNkLDhEQUFDVDtrREFBRSw0RUFBQ1U7O2dEQUFFO2dEQUFFL0IsS0FBS2dDLEtBQUs7Ozs7Ozs7Ozs7OztrREFDbEIsOERBQUNYO2tEQUFHckIsS0FBS2lDLFdBQVc7Ozs7OztrREFDcEIsOERBQUN2Qjt3Q0FBSUMsV0FBV3hCLHNFQUFlOzswREFDL0IsOERBQUNnRDtnREFBTUMsS0FBSTswREFBVTs7Ozs7OzBEQUNyQiw4REFBQ0M7Z0RBQU1DLE1BQUs7Z0RBQVN6QyxJQUFHO2dEQUFVYyxXQUFXeEIsb0VBQWE7Ozs7Ozs7Ozs7OztrREFFMUQsOERBQUN1Qjt3Q0FBSUMsV0FBV3hCLGtFQUFXOzswREFDM0IsOERBQUNnRDtnREFBTUMsS0FBSTswREFBUTs7Ozs7OzBEQUNuQiw4REFBQ0M7Z0RBQU1DLE1BQUs7Z0RBQVd6QyxJQUFHO2dEQUFPNEMsYUFBWTtnREFBK0I5QixXQUFXeEIsb0VBQWE7Ozs7Ozs7Ozs7OztrREFFbkcsOERBQUN1Qjt3Q0FBSUMsV0FBV3hCLHFFQUFjOzswREFDOUIsOERBQUM2QjtnREFBT0wsV0FBV3hCLHlFQUFrQjtnREFBRXlELFNBQVE7MERBQTJCOzs7Ozs7MERBQ3RFLDhEQUFDNUI7Z0RBQU9MLFdBQVd4QixxRUFBYztnREFBRStCLFNBQVNUOzBEQUFjOzs7Ozs7Ozs7Ozs7a0RBRTlELDhEQUFDQzt3Q0FBSWIsSUFBRzt3Q0FBVWMsV0FBV3hCLDBFQUFtQjs7Ozs7Ozs7Ozs7OzBDQUVoRCw4REFBQ3VCO2dDQUFJQyxXQUFXeEIsc0VBQWU7O2tEQUM5Qiw4REFBQzZEO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUN0Qzt3Q0FBSWIsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9WOzs7QUFHZDtLQTNFd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi91c2VyL1t1c2VySWRdL1tib29rSWRdL2Jvb2tkZXRhaWxzLmpzeD8yY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IGxpYnJhcnlyZXBvIGZyb20gXCJAL2FwcC9yZXBvL2xpYnJhcnlyZXBvXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9hcHAvcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBwYWdlIGZyb20gJ0AvYXBwL3BhZ2UuanN4J1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVyY2hhc2Uoe3VzZXJzLCBib29rcywgdHJhbnNhY3Rpb25zLCB1c2VySWQsIGlkfSkge1xuICAgIC8vIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShPYmplY3QuZnJvbUVudHJpZXMoc2VhcmNoUGFyYW1zKSB8fCB7fSlcbiAgICBjb25zdCBpbmRleCA9IGJvb2tzLmZpbmRJbmRleChib29rID0+IGJvb2suaWQ9PSAgTnVtYmVyKGlkKSlcbiAgICBjb25zdCBib29rID0gYm9va3NbaW5kZXhdXG4gIFxuICAgIGNvbnN0IGluZHggPSB1c2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLmlkPT0gdXNlcklkKVxuICAgIGNvbnN0IHVzciA9IHVzZXJzW2luZHhdXG4gICAgXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbiAgICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luL3VzZXIvJHt1c2VySWR9YFxuICAgICAgfVxuICAgIFxuICAgIHJldHVybihcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gd2lkdGg9XCIxNTByZW1cIiBoZWlnaHQ9XCIxNTByZW1cIj48L2ltZz4gKi99XG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvSU1HXzkyOTQuUE5HXCIgYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gd2lkdGg9XCIxNTByZW1cIiBoZWlnaHQ9XCIxNTByZW1cIj48L2ltZz4gKi99XG4gICAgICAgICAgICA8aDE+TmV4dFBhZ2U8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaGJ0bn0gb25DbGljaz17aGFuZGxlTH0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxhbmNlfSBpZD1cImJhbGFuY2VcIj5cbiAgICAgICAgICAgIDxwPkJhbGFuY2U8L3A+XG4gICAgICAgICAgICA8cD57dXNyLmJhbGFuY2V9PC9wPlxuICAgICAgICAgICAgICAgIHsvKiA8cD5CYWxhbmNlPC9wPlxuICAgICAgICAgICAgICAgIDxwPntcbiAgICAgICAgICAgICAgICB1c2Vyc1t1c2Vycy5maW5kSW5kZXgodSA9PiB1LnVzZXJuYW1lID09IHVzZXJuYW1lKV0uYmFsYW5jZX08L3A+YCAqL31cbiAgICAgICAgICAgIHsvKiA8IS0tIDxwPkJhbGFuY2U8L3A+IC0tPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNob3BcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RlclwiPlxuICAgICAgPGltZyBzcmM9e2Jvb2suaW1nfSA+PC9pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va2luZm99PlxuICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aXRsZVwiPntib29rLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+PGk+Qnkge2Jvb2suYXV0aG9yfTwvaT48L3A+XG4gICAgICAgICAgICAgIDxwPntib29rLmdlbnJlfTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+IHtib29rLnByaWNlfTwvYj48L3A+XG4gICAgICAgICAgICAgIDxwPntib29rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudHR5XCI+UXVhbnRpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicXVhbnR0eVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hpcH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzaGlwXCIgPlNoaXBwaW5nIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgaWQ9XCJzaGlwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzaGlwcGluZyBhZGRyZXNzIGhlcmVcIiAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfSA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wdXJjaGFzZWJ0bn0gb25jbGljaz1cInB1cmNoYXNlQm9vaygke2Jvb2suaWR9KVwiPlB1cmNoYXNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrYnRufSBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcm1lc3NhZ2V9PjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBIaXN0b3J5fT5cbiAgICAgICAgICAgICAgICA8aDI+UHVyY2hhc2UgSGlzdG9yeTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInB1cmNoYXNlSGlzdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTwvPlxuICAgICkgICBcbn1cbiJdLCJuYW1lcyI6WyJsaWJyYXJ5cmVwbyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJMaW5rIiwicGFnZSIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsIlB1cmNoYXNlIiwidXNlcnMiLCJib29rcyIsInRyYW5zYWN0aW9ucyIsInVzZXJJZCIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJib29rIiwiTnVtYmVyIiwiaW5keCIsInVzZXIiLCJ1c3IiLCJoYW5kbGVMb2dpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhhbmRsZUdvQmFjayIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhlYWQiLCJoMSIsImxvZ2luIiwiYnV0dG9uIiwic2VhcmNoYnRuIiwib25DbGljayIsImhhbmRsZUwiLCJiYWxhbmNlIiwicCIsImRldGFpbHMiLCJjbGFzcyIsImltZyIsInNyYyIsImJvb2tpbmZvIiwidGl0bGUiLCJpIiwiYXV0aG9yIiwiZ2VucmUiLCJiIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpbnB1dHMiLCJzaGlwIiwicGxhY2Vob2xkZXIiLCJidXR0b25zIiwicHVyY2hhc2VidG4iLCJvbmNsaWNrIiwiYmFja2J0biIsImVycm9ybWVzc2FnZSIsInBIaXN0b3J5IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/user/[userId]/[bookId]/bookdetails.jsx\n"));

/***/ })

});