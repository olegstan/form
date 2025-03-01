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
var _Search = _interopRequireDefault(require("./Search"));
var _loader = require("../../assets/loader.svg");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var RemoteSearch = /*#__PURE__*/function (_BaseSearch) {
  function RemoteSearch(props) {
    var _this;
    _classCallCheck(this, RemoteSearch);
    _this = _callSuper(this, RemoteSearch, [props]);
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
  _inherits(RemoteSearch, _BaseSearch);
  return _createClass(RemoteSearch, [{
    key: "handleArrows",
    value: function handleArrows() {
      var _this2 = this;
      if (this.state.handleArrow === false) {
        _Search["default"].func = function (event) {
          var _this2$props = _this2.props,
            items = _this2$props.items,
            selected = _this2$props.selected,
            search = _this2$props.search,
            handle = _this2$props.handle;
          var resItems = items ? items.filter(function (item) {
            if (search && search.length) {
              var parts = search.split(' ');
              var partsLength = parts.length;
              var partsFound = 0;
              for (var i = 0; i < partsLength; i++) {
                var _item$name;
                if (parts[i].replace('ё', 'е').replace('й', 'и').length > 0 && (item === null || item === void 0 || (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().replace('ё', 'е').replace('й', 'и').indexOf(parts[i].replace('ё', 'е').replace('й', 'и'))) !== -1) {
                  partsFound++;
                }
              }
              if (partsFound > 0) {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          }).filter(function (item) {
            if (selected) {
              if (selected.id === item.id) {
                return false;
              }
            }
            return true;
          }) : [];

          // if (eventPrevented)
          // {
          //   return; // Do nothing if the event was already processed
          // }

          switch (event.key) {
            case "Down": // IE/Edge specific value
            case "ArrowDown":
              if (_this2.state.hovered === false) {
                _this2.setState({
                  hovered: 0
                });
              } else {
                var length = resItems.length;
                var next = _this2.state.hovered + 1;
                if (next <= length - 1) {
                  _this2.setState({
                    hovered: next
                  });
                }
              }

              // Do something for "down arrow" key press.
              break;
            case "Up": // IE/Edge specific value
            case "ArrowUp":
              var prev = _this2.state.hovered + -1;
              if (prev >= 0) {
                _this2.setState({
                  hovered: prev
                });
              }
              break;
            case "Enter":
              if (_this2.state.hovered !== false) {
                var item = resItems[_this2.state.hovered];
                handle(item);
                _this2.handleShowSelect(false);
                _this2.stopHandleArrows();
                _this2.setState({
                  search: item.name,
                  selected: item
                });
              }
              event.preventDefault();
              break;
            default:
              return;
            // Quit when this doesn't handle the key event.
          }
        };
        window.addEventListener("keydown", _Search["default"].func, true);
        this.setState({
          handleArrow: true
        });
      }
    }
  }, {
    key: "handleShowSelect",
    value: function handleShowSelect(bool) {
      var _this3 = this;
      this.setState({
        select: bool,
        focused: bool
      }, function () {
        if (_this3.state.select) {
          _this3.handleArrows();
        } else {
          _this3.stopHandleArrows();
        }
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
    key: "stopHandleArrows",
    value: function stopHandleArrows() {
      window.removeEventListener('keydown', _Search["default"].func, true);
      this.setState({
        handleArrow: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        items = _this$props.items,
        handle = _this$props.handle,
        name = _this$props.name,
        loading = _this$props.loading,
        selected = _this$props.selected;
      var search = this.state.search ? this.state.search.toLowerCase() : '';
      var resItems = items ? items.filter(function (item) {
        if (search && search.length) {
          var parts = search.split(' ');
          var partsLength = parts.length;
          var partsFound = 0;
          for (var i = 0; i < partsLength; i++) {
            var _item$name2;
            if (parts[i].replace('ё', 'е').replace('й', 'и').length > 0 && (item === null || item === void 0 || (_item$name2 = item.name) === null || _item$name2 === void 0 ? void 0 : _item$name2.toLowerCase().replace('ё', 'е').replace('й', 'и').indexOf(parts[i].replace('ё', 'е').replace('й', 'и'))) !== -1) {
              partsFound++;
            }
          }
          if (partsFound > 0) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      })
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
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Item, {
          className: _this4.props.className + ' item ' + (_this4.state.hovered === key ? 'hovered' : ''),
          id: _this4.props.id + '-' + item.id,
          onClick: function onClick(e) {
            e.stopPropagation();
            handle(item);
            _this4.handleShowSelect(false);
            _this4.stopHandleArrows();
            _this4.setState({
              search: item.name,
              selected: item
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: item.name
          })
        }, item.id + (item.type_id ? item.type_id : ''));
      }) : [];
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Container, {
        dataid: "remote-search",
        style: this.getContainerStyle(),
        className: this.props.className + (this.props.disabled ? ' disabled' : ''),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.InputWrapper, {
          className: this.getWrapperClasses(resItems),
          ref: this.wrapperRef,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainer, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Input, {
              selected: selected ? JSON.stringify(selected) : '',
              id: this.props.id,
              autoComplete: 'off',
              disabled: this.props.disabled,
              style: this.props.style,
              className: this.props.className,
              type: this.props.type,
              name: this.getName(name),
              value: this.state.search,
              placeholder: this.props.placeholder,
              onClick: function onClick() {
                _this4.handleShowSelect(true);
              },
              onKeyPress: function onKeyPress(e) {
                _this4.onKeyPress(e);
              },
              onChange: function onChange(e) {
                _this4.setState({
                  search: e.target.value,
                  hasError: false
                }, function () {
                  _this4.onSearch(_this4.state.search);
                });
              },
              onFocus: function onFocus() {
                _this4.setState({
                  focused: true,
                  hasError: false
                });
              }
            }), this.renderPlaceholder(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Select, {
              id: this.props.id + '-select',
              className: this.props.className + ' select',
              select: this.state.select || this.state.focused,
              children: resItems.length ? resItems : loading || selected ? '' : /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Item, {
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
var _default = exports["default"] = RemoteSearch;