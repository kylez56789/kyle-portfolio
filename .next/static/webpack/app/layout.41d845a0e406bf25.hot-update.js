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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6d2721fea5cb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzA5ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2ZDI3MjFmZWE1Y2JcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst links = [\n    {\n        name: \"home\",\n        path: \"/\"\n    },\n    {\n        name: \"services\",\n        path: \"/services\"\n    },\n    {\n        name: \"resume\",\n        path: \"/resume\"\n    },\n    {\n        name: \"work\",\n        path: \"/work\"\n    },\n    {\n        name: \"guides\",\n        path: \"/guides\"\n    },\n    {\n        name: \"contact\",\n        path: \"/contact\"\n    }\n];\nconst Nav = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: links.map((link, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: link.path,\n                children: link.name\n            }, index, false, {\n                fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Nav.jsx\",\n                lineNumber: 38,\n                columnNumber: 20\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Nav.jsx\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, undefined);\n};\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUU2QjtBQUNpQjtBQUc5QyxNQUFNRSxRQUFRO0lBQ1Y7UUFDSUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLE1BQU07SUFDVjtJQUNBO1FBQ0lELE1BQU07UUFDTkMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLE1BQU07SUFDVjtJQUNBO1FBQ0lELE1BQU07UUFDTkMsTUFBTTtJQUNWO0NBRUg7QUFFRCxNQUFNQyxNQUFNO0lBQ1IscUJBQU8sOERBQUNDO2tCQUNISixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7WUFDZCxxQkFBTyw4REFBQ1QsaURBQUlBO2dCQUFDVSxNQUFNRixLQUFLSixJQUFJOzBCQUN2QkksS0FBS0wsSUFBSTtlQURxQk07Ozs7O1FBR3ZDOzs7Ozs7QUFFUjtLQVJNSjtBQVVOLCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzeD85ODk5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuXG5jb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiaG9tZVwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzZXJ2aWNlc1wiLFxuICAgICAgICBwYXRoOiBcIi9zZXJ2aWNlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInJlc3VtZVwiLFxuICAgICAgICBwYXRoOiBcIi9yZXN1bWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJ3b3JrXCIsXG4gICAgICAgIHBhdGg6IFwiL3dvcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJndWlkZXNcIixcbiAgICAgICAgcGF0aDogXCIvZ3VpZGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiY29udGFjdFwiLFxuICAgICAgICBwYXRoOiBcIi9jb250YWN0XCIsXG4gICAgfSxcbiAgICBcbl1cblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIHJldHVybiA8bmF2PlxuICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCk9PiB7XG4gICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICB9KX1cbiAgICA8L25hdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsImxpbmtzIiwibmFtZSIsInBhdGgiLCJOYXYiLCJuYXYiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.jsx\n"));

/***/ })

});