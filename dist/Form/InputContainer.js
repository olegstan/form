"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
var _error = _interopRequireDefault(require("./../assets/error.svg"));
var _ic_close_only = _interopRequireDefault(require("../assets/ic_close_only.svg"));
var _calendar = _interopRequireDefault(require("../assets/calendar.svg"));
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
    _child$props$disabled = _child$props.disabled,
    disabled = _child$props$disabled === void 0 ? false : _child$props$disabled,
    value = _child$props.value,
    name = _child$props.name,
    onChange = _child$props.onChange,
    _child$props$iconClos = _child$props.iconClose,
    iconClose = _child$props$iconClos === void 0 ? true : _child$props$iconClos,
    iconCalendar = _child$props.iconCalendar;
  var renderIcon = function renderIcon() {
    if (!child.type) return null;

    //если передано iconClose = false то рендерить икноку для очистки не нужно
    if (!iconClose) return null;
    switch (child.type.name) {
      case 'DateInput':
      case 'DateTimeInput':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "calendar",
          src: _calendar["default"],
          alt: ""
        });
    }
    return null;
  };
  var renderCloseIcon = function renderCloseIcon() {
    if (!child.type) return null;

    //если передано iconClose = false то рендерить икноку для очистки не нужно
    if (!iconClose) return null;
    var notEmpty = false;
    switch (child.type.name) {
      case 'Select':
      case 'DateInput':
      case 'DateTimeInput':
        //там и так будет иконка календаря
        return null;
      case 'FileInput':
        return null;
      default:
        notEmpty = typeof value === 'number' && value.toString().length > 0 || typeof value === 'string' && value.length > 0;
        break;
    }
    return notEmpty ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "close",
      src: _ic_close_only["default"],
      onClick: function onClick(e) {
        onChange(e, {
          name: name,
          value: ''
        });
      },
      alt: ""
    }) : null;
  };
  var renderPlaceholder = function renderPlaceholder() {
    if (!placeholder) return null;
    if (!child.type) return null;
    var notEmpty = false;
    switch (child.type.name) {
      case 'DateInput':
      case 'DateTimeInput':
        if (value instanceof Date) {
          notEmpty = true;
        }
        break;
      case 'MaskedInput':
        notEmpty = true; //всегда есть внутри инпута, поэтому показывае placeholder всегда сверху
        break;
      case 'FileInput':
        notEmpty = true; //всегда есть внутри инпута, поэтому показывае placeholder всегда сверху
        break;
      default:
        notEmpty = typeof value === 'number' && value.toString().length > 0 || typeof value === 'string' && value.length > 0;
        break;
    }

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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Container, {
    style: style,
    className: className + (disabled ? ' disabled' : ''),
    disabled: disabled,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.InputContainerStyled, {
      children: [children, renderPlaceholder(), renderTooltipError(), renderCloseIcon(), renderIcon()]
    })
  });
}
var _default = exports["default"] = InputContainer;