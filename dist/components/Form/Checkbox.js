"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _newstyles = require("./newstyles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Checkbox extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }
  render() {
    let style = {};
    if (this.props.textStyle) {
      style = _objectSpread({}, this.props.textStyle);
    }
    let props = {};
    if (this.props.id) {
      props.id = this.props.id;
    }
    if (this.props.checked) {
      props.checked = true;
    } else {
      props.checked = false;
    }
    return /*#__PURE__*/_react.default.createElement(_newstyles.Checkbox, {
      id: props.id,
      style: this.props.style
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("input", _extends({
      className: this.props.checked ? 'active' : '',
      onChange: e => {
        this.props.toggleCallback();
      },
      name: this.props.name,
      type: "checkbox",
      value: this.state.value
    }, props)), /*#__PURE__*/_react.default.createElement("span", {
      className: "rotate-container",
      style: {
        borderRadius: this.props.form === 'round' ? '10px' : '6px'
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "rotate"
    }))), /*#__PURE__*/_react.default.createElement(_newstyles.Body, {
      style: style,
      className: "text",
      onClick: e => {
        e.preventDefault();
        this.props.toggleCallback();
      }
    }, this.props.text)));
  }
}
exports.default = Checkbox;
_defineProperty(Checkbox, "defaultProps", {
  value: 1,
  name: '',
  toggleCallback: () => {}
});