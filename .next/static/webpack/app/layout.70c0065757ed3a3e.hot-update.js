"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e3b116c639ef\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzA5ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlM2IxMTZjNjM5ZWZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/MobileNav.jsx":
/*!**********************************!*\
  !*** ./components/MobileNav.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst links = [\n    {\n        name: \"home\",\n        path: \"/\"\n    },\n    {\n        name: \"services\",\n        path: \"/services\"\n    },\n    {\n        name: \"resume\",\n        path: \"/resume\"\n    },\n    {\n        name: \"work\",\n        path: \"/work\"\n    },\n    {\n        name: \"guides\",\n        path: \"/guides\"\n    },\n    {\n        name: \"contact\",\n        path: \"/contact\"\n    }\n];\nconst MobileNav = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: \"MobileNav\"\n    }, void 0, false, {\n        fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/MobileNav.jsx\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, undefined);\n};\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMEU7QUFDNUI7QUFDakI7QUFDZ0I7QUFFN0MsTUFBTU0sUUFBUTtJQUNaO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNEO0FBRUQsTUFBTUMsWUFBWTtJQUNoQixxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztBQUNkO0tBRk1EO0FBSU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVOYXYuanN4P2ZmMTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFNoZWV0LCBTaGVldENvbnRlbnQsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2hlZXRcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ2lNZW51RnJpZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2lcIjtcblxuY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcImhvbWVcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic2VydmljZXNcIixcbiAgICBwYXRoOiBcIi9zZXJ2aWNlc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJyZXN1bWVcIixcbiAgICBwYXRoOiBcIi9yZXN1bWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwid29ya1wiLFxuICAgIHBhdGg6IFwiL3dvcmtcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZ3VpZGVzXCIsXG4gICAgcGF0aDogXCIvZ3VpZGVzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNvbnRhY3RcIixcbiAgICBwYXRoOiBcIi9jb250YWN0XCIsXG4gIH0sXG5dO1xuXG5jb25zdCBNb2JpbGVOYXYgPSAoKSA9PiB7XG4gIHJldHVybiA8bmF2Pk1vYmlsZU5hdjwvbmF2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdjtcbiJdLCJuYW1lcyI6WyJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0VHJpZ2dlciIsInVzZVBhdGhuYW1lIiwiTGluayIsIkNpTWVudUZyaWVzIiwibGlua3MiLCJuYW1lIiwicGF0aCIsIk1vYmlsZU5hdiIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MobileNav.jsx\n"));

/***/ })

});