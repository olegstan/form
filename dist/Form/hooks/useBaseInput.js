"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useBaseInput;
var _react = _interopRequireWildcard(require("react"));
var _detectBrowser = require("detect-browser");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import InputPopup from "../InputPopup/InputPopup";
// import errorSvg from "../../assets/error.svg";
/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - cDM/cWU для клика вне (handleClickOutside)
 * - focused
 * - getPlaceholderClassName, getContainerStyle, getWrapperStyle, getInputStyle
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 * - на ваше усмотрение getWrapperClasses, onBlurFunc и т.д.
 */

function useBaseInput(props, callerClassName) {
  // ------------------------------
  // Состояния из BaseInput (this.state)
  // ------------------------------
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1]; // аналог this.state.focused

  // Если вам нужна логика поиска (this.state.search), можете добавить:
  // const [search, setSearch] = useState('');

  // ------------------------------
  // Refs
  // ------------------------------
  var wrapperRef = (0, _react.useRef)(null); // аналог this.wrapperRef

  // ------------------------------
  // Определение браузера (detect-browser)
  // ------------------------------
  var browser = (0, _detectBrowser.detect)();

  // ------------------------------
  // Обработка «клика вне компонента» (componentDidMount / willUnmount)
  // ------------------------------
  var handleClickOutside = (0, _react.useCallback)(function (e) {
    // Если кликнули вне wrapperRef...
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      // ...и при этом инпут в фокусе...
      if (focused) {
        setFocused(false);
        // Если есть коллбэк onOutsideClick
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick(props.value);
        }
      }
    }
  }, [focused, props]);
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // ------------------------------
  // Прочие методы из BaseInput
  // ------------------------------

  // Полиморфный метод, если где-то вызывается (пока был пустой)
  var handleShowSelect = (0, _react.useCallback)(function (select) {
    // ...
  }, []);

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  var getName = (0, _react.useCallback)(function (name) {
    var _name$replace;
    return name === null || name === void 0 || (_name$replace = name.replace('country', 'couuntry')) === null || _name$replace === void 0 ? void 0 : _name$replace.replace('state', 'staate');
  }, []);

  // getContainerStyle
  var getContainerStyle = (0, _react.useCallback)(function () {
    var containerStyle = _objectSpread({}, props.containerStyle);
    if (focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    return containerStyle;
  }, [props.containerStyle, focused]);

  // getWrapperStyle (если отличался от контейнера — бывает не у всех)
  var getWrapperStyle = (0, _react.useCallback)(function () {
    var style = _objectSpread({}, props.containerStyle);
    if (focused) {
      style.border = '1px solid #1874DE';
    }
    return style;
  }, [props.containerStyle, focused]);

  // getInputStyle
  var getInputStyle = (0, _react.useCallback)(function () {
    var inputStyle = _objectSpread({}, props.style);
    if (props.className === 'style2') {
      inputStyle.color = '#fff';
    }
    return inputStyle;
  }, [props.style, props.className]);

  // getPlaceholderClassName
  var getPlaceholderClassName = (0, _react.useCallback)(function () {
    var isActive = false;
    // Логика, которая была в BaseInput:
    if (focused) {
      isActive = true;
    } else if (props.selected) {
      // если есть props.selected
      isActive = true;
    } else if ((props.value === 0 || props.value) && props.value !== '' && !props.inputMask) {
      isActive = true;
    } else if (props.value && typeof props.value === 'string' && props.value.replace(props.inputMask, '') !== '') {
      isActive = true;
    } else if (props.search && props.search.length > 0) {
      isActive = true;
    } else if (callerClassName === 'FileInput') {
      isActive = true;
    }
    return 'placeholder ' + (isActive ? 'active' : '');
  }, [focused, props.value, props.selected, props.inputMask]);

  // getWrapperClasses (если где-то используется для className)
  var getWrapperClasses = (0, _react.useCallback)(function () {
    var className = props.wrapperClassName || '';
    if (props.disabled) {
      className += ' disabled';
    }
    return className;
  }, [props.wrapperClassName, props.disabled]);

  // onBlur — если нужно внутри компонента просто вызвать props.onBlur()
  var onBlurFunc = (0, _react.useCallback)(function () {
    if (typeof props.onBlur === 'function') {
      props.onBlur();
    }
  }, [props.onBlur]);

  // ------------------------------
  // Возвращаем всё, что может понадобиться дочерним компонентам
  // ------------------------------
  return {
    focused: focused,
    setFocused: setFocused,
    handleClickOutside: handleClickOutside,
    wrapperRef: wrapperRef,
    browser: browser,
    getName: getName,
    getInputStyle: getInputStyle,
    getWrapperClasses: getWrapperClasses,
    onBlurFunc: onBlurFunc
  };
}