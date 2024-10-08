import React, {createRef} from 'react';
import BaseInput from '../BaseInput';
import {Add, HeaderItem, InputWrapper, Item, Select as StyledSelect, Selected, SubItem} from './styles'
import {CurrencyConstants, Money} from "finhelper";
import {Container} from '../styles/selectContainerStyle'

class AccountGroupSelect extends BaseInput
{
  constructor(props)
  {
    super(props);

    this.state = {
      error: null,
      select: false,
      hasError: false,
      moduleAccountCreate: null,
      moduleAccountEdit: null,

      showAccountCreate: false,
      showAccountEdit: false
    }

    this.wrapperRef = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static defaultProps = {
    width: '500px'
  };

  handleClickOutside(e)
  {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }

  componentDidMount()
  {
    this.props.loadModuleCreate((module) => {
      this.setState({ 
        moduleAccountCreate: module.default
      }, () => {
        this.props.loadModuleEdit((module) => {
          this.setState({ moduleAccountEdit: module.default })
        })
      })
    })

    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  renderSelected()
  {
    const { items, selected, getText } = this.props;

    let name = null;

    if(!selected)
    {
      return this.props.default;
    }

    items.map((item) => {
      item.accounts.map((account) => {
        if(selected.id === account.id)
        {
          name = getText(account);
        }

        return;
      })

      return;
    });

    if(!name)
    {
      return this.props.default;
    }

    if (name.length > this.props.textLength)
    {
      return name.slice(0, this.props.textLength - 1) + '...';
    }

    return name;
  };

  handleShowSelect(select)
  {
    if(!this.props.disabled)
    {
      this.setState({
        select: select,
      });
    }
  }

  getArrow()
  {
    if(this.props.className === 'style1')
    {

    }
    return require('../../assets/arrow.svg').default;
  }

  handleAddAccount()
  {
    this.setState({
      showAccountCreate: true
    }, () => {
      this.props.handleAddAccount()
    });
  }

  renderCreateComponent()
  {
    const { moduleAccountCreate: ComponentCreate, moduleAccountEdit: ComponentEdit } = this.state;

    if(this.state.showAccountCreate)
    {
      return ComponentCreate && <ComponentCreate
        availableTypes={this.props.types}
        show={true}
        callback={() => {
          this.props.getUserAccounts();
        }}
        onClose={() => {
          this.setState({
            showAccountCreate: false
          }, () => {
            if(typeof this.props.onCloseCreateCallback === 'function')
            {
              this.props.onCloseCreateCallback();
            }
          });
        }}
      />
    }
  }

  render()
  {
    const { items, handle, showDefault } = this.props;

    let focus = (this.state.hasError ? {'border': '1px solid #EF5E70'} : {})


    //TODO сделать добавление субсчета
    return <Container size={this.props.size} className={this.props.className} style={this.props.style}>
      <InputWrapper className={'wrapper ' + (this.state.select ? 'select' : '')} style={focus} ref={this.wrapperRef}>
        <Selected id={this.props.id} className='selected' onClick={() => {
          this.handleShowSelect(true);
        }}><span>{this.renderSelected()}</span></Selected>
        <StyledSelect style={{
          width: this.props.width ? this.props.width : '100%'
        }} id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select}>
          {showDefault && <Item key={'default'} className='item' onClick={() => {handle(null); this.handleShowSelect(false)}}>
            <span>{this.props.default}</span>
          </Item>}
          {items.map((item) => {
            let name = (item.name ? item.name : (item.bank_text ? item.bank_text : 'Счёт без названия'));
            let shortName = name;
            if (name.length > 38)
            {
              shortName = name.slice(0, 39) + '...';
            }

            return item.accounts.length > 0 && <HeaderItem key={item.id} className='item'>
              <span>{shortName}</span>

              {item.accounts.map((subItem) => {
                let sign = CurrencyConstants.getCurrencySignById(subItem.currency_id)
                let sum = <span>{Money.format(subItem.sum)} {sign}</span>
                let subAccountName = (subItem.name ? subItem.name : 'Счёт без названия');

                return <SubItem key={subItem.id} className='subitem' id={this.props.id + '-' + subItem.id} onClick={() => {
                  handle(subItem);
                  this.handleShowSelect(false)
                }}>
                  <span>
                    {subAccountName} - {sum}
                  </span>
                </SubItem>
              })}
            </HeaderItem>
          })}
          {this.props.accountAddAvailable && <Add key={'add'} className={this.props.className + ' add'} onClick={() => {this.handleAddAccount()}}>
            <span>Добавить счёт</span>
          </Add>}
        </StyledSelect>
        {this.renderPlaceholder()}
        <img className='arrow' src={this.getArrow()} onClick={() => {
          this.handleShowSelect(true);
        }}/>
        {this.renderTooltipError()}
      </InputWrapper>
      {this.renderCreateComponent()}
    </Container>
  }
}


export {AccountGroupSelect}

export default AccountGroupSelect;
