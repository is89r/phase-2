"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/user/[userId]/page",{

/***/ "(app-pages-browser)/./app/login/user/[userId]/Book.jsx":
/*!******************************************!*\
  !*** ./app/login/user/[userId]/Book.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_repo_libraryrepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/repo/libraryrepo */ \"(app-pages-browser)/./app/repo/libraryrepo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page.jsx */ \"(app-pages-browser)/./app/page.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Book(param) {\n    let { users, books, transactions, ID } = param;\n    _s();\n    //   const router = useRouter();\n    //   const { username } = router.query;\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const index = users.findIndex((book)=>book.id == id);\n    const filteredBooks = books.filter((book)=>book.title.toLowerCase().includes(searchQuery.toLowerCase()));\n    const handleSearch = (event)=>{\n        setSearchQuery(event.target.value);\n    };\n    const handleGoBack = ()=>{\n        window.location.href = \"http://localhost:3000\";\n    };\n    const purchaseBookPage = (id1)=>{\n        router.push(\"/login/user/\".concat(ID, \"/\").concat(id1));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"NextPage\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchbtn),\n                                    onClick: handleGoBack,\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().balance),\n                                    id: \"balance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().shop),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"book-search\",\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().booksearch),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"search\",\n                                        placeholder: \"Search for book\",\n                                        size: \"50rem\",\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs),\n                                        onkeydown: \"search(this)\",\n                                        onChange: handleSearch\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"content\",\n                                    className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().booklist),\n                                        children: filteredBooks.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: book.img\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \" \",\n                                                            book.title\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            children: [\n                                                                \"By \",\n                                                                book.author\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 20\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().purchasebtn),\n                                                            onClick: ()=>purchaseBookPage(book.id),\n                                                            children: \"Purchase\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 18\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 44\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().pHistory),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Purchase History\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"purchaseHistory\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                        fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anoud/Documents/S-24/CMPS350-Lab/Phase2/app/login/user/[userId]/Book.jsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Book, \"4sm5Xy4sGA6QIGrHn8tQ9Lk+vI8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi91c2VyL1t1c2VySWRdL0Jvb2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNFO0FBQ1Q7QUFDYjtBQUNJO0FBQzJCO0FBRzdDLFNBQVNTLEtBQUssS0FBZ0M7UUFBaEMsRUFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsRUFBRSxFQUFDLEdBQWhDOztJQUM3QixnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3JDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNYyxTQUFTVCwwREFBU0E7SUFFeEIsTUFBTVUsUUFBUVAsTUFBTVEsU0FBUyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLElBQUdBO0lBQ2hELE1BQU1DLGdCQUFnQlYsTUFBTVcsTUFBTSxDQUFDSCxDQUFBQSxPQUNqQ0EsS0FBS0ksS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1gsWUFBWVUsV0FBVztJQUc3RCxNQUFNRSxlQUFlLENBQUNDO1FBQ2xCWixlQUFlWSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDckM7SUFHSSxNQUFNQyxlQUFlO1FBQ2pCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVGLE1BQU1DLG1CQUFtQixDQUFDZDtRQUN0QkosT0FBT21CLElBQUksQ0FBQyxlQUFxQmYsT0FBTlAsSUFBRyxLQUFNLE9BQUhPO0lBQ3JDO0lBSUMscUJBQ0c7a0JBQ0EsNEVBQUNnQjs7OEJBQ0QsOERBQUNDO29CQUFJQyxXQUFXbEMsb0VBQWE7O3NDQUM3Qiw4REFBQ2lDOzRCQUFJQyxXQUFXbEMsa0VBQVc7c0NBR3ZCLDRFQUFDcUM7MENBQUc7Ozs7Ozs7Ozs7O3NDQUVSLDhEQUFDSjs0QkFBSUMsV0FBV2xDLG1FQUFZOzs4Q0FDeEIsOERBQUN1QztvQ0FBT0wsV0FBV2xDLHVFQUFnQjtvQ0FBRXlDLFNBQVNmOzhDQUFjOzs7Ozs7OENBQ2hFLDhEQUFDTztvQ0FBSUMsV0FBV2xDLHFFQUFjO29DQUFFZ0IsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVNuQyw4REFBQ2lCO29CQUFJQyxXQUFXbEMsa0VBQVc7O3NDQUN2Qiw4REFBQ2lDOzRCQUFJakIsSUFBSWhCLGtFQUFXOzs4Q0FDaEIsOERBQUNpQztvQ0FBSWpCLElBQUc7b0NBQWNrQixXQUFXbEMsd0VBQWlCOzhDQUM5Qyw0RUFBQzhDO3dDQUFNQyxNQUFLO3dDQUFPL0IsSUFBRzt3Q0FBU2dDLGFBQVk7d0NBQWtCQyxNQUFLO3dDQUFRZixXQUFXbEMsb0VBQWE7d0NBQUVtRCxXQUFVO3dDQUFlQyxVQUFVOUI7Ozs7Ozs7Ozs7OzhDQUUzSSw4REFBQ1c7b0NBQUlqQixJQUFHO29DQUFVa0IsV0FBV2xDLHFFQUFjOzhDQUMzQyw0RUFBQ2lDO3dDQUFJQyxXQUFXbEMsc0VBQWU7a0RBQzlCaUIsY0FBY3NDLEdBQUcsQ0FBQ3hDLENBQUFBLHFCQUFRLDhEQUFDa0I7Z0RBQUlDLFdBQVdsQyxrRUFBVzs7a0VBQ3RELDhEQUFDeUQ7d0RBQUlDLEtBQUszQyxLQUFLMEMsR0FBRzs7Ozs7O2tFQUNsQiw4REFBQ0U7OzREQUFFOzREQUFFNUMsS0FBS0ksS0FBSzs7Ozs7OztrRUFDZiw4REFBQ3dDO2tFQUFFLDRFQUFDQzs7Z0VBQUU7Z0VBQUk3QyxLQUFLOEMsTUFBTTs7Ozs7Ozs7Ozs7O2tFQUNyQiw4REFBQzVCO3dEQUFJQyxXQUFXbEMscUVBQWM7a0VBQzdCLDRFQUFDdUM7NERBQU9MLFdBQVdsQyx5RUFBa0I7NERBQUV5QyxTQUFTLElBQU1YLGlCQUFpQmYsS0FBS0MsRUFBRTtzRUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU10Riw4REFBQ2lCOzRCQUFJQyxXQUFXbEMsc0VBQWU7OzhDQUMzQiw4REFBQ2lFOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNoQztvQ0FBSWpCLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLaEIsOERBQUNpQjs4QkFDRyw0RUFBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBN0V3QjdEOztRQUlQRixzREFBU0E7OztLQUpGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vdXNlci9bdXNlcklkXS9Cb29rLmpzeD8xMTllIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IGxpYnJhcnlyZXBvIGZyb20gXCJAL2FwcC9yZXBvL2xpYnJhcnlyZXBvXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9hcHAvcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBwYWdlIGZyb20gJ0AvYXBwL3BhZ2UuanN4J1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7dXNlcnMsIGJvb2tzLCB0cmFuc2FjdGlvbnMsIElEfSkge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaW5kZXggPSB1c2Vycy5maW5kSW5kZXgoYm9vayA9PiBib29rLmlkPT0gaWQpXG4gIGNvbnN0IGZpbHRlcmVkQm9va3MgPSBib29rcy5maWx0ZXIoYm9vayA9PlxuICAgIGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuKVxuXG5jb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xufVxuXG5cbiAgICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbiAgICAgIH1cblxuICAgIGNvbnN0IHB1cmNoYXNlQm9va1BhZ2UgPSAoaWQpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbi91c2VyLyR7SUR9LyR7aWR9YCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSB3aWR0aD1cIjE1MHJlbVwiIGhlaWdodD1cIjE1MHJlbVwiPjwvaW1nPiAqL31cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9JTUdfOTI5NC5QTkdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSB3aWR0aD1cIjE1MHJlbVwiIGhlaWdodD1cIjE1MHJlbVwiPjwvaW1nPiAqL31cbiAgICAgICAgICAgIDxoMT5OZXh0UGFnZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoYnRufSBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsYW5jZX0gaWQ9XCJiYWxhbmNlXCI+XG4gICAgICAgICAgICB7LyogPHA+e3Vzci5iYWxhbmNlfTwvcD4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxwPkJhbGFuY2U8L3A+XG4gICAgICAgICAgICAgICAgPHA+e1xuICAgICAgICAgICAgICAgIHVzZXJzW3VzZXJzLmZpbmRJbmRleCh1ID0+IHUudXNlcm5hbWUgPT0gdXNlcm5hbWUpXS5iYWxhbmNlfTwvcD5gICovfVxuICAgICAgICAgICAgey8qIDwhLS0gPHA+QmFsYW5jZTwvcD4gLS0+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuc2hvcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJvb2stc2VhcmNoXCIgY2xhc3NOYW1lPXtzdHlsZXMuYm9va3NlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGJvb2tcIiBzaXplPVwiNTByZW1cIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9IG9ua2V5ZG93bj1cInNlYXJjaCh0aGlzKVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tsaXN0fT5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRCb29rcy5tYXAoYm9vayA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtib29rLmltZ30+PC9pbWc+XG4gICAgICAgICAgICAgICAgPHA+IHtib29rLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48aT5CeSB7Ym9vay5hdXRob3J9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnB1cmNoYXNlYnRufSBvbkNsaWNrPXsoKSA9PiBwdXJjaGFzZUJvb2tQYWdlKGJvb2suaWQpfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucEhpc3Rvcnl9PlxuICAgICAgICAgICAgICAgIDxoMj5QdXJjaGFzZSBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHVyY2hhc2VIaXN0b3J5XCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2JvZHk+IFxuICAgIDwvPlxuKVxufVxuIl0sIm5hbWVzIjpbImxpYnJhcnlyZXBvIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJwYWdlIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiQm9vayIsInVzZXJzIiwiYm9va3MiLCJ0cmFuc2FjdGlvbnMiLCJJRCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJyb3V0ZXIiLCJpbmRleCIsImZpbmRJbmRleCIsImJvb2siLCJpZCIsImZpbHRlcmVkQm9va3MiLCJmaWx0ZXIiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlR29CYWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHVyY2hhc2VCb29rUGFnZSIsInB1c2giLCJib2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaGVhZCIsImgxIiwibG9naW4iLCJidXR0b24iLCJzZWFyY2hidG4iLCJvbkNsaWNrIiwiYmFsYW5jZSIsIm1haW4iLCJzaG9wIiwiYm9va3NlYXJjaCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2l6ZSIsImlucHV0cyIsIm9ua2V5ZG93biIsIm9uQ2hhbmdlIiwiY29udGVudCIsImJvb2tsaXN0IiwibWFwIiwiY2FyZCIsImltZyIsInNyYyIsInAiLCJpIiwiYXV0aG9yIiwiYnV0dG9ucyIsInB1cmNoYXNlYnRuIiwicEhpc3RvcnkiLCJoMiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/user/[userId]/Book.jsx\n"));

/***/ })

});