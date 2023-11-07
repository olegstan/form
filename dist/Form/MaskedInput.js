"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _detectBrowser = require("detect-browser");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
var _containerStyle = require("./styles/containerStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class MaskedInput extends _BaseInput.default {
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

  /**
   *
   */

  render() {
    const {
      name
    } = this.props;
    let error = this.getError();
    const browser = (0, _detectBrowser.detect)();
    let empty = true;
    if (typeof this.props.value === 'number' && this.props.value.toString().length > 0 || typeof this.props.value === 'string' && this.props.value.length > 0) {
      empty = false;
    }
    return /*#__PURE__*/_react.default.createElement(_containerStyle.Container, {
      style: this.getContainerStyle(),
      disabled: this.props.disabled,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_newstyles.MaskedStyledInput, {
      browser: browser && browser.name,
      id: this.props.id,
      mask: this.props.mask,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.getInputStyle(),
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
      alwaysShowMask: true,
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
        // });
      }
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: this.getPlaceholderClassName()
    }, this.props.placeholder) : '', !empty && typeof this.props.size === 'undefined' && !this.props.disabled && /*#__PURE__*/_react.default.createElement("img", {
      className: "close",
      src: require('./../assets/ic_close_only.svg').default,
      onClick: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: ''
        });
        this.setState({
          hasError: false
        });
      },
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
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
exports.default = MaskedInput;
_defineProperty(MaskedInput, "defaultProps", {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  mask: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: ''
});