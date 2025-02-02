"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _newstyles = require("./newstyles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Input.js

function Input(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    error = _ref.error;
  var _useBaseInput = (0, _useBaseInput2["default"])({
      name: name,
      onClick: onClick,
      onChange: onChange
    }),
    focused = _useBaseInput.focused,
    handleClick = _useBaseInput.handleClick,
    handleChange = _useBaseInput.handleChange,
    handleFocus = _useBaseInput.handleFocus,
    handleBlur = _useBaseInput.handleBlur,
    getName = _useBaseInput.getName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
    id: id,
    style: style,
    autoComplete: autoComplete || 'off',
    disabled: disabled,
    className: className + (focused ? ' focused' : '') + (error !== null && error !== void 0 && error[0] ? ' error' : ''),
    type: type,
    name: getName(name),
    value: value,
    onClick: handleClick,
    onKeyPress: onKeyPress,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  });
}
var _default = exports["default"] = Input;