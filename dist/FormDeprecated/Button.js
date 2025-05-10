"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _newstyles = require("./newstyles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var


Button = exports["default"] = /*#__PURE__*/function (_Component) {function Button() {_classCallCheck(this, Button);return _callSuper(this, Button, arguments);}_inherits(Button, _Component);return _createClass(Button, [{ key: "render", value:









    function render()
    {
      switch (this.props.type) {

        case 'href':
          return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_newstyles.Link, {
              slim: this.props.slim,
              right: this.props.right,
              flex: this.props.flex,
              style: this.props.style,
              size: this.props.size,
              color: this.props.color,
              className: this.props.className,
              position: this.props.position,
              id: this.props.id,
              href: this.props.href,
              target: this.props.target,
              onClick: this.props.disabled ? function () {} : this.props.onClick,
              disabled: this.props.disabled, children:

              this.props.children }
            ));

        case 'inline-link':
          return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_newstyles.InlineLink, {
              left: this.props.left,
              slim: this.props.slim,
              right: this.props.right,
              flex: this.props.flex,
              style: this.props.style,
              size: this.props.size,
              color: this.props.color,
              className: this.props.className,
              position: this.props.position,
              id: this.props.id,
              href: this.props.href,
              target: this.props.target,
              onClick: this.props.disabled ? function () {} : this.props.onClick,
              disabled: this.props.disabled, children:

              this.props.children }
            ));

        case 'link':
          return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_newstyles.ButtonLink, {
              left: this.props.left,
              slim: this.props.slim,
              right: this.props.right,
              flex: this.props.flex,
              style: this.props.style,
              size: this.props.size,
              color: this.props.color,
              className: this.props.className,
              position: this.props.position,
              id: this.props.id,
              to: this.props.to,
              disabled: this.props.disabled, children:

              this.props.children }
            ));

        case 'button':
        default:
          return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_newstyles.Button, {
              left: this.props.left,
              slim: this.props.slim,
              right: this.props.right,
              flex: this.props.flex,
              style: this.props.style,
              size: this.props.size,
              color: this.props.color,
              className: this.props.className,
              position: this.props.position,
              id: this.props.id,
              onClick: this.props.disabled ? function () {} : this.props.onClick,
              disabled: this.props.disabled, children:

              this.props.children }
            ));

      }
    } }]);}(_react.Component); /**
 *
 */_defineProperty(Button, "defaultProps", { type: 'button', // 'link',
    onClick: function onClick() {} });
//# sourceMappingURL=Button.js.map