"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class BaseInput extends _react.Component {
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  getPlaceholderClassName() {
    return "placeholder " + (this.state.focused || this.props.value && this.props.value !== '' ? 'active' : '');
  }
  getContainerStyle() {
    let containerStyle = _objectSpread({}, this.props.containerStyle);
    if (this.state.focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (this.state.hasError === true) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }
  getWrapperStyle() {
    let containerStyle = _objectSpread({}, this.props.containerStyle);
    if (this.state.focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (this.state.hasError === true) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }
  getInputStyle() {
    return this.props.style;
  }
  hasError() {
    const {
      name
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return true;
    }
  }
  getError() {
    const {
      name
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return this.state.error;
    }
  }

  //TODO не забыть перенести в новый компонент, это чтобы исключить подсказки в safari внутри инпута, очень криво вылезает
  getName(name) {
    return name.replace('country', 'couuntry').replace('state', 'staate');
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (this.state.focused === true) {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          if (typeof this.props.onOutsideClick === 'function') {
            this.props.onOutsideClick(this.props.value);
          }
        });
      }
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      name
    } = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0) {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      });
    } else {
      this.setState({
        error: null,
        hasError: false
      });
    }
  }
  getWrapperClasses() {
    let className = this.props.wrapperClassName;
    if (this.props.disabled) {
      className += ' disabled';
    }
    return className;
  }
  onBlur() {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur();
    }
  }
}
exports.default = BaseInput;