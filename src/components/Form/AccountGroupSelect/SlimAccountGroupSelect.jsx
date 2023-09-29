import React from 'react';
import {Add, HeaderItem, InputWrapper, Item, Select as StyledSelect, Selected, SubItem} from './slimstyles'
import Money from "../../Helpers/Money";
import {connect} from "react-redux";
import InputPopup from "../InputPopup/InputPopup";
import {Container} from '../styles/selectSlimContainerStyle'
import {AccountGroupSelect} from './AccountGroupSelect'

class SlimAccountGroupSelect extends AccountGroupSelect
{
  render()
  {
    const { items, handle, selected, showDefault } = this.props;

    let error = this.getError();
    let focus = (this.state.hasError ? {'border': '1px solid #EF5E70'} : {})
    const { module: Component } = this.state;

    return <Container size={this.props.size} className={this.props.className} style={this.props.style}>
      <InputWrapper className={'wrapper ' + (this.state.select ? 'select' : '')} style={focus} ref={this.setWrapperRef}>
        <Selected id={this.props.id} className='selected' onClick={() => {
          this.handleShowSelect(true);
        }}><span>{this.renderSelected()}</span></Selected>
        <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select}>
          {showDefault && <Item key={'default'} className='item' onClick={() => {handle(null); this.handleShowSelect(false)}}>
            <span>{this.props.default}</span>
          </Item>}
          {items.map((item, key) => {
            let name = (item.name ? item.name : (item.bank_text ? item.bank_text : 'Счёт без названия'));
            let shortName = name;
            if (name.length > 38)
            {
              shortName = name.slice(0, 39) + '...';
            }

            return item.accounts.length > 0 && <HeaderItem key={item.id} className='item'>
              <span>{shortName}</span>

              {item.accounts.map((subItem, subKey) => {
                let subAccountName = (subItem.name ? subItem.name : 'Счёт без названия') + ' ' + Money.format(subItem.sum) + ' ' + subItem.currency.sign;

                return <SubItem key={subItem.id} className='subitem' id={this.props.id + '-' + subItem.id} onClick={() => {
                  handle(subItem);
                  this.handleShowSelect(false)
                }}>
                  <span>{subAccountName}</span>
                </SubItem>
              })}
            </HeaderItem>
          })}
          {this.props.accountAddAvailable && <Add key={'add'} className='add' onClick={() => {this.handleAddAccount()}}>
            <span>Добавить счёт</span>
          </Add>}
        </StyledSelect>
        {this.props.placeholder ? <label htmlFor={this.props.id} className="placeholder" onClick={() => {this.handleShowSelect(true);}}>{this.props.placeholder}</label> : ''}
        <img className='arrow' src={this.getArrow()} onClick={() => {
          this.handleShowSelect(true);
        }}/>
        {this.state.hasError ? <InputPopup
          trigger={<img id={'tooltip-' + this.props.id} className='' src={require('../../assets/error.svg').default} alt='' onClick={() => {
            this.handleShowSelect(true);
          }}/>}>
        </InputPopup> : ''}
      </InputWrapper>
      {Component && this.state.showAccountAdd && <Component
        availableTypes={this.props.types}
        show={true}
        callback={() => {
          this.props.getUserAccounts();
        }}
        onClose={() => {
          this.setState({
            showAccountAdd: false
          }, () => {
            if(typeof this.props.onCloseCreateCallback === 'function')
            {
              this.props.onCloseCreateCallback();
            }
          });
        }}
      />}
    </Container>
  }
}


const enhance = connect(
  (state) => ({
    client: state.interfaceComponents.client,
    currencies: state.interfaceComponents.currencies,
    courses: state.interfaceComponents.courses,
  }),
  {}
)

export {SlimAccountGroupSelect}

export default enhance(SlimAccountGroupSelect);
