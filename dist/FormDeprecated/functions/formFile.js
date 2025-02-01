"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formFile;
var _react = _interopRequireDefault(require("react"));
var _FileInput = _interopRequireDefault(require("./../FileInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function formFile(Base) {
  var FormFileInput = /*#__PURE__*/function (_Base) {
    function FormFileInput() {
      _classCallCheck(this, FormFileInput);
      return _callSuper(this, FormFileInput, arguments);
    }
    _inherits(FormFileInput, _Base);
    return _createClass(FormFileInput, [{
      key: "renderFileInput",
      value: function renderFileInput() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref.field,
          text = _ref.text,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          callback = _ref.callback,
          size = _ref.size,
          style = _ref.style,
          className = _ref.className,
          _ref$onKeyPress = _ref.onKeyPress,
          onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
          _ref$onKeyDown = _ref.onKeyDown,
          onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,
          valueText = _ref.valueText;
        var link = this.getLink(field);
        var value = link === null ? '' : link;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput["default"], {
          id: this.getPrefix() + field,
          style: style,
          type: "text",
          name: field,
          size: size,
          valueText: valueText,
          className: className,
          disabled: this.getDisabled(disabled),
          value: value,
          onChange: function onChange(e, _ref2) {
            var name = _ref2.name,
              value = _ref2.value;
            _this.setState(function (prv) {
              _this.setValueInput(prv, field, value);
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(value);
              }
            });
          },
          onOutsideClick: function onOutsideClick() {},
          placeholder: text,
          errors: this.state.formErrors
        });
      }
    }]);
  }(Base);
  return FormFileInput;
}