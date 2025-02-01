"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _newstyles = require("./newstyles");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
var _error = _interopRequireDefault(require("./../assets/error.svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Input.js

// @ts-ignore

function InputContainer(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? null : _ref$error;
  // Убедимся, что children — это единственный React.Element
  var child = _react["default"].Children.only(children);
  var _child$props = child.props,
    placeholder = _child$props.placeholder,
    id = _child$props.id,
    disabled = _child$props.disabled,
    value = _child$props.value,
    name = _child$props.name;
  var renderPlaceholder = function renderPlaceholder() {
    if (!placeholder) return null;
    var notEmpty = typeof value === 'number' && value.toString().length > 0 || typeof value === 'string' && value.length > 0;

    //если поле не пустое, то значит placeholder должен быть сверху
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: id,
      className: 'placeholder' + (notEmpty ? ' active' : ''),
      children: placeholder
    });
  };

  // Рендер подсказки-ошибки (аналог renderTooltipError)
  var renderTooltipError = function renderTooltipError() {
    // @ts-ignore
    return !!error ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputPopup["default"], {
      trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        id: 'tooltip-' + id,
        src: _error["default"],
        alt: ""
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: id,
        className: 'error',
        children: error
      })
    }) : null;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Container, {
    style: style,
    className: className + (disabled ? ' disabled' : ''),
    disabled: disabled,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainerStyled, {
      children: [children, renderPlaceholder(), renderTooltipError()]
    })
  });
}
var _default = exports["default"] = InputContainer;