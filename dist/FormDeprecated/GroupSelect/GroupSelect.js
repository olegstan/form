"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _styles = require("./styles");
var _selectContainerStyle = require("../styles/selectContainerStyle");
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
var GroupSelect = /*#__PURE__*/function (_BaseInput) {
  function GroupSelect(props) {
    var _this;
    _classCallCheck(this, GroupSelect);
    _this = _callSuper(this, GroupSelect, [props]);
    _this.state = {
      error: null,
      select: false,
      hasError: false
    };
    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(GroupSelect, _BaseInput);
  return _createClass(GroupSelect, [{
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
        this.handleShowSelect(false);
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
    }
  }, {
    key: "renderSelected",
    value: function renderSelected() {
      var _this$props = this.props,
        items = _this$props.items,
        selected = _this$props.selected;
      var name = null;
      var shortName = null;
      if (!selected) {
        return this.props["default"];
      }
      items.map(function (item) {
        item.items.map(function (subItem) {
          if (selected.id === subItem.id) {
            name = item.name + ' (' + (subItem ? subItem.name.toLowerCase() : '') + ')';
            shortName = name;
            if (name.length > 51) {
              shortName = name.slice(0, 52) + '...';
            }
          }
          return;
        });
        return;
      });
      if (!name) {
        return this.props["default"];
      }
      return shortName;
    }
  }, {
    key: "handleShowSelect",
    value: function handleShowSelect(select) {
      if (!this.props.disabled) {
        this.setState({
          select: select,
          hasError: false
        });
      }
    }
  }, {
    key: "getArrow",
    value: function getArrow() {
      if (this.props.className === 'style1') {}
      return require('../../assets/arrow.svg')["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        items = _this$props2.items,
        handle = _this$props2.handle,
        selected = _this$props2.selected;
      var style = {};
      if (this.props.style) {
        style = _objectSpread({}, this.props.style);
      }
      var error = this.getError();
      var focus = this.state.hasError ? {
        'border': '1px solid #FF0000'
      } : {};
      style.border = focus;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectContainerStyle.Container, {
        size: this.props.size,
        style: style,
        className: this.props.className,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.InputWrapper, {
          size: this.props.size,
          ref: this.wrapperRef,
          className: 'wrapper ' + (this.state.select ? 'select' : ''),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Selected, {
            id: this.props.id,
            className: "selected",
            onClick: function onClick() {
              _this2.handleShowSelect(true);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: this.renderSelected()
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Select, {
            id: this.props.id + '-select',
            className: this.props.className + ' select',
            select: this.state.select,
            children: items.map(function (item, key) {
              var name = item.name;
              var shortName = name;
              if (name.length > 38) {
                shortName = name.slice(0, 39) + '...';
              }
              return item.items.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.Item, {
                className: "item",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: shortName
                }), item.items.map(function (subItem, subKey) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.SubItem, {
                    className: "subitem",
                    id: _this2.props.id + '-' + subItem.id,
                    onClick: function onClick() {
                      handle(subItem);
                      _this2.handleShowSelect(false);
                    },
                    children: subItem.name
                  }, subItem.id);
                })]
              }, item.id);
            })
          }), this.renderPlaceholder(), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "arrow",
            src: this.getArrow(),
            alt: ""
          }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: this.props.id,
            className: this.props.className + " error",
            onClick: function onClick() {
              _this2.handleShowSelect(true);
            },
            children: error
          })]
        })
      });
    }
  }]);
}(_BaseInput2["default"]);
var _default = exports["default"] = GroupSelect;