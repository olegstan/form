"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FileInput = function FileInput(_ref) {
  var _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    id = _ref.id,
    name = _ref.name,
    _ref$valueText = _ref.valueText,
    valueText = _ref$valueText === void 0 ? '' : _ref$valueText,
    error = _ref.error;
  var inputRef = (0, _react.useRef)(null);
  var _useBaseInput = (0, _useBaseInput2["default"])({
      name: name,
      onClick: onClick,
      onChange: onChange
    }),
    getName = _useBaseInput.getName;
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
          name: name,
          value: {
            size: file.size,
            name: file.name,
            content: base64String
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };
  var handleClearFile = function handleClearFile(e) {
    onChange(e, {
      name: name,
      value: null
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledInput, {
    ref: inputRef,
    id: id,
    style: style,
    disabled: disabled,
    className: className + (error !== null && error !== void 0 && error[0] ? ' error' : ''),
    type: "file",
    name: getName(name),
    onChange: handleFileChange
  });
};
var _default = exports["default"] = FileInput;