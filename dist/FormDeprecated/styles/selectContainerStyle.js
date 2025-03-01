"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedSelectContainerStyle = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "tag", "size"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
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
var sharedSelectContainerStyle = exports.sharedSelectContainerStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #EFF2F5;\n  box-sizing: content-box;\n  flex: 1;\n  margin: 15px 10px;\n  cursor: pointer;\n  width: 100%;\n  min-width: 100px;\n  height: 48px;\n  border-radius: 8px;\n  position: relative;\n  \n  &.select\n  {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  \n  &.style2\n  {\n    background-color: #333443;\n  }\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"])), function (props) {
  return props.size === 'small' && "\n    max-width: 256px;\n  ";
}, function (props) {
  return props.size === 'medium' && "\n      max-width: 418px;\n  ";
}, function (props) {
  return props.size === 'tactic-period' && "\n    max-width: 181px;\n    min-width: 181px;\n    margin: 15px 0 15px 15px;\n  ";
});
var containerTag = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedSelectContainerStyle);
var tacticsMonthSelect = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 163px;\n  min-width: 163px;\n  margin: 15px 0 15px 15px;\n"])), sharedSelectContainerStyle);
var balanceMonthSelect = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 208px;\n  min-width: 208px;\n"])), sharedSelectContainerStyle);
var accountCurrencyTag = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 115px;\n  min-width: 115px;\n"])), sharedSelectContainerStyle);
var smallAccountCurrencyTag = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  \n  max-width: 81px;\n  min-width: 81px;\n"])));
var smallPortfolioPlanCurrencyTag = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  \n  max-width: 121px;\n  min-width: 121px;\n"])));
var smallProperty = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    \n  max-width: 179px;\n  margin: 5px 8px;\n"])));
var planPercentTag = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  \n  display: inline-block;\n  padding: 0;\n  min-width: 47px;\n  margin: 0;\n  \n  & > div{\n    width: 100% !important;\n  }\n  \n  .placeholder, .error{\n    display: none;\n  }\n"])), sharedSelectContainerStyle);
var Container = exports.Container = function Container(_ref) {
  var children = _ref.children,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? 'div' : _ref$tag,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "container" : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  var ContainerTagVariable = null;
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