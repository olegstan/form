"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.json.stringify.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");
var _newstyles2 = require("../newstyles");
var _InputPopup = _interopRequireDefault(require("../InputPopup/InputPopup"));
var _Search = _interopRequireDefault(require("./Search"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class RemoteSearch extends _BaseInput.default {
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
  handleArrows() {
    if (this.state.handleArrow === false) {
      _Search.default.func = event => {
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

      window.addEventListener("keydown", _Search.default.func, true);
      this.setState({
        handleArrow: true
      });
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
      focused: bool
    }, () => {
      if (this.state.select) {
        this.handleArrows();
      } else {
        this.stopHandleArrows();
      }
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
  stopHandleArrows() {
    window.removeEventListener('keydown', _Search.default.func, true);
    this.setState({
      handleArrow: false
    });
  }
  render() {
    const {
      items,
      handle,
      name,
      loading,
      selected
    } = this.props;
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
    let loadImage = require('../../assets/loader.svg').default;
    return /*#__PURE__*/_react.default.createElement(_newstyles.Container, {
      style: this.props.containerStyle,
      className: this.props.className + (this.props.disabled ? ' disabled' : '')
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputWrapper, {
      className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : ''),
      style: style,
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_newstyles.Input, {
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
      // onBlur={() => {
      //   //TODO проверить введенный текст соответствует ли одной из опций,
      //   //если нет, то очищать выбранный элемент
      //   this.setState({
      //     focused: false,
      //     hasError: false
      //   }, () => {
      //     this.onBlur();
      //   })
      // }}
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
    }, resItems.length ? resItems : loading || selected ? '' : /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
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
      src: loadImage,
      alt: ""
    }))))));
  }
}
var _default = exports.default = RemoteSearch;