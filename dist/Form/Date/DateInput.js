"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));
var _newstyles = require("./../newstyles");
var _containerStyle = require("./../styles/containerStyle");
var _calendar = _interopRequireDefault(require("./../../assets/calendar.svg"));
var _mountFlatpickr = _interopRequireDefault(require("./utils/mountFlatpickr"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onKeyPress", "onChange", "disabled", "value", "placeholder", "mask", "icon", "className", "wrapperClassName", "inputMask"],
  _excluded2 = ["id"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function DateInput(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$mask = _ref.mask,
    mask = _ref$mask === void 0 ? '' : _ref$mask,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? '' : _ref$icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$wrapperClassName = _ref.wrapperClassName,
    wrapperClassName = _ref$wrapperClassName === void 0 ? '' : _ref$wrapperClassName,
    _ref$inputMask = _ref.inputMask,
    inputMask = _ref$inputMask === void 0 ? '__.__.____' : _ref$inputMask,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useBaseInput = (0, _useBaseInput2["default"])(props),
    wrapperRef = _useBaseInput.wrapperRef,
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    hasError = _useBaseInput.hasError,
    setHasError = _useBaseInput.setHasError,
    error = _useBaseInput.error,
    setError = _useBaseInput.setError,
    getContainerStyle = _useBaseInput.getContainerStyle,
    getPlaceholderClassName = _useBaseInput.getPlaceholderClassName;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    componentsLoaded = _useState2[0],
    setComponentsLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    InputComponent = _useState4[0],
    setInputComponent = _useState4[1];
  var _useState5 = (0, _react.useState)(value),
    _useState6 = _slicedToArray(_useState5, 2),
    date = _useState6[0],
    setDate = _useState6[1];
  var flatpickrInstance = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    return (0, _mountFlatpickr["default"])(setComponentsLoaded, setInputComponent);
  }, []);
  var handleClickOutside = (0, _react.useCallback)(function (e) {
    var isInsideFlatpickr = e.target.closest('.flatpickr-calendar');
    if (wrapperRef.current && !wrapperRef.current.contains(e.target) && !isInsideFlatpickr) {
      if (focused) {
        setFocused(false);
        setHasError(false);
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick(value);
        }
      }
    }
  }, [focused, props.onOutsideClick, value, setFocused, setHasError, wrapperRef]);
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
  (0, _react.useEffect)(function () {
    return function () {
      if (flatpickrInstance.current) {
        flatpickrInstance.current.destroy();
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (value !== date) {
      setDate(value);
    }
  }, [value, date]);
  var formatDate = function formatDate(d) {
    if (!(d instanceof Date)) return '';
    var day = String(d.getDate()).padStart(2, '0');
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var year = d.getFullYear();
    return "".concat(day, ".").concat(month, ".").concat(year);
  };
  var handleDateChange = function handleDateChange(selectedDates) {
    if (typeof onChange === 'function') {
      onChange({}, {
        value: formatDate(selectedDates[0]),
        date: selectedDates[0]
      });
    }
  };
  var handleInputChange = function handleInputChange(e) {
    var val = e.target.value;
    setDate(val);
    if (typeof val === 'string' && val !== '__.__.____' && !val.includes('_')) {
      onChange({}, {
        date: val,
        value: val
      });
    } else {
      onChange({}, {
        date: null,
        value: val
      });
    }
  };
  var getOptions = function getOptions() {
    var opts = _objectSpread({
      dateFormat: 'd.m.Y',
      allowInput: true,
      disableMobile: 'true'
    }, props);
    if (props.defaultDate) {
      opts.defaultDate = props.defaultDate;
    }
    return opts;
  };
  if (!componentsLoaded || !InputComponent) return null;
  var renderInputOrFlatpickr = function renderInputOrFlatpickr() {
    if (disabled) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.MaskedStyledInput, {
        mask: "99.99.9999",
        value: date,
        disabled: true,
        onChange: function onChange() {},
        children: function children(inputProps) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({}, inputProps));
        }
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(InputComponent, {
      id: props.id,
      style: props.style,
      disabled: disabled,
      value: date,
      placeholder: placeholder,
      autoComplete: props.autoComplete || 'off',
      options: getOptions(),
      className: className,
      onReady: function onReady(_, __, fp) {
        flatpickrInstance.current = fp;
        fp.calendarContainer.id = "".concat(props.id, "-container");
      },
      onChange: handleDateChange,
      onOpen: function onOpen() {
        setFocused(true);
        setHasError(false);
      },
      onClose: function onClose() {
        setFocused(false);
        setHasError(false);
      },
      render: function render(_ref2, refEl) {
        var id = _ref2.id,
          restProps = _objectWithoutProperties(_ref2, _excluded2);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.MaskedStyledInput, {
          autoComplete: "off",
          mask: "99.99.9999",
          id: id,
          value: restProps.value,
          onChange: handleInputChange,
          style: restProps.style,
          className: restProps.className,
          onFocus: function onFocus() {
            setFocused(true);
            setHasError(false);
          },
          children: function children(inputProps) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
              ref: refEl
            }, inputProps));
          }
        });
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainer, {
    ref: wrapperRef,
    needMargin: true,
    focus: focused,
    children: [renderInputOrFlatpickr(), placeholder && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: props.id,
      style: props.placeholderStyle,
      className: getPlaceholderClassName(),
      children: placeholder
    }), icon !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "calendar",
      src: _calendar["default"],
      alt: ""
    }), hasError && error && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: props.id,
      className: "".concat(className, " error"),
      style: {
        color: '#EF5E70'
      },
      children: error
    })]
  });
}
var _default = exports["default"] = DateInput;