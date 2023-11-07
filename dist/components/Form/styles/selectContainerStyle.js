"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedSelectContainerStyle = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
const _excluded = ["children", "tag", "size"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const sharedSelectContainerStyle = exports.sharedSelectContainerStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #EFF2F5;\n  box-sizing: content-box;\n  flex: 1;\n  margin: 15px 10px;\n  cursor: pointer;\n  width: 100%;\n  min-width: 100px;\n  height: 48px;\n  border-radius: 8px;\n  position: relative;\n    \n  &.select\n  {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  \n  &.style2\n  {\n    background-color: #333443;\n  }\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"])), props => props.size === 'small' && "\n    max-width: 256px;\n  ", props => props.size === 'medium' && "\n      max-width: 418px;\n  ", props => props.size === 'tactic-period' && "\n    max-width: 181px;\n    min-width: 181px;\n    margin: 15px 0 15px 15px;\n  ");
const incomesAndExpensesTag = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n \n  margin: 10px 0 !important;\n  max-width: 150px !important;\n  min-width: 150px !important;\n"])), sharedSelectContainerStyle);
const containerTag = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedSelectContainerStyle);
const incomeCurrencyeTag = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 160px;\n  min-width: 160px;\n  margin: 15px 0 15px 0;\n"])), sharedSelectContainerStyle);
const tacticsMonthSelect = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 163px;\n  min-width: 163px;\n  margin: 15px 0 15px 15px;\n"])), sharedSelectContainerStyle);
const balanceMonthSelect = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 208px;\n  min-width: 208px;\n"])), sharedSelectContainerStyle);
const accountCurrencyTag = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 115px;\n  min-width: 115px;\n"])), sharedSelectContainerStyle);
const smallAccountCurrencyTag = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  \n  max-width: 81px;\n  min-width: 81px;\n"])));
const smallPortfolioPlanCurrencyTag = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  \n  max-width: 121px;\n  min-width: 121px;\n"])));
const smallProperty = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    \n  max-width: 179px;\n  margin: 5px 8px;\n"])));
const planPercentTag = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  \n  display: inline-block;\n  padding: 0;\n  min-width: 47px;\n  margin: 0;\n  \n  & > div{\n    width: 100% !important;\n  }\n  \n  .placeholder, .error{\n    display: none;\n  }\n"])), sharedSelectContainerStyle);
const Container = _ref => {
  let {
      children,
      tag = 'div',
      size = "container"
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let ContainerTagVariable = null;
  switch (size) {
    case 'account-currency':
      ContainerTagVariable = accountCurrencyTag;
      break;
    case 'portfolio-plan-currency':
      ContainerTagVariable = smallPortfolioPlanCurrencyTag;
      break;
    case 'small-subaccount-currency':
      ContainerTagVariable = smallAccountCurrencyTag;
      break;
    case 'small-property':
      ContainerTagVariable = smallProperty;
      break;
    case 'plan-percent':
      ContainerTagVariable = planPercentTag;
      break;
    case 'tactics-month-select':
      ContainerTagVariable = tacticsMonthSelect;
      break;
    case 'balance-month-select':
      ContainerTagVariable = balanceMonthSelect;
      break;
    case 'incomes-and-expenses':
      ContainerTagVariable = incomesAndExpensesTag;
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