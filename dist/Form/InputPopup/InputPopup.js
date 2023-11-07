"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _reactjsPopup = _interopRequireDefault(require("reactjs-popup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class InputPopup extends _react.Component {
  //TODO сделать чтобы закрывалось при клиие внутри или снаружи
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactjsPopup.default, {
      on: 'hover',
      trigger: /*#__PURE__*/_react.default.createElement(_styles.Container, null, this.props.trigger),
      position: "bottom",
      contentStyle: {
        zIndex: 1000
      }
    }, close => /*#__PURE__*/_react.default.createElement(_styles.PopupContainer, null, this.props.children));
  }
}
exports.default = InputPopup;