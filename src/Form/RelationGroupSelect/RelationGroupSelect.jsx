import React from 'react';
import BaseInput from '../BaseInput';
import {InputWrapper, Item, Select as StyledSelect, Selected, SubItem} from './styles'
import {Money} from "finhelper";
import {Container} from '../styles/selectContainerStyle'

class RelationGroupSelect extends BaseInput
{
  constructor(props)
  {
    super(props);

    this.state = {
      error: null,
      select: false,
      hasError: false
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e)
  {
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

  renderSelected()
  {
    const { items, selected } = this.props;

    let name = null;

    if(!selected)
    {
      return this.props.default;
    }

    items.map((item) =>
    {
      item.to_trades.map((trade) =>
      {
        if(selected.id === trade.id)
        {
          name = trade.active.type_text + this.getName(trade) + ' - ' + Money.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date;
        }

        return;
      });

      return;
    });

    if(!name)
    {
      return this.props.default;
    }

    return name;
  };
  
  handleShowSelect(select)
  {
    this.setState({
      select: select,
      hasError: false
    });
  }

  getName(trade)
  {
    let name = trade.active.name;

    if(name)
    {
      if(name?.length > 30){
        name = ' (' + name.slice(0, 29) + '...)';
      }else if(name?.length === 0){
        name = ' ';
      }else{
        name = ' (' + name + ')';
      }
    }

    return name;
  }

  render()
  {
    const { items, handle, selected } = this.props;

    let error = this.getError();
    let focus = (this.state.hasError ? {'border': '1px solid #FF0000'} : {})


    return <Container style={focus}>
      <InputWrapper ref={this.setWrapperRef}>
        <Selected id={this.props.id} onClick={() => {
          this.handleShowSelect(true);
        }}><span>{this.renderSelected()}</span></Selected>
        <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select}>
          <Item key={'default'} onClick={() => {handle(null); this.handleShowSelect(false)}}>
            <span>{this.props.default}</span>
          </Item>
          {items.map((item, key) => {
            return <Item key={key}>
              <span>{item.user_account ? item.user_account.name + ' ' + item.currency.code : ''}</span>
              {item.to_trades.length ? item.to_trades.map((trade) => {
                return <SubItem id={this.props.id + '-' + trade.id} key={trade.id} onClick={() => {handle(trade); this.handleShowSelect(false)}}>
                  {trade.active.type_text + this.getName(trade) + ' - ' + Money.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date}
                </SubItem>
              }) : <SubItem>Нет доступных покупок</SubItem>}
            </Item>
          })}
        </StyledSelect>
        {this.renderPlaceholder()}
        <img className='arrow' src={require('../../assets/arrow.svg').default} alt='' />
        {error && <label htmlFor={this.props.id} className={this.props.className + " error"} onClick={() => {
          this.handleShowSelect(true);
        }}>{error}</label>}
      </InputWrapper>
    </Container>
  }
}


export default RelationGroupSelect
