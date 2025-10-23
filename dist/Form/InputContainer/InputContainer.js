"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _styles = require("../styles");
var _PlaceholderLabel = _interopRequireDefault(require("./components/PlaceholderLabel"));
var _ErrorTooltip = _interopRequireDefault(require("./components/ErrorTooltip"));
var _CloseIcon = _interopRequireDefault(require("./components/CloseIcon"));
var _InputIcon = _interopRequireDefault(require("./components/InputIcon"));

var _styledComponents = require("styled-components");
var _isNotEmpty = require("./utils/isNotEmpty");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;} //@ts-ignore
//@ts-ignore















function InputContainer(_ref)









{var _child$type, _child$type2;var children = _ref.children,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,_ref$error = _ref.error,error = _ref$error === void 0 ? null : _ref$error;
  var _useState = (0, _react.useState)(false),_useState2 = _slicedToArray(_useState, 2),focused = _useState2[0],setFocused = _useState2[1]; // аналог this.state.focused
  var _useState3 = (0, _react.useState)(false),_useState4 = _slicedToArray(_useState3, 2),innerError = _useState4[0],setInnerError = _useState4[1]; // аналог this.state.focused

  var theme = (0, _styledComponents.useTheme)();

  // Убедимся, что children — это единственный React.Element
  var child = _react["default"].Children.only(children);

  // Клонируем элемент и добавляем обработчики событий
  //@ts-ignore
  var clonedChild = /*#__PURE__*/_react["default"].cloneElement(child, {
    focused: focused,
    setFocused: setFocused,
    innerError: innerError,
    setInnerError: setInnerError,
    error: error
  });

  var _ref2 =












    child.props || {},placeholder = _ref2.placeholder,id = _ref2.id,_ref2$disabled = _ref2.disabled,disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,value = _ref2.value,values = _ref2.values,name = _ref2.name,onChange = _ref2.onChange,_ref2$icon = _ref2.icon,icon = _ref2$icon === void 0 ? true : _ref2$icon,loading = _ref2.loading,search = _ref2.search,onSearch = _ref2.onSearch;

  // @ts-ignore
  var typeName = ((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) || ((_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.name);

  /**
   * Определяем, нужно ли отображать placeholder сверху (активное состояние).
   */
  var isPlaceholderActive = (0, _react.useMemo)(function () {
    if (!placeholder || !typeName) return false;
    switch (typeName) {
      case 'DateInput':
      case 'DateTimeInput':
        return value instanceof Date;
      case 'FileInput':
        return true;
      case 'MultiSelect':
      case 'MultipleSearch':
        return !!(values !== null && values !== void 0 && values.length);
      case 'Search':
      case 'GroupSearch':
        return (0, _isNotEmpty.isNotEmpty)(search);
      default:
        return (0, _isNotEmpty.isNotEmpty)(value);
    }
  }, [placeholder, typeName, value, search, values, _isNotEmpty.isNotEmpty]);

  var containerClassName = "".concat(className).concat(disabled ? ' disabled' : '');

  var containerStyle = (0, _react.useMemo)(function () {

    switch (typeName) {
      case 'Select':
      case 'MultiSelect':
      case 'GroupSelect':
        //@ts-ignore
        return _objectSpread(_objectSpread({}, style), { backgroundColor: theme.selectBackgroundColor });
      default:
        return style;
    }
  }, [typeName, style, theme]);

  // @ts-ignore
  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(_styles.Container, {
      style: containerStyle,
      className: containerClassName,
      onClick: function onClick(e) {return e.stopPropagation();}, children: /*#__PURE__*/

      (0, _jsxRuntime.jsxs)(_styles.InputContainerStyled, { className: "styled-input__main-wrapper", children: [
        clonedChild, /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_PlaceholderLabel["default"], {
          focused: focused,
          placeholder: placeholder,
          id: id,
          active: isPlaceholderActive }
        ), /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_ErrorTooltip["default"], {
          error: error || innerError,
          id: id }
        ), /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_CloseIcon["default"]
        //@ts-ignore
        , { typeName: typeName,
          icon: icon,
          value: value,
          search: search,
          loading: loading,
          disabled: disabled,
          onSearch: onSearch,
          name: name,
          onChange: onChange }
        ), /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_InputIcon["default"], {
          id: id,
          typeName: typeName,
          icon: icon,
          loading: loading }
        )] }
      ) }
    ));

}var _default = exports["default"] =

InputContainer;
//# sourceMappingURL=InputContainer.js.map