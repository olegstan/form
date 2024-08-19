import React, {createRef} from 'react';
import BaseInput from '../BaseInput';
import {InputWrapper, Item, Select as StyledSelect, Selected} from './newstyles'
import {Container} from '../styles/selectContainerStyle'

class Select extends BaseInput
{
  /**
   *
   * @param props
   */
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
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }

  componentDidMount() {
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

    if(!selected)
    {
      return this.props.default;
    }

    items.map((item) => {
      if(parseInt(selected.id) === parseInt(item.id))
      {
        name = item.name;
      }

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

    let focus = (this.state.hasError ? {'border': '1px solid #EF5E70'} : {})
    let resItems = items ? items
      .filter((item) => {
        if(selected)
        {
          if(selected.id === item.id)
          {
            return  false;
          }
        }

        return true;
      }) : [];


    return <Container
      size={this.props.size}
      className={this.props.className + ' ' + (this.state.select ? 'select' : '')}
      style={this.getContainerStyle()}
    >
      <InputWrapper ref={this.wrapperRef} className={'wrapper ' + (this.state.select ? 'select' : '')} style={focus} id={this.props.id + '-wrapper'}>
        <Selected  id={this.props.id} className={this.props.className + ' selected'} onClick={() => {
          this.handleShowSelect(true);
        }}><span>{this.renderSelected()}</span></Selected>
        {resItems.length > 0 ? this.state.select && <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={true}>
          {resItems.map((item, key) => {
            let shortName = '';
            if(item.name && item.name.length > this.props.textLength)
            {
              shortName = item.name.substr(0, this.props.textLength - 1) + '...';
            }else{
              shortName = item.name;
            }

            return <Item key={item.id} id={this.props.id + '-' + item.id} className={this.props.className + ' item'} onClick={() => {
              handle(item);
              this.handleShowSelect(false)
            }}>
              <span>{shortName}</span>
            </Item>
          })}
        </StyledSelect> : this.state.select && <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={true}>
          <Item className={this.props.className + ' item'} onClick={() => {
            this.handleShowSelect(false)
          }}>
            <span>Нет элементов</span>
          </Item>
        </StyledSelect>}
        {this.renderPlaceholder()}
        <img className='arrow' src={this.getArrow()} alt='' onClick={() => {
          this.handleShowSelect(true);
        }}/>
        {this.renderTooltipError()}
      </InputWrapper>
    </Container>
  }
}


export default Select
