"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _detectBrowser = require("detect-browser");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class TextArea extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  getContainerStyle() {
    return _objectSpread({}, this.props.containerStyle);
  }

  /**
   * @type {{multi: boolean}}
   */

  render() {
    let error = this.getError();
    const browser = (0, _detectBrowser.detect)();
    return /*#__PURE__*/_react.default.createElement(_newstyles.ContainerTextArea, {
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      style: this.getContainerStyle()
    }, /*#__PURE__*/_react.default.createElement(_newstyles.WrapperTextArea, {
      ref: this.setWrapperRef,
      style: this.getWrapperStyle(),
      className: this.props.className + ' ' + this.getWrapperClasses()
    }, /*#__PURE__*/_react.default.createElement(_newstyles.TextArea, {
      className: this.props.className,
      browser: browser && browser.name,
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.getInputStyle(),
      name: this.props.name,
      value: this.props.value ? this.props.value : '',
      rows: this.props.rows,
      placeholder: this.props.placeholder,
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onChange: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: e.target.value
        });
        this.setState({
          hasError: false
        });
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: () => {
        // this.setState({
        //   focused: false,
        //   hasError: false
        // }, () => {
        //   this.onBlur();
        // })
      }
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      style: this.props.placeholderStyle,
      className: this.getPlaceholderClassName()
    }, this.props.placeholder) : '', this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
      trigger: /*#__PURE__*/_react.default.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('./../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : ''));
  }
}
exports.default = TextArea;
_defineProperty(TextArea, "defaultProps", {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  rows: 3
});