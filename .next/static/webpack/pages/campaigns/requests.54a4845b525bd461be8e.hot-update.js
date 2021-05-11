webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./components/RequestsRow.js":
/*!***********************************!*\
  !*** ./components/RequestsRow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");










var _jsxFileName = "C:\\margrop\\Solidity\\crowdfund\\components\\RequestsRow.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var RequestRow = /*#__PURE__*/function (_Component) {
  Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onApprove", /*#__PURE__*/Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var campaign, accounts;
      return C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.props.address);
              _context.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onFinalize", /*#__PURE__*/Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var campaign, accounts;
      return C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.props.address);
              _context2.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      var readyToFinalize = request.approvalCount > approversCount / 2;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
        disabled: request.complete,
        positive: readyToFinalize,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.fromWei(request.value, 'ether')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.complete ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            basic: true,
            color: "green",
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 52
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.complete ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            basic: true,
            color: "teal",
            onClick: this.onFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 52
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0c1Jvdy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7OzhuQkFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDREMsc0JBREMsR0FDU0MsbUVBQVEsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLE9BQVosQ0FEakI7QUFBQTtBQUFBLHFCQUVlQyx1REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFGZjs7QUFBQTtBQUVEQyxzQkFGQztBQUFBO0FBQUEscUJBR0RQLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkMsY0FBakIsQ0FBZ0MsTUFBS1AsS0FBTCxDQUFXUSxFQUEzQyxFQUErQ0MsSUFBL0MsQ0FBb0Q7QUFDdERDLG9CQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRHdDLGVBQXBELENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7K25CQU9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGUCxzQkFERSxHQUNRQyxtRUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsT0FBWixDQURoQjtBQUFBO0FBQUEscUJBRWNDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUZkOztBQUFBO0FBRUZDLHNCQUZFO0FBQUE7QUFBQSxxQkFHRlAsUUFBUSxDQUFDUSxPQUFULENBQWlCSyxlQUFqQixDQUFpQyxNQUFLWCxLQUFMLENBQVdRLEVBQTVDLEVBQWdEQyxJQUFoRCxDQUFxRDtBQUN2REMsb0JBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFEeUMsZUFBckQsQ0FIRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7OzZCQU9KO0FBQUEsVUFDR08sR0FESCxHQUNlQyx3REFEZixDQUNHRCxHQURIO0FBQUEsVUFDUUUsSUFEUixHQUNlRCx3REFEZixDQUNRQyxJQURSO0FBQUEsd0JBRWlDLEtBQUtkLEtBRnRDO0FBQUEsVUFFR1EsRUFGSCxlQUVHQSxFQUZIO0FBQUEsVUFFT08sT0FGUCxlQUVPQSxPQUZQO0FBQUEsVUFFZ0JDLGNBRmhCLGVBRWdCQSxjQUZoQjtBQUdKLFVBQU1DLGVBQWUsR0FBRUYsT0FBTyxDQUFDRyxhQUFSLEdBQXVCRixjQUFjLEdBQUMsQ0FBN0Q7QUFDQSwwQkFDSSxxRUFBQyxHQUFEO0FBQUssZ0JBQVEsRUFBRUQsT0FBTyxDQUFDSSxRQUF2QjtBQUFpQyxnQkFBUSxFQUFFRixlQUEzQztBQUFBLGdDQUNJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT1Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsSUFBRDtBQUFBLG9CQUFPTyxPQUFPLENBQUNLO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT2xCLHVEQUFJLENBQUNtQixLQUFMLENBQVdDLE9BQVgsQ0FBbUJQLE9BQU8sQ0FBQ1EsS0FBM0IsRUFBa0MsT0FBbEM7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUkscUVBQUMsSUFBRDtBQUFBLG9CQUFPUixPQUFPLENBQUNTO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLHFFQUFDLElBQUQ7QUFBQSxxQkFBT1QsT0FBTyxDQUFDRyxhQUFmLE9BQStCRixjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSxxRUFBQyxJQUFEO0FBQUEsb0JBRVFELE9BQU8sQ0FBQ0ksUUFBUixHQUFtQixJQUFuQixnQkFBMkIscUVBQUMseURBQUQ7QUFBUSxpQkFBSyxNQUFiO0FBQWMsaUJBQUssRUFBQyxPQUFwQjtBQUE0QixtQkFBTyxFQUFFLEtBQUtNLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFXSSxxRUFBQyxJQUFEO0FBQUEsb0JBRVFWLE9BQU8sQ0FBQ0ksUUFBUixHQUFtQixJQUFuQixnQkFBMkIscUVBQUMseURBQUQ7QUFBUSxpQkFBSyxNQUFiO0FBQWMsaUJBQUssRUFBQyxNQUFwQjtBQUEyQixtQkFBTyxFQUFFLEtBQUtPLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFtQkg7Ozs7RUF0Q29CQyxnRDs7QUF3Q1Y5Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuNTRhNDg0NWI1MjViZDQ2MWJlOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1RhYmxlLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcblxyXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgb25BcHByb3ZlPSBhc3luYygpPT57XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ249IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uRmluYWxpemU9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCBjYW1wYWlnbj0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmZpbmFsaXplUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtSb3csIENlbGx9PSBUYWJsZTtcclxuICAgICAgICBjb25zdCB7aWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50fT0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCByZWFkeVRvRmluYWxpemU9IHJlcXVlc3QuYXBwcm92YWxDb3VudD4oYXBwcm92ZXJzQ291bnQvMik7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8Um93IGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfSBwb3NpdGl2ZT17cmVhZHlUb0ZpbmFsaXplfSA+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCAnZXRoZXInKX08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoPEJ1dHRvbiBiYXNpYyBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9ID5BcHByb3ZlPC9CdXR0b24+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6ICg8QnV0dG9uIGJhc2ljIGNvbG9yPVwidGVhbFwiIG9uQ2xpY2s9e3RoaXMub25GaW5hbGl6ZX0gPkZpbmFsaXplPC9CdXR0b24+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93OyJdLCJzb3VyY2VSb290IjoiIn0=