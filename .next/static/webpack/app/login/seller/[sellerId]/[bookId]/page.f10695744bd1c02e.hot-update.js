"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/seller/[sellerId]/[bookId]/page",{

/***/ "(app-pages-browser)/./app/login/seller/[sellerId]/[bookId]/bookdetails.jsx":
/*!**************************************************************!*\
  !*** ./app/login/seller/[sellerId]/[bookId]/bookdetails.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Purchase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_repo_libraryrepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/repo/libraryrepo */ \"(app-pages-browser)/./app/repo/libraryrepo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page.jsx */ \"(app-pages-browser)/./app/page.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nfunction Purchase(param) {\n    let { users, books, transactions, sellerId, id } = param;\n    // const searchParams = useSearchParams()\n    // const [id, setId] = useState(Object.fromEntries(searchParams) || {})\n    const index = books.findIndex((book)=>book.id == Number(id));\n    const book = books[index];\n    const handleGoBack = ()=>{\n        window.location.href = \"http://localhost:3000/login/seller/\".concat(sellerId);\n    };\n    const handleLogin = ()=>{\n        window.location.href = \"http://localhost:3000\";\n    };\n    async function handleQ(e) {\n        e.preventDefault();\n        const response = await fetch(\"/api/sellers/\".concat(id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(book)\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"NextPage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchbtn),\n                                children: \"Add Book\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchbtn),\n                                onClick: handleLogin,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"shop\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"poster\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: book.img\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().bookinfo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        id: \"title\",\n                                        children: book.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            children: [\n                                                \"By \",\n                                                book.author\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 18\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: book.genre\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                \" \",\n                                                book.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 18\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: book.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"quantty\",\n                                                children: \"Quantity\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"number\",\n                                                id: \"quantty\",\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().purchasebtn),\n                                                        onclick: \"addQuantity(${book.id})\",\n                                                        children: \"Add Quantity\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 14\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().backbtn),\n                                                        onClick: handleGoBack,\n                                                        children: \"Back\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 18\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"message\",\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().errormessage)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 16\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().pHistory),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Sale History\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"purchaseHistory\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Purchase;\nvar _c;\n$RefreshReg$(_c, \"Purchase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9zZWxsZXIvW3NlbGxlcklkXS9bYm9va0lkXS9ib29rZGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDRTtBQUNUO0FBQ2I7QUFDSTtBQUMyQjtBQUc3QyxTQUFTUyxTQUFTLEtBQTBDO1FBQTFDLEVBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsRUFBRSxFQUFDLEdBQTFDO0lBQzdCLHlDQUF5QztJQUN6Qyx1RUFBdUU7SUFDdkUsTUFBTUMsUUFBUUosTUFBTUssU0FBUyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLSCxFQUFFLElBQUlJLE9BQU9KO0lBQ3hELE1BQU1HLE9BQU9OLEtBQUssQ0FBQ0ksTUFBTTtJQUV6QixNQUFNSSxlQUFlO1FBQ2pCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxzQ0FBK0MsT0FBVFQ7SUFDL0Q7SUFFQSxNQUFNVSxjQUFjO1FBQ2xCSCxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVBLGVBQWVFLFFBQVFDLENBQUM7UUFDdEJBLEVBQUVDLGNBQWM7UUFDWixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0JBQW1CLE9BQUhkLEtBQ3pDO1lBQ0llLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDaEI7UUFDekI7SUFFUjtJQUVKLHFCQUNJOzswQkFDQSw4REFBQ2lCO2dCQUFJQyxXQUFXL0Isb0VBQWE7O2tDQUM3Qiw4REFBQzhCO3dCQUFJQyxXQUFXL0Isa0VBQVc7a0NBR3ZCLDRFQUFDa0M7c0NBQUc7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDSjt3QkFBSUMsV0FBVy9CLG1FQUFZOzswQ0FDeEIsOERBQUNvQztnQ0FBT0wsV0FBVy9CLHVFQUFnQjswQ0FBRzs7Ozs7OzBDQUN0Qyw4REFBQ29DO2dDQUFPTCxXQUFXL0IsdUVBQWdCO2dDQUFFc0MsU0FBU25COzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9ELDhEQUFDVztnQkFBSXBCLElBQUc7MEJBQ0osNEVBQUNvQjs4QkFDRCw0RUFBQ0E7d0JBQUlDLFdBQVcvQixxRUFBYzs7MENBQ3BDLDhEQUFDOEI7Z0NBQUlVLE9BQU07MENBQ1gsNEVBQUNDO29DQUFJQyxLQUFLN0IsS0FBSzRCLEdBQUc7Ozs7Ozs7Ozs7OzBDQUVsQiw4REFBQ1g7Z0NBQUlDLFdBQVcvQixzRUFBZTs7a0RBQ3RCLDhEQUFDNEM7d0NBQUVsQyxJQUFHO2tEQUFTRyxLQUFLZ0MsS0FBSzs7Ozs7O2tEQUMxQiw4REFBQ0Q7a0RBQUUsNEVBQUNFOztnREFBRTtnREFBSWpDLEtBQUtrQyxNQUFNOzs7Ozs7Ozs7Ozs7a0RBQ3JCLDhEQUFDSDtrREFBRy9CLEtBQUttQyxLQUFLOzs7Ozs7a0RBQ2QsOERBQUNKO2tEQUFFLDRFQUFDSzs7Z0RBQUU7Z0RBQUVwQyxLQUFLcUMsS0FBSzs7Ozs7Ozs7Ozs7O2tEQUNsQiw4REFBQ047a0RBQUcvQixLQUFLc0MsV0FBVzs7Ozs7O2tEQUNwQiw4REFBQ3JCO3dDQUFJQyxXQUFXL0Isc0VBQWU7OzBEQUMvQiw4REFBQ3FEO2dEQUFNQyxLQUFJOzBEQUFVOzs7Ozs7MERBQ3JCLDhEQUFDQztnREFBTUMsTUFBSztnREFBUzlDLElBQUc7Z0RBQVVxQixXQUFXL0Isb0VBQWE7Ozs7OzswREFDMUQsOERBQUM4QjtnREFBSUMsV0FBVy9CLHFFQUFjOztrRUFDL0IsOERBQUNvQzt3REFBT0wsV0FBVy9CLHlFQUFrQjt3REFBRTRELFNBQVM7a0VBQTJCOzs7Ozs7a0VBQ3ZFLDhEQUFDeEI7d0RBQU9MLFdBQVcvQixxRUFBYzt3REFBRXNDLFNBQVN2QjtrRUFBYzs7Ozs7Ozs7Ozs7OzBEQUU1RCw4REFBQ2U7Z0RBQUlwQixJQUFHO2dEQUFVcUIsV0FBVy9CLDBFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUd2RCw4REFBQzhCO2dDQUFJQyxXQUFXL0Isc0VBQWU7O2tEQUN2Qiw4REFBQ2dFO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNsQzt3Q0FBSXBCLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4QjtLQXpFd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9zZWxsZXIvW3NlbGxlcklkXS9bYm9va0lkXS9ib29rZGV0YWlscy5qc3g/ZjgzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBsaWJyYXJ5cmVwbyBmcm9tIFwiQC9hcHAvcmVwby9saWJyYXJ5cmVwb1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0AvYXBwL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgcGFnZSBmcm9tICdAL2FwcC9wYWdlLmpzeCdcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1cmNoYXNlKHt1c2VycywgYm9va3MsIHRyYW5zYWN0aW9ucywgc2VsbGVySWQsIGlkfSkge1xuICAgIC8vIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShPYmplY3QuZnJvbUVudHJpZXMoc2VhcmNoUGFyYW1zKSB8fCB7fSlcbiAgICBjb25zdCBpbmRleCA9IGJvb2tzLmZpbmRJbmRleChib29rID0+IGJvb2suaWQ9PSAgTnVtYmVyKGlkKSlcbiAgICBjb25zdCBib29rID0gYm9va3NbaW5kZXhdXG4gIFxuICAgIGNvbnN0IGhhbmRsZUdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luL3NlbGxlci8ke3NlbGxlcklkfWBcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gICAgICB9XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVEoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvc2VsbGVycy8ke2lkfWAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2spXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XG4gICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ299IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHdpZHRoPVwiMTUwcmVtXCIgaGVpZ2h0PVwiMTUwcmVtXCI+PC9pbWc+ICovfVxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL0lNR185Mjk0LlBOR1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHdpZHRoPVwiMTUwcmVtXCIgaGVpZ2h0PVwiMTUwcmVtXCI+PC9pbWc+ICovfVxuICAgICAgICAgICAgPGgxPk5leHRQYWdlPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW59PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hidG59ID5BZGQgQm9vazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hidG59IG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNob3BcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RlclwiPlxuICAgICAgPGltZyBzcmM9e2Jvb2suaW1nfSA+PC9pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va2luZm99PlxuICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aXRsZVwiPntib29rLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+PGk+Qnkge2Jvb2suYXV0aG9yfTwvaT48L3A+XG4gICAgICAgICAgICAgIDxwPntib29rLmdlbnJlfTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+IHtib29rLnByaWNlfTwvYj48L3A+XG4gICAgICAgICAgICAgIDxwPntib29rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudHR5XCI+UXVhbnRpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicXVhbnR0eVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnB1cmNoYXNlYnRufSBvbmNsaWNrPXtcImFkZFF1YW50aXR5KCR7Ym9vay5pZH0pXCJ9PkFkZCBRdWFudGl0eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tidG59IG9uQ2xpY2s9e2hhbmRsZUdvQmFja30+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcm1lc3NhZ2V9PjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBIaXN0b3J5fT5cbiAgICAgICAgICAgICAgICA8aDI+U2FsZSBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHVyY2hhc2VIaXN0b3J5XCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImxpYnJhcnlyZXBvIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJwYWdlIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiUHVyY2hhc2UiLCJ1c2VycyIsImJvb2tzIiwidHJhbnNhY3Rpb25zIiwic2VsbGVySWQiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiYm9vayIsIk51bWJlciIsImhhbmRsZUdvQmFjayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhhbmRsZUxvZ2luIiwiaGFuZGxlUSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoZWFkIiwiaDEiLCJsb2dpbiIsImJ1dHRvbiIsInNlYXJjaGJ0biIsIm9uQ2xpY2siLCJkZXRhaWxzIiwiY2xhc3MiLCJpbWciLCJzcmMiLCJib29raW5mbyIsInAiLCJ0aXRsZSIsImkiLCJhdXRob3IiLCJnZW5yZSIsImIiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicXVhbnRpdHkiLCJsYWJlbCIsImZvciIsImlucHV0IiwidHlwZSIsImlucHV0cyIsImJ1dHRvbnMiLCJwdXJjaGFzZWJ0biIsIm9uY2xpY2siLCJiYWNrYnRuIiwiZXJyb3JtZXNzYWdlIiwicEhpc3RvcnkiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\n"));

/***/ })

});