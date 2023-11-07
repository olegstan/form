"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");
var _reactSelect = _interopRequireDefault(require("react-select"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const MultiValue = props => {
  const {
    data
  } = props;
  return /*#__PURE__*/_react.default.createElement(_newstyles.TagText, null, data.label, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      props.removeProps.onClick();
    }
  }));
};
class SearchMultiple extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: null,
      error: null,
      select: false,
      focused: false,
      hovered: false,
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
      if (typeof this.props.onOutsideClick === 'function' && this.state.focused === true) {
        this.props.onOutsideClick(this.state.search);
      }
      this.handleShowSelect(false);
    }
  }
  onSearch(search) {
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(search);
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('keydown', SearchMultiple.func, true);
  }
  handleShowSelect(bool) {
    this.setState({
      select: bool,
      hasError: false,
      focused: bool
    });
  }
  handleChange(newValue, actionMeta) {
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
  handleCreate(newOption) {
    if (typeof this.props.onCreate === 'function') {
      this.props.onCreate(newOption);
    }
  }
  getComponent(resItems, customStyles) {
    const {
      selected
    } = this.props;
    if (this.props.allowAdd) {
      return /*#__PURE__*/_react.default.createElement(_creatable.default, {
        placeholder: '',
        id: this.props.id,
        components: {
          MultiValue: MultiValue,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          IndicatorsContainer: () => null
        },
        onChange: this.handleChange.bind(this),
        options: resItems,
        value: selected,
        isMulti: true,
        noOptionsMessage: () => '',
        allowCreateWhileLoading: false,
        styles: customStyles,
        onCreateOption: this.handleCreate.bind(this),
        formatCreateLabel: inputValue => {
          return 'Создать новый тег: "' + inputValue + '"';
        },
        onFocus: () => {
          this.setState({
            focused: true,
            hasError: false
          });
        }
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
        placeholder: '',
        id: this.props.id,
        components: {
          MultiValue: MultiValue,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          IndicatorsContainer: () => null
        },
        onChange: this.handleChange.bind(this),
        options: resItems,
        value: selected,
        isMulti: true,
        noOptionsMessage: () => '',
        styles: customStyles,
        onFocus: () => {
          this.setState({
            focused: true,
            hasError: false
          });
        }
      });
    }
  }
  render() {
    const {
      items,
      size,
      selected
    } = this.props;
    let resItems = items ? items.map((item, key) => {
      return {
        value: item.id,
        label: item.name
      };
    }) : [];
    let style = {};
    if (this.props.style) {
      style = _objectSpread({}, this.props.style);
    }
    let error = this.getError();
    let focus = this.state.hasError ? '1px solid #FF0000' : '';
    style.border = focus;
    const customStyles = {
      // option: (provided, state) => ({
      //   ...provided,
      //   borderBottom: '1px dotted pink',
      //   // color: state.isSelected ? 'red' : 'blue',
      //   padding: '2px 2px 2px 4px',
      // }),
      valueContainer: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
        marginTop: "12px",
        padding: '1px 8px'
      }, this.props.valueContainerStyle),
      control: () => _objectSpread({
        border: '1px solid #D2D1D1',
        borderRadius: '8px'
      }, this.props.controlStyle),
      singleValue: () => ({
        padding: '0px 5px 0px 8px'
      })
    };
    if (this.props.containerStyle) {
      customStyles.container = () => this.props.containerStyle;
    }
    return /*#__PURE__*/_react.default.createElement(_newstyles.Container, {
      style: this.props.nativeContainerStyle,
      className: this.props.className,
      size: size,
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputWrapper, {
      className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : ''),
      style: _objectSpread(_objectSpread({}, style), {
        zIndex: this.state.focused ? '1000' : 'auto'
      }),
      size: size,
      ref: this.setWrapperRef,
      onClick: e => {
        e.stopPropagation();
      }
    }, this.getComponent(resItems, customStyles), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder " + (this.state.focused || selected && selected.length ? 'active' : ''),
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', error ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error) : ''));
  }
}
var _default = exports.default = SearchMultiple;