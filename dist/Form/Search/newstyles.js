"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedContainer = exports.containerTag = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.InputContainer = exports.Input = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _newstyles = require("../newstyles");
const _excluded = ["children", "tag", "size"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const sharedContainer = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  \n"])));
exports.sharedContainer = sharedContainer;
const smallProperty = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 179px;\n  margin: 5px 8px;\n"])), _newstyles.sharedSearchContainer);
const smallPlan = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 179px;\n  margin: 0 !important;\n"])), _newstyles.sharedSearchContainer);
const containerTag = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchContainer);
exports.containerTag = containerTag;
const InputWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchInputWrapperStyle);
exports.InputWrapper = InputWrapper;
const Selected = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
exports.Item = Item;
const Input = _styledComponents.default.input(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedInputStyle);
exports.Input = Input;
const InputContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchContainerStyle);
exports.InputContainer = InputContainer;
const tacticsMonthSelect = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  \n  max-width: 163px;\n  min-width: 163px;\n  margin: 15px 0 15px 15px;\n"])), _newstyles.sharedSearchContainerStyle);
const incomesAndExpensesTag = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n  \n  & > div{\n    height: 28px;\n  }\n  \n  input{\n    padding: 3px 10px !important;\n  }\n  \n  .placeholder{\n    display: none !important;\n  }\n"])), _newstyles.sharedSearchContainer);
const Container = _ref => {
  let {
      children,
      tag = 'div',
      size = "container"
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let ContainerTagVariable = null;
  switch (size) {
    case 'small-plan':
      ContainerTagVariable = smallPlan;
      break;
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