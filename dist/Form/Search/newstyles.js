"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedContainer = exports.containerTag = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.InputContainer = exports.Input = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _newstyles = require("../newstyles");
const _excluded = ["children", "tag", "size"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const sharedContainer = exports.sharedContainer = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  \n"])));
const smallProperty = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 179px;\n  margin: 5px 8px;\n"])), _newstyles.sharedSearchContainer);
const containerTag = exports.containerTag = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchContainer);
const InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchInputWrapperStyle);
const Selected = exports.Selected = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
const Select = exports.Select = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
const Item = exports.Item = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
const Input = exports.Input = _styledComponents.default.input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedInputStyle);
const InputContainer = exports.InputContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchContainerStyle);
const tacticsMonthSelect = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 163px;\n  min-width: 163px;\n  margin: 15px 0 15px 15px;\n"])), _newstyles.sharedSearchContainerStyle);
const incomesAndExpensesTag = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 3px 10px !important;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n"])), _newstyles.sharedSearchContainer);
const Container = _ref => {
  let {
      children,
      tag = 'div',
      size = "container"
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let ContainerTagVariable = null;
  switch (size) {
    case 'small-property':
      ContainerTagVariable = smallProperty;
      break;
    case 'incomes-and-expenses':
      ContainerTagVariable = incomesAndExpensesTag;
      break;
    case 'tactics-month-select':
      ContainerTagVariable = tacticsMonthSelect;
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