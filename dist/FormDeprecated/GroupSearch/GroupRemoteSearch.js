"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BaseSearch2 = _interopRequireDefault(require("../BaseSearch"));
var _newstyles = require("./newstyles");
var _newstyles2 = require("../newstyles");
var _loader = require("../../assets/loader.svg");
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
var GroupRemoteSearch = /*#__PURE__*/function (_BaseSearch) {
  function GroupRemoteSearch(props) {
    var _this;
    _classCallCheck(this, GroupRemoteSearch);
    _this = _callSuper(this, GroupRemoteSearch, [props]);
    _this.state = {
      error: null,
      select: false,
      focused: false,
      hasError: false,
      search: props.search ? props.search : ''
    };
    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(GroupRemoteSearch, _BaseSearch);
  return _createClass(GroupRemoteSearch, [{
    key: "handleShowSelect",
    value: function handleShowSelect(bool) {
      this.setState({
        select: bool,
        hasError: false,
        focused: bool
      });
    }
  }, {
    key: "onSearch",
    value: function onSearch(search) {
      if (typeof this.props.onSearch === 'function') {
        this.props.onSearch(search);
      }
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(e) {
      if (typeof this.props.onKeyPress === 'function') {
        this.props.onKeyPress(e);
      }
    }
  }, {
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var containerStyle = _objectSpread({}, this.props.containerStyle);
      containerStyle.border = '1px solid #D2D1D1';
      if (this.state.focused) {
        containerStyle.border = '1px solid #1874DE';
      }
      if (this.state.hasError === true) {
        containerStyle.border = '1px solid #EF5E70';
      }
      return containerStyle;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        items = _this$props.items,
        handle = _this$props.handle,
        name = _this$props.name,
        loading = _this$props.loading,
        size = _this$props.size,
        selected = _this$props.selected;
      var search = this.state.search ? this.state.search.toLowerCase() : '';
      var notEmptyItems = false;
      var resItems = items
      // .filter((item) => {
      //   if(showAll === true)
      //   {
      //     return true;
      //   }
      //
      //   if(item.name.toLowerCase().indexOf(search) === -1)
      //   {
      //     return false;
      //   }else{
      //     return true;
      //   }
      // })
      // .filter((item) => {
      //   if(selected)
      //   {
      //     if(selected.id === item.id)
      //     {
      //       return  false;
      //     }
      //   }
      //   return  true;
      // })
      .map(function (item, key) {
        if (item.items && item.items.length > 0) {
          notEmptyItems = true;
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Item, {
          className: "item",
          id: _this2.props.id + '-' + item.id,
          onClick: function onClick() {
            handle(item);
            _this2.handleShowSelect(false);
            _this2.setState({
              search: item.name
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: item.name
          })
        }, item.name);
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Container, {
        dataid: "group-remote-search",
        style: this.getContainerStyle(),
        className: this.props.className + (this.props.disabled ? ' disabled' : ''),
        size: size,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.InputWrapper, {
          className: this.getWrapperClasses(resItems),
          ref: this.wrapperRef,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainer, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Input, {
              selected: selected ? JSON.stringify(selected) : '',
              id: this.props.id,
              autoComplete: 'off',
              disabled: this.props.disabled,
              className: this.props.className,
              type: this.props.type,
              name: this.getName(name),
              value: this.state.search,
              placeholder: this.props.placeholder,
              onClick: function onClick() {
                _this2.handleShowSelect(true);
              },
              onKeyPress: function onKeyPress(e) {
                _this2.onKeyPress(e);
              },
              onChange: function onChange(e) {
                _this2.setState({
                  search: e.target.value,
                  hasError: false
                }, function () {
                  _this2.onSearch(_this2.state.search);
                });
              },
              onFocus: function onFocus() {
                _this2.setState({
                  focused: true,
                  hasError: false
                });
              }
            }), this.renderPlaceholder(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Select, {
              id: this.props.id + '-select',
              className: this.props.className + ' select',
              select: this.state.select || this.state.focused,
              children: items.length && notEmptyItems ? items.map(function (item) {
                var name = item.name;
                var shortName = name;
                if (name.length > 38) {
                  shortName = name.slice(0, 39) + '...';
                }
                return item.items.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.Item, {
                  className: "item",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    children: shortName
                  }), item.items.map(function (subItem) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.SubItem, {
                      className: "subitem",
                      id: _this2.props.id + '-' + subItem.id,
                      onClick: function onClick() {
                        handle(subItem);
                        _this2.handleShowSelect(false);
                        _this2.setState({
                          search: subItem.name
                        });
                      },
                      children: subItem.name ? subItem.name.capitalize() : ''
                    }, subItem.name);
                  })]
                }, item.name);
              }) : loading || selected ? '' : /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Item, {
                className: this.props.className,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: typeof this.state.search === 'string' && this.state.search.length > 0 ? 'Ничего не найдено' : 'Ввидете запрос'
                })
              })
            }), this.renderTooltipError(), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles2.Loader, {
              id: "loader-for-data",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                onClick: function onClick() {},
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loader.ReactComponent, {})
              })
            })]
          })
        })
      });
    }
  }]);
}(_BaseSearch2["default"]);
var _default = exports["default"] = GroupRemoteSearch;