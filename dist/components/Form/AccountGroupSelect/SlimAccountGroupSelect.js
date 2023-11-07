"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SlimAccountGroupSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _slimstyles = require("./slimstyles");
var _Money = _interopRequireDefault(require("../../Helpers/Money"));
var _reactRedux = require("react-redux");
var _InputPopup = _interopRequireDefault(require("../InputPopup/InputPopup"));
var _selectSlimContainerStyle = require("../styles/selectSlimContainerStyle");
var _AccountGroupSelect = require("./AccountGroupSelect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SlimAccountGroupSelect extends _AccountGroupSelect.AccountGroupSelect {
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
      module: Component
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_selectSlimContainerStyle.Container, {
      size: this.props.size,
      className: this.props.className,
      style: this.props.style
    }, /*#__PURE__*/_react.default.createElement(_slimstyles.InputWrapper, {
      className: 'wrapper ' + (this.state.select ? 'select' : ''),
      style: focus,
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_slimstyles.Selected, {
      id: this.props.id,
      className: "selected",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), /*#__PURE__*/_react.default.createElement(_slimstyles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, showDefault && /*#__PURE__*/_react.default.createElement(_slimstyles.Item, {
      key: 'default',
      className: "item",
      onClick: () => {
        handle(null);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.props.default)), items.map((item, key) => {
      let name = item.name ? item.name : item.bank_text ? item.bank_text : 'Счёт без названия';
      let shortName = name;
      if (name.length > 38) {
        shortName = name.slice(0, 39) + '...';
      }
      return item.accounts.length > 0 && /*#__PURE__*/_react.default.createElement(_slimstyles.HeaderItem, {
        key: item.id,
        className: "item"
      }, /*#__PURE__*/_react.default.createElement("span", null, shortName), item.accounts.map((subItem, subKey) => {
        let subAccountName = (subItem.name ? subItem.name : 'Счёт без названия') + ' ' + _Money.default.format(subItem.sum) + ' ' + subItem.currency.sign;
        return /*#__PURE__*/_react.default.createElement(_slimstyles.SubItem, {
          key: subItem.id,
          className: "subitem",
          id: this.props.id + '-' + subItem.id,
          onClick: () => {
            handle(subItem);
            this.handleShowSelect(false);
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, subAccountName));
      }));
    }), this.props.accountAddAvailable && /*#__PURE__*/_react.default.createElement(_slimstyles.Add, {
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
    }) : ''), Component && this.state.showAccountAdd && /*#__PURE__*/_react.default.createElement(Component, {
      availableTypes: this.props.types,
      show: true,
      callback: () => {
        this.props.getUserAccounts();
      },
      onClose: () => {
        this.setState({
          showAccountAdd: false
        }, () => {
          if (typeof this.props.onCloseCreateCallback === 'function') {
            this.props.onCloseCreateCallback();
          }
        });
      }
    }));
  }
}
exports.SlimAccountGroupSelect = SlimAccountGroupSelect;
const enhance = (0, _reactRedux.connect)(state => ({
  client: state.interfaceComponents.client,
  currencies: state.interfaceComponents.currencies,
  courses: state.interfaceComponents.courses
}), {});
var _default = exports.default = enhance(SlimAccountGroupSelect);