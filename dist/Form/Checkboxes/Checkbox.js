"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _styles = require("../styles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);} // @ts-ignore


var Checkbox = function Checkbox(_ref)









{var _ref$value = _ref.value,value = _ref$value === void 0 ? 1 : _ref$value,_ref$name = _ref.name,name = _ref$name === void 0 ? '' : _ref$name,_ref$toggleCallback = _ref.toggleCallback,toggleCallback = _ref$toggleCallback === void 0 ? function () {} : _ref$toggleCallback,textStyle = _ref.textStyle,id = _ref.id,checked = _ref.checked,checkboxStyle = _ref.checkboxStyle,style = _ref.style,text = _ref.text;
  // Реф на <input>
  var inputRef = (0, _react.useRef)(null);

  // Обработчик клика для всего компонента
  var handleToggle = function handleToggle() {
    if (inputRef.current) {
      inputRef.current.click(); // Имитируем клик на чекбоксе
    }
  };

  var combinedTextStyle = textStyle ? _objectSpread({}, textStyle) : {};
  var combinedCheckboxStyle = checkboxStyle ? _objectSpread({},
  checkboxStyle) :
  {
    backgroundColor: '#4378FF',
    border: '1px solid #4378FF'
  };

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsxs)(_styles.StyledCheckbox, {
      style: style,
      onClick: handleToggle // Общий обработчик клика для всего компонента
      , id: id, children: [/*#__PURE__*/

      (0, _jsxRuntime.jsx)("input", {
        ref: inputRef,
        className: checked ? 'active' : '',
        onChange: function onChange(event) {return toggleCallback ? toggleCallback(event.target.checked, event) : function () {};} // Передаем новое состояние в callback
        , name: name,
        type: "checkbox",
        value: value,
        checked: checked }
      ), /*#__PURE__*/
      (0, _jsxRuntime.jsx)("span", { className: "rotate-container", style: combinedCheckboxStyle, children: /*#__PURE__*/
        (0, _jsxRuntime.jsx)("span", { className: "rotate" }) }
      ),
      text && /*#__PURE__*/
      (0, _jsxRuntime.jsx)("div", { style: combinedTextStyle, className: "text", children:
        text }
      )] }

    ));

};var _default = exports["default"] =

Checkbox;
//# sourceMappingURL=Checkbox.js.map