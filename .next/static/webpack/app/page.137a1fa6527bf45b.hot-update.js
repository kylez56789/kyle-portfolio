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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Photo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1,\n                transition: {\n                    delay: 2,\n                    duration: 0.4,\n                    ease: \"easeIn\"\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1,\n                    transition: {\n                        delay: 2.4,\n                        duration: 0.4,\n                        ease: \"easeInOut\"\n                    }\n                },\n                className: \"w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/assets/apple.png\",\n                    priority: true,\n                    quality: 100,\n                    fill: true,\n                    alt: \"\",\n                    className: \"object-contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kylezhang/Desktop/personal/kyle-portfolio/kyle-portfolio/components/Photo.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Photo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Photo);\nvar _c;\n$RefreshReg$(_c, \"Photo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGhvdG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVDO0FBQ1I7QUFFL0IsTUFBTUUsUUFBUTtJQUNaLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDSixpREFBTUEsQ0FBQ0csR0FBRztZQUNURSxTQUFTO2dCQUFFQyxTQUFTO1lBQUU7WUFDdEJDLFNBQVM7Z0JBQ1BELFNBQVM7Z0JBQ1RFLFlBQVk7b0JBQUVDLE9BQU87b0JBQUdDLFVBQVU7b0JBQUtDLE1BQU07Z0JBQVM7WUFDeEQ7c0JBR0EsNEVBQUNYLGlEQUFNQSxDQUFDRyxHQUFHO2dCQUNURSxTQUFTO29CQUFFQyxTQUFTO2dCQUFFO2dCQUN0QkMsU0FBUztvQkFDUEQsU0FBUztvQkFDVEUsWUFBWTt3QkFBRUMsT0FBTzt3QkFBS0MsVUFBVTt3QkFBS0MsTUFBTTtvQkFBWTtnQkFDN0Q7Z0JBQ0FQLFdBQVU7MEJBRVYsNEVBQUNILGtEQUFLQTtvQkFDSlcsS0FBSTtvQkFDSkMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVEMsSUFBSTtvQkFDSkMsS0FBSTtvQkFDSlosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRCO0tBakNNRjtBQW1DTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bob3RvLmpzeD8yN2MxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IFBob3RvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByZWxhdGl2ZVwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHsgZGVsYXk6IDIsIGR1cmF0aW9uOiAwLjQsIGVhc2U6IFwiZWFzZUluXCIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgey8qIGltYWdlICovfVxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGRlbGF5OiAyLjQsIGR1cmF0aW9uOiAwLjQsIGVhc2U6IFwiZWFzZUluT3V0XCIgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI5OHB4XSBoLVsyOThweF0geGw6dy1bNDk4cHhdIHhsOmgtWzQ5OHB4XSBtaXgtYmxlbmQtbGlnaHRlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvYXBwbGUucG5nXCJcbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogY2lyY2xlICovfVxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG87XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSW1hZ2UiLCJQaG90byIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzZSIsInNyYyIsInByaW9yaXR5IiwicXVhbGl0eSIsImZpbGwiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Photo.jsx\n"));

/***/ })

});