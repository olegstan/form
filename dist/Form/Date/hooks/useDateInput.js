"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.useDateInput = void 0;var _react = require("react");
var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}













var isSameDateTime = function isSameDateTime(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.getTime() === b.getTime();
};

var useDateInput = exports.useDateInput = function useDateInput(_ref)









{var value = _ref.value,onChange = _ref.onChange,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,flatpickrInstance = _ref.flatpickrInstance,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,dateFormat = _ref.dateFormat,dateMask = _ref.dateMask,formatDate = _ref.formatDate,_ref$setInnerError = _ref.setInnerError,setInnerError = _ref$setInnerError === void 0 ? function () {} : _ref$setInnerError;
  var _useState = (0, _react.useState)(value !== null && value !== void 0 ? value : null),_useState2 = _slicedToArray(_useState, 2),date = _useState2[0],setDate = _useState2[1];
  var _useState3 = (0, _react.useState)(formatDate(value !== null && value !== void 0 ? value : null, dateFormat)),_useState4 = _slicedToArray(_useState3, 2),dateString = _useState4[0],setDateString = _useState4[1];

  // последнее отданное наружу значение, чтобы не дублировать onChange
  var lastEmittedRef = (0, _react.useRef)(value !== null && value !== void 0 ? value : null);

  // синхронизация при внешнем изменении value
  (0, _react.useEffect)(function () {
    if (!isSameDateTime(value !== null && value !== void 0 ? value : null, date)) {
      setDate(value !== null && value !== void 0 ? value : null);
      setDateString(formatDate(value !== null && value !== void 0 ? value : null, dateFormat));
    }
    if (!isSameDateTime(value !== null && value !== void 0 ? value : null, lastEmittedRef.current)) {
      lastEmittedRef.current = value !== null && value !== void 0 ? value : null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, dateFormat]);

  var emitIfChanged = function emitIfChanged(next) {
    if (!isSameDateTime(next, lastEmittedRef.current)) {
      lastEmittedRef.current = next;
      onChange(next);
    }
  };

  // Клик по календарю / изменение от flatpickr
  var handleDateChange = function handleDateChange(selectedDates) {
    var next = selectedDates && selectedDates.length ? selectedDates[0] : null;

    setDate(next);
    setDateString(formatDate(next, dateFormat));
    setInnerError(false); // было: null

    emitIfChanged(next);
  };

  // Ручной ввод
  var handleInputChange = function handleInputChange(e) {
    var raw = e.target.value || '';
    setDateString(raw);

    if (raw.trim() === '') {
      setDate(null);
      setInnerError(false); // было: null
      emitIfChanged(null);
      return;
    }

    var parsed = (0, _moment["default"])(raw, dateFormat, true);
    if (parsed.isValid()) {
      var next = parsed.toDate();
      setDate(next);
      setInnerError(null); // было: null
      emitIfChanged(next);
    } else {
      console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B: ".concat(raw));
    }
  };

  var handleBlur = function handleBlur() {
    if (dateString && !(0, _moment["default"])(dateString, dateFormat, true).isValid()) {
      setDate(null);
      setDateString('');
      setInnerError(false); // было: null
      emitIfChanged(null);
    }
    onBlur === null || onBlur === void 0 || onBlur();
    setFocused(false);
  };

  return { date: date, dateString: dateString, handleDateChange: handleDateChange, handleInputChange: handleInputChange, handleBlur: handleBlur, setDateString: setDateString };
};
//# sourceMappingURL=useDateInput.js.map