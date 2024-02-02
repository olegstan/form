import React from 'react';
import BaseInput from '../BaseInput';
import { InputWrapper, Item, Select as StyledSelect, Selected, SubItem } from './styles';
import { Money } from "finhelper";
import { Container } from '../styles/selectContainerStyle';
class RelationGroupSelect extends BaseInput {
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
    if (!selected) {
      return this.props.default;
    }
    items.map(item => {
      item.to_trades.map(trade => {
        if (selected.id === trade.id) {
          name = trade.active.type_text + this.getName(trade) + ' - ' + Money.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date;
        }
        return;
      });
      return;
    });
    if (!name) {
      return this.props.default;
    }
    return name;
  }
  handleShowSelect(select) {
    this.setState({
      select: select,
      hasError: false
    });
  }
  getName(trade) {
    let name = trade.active.name;
    if (name) {
      if (name?.length > 30) {
        name = ' (' + name.slice(0, 29) + '...)';
      } else if (name?.length === 0) {
        name = ' ';
      } else {
        name = ' (' + name + ')';
      }
    }
    return name;
  }
  render() {
    const {
      items,
      handle,
      selected
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #FF0000'
    } : {};
    return /*#__PURE__*/React.createElement(Container, {
      style: focus
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/React.createElement(Selected, {
      id: this.props.id,
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, /*#__PURE__*/React.createElement(Item, {
      key: 'default',
      onClick: () => {
        handle(null);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.props.default)), items.map((item, key) => {
      return /*#__PURE__*/React.createElement(Item, {
        key: key
      }, /*#__PURE__*/React.createElement("span", null, item.user_account ? item.user_account.name + ' ' + item.currency.code : ''), item.to_trades.length ? item.to_trades.map(trade => {
        return /*#__PURE__*/React.createElement(SubItem, {
          id: this.props.id + '-' + trade.id,
          key: trade.id,
          onClick: () => {
            handle(trade);
            this.handleShowSelect(false);
          }
        }, trade.active.type_text + this.getName(trade) + ' - ' + Money.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date);
      }) : /*#__PURE__*/React.createElement(SubItem, null, "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"));
    })), this.renderPlaceholder(), /*#__PURE__*/React.createElement("img", {
      className: "arrow",
      src: require('../../assets/arrow.svg').default,
      alt: ""
    }), error && /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error)));
  }
}
export default RelationGroupSelect;