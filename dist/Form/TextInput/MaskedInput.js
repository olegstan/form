"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));

var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));

var _styles = require("../styles");

var _useInputClassNames = _interopRequireDefault(require("../hooks/useInputClassNames"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };} //@ts-ignore
//@ts-ignore
/**
 *
 * @param focused
 * @param setFocused
 * @param onBlur
 * @param onKeyPress
 * @param onChange
 * @param onClick
 * @param disabled
 * @param className
 * @param type
 * @param style
 * @param id
 * @param name
 * @param value
 * @param autoComplete
 * @param error
 * @param mask
 * @constructor
 */
var MaskedInput = function MaskedInput(_ref)
















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onKeyPress = _ref.onKeyPress,onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$type = _ref.type,type = _ref$type === void 0 ? 'text' : _ref$type,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,value = _ref.value,_ref$autoComplete = _ref.autoComplete,autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,error = _ref.error,mask = _ref.mask;
  var _useBaseInput =





    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleClick = _useBaseInput.handleClick,handleChange = _useBaseInput.handleChange,handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  var inputClassName = (0, _useInputClassNames["default"])(className, focused, error, disabled);;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.MaskedStyledInput, {
    id: id,
    style: style,
    autoComplete: autoComplete || 'off',
    disabled: disabled,
    className: inputClassName,
    type: type,
    name: getName(name),
    value: value,
    onClick: handleClick,
    onKeyPress: onKeyPress,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    mask: mask }
  );
};

MaskedInput.displayName = 'MaskedInput';var _default = exports["default"] =

MaskedInput;
//# sourceMappingURL=MaskedInput.js.map