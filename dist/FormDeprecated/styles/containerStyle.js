"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedContainer = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "tag", "size"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var sharedContainer = exports.sharedContainer = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  border: 1px solid #D2D1D1;\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n  \n  &.style1\n  {\n    border: 1px solid #454650;\n    background-color: #2B2D39;\n  }\n\n  &.style1{\n    label.placeholder {\n      color: #6F7080;\n      z-index: 1000;\n    }\n  }\n  \n  ", "\n  \n  ", "\n"])), function (props) {
  return props.disabled === true && "\n      background-color: #FAFAFA !important;\n      \n      &.style2\n      {\n        background-color: #2B2D39 !important;\n      }\n\n      \n      &:-webkit-autofill,\n      &:-webkit-autofill:hover, \n      &:-webkit-autofill:focus, \n      &:-webkit-autofill:active\n      {\n       -webkit-box-shadow: 0 0 0 30px #FAFAFA inset !important;\n      }\n  ";
}, function (props) {
  return props.slim && "\n      \n  ";
});
var containerTag = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedContainer);
var accountNameTag = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 364px;\n  min-width: 364px;\n  margin: 15px 0;\n"])), sharedContainer);
var smallSubaccountNameTag = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 123px;\n  min-width: 123px;\n  margin: 3px 5px;\n"])), sharedContainer);
var smallAccountNameTag = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 191px;\n  min-width: 191px;\n  margin: 3px 5px;\n"])), sharedContainer);
var accountSumTag = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 178px;\n  min-width: 178px;\n  margin: 15px 40px;\n"])), sharedContainer);
var portfolioPlanSumTag = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 178px;\n  min-width: 178px;\n  margin: 15px 10px;\n"])), sharedContainer);
var smallSubaccountSumTag = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 103px;\n  min-width: 103px;\n  margin: 3px 5px;\n"])), sharedContainer);
var smallProperty = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 179px;\n  margin: 5px 8px;\n"])), sharedContainer);
var accountCurrencyTag = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 115px;\n  min-width: 115px;\n  margin: 5px 5px;\n"])), sharedContainer);
var smallSubaccountCurrencyTag = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 81px;\n  min-width: 81px;\n  margin: 3px 5px;\n"])), sharedContainer);
var planSalaryDay = _styledComponents["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 51px;\n  min-width: 51px;\n  margin: 3px 5px;\n  \n  height: 28px;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 0 8px;\n    margin-top: 0;\n  }\n  \n  input::placeholder {\n    color: #7F818D;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n  .calendar{\n    display: none !important;\n  }\n"])), sharedContainer);
var planSalarySum = _styledComponents["default"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 116px;\n  min-width: 116px;\n  margin: 3px 5px;\n  \n  height: 28px;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 0 8px;\n    margin-top: 0;\n    text-align: right;\n  }\n  \n  input::placeholder {\n    color: #7F818D;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n  .calendar{\n    display: none !important;\n  }\n"])), sharedContainer);
var spendingFilterTag = _styledComponents["default"].div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n  \n  margin: 4px 0 !important;\n  max-width: 87px !important;\n  min-width: 87px !important;\n  height: 28px;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 0 8px;\n    margin-top: 0;\n  }\n  \n  input::placeholder {\n    color: #7F818D;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n  .calendar{\n    display: none !important;\n  }\n"])), sharedContainer);
var budgetSum = _styledComponents["default"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  ", "\n  \n  height: 31px;\n  line-height: 25px;\n  padding: 2px 5px;\n  margin: 0;\n  max-width: 93px;\n  min-width: 93px;\n  \n  display: inline-block;\n  /* width: 100%; */\n  /* margin: 0 auto; */\n  margin-left: auto;\n  margin-right: 6px;\n  \n  & > div{\n    height: 31px;\n    width: 100% !important;\n  }\n  \n  input{\n    font-size: 16px;\n    line-height: 13px;\n    padding: 0 9px  0 0;\n    height: 25px;\n    text-align: right;\n    margin: 0;\n    font-weight: 400;\n    border-radius: 0;\n        \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  .placeholder{\n    display: none;\n  }\n"])), sharedContainer);
var budgetName = _styledComponents["default"].div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", "\n  \n  height: 28px;\n  line-height: 28px;\n  padding: 0 5px;\n  margin: 0;\n  max-width: 93px;\n  min-width: 93px;\n  \n  display: inline-block;\n  margin-left: auto;\n  margin-right: 6px;\n  \n  & > div{\n    height: 31px;\n    width: 100% !important;\n  }\n  \n  input{\n    font-size: 16px;\n    line-height: 13px;\n    padding: 0 9px  0 0;\n    height: 25px;\n    text-align: right;\n    margin: 0;\n    font-weight: 400;\n    border-radius: 0;\n        \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  .placeholder{\n    display: none;\n  }\n"])), sharedContainer);
var planNumberTag = _styledComponents["default"].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  ", "\n  \n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  padding: 2px 1px;\n  min-width: 47px;\n  margin: 0;\n  \n  & > div{\n    height: 20px;\n    width: 100% !important;\n  }\n  \n  input{\n    font-size: 14px;\n    line-height: 13px;\n    padding: 0 9px  0 0;\n    height: 15px;\n    text-align: right;\n    margin: 0;\n    font-weight: 400;\n    border-radius: 0;\n        \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  \n  .placeholder, .error{\n    display: none;\n  }\n"])), sharedContainer);
var planPercentTag = _styledComponents["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  ", "\n  \n  display: inline-block;\n  width: 47px;\n  min-width: 47px;\n  margin: 0;\n  padding: 3px 0 0 0;\n  \n  & > div{\n    width: 100% !important;\n  }\n  \n  input{\n    margin: 0;\n    width: 100%;\n    line-height: 13px;\n    padding: 0 12px 0 0;\n    font-size: 16px;\n    text-align: right;\n    font-weight: 400;\n    border-radius: 100px;\n    \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  .placeholder, .error{\n    display: none;\n  }\n"])), sharedContainer);
var couponDateTag = _styledComponents["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 163px;\n  min-width: 163px;\n  margin: 15px 5px;\n"])), sharedContainer);
var couponNumberTag = _styledComponents["default"].div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  ", "\n  \n   max-width: 114px;\n   min-width: 114px;\n   margin: 15px 5px;\n"])), sharedContainer);
var paymentDateTag = _styledComponents["default"].div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 180px;\n  min-width: 171px;\n  margin: 0;\n"])), sharedContainer);
var paymentNumberTag = _styledComponents["default"].div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  ", "\n  \n   max-width: 114px;\n   min-width: 80px;\n   margin: 0;\n"])), sharedContainer);
var smallTag = _styledComponents["default"].div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 256px;\n"])), sharedContainer);
var mediumTag = _styledComponents["default"].div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 418px;\n"])), sharedContainer);
var Container = exports.Container = function Container(_ref) {
  var children = _ref.children,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? 'div' : _ref$tag,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "container" : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  var ContainerTagVariable = null;
  switch (size) {
    case 'small':
      ContainerTagVariable = smallTag;
      break;
    case 'medium':
      ContainerTagVariable = mediumTag;
      break;
    case 'payment-date':
    case 'valuation-date':
      ContainerTagVariable = paymentDateTag;
      break;
    case 'payment-number':
    case 'valuation-number':
      ContainerTagVariable = paymentNumberTag;
      break;
    case 'coupon-date':
      ContainerTagVariable = couponDateTag;
      break;
    case 'coupon-number':
      ContainerTagVariable = couponNumberTag;
      break;
    case 'account-sum':
      ContainerTagVariable = accountSumTag;
      break;
    case 'portfolio-plan-sum':
      ContainerTagVariable = portfolioPlanSumTag;
      break;
    case 'small-property':
      ContainerTagVariable = smallProperty;
      break;
    case 'small-subaccount-sum':
      ContainerTagVariable = smallSubaccountSumTag;
      break;
    case 'account-currency':
      ContainerTagVariable = accountCurrencyTag;
      break;
    case 'small-subaccount-currency':
      ContainerTagVariable = smallSubaccountCurrencyTag;
      break;
    case 'plan-salary-day':
      ContainerTagVariable = planSalaryDay;
      break;
    case 'plan-salary-sum':
      ContainerTagVariable = planSalarySum;
      break;
    case 'account-name':
      ContainerTagVariable = accountNameTag;
      break;
    case 'small-subaccount-name':
      ContainerTagVariable = smallSubaccountNameTag;
      break;
    case 'small-account-name':
      ContainerTagVariable = smallAccountNameTag;
      break;
    case 'plan-percent':
      ContainerTagVariable = planPercentTag;
      break;
    case 'plan-number':
      ContainerTagVariable = planNumberTag;
      break;
    case 'budget-sum':
      ContainerTagVariable = budgetSum;
      break;
    case 'budget-name':
      ContainerTagVariable = budgetName;
      break;
    case 'spending-filter':
      ContainerTagVariable = spendingFilterTag;
      break;
    default:
      ContainerTagVariable = containerTag;
      break;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ContainerTagVariable, _objectSpread(_objectSpread({
    as: tag
  }, props), {}, {
    children: children
  }));
};