"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _detectBrowser = require("detect-browser");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class File extends _BaseInput.default {
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
    let style = {};
    if (this.props.style) {
      style = _objectSpread({}, this.props.style);
    }
    const {
      name
    } = this.props;
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #EF5E70';
    }
    style.border = focus;
    const browser = (0, _detectBrowser.detect)();
    let empty = true;
    if (this.props.value && typeof this.props.value.name === 'string') {
      empty = false;
    }
    return /*#__PURE__*/_react.default.createElement(_containerStyle.Container, {
      style: style,
      size: this.props.size,
      disabled: this.props.disabled,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_newstyles.StyledInput, {
      browser: browser && browser.name,
      id: this.props.id,
      size: this.props.size,
      disabled: this.props.disabled,
      className: this.props.className,
      type: "file",
      name: this.getName(name),
      placeholder: this.props.placeholder,
      onChange: e => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          this.props.onChange(e, {
            name: this.props.name,
            value: {
              name: e.target.files[0].name,
              content: base64String
            }
          });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.setState({
          hasError: false
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder"
    }, this.props.placeholder) : '', !empty && typeof this.props.size === 'undefined' && !this.props.disabled && /*#__PURE__*/_react.default.createElement("img", {
      className: "close",
      src: require('./../assets/ic_close_only.svg').default,
      onClick: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: null
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
exports.default = File;
_defineProperty(File, "defaultProps", {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: null,
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  style: {}
});