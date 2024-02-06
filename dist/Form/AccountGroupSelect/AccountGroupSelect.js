import React from 'react';
import BaseInput from '../BaseInput';
import { connect } from "react-redux";
import { Add, HeaderItem, InputWrapper, Item, Select as StyledSelect, Selected, SubItem } from './styles';
import { CurrencyConstants, Money } from "finhelper";
import { Container } from '../styles/selectContainerStyle';
class AccountGroupSelect extends BaseInput {
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
  static defaultProps = {
    width: '500px'
  };
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }
  componentDidMount() {
    this.props.loadModuleCreate(module => {
      this.setState({
        moduleAccountCreate: module.default
      }, () => {
        this.props.loadModuleEdit(module => {
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
  renderCreateComponent() {
    const {
      moduleAccountCreate: ComponentCreate,
      moduleAccountEdit: ComponentEdit
    } = this.state;
    if (this.state.showAccountCreate) {
      return ComponentCreate && /*#__PURE__*/React.createElement(ComponentCreate, {
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
      });
    }
  }
  render() {
    const {
      items,
      handle,
      showDefault
    } = this.props;
    let focus = this.state.hasError ? {
      'border': '1px solid #EF5E70'
    } : {};

    //TODO сделать добавление субсчета
    return /*#__PURE__*/React.createElement(Container, {
      size: this.props.size,
      className: this.props.className,
      style: this.props.style
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      className: 'wrapper ' + (this.state.select ? 'select' : ''),
      style: focus,
      ref: this.setWrapperRef
    }, /*#__PURE__*/React.createElement(Selected, {
      id: this.props.id,
      className: "selected",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      style: {
        width: this.props.width ? this.props.width : '100%'
      },
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
      let name = item.name ? item.name : item.bank_text ? item.bank_text : 'Счёт без названия';
      let shortName = name;
      if (name.length > 38) {
        shortName = name.slice(0, 39) + '...';
      }
      return item.accounts.length > 0 && /*#__PURE__*/React.createElement(HeaderItem, {
        key: item.id,
        className: "item"
      }, /*#__PURE__*/React.createElement("span", null, shortName), item.accounts.map(subItem => {
        let sign = CurrencyConstants.getCurrencySignById(subItem.currency_id);
        let sum = /*#__PURE__*/React.createElement("span", null, Money.format(subItem.sum), " ", sign);
        let subAccountName = subItem.name ? subItem.name : 'Счёт без названия';
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
      onClick: () => {
        this.handleAddAccount();
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0447\u0451\u0442"))), this.renderPlaceholder(), /*#__PURE__*/React.createElement("img", {
      className: "arrow",
      src: this.getArrow(),
      onClick: () => {
        this.handleShowSelect(true);
      }
    }), this.renderTooltipError()), this.renderCreateComponent());
  }
}
const enhance = connect(state => ({
  client: state.interfaceComponents.client,
  currencies: state.interfaceComponents.currencies,
  courses: state.interfaceComponents.courses
}), {});
export { AccountGroupSelect };
export default enhance(AccountGroupSelect);