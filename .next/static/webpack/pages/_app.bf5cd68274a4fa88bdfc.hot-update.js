webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: firebase_config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firebase_config\", function() { return firebase_config; });\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/Home */ \"./components/Home/Home.tsx\");\n/* harmony import */ var _redux_states_ApplicationState_ApplicationSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/states/ApplicationState/ApplicationSlice */ \"./redux/states/ApplicationState/ApplicationSlice.ts\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/aniket/Work/brainbrush-work/frontend/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar firebase_config = {\n  apiKey: 'AIzaSyBh2o3MomQpCFYdxLX_cOILJRsrh82HPrk',\n  authDomain: 'brainbrush-a7722.firebaseapp.com',\n  projectId: 'brainbrush-a7722',\n  storageBucket: 'brainbrush-a7722.appspot.com',\n  messagingSenderId: '84726731717',\n  appId: '1:84726731717:web:3136435aaccd76ddf6b1ac'\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    ApplicationState: state.ApplicationState\n  };\n};\n\nvar dispatchProps = function dispatchProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_10__[\"bindActionCreators\"])({\n    updateLogin: _redux_states_ApplicationState_ApplicationSlice__WEBPACK_IMPORTED_MODULE_12__[\"ApplicationActions\"].updateLogInStatus\n  }, dispatch);\n};\n\nvar connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, dispatchProps);\n\n/** Root\n * @class HomePage\n * @imports Home\n */\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage() {\n    var _this;\n\n    Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HomePage);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"compon\", void 0);\n\n    return _this;\n  }\n\n  Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HomePage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      console.log(this.props.ApplicationState);\n      this.props.updateLogin(true);\n      console.log(this.props.ApplicationState);\n      window.addEventListener('scroll', function () {\n        _this2.scollHandler();\n      });\n    }\n  }, {\n    key: \"scollHandler\",\n    value: function scollHandler() {\n      if (window.pageYOffset >= document.getElementById('features').offsetTop - window.innerHeight / 2) {\n        document.getElementById('nav-container').classList.add('bg-gray-900');\n        document.getElementById('nav-container').classList.add('shadow-xl');\n        document.getElementById('nav-container').classList.remove('bg-transparent');\n        document.getElementById('searchbar').classList.add('sm:flex');\n      } else {\n        document.getElementById('nav-container').classList.add('bg-transparent');\n        document.getElementById('nav-container').classList.remove('bg-gray-900');\n        document.getElementById('nav-container').classList.remove('shadow-xl');\n        document.getElementById('searchbar').classList.add('hidden');\n        document.getElementById('searchbar').classList.remove('sm:flex');\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // Home page found in /Components\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_Home_Home__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 10\n      }, this);\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c = connector(HomePage));\n\nvar _c;\n\n$RefreshReg$(_c, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZmlyZWJhc2VfY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJBcHBsaWNhdGlvblN0YXRlIiwiZGlzcGF0Y2hQcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwidXBkYXRlTG9naW4iLCJBcHBsaWNhdGlvbkFjdGlvbnMiLCJ1cGRhdGVMb2dJblN0YXR1cyIsImNvbm5lY3RvciIsImNvbm5lY3QiLCJIb21lUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY29sbEhhbmRsZXIiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdPLElBQU1BLGVBQWUsR0FBRztBQUM5QkMsUUFBTSxFQUFFLHlDQURzQjtBQUU5QkMsWUFBVSxFQUFFLGtDQUZrQjtBQUc5QkMsV0FBUyxFQUFFLGtCQUhtQjtBQUk5QkMsZUFBYSxFQUFFLDhCQUplO0FBSzlCQyxtQkFBaUIsRUFBRSxhQUxXO0FBTTlCQyxPQUFLLEVBQUU7QUFOdUIsQ0FBeEI7O0FBU1AsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBdUI7QUFDOUNDLG9CQUFnQixFQUFFRCxLQUFLLENBQUNDO0FBRHNCLEdBQXZCO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFEO0FBQUEsU0FBY0MsaUVBQWtCLENBQUM7QUFBRUMsZUFBVyxFQUFFQyxtR0FBa0IsQ0FBQ0M7QUFBbEMsR0FBRCxFQUF3REosUUFBeEQsQ0FBaEM7QUFBQSxDQUF0Qjs7QUFFQSxJQUFNSyxTQUFTLEdBQUdDLDJEQUFPLENBQUNWLGVBQUQsRUFBa0JHLGFBQWxCLENBQXpCOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0lBQ01RLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUNlO0FBQUE7O0FBQ25CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdaLGdCQUF2QjtBQUNBLFdBQUtZLEtBQUwsQ0FBV1IsV0FBWCxDQUF1QixJQUF2QjtBQUNBTSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdaLGdCQUF2QjtBQUVBYSxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdkMsY0FBSSxDQUFDQyxZQUFMO0FBQ0EsT0FGRDtBQUdBOzs7bUNBSXNCO0FBQ3RCLFVBQUlGLE1BQU0sQ0FBQ0csV0FBUCxJQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxTQUFwQyxHQUFnRE4sTUFBTSxDQUFDTyxXQUFQLEdBQXFCLENBQS9GLEVBQWtHO0FBQ2pHSCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxDQUFtREMsR0FBbkQsQ0FBdUQsYUFBdkQ7QUFDQUwsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0csU0FBekMsQ0FBbURDLEdBQW5ELENBQXVELFdBQXZEO0FBQ0FMLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNHLFNBQXpDLENBQW1ERSxNQUFuRCxDQUEwRCxnQkFBMUQ7QUFDQU4sZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0csU0FBckMsQ0FBK0NDLEdBQS9DLENBQW1ELFNBQW5EO0FBQ0EsT0FMRCxNQUtPO0FBQ05MLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNHLFNBQXpDLENBQW1EQyxHQUFuRCxDQUF1RCxnQkFBdkQ7QUFDQUwsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0csU0FBekMsQ0FBbURFLE1BQW5ELENBQTBELGFBQTFEO0FBQ0FOLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNHLFNBQXpDLENBQW1ERSxNQUFuRCxDQUEwRCxXQUExRDtBQUNBTixnQkFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDRyxTQUFyQyxDQUErQ0MsR0FBL0MsQ0FBbUQsUUFBbkQ7QUFDQUwsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0csU0FBckMsQ0FBK0NFLE1BQS9DLENBQXNELFNBQXREO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQ1I7QUFDQSwwQkFBTyxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDQTs7OztFQS9CcUJDLDRDQUFLLENBQUNDLFM7O0FBa0NkLG9FQUFBbEIsU0FBUyxDQUFDRSxRQUFELENBQXhCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvSG9tZSdcbmltcG9ydCB7IEFwcGxpY2F0aW9uQWN0aW9ucyB9IGZyb20gJy4uL3JlZHV4L3N0YXRlcy9BcHBsaWNhdGlvblN0YXRlL0FwcGxpY2F0aW9uU2xpY2UnXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yZWR1eC90eXBlcydcblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlX2NvbmZpZyA9IHtcblx0YXBpS2V5OiAnQUl6YVN5QmgybzNNb21RcENGWWR4TFhfY09JTEpSc3JoODJIUHJrJyxcblx0YXV0aERvbWFpbjogJ2JyYWluYnJ1c2gtYTc3MjIuZmlyZWJhc2VhcHAuY29tJyxcblx0cHJvamVjdElkOiAnYnJhaW5icnVzaC1hNzcyMicsXG5cdHN0b3JhZ2VCdWNrZXQ6ICdicmFpbmJydXNoLWE3NzIyLmFwcHNwb3QuY29tJyxcblx0bWVzc2FnaW5nU2VuZGVySWQ6ICc4NDcyNjczMTcxNycsXG5cdGFwcElkOiAnMTo4NDcyNjczMTcxNzp3ZWI6MzEzNjQzNWFhY2NkNzZkZGY2YjFhYycsXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuXHRBcHBsaWNhdGlvblN0YXRlOiBzdGF0ZS5BcHBsaWNhdGlvblN0YXRlLFxufSlcblxuY29uc3QgZGlzcGF0Y2hQcm9wcyA9IChkaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdXBkYXRlTG9naW46IEFwcGxpY2F0aW9uQWN0aW9ucy51cGRhdGVMb2dJblN0YXR1cyB9LCBkaXNwYXRjaClcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoUHJvcHMpXG5cbnR5cGUgUHJvcHNGcm9tUmVkdXggPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPlxuXG4vKiogUm9vdFxuICogQGNsYXNzIEhvbWVQYWdlXG4gKiBAaW1wb3J0cyBIb21lXG4gKi9cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzRnJvbVJlZHV4ICYge30+IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5BcHBsaWNhdGlvblN0YXRlKVxuXHRcdHRoaXMucHJvcHMudXBkYXRlTG9naW4odHJ1ZSlcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLkFwcGxpY2F0aW9uU3RhdGUpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY29sbEhhbmRsZXIoKVxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25cblxuXHRwcml2YXRlIHNjb2xsSGFuZGxlcigpIHtcblx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWF0dXJlcycpLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS05MDAnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdzaGFkb3cteGwnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy10cmFuc3BhcmVudCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYmFyJykuY2xhc3NMaXN0LmFkZCgnc206ZmxleCcpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnYmctdHJhbnNwYXJlbnQnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTkwMCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWRvdy14bCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYmFyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hiYXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzbTpmbGV4Jylcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gSG9tZSBwYWdlIGZvdW5kIGluIC9Db21wb25lbnRzXG5cdFx0cmV0dXJuIDxIb21lPjwvSG9tZT5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoSG9tZVBhZ2UpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})