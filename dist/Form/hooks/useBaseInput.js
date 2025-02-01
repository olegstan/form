"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useBaseInput;
var _react = _interopRequireWildcard(require("react"));
var _detectBrowser = require("detect-browser");
var _jsxRuntime = require("react/jsx-runtime");
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
 * - cDU для обновления ошибок из props.errors
 * - focused, hasError, error в стейте
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
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1]; // аналог this.state.error
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1]; // аналог this.state.focused
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasError = _useState6[0],
    setHasError = _useState6[1]; // аналог this.state.hasError

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
        setHasError(false);
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
  // Аналог componentDidUpdate: следим за props.errors и меняем hasError/error
  // ------------------------------
  (0, _react.useEffect)(function () {
    var name = props.name,
      errors = props.errors;
    var isError = errors && name && errors[name] && errors[name].length > 0;
    var newError = isError ? errors[name][0] : null;
    if (isError !== hasError || newError !== error) {
      setHasError(isError);
      setError(newError);
    }
  }, [props.errors, props.name, hasError, error]);

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
    if (hasError) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }, [props.containerStyle, focused, hasError]);

  // getWrapperStyle (если отличался от контейнера — бывает не у всех)
  var getWrapperStyle = (0, _react.useCallback)(function () {
    var style = _objectSpread({}, props.containerStyle);
    if (focused) {
      style.border = '1px solid #1874DE';
    }
    if (hasError) {
      style.border = '1px solid #EF5E70';
    }
    return style;
  }, [props.containerStyle, focused, hasError]);

  // getInputStyle
  var getInputStyle = (0, _react.useCallback)(function () {
    var inputStyle = _objectSpread({}, props.style);
    if (props.className === 'style2') {
      inputStyle.color = '#fff';
    }
    return inputStyle;
  }, [props.style, props.className]);

  // Если где-то нужно проверить напрямую через функцию (раньше было hasError())
  var hasErrorFunc = (0, _react.useCallback)(function () {
    return hasError;
  }, [hasError]);

  // getError (ранее было this.getError())
  var getError = (0, _react.useCallback)(function () {
    return error;
  }, [error]);

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
  // Общие рендер-методы (если в детях вы вызывали напрямую)
  // ------------------------------

  // renderPlaceholder — возвращает готовый <label> (если хотите прям "по-старому")
  var renderPlaceholder = (0, _react.useCallback)(function () {
    var placeholder = props.placeholder,
      id = props.id,
      placeholderStyle = props.placeholderStyle;

    // console.log(props)
    // if (!placeholder) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: id,
      style: placeholderStyle,
      className: getPlaceholderClassName(),
      onClick: function onClick() {
        return handleShowSelect(true);
      },
      children: placeholder
    });
  }, [props.placeholder, props.id, props.placeholderStyle, handleShowSelect, getPlaceholderClassName]);

  // renderTooltipError — возвращает ваш InputPopup с иконкой errorSvg
  var renderTooltipError = (0, _react.useCallback)(function () {
    if (!hasError || !error) return null;
    // return (
    //   <InputPopup
    //     trigger={
    //       <img
    //         id={'tooltip-' + props.id}
    //         src={errorSvg}
    //         alt=""
    //       />
    //     }
    //   >
    //     <label htmlFor={props.id} className={props.className + ' error'}>
    //       {error}
    //     </label>
    //   </InputPopup>
    // );
  }, [hasError, error, props.id, props.className]);

  // renderInput — часто в классах вы переопределяли,
  // но если хотите чтобы hook возвращал «базовый» input, можно оставить:
  var renderInput = (0, _react.useCallback)(function () {
    // пример:
    // return <StyledInput .../>
    // Но чаще вы это делаете уже в дочернем компоненте.
    return null;
  }, []);

  // ------------------------------
  // Возвращаем всё, что может понадобиться дочерним компонентам
  // ------------------------------
  return {
    // state и их сеттеры
    error: error,
    setError: setError,
    hasError: hasError,
    setHasError: setHasError,
    focused: focused,
    setFocused: setFocused,
    // ref
    wrapperRef: wrapperRef,
    // browser detect
    browser: browser,
    // методы
    handleShowSelect: handleShowSelect,
    handleClickOutside: handleClickOutside,
    hasErrorFunc: hasErrorFunc,
    getError: getError,
    getName: getName,
    getContainerStyle: getContainerStyle,
    getWrapperStyle: getWrapperStyle,
    getInputStyle: getInputStyle,
    getPlaceholderClassName: getPlaceholderClassName,
    getWrapperClasses: getWrapperClasses,
    onBlurFunc: onBlurFunc,
    // "рендерные" методы, если вы хотите пользоваться ими напрямую
    renderPlaceholder: renderPlaceholder,
    renderTooltipError: renderTooltipError,
    renderInput: renderInput
  };
}