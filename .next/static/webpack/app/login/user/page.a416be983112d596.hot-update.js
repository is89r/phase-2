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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_repo_libraryrepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/repo/libraryrepo */ \"(app-pages-browser)/./app/repo/libraryrepo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page.jsx */ \"(app-pages-browser)/./app/page.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Book(param) {\n    let { users, books, transactions } = param;\n    _s();\n    //   const router = useRouter();\n    //   const { username } = router.query;\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const filteredBooks = books.filter((book)=>book.title.toLowerCase().includes(searchQuery.toLowerCase()));\n    const handleSearch = (event)=>{\n        setSearchQuery(event.target.value);\n    };\n    const handleGoBack = ()=>{\n        window.location.href = \"http://localhost:3000\";\n    };\n    const purchaseBookPage = (id)=>{\n        router.push(\"/login/user//\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"NextPage\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchbtn),\n                                    onClick: handleGoBack,\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().balance),\n                                    id: \"balance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().shop),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"book-search\",\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().booksearch),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"search\",\n                                        placeholder: \"Search for book\",\n                                        size: \"50rem\",\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs),\n                                        onkeydown: \"search(this)\",\n                                        onChange: handleSearch\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"content\",\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().booklist),\n                                        children: filteredBooks.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: book.img\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \" \",\n                                                            book.title\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            children: [\n                                                                \"By \",\n                                                                book.author\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 20\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().purchasebtn),\n                                                            onClick: ()=>purchaseBookPage(book.id),\n                                                            children: \"Purchase\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                            lineNumber: 67,\n                                                            columnNumber: 18\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 44\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().pHistory),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Purchase History\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"purchaseHistory\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/Book.jsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Book, \"4sm5Xy4sGA6QIGrHn8tQ9Lk+vI8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi91c2VyL0Jvb2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNFO0FBQ1Q7QUFDYjtBQUNJO0FBQzJCO0FBRzdDLFNBQVNTLEtBQUssS0FBNEI7UUFBNUIsRUFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBQyxHQUE1Qjs7SUFDN0IsZ0NBQWdDO0lBQ2hDLHVDQUF1QztJQUNyQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLGdCQUFnQkwsTUFBTU0sTUFBTSxDQUFDQyxDQUFBQSxPQUNqQ0EsS0FBS0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsWUFBWU8sV0FBVztJQUc3RCxNQUFNRSxlQUFlLENBQUNDO1FBQ2xCVCxlQUFlUyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDckM7SUFHSSxNQUFNQyxlQUFlO1FBQ2pCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVGLE1BQU1DLG1CQUFtQixDQUFDQztRQUN0QmhCLE9BQU9pQixJQUFJLENBQUMsZ0JBQW1CLE9BQUhEO0lBQ2hDO0lBSUMscUJBQ0c7a0JBQ0EsNEVBQUNFOzs4QkFDRCw4REFBQ0M7b0JBQUlDLFdBQVcvQixvRUFBYTs7c0NBQzdCLDhEQUFDOEI7NEJBQUlDLFdBQVcvQixrRUFBVztzQ0FHdkIsNEVBQUNrQzswQ0FBRzs7Ozs7Ozs7Ozs7c0NBRVIsOERBQUNKOzRCQUFJQyxXQUFXL0IsbUVBQVk7OzhDQUN4Qiw4REFBQ29DO29DQUFPTCxXQUFXL0IsdUVBQWdCO29DQUFFc0MsU0FBU2hCOzhDQUFjOzs7Ozs7OENBQ2hFLDhEQUFDUTtvQ0FBSUMsV0FBVy9CLHFFQUFjO29DQUFFMkIsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVNuQyw4REFBQ0c7b0JBQUlDLFdBQVcvQixrRUFBVzs7c0NBQ3ZCLDhEQUFDOEI7NEJBQUlILElBQUkzQixrRUFBVzs7OENBQ2hCLDhEQUFDOEI7b0NBQUlILElBQUc7b0NBQWNJLFdBQVcvQix3RUFBaUI7OENBQzlDLDRFQUFDMkM7d0NBQU1DLE1BQUs7d0NBQU9qQixJQUFHO3dDQUFTa0IsYUFBWTt3Q0FBa0JDLE1BQUs7d0NBQVFmLFdBQVcvQixvRUFBYTt3Q0FBRWdELFdBQVU7d0NBQWVDLFVBQVUvQjs7Ozs7Ozs7Ozs7OENBRTNJLDhEQUFDWTtvQ0FBSUgsSUFBRztvQ0FBVUksV0FBVy9CLHFFQUFjOzhDQUMzQyw0RUFBQzhCO3dDQUFJQyxXQUFXL0Isc0VBQWU7a0RBQzlCWSxjQUFjd0MsR0FBRyxDQUFDdEMsQ0FBQUEscUJBQVEsOERBQUNnQjtnREFBSUMsV0FBVy9CLGtFQUFXOztrRUFDdEQsOERBQUNzRDt3REFBSUMsS0FBS3pDLEtBQUt3QyxHQUFHOzs7Ozs7a0VBQ2xCLDhEQUFDRTs7NERBQUU7NERBQUUxQyxLQUFLQyxLQUFLOzs7Ozs7O2tFQUNmLDhEQUFDeUM7a0VBQUUsNEVBQUNDOztnRUFBRTtnRUFBSTNDLEtBQUs0QyxNQUFNOzs7Ozs7Ozs7Ozs7a0VBQ3JCLDhEQUFDNUI7d0RBQUlDLFdBQVcvQixxRUFBYztrRUFDN0IsNEVBQUNvQzs0REFBT0wsV0FBVy9CLHlFQUFrQjs0REFBRXNDLFNBQVMsSUFBTVosaUJBQWlCWixLQUFLYSxFQUFFO3NFQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTXRGLDhEQUFDRzs0QkFBSUMsV0FBVy9CLHNFQUFlOzs4Q0FDM0IsOERBQUM4RDs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDaEM7b0NBQUlILElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLaEIsOERBQUNHOzhCQUNHLDRFQUFDaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0E1RXdCMUQ7O1FBSVBGLHNEQUFTQTs7O0tBSkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi91c2VyL0Jvb2suanN4PzE0NDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgbGlicmFyeXJlcG8gZnJvbSBcIkAvYXBwL3JlcG8vbGlicmFyeXJlcG9cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL2FwcC9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHBhZ2UgZnJvbSAnQC9hcHAvcGFnZS5qc3gnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rKHt1c2VycywgYm9va3MsIHRyYW5zYWN0aW9uc30pIHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4vLyAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQm9va3MgPSBib29rcy5maWx0ZXIoYm9vayA9PlxuICAgIGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuKVxuXG5jb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xufVxuXG5cbiAgICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbiAgICAgIH1cblxuICAgIGNvbnN0IHB1cmNoYXNlQm9va1BhZ2UgPSAoaWQpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbi91c2VyLy8ke2lkfWApO1xuICAgIH1cblxuICAgIFxuXG4gICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gd2lkdGg9XCIxNTByZW1cIiBoZWlnaHQ9XCIxNTByZW1cIj48L2ltZz4gKi99XG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvSU1HXzkyOTQuUE5HXCIgYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gd2lkdGg9XCIxNTByZW1cIiBoZWlnaHQ9XCIxNTByZW1cIj48L2ltZz4gKi99XG4gICAgICAgICAgICA8aDE+TmV4dFBhZ2U8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaGJ0bn0gb25DbGljaz17aGFuZGxlR29CYWNrfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGFuY2V9IGlkPVwiYmFsYW5jZVwiPlxuICAgICAgICAgICAgey8qIDxwPnt1c3IuYmFsYW5jZX08L3A+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8cD5CYWxhbmNlPC9wPlxuICAgICAgICAgICAgICAgIDxwPntcbiAgICAgICAgICAgICAgICB1c2Vyc1t1c2Vycy5maW5kSW5kZXgodSA9PiB1LnVzZXJuYW1lID09IHVzZXJuYW1lKV0uYmFsYW5jZX08L3A+YCAqL31cbiAgICAgICAgICAgIHsvKiA8IS0tIDxwPkJhbGFuY2U8L3A+IC0tPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNob3B9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJib29rLXNlYXJjaFwiIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tzZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBib29rXCIgc2l6ZT1cIjUwcmVtXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfSBvbmtleWRvd249XCJzZWFyY2godGhpcylcIiBvbkNoYW5nZT17aGFuZGxlU2VhcmNofT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbGlzdH0+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkQm9va3MubWFwKGJvb2sgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Ym9vay5pbWd9PjwvaW1nPlxuICAgICAgICAgICAgICAgIDxwPiB7Ym9vay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+PGk+Qnkge2Jvb2suYXV0aG9yfTwvaT48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wdXJjaGFzZWJ0bn0gb25DbGljaz17KCkgPT4gcHVyY2hhc2VCb29rUGFnZShib29rLmlkKX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBIaXN0b3J5fT5cbiAgICAgICAgICAgICAgICA8aDI+UHVyY2hhc2UgSGlzdG9yeTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInB1cmNoYXNlSGlzdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9ib2R5PiBcbiAgICA8Lz5cbilcbn1cbiJdLCJuYW1lcyI6WyJsaWJyYXJ5cmVwbyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJMaW5rIiwicGFnZSIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsIkJvb2siLCJ1c2VycyIsImJvb2tzIiwidHJhbnNhY3Rpb25zIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJvdXRlciIsImZpbHRlcmVkQm9va3MiLCJmaWx0ZXIiLCJib29rIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUdvQmFjayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInB1cmNoYXNlQm9va1BhZ2UiLCJpZCIsInB1c2giLCJib2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaGVhZCIsImgxIiwibG9naW4iLCJidXR0b24iLCJzZWFyY2hidG4iLCJvbkNsaWNrIiwiYmFsYW5jZSIsIm1haW4iLCJzaG9wIiwiYm9va3NlYXJjaCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2l6ZSIsImlucHV0cyIsIm9ua2V5ZG93biIsIm9uQ2hhbmdlIiwiY29udGVudCIsImJvb2tsaXN0IiwibWFwIiwiY2FyZCIsImltZyIsInNyYyIsInAiLCJpIiwiYXV0aG9yIiwiYnV0dG9ucyIsInB1cmNoYXNlYnRuIiwicEhpc3RvcnkiLCJoMiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/user/Book.jsx\n"));

/***/ })

});