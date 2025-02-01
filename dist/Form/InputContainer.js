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
    style = _ref$style === void 0 ? {} : _ref$style;
  // Убедимся, что children — это единственный React.Element
  var child = _react["default"].Children.only(children);
  var _child$props = child.props,
    placeholder = _child$props.placeholder,
    id = _child$props.id,
    placeholderStyle = _child$props.placeholderStyle,
    getPlaceholderClassName = _child$props.getPlaceholderClassName,
    handleShowSelect = _child$props.handleShowSelect,
    hasError = _child$props.hasError,
    getError = _child$props.getError;

  // Рендер плейсхолдера (аналог renderPlaceholder)
  var renderPlaceholder = function renderPlaceholder() {
    if (!placeholder) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: id,
      className: 'placeholder',
      children: placeholder
    });
  };

  // Рендер подсказки-ошибки (аналог renderTooltipError)
  var renderTooltipError = function renderTooltipError() {
    // @ts-ignore
    return hasError ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputPopup["default"], {
      trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        id: 'tooltip-' + id,
        src: _error["default"],
        alt: ""
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: id,
        className: 'error',
        children: getError()
      })
    }) : null;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Container, {
    style: style,
    className: className,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainerStyled, {
      children: [children, renderPlaceholder(), renderTooltipError()]
    })
  });
}
var _default = exports["default"] = InputContainer;