"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");
var _reactSelect = _interopRequireDefault(require("react-select"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var MultiValue = function MultiValue(props) {
  var data = props.data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.TagText, {
    children: [data.label, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        props.removeProps.onClick();
      }
    })]
  });
};
var SearchMultiple = /*#__PURE__*/function (_BaseInput) {
  function SearchMultiple(props) {
    var _this;
    _classCallCheck(this, SearchMultiple);
    _this = _callSuper(this, SearchMultiple, [props]);
    _this.state = {
      options: [],
      selectedOption: null,
      error: null,
      select: false,
      focused: false,
      hovered: false,
      hasError: false,
      search: props.search ? props.search : ''
    };
    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(SearchMultiple, _BaseInput);
  return _createClass(SearchMultiple, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
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
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
        if (typeof this.props.onOutsideClick === 'function' && this.state.focused === true) {
          this.props.onOutsideClick(this.state.search);
        }
        this.handleShowSelect(false);
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(search) {
      if (typeof this.props.onSearch === 'function') {
        this.props.onSearch(search);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      window.removeEventListener('keydown', SearchMultiple.func, true);
    }
  }, {
    key: "handleShowSelect",
    value: function handleShowSelect(bool) {
      this.setState({
        select: bool,
        hasError: false,
        focused: bool
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(newValue, actionMeta) {
      switch (actionMeta.action) {
        case 'select-option':
          if (typeof this.props.onRemoveElement === 'function') {
            this.props.onAddElement(newValue);
          }
          break;
        case 'remove-value':
          if (typeof this.props.onRemoveElement === 'function') {
            this.props.onRemoveElement(newValue);
          }
          break;
      }
    }
  }, {
    key: "handleCreate",
    value: function handleCreate(newOption) {
      if (typeof this.props.onCreate === 'function') {
        this.props.onCreate(newOption);
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent(resItems, customStyles) {
      var _this2 = this;
      var selected = this.props.selected;
      if (this.props.allowAdd) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_creatable["default"], {
          placeholder: '',
          id: this.props.id,
          components: {
            MultiValue: MultiValue,
            DropdownIndicator: function DropdownIndicator() {
              return null;
            },
            IndicatorSeparator: function IndicatorSeparator() {
              return null;
            },
            IndicatorsContainer: function IndicatorsContainer() {
              return null;
            }
          },
          onChange: this.handleChange.bind(this),
          options: resItems,
          value: selected,
          isMulti: true,
          noOptionsMessage: function noOptionsMessage() {
            return '';
          },
          allowCreateWhileLoading: false,
          styles: customStyles,
          onCreateOption: this.handleCreate.bind(this),
          formatCreateLabel: function formatCreateLabel(inputValue) {
            return 'Создать новый тег: "' + inputValue + '"';
          },
          onFocus: function onFocus() {
            _this2.setState({
              focused: true,
              hasError: false
            });
          }
        });
      } else {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelect["default"], {
          placeholder: '',
          id: this.props.id,
          components: {
            MultiValue: MultiValue,
            DropdownIndicator: function DropdownIndicator() {
              return null;
            },
            IndicatorSeparator: function IndicatorSeparator() {
              return null;
            },
            IndicatorsContainer: function IndicatorsContainer() {
              return null;
            }
          },
          onChange: this.handleChange.bind(this),
          options: resItems,
          value: selected,
          isMulti: true,
          noOptionsMessage: function noOptionsMessage() {
            return '';
          },
          styles: customStyles,
          onFocus: function onFocus() {
            _this2.setState({
              focused: true,
              hasError: false
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        items = _this$props.items,
        size = _this$props.size,
        selected = _this$props.selected;
      var resItems = items ? items.map(function (item, key) {
        return {
          value: item.id,
          label: item.name
        };
      }) : [];
      var style = {};
      if (this.props.style) {
        style = _objectSpread({}, this.props.style);
      }
      var error = this.getError();
      var focus = this.state.hasError ? '1px solid #FF0000' : '';
      style.border = focus;
      var customStyles = {
        // option: (provided, state) => ({
        //   ...provided,
        //   borderBottom: '1px dotted pink',
        //   // color: state.isSelected ? 'red' : 'blue',
        //   padding: '2px 2px 2px 4px',
        // }),
        valueContainer: function valueContainer(provided, state) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            marginTop: "12px",
            padding: '1px 8px'
          }, _this3.props.valueContainerStyle);
        },
        control: function control() {
          return _objectSpread({
            border: '1px solid #D2D1D1',
            borderRadius: '8px'
          }, _this3.props.controlStyle);
        },
        singleValue: function singleValue() {
          return {
            padding: '0px 5px 0px 8px'
          };
        }
      };
      if (this.props.containerStyle) {
        customStyles.container = function () {
          return _this3.props.containerStyle;
        };
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Container, {
        style: this.props.nativeContainerStyle,
        className: this.props.className + ' multi-select',
        size: size,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputWrapper, {
          className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : ''),
          style: _objectSpread(_objectSpread({}, style), {
            zIndex: this.state.focused ? '1000' : 'auto'
          }),
          size: size,
          ref: this.wrapperRef,
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: [this.getComponent(resItems, customStyles), this.renderPlaceholder(), error ? /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: this.props.id,
            className: this.props.className + " error",
            children: error
          }) : '']
        })
      });
    }
  }]);
}(_BaseInput2["default"]);
var _default = exports["default"] = SearchMultiple;