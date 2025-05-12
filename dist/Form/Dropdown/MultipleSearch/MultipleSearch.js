"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));


var _reactSelect = _interopRequireDefault(require("react-select"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
var _MultiValue = _interopRequireDefault(require("./components/MultiValue"));

var _useBaseInput2 = _interopRequireDefault(require("../../hooks/useBaseInput"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}







var MultipleSearch = function MultipleSearch(_ref)


















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onKeyDown = _ref.onKeyDown,onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,_ref$values = _ref.values,values = _ref$values === void 0 ? [] : _ref$values,error = _ref.error,_ref$options = _ref.options,options = _ref$options === void 0 ? [] : _ref$options,_ref$search = _ref.search,search = _ref$search === void 0 ? '' : _ref$search,_ref$onSearch = _ref.onSearch,onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,_ref$allowAdd = _ref.allowAdd,allowAdd = _ref$allowAdd === void 0 ? false : _ref$allowAdd,_ref$handleCreate = _ref.handleCreate,handleCreate = _ref$handleCreate === void 0 ? function () {} : _ref$handleCreate;
  var _useState = (0, _react.useState)(false),_useState2 = _slicedToArray(_useState, 2),selectOpen = _useState2[0],setSelectOpen = _useState2[1];
  var selectRef = (0, _react.useRef)(null);

  var _useBaseInput =



    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  var handleChange = (0, _react.useCallback)(function (option) {
    onChange(option);
    handleClose();
  }, [onChange]);

  var handleOpen = (0, _react.useCallback)(function () {
    setSelectOpen(true);
    setFocused(true);
  }, [setFocused]);

  var handleClose = (0, _react.useCallback)(function () {
    setSelectOpen(false);
    setFocused(false);
  }, [setFocused]);
  //
  var handleKeyDown = (0, _react.useCallback)(function (e) {

    // onKeyDown(e);
  }, [onKeyDown]);
  var handleInputChange = (0, _react.useCallback)(function (inputValue) {
    onSearch(inputValue);
  }, [onSearch]);

  var customStyles = {
    control: function control(provided) {return _objectSpread(_objectSpread({},
      provided), {}, {
        border: 'none',
        boxShadow: 'none',
        background: 'transparent' });},

    menu: function menu(provided) {return _objectSpread(_objectSpread({},
      provided), {}, {
        zIndex: 9999 });}

  };

  var Component = allowAdd ? _creatable["default"] : _reactSelect["default"];

  var selectOptions = options.map(function (option) {return {
      value: option.id,
      label: option.name
    };});

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(Component, {
      placeholder: "",
      id: id,
      components: {
        MultiValue: _MultiValue["default"],
        DropdownIndicator: function DropdownIndicator() {return null;},
        IndicatorSeparator: function IndicatorSeparator() {return null;},
        IndicatorsContainer: function IndicatorsContainer() {return null;}
      },
      isMulti: true,
      noOptionsMessage: function noOptionsMessage() {return 'Нет вариантов';},
      value: values,
      options: selectOptions,
      openMenuOnClick: true,
      onMenuOpen: handleOpen,
      onMenuClose: handleClose,
      onChange: handleChange,
      onInputChange: handleInputChange,
      inputValue: search,
      styles: customStyles,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onCreateOption: handleCreate,
      formatCreateLabel: function formatCreateLabel(inputValue) {return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u0433: \"".concat(inputValue, "\"");},
      allowCreateWhileLoading: false,
      isDisabled: disabled }
    ));

};

MultipleSearch.displayName = 'MultipleSearch';var _default = exports["default"] =

MultipleSearch;
//# sourceMappingURL=MultipleSearch.js.map