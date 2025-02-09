"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));
var _styles = require("../styles");
var _mountFlatpickr = _interopRequireDefault(require("./utils/mountFlatpickr"));
var _moment = _interopRequireDefault(require("moment"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var formatDate = function formatDate(d) {
  if (!(d instanceof Date)) return '';
  var day = String(d.getDate()).padStart(2, '0');
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var year = d.getFullYear();
  return "".concat(day, ".").concat(month, ".").concat(year);
};
var DateInput = function DateInput(_ref) {
  var _ref$onChange = _ref.onChange,
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
      name: name,
      onClick: onClick,
      onChange: onChange
    }),
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    handleFocus = _useBaseInput.handleFocus,
    getName = _useBaseInput.getName;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    componentsLoaded = _useState2[0],
    setComponentsLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    InputComponent = _useState4[0],
    setInputComponent = _useState4[1];
  var _useState5 = (0, _react.useState)(formatDate(value)),
    _useState6 = _slicedToArray(_useState5, 2),
    dateString = _useState6[0],
    setDateString = _useState6[1];
  var _useState7 = (0, _react.useState)(value),
    _useState8 = _slicedToArray(_useState7, 2),
    date = _useState8[0],
    setDate = _useState8[1];
  var flatpickrInstance = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    return (0, _mountFlatpickr["default"])(setComponentsLoaded, setInputComponent);
  }, []);
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
  var handleBlur = function handleBlur() {
    setFocused(false);
    console.log(value);
    console.log(dateString);
    // debugger

    // Дополнительная логика при потере фокуса
    if (flatpickrInstance.current) {
      // flatpickrInstance.current.close();

      if (typeof dateString === 'string' && dateString !== '__.__.____' && !dateString.includes('_')) {
        var _date = (0, _moment["default"])(dateString, 'DD.MM.YYYY');
        if (_date.isValid()) {
          onChange({}, {
            date: _date.toDate(),
            value: dateString
          });
        } else {
          onChange({}, {
            date: null,
            value: ''
          });
          setDateString('');
        }
      } else {
        onChange({}, {
          date: null,
          value: ''
        });
        setDateString('');
      }
    }
  };
  var handleDateChange = function handleDateChange(selectedDates) {
    var dateObj = selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates[0];
    if (typeof onChange === 'function') {
      onChange({}, {
        date: dateObj,
        value: dateObj ? formatDate(dateObj) : ''
      });
    }
  };
  var handleInputChange = function handleInputChange(e) {
    var val = e.target.value;
    setDateString(val);
    if (typeof val === 'string' && val !== '__.__.____' && !val.includes('_')) {
      var _date2 = (0, _moment["default"])(val, 'DD.MM.YYYY');
      if (_date2.isValid()) {
        onChange({}, {
          date: _date2.toDate(),
          value: val
        });
      }
    }
  };
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
  if (!componentsLoaded || !InputComponent) return null;
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(InputComponent, {
    id: id,
    style: style,
    disabled: disabled,
    value: date instanceof Date ? date : null,
    valueString: dateString,
    placeholder: placeholder,
    autoComplete: autoComplete || 'off',
    options: getOptions(),
    className: className + (focused ? ' focused' : '') + (error !== null && error !== void 0 && error[0] ? ' error' : ''),
    onReady: function onReady(_, __, fp) {
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