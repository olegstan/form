"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _regenerator() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r = "function" == typeof Symbol ? Symbol : {},n = r.iterator || "@@iterator",o = r.toStringTag || "@@toStringTag";function i(r, n, o, i) {var c = n && n.prototype instanceof Generator ? n : Generator,u = Object.create(c.prototype);return _regeneratorDefine2(u, "_invoke", function (r, n, o) {var i,c,u,f = 0,p = o || [],y = !1,G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) {return i = t, c = 0, u = e, G.n = r, a;} };function d(r, n) {for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {var o,i = p[t],d = G.p,l = i[2];r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));}if (o || r > 1) return a;throw y = !0, n;}return function (o, p, l) {if (f > 1) throw TypeError("Generator is already running");for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);try {if (f = 2, i) {if (c || (o = "next"), t = i[o]) {if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");if (!t.done) return t;u = t.value, c < 2 && (c = 0);} else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);i = e;} else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;} catch (t) {i = e, c = 1, u = t;} finally {f = 1;}}return { value: t, done: y };};}(r, o, i), !0), u;}var a = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}t = Object.getPrototypeOf;var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {return this;}), t),u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);function f(e) {return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;}return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {return this;}), _regeneratorDefine2(u, "toString", function () {return "[object Generator]";}), (_regenerator = function _regenerator() {return { w: i, m: f };})();}function _regeneratorDefine2(e, r, n, t) {var i = Object.defineProperty;try {i({}, "", {});} catch (e) {i = 0;}_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {function o(r, n) {_regeneratorDefine2(e, r, function (e) {return this._invoke(r, n, e);});}r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));}, _regeneratorDefine2(e, r, n, t);}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]);return f;})(e, t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}

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
  }_inherits(SearchMultiple, _BaseInput);return _createClass(SearchMultiple, [{ key: "componentDidMount", value: function () {var _componentDidMount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(

        function _callee() {var _yield$Promise$all, _yield$Promise$all2, selectModule, creatableModule, _t;return _regenerator().w(function (_context) {while (1) switch (_context.p = _context.n) {case 0:
                document.addEventListener('mousedown', this.handleClickOutside);

                // Динамическая загрузка компонентов
                _context.p = 1;_context.n = 2;return (
                  Promise.all([Promise.resolve().then(function () {return _interopRequireWildcard(require(
                      'react-select'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require(
                      'react-select/creatable'));})]
                  ));case 2:_yield$Promise$all = _context.v;_yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);selectModule = _yield$Promise$all2[0];creatableModule = _yield$Promise$all2[1];

                this.setState({
                  SelectComponent: selectModule["default"],
                  CreatableSelectComponent: creatableModule["default"],
                  isLoading: false
                });_context.n = 4;break;case 3:_context.p = 3;_t = _context.v;

                console.error('Failed to load select components:', _t);
                this.setState({ isLoading: false });case 4:return _context.a(2);}}, _callee, this, [[1, 3]]);}));function componentDidMount() {return _componentDidMount.apply(this, arguments);}return componentDidMount;}() }, { key: "componentDidUpdate", value:



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