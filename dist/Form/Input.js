"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _newstyles = require("./newstyles");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onKeyPress", "onChange", "disabled", "placeholder", "placeholderStyle", "icon", "className", "type", "style", "id", "autoComplete"]; // Input.js
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function Input(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$placeholderStyle = _ref.placeholderStyle,
    placeholderStyle = _ref$placeholderStyle === void 0 ? {} : _ref$placeholderStyle,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? '' : _ref$icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    id = _ref.id,
    autoComplete = _ref.autoComplete,
    props = _objectWithoutProperties(_ref, _excluded);
  // Деструктурируем всё нужное из хука
  var _useBaseInput = (0, _useBaseInput2["default"])(props),
    setFocused = _useBaseInput.setFocused,
    setHasError = _useBaseInput.setHasError,
    browser = _useBaseInput.browser,
    getInputStyle = _useBaseInput.getInputStyle,
    getName = _useBaseInput.getName,
    onBlurFunc = _useBaseInput.onBlurFunc;

  // Аналог проверки «пустой ли инпут»
  var empty = !(typeof props.value === 'number' && props.value.toString().length > 0 || typeof props.value === 'string' && props.value.length > 0);
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    if (typeof props.onClick === 'function') {
      props.onClick(e);
    }
  };
  var handleChange = function handleChange(e) {
    onChange(e, {
      name: props.name,
      value: e.target.value
    });
    setHasError(false); // сбрасываем ошибку при вводе
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    setHasError(false);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
    browser: browser && browser.name,
    id: id,
    style: getInputStyle(),
    autoComplete: autoComplete || 'off',
    disabled: disabled,
    className: className,
    type: type,
    name: getName(props.name),
    value: props.value,
    placeholder: placeholder,
    onClick: handleClick,
    onKeyPress: onKeyPress,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: function onBlur() {
      onBlurFunc();
    }
  });
}
var _default = exports["default"] = Input;