"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _MultiValue = _interopRequireDefault(require("./components/MultiValue"));

var _useBaseInput2 = _interopRequireDefault(require("../../hooks/useBaseInput"));


var _styles = require("./styles");
var _useInputClassNames = _interopRequireDefault(require("../../hooks/useInputClassNames"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _regenerator() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r = "function" == typeof Symbol ? Symbol : {},n = r.iterator || "@@iterator",o = r.toStringTag || "@@toStringTag";function i(r, n, o, i) {var c = n && n.prototype instanceof Generator ? n : Generator,u = Object.create(c.prototype);return _regeneratorDefine2(u, "_invoke", function (r, n, o) {var i,c,u,f = 0,p = o || [],y = !1,G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) {return i = t, c = 0, u = e, G.n = r, a;} };function d(r, n) {for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {var o,i = p[t],d = G.p,l = i[2];r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));}if (o || r > 1) return a;throw y = !0, n;}return function (o, p, l) {if (f > 1) throw TypeError("Generator is already running");for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);try {if (f = 2, i) {if (c || (o = "next"), t = i[o]) {if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");if (!t.done) return t;u = t.value, c < 2 && (c = 0);} else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);i = e;} else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;} catch (t) {i = e, c = 1, u = t;} finally {f = 1;}}return { value: t, done: y };};}(r, o, i), !0), u;}var a = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}t = Object.getPrototypeOf;var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {return this;}), t),u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);function f(e) {return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;}return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {return this;}), _regeneratorDefine2(u, "toString", function () {return "[object Generator]";}), (_regenerator = function _regenerator() {return { w: i, m: f };})();}function _regeneratorDefine2(e, r, n, t) {var i = Object.defineProperty;try {i({}, "", {});} catch (e) {i = 0;}_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {function o(r, n) {_regeneratorDefine2(e, r, function (e) {return this._invoke(r, n, e);});}r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));}, _regeneratorDefine2(e, r, n, t);}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]);return f;})(e, t);}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}

var MultipleSearch = function MultipleSearch(_ref)


















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onKeyDown = _ref.onKeyDown,onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function (newValue, action) {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,_ref$values = _ref.values,values = _ref$values === void 0 ? [] : _ref$values,error = _ref.error,_ref$options = _ref.options,options = _ref$options === void 0 ? [] : _ref$options,_ref$search = _ref.search,search = _ref$search === void 0 ? '' : _ref$search,_ref$onSearch = _ref.onSearch,onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,_ref$allowAdd = _ref.allowAdd,allowAdd = _ref$allowAdd === void 0 ? false : _ref$allowAdd,_ref$handleCreate = _ref.handleCreate,handleCreate = _ref$handleCreate === void 0 ? function (newValue) {} : _ref$handleCreate;
  var _useState = (0, _react.useState)(false),_useState2 = _slicedToArray(_useState, 2),selectOpen = _useState2[0],setSelectOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),_useState4 = _slicedToArray(_useState3, 2),SelectComponent = _useState4[0],setSelectComponent = _useState4[1];
  var _useState5 = (0, _react.useState)(null),_useState6 = _slicedToArray(_useState5, 2),CreatableComponent = _useState6[0],setCreatableComponent = _useState6[1];
  var _useState7 = (0, _react.useState)(true),_useState8 = _slicedToArray(_useState7, 2),isLoading = _useState8[0],setIsLoading = _useState8[1];
  var selectRef = (0, _react.useRef)(null);

  // Динамический импорт через useEffect
  (0, _react.useEffect)(function () {
    var loadComponents = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {var _yield$Promise$all, _yield$Promise$all2, selectModule, creatableModule, _t;return _regenerator().w(function (_context) {while (1) switch (_context.p = _context.n) {case 0:_context.p = 0;_context.n = 1;return (

                Promise.all([Promise.resolve().then(function () {return _interopRequireWildcard(require(
                    'react-select'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require(
                    'react-select/creatable'));})]
                ));case 1:_yield$Promise$all = _context.v;_yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);selectModule = _yield$Promise$all2[0];creatableModule = _yield$Promise$all2[1];

              setSelectComponent(function () {return selectModule["default"];});
              setCreatableComponent(function () {return creatableModule["default"];});_context.n = 3;break;case 2:_context.p = 2;_t = _context.v;

              console.error('Failed to load select components:', _t);case 3:_context.p = 3;

              setIsLoading(false);return _context.f(3);case 4:return _context.a(2);}}, _callee, null, [[0, 2, 3, 4]]);}));return function loadComponents() {return _ref2.apply(this, arguments);};}();



    loadComponents();
  }, []);

  var _useBaseInput =



    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  var handleChange = (0, _react.useCallback)(function (newValue, action) {
    onChange(newValue, action);
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

  var handleKeyDown = (0, _react.useCallback)(function (e) {

    // onKeyDown(e);
  }, [onKeyDown]);
  var handleInputChange = (0, _react.useCallback)(function (inputValue) {
    onSearch(inputValue);
  }, [onSearch]);

  var customStyles = {
    control: function control(provided) {return _objectSpread(_objectSpread({},
      provided), {}, {
        minHeight: '48px',
        border: 'none',
        boxShadow: 'none',
        background: 'transparent' });},

    menu: function menu(provided) {return _objectSpread(_objectSpread({},
      provided), {}, {
        zIndex: 9999 });}

  };

  var selectOptions = Array.isArray(options) ?
  options.map(function (option) {var _option$id, _option$name;return {
      value: (_option$id = option.id) !== null && _option$id !== void 0 ? _option$id : '',
      label: (_option$name = option.name) !== null && _option$name !== void 0 ? _option$name : ''
    };}) :
  [];

  var inputClassName = (0, _useInputClassNames["default"])(className, focused, error, disabled);

  // Показываем загрузку пока компоненты не загружены
  if (isLoading || !SelectComponent || !CreatableComponent) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledSelect, { children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", { children: "Loading..." }) });
  }

  var Component = allowAdd ? CreatableComponent : SelectComponent;

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(_styles.StyledSelect, { children: /*#__PURE__*/
      (0, _jsxRuntime.jsx)(Component, {
        placeholder: "",
        id: id,
        components: {
          MultiValue: _MultiValue["default"],
          DropdownIndicator: function DropdownIndicator() {return null;},
          IndicatorSeparator: function IndicatorSeparator() {return null;},
          IndicatorsContainer: function IndicatorsContainer() {return null;}
        },
        className: inputClassName,
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
      ) }
    ));

};

MultipleSearch.displayName = 'MultipleSearch';var _default = exports["default"] =

MultipleSearch;
//# sourceMappingURL=MultipleSearch.js.map