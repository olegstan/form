"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return r;};var t,r = {},e = Object.prototype,n = e.hasOwnProperty,o = "function" == typeof Symbol ? Symbol : {},i = o.iterator || "@@iterator",a = o.asyncIterator || "@@asyncIterator",u = o.toStringTag || "@@toStringTag";function c(t, r, e, n) {return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n });}try {c({}, "");} catch (t) {c = function c(t, r, e) {return t[r] = e;};}function h(r, e, n, o) {var i = e && e.prototype instanceof Generator ? e : Generator,a = Object.create(i.prototype);return c(a, "_invoke", function (r, e, n) {var o = 1;return function (i, a) {if (3 === o) throw Error("Generator is already running");if (4 === o) {if ("throw" === i) throw a;return { value: t, done: !0 };}for (n.method = i, n.arg = a;;) {var u = n.delegate;if (u) {var c = d(u, n);if (c) {if (c === f) continue;return c;}}if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {if (1 === o) throw o = 4, n.arg;n.dispatchException(n.arg);} else "return" === n.method && n.abrupt("return", n.arg);o = 3;var h = s(r, e, n);if ("normal" === h.type) {if (o = n.done ? 4 : 2, h.arg === f) continue;return { value: h.arg, done: n.done };}"throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg);}};}(r, n, new Context(o || [])), !0), a;}function s(t, r, e) {try {return { type: "normal", arg: t.call(r, e) };} catch (t) {return { type: "throw", arg: t };}}r.wrap = h;var f = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var l = {};c(l, i, function () {return this;});var p = Object.getPrototypeOf,y = p && p(p(x([])));y && y !== e && n.call(y, i) && (l = y);var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l);function g(t) {["next", "throw", "return"].forEach(function (r) {c(t, r, function (t) {return this._invoke(r, t);});});}function AsyncIterator(t, r) {function e(o, i, a, u) {var c = s(t[o], t, i);if ("throw" !== c.type) {var h = c.arg,f = h.value;return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) {e("next", t, a, u);}, function (t) {e("throw", t, a, u);}) : r.resolve(f).then(function (t) {h.value = t, a(h);}, function (t) {return e("throw", t, a, u);});}u(c.arg);}var o;c(this, "_invoke", function (t, n) {function i() {return new r(function (r, o) {e(t, n, r, o);});}return o = o ? o.then(i, i) : i();}, !0);}function d(r, e) {var n = e.method,o = r.i[n];if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;var i = s(o, r.i, e.arg);if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;var a = i.arg;return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);}function w(t) {this.tryEntries.push(t);}function m(r) {var e = r[4] || {};e.type = "normal", e.arg = t, r[4] = e;}function Context(t) {this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0);}function x(r) {if (null != r) {var e = r[i];if (e) return e.call(r);if ("function" == typeof r.next) return r;if (!isNaN(r.length)) {var o = -1,a = function e() {for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;return e.value = t, e.done = !0, e;};return a.next = a;}}throw new TypeError(_typeof(r) + " is not iterable");}return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) {var r = "function" == typeof t && t.constructor;return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));}, r.mark = function (t) {return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;}, r.awrap = function (t) {return { __await: t };}, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () {return this;}), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) {void 0 === i && (i = Promise);var a = new AsyncIterator(h(t, e, n, o), i);return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {return t.done ? t.value : a.next();});}, g(v), c(v, u, "Generator"), c(v, i, function () {return this;}), c(v, "toString", function () {return "[object Generator]";}), r.keys = function (t) {var r = Object(t),e = [];for (var n in r) e.unshift(n);return function t() {for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t;return t.done = !0, t;};}, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) {if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);}, stop: function stop() {this.done = !0;var t = this.tryEntries[0][4];if ("throw" === t.type) throw t.arg;return this.rval;}, dispatchException: function dispatchException(r) {if (this.done) throw r;var e = this;function n(t) {a.type = "throw", a.arg = r, e.next = t;}for (var o = e.tryEntries.length - 1; o >= 0; --o) {var i = this.tryEntries[o],a = i[4],u = this.prev,c = i[1],h = i[2];if (-1 === i[0]) return n("end"), !1;if (!c && !h) throw Error("try statement without catch or finally");if (null != i[0] && i[0] <= u) {if (u < c) return this.method = "next", this.arg = t, n(c), !0;if (u < h) return n(h), !1;}}}, abrupt: function abrupt(t, r) {for (var e = this.tryEntries.length - 1; e >= 0; --e) {var n = this.tryEntries[e];if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {var o = n;break;}}o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null);var i = o ? o[4] : {};return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i);}, complete: function complete(t, r) {if ("throw" === t.type) throw t.arg;return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f;}, finish: function finish(t) {for (var r = this.tryEntries.length - 1; r >= 0; --r) {var e = this.tryEntries[r];if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;}}, "catch": function _catch(t) {for (var r = this.tryEntries.length - 1; r >= 0; --r) {var e = this.tryEntries[r];if (e[0] === t) {var n = e[4];if ("throw" === n.type) {var o = n.arg;m(e);}return o;}}throw Error("illegal catch attempt");}, delegateYield: function delegateYield(r, e, n) {return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f;} }, r;}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}

var MultiValue = function MultiValue(props) {
  var data = props.data;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.TagText, { children: [
    data.label, /*#__PURE__*/
    (0, _jsxRuntime.jsx)("div", { onClick: function onClick() {
        props.removeProps.onClick();
      } })] }
  );
};var

SearchMultiple = /*#__PURE__*/function (_BaseInput) {

  function SearchMultiple(props)
  {var _this;_classCallCheck(this, SearchMultiple);
    _this = _callSuper(this, SearchMultiple, [props]);

    _this.state = {
      options: [],
      selectedOption: null,
      error: null,
      select: false,
      focused: false,
      hovered: false,
      hasError: false,
      search: props.search ? props.search : '',
      // Добавляем состояния для динамически загруженных компонентов
      SelectComponent: null,
      CreatableSelectComponent: null,
      isLoading: true
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }_inherits(SearchMultiple, _BaseInput);return _createClass(SearchMultiple, [{ key: "componentDidMount", value: function () {var _componentDidMount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(

        function _callee() {var _yield$Promise$all, _yield$Promise$all2, selectModule, creatableModule;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:
                document.addEventListener('mousedown', this.handleClickOutside);

                // Динамическая загрузка компонентов
                _context.prev = 1;_context.next = 4;return (
                  Promise.all([Promise.resolve().then(function () {return _interopRequireWildcard(require(
                      'react-select'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require(
                      'react-select/creatable'));})]
                  ));case 4:_yield$Promise$all = _context.sent;_yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);selectModule = _yield$Promise$all2[0];creatableModule = _yield$Promise$all2[1];

                this.setState({
                  SelectComponent: selectModule["default"],
                  CreatableSelectComponent: creatableModule["default"],
                  isLoading: false
                });_context.next = 15;break;case 11:_context.prev = 11;_context.t0 = _context["catch"](1);

                console.error('Failed to load select components:', _context.t0);
                this.setState({ isLoading: false });case 15:case "end":return _context.stop();}}, _callee, this, [[1, 11]]);}));function componentDidMount() {return _componentDidMount.apply(this, arguments);}return componentDidMount;}() }, { key: "componentDidUpdate", value:



    function componentDidUpdate(prevProps)
    {
      var name = this.props.name;

      var newState = _objectSpread({}, this.state);
      var shouldUpdate = false;

      // Обработка ошибок
      var hasError = this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0;
      var error = hasError ? this.props.errors[name][0] : null;

      if (hasError !== this.state.hasError || error !== this.state.error) {
        newState.error = error;
        newState.hasError = hasError;
        shouldUpdate = true;
      }

      // Обработка изменения поиска
      if (this.props.search !== prevProps.search) {
        newState.search = this.props.search;
        shouldUpdate = true;
      }

      // Обновление состояния, если есть изменения
      if (shouldUpdate) {
        this.setState(newState);
      }
    } }, { key: "handleClickOutside", value:

    function handleClickOutside(e)
    {
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target))
      {
        if (typeof this.props.onOutsideClick === 'function' && this.state.focused === true)
        {
          this.props.onOutsideClick(this.state.search);
        }

        this.handleShowSelect(false);
      }
    } }, { key: "onSearch", value:

    function onSearch(search)
    {
      if (typeof this.props.onSearch === 'function')
      {
        this.props.onSearch(search);
      }
    } }, { key: "componentWillUnmount", value:

    function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      window.removeEventListener('keydown', SearchMultiple.func, true);
    } }, { key: "handleShowSelect", value:

    function handleShowSelect(bool)
    {
      this.setState({
        select: bool,
        hasError: false,
        focused: bool
      });
    } }, { key: "handleChange", value:

    function handleChange(newValue, actionMeta)
    {
      switch (actionMeta.action) {

        case 'select-option':
          if (typeof this.props.onRemoveElement === 'function')
          {
            this.props.onAddElement(newValue);
          }
          break;
        case 'remove-value':
          if (typeof this.props.onRemoveElement === 'function')
          {
            this.props.onRemoveElement(newValue);
          }
          break;
      }
    } }, { key: "handleCreate", value:

    function handleCreate(newOption)
    {
      if (typeof this.props.onCreate === 'function') {
        this.props.onCreate(newOption);
      }
    } }, { key: "getComponent", value:

    function getComponent(resItems, customStyles)
    {var _this2 = this;
      var selected = this.props.selected;
      var _this$state = this.state,SelectComponent = _this$state.SelectComponent,CreatableSelectComponent = _this$state.CreatableSelectComponent,isLoading = _this$state.isLoading;

      // Показываем загрузку, если компоненты еще не загружены
      if (isLoading || !SelectComponent || !CreatableSelectComponent) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", { children: "Loading..." });
      }

      var commonProps = {
        placeholder: '',
        id: this.props.id,
        components: {
          MultiValue: MultiValue,
          DropdownIndicator: function DropdownIndicator() {return null;},
          IndicatorSeparator: function IndicatorSeparator() {return null;},
          IndicatorsContainer: function IndicatorsContainer() {return null;}
        },
        onChange: this.handleChange.bind(this),
        options: resItems,
        value: selected,
        isMulti: true,
        noOptionsMessage: function noOptionsMessage() {return '';},
        styles: customStyles,
        onFocus: function onFocus() {
          _this2.setState({
            focused: true,
            hasError: false
          });
        }
      };

      if (this.props.allowAdd)
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(CreatableSelectComponent, _objectSpread(_objectSpread({},
        commonProps), {}, {
          allowCreateWhileLoading: false,
          onCreateOption: this.handleCreate.bind(this),
          formatCreateLabel: function formatCreateLabel(inputValue) {
            return 'Создать новый тег: "' + inputValue + '"';
          } })
        );
      } else {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectComponent, _objectSpread({}, commonProps));
      }
    } }, { key: "render", value:

    function render()
    {var _this3 = this;
      var _this$props = this.props,items = _this$props.items,size = _this$props.size,selected = _this$props.selected;

      var resItems = items ? items.
      map(function (item, key) {
        return { value: item.id, label: item.name };
      }) : [];

      var style = {};

      if (this.props.style)
      {
        style = _objectSpread({},
        this.props.style);

      }

      var error = this.getError();
      var focus = this.state.hasError ? '1px solid #FF0000' : '';

      style.border = focus;

      var customStyles = {
        valueContainer: function valueContainer(provided, state) {return _objectSpread(_objectSpread({},
          provided), {}, {
            marginTop: "12px",
            padding: '1px 8px' },
          _this3.props.valueContainerStyle);},

        control: function control() {return _objectSpread({
            border: '1px solid #D2D1D1',
            borderRadius: '8px' },
          _this3.props.controlStyle);},

        singleValue: function singleValue() {return {
            padding: '0px 5px 0px 8px'
          };}
      };

      if (this.props.containerStyle)
      {
        customStyles.container = function () {return _this3.props.containerStyle;};
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Container, { style: this.props.nativeContainerStyle, className: this.props.className + ' multi-select', size: size, onClick: function onClick(e) {
          e.stopPropagation();
        }, children: /*#__PURE__*/
        (0, _jsxRuntime.jsxs)(_newstyles.InputWrapper, {
          className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : ''),
          style: _objectSpread(_objectSpread({}, style), { zIndex: this.state.focused ? '1000' : 'auto' }),
          size: size,
          ref: this.wrapperRef,
          onClick: function onClick(e) {
            e.stopPropagation();
          }, children: [
          this.getComponent(resItems, customStyles),
          this.renderPlaceholder(),
          error ? /*#__PURE__*/(0, _jsxRuntime.jsx)("label", { htmlFor: this.props.id, className: this.props.className + " error", children: error }) : ''] }
        ) }
      );
    } }]);}(_BaseInput2["default"]);var _default = exports["default"] =


SearchMultiple;
//# sourceMappingURL=SearchMultiple.js.map