"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form2 = _interopRequireDefault(require("./Form"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import {Modal} from "../../interface/modal/Modal";
var ModalForm = exports.ModalForm = /*#__PURE__*/function (_Form) {
  function ModalForm(props) {
    var _this;
    _classCallCheck(this, ModalForm);
    _this = _callSuper(this, ModalForm, [props]);
    /**
     *
     * @type {boolean}
     */
    _defineProperty(_this, "closeModal", true);
    /**
     *
     * @type {boolean}
     */
    _defineProperty(_this, "hiddenModal", false);
    _this.state = {
      show: props.show ? props.show : false
    };
    return _this;
  }
  _inherits(ModalForm, _Form);
  return _createClass(ModalForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.show) {
        this.handleShow();
      }
    }
  }, {
    key: "getButtonStyle",
    value: function getButtonStyle() {
      if (this.props.buttonStyle) {
        return this.props.buttonStyle;
      }
      return {};
    }
  }, {
    key: "getModalName",
    value: function getModalName() {}
  }, {
    key: "getButtonText",
    value: function getButtonText() {}
  }, {
    key: "getButtonId",
    value: function getButtonId() {}
  }, {
    key: "handleClose",
    value: function handleClose() {
      var _this2 = this;
      this.setState(function (prv) {
        prv.form = _this2.getClearForm(_this2.props);
        prv.formErrors = {};
        prv.submitted = false;
        prv.edited = false;
        if (!_this2.hiddenModal) {
          prv.show = false;
        }
        return prv;
      }, function () {
        if (typeof _this2.props.closeModal === 'undefined') {
          if (_this2.closeModal === true) {
            document.getElementById('modal').classList.remove("visible");
          }
        } else {
          if (_this2.props.closeModal === true) {
            document.getElementById('modal').classList.remove("visible");
          }
        }
        if (typeof _this2.props.callback === 'function') {
          _this2.props.callback();
        }
        if (typeof _this2.onClose === 'function') {
          _this2.onClose();
        }
        if (typeof _this2.props.onClose === 'function') {
          _this2.props.onClose();
        }
      });
    }
  }, {
    key: "getClearForm",
    value: function getClearForm() {
      return {};
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        show: true
      }, function () {
        document.getElementById('modal').classList.add("visible");
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      this.setState(function (prv) {
        prv.edited = false;
        return prv;
      });
    }
  }]);
}(_Form2["default"]);
var _default = exports["default"] = ModalForm;