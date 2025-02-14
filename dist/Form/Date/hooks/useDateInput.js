"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDateInput = void 0;
var _react = require("react");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var useDateInput = exports.useDateInput = function useDateInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    flatpickrInstance = _ref.flatpickrInstance,
    setFocused = _ref.setFocused,
    dateFormat = _ref.dateFormat,
    dateMask = _ref.dateMask,
    formatDate = _ref.formatDate,
    setInnerError = _ref.setInnerError;
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var _useState3 = (0, _react.useState)(formatDate(value, dateFormat)),
    _useState4 = _slicedToArray(_useState3, 2),
    dateString = _useState4[0],
    setDateString = _useState4[1];
  (0, _react.useEffect)(function () {
    if (value !== date) {
      setDate(value);
      setDateString(formatDate(value, dateFormat));
    }
  }, [value, date, dateFormat]);
  var handleDateChange = function handleDateChange(selectedDates) {
    var dateObj = selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates[0];
    var newDateString = dateObj ? formatDate(dateObj, dateFormat) : '';
    setDate(dateObj);
    setDateString(newDateString);
    if (typeof onChange === 'function') {
      onChange(dateObj !== null && dateObj !== void 0 ? dateObj : null);
    }
  };
  var handleInputChange = function handleInputChange(e) {
    var val = e.target.value;
    setDateString(val);
    if (val && !val.includes('_')) {
      var parsedDate = (0, _moment["default"])(val, dateFormat);
      if (parsedDate.isValid()) {
        setDate(parsedDate.toDate());
        if (typeof onChange === 'function') {
          onChange(parsedDate.toDate());
        }
      } else {
        setInnerError(['Ошибка, неверный формат даты']);
      }
    }
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    if (flatpickrInstance.current) {
      if (typeof dateString === 'string' && dateString !== dateMask && !dateString.includes('_')) {
        var parsedDate = (0, _moment["default"])(dateString, dateFormat);
        if (parsedDate.isValid()) {
          onChange(parsedDate.toDate());
          setInnerError(null);
        } else {
          onChange(null);
          setDateString('');
        }
      } else {
        onChange(null);
        setDateString('');
      }
    }
  };
  return {
    date: date,
    dateString: dateString,
    handleDateChange: handleDateChange,
    handleInputChange: handleInputChange,
    handleBlur: handleBlur,
    setDateString: setDateString
  };
};