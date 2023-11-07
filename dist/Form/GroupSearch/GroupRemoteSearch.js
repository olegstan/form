"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.json.stringify.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");
var _newstyles2 = require("../newstyles");
var _InputPopup = _interopRequireDefault(require("../InputPopup/InputPopup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class GroupRemoteSearch extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      focused: false,
      hasError: false,
      search: props.search ? props.search : ''
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      name
    } = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0) {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      });
    } else {
      this.setState({
        error: null,
        hasError: false
      });
    }
    for (const index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        if (index === 'search') {
          this.setState({
            search: nextProps[index]
          });
        }
      }
    }
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
  handleShowSelect(bool) {
    this.setState({
      select: bool,
      hasError: false,
      focused: bool
    });
  }
  onSearch(search) {
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(search);
    }
  }
  onKeyPress(e) {
    if (typeof this.props.onKeyPress === 'function') {
      this.props.onKeyPress(e);
    }
  }
  render() {
    const {
      items,
      handle,
      name,
      loading,
      size,
      selected
    } = this.props;
    const {
      focused
    } = this.state;
    let search = this.state.search ? this.state.search.toLowerCase() : '';
    let notEmptyItems = false;
    let resItems = items
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
    .map((item, key) => {
      if (item.items && item.items.length > 0) {
        notEmptyItems = true;
      }
      return /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
        key: item.name,
        className: "item",
        id: this.props.id + '-' + item.id,
        onClick: () => {
          handle(item);
          this.handleShowSelect(false);
          this.setState({
            search: item.name
          });
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, item.name));
    });
    let style = {};
    if (this.props.style) {
      style = _objectSpread({}, this.props.style);
    }
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #FF0000';
    }
    style.border = focus;
    return /*#__PURE__*/_react.default.createElement(_newstyles.Container, {
      style: this.props.containerStyle,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      size: size
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputWrapper, {
      className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : ''),
      style: style,
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_newstyles.Input, {
      selected: selected ? JSON.stringify(selected) : '',
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled
      // style={this.props.style}
      ,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.state.search,
      placeholder: this.props.placeholder,
      onClick: () => {
        this.handleShowSelect(true);
      },
      onKeyPress: e => {
        this.onKeyPress(e);
      },
      onChange: e => {
        this.setState({
          search: e.target.value,
          hasError: false
        }, () => {
          this.onSearch(this.state.search);
        });
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', /*#__PURE__*/_react.default.createElement(_newstyles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select || this.state.focused
    }, items.length && notEmptyItems ? items.map(item => {
      let name = item.name;
      let shortName = name;
      if (name.length > 38) {
        shortName = name.slice(0, 39) + '...';
      }
      return item.items.length > 0 && /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
        key: item.name,
        className: "item"
      }, /*#__PURE__*/_react.default.createElement("span", null, shortName), item.items.map(subItem => {
        return /*#__PURE__*/_react.default.createElement(_newstyles.SubItem, {
          key: subItem.name,
          className: "subitem",
          id: this.props.id + '-' + subItem.id,
          onClick: () => {
            handle(subItem);
            this.handleShowSelect(false);
            this.setState({
              search: subItem.name
            });
          }
        }, subItem.name ? subItem.name.capitalize() : '');
      }));
    }) : loading || selected ? '' : /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
      className: this.props.className
    }, /*#__PURE__*/_react.default.createElement("span", null, typeof this.state.search === 'string' && this.state.search.length > 0 ? 'Ничего не найдено' : 'Ввидете запрос'))), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
      trigger: /*#__PURE__*/_react.default.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('../../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : '', loading && /*#__PURE__*/_react.default.createElement(_newstyles2.Loader, null, /*#__PURE__*/_react.default.createElement("div", {
      onClick: () => {}
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: require('../../assets/loader.svg').default,
      alt: ""
    }))))));
  }
}
var _default = exports.default = GroupRemoteSearch;