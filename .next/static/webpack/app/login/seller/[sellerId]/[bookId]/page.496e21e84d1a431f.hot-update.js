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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Purchase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_repo_libraryrepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/repo/libraryrepo */ \"(app-pages-browser)/./app/repo/libraryrepo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page.jsx */ \"(app-pages-browser)/./app/page.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nfunction Purchase(param) {\n    let { users, books, transactions, sellerId, id } = param;\n    // const searchParams = useSearchParams()\n    // const [id, setId] = useState(Object.fromEntries(searchParams) || {})\n    const index = books.findIndex((book)=>book.id == Number(id));\n    const book = books[index];\n    const handleGoBack = ()=>{\n        window.location.href = \"http://localhost:3000/login/seller/\".concat(sellerId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_c = Purchase;\nvar _c;\n$RefreshReg$(_c, \"Purchase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9zZWxsZXIvW3NlbGxlcklkXS9bYm9va0lkXS9ib29rZGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDRTtBQUNUO0FBQ2I7QUFDSTtBQUMyQjtBQUc3QyxTQUFTUyxTQUFTLEtBQTBDO1FBQTFDLEVBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsRUFBRSxFQUFDLEdBQTFDO0lBQzdCLHlDQUF5QztJQUN6Qyx1RUFBdUU7SUFDdkUsTUFBTUMsUUFBUUosTUFBTUssU0FBUyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLSCxFQUFFLElBQUlJLE9BQU9KO0lBQ3hELE1BQU1HLE9BQU9OLEtBQUssQ0FBQ0ksTUFBTTtJQUV6QixNQUFNSSxlQUFlO1FBQ2pCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxzQ0FBK0MsT0FBVFQ7SUFDL0Q7SUFFRixxQkFDSTtBQUlSO0tBZndCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vc2VsbGVyL1tzZWxsZXJJZF0vW2Jvb2tJZF0vYm9va2RldGFpbHMuanN4P2Y4MzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgbGlicmFyeXJlcG8gZnJvbSBcIkAvYXBwL3JlcG8vbGlicmFyeXJlcG9cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL2FwcC9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHBhZ2UgZnJvbSAnQC9hcHAvcGFnZS5qc3gnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXJjaGFzZSh7dXNlcnMsIGJvb2tzLCB0cmFuc2FjdGlvbnMsIHNlbGxlcklkLCBpZH0pIHtcbiAgICAvLyBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoT2JqZWN0LmZyb21FbnRyaWVzKHNlYXJjaFBhcmFtcykgfHwge30pXG4gICAgY29uc3QgaW5kZXggPSBib29rcy5maW5kSW5kZXgoYm9vayA9PiBib29rLmlkPT0gIE51bWJlcihpZCkpXG4gICAgY29uc3QgYm9vayA9IGJvb2tzW2luZGV4XVxuICBcbiAgICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbi9zZWxsZXIvJHtzZWxsZXJJZH1gXG4gICAgICB9XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImxpYnJhcnlyZXBvIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJwYWdlIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiUHVyY2hhc2UiLCJ1c2VycyIsImJvb2tzIiwidHJhbnNhY3Rpb25zIiwic2VsbGVySWQiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiYm9vayIsIk51bWJlciIsImhhbmRsZUdvQmFjayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/seller/[sellerId]/[bookId]/bookdetails.jsx\n"));

/***/ })

});