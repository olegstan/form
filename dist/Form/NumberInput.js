"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _finhelper = require("finhelper");
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _ic_close_only = _interopRequireDefault(require("./../assets/ic_close_only.svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onKeyPress", "onChange", "disabled", "value", "placeholder", "icon", "className", "wrapperClassName", "style", "max", "min", "decimals"]; // NumberInput.js
// ВАЖНО: ваш кастомный хук
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function NumberInput(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    _onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? '' : _ref$icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$wrapperClassName = _ref.wrapperClassName,
    wrapperClassName = _ref$wrapperClassName === void 0 ? '' : _ref$wrapperClassName,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? false : _ref$max,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? false : _ref$min,
    _ref$decimals = _ref.decimals,
    decimals = _ref$decimals === void 0 ? false : _ref$decimals,
    props = _objectWithoutProperties(_ref, _excluded);
  // Достаём общую логику из useBaseInput (аналог "BaseInput")
  var _useBaseInput = (0, _useBaseInput2["default"])(props),
    wrapperRef = _useBaseInput.wrapperRef,
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    browser = _useBaseInput.browser,
    getContainerStyle = _useBaseInput.getContainerStyle,
    getInputStyle = _useBaseInput.getInputStyle,
    getName = _useBaseInput.getName,
    getPlaceholderClassName = _useBaseInput.getPlaceholderClassName;

  // Локальный стейт для положения курсора
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectionStart = _useState2[0],
    setSelectionStart = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    selectionEnd = _useState4[0],
    setSelectionEnd = _useState4[1];
  var inputRef = (0, _react.useRef)(null);

  // Аналог componentDidUpdate(prevProps) для значения
  // Если props.value меняется и у нас есть фокус, возвращаем курсор
  (0, _react.useEffect)(function () {
    if (focused && inputRef.current) {
      inputRef.current.selectionStart = selectionStart;
      inputRef.current.selectionEnd = selectionEnd;
    }
  }, [props.value, focused, selectionStart, selectionEnd]);

  // handleChange — портируем вашу логику
  var handleChange = (0, _react.useCallback)(function (e) {
    var pattern = /^[0-9.\-\,\ ]+$/; // разрешаем цифры, точку, запятую, пробел, минус

    if (e.target.value === '' || pattern.test(e.target.value)) {
      var val = e.target.value.replace(/,/g, '.').replace(/ /g, '');

      // Проверки на min/max
      if (props.max !== false && +val > props.max) {
        return;
      }
      if (props.min === 0 && isNaN(val)) {
        return;
      }
      if (props.min !== false && +val < props.min) {
        return;
      }

      // Позиция курсора
      var position = e.target.selectionStart;
      if (val.length > 0) {
        var _props$value;
        var prefix = '';
        if (val[0] === '-') {
          prefix = '-';
          val = val.replace('-', '');
        }
        var parts = val.split('.');
        if (parts[1] !== undefined) {
          // Если есть дробная часть
          if (parts[1] !== '') {
            if (props.decimals !== false) {
              // Не даём вводить дробную часть длиннее decimals
              if (parts[1].length > props.decimals) {
                return;
              }
            }
            val = _finhelper.Money.formatForInput(val, parts[1].length);
          } else {
            // Если точка есть, но дробная часть пустая
            val = _finhelper.Money.formatForInput(val, 0) + '.';
          }
        } else {
          // Нет дробной части
          val = _finhelper.Money.formatForInput(val, 0);
        }

        // Логика с изменением длины целой части => сдвиг курсора
        var prevParts = ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.toString().split('.')) || [''];
        var newParts = val.split('.');
        var prevLength = prevParts[0].length;
        var newLength = newParts[0].length;
        if (newLength > prevLength) {
          // Каждые 3 цифры + пробел? => возможно надо сдвинуть курсор
          if ((newLength - 1) % 4 === 0) {
            position += 1;
          }
        }

        // Вызываем onChange, пробрасывая prefix
        props.onChange(e, {
          name: props.name,
          value: prefix + val
        });
        setSelectionStart(position);
        setSelectionEnd(position);
      } else {
        // Если val пустое
        props.onChange(e, {
          name: props.name,
          value: ''
        });
        setSelectionStart(position);
        setSelectionEnd(position);
      }
    }
  }, [props]);

  // Проверка "пустой" ли инпут
  var isEmpty = !(typeof props.value === 'number' && props.value.toString().length > 0 || typeof props.value === 'string' && props.value.length > 0);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainer, {
    ref: wrapperRef,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
      ref: inputRef,
      browser: browser && browser.name,
      id: props.id,
      size: props.size,
      autoComplete: "off",
      disabled: props.disabled,
      style: getInputStyle(),
      className: props.className,
      type: props.type || 'text',
      name: getName(props.name || ''),
      value: props.value,
      placeholder: props.placeholder,
      onKeyPress: function onKeyPress(e) {
        if (typeof _onKeyPress === 'function') {
          _onKeyPress(e);
        }
      },
      onChange: handleChange,
      onFocus: function onFocus() {
        setFocused(true);
      },
      onBlur: function onBlur() {
        // Если нужно что-то по blur, добавьте здесь
      }
    }), !isEmpty && typeof props.size === 'undefined' && !props.disabled && props.icon !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "close",
      src: _ic_close_only["default"],
      onClick: function onClick(e) {
        props.onChange(e, {
          name: props.name,
          value: ''
        });
      },
      alt: ""
    }), renderTooltipError()]
  });
}
var _default = exports["default"] = NumberInput;