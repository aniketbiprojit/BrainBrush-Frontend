webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: firebase_config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firebase_config\", function() { return firebase_config; });\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/Home */ \"./components/Home/Home.tsx\");\n/* harmony import */ var _redux_states_ApplicationState_ApplicationSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/states/ApplicationState/ApplicationSlice */ \"./redux/states/ApplicationState/ApplicationSlice.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/aniket/Work/brainbrush-work/frontend/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar firebase_config = {\n  apiKey: 'AIzaSyBh2o3MomQpCFYdxLX_cOILJRsrh82HPrk',\n  authDomain: 'brainbrush-a7722.firebaseapp.com',\n  projectId: 'brainbrush-a7722',\n  storageBucket: 'brainbrush-a7722.appspot.com',\n  messagingSenderId: '84726731717',\n  appId: '1:84726731717:web:3136435aaccd76ddf6b1ac'\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    ApplicationState: state.ApplicationState\n  };\n};\n\nvar dispatchProps = function dispatchProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])({\n    updateLogin: _redux_states_ApplicationState_ApplicationSlice__WEBPACK_IMPORTED_MODULE_10__[\"ApplicationActions\"].updateLogInStatus\n  }, dispatch);\n};\n\nvar connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps, dispatchProps);\n\n/** Root\n * @class HomePage\n * @imports Home\n */\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage() {\n    Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HomePage);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HomePage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this = this;\n\n      console.log(this.props.ApplicationState);\n      this.props.updateLogin(true);\n      console.log(this.props.ApplicationState);\n      window.addEventListener('scroll', function () {\n        _this.scollHandler();\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      var _this2 = this;\n\n      window.addEventListener('scroll', function () {\n        _this2.scollHandler();\n      });\n    }\n  }, {\n    key: \"scollHandler\",\n    value: function scollHandler() {\n      if (window.pageYOffset >= document.getElementById('features').offsetTop - window.innerHeight / 2) {\n        document.getElementById('nav-container').classList.add('bg-gray-900');\n        document.getElementById('nav-container').classList.add('shadow-xl');\n        document.getElementById('nav-container').classList.remove('bg-transparent');\n        document.getElementById('searchbar').classList.add('sm:flex');\n      } else {\n        document.getElementById('nav-container').classList.add('bg-transparent');\n        document.getElementById('nav-container').classList.remove('bg-gray-900');\n        document.getElementById('nav-container').classList.remove('shadow-xl');\n        document.getElementById('searchbar').classList.add('hidden');\n        document.getElementById('searchbar').classList.remove('sm:flex');\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // Home page found in /Components\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Home_Home__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 10\n      }, this);\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c = connector(HomePage));\n\nvar _c;\n\n$RefreshReg$(_c, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZmlyZWJhc2VfY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJBcHBsaWNhdGlvblN0YXRlIiwiZGlzcGF0Y2hQcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwidXBkYXRlTG9naW4iLCJBcHBsaWNhdGlvbkFjdGlvbnMiLCJ1cGRhdGVMb2dJblN0YXR1cyIsImNvbm5lY3RvciIsImNvbm5lY3QiLCJIb21lUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY29sbEhhbmRsZXIiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR08sSUFBTUEsZUFBZSxHQUFHO0FBQzlCQyxRQUFNLEVBQUUseUNBRHNCO0FBRTlCQyxZQUFVLEVBQUUsa0NBRmtCO0FBRzlCQyxXQUFTLEVBQUUsa0JBSG1CO0FBSTlCQyxlQUFhLEVBQUUsOEJBSmU7QUFLOUJDLG1CQUFpQixFQUFFLGFBTFc7QUFNOUJDLE9BQUssRUFBRTtBQU51QixDQUF4Qjs7QUFTUCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUF1QjtBQUM5Q0Msb0JBQWdCLEVBQUVELEtBQUssQ0FBQ0M7QUFEc0IsR0FBdkI7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQ7QUFBQSxTQUFjQyxnRUFBa0IsQ0FBQztBQUFFQyxlQUFXLEVBQUVDLG1HQUFrQixDQUFDQztBQUFsQyxHQUFELEVBQXdESixRQUF4RCxDQUFoQztBQUFBLENBQXRCOztBQUVBLElBQU1LLFNBQVMsR0FBR0MsMkRBQU8sQ0FBQ1YsZUFBRCxFQUFrQkcsYUFBbEIsQ0FBekI7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7SUFDTVEsUTs7Ozs7Ozs7Ozs7Ozt3Q0FDZTtBQUFBOztBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXWixnQkFBdkI7QUFDQSxXQUFLWSxLQUFMLENBQVdSLFdBQVgsQ0FBdUIsSUFBdkI7QUFDQU0sYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXWixnQkFBdkI7QUFFQWEsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3ZDLGFBQUksQ0FBQ0MsWUFBTDtBQUNBLE9BRkQ7QUFHQTs7OzJDQUVxQjtBQUFBOztBQUNyQkYsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3ZDLGNBQUksQ0FBQ0MsWUFBTDtBQUNBLE9BRkQ7QUFHQTs7O21DQUVzQjtBQUN0QixVQUFJRixNQUFNLENBQUNHLFdBQVAsSUFBc0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsU0FBcEMsR0FBZ0ROLE1BQU0sQ0FBQ08sV0FBUCxHQUFxQixDQUEvRixFQUFrRztBQUNqR0gsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0csU0FBekMsQ0FBbURDLEdBQW5ELENBQXVELGFBQXZEO0FBQ0FMLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNHLFNBQXpDLENBQW1EQyxHQUFuRCxDQUF1RCxXQUF2RDtBQUNBTCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxDQUFtREUsTUFBbkQsQ0FBMEQsZ0JBQTFEO0FBQ0FOLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNHLFNBQXJDLENBQStDQyxHQUEvQyxDQUFtRCxTQUFuRDtBQUNBLE9BTEQsTUFLTztBQUNOTCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxDQUFtREMsR0FBbkQsQ0FBdUQsZ0JBQXZEO0FBQ0FMLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNHLFNBQXpDLENBQW1ERSxNQUFuRCxDQUEwRCxhQUExRDtBQUNBTixnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxDQUFtREUsTUFBbkQsQ0FBMEQsV0FBMUQ7QUFDQU4sZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0csU0FBckMsQ0FBK0NDLEdBQS9DLENBQW1ELFFBQW5EO0FBQ0FMLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNHLFNBQXJDLENBQStDRSxNQUEvQyxDQUFzRCxTQUF0RDtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUNSO0FBQ0EsMEJBQU8scUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7Ozs7RUFuQ3FCQyw0Q0FBSyxDQUFDQyxTOztBQXNDZCxvRUFBQWxCLFNBQVMsQ0FBQ0UsUUFBRCxDQUF4QiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0hvbWUnXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkFjdGlvbnMgfSBmcm9tICcuLi9yZWR1eC9zdGF0ZXMvQXBwbGljYXRpb25TdGF0ZS9BcHBsaWNhdGlvblNsaWNlJ1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vcmVkdXgvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBmaXJlYmFzZV9jb25maWcgPSB7XG5cdGFwaUtleTogJ0FJemFTeUJoMm8zTW9tUXBDRllkeExYX2NPSUxKUnNyaDgySFByaycsXG5cdGF1dGhEb21haW46ICdicmFpbmJydXNoLWE3NzIyLmZpcmViYXNlYXBwLmNvbScsXG5cdHByb2plY3RJZDogJ2JyYWluYnJ1c2gtYTc3MjInLFxuXHRzdG9yYWdlQnVja2V0OiAnYnJhaW5icnVzaC1hNzcyMi5hcHBzcG90LmNvbScsXG5cdG1lc3NhZ2luZ1NlbmRlcklkOiAnODQ3MjY3MzE3MTcnLFxuXHRhcHBJZDogJzE6ODQ3MjY3MzE3MTc6d2ViOjMxMzY0MzVhYWNjZDc2ZGRmNmIxYWMnLFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcblx0QXBwbGljYXRpb25TdGF0ZTogc3RhdGUuQXBwbGljYXRpb25TdGF0ZSxcbn0pXG5cbmNvbnN0IGRpc3BhdGNoUHJvcHMgPSAoZGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7IHVwZGF0ZUxvZ2luOiBBcHBsaWNhdGlvbkFjdGlvbnMudXBkYXRlTG9nSW5TdGF0dXMgfSwgZGlzcGF0Y2gpXG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFByb3BzKVxuXG50eXBlIFByb3BzRnJvbVJlZHV4ID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj5cblxuLyoqIFJvb3RcbiAqIEBjbGFzcyBIb21lUGFnZVxuICogQGltcG9ydHMgSG9tZVxuICovXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wc0Zyb21SZWR1eCAmIHt9PiB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMuQXBwbGljYXRpb25TdGF0ZSlcblx0XHR0aGlzLnByb3BzLnVwZGF0ZUxvZ2luKHRydWUpXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5BcHBsaWNhdGlvblN0YXRlKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdHRoaXMuc2NvbGxIYW5kbGVyKClcblx0XHR9KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKXtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY29sbEhhbmRsZXIoKVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIHNjb2xsSGFuZGxlcigpIHtcblx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWF0dXJlcycpLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS05MDAnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdzaGFkb3cteGwnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy10cmFuc3BhcmVudCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYmFyJykuY2xhc3NMaXN0LmFkZCgnc206ZmxleCcpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnYmctdHJhbnNwYXJlbnQnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTkwMCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWRvdy14bCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYmFyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hiYXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzbTpmbGV4Jylcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gSG9tZSBwYWdlIGZvdW5kIGluIC9Db21wb25lbnRzXG5cdFx0cmV0dXJuIDxIb21lPjwvSG9tZT5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoSG9tZVBhZ2UpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})