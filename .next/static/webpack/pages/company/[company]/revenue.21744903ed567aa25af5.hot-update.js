webpackHotUpdate_N_E("pages/company/[company]/revenue",{

/***/ "./pages/company/[company]/revenue/index.tsx":
/*!***************************************************!*\
  !*** ./pages/company/[company]/revenue/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Company_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Company/Header */ \"./components/Company/Header/index.tsx\");\n\n\n\nvar _jsxFileName = \"/home/aniket/Work/brainbrush-work/frontend/pages/company/[company]/revenue/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import Link from 'next/link'\n\n\n\n\nvar Revenue = function Revenue(_ref) {\n  _s();\n\n  var company = _ref.company;\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      route = _useRouter.route,\n      query = _useRouter.query;\n\n  var isAbsolute = route === '/company/[company]/revenue';\n\n  if (isAbsolute) {\n    company = query.company;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [isAbsolute && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Company_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        company: company\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 6\n      }, _this)\n    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 4\n      }, _this), \"Data from Revenue Page\"]\n    }, void 0, true)]\n  }, void 0, true);\n};\n\n_s(Revenue, \"be92J9RsRId+LisfbK0JNJYpPac=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Revenue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Revenue);\n\nvar _c;\n\n$RefreshReg$(_c, \"Revenue\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGFueS9bY29tcGFueV0vcmV2ZW51ZS9pbmRleC50c3g/NWQ0NCJdLCJuYW1lcyI6WyJSZXZlbnVlIiwiY29tcGFueSIsInVzZVJvdXRlciIsInJvdXRlIiwicXVlcnkiLCJpc0Fic29sdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQXNDLEdBQUcsU0FBekNBLE9BQXlDLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLG1CQUN0Q0MseUVBQVMsRUFENkI7QUFBQSxNQUN2REMsS0FEdUQsY0FDdkRBLEtBRHVEO0FBQUEsTUFDaERDLEtBRGdELGNBQ2hEQSxLQURnRDs7QUFFL0QsTUFBTUMsVUFBVSxHQUFHRixLQUFLLEtBQUssNEJBQTdCOztBQUNBLE1BQUlFLFVBQUosRUFBZ0I7QUFDZkosV0FBTyxHQUFHRyxLQUFLLENBQUNILE9BQWhCO0FBQ0E7O0FBQ0Qsc0JBQ0M7QUFBQSxlQUNFSSxVQUFVLGlCQUNWO0FBQUEsNkJBQ0MscUVBQUMsa0VBQUQ7QUFBZSxlQUFPLEVBQUVKO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxxQkFGRixlQU1DO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBO0FBQUEsb0JBTkQ7QUFBQSxrQkFERDtBQW1CQSxDQXpCRDs7R0FBTUQsTztVQUNvQkUsaUU7OztLQURwQkYsTztBQTJCU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wYW55L1tjb21wYW55XS9yZXZlbnVlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ29tcGFueUhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NvbXBhbnkvSGVhZGVyJ1xuXG5jb25zdCBSZXZlbnVlOiBSZWFjdC5GQzx7IGNvbXBhbnk6IHN0cmluZyB9PiA9ICh7IGNvbXBhbnkgfSkgPT4ge1xuXHRjb25zdCB7IHJvdXRlLCBxdWVyeSB9ID0gdXNlUm91dGVyKClcblx0Y29uc3QgaXNBYnNvbHV0ZSA9IHJvdXRlID09PSAnL2NvbXBhbnkvW2NvbXBhbnldL3JldmVudWUnXG5cdGlmIChpc0Fic29sdXRlKSB7XG5cdFx0Y29tcGFueSA9IHF1ZXJ5LmNvbXBhbnkgYXMgc3RyaW5nXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e2lzQWJzb2x1dGUgJiYgKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxDb21wYW55SGVhZGVyIGNvbXBhbnk9e2NvbXBhbnl9IC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHRcdDw+XG5cdFx0XHQ8aDI+XG5cdFx0XHRcdFxuXHRcdFx0PC9oMj5cblx0XHRcdFx0RGF0YSBmcm9tIFJldmVudWUgUGFnZVxuXHRcdFx0XHR7LyogUmVsYXRpdmUgUGFnZSBMaW5rIHRvIEFic29sdXRlIHtjb21wYW55fVxuXHRcdFx0XHQ8TGluayBocmVmPXtgL2NvbXBhbnkvJHtjb21wYW55fS9yZXZlbnVlYH0+XG5cdFx0XHRcdFx0PHA+UGFnZTwvcD5cblx0XHRcdFx0PC9MaW5rPiAqL31cblx0XHRcdDwvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmVudWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/company/[company]/revenue/index.tsx\n");

/***/ })

})