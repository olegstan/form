"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));
var _styles = require("../styles");
var _useDateInput2 = require("./hooks/useDateInput");
var _useFlatpickrMount2 = require("./hooks/useFlatpickrMount");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var formatDate = function formatDate(d) {
  if (!(d instanceof Date)) return '';
  var day = String(d.getDate()).padStart(2, '0');
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var year = d.getFullYear();
  return "".concat(day, ".").concat(month, ".").concat(year);
};
var DateInput = function DateInput(_ref) {
  var _ref$focused = _ref.focused,
    focused = _ref$focused === void 0 ? false : _ref$focused,
    _ref$setFocused = _ref.setFocused,
    setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    _ref$innerError = _ref.innerError,
    innerError = _ref$innerError === void 0 ? [] : _ref$innerError,
    _ref$setInnerError = _ref.setInnerError,
    setInnerError = _ref$setInnerError === void 0 ? function () {} : _ref$setInnerError,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    error = _ref.error,
    _ref$defaultDate = _ref.defaultDate,
    defaultDate = _ref$defaultDate === void 0 ? null : _ref$defaultDate;
  var _useBaseInput = (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),
    handleFocus = _useBaseInput.handleFocus,
    getName = _useBaseInput.getName;
  var _useFlatpickrMount = (0, _useFlatpickrMount2.useFlatpickrMount)(),
    componentsLoaded = _useFlatpickrMount.componentsLoaded,
    DateInputComponent = _useFlatpickrMount.DateInputComponent,
    flatpickrInstance = _useFlatpickrMount.flatpickrInstance;
  var _useDateInput = (0, _useDateInput2.useDateInput)({
      value: value,
      onChange: onChange,
      flatpickrInstance: flatpickrInstance,
      setFocused: setFocused,
      dateMask: '__.__.____',
      dateFormat: 'DD.MM.YYYY',
      formatDate: formatDate,
      setInnerError: setInnerError
    }),
    date = _useDateInput.date,
    dateString = _useDateInput.dateString,
    handleDateChange = _useDateInput.handleDateChange,
    handleInputChange = _useDateInput.handleInputChange,
    handleBlur = _useDateInput.handleBlur;
  var getOptions = function getOptions() {
    var opts = {
      dateFormat: 'd.m.Y',
      allowInput: true,
      disableMobile: 'true'
    };
    if (defaultDate) {
      opts.defaultDate = defaultDate;
    }
    return opts;
  };
  if (!componentsLoaded || !DateInputComponent) return null;
  if (disabled) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.MaskedStyledInput, {
      mask: "99.99.9999",
      value: dateString,
      disabled: true,
      onChange: function onChange() {},
      children: function children(inputProps) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({}, inputProps));
      }
    });
  }
  var inputClassName = "input ".concat(className).concat(focused ? ' focused' : '').concat(error !== null && error !== void 0 && error[0] || innerError !== null && innerError !== void 0 && innerError[0] ? ' error' : '');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DateInputComponent, {
    id: id,
    style: style,
    disabled: disabled,
    value: date instanceof Date ? date : null,
    valueString: dateString,
    placeholder: placeholder,
    autoComplete: autoComplete || 'off',
    options: getOptions(),
    className: inputClassName,
    onReady: function onReady(selectedDates, dateStr, fp) {
      flatpickrInstance.current = fp;
      fp.calendarContainer.id = "".concat(id, "-container");
    },
    onChange: handleDateChange,
    onOpen: handleFocus,
    onClose: handleBlur,
    render: function render(_ref2, refEl) {
      var id = _ref2.id,
        restProps = _objectWithoutProperties(_ref2, _excluded);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.MaskedStyledInput, {
        autoComplete: "off",
        mask: "99.99.9999",
        name: getName(name),
        id: id,
        value: restProps.valueString,
        onChange: handleInputChange,
        style: restProps.style,
        className: restProps.className,
        onFocus: handleFocus,
        children: function children(inputProps) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
            ref: refEl
          }, inputProps));
        }
      });
    }
  });
};
var _default = exports["default"] = DateInput;