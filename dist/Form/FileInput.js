"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));

var _styles = require("./styles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);} //@ts-ignore
//@ts-ignore

var FileInput = function FileInput(_ref)












{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,_ref$valueText = _ref.valueText,valueText = _ref$valueText === void 0 ? '' : _ref$valueText,error = _ref.error;

  var inputRef = (0, _react.useRef)(null);

  var _useBaseInput =

    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),getName = _useBaseInput.getName;

  (0, _react.useEffect)(function () {
    if (inputRef.current) {
      var file = new File([], valueText, {
        type: 'text/plain',
        // @ts-ignore
        lastModified: new Date()
      });

      var dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      // @ts-ignore
      inputRef.current.files = dataTransfer.files;
    }
  }, []);

  var handleFileChange = function handleFileChange(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        var base64String = reader.result;

        onChange({
          size: file.size,
          name: file.name,
          content: base64String
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // @ts-ignore
  var inputClassName = "".concat(className).concat(error !== null && error !== void 0 && error[0] ? ' error' : '');


  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledInput, {
    ref: inputRef,
    id: id,
    style: style,
    disabled: disabled,
    className: inputClassName,
    type: "file",
    name: getName(name),
    onChange: handleFileChange }
  );
};

FileInput.displayName = 'FileInput';var _default = exports["default"] =

FileInput;
//# sourceMappingURL=FileInput.js.map