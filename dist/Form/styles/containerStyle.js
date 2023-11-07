"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedContainer = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
const _excluded = ["children", "tag", "size"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const sharedContainer = exports.sharedContainer = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  border: 1px solid #D2D1D1;\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n  \n  &.style1\n  {\n    border: 1px solid #454650 !important;\n    background-color: #2B2D39 !important;\n  }\n\n  &.style1{\n    label.placeholder {\n      color: #6F7080;\n      z-index: 1000;\n    }\n  }\n  \n  ", "\n  \n  ", "\n"])), props => props.disabled === true && "\n      background-color: #FAFAFA !important;\n      \n      &.style2\n      {\n        background-color: #2B2D39 !important;\n      }\n\n      \n      &:-webkit-autofill,\n      &:-webkit-autofill:hover, \n      &:-webkit-autofill:focus, \n      &:-webkit-autofill:active\n      {\n       -webkit-box-shadow: 0 0 0 30px #FAFAFA inset !important;\n      }\n  ", props => props.slim && "\n      \n  ");
const containerTag = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedContainer);
const accountNameTag = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 364px;\n  min-width: 364px;\n  margin: 15px 0;\n"])), sharedContainer);
const smallSubaccountNameTag = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 123px;\n  min-width: 123px;\n  margin: 3px 5px;\n"])), sharedContainer);
const smallAccountNameTag = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 191px;\n  min-width: 191px;\n  margin: 3px 5px;\n"])), sharedContainer);
const accountSumTag = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 178px;\n  min-width: 178px;\n  margin: 15px 40px;\n"])), sharedContainer);
const portfolioPlanSumTag = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 178px;\n  min-width: 178px;\n  margin: 15px 10px;\n"])), sharedContainer);
const smallSubaccountSumTag = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 103px;\n  min-width: 103px;\n  margin: 3px 5px;\n"])), sharedContainer);
const smallProperty = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 179px;\n  margin: 5px 8px;\n"])), sharedContainer);
const accountCurrencyTag = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 115px;\n  min-width: 115px;\n  margin: 5px 5px;\n"])), sharedContainer);
const smallSubaccountCurrencyTag = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 81px;\n  min-width: 81px;\n  margin: 3px 5px;\n"])), sharedContainer);
const planSalaryDay = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 51px;\n  min-width: 51px;\n  margin: 3px 5px;\n  \n  height: 28px;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 0 8px;\n    margin-top: 0;\n  }\n  \n  input::placeholder {\n    color: #7F818D;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n  .calendar{\n    display: none !important;\n  }\n"])), sharedContainer);
const planSalarySum = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 116px;\n  min-width: 116px;\n  margin: 3px 5px;\n  \n  height: 28px;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 0 8px;\n    margin-top: 0;\n    text-align: right;\n  }\n  \n  input::placeholder {\n    color: #7F818D;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n  .calendar{\n    display: none !important;\n  }\n"])), sharedContainer);
const spendingFilterTag = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n  \n  margin: 4px 0 !important;\n  max-width: 87px !important;\n  min-width: 87px !important;\n  height: 28px;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 0 8px;\n    margin-top: 0;\n  }\n  \n  input::placeholder {\n    color: #7F818D;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n  .calendar{\n    display: none !important;\n  }\n"])), sharedContainer);
const budgetSum = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  ", "\n  \n  height: 31px;\n  line-height: 25px;\n  padding: 2px 5px;\n  margin: 0;\n  max-width: 93px;\n  min-width: 93px;\n  \n  display: inline-block;\n  /* width: 100%; */\n  /* margin: 0 auto; */\n  margin-left: auto;\n  margin-right: 6px;\n  \n  & > div{\n    height: 31px;\n    width: 100% !important;\n  }\n  \n  input{\n    font-size: 16px;\n    line-height: 15px;\n    padding: 0 9px  0 0;\n    height: 25px;\n    text-align: right;\n    margin: 0;\n    font-weight: 400;\n    border-radius: 0;\n        \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  .placeholder{\n    display: none;\n  }\n"])), sharedContainer);
const budgetName = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", "\n  \n  height: 28px;\n  line-height: 28px;\n  padding: 0 5px;\n  margin: 0;\n  max-width: 93px;\n  min-width: 93px;\n  \n  display: inline-block;\n  margin-left: auto;\n  margin-right: 6px;\n  \n  & > div{\n    height: 31px;\n    width: 100% !important;\n  }\n  \n  input{\n    font-size: 16px;\n    line-height: 15px;\n    padding: 0 9px  0 0;\n    height: 25px;\n    text-align: right;\n    margin: 0;\n    font-weight: 400;\n    border-radius: 0;\n        \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  .placeholder{\n    display: none;\n  }\n"])), sharedContainer);
const planNumberTag = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  ", "\n  \n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  padding: 2px 1px;\n  min-width: 47px;\n  margin: 0;\n  \n  & > div{\n    height: 20px;\n    width: 100% !important;\n  }\n  \n  input{\n    font-size: 14px;\n    line-height: 15px;\n    padding: 0 9px  0 0;\n    height: 15px;\n    text-align: right;\n    margin: 0;\n    font-weight: 400;\n    border-radius: 0;\n        \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  \n  .placeholder, .error{\n    display: none;\n  }\n"])), sharedContainer);
const planPercentTag = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  ", "\n  \n  display: inline-block;\n  width: 47px;\n  min-width: 47px;\n  margin: 0;\n  padding: 3px 0 0 0;\n  \n  & > div{\n    width: 100% !important;\n  }\n  \n  input{\n    margin: 0;\n    width: 100%;\n    line-height: 15px;\n    padding: 0 12px 0 0;\n    font-size: 16px;\n    text-align: right;\n    font-weight: 400;\n    border-radius: 100px;\n    \n    :disabled{\n      border-radius: 4px;\n    }\n  }\n  \n  .placeholder, .error{\n    display: none;\n  }\n"])), sharedContainer);
const couponDateTag = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 163px;\n  min-width: 163px;\n  margin: 15px 5px;\n"])), sharedContainer);
const couponNumberTag = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  ", "\n  \n   max-width: 114px;\n   min-width: 114px;\n   margin: 15px 5px;\n"])), sharedContainer);
const paymentDateTag = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 180px;\n  min-width: 171px;\n  margin: 0;\n"])), sharedContainer);
const paymentNumberTag = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  ", "\n  \n   max-width: 114px;\n   min-width: 80px;\n   margin: 0;\n"])), sharedContainer);
const incomesAndExpensesTag = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  ", "\n  \n  margin: 10px 3px !important;\n  height: 28px !important;\n  max-width: 110px !important;\n  min-width: 110px !important;\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 3px 10px !important;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n"])), sharedContainer);
const smallTag = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 256px;\n"])), sharedContainer);
const mediumTag = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 418px;\n"])), sharedContainer);
const Container = _ref => {
  let {
      children,
      tag = 'div',
      size = "container"
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let ContainerTagVariable = null;
  switch (size) {
    case 'small':
      ContainerTagVariable = smallTag;
      break;
    case 'medium':
      ContainerTagVariable = mediumTag;
      break;
    case 'incomes-and-expenses':
      ContainerTagVariable = incomesAndExpensesTag;
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
  return /*#__PURE__*/_react.default.createElement(ContainerTagVariable, _extends({
    as: tag
  }, props), children);
};
exports.Container = Container;