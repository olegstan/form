import React, {createRef} from 'react';
import BaseInput from '../BaseInput';
import {InputWrapper, Item, Select as StyledSelect, Selected, SubItem} from './styles'
import {Container} from '../styles/selectContainerStyle'

class GroupSelect extends BaseInput
{
  constructor(props)
  {
    super(props);

    this.state = {
      error: null,
      select: false,
      hasError: false
    };

    this.wrapperRef = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e)
  {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target))
    {
      this.handleShowSelect(false);
    }
  }

  componentDidMount()
  {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount()
  {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  renderSelected()
  {
    const { items, selected } = this.props;

    let name = null;
    let shortName = null;

    if (!selected)
    {
      return this.props.default;
    }

    items.map((item) =>
    {
      item.items.map((subItem) =>
      {
        if (selected.id === subItem.id)
        {
          name = item.name + ' (' + (subItem ? subItem.name.toLowerCase() : '' ) + ')';
          shortName = name;
          if(name.length > 51)
          {
            shortName = name.slice(0, 52) + '...';
          }
        }

        return;
      });

      return;
    });

    if (!name)
    {
      return this.props.default;
    }

    return shortName;
  };

  handleShowSelect(select)
  {
    if(!this.props.disabled)
    {
      this.setState({
        select: select,
        hasError: false
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

  render()
  {
    const { items, handle, selected } = this.props;

    let style = {}

    if(this.props.style)
    {
      style = {
        ...this.props.style
      };
    }

    let error = this.getError();
    let focus = (this.state.hasError ? { 'border': '1px solid #FF0000' } : {})

    style.border = focus;


    return <Container size={this.props.size} style={style} className={this.props.className}>
      <InputWrapper size={this.props.size} ref={this.wrapperRef} className={'wrapper ' + (this.state.select ? 'select' : '')}>
        <Selected id={this.props.id} className='selected' onClick={() =>
        {
          this.handleShowSelect(true);
        }}><span>{this.renderSelected()}</span></Selected>
        <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select}>
          {items.map((item, key) => {
            let name = item.name;
            let shortName = name;
            if (name.length > 38) {
              shortName = name.slice(0, 39) + '...';
            }

            return item.items.length > 0 && <Item key={item.id} className='item'>
              <span>{shortName}</span>

              {item.items.map((subItem, subKey) => {
                return <SubItem key={subItem.id} className='subitem' id={this.props.id + '-' + subItem.id} onClick={() => {
                  handle(subItem);
                  this.handleShowSelect(false)
                }}>
                  {subItem.name}
                </SubItem>
              })}
            </Item>
          })}
        </StyledSelect>
        {this.renderPlaceholder()}
        <img className='arrow' src={this.getArrow()} alt=''/>
        {error && <label htmlFor={this.props.id} className={this.props.className + " error"} onClick={() =>
        {
          this.handleShowSelect(true);
        }}>{error}</label>}
      </InputWrapper>
    </Container>
  }
}


export default GroupSelect
