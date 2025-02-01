"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _newstyles = require("./newstyles");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onKeyPress", "onChange", "onClick", "disabled", "placeholder", "iconClose", "className", "type", "style", "id", "name", "value", "autoComplete", "error"]; // Input.js
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function Input(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$iconClose = _ref.iconClose,
    iconClose = _ref$iconClose === void 0 ? true : _ref$iconClose,
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
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded);
  // Деструктурируем всё нужное из хука
  var _useBaseInput = (0, _useBaseInput2["default"])(props),
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    getName = _useBaseInput.getName;
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };
  var handleChange = function handleChange(e) {
    onChange(e, {
      name: name,
      value: e.target.value
    });
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
    id: id,
    style: style,
    autoComplete: autoComplete || 'off',
    disabled: disabled,
    className: className + (focused ? ' focused' : '') + (error ? ' error' : ''),
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