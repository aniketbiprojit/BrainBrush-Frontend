webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: firebase_config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firebase_config\", function() { return firebase_config; });\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/Home */ \"./components/Home/Home.tsx\");\n/* harmony import */ var _redux_states_ApplicationState_ApplicationSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/states/ApplicationState/ApplicationSlice */ \"./redux/states/ApplicationState/ApplicationSlice.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/aniket/Work/brainbrush-work/frontend/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar firebase_config = {\n  apiKey: 'AIzaSyBh2o3MomQpCFYdxLX_cOILJRsrh82HPrk',\n  authDomain: 'brainbrush-a7722.firebaseapp.com',\n  projectId: 'brainbrush-a7722',\n  storageBucket: 'brainbrush-a7722.appspot.com',\n  messagingSenderId: '84726731717',\n  appId: '1:84726731717:web:3136435aaccd76ddf6b1ac'\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    ApplicationState: state.ApplicationState\n  };\n};\n\nvar dispatchProps = function dispatchProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])({\n    updateLogin: _redux_states_ApplicationState_ApplicationSlice__WEBPACK_IMPORTED_MODULE_10__[\"ApplicationActions\"].updateLogInStatus\n  }, dispatch);\n};\n\nvar connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps, dispatchProps);\n\n/** Root\n * @class HomePage\n * @imports Home\n */\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage() {\n    Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HomePage);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_aniket_Work_brainbrush_work_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HomePage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this = this;\n\n      console.log(this.props.ApplicationState);\n      this.props.updateLogin(true);\n      console.log(this.props.ApplicationState);\n      window.addEventListener('scroll', function () {\n        _this.scollHandler();\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      var _this2 = this;\n\n      window.removeEventListener('scroll', function () {\n        _this2.scollHandler();\n      });\n    }\n  }, {\n    key: \"scollHandler\",\n    value: function scollHandler() {\n      try {\n        if (window.pageYOffset >= document.getElementById('features').offsetTop - window.innerHeight / 2) {\n          document.getElementById('nav-container').classList.add('bg-gray-900');\n          document.getElementById('nav-container').classList.add('shadow-xl');\n          document.getElementById('nav-container').classList.remove('bg-transparent');\n          document.getElementById('searchbar').classList.add('sm:flex');\n        } else {\n          document.getElementById('nav-container').classList.add('bg-transparent');\n          document.getElementById('nav-container').classList.remove('bg-gray-900');\n          document.getElementById('nav-container').classList.remove('shadow-xl');\n          document.getElementById('searchbar').classList.add('hidden');\n          document.getElementById('searchbar').classList.remove('sm:flex');\n        }\n      } catch (err) {\n        console.error(err);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // Home page found in /Components\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Home_Home__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 10\n      }, this);\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c = connector(HomePage));\n\nvar _c;\n\n$RefreshReg$(_c, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZmlyZWJhc2VfY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJBcHBsaWNhdGlvblN0YXRlIiwiZGlzcGF0Y2hQcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwidXBkYXRlTG9naW4iLCJBcHBsaWNhdGlvbkFjdGlvbnMiLCJ1cGRhdGVMb2dJblN0YXR1cyIsImNvbm5lY3RvciIsImNvbm5lY3QiLCJIb21lUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY29sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0VG9wIiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlcnIiLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR08sSUFBTUEsZUFBZSxHQUFHO0FBQzlCQyxRQUFNLEVBQUUseUNBRHNCO0FBRTlCQyxZQUFVLEVBQUUsa0NBRmtCO0FBRzlCQyxXQUFTLEVBQUUsa0JBSG1CO0FBSTlCQyxlQUFhLEVBQUUsOEJBSmU7QUFLOUJDLG1CQUFpQixFQUFFLGFBTFc7QUFNOUJDLE9BQUssRUFBRTtBQU51QixDQUF4Qjs7QUFTUCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUF1QjtBQUM5Q0Msb0JBQWdCLEVBQUVELEtBQUssQ0FBQ0M7QUFEc0IsR0FBdkI7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQ7QUFBQSxTQUFjQyxnRUFBa0IsQ0FBQztBQUFFQyxlQUFXLEVBQUVDLG1HQUFrQixDQUFDQztBQUFsQyxHQUFELEVBQXdESixRQUF4RCxDQUFoQztBQUFBLENBQXRCOztBQUVBLElBQU1LLFNBQVMsR0FBR0MsMkRBQU8sQ0FBQ1YsZUFBRCxFQUFrQkcsYUFBbEIsQ0FBekI7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7SUFDTVEsUTs7Ozs7Ozs7Ozs7Ozt3Q0FDZTtBQUFBOztBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXWixnQkFBdkI7QUFDQSxXQUFLWSxLQUFMLENBQVdSLFdBQVgsQ0FBdUIsSUFBdkI7QUFDQU0sYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXWixnQkFBdkI7QUFFQWEsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3ZDLGFBQUksQ0FBQ0MsWUFBTDtBQUNBLE9BRkQ7QUFHQTs7OzJDQUVzQjtBQUFBOztBQUN0QkYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxZQUFNO0FBQzFDLGNBQUksQ0FBQ0QsWUFBTDtBQUNBLE9BRkQ7QUFHQTs7O21DQUVzQjtBQUN0QixVQUFJO0FBQ0gsWUFBSUYsTUFBTSxDQUFDSSxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFNBQXBDLEdBQWdEUCxNQUFNLENBQUNRLFdBQVAsR0FBcUIsQ0FBL0YsRUFBa0c7QUFDakdILGtCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNHLFNBQXpDLENBQW1EQyxHQUFuRCxDQUF1RCxhQUF2RDtBQUNBTCxrQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxDQUFtREMsR0FBbkQsQ0FBdUQsV0FBdkQ7QUFDQUwsa0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0csU0FBekMsQ0FBbURFLE1BQW5ELENBQTBELGdCQUExRDtBQUNBTixrQkFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDRyxTQUFyQyxDQUErQ0MsR0FBL0MsQ0FBbUQsU0FBbkQ7QUFDQSxTQUxELE1BS087QUFDTkwsa0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0csU0FBekMsQ0FBbURDLEdBQW5ELENBQXVELGdCQUF2RDtBQUNBTCxrQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxDQUFtREUsTUFBbkQsQ0FBMEQsYUFBMUQ7QUFDQU4sa0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0csU0FBekMsQ0FBbURFLE1BQW5ELENBQTBELFdBQTFEO0FBQ0FOLGtCQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNHLFNBQXJDLENBQStDQyxHQUEvQyxDQUFtRCxRQUFuRDtBQUNBTCxrQkFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDRyxTQUFyQyxDQUErQ0UsTUFBL0MsQ0FBc0QsU0FBdEQ7QUFDQTtBQUNELE9BYkQsQ0FhRSxPQUFPQyxHQUFQLEVBQVk7QUFDYmYsZUFBTyxDQUFDZ0IsS0FBUixDQUFjRCxHQUFkO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQ1I7QUFDQSwwQkFBTyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDQTs7OztFQXZDcUJFLDRDQUFLLENBQUNDLFM7O0FBMENkLG9FQUFBckIsU0FBUyxDQUFDRSxRQUFELENBQXhCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvSG9tZSdcbmltcG9ydCB7IEFwcGxpY2F0aW9uQWN0aW9ucyB9IGZyb20gJy4uL3JlZHV4L3N0YXRlcy9BcHBsaWNhdGlvblN0YXRlL0FwcGxpY2F0aW9uU2xpY2UnXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yZWR1eC90eXBlcydcblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlX2NvbmZpZyA9IHtcblx0YXBpS2V5OiAnQUl6YVN5QmgybzNNb21RcENGWWR4TFhfY09JTEpSc3JoODJIUHJrJyxcblx0YXV0aERvbWFpbjogJ2JyYWluYnJ1c2gtYTc3MjIuZmlyZWJhc2VhcHAuY29tJyxcblx0cHJvamVjdElkOiAnYnJhaW5icnVzaC1hNzcyMicsXG5cdHN0b3JhZ2VCdWNrZXQ6ICdicmFpbmJydXNoLWE3NzIyLmFwcHNwb3QuY29tJyxcblx0bWVzc2FnaW5nU2VuZGVySWQ6ICc4NDcyNjczMTcxNycsXG5cdGFwcElkOiAnMTo4NDcyNjczMTcxNzp3ZWI6MzEzNjQzNWFhY2NkNzZkZGY2YjFhYycsXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuXHRBcHBsaWNhdGlvblN0YXRlOiBzdGF0ZS5BcHBsaWNhdGlvblN0YXRlLFxufSlcblxuY29uc3QgZGlzcGF0Y2hQcm9wcyA9IChkaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdXBkYXRlTG9naW46IEFwcGxpY2F0aW9uQWN0aW9ucy51cGRhdGVMb2dJblN0YXR1cyB9LCBkaXNwYXRjaClcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoUHJvcHMpXG5cbnR5cGUgUHJvcHNGcm9tUmVkdXggPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPlxuXG4vKiogUm9vdFxuICogQGNsYXNzIEhvbWVQYWdlXG4gKiBAaW1wb3J0cyBIb21lXG4gKi9cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzRnJvbVJlZHV4ICYge30+IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5BcHBsaWNhdGlvblN0YXRlKVxuXHRcdHRoaXMucHJvcHMudXBkYXRlTG9naW4odHJ1ZSlcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLkFwcGxpY2F0aW9uU3RhdGUpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY29sbEhhbmRsZXIoKVxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY29sbEhhbmRsZXIoKVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIHNjb2xsSGFuZGxlcigpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVhdHVyZXMnKS5vZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS05MDAnKVxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ3NoYWRvdy14bCcpXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYmctdHJhbnNwYXJlbnQnKVxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYmFyJykuY2xhc3NMaXN0LmFkZCgnc206ZmxleCcpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ2JnLXRyYW5zcGFyZW50Jylcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTkwMCcpXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZG93LXhsJylcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGJhcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hiYXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzbTpmbGV4Jylcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHQvLyBIb21lIHBhZ2UgZm91bmQgaW4gL0NvbXBvbmVudHNcblx0XHRyZXR1cm4gPEhvbWU+PC9Ib21lPlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihIb21lUGFnZSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})