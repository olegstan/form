"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));

var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));

var _styles = require("../styles");

var _useInputClassNames = _interopRequireDefault(require("../hooks/useInputClassNames"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n["default"] = e, t && t.set(e, n), n;}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);} // TextArea.js
//@ts-ignore
//@ts-ignore
/**
 *
 * @param focused
 * @param setFocused
 * @param onKeyPress
 * @param onBlur
 * @param onChange
 * @param onClick
 * @param disabled
 * @param className
 * @param style
 * @param id
 * @param name
 * @param value
 * @param error
 * @param rows
 * @param autoResize
 * @param disableResize
 * @constructor
 */var TextArea = function TextArea(_ref)
















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onKeyPress = _ref.onKeyPress,onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,value = _ref.value,error = _ref.error,_ref$rows = _ref.rows,rows = _ref$rows === void 0 ? 3 : _ref$rows,_ref$autoResize = _ref.autoResize,autoResize = _ref$autoResize === void 0 ? true : _ref$autoResize,_ref$disableResize = _ref.disableResize,disableResize = _ref$disableResize === void 0 ? false : _ref$disableResize;
  var textAreaRef = (0, _react.useRef)(null);

  var _useBaseInput =





    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleClick = _useBaseInput.handleClick,handleChange = _useBaseInput.handleChange,handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  // Функция для корректировки высоты textarea
  var adjustHeight = function adjustHeight() {
    if (!autoResize) return;
    var textArea = textAreaRef.current;
    if (textArea) {
      // Сбрасываем высоту, чтобы правильно вычислить scrollHeight
      textArea.style.height = 'auto';
      textArea.style.height = "".concat(textArea.scrollHeight, "px");
    }
  };

  // Оборачиваем handleChange, чтобы после изменения значения корректировать высоту
  var handleInternalChange = function handleInternalChange(e) {
    handleChange(e);
    adjustHeight();
  };

  // Корректируем высоту при изменении value или параметра autoResize
  (0, _react.useEffect)(function () {
    adjustHeight();
  }, [value, autoResize]);

  var inputClassName = (0, _useInputClassNames["default"])(className, focused, error, disabled);;

  // Объединяем стиль из пропсов с условием отключения ресайза
  var mergedStyle = _objectSpread(_objectSpread({},
  style),
  disableResize ? { resize: 'none' } : {});


  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(_styles.StyledTextArea, {
      ref: textAreaRef,
      id: id,
      style: mergedStyle,
      disabled: disabled,
      className: inputClassName,
      name: getName(name),
      onClick: handleClick,
      onKeyPress: onKeyPress,
      onChange: handleInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      rows: rows,
      value: value === undefined || value === null ? '' : String(value) }
    ));

};

TextArea.displayName = 'TextArea';var _default = exports["default"] =

TextArea;
//# sourceMappingURL=TextArea.js.map