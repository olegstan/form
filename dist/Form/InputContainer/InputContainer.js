"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.isNotEmpty = isNotEmpty;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../styles");
var _PlaceholderLabel = _interopRequireDefault(require("./components/PlaceholderLabel"));
var _ErrorTooltip = _interopRequireDefault(require("./components/ErrorTooltip"));
var _CloseIcon = _interopRequireDefault(require("./components/CloseIcon"));
var _InputIcon = _interopRequireDefault(require("./components/InputIcon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Input.js

function isNotEmpty(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'number') return value.toString().length > 0;
  return value.length > 0; // для строки (или массивов, если что-то такое)
}
function InputContainer(_ref) {
  var _child$type;
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? null : _ref$error;
  // Убедимся, что children — это единственный React.Element
  var child = _react["default"].Children.only(children);
  var _ref2 = child.props || {},
    placeholder = _ref2.placeholder,
    id = _ref2.id,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    value = _ref2.value,
    name = _ref2.name,
    onChange = _ref2.onChange,
    _ref2$iconClose = _ref2.iconClose,
    iconClose = _ref2$iconClose === void 0 ? true : _ref2$iconClose,
    loading = _ref2.loading,
    search = _ref2.search;
  var typeName = (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name;

  /**
   * Определяем, нужно ли отображать placeholder сверху (активное состояние).
   */
  var isPlaceholderActive = (0, _react.useMemo)(function () {
    if (!placeholder || !typeName) return false;
    switch (typeName) {
      case 'DateInput':
      case 'DateTimeInput':
        // "value instanceof Date"
        return value instanceof Date;
      case 'MaskedInput':
      case 'FileInput':
        // у этих типов placeholder всегда сверху
        return true;
      case 'Search':
        // для поля поиска смотрим свойство search
        return isNotEmpty(search);
      default:
        return isNotEmpty(value);
    }
  }, [placeholder, typeName, value, search]);
  var containerClassName = "".concat(className).concat(disabled ? ' disabled' : '');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Container, {
    style: style,
    className: containerClassName,
    disabled: disabled,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.InputContainerStyled, {
      children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlaceholderLabel["default"], {
        placeholder: placeholder,
        id: id,
        active: isPlaceholderActive
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorTooltip["default"], {
        error: error,
        id: id
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseIcon["default"], {
        typeName: typeName,
        iconClose: iconClose,
        value: value,
        name: name,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputIcon["default"], {
        typeName: typeName,
        iconClose: iconClose,
        loading: loading
      })]
    })
  });
}
var _default = exports["default"] = InputContainer;