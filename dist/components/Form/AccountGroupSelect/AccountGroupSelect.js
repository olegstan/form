"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AccountGroupSelect = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _reactRedux = require("react-redux");
var _styles = require("./styles");
var _Money = _interopRequireDefault(require("../../Helpers/Money"));
var _InputPopup = _interopRequireDefault(require("../InputPopup/InputPopup"));
var _selectContainerStyle = require("../styles/selectContainerStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class AccountGroupSelect extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      hasError: false,
      moduleAccountCreate: null,
      moduleAccountEdit: null,
      showAccountCreate: false,
      showAccountEdit: false
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
    this.props.loadModuleAccountCreate(module => {
      this.setState({
        moduleAccountCreate: module.default
      }, () => {
        this.props.loadModuleAccountEdit(module => {
          this.setState({
            moduleAccountEdit: module.default
          });
        });
      });
    });
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  renderSelected() {
    const {
      items,
      selected,
      getText
    } = this.props;
    let name = null;
    if (!selected) {
      return this.props.default;
    }
    items.map(item => {
      item.accounts.map(account => {
        if (selected.id === account.id) {
          name = getText(account);
        }
        return;
      });
      return;
    });
    if (!name) {
      return this.props.default;
    }
    if (name.length > this.props.textLength) {
      return name.slice(0, this.props.textLength - 1) + '...';
    }
    return name;
  }
  handleShowSelect(select) {
    if (!this.props.disabled) {
      this.setState({
        select: select
      });
    }
  }
  getArrow() {
    if (this.props.className === 'style1') {}
    return require('../../assets/arrow.svg').default;
  }
  handleAddAccount() {
    this.setState({
      showAccountCreate: true
    }, () => {
      this.props.handleAddAccount();
    });
  }
  render() {
    const {
      items,
      handle,
      selected,
      showDefault
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #EF5E70'
    } : {};
    const {
      moduleAccountCreate: ComponentCreate,
      moduleAccountEdit: ComponentEdit
    } = this.state;

    //TODO сделать добавление субсчета
    return /*#__PURE__*/_react.default.createElement(_selectContainerStyle.Container, {
      size: this.props.size,
      className: this.props.className,
      style: this.props.style
    }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      className: 'wrapper ' + (this.state.select ? 'select' : ''),
      style: focus,
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_styles.Selected, {
      id: this.props.id,
      className: "selected",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), /*#__PURE__*/_react.default.createElement(_styles.Select, {
      style: {
        width: this.props.width ? this.props.width : '100%'
      },
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, showDefault && /*#__PURE__*/_react.default.createElement(_styles.Item, {
      key: 'default',
      className: "item",
      onClick: () => {
        handle(null);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.props.default)), items.map(item => {
      let name = item.name ? item.name : item.bank_text ? item.bank_text : 'Счёт без названия';
      let shortName = name;
      if (name.length > 38) {
        shortName = name.slice(0, 39) + '...';
      }
      return item.accounts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
        key: item.id,
        className: "item"
      }, /*#__PURE__*/_react.default.createElement("span", null, shortName), item.accounts.map(subItem => {
        let subAccountName = (subItem.name ? subItem.name : 'Счёт без названия') + ' ' + _Money.default.format(subItem.sum) + ' ' + subItem.currency.sign;
        return /*#__PURE__*/_react.default.createElement(_styles.SubItem, {
          key: subItem.id,
          className: "subitem",
          id: this.props.id + '-' + subItem.id,
          onClick: () => {
            handle(subItem);
            this.handleShowSelect(false);
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, subAccountName));
      }));
    }), this.props.accountAddAvailable && /*#__PURE__*/_react.default.createElement(_styles.Add, {
      key: 'add',
      className: "add",
      onClick: () => {
        this.handleAddAccount();
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0447\u0451\u0442"))), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', /*#__PURE__*/_react.default.createElement("img", {
      className: "arrow",
      src: this.getArrow(),
      onClick: () => {
        this.handleShowSelect(true);
      }
    }), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
      trigger: /*#__PURE__*/_react.default.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('../../assets/error.svg').default,
        alt: "",
        onClick: () => {
          this.handleShowSelect(true);
        }
      })
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : ''), ComponentCreate && this.state.showAccountCreate && /*#__PURE__*/_react.default.createElement(ComponentCreate, {
      availableTypes: this.props.types,
      show: true,
      callback: () => {
        this.props.getUserAccounts();
      },
      onClose: () => {
        this.setState({
          showAccountCreate: false
        }, () => {
          if (typeof this.props.onCloseCreateCallback === 'function') {
            this.props.onCloseCreateCallback();
          }
        });
      }
    }));
  }
}
exports.AccountGroupSelect = AccountGroupSelect;
_defineProperty(AccountGroupSelect, "defaultProps", {
  width: '500px'
});
const enhance = (0, _reactRedux.connect)(state => ({
  client: state.interfaceComponents.client,
  currencies: state.interfaceComponents.currencies,
  courses: state.interfaceComponents.courses
}), {});
var _default = exports.default = enhance(AccountGroupSelect);