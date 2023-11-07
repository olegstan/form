"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");
var _InputPopup = _interopRequireDefault(require("../InputPopup/InputPopup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Search extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      focused: false,
      hovered: false,
      hasError: false,
      handleArrow: false,
      search: props.search ? props.search : '',
      selected: null
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
      if (typeof this.props.onOutsideClick === 'function' && this.state.focused === true) {
        this.props.onOutsideClick(this.state.search, this.state.selected);
      }
      this.handleShowSelect(false);
      this.stopHandleArrows();
    }
  }
  onSearch(search) {
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(this.state.search, this.state.selected);
    }
  }
  handleArrows() {
    if (this.state.handleArrow === false) {
      Search.func = event => {
        const {
          items,
          selected,
          search,
          handle
        } = this.props;
        let resItems = items ? items.filter(item => {
          if (search && search.length) {
            let parts = search.split(' ');
            let partsLength = parts.length;
            let partsFound = 0;
            for (let i = 0; i < partsLength; i++) {
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
        }).filter(item => {
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
            if (this.state.hovered === false) {
              this.setState({
                hovered: 0
              });
            } else {
              let length = resItems.length;
              let next = this.state.hovered + 1;
              if (next <= length - 1) {
                this.setState({
                  hovered: next
                });
              }
            }

            // Do something for "down arrow" key press.
            break;
          case "Up": // IE/Edge specific value
          case "ArrowUp":
            let prev = this.state.hovered + -1;
            if (prev >= 0) {
              this.setState({
                hovered: prev
              });
            }
            break;
          case "Enter":
            if (this.state.hovered !== false) {
              let item = resItems[this.state.hovered];
              handle(item);
              this.handleShowSelect(false);
              this.stopHandleArrows();
              this.setState({
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

      window.addEventListener("keydown", Search.func, true);
      this.setState({
        handleArrow: true
      });
    }
  }
  stopHandleArrows() {
    window.removeEventListener('keydown', Search.func, true);
    this.setState({
      handleArrow: false
    });
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('keydown', Search.func, true);
  }
  handleShowSelect(bool) {
    this.setState({
      select: bool,
      focused: bool
    }, () => {
      if (this.state.select) {
        this.handleArrows();
      } else {
        this.stopHandleArrows();
      }
    });
  }
  render() {
    const {
      items,
      handle,
      selected,
      name,
      selectStyle,
      clearImageStyle
    } = this.props;
    const {
      focused
    } = this.state;
    let search = this.state.search ? this.state.search.toLowerCase() : '';
    let resItems = items ? items.filter(item => {
      if (search && search.length) {
        let parts = search.split(' ');
        let partsLength = parts.length;
        let partsFound = 0;
        for (let i = 0; i < partsLength; i++) {
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
    .map((item, key) => {
      return /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
        key: item.id + (item.type_id ? item.type_id : ''),
        className: this.props.className + ' item ' + (this.state.hovered === key ? 'hovered' : ''),
        id: this.props.id + '-' + item.id,
        onClick: e => {
          e.stopPropagation();
          handle(item);
          this.handleShowSelect(false);
          this.stopHandleArrows();
          this.setState({
            search: item.name,
            selected: item
          });
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, item.name));
    }) : [];
    let wrapperStyle = _objectSpread({}, this.props.wrapperStyle);
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #FF0000';
    }
    wrapperStyle.border = focus;
    let empty = true;
    if (typeof this.state.search === 'number' && this.state.search.toString().length > 0 || typeof this.state.search === 'string' && this.state.search.length > 0) {
      empty = false;
    }
    let inputStyle = _objectSpread({}, this.props.inputStyle);
    let containerStyle = _objectSpread({}, this.props.containerStyle);
    if (this.props.className === 'style2') {
      inputStyle.color = '#fff';
    }

    //исправления бага автозаполнения
    //если name содержит слова такие как country, street
    //то будет предлагаться подсказка, которая не нужна
    //решение: делаем намеренно ошибку в слове чтобы убрать подсказку
    return /*#__PURE__*/_react.default.createElement(_newstyles.Container, {
      style: containerStyle,
      className: this.props.className
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputWrapper, {
      className: this.props.className + ' wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : ''),
      style: wrapperStyle,
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_newstyles.Input, {
      selected: selected ? 1 : 2,
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: inputStyle,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.state.search,
      placeholder: this.props.placeholder,
      onClick: e => {
        e.stopPropagation();
        if (typeof this.props.onClick === 'function') {
          this.props.onClick(this);
        }
      },
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onChange: e => {
        let value = e.target.value;
        if (value.length > 0) {
          this.setState({
            search: value,
            hasError: false
          }, () => {
            this.onSearch();
          });
        } else {
          this.setState({
            search: value,
            hasError: false
          }, () => {
            this.onSearch();
          });
          handle(null);
        }
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: e => {}
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', /*#__PURE__*/_react.default.createElement(_newstyles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select || this.state.focused,
      style: selectStyle,
      onClick: e => {
        e.stopPropagation();
      }
    }, resItems.length ? resItems : selected ? '' : /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
      className: this.props.className
    }, /*#__PURE__*/_react.default.createElement("span", null, typeof this.state.search === 'string' && this.state.search.length > 0 ? 'Ничего не найдено' : 'Ввидете запрос'))), !empty && this.props.showClearIcon && !this.props.disabled && /*#__PURE__*/_react.default.createElement("img", {
      style: clearImageStyle,
      className: "close",
      src: require('./../../assets/ic_close_only.svg').default,
      onClick: e => {
        this.setState({
          search: '',
          hasError: false
        }, () => {
          this.onSearch();
        });
        handle(null);
      },
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
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
    }, error)) : '')));
  }
}
_defineProperty(Search, "defaultProps", {
  showClearIcon: true,
  selectStyle: {}
});
var _default = exports.default = Search;