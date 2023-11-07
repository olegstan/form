"use strict";

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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Button extends _react.Component {
  render() {
    switch (this.props.type) {
      case 'href':
        return /*#__PURE__*/_react.default.createElement(_newstyles.Link, {
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
          onClick: this.props.onClick
        }, this.props.children);
      case 'inline-link':
        return /*#__PURE__*/_react.default.createElement(_newstyles.InlineLink, {
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
          onClick: this.props.onClick
        }, this.props.children);
      case 'link':
        return /*#__PURE__*/_react.default.createElement(_newstyles.ButtonLink, {
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
          to: this.props.to
        }, this.props.children);
      case 'button':
      default:
        return /*#__PURE__*/_react.default.createElement(_newstyles.Button, {
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
          onClick: this.props.onClick
        }, this.props.children);
    }
  }
}
exports.default = Button;
/**
 *
 */
_defineProperty(Button, "defaultProps", {
  type: 'button',
  // 'link',
  onClick: () => {}
});