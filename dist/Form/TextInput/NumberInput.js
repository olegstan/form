"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));
var _styles = require("../styles");

var _useInputClassNames = _interopRequireDefault(require("../hooks/useInputClassNames"));
var _formatNumber = require("./utils/formatNumber");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;} // NumberInput.js

var NumberInput = function NumberInput(_ref)



















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onKeyDown = _ref.onKeyDown,onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$innerError = _ref.innerError,innerError = _ref$innerError === void 0 ? [] : _ref$innerError,_ref$setInnerError = _ref.setInnerError,setInnerError = _ref$setInnerError === void 0 ? function () {} : _ref$setInnerError,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,value = _ref.value,_ref$autoComplete = _ref.autoComplete,autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,error = _ref.error,_ref$max = _ref.max,max = _ref$max === void 0 ? false : _ref$max,_ref$min = _ref.min,min = _ref$min === void 0 ? false : _ref$min,_ref$decimals = _ref.decimals,decimals = _ref$decimals === void 0 ? false : _ref$decimals;

  // Состояние для отслеживания позиции курсора
  var _useState = (0, _react.useState)(0),_useState2 = _slicedToArray(_useState, 2),cursorPosition = _useState2[0],setCursorPosition = _useState2[1];
  var inputRef = (0, _react.useRef)(null);

  var _useBaseInput =




    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleClick = _useBaseInput.handleClick,handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  // Восстанавливаем позицию курсора после изменения значения
  (0, _react.useEffect)(function () {
    if (focused && inputRef.current) {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [value, cursorPosition, focused]);

  // Нормализация входной строки - приводим к единому формату
  var normalizeInput = (0, _react.useCallback)(function (input) {
    // Заменяем запятые на точки и убираем пробелы
    return input.replace(/,/g, '.').replace(/\s/g, '');
  }, []);

  // Проверка валидности числа
  var isValidNumber = (0, _react.useCallback)(function (numStr) {
    if (numStr === '' || numStr === '-') {
      setInnerError(null);
      return true;
    }

    var num = parseFloat(numStr);
    if (isNaN(num)) {
      setInnerError(null);
      return false;
    }

    // Исправленные проверки
    if (max !== false && max !== null && max !== undefined && num > max) {
      setInnerError(['Ошибка, максимальное значение: ' + max]);
    } else if (min !== false && min !== null && min !== undefined && num < min) {
      setInnerError(['Ошибка, минимальное значение: ' + min]);
    } else {
      setInnerError(null);
    }

    // Специальная проверка для min = 0
    if (min === 0 && isNaN(num)) return false;

    return true;
  }, [max, min]);

  // Обработка дробной части
  var handleDecimalPart = (0, _react.useCallback)(function (wholePart, decimalPart) {
    if (decimalPart === undefined) {
      // Нет дробной части
      return (0, _formatNumber.formatForInput)(wholePart, 0);
    }

    if (decimalPart === '') {
      // Есть точка, но дробная часть пустая
      return (0, _formatNumber.formatForInput)(wholePart, 0) + '.';
    }

    // Проверяем ограничение на количество знаков после запятой
    if (decimals !== false && decimalPart.length > decimals) {
      //@ts-ignore
      return null; // Возвращаем null, чтобы прервать обработку
    }

    // Форматируем целую часть и добавляем дробную
    return (0, _formatNumber.formatForInput)(wholePart, 0) + '.' + decimalPart;
  }, [decimals]);

  // Вычисление новой позиции курсора
  var calculateCursorPosition = (0, _react.useCallback)(function (
  oldValue,
  newValue,
  currentPosition)
  {var _oldParts$, _newParts$;
    var oldParts = oldValue.split('.');
    var newParts = newValue.split('.');

    var oldWholeLength = ((_oldParts$ = oldParts[0]) === null || _oldParts$ === void 0 ? void 0 : _oldParts$.length) || 0;
    var newWholeLength = ((_newParts$ = newParts[0]) === null || _newParts$ === void 0 ? void 0 : _newParts$.length) || 0;

    if (newWholeLength > oldWholeLength) {
      // Добавился разделитель тысяч (каждые 3 цифры + пробел)
      if ((newWholeLength - 1) % 4 === 0) {
        return currentPosition + 1;
      }
    }

    return currentPosition;
  }, []);

  // Основная функция обработки изменений
  var handleChange = (0, _react.useCallback)(function (e) {
    var inputValue = e.target.value;
    var currentCursorPosition = e.target.selectionStart || 0;

    // Проверяем, содержит ли ввод только допустимые символы
    var allowedPattern = /^-?[0-9.,\s]*$/;
    if (inputValue !== '' && !allowedPattern.test(inputValue)) {
      return;
    }

    // Нормализуем ввод
    var normalizedValue = normalizeInput(inputValue);

    // Обработка пустого значения
    if (normalizedValue === '') {
      onChange('');
      setCursorPosition(currentCursorPosition);
      return;
    }

    // Извлекаем знак и число
    var isNegative = normalizedValue.startsWith('-');
    var numberPart = isNegative ? normalizedValue.slice(1) : normalizedValue;

    // Проверяем валидность числа
    if (!isValidNumber(normalizedValue)) {
      return;
    }

    // Разделяем на целую и дробную части
    var parts = numberPart.split('.');
    var wholePart = parts[0] || '';
    var decimalPart = parts[1];

    // Обрабатываем дробную часть
    var formattedValue = handleDecimalPart(wholePart, decimalPart);
    if (formattedValue === null) {
      return; // Превышено количество знаков после запятой
    }

    // Формируем финальное значение
    var finalValue = (isNegative ? '-' : '') + formattedValue;

    // Вычисляем новую позицию курсора
    var newCursorPosition = calculateCursorPosition(
      (value === null || value === void 0 ? void 0 : value.toString()) || '',
      finalValue,
      currentCursorPosition
    );

    // Обновляем состояние
    onChange(finalValue);
    setCursorPosition(newCursorPosition);
  }, [
  normalizeInput,
  isValidNumber,
  handleDecimalPart,
  calculateCursorPosition,
  onChange,
  value]
  );

  var inputClassName = (0, _useInputClassNames["default"])(className, focused, error, disabled, innerError);

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(_styles.StyledInput, {
      ref: inputRef,
      id: id,
      style: style,
      autoComplete: autoComplete || 'off',
      disabled: disabled,
      className: inputClassName,
      name: getName(name),
      value: value === undefined || value === null ? '' : String(value),
      onClick: handleClick,
      onKeyDown: onKeyDown,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur }
    ));

};

NumberInput.displayName = 'NumberInput';var _default = exports["default"] =

NumberInput;
//# sourceMappingURL=NumberInput.js.map