"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _newstyles = require("./newstyles");
var _ic_close_only = _interopRequireDefault(require("./../assets/ic_close_only.svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onKeyPress", "onChange", "disabled", "icon", "wrapperClassName"]; // <-- наш кастомный хук
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function MaskedInput(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    _onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? '' : _ref$icon,
    _ref$wrapperClassName = _ref.wrapperClassName,
    wrapperClassName = _ref$wrapperClassName === void 0 ? '' : _ref$wrapperClassName,
    props = _objectWithoutProperties(_ref, _excluded);
  // 1. Достаём из useBaseInput (аналог "наследования" BaseInput)
  var _useBaseInput = (0, _useBaseInput2["default"])(props),
    wrapperRef = _useBaseInput.wrapperRef,
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    hasError = _useBaseInput.hasError,
    setHasError = _useBaseInput.setHasError,
    error = _useBaseInput.error,
    browser = _useBaseInput.browser,
    getContainerStyle = _useBaseInput.getContainerStyle,
    getInputStyle = _useBaseInput.getInputStyle,
    getName = _useBaseInput.getName,
    getPlaceholderClassName = _useBaseInput.getPlaceholderClassName;

  // 2. Проверка, «пустое ли» поле (как empty из класса)
  var isEmpty = !(typeof props.value === 'number' && props.value.toString().length > 0 || typeof props.value === 'string' && props.value.length > 0);

  // 3. Функция рендера плейсхолдера (аналог this.renderPlaceholder())
  var renderPlaceholder = function renderPlaceholder() {
    if (!props.placeholder) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: props.id,
      style: props.placeholderStyle,
      className: getPlaceholderClassName(),
      children: props.placeholder
    });
  };

  // 4. Функция рендера ошибки (аналог this.renderTooltipError())
  //    Если ранее была логика через InputPopup с иконкой, добавьте при необходимости
  var renderTooltipError = function renderTooltipError() {
    if (!hasError || !error) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: props.id,
      className: props.className + ' error',
      children: error
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.MaskedStyledInput, {
    id: props.id,
    mask: props.mask,
    autoComplete: "off",
    disabled: props.disabled,
    style: getInputStyle(),
    className: props.className,
    type: props.type,
    name: getName(props.name || ''),
    value: props.value,
    onKeyPress: function onKeyPress(e) {
      if (typeof _onKeyPress === 'function') {
        _onKeyPress(e);
      }
    },
    onChange: function onChange(e) {
      _onChange(e, {
        name: props.name,
        value: e.target.value
      });
      setHasError(false);
    },
    onFocus: function onFocus() {
      setFocused(true);
      setHasError(false);
    },
    onBlur: function onBlur() {
      setFocused(false);
      setHasError(false);
    }
  });
}
var _default = exports["default"] = MaskedInput;