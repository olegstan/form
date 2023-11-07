"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _newcurrencystyles = require("./newcurrencystyles");
var _Money = _interopRequireDefault(require("../../Helpers/Money"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class InputWithCurrency extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,
      select: false
    };
    if (!props.selected) {
      if (props.currencies.length > 0) {
        props.handle(props.currencies[0]);
      }
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }
  setInputRef(node) {
    if (node) {
      // node.focus();
    }
    this.inputRef = node;
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      value
    } = this.props;
    const {
      selectionStart,
      selectionEnd
    } = this.state;
    if (prevProps.value !== value && this.state.focused === true) {
      this.inputRef.selectionStart = selectionStart;
      this.inputRef.selectionEnd = selectionEnd;
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

  /**
   *
   */

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      name,
      handle,
      currencyField
    } = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0 || nextProps.errors && typeof nextProps.errors[currencyField] !== 'undefined' && nextProps.errors[currencyField].length > 0) {
      this.setState({
        hasError: true
      });
    } else {
      this.setState({
        hasError: false
      });
    }
  }
  getError() {
    const {
      name,
      currencyField
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return this.props.errors[name][0];
    }
    if (this.props.errors && typeof this.props.errors[currencyField] !== 'undefined' && this.props.errors[currencyField].length > 0) {
      return this.props.errors[currencyField][0];
    }
  }
  handleShowSelect(select) {
    this.setState({
      select: select
    });
  }
  handleChange(e) {
    let pattern = /^[0-9\.\,\ \-]+$/;
    if (e.target.value === '' || pattern.test(e.target.value)) {
      let value = e.target.value.replace(/,/g, '.').replace(/ /g, '');
      let position = e.target.selectionStart;
      if (value.length > 0) {
        let prefix = '';
        if (value[0] === '-') {
          prefix = '-';
          value = value.replace('-', '');
        }
        let parts = value.split('.');
        if (typeof parts[1] !== 'undefined') {
          if (parts[1] !== '') {
            value = _Money.default.formatForInput(value, parts[1].length);
          } else {
            value = _Money.default.formatForInput(value, 0) + '.';
          }
        } else {
          value = _Money.default.formatForInput(value, 0);
        }
        let prevParts = this.props.value.toString().split('.');
        let newParts = value.split('.');
        let prevLength = prevParts[0].length;
        let newLength = newParts[0].length;
        if (newLength > prevLength) {
          if ((newLength - 1) % 4 === 0) {
            position += 1;
          }
        }
        this.props.onChange(e, {
          name: this.props.name,
          value: prefix + value
        });
        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      } else {
        this.props.onChange(e, {
          name: this.props.name,
          value: ''
        });
        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      }
    }
  }
  renderSelected() {
    const {
      currencies,
      selected
    } = this.props;
    let code = '';
    if (!selected) {
      return;
    }
    currencies.map(item => {
      if (selected.id === item.id) {
        code = item.code;
      }
      return;
    });
    return code;
  }
  render() {
    const {
      handle,
      name
    } = this.props;
    let style = {};
    if (this.props.style) {
      style = _objectSpread({}, this.props.style);
    }
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #EF5E70';
    }
    style.border = focus;
    return /*#__PURE__*/_react.default.createElement(_newcurrencystyles.Container, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_newcurrencystyles.InputContainer, {
      className: this.getWrapperClasses() + (this.props.disabled ? ' disabled' : '')
    }, /*#__PURE__*/_react.default.createElement(_newcurrencystyles.Input, {
      ref: this.setInputRef,
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.props.style,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
      placeholder: this.props.placeholder,
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onPaste: e => {
        console.error(e);
      },
      onChange: e => {
        this.handleChange(e);
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: () => {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          this.onBlur();
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder"
    }, this.props.placeholder) : '', error ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error) : ''), /*#__PURE__*/_react.default.createElement(_newcurrencystyles.InputWrapper, {
      className: this.getWrapperClasses(),
      ref: this.setWrapperRef,
      onClick: () => {
        this.handleShowSelect(!this.state.select);
      }
    }, /*#__PURE__*/_react.default.createElement(_newcurrencystyles.Selected, {
      id: 'selected-currency',
      className: this.getWrapperClasses(),
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), /*#__PURE__*/_react.default.createElement(_newcurrencystyles.Select, {
      id: 'select-currency',
      className: this.props.className + ' select',
      select: this.state.select
    }, this.props.currencies.map((item, key) => /*#__PURE__*/_react.default.createElement(_newcurrencystyles.Item, {
      key: item.id,
      onClick: () => {
        handle(item);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      id: 'currency-' + item.id
    }, item.code, " - ", item.name))))));
  }
}
_defineProperty(InputWithCurrency, "defaultProps", {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  style: {}
});
const enhance = (0, _reactRedux.connect)(state => ({
  currencies: state.interfaceComponents.currencies
}), {});
var _default = exports.default = enhance(InputWithCurrency);