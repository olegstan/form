import React from 'react';
import { Add, HeaderItem, InputWrapper, Item, Select as StyledSelect, Selected, SubItem } from './slimstyles';
import { CurrencyConstants, Money } from "finhelper";
import { Container } from '../styles/selectSlimContainerStyle';
import { AccountGroupSelect } from './AccountGroupSelect';
class SlimAccountGroupSelect extends AccountGroupSelect {
  render() {
    const {
      items,
      handle,
      selected,
      showDefault
    } = this.props;
    let focus = this.state.hasError ? {
      border: '1px solid #EF5E70'
    } : {};
    return /*#__PURE__*/React.createElement(Container, {
      size: this.props.size,
      className: this.props.className,
      style: this.props.style
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      className: 'wrapper ' + (this.state.select ? 'select' : ''),
      style: focus,
      ref: this.wrapperRef
    }, /*#__PURE__*/React.createElement(Selected, {
      id: this.props.id,
      className: "selected",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, showDefault && /*#__PURE__*/React.createElement(Item, {
      key: 'default',
      className: "item",
      onClick: () => {
        handle(null);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.props.default)), items.map(item => {
      let name = item.name || item.bank_text || 'Счёт без названия';
      let shortName = name.length > 38 ? name.slice(0, 39) + '...' : name;
      return item.accounts.length > 0 && /*#__PURE__*/React.createElement(HeaderItem, {
        key: item.id,
        className: "item"
      }, /*#__PURE__*/React.createElement("span", null, shortName), item.accounts.map(subItem => {
        let sign = CurrencyConstants.getCurrencySignById(subItem.currency_id);
        let sum = /*#__PURE__*/React.createElement("span", null, Money.format(subItem.sum), " ", sign);
        let subAccountName = subItem.name || 'Счёт без названия';
        return /*#__PURE__*/React.createElement(SubItem, {
          key: subItem.id,
          className: "subitem",
          id: this.props.id + '-' + subItem.id,
          onClick: () => {
            handle(subItem);
            this.handleShowSelect(false);
          }
        }, /*#__PURE__*/React.createElement("span", null, subAccountName, " - ", sum));
      }));
    }), this.props.accountAddAvailable && /*#__PURE__*/React.createElement(Add, {
      key: 'add',
      className: "add",
      onClick: () => this.handleAddAccount()
    }, /*#__PURE__*/React.createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0447\u0451\u0442"))), this.renderPlaceholder(), /*#__PURE__*/React.createElement("img", {
      className: "arrow",
      src: this.getArrow(),
      onClick: () => {
        this.handleShowSelect(true);
      }
    }), this.renderTooltipError()), this.renderCreateComponent());
  }
}
export { SlimAccountGroupSelect };
export default SlimAccountGroupSelect;