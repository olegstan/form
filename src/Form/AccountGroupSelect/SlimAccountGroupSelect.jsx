import React from 'react';
import {Add, HeaderItem, InputWrapper, Item, Select as StyledSelect, Selected, SubItem} from './slimstyles';
import {CurrencyConstants, Money} from "finhelper";
import {Container} from '../styles/selectSlimContainerStyle';
import {AccountGroupSelect} from './AccountGroupSelect';

class SlimAccountGroupSelect extends AccountGroupSelect {
  render() {
    const { items, handle, selected, showDefault } = this.props;

    let focus = this.state.hasError ? { border: '1px solid #EF5E70' } : {};

    return (
      <Container size={this.props.size} className={this.props.className} style={this.props.style}>
        <InputWrapper
          className={'wrapper ' + (this.state.select ? 'select' : '')}
          style={focus}
          ref={this.wrapperRef}
        >
          <Selected
            id={this.props.id}
            className="selected"
            onClick={() => {
              this.handleShowSelect(true);
            }}
          >
            <span>{this.renderSelected()}</span>
          </Selected>
          <StyledSelect
            id={this.props.id + '-select'}
            className={this.props.className + ' select'}
            select={this.state.select}
          >
            {showDefault && (
              <Item
                key={'default'}
                className="item"
                onClick={() => {
                  handle(null);
                  this.handleShowSelect(false);
                }}
              >
                <span>{this.props.default}</span>
              </Item>
            )}
            {items.map((item) => {
              let name = item.name || item.bank_text || 'Счёт без названия';
              let shortName = name.length > 38 ? name.slice(0, 39) + '...' : name;

              return (
                item.accounts.length > 0 && (
                  <HeaderItem key={item.id} className="item">
                    <span>{shortName}</span>

                    {item.accounts.map((subItem) => {
                      let sign = CurrencyConstants.getCurrencySignById(subItem.currency_id);
                      let sum = (
                        <span>
                          {Money.format(subItem.sum)} {sign}
                        </span>
                      );
                      let subAccountName = subItem.name || 'Счёт без названия';

                      return (
                        <SubItem
                          key={subItem.id}
                          className="subitem"
                          id={this.props.id + '-' + subItem.id}
                          onClick={() => {
                            handle(subItem);
                            this.handleShowSelect(false);
                          }}
                        >
                          <span>
                            {subAccountName} - {sum}
                          </span>
                        </SubItem>
                      );
                    })}
                  </HeaderItem>
                )
              );
            })}
            {this.props.accountAddAvailable && (
              <Add key={'add'} className="add" onClick={() => this.handleAddAccount()}>
                <span>Добавить счёт</span>
              </Add>
            )}
          </StyledSelect>
          {this.renderPlaceholder()}
          <img
            className="arrow"
            src={this.getArrow()}
            onClick={() => {
              this.handleShowSelect(true);
            }}
          />
          {this.renderTooltipError()}
        </InputWrapper>
        {this.renderCreateComponent()}
      </Container>
    );
  }
}

export { SlimAccountGroupSelect };

export default SlimAccountGroupSelect;
