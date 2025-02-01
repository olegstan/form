"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _finhelper = require("finhelper");
var _newstyles = require("./../../newstyles");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _default(setComponentsLoaded, setFlatpickrComponent) {
  var isMounted = true;
  Promise.all([Promise.resolve().then(function () {
    return _interopRequireWildcard(require('flatpickr'));
  }), Promise.resolve().then(function () {
    return _interopRequireWildcard(require('react-flatpickr'));
  }), Promise.resolve().then(function () {
    return _interopRequireWildcard(require('flatpickr/dist/l10n/ru.js'));
  }), Promise.resolve().then(function () {
    return _interopRequireWildcard(require('flatpickr/dist/flatpickr.css'));
  })]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      flatpickr = _ref2[0],
      ReactFlatpickr = _ref2[1],
      Russian = _ref2[2].Russian;
    if (!isMounted) return;

    // Локализация
    var url = _finhelper.Url.getCurrentUrl();
    var lang = localStorage.getItem('language_id');
    if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
      try {
        flatpickr["default"].localize(Russian);
      } catch (e) {
        console.error(e);
      }
    }

    // Создаём стилизованный компонент
    var DateTimeStyled = (0, _styledComponents["default"])(ReactFlatpickr["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        ", "\n      "])), _newstyles.sharedInputStyle);
    setFlatpickrComponent(function () {
      return DateTimeStyled;
    });
    setComponentsLoaded(true);
  })["catch"](function (err) {
    console.error('Failed to load flatpickr modules', err);
  });
  return function () {
    isMounted = false;
  };
}