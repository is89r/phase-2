"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/user/page",{

/***/ "(app-pages-browser)/./app/login/user/Book.jsx":
/*!*********************************!*\
  !*** ./app/login/user/Book.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_repo_libraryrepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/repo/libraryrepo */ \"(app-pages-browser)/./app/repo/libraryrepo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page.jsx */ \"(app-pages-browser)/./app/page.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Book(param) {\n    let { users, books, transactions } = param;\n    _s();\n    //   const router = useRouter();\n    //   const { username } = router.query;\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const filteredBooks = books.filter((book)=>book.title.toLowerCase().includes(searchQuery.toLowerCase()));\n    const handleSearch = (event)=>{\n        setSearchQuery(event.target.value);\n    };\n    const handleGoBack = ()=>{\n        window.location.href = \"http://localhost:3000\";\n    };\n    const purchaseBookPage = (id)=>{\n        window.location.href = \"http://localhost:3000/login/user/\".concat(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"NextPage\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchbtn),\n                                    onClick: handleGoBack,\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().balance),\n                                    id: \"balance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"shop\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"book-search\",\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().booksearch),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"search\",\n                                        placeholder: \"Search for book\",\n                                        size: \"50rem\",\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs),\n                                        onkeydown: \"search(this)\",\n                                        onChange: handleSearch\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"content\",\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().booklist),\n                                        children: filteredBooks.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: book.img\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \" \",\n                                                            book.title\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            children: [\n                                                                \"By \",\n                                                                book.author\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 20\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().purchasebtn),\n                                                            onClick: ()=>purchaseBookPage(book.id),\n                                                            children: \"Purchase\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 18\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 44\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().pHistory),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Purchase History\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"purchaseHistory\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Book, \"4sm5Xy4sGA6QIGrHn8tQ9Lk+vI8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi91c2VyL0Jvb2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNFO0FBQ1Q7QUFDYjtBQUNJO0FBQzJCO0FBRzdDLFNBQVNTLEtBQUssS0FBNEI7UUFBNUIsRUFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBQyxHQUE1Qjs7SUFDN0IsZ0NBQWdDO0lBQ2hDLHVDQUF1QztJQUNyQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLGdCQUFnQkwsTUFBTU0sTUFBTSxDQUFDQyxDQUFBQSxPQUNqQ0EsS0FBS0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsWUFBWU8sV0FBVztJQUc3RCxNQUFNRSxlQUFlLENBQUNDO1FBQ2xCVCxlQUFlUyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDckM7SUFHSSxNQUFNQyxlQUFlO1FBQ2pCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVGLE1BQU1DLG1CQUFtQixDQUFDQztRQUN0QkosT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsb0NBQXVDLE9BQUhFO0lBQy9EO0lBS0MscUJBQ0c7a0JBQ0EsNEVBQUNDOzs4QkFDRCw4REFBQ0M7b0JBQUlDLFdBQVc5QixvRUFBYTs7c0NBQzdCLDhEQUFDNkI7NEJBQUlDLFdBQVc5QixrRUFBVztzQ0FHdkIsNEVBQUNpQzswQ0FBRzs7Ozs7Ozs7Ozs7c0NBRVIsOERBQUNKOzRCQUFJQyxXQUFXOUIsbUVBQVk7OzhDQUN4Qiw4REFBQ21DO29DQUFPTCxXQUFXOUIsdUVBQWdCO29DQUFFcUMsU0FBU2Y7OENBQWM7Ozs7Ozs4Q0FDaEUsOERBQUNPO29DQUFJQyxXQUFXOUIscUVBQWM7b0NBQUUyQixJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBU25DLDhEQUFDRTtvQkFBSUMsV0FBVzlCLGtFQUFXOztzQ0FDdkIsOERBQUM2Qjs0QkFBSUYsSUFBRzs7OENBQ0osOERBQUNFO29DQUFJRixJQUFHO29DQUFjRyxXQUFXOUIsd0VBQWlCOzhDQUM5Qyw0RUFBQ3lDO3dDQUFNQyxNQUFLO3dDQUFPZixJQUFHO3dDQUFTZ0IsYUFBWTt3Q0FBa0JDLE1BQUs7d0NBQVFkLFdBQVc5QixvRUFBYTt3Q0FBRThDLFdBQVU7d0NBQWVDLFVBQVU3Qjs7Ozs7Ozs7Ozs7OENBRTNJLDhEQUFDVztvQ0FBSUYsSUFBRztvQ0FBVUcsV0FBVzlCLHFFQUFjOzhDQUMzQyw0RUFBQzZCO3dDQUFJQyxXQUFXOUIsc0VBQWU7a0RBQzlCWSxjQUFjc0MsR0FBRyxDQUFDcEMsQ0FBQUEscUJBQVEsOERBQUNlO2dEQUFJQyxXQUFXOUIsa0VBQVc7O2tFQUN0RCw4REFBQ29EO3dEQUFJQyxLQUFLdkMsS0FBS3NDLEdBQUc7Ozs7OztrRUFDbEIsOERBQUNFOzs0REFBRTs0REFBRXhDLEtBQUtDLEtBQUs7Ozs7Ozs7a0VBQ2YsOERBQUN1QztrRUFBRSw0RUFBQ0M7O2dFQUFFO2dFQUFJekMsS0FBSzBDLE1BQU07Ozs7Ozs7Ozs7OztrRUFDckIsOERBQUMzQjt3REFBSUMsV0FBVzlCLHFFQUFjO2tFQUM3Qiw0RUFBQ21DOzREQUFPTCxXQUFXOUIseUVBQWtCOzREQUFFcUMsU0FBUyxJQUFNWCxpQkFBaUJaLEtBQUthLEVBQUU7c0VBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNdEYsOERBQUNFOzRCQUFJQyxXQUFXOUIsc0VBQWU7OzhDQUMzQiw4REFBQzREOzhDQUFHOzs7Ozs7OENBQ0osOERBQUMvQjtvQ0FBSUYsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtoQiw4REFBQ0U7OEJBQ0csNEVBQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQTdFd0J4RDs7UUFJUEYsc0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3VzZXIvQm9vay5qc3g/MTQ0MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBsaWJyYXJ5cmVwbyBmcm9tIFwiQC9hcHAvcmVwby9saWJyYXJ5cmVwb1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0AvYXBwL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgcGFnZSBmcm9tICdAL2FwcC9wYWdlLmpzeCdcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2soe3VzZXJzLCBib29rcywgdHJhbnNhY3Rpb25zfSkge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmlsdGVyZWRCb29rcyA9IGJvb2tzLmZpbHRlcihib29rID0+XG4gICAgYm9vay50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4pXG5cbmNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG59XG5cblxuICAgIGNvbnN0IGhhbmRsZUdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xuICAgICAgfVxuXG4gICAgY29uc3QgcHVyY2hhc2VCb29rUGFnZSA9IChpZCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4vdXNlci8ke2lkfWBcbiAgICB9XG4gICAgXG5cbiAgICBcblxuICAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XG4gICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ299IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHdpZHRoPVwiMTUwcmVtXCIgaGVpZ2h0PVwiMTUwcmVtXCI+PC9pbWc+ICovfVxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL0lNR185Mjk0LlBOR1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHdpZHRoPVwiMTUwcmVtXCIgaGVpZ2h0PVwiMTUwcmVtXCI+PC9pbWc+ICovfVxuICAgICAgICAgICAgPGgxPk5leHRQYWdlPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW59PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hidG59IG9uQ2xpY2s9e2hhbmRsZUdvQmFja30+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxhbmNlfSBpZD1cImJhbGFuY2VcIj5cbiAgICAgICAgICAgIHsvKiA8cD57dXNyLmJhbGFuY2V9PC9wPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPHA+QmFsYW5jZTwvcD5cbiAgICAgICAgICAgICAgICA8cD57XG4gICAgICAgICAgICAgICAgdXNlcnNbdXNlcnMuZmluZEluZGV4KHUgPT4gdS51c2VybmFtZSA9PSB1c2VybmFtZSldLmJhbGFuY2V9PC9wPmAgKi99XG4gICAgICAgICAgICB7LyogPCEtLSA8cD5CYWxhbmNlPC9wPiAtLT4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJvb2stc2VhcmNoXCIgY2xhc3NOYW1lPXtzdHlsZXMuYm9va3NlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGJvb2tcIiBzaXplPVwiNTByZW1cIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9IG9ua2V5ZG93bj1cInNlYXJjaCh0aGlzKVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tsaXN0fT5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRCb29rcy5tYXAoYm9vayA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtib29rLmltZ30+PC9pbWc+XG4gICAgICAgICAgICAgICAgPHA+IHtib29rLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48aT5CeSB7Ym9vay5hdXRob3J9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnB1cmNoYXNlYnRufSBvbkNsaWNrPXsoKSA9PiBwdXJjaGFzZUJvb2tQYWdlKGJvb2suaWQpfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucEhpc3Rvcnl9PlxuICAgICAgICAgICAgICAgIDxoMj5QdXJjaGFzZSBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHVyY2hhc2VIaXN0b3J5XCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2JvZHk+IFxuICAgIDwvPlxuKVxufVxuIl0sIm5hbWVzIjpbImxpYnJhcnlyZXBvIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJwYWdlIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiQm9vayIsInVzZXJzIiwiYm9va3MiLCJ0cmFuc2FjdGlvbnMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwicm91dGVyIiwiZmlsdGVyZWRCb29rcyIsImZpbHRlciIsImJvb2siLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlR29CYWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHVyY2hhc2VCb29rUGFnZSIsImlkIiwiYm9keSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhlYWQiLCJoMSIsImxvZ2luIiwiYnV0dG9uIiwic2VhcmNoYnRuIiwib25DbGljayIsImJhbGFuY2UiLCJtYWluIiwiYm9va3NlYXJjaCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2l6ZSIsImlucHV0cyIsIm9ua2V5ZG93biIsIm9uQ2hhbmdlIiwiY29udGVudCIsImJvb2tsaXN0IiwibWFwIiwiY2FyZCIsImltZyIsInNyYyIsInAiLCJpIiwiYXV0aG9yIiwiYnV0dG9ucyIsInB1cmNoYXNlYnRuIiwicEhpc3RvcnkiLCJoMiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/user/Book.jsx\n"));

/***/ })

});