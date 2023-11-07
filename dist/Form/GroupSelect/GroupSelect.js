"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _styles = require("./styles");
var _selectContainerStyle = require("../styles/selectContainerStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class GroupSelect extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      hasError: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  renderSelected() {
    const {
      items,
      selected
    } = this.props;
    let name = null;
    let shortName = null;
    if (!selected) {
      return this.props.default;
    }
    items.map(item => {
      item.items.map(subItem => {
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
      return this.props.default;
    }
    return shortName;
  }
  handleShowSelect(select) {
    if (!this.props.disabled) {
      this.setState({
        select: select,
        hasError: false
      });
    }
  }
  getArrow() {
    if (this.props.className === 'style1') {}
    return require('../../assets/arrow.svg').default;
  }
  render() {
    const {
      items,
      handle,
      selected
    } = this.props;
    let style = {};
    if (this.props.style) {
      style = _objectSpread({}, this.props.style);
    }
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #FF0000'
    } : {};
    style.border = focus;
    return /*#__PURE__*/_react.default.createElement(_selectContainerStyle.Container, {
      size: this.props.size,
      style: style,
      className: this.props.className
    }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      size: this.props.size,
      ref: this.setWrapperRef,
      className: 'wrapper ' + (this.state.select ? 'select' : '')
    }, /*#__PURE__*/_react.default.createElement(_styles.Selected, {
      id: this.props.id,
      className: "selected",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), /*#__PURE__*/_react.default.createElement(_styles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, items.map((item, key) => {
      let name = item.name;
      let shortName = name;
      if (name.length > 38) {
        shortName = name.slice(0, 39) + '...';
      }
      return item.items.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.Item, {
        key: item.id,
        className: "item"
      }, /*#__PURE__*/_react.default.createElement("span", null, shortName), item.items.map((subItem, subKey) => {
        return /*#__PURE__*/_react.default.createElement(_styles.SubItem, {
          key: subItem.id,
          className: "subitem",
          id: this.props.id + '-' + subItem.id,
          onClick: () => {
            handle(subItem);
            this.handleShowSelect(false);
          }
        }, subItem.name);
      }));
    })), selected && this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder ? this.props.placeholder + ':' : '') : '', /*#__PURE__*/_react.default.createElement("img", {
      className: "arrow",
      src: this.getArrow(),
      alt: ""
    }), error && /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error)));
  }
}
var _default = exports.default = GroupSelect;