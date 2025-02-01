"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _ic_close_only = _interopRequireDefault(require("./../assets/ic_close_only.svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onKeyPress", "onChange", "disabled", "icon", "className", "wrapperClassName", "valueText", "style"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var FileInput = function FileInput(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? '' : _ref$icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$wrapperClassName = _ref.wrapperClassName,
    wrapperClassName = _ref$wrapperClassName === void 0 ? '' : _ref$wrapperClassName,
    _ref$valueText = _ref.valueText,
    valueText = _ref$valueText === void 0 ? '' : _ref$valueText,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    props = _objectWithoutProperties(_ref, _excluded);
  var callerClassName = 'FileInput';
  var inputRef = (0, _react.useRef)(null);
  var _useBaseInput = (0, _useBaseInput2["default"])(props, callerClassName),
    error = _useBaseInput.error,
    hasError = _useBaseInput.hasError,
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    setHasError = _useBaseInput.setHasError,
    wrapperRef = _useBaseInput.wrapperRef,
    browser = _useBaseInput.browser,
    getName = _useBaseInput.getName,
    renderPlaceholder = _useBaseInput.renderPlaceholder,
    renderTooltipError = _useBaseInput.renderTooltipError;
  (0, _react.useEffect)(function () {
    if (inputRef.current) {
      var file = new File([], valueText, {
        type: 'text/plain',
        lastModified: new Date()
      });
      var dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      inputRef.current.files = dataTransfer.files;
    }
  }, []);
  var handleFileChange = function handleFileChange(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        var base64String = reader.result;
        onChange(e, {
          name: props.name,
          value: {
            size: file.size,
            name: file.name,
            content: base64String
          }
        });
      };
      reader.readAsDataURL(file);
    }
    setHasError(false);
  };
  var handleClearFile = function handleClearFile(e) {
    onChange(e, {
      name: props.name,
      value: null
    });
    setHasError(false);
  };
  var inputStyle = _objectSpread(_objectSpread({}, style), {}, {
    border: focused ? '1px solid #1874DE' : hasError ? '1px solid #EF5E70' : ''
  });
  var empty = !props.value || typeof props.value.name !== 'string';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
    ref: inputRef,
    browser: browser && browser.name,
    id: props.id,
    size: props.size,
    disabled: disabled,
    className: className,
    type: "file",
    name: getName(props.name),
    placeholder: props.placeholder,
    onChange: handleFileChange
  });

  // return (
  //     <InputContainer ref={wrapperRef}>

  //         {renderPlaceholder()}
  //         {!empty &&
  //         typeof props.size === 'undefined' &&
  //         !disabled && (
  //             <img
  //                 className="close"
  //                 src={Close}
  //                 onClick={handleClearFile}
  //                 alt=""
  //             />
  //         )}
  //         {renderTooltipError()}
  //     </InputContainer>
  // );
};
var _default = exports["default"] = FileInput;