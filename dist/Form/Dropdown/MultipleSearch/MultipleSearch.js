"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _MultiValue = _interopRequireDefault(require("./components/MultiValue"));

var _useBaseInput2 = _interopRequireDefault(require("../../hooks/useBaseInput"));


var _styles = require("./styles");
var _useInputClassNames = _interopRequireDefault(require("../../hooks/useInputClassNames"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return r;};var t,r = {},e = Object.prototype,n = e.hasOwnProperty,o = "function" == typeof Symbol ? Symbol : {},i = o.iterator || "@@iterator",a = o.asyncIterator || "@@asyncIterator",u = o.toStringTag || "@@toStringTag";function c(t, r, e, n) {return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n });}try {c({}, "");} catch (t) {c = function c(t, r, e) {return t[r] = e;};}function h(r, e, n, o) {var i = e && e.prototype instanceof Generator ? e : Generator,a = Object.create(i.prototype);return c(a, "_invoke", function (r, e, n) {var o = 1;return function (i, a) {if (3 === o) throw Error("Generator is already running");if (4 === o) {if ("throw" === i) throw a;return { value: t, done: !0 };}for (n.method = i, n.arg = a;;) {var u = n.delegate;if (u) {var c = d(u, n);if (c) {if (c === f) continue;return c;}}if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {if (1 === o) throw o = 4, n.arg;n.dispatchException(n.arg);} else "return" === n.method && n.abrupt("return", n.arg);o = 3;var h = s(r, e, n);if ("normal" === h.type) {if (o = n.done ? 4 : 2, h.arg === f) continue;return { value: h.arg, done: n.done };}"throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg);}};}(r, n, new Context(o || [])), !0), a;}function s(t, r, e) {try {return { type: "normal", arg: t.call(r, e) };} catch (t) {return { type: "throw", arg: t };}}r.wrap = h;var f = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var l = {};c(l, i, function () {return this;});var p = Object.getPrototypeOf,y = p && p(p(x([])));y && y !== e && n.call(y, i) && (l = y);var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l);function g(t) {["next", "throw", "return"].forEach(function (r) {c(t, r, function (t) {return this._invoke(r, t);});});}function AsyncIterator(t, r) {function e(o, i, a, u) {var c = s(t[o], t, i);if ("throw" !== c.type) {var h = c.arg,f = h.value;return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) {e("next", t, a, u);}, function (t) {e("throw", t, a, u);}) : r.resolve(f).then(function (t) {h.value = t, a(h);}, function (t) {return e("throw", t, a, u);});}u(c.arg);}var o;c(this, "_invoke", function (t, n) {function i() {return new r(function (r, o) {e(t, n, r, o);});}return o = o ? o.then(i, i) : i();}, !0);}function d(r, e) {var n = e.method,o = r.i[n];if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;var i = s(o, r.i, e.arg);if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;var a = i.arg;return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);}function w(t) {this.tryEntries.push(t);}function m(r) {var e = r[4] || {};e.type = "normal", e.arg = t, r[4] = e;}function Context(t) {this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0);}function x(r) {if (null != r) {var e = r[i];if (e) return e.call(r);if ("function" == typeof r.next) return r;if (!isNaN(r.length)) {var o = -1,a = function e() {for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;return e.value = t, e.done = !0, e;};return a.next = a;}}throw new TypeError(_typeof(r) + " is not iterable");}return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) {var r = "function" == typeof t && t.constructor;return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));}, r.mark = function (t) {return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;}, r.awrap = function (t) {return { __await: t };}, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () {return this;}), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) {void 0 === i && (i = Promise);var a = new AsyncIterator(h(t, e, n, o), i);return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {return t.done ? t.value : a.next();});}, g(v), c(v, u, "Generator"), c(v, i, function () {return this;}), c(v, "toString", function () {return "[object Generator]";}), r.keys = function (t) {var r = Object(t),e = [];for (var n in r) e.unshift(n);return function t() {for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t;return t.done = !0, t;};}, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) {if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);}, stop: function stop() {this.done = !0;var t = this.tryEntries[0][4];if ("throw" === t.type) throw t.arg;return this.rval;}, dispatchException: function dispatchException(r) {if (this.done) throw r;var e = this;function n(t) {a.type = "throw", a.arg = r, e.next = t;}for (var o = e.tryEntries.length - 1; o >= 0; --o) {var i = this.tryEntries[o],a = i[4],u = this.prev,c = i[1],h = i[2];if (-1 === i[0]) return n("end"), !1;if (!c && !h) throw Error("try statement without catch or finally");if (null != i[0] && i[0] <= u) {if (u < c) return this.method = "next", this.arg = t, n(c), !0;if (u < h) return n(h), !1;}}}, abrupt: function abrupt(t, r) {for (var e = this.tryEntries.length - 1; e >= 0; --e) {var n = this.tryEntries[e];if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {var o = n;break;}}o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null);var i = o ? o[4] : {};return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i);}, complete: function complete(t, r) {if ("throw" === t.type) throw t.arg;return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f;}, finish: function finish(t) {for (var r = this.tryEntries.length - 1; r >= 0; --r) {var e = this.tryEntries[r];if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;}}, "catch": function _catch(t) {for (var r = this.tryEntries.length - 1; r >= 0; --r) {var e = this.tryEntries[r];if (e[0] === t) {var n = e[4];if ("throw" === n.type) {var o = n.arg;m(e);}return o;}}throw Error("illegal catch attempt");}, delegateYield: function delegateYield(r, e, n) {return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f;} }, r;}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}

var MultipleSearch = function MultipleSearch(_ref)


















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onKeyDown = _ref.onKeyDown,onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function (newValue, action) {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,_ref$values = _ref.values,values = _ref$values === void 0 ? [] : _ref$values,error = _ref.error,_ref$options = _ref.options,options = _ref$options === void 0 ? [] : _ref$options,_ref$search = _ref.search,search = _ref$search === void 0 ? '' : _ref$search,_ref$onSearch = _ref.onSearch,onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,_ref$allowAdd = _ref.allowAdd,allowAdd = _ref$allowAdd === void 0 ? false : _ref$allowAdd,_ref$handleCreate = _ref.handleCreate,handleCreate = _ref$handleCreate === void 0 ? function (newValue) {} : _ref$handleCreate;
  var _useState = (0, _react.useState)(false),_useState2 = _slicedToArray(_useState, 2),selectOpen = _useState2[0],setSelectOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),_useState4 = _slicedToArray(_useState3, 2),SelectComponent = _useState4[0],setSelectComponent = _useState4[1];
  var _useState5 = (0, _react.useState)(null),_useState6 = _slicedToArray(_useState5, 2),CreatableComponent = _useState6[0],setCreatableComponent = _useState6[1];
  var _useState7 = (0, _react.useState)(true),_useState8 = _slicedToArray(_useState7, 2),isLoading = _useState8[0],setIsLoading = _useState8[1];
  var selectRef = (0, _react.useRef)(null);

  // Динамический импорт через useEffect
  (0, _react.useEffect)(function () {
    var loadComponents = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {var _yield$Promise$all, _yield$Promise$all2, selectModule, creatableModule;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                Promise.all([Promise.resolve().then(function () {return _interopRequireWildcard(require(
                    'react-select'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require(
                    'react-select/creatable'));})]
                ));case 3:_yield$Promise$all = _context.sent;_yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);selectModule = _yield$Promise$all2[0];creatableModule = _yield$Promise$all2[1];

              setSelectComponent(function () {return selectModule["default"];});
              setCreatableComponent(function () {return creatableModule["default"];});_context.next = 14;break;case 11:_context.prev = 11;_context.t0 = _context["catch"](0);

              console.error('Failed to load select components:', _context.t0);case 14:_context.prev = 14;

              setIsLoading(false);return _context.finish(14);case 17:case "end":return _context.stop();}}, _callee, null, [[0, 11, 14, 17]]);}));return function loadComponents() {return _ref2.apply(this, arguments);};}();



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