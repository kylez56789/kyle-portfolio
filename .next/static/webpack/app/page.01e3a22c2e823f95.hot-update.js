"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Photo.jsx":
/*!******************************!*\
  !*** ./components/Photo.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Photo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/assets/apple.png\",\n                    priority: true,\n                    quality: 100,\n                    fill: true,\n                    alt: \"\",\n                    className: \"object-contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Photo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Photo);\nvar _c;\n$RefreshReg$(_c, \"Photo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGhvdG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVDO0FBQ1I7QUFFL0IsTUFBTUUsUUFBUTtJQUNaLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDSixpREFBTUEsQ0FBQ0csR0FBRztzQkFDVCw0RUFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNILGtEQUFLQTtvQkFDSkksS0FBSTtvQkFDSkMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVEMsSUFBSTtvQkFDSkMsS0FBSTtvQkFDSkwsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0tBakJNRjtBQW1CTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bob3RvLmpzeD8yN2MxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IFBob3RvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByZWxhdGl2ZVwiPlxuICAgICAgPG1vdGlvbi5kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjk4cHhdIGgtWzI5OHB4XSB4bDp3LVs0OThweF0geGw6aC1bNDk4cHhdXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2FwcGxlLnBuZ1wiXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkltYWdlIiwiUGhvdG8iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJwcmlvcml0eSIsInF1YWxpdHkiLCJmaWxsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Photo.jsx\n"));

/***/ })

});