import React from 'react';
import BaseInput from '../BaseInput';
import Checkbox from '../Checkbox';
import {InputWrapper, Item, Select as StyledSelect, Selected} from './styles'
import {Container} from './../styles/selectContainerStyle'

class GroupMultipleSelect extends BaseInput
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

  setWrapperRef(node)
  {
    this.wrapperRef = node;
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

    let def = this.props.default;

    if(selected.length)
    {
      let selectedItms = [];

      items.map((item) =>
      {
        item.items.map((subItem) =>
        {
          if(this.props.selected.indexOf(subItem.id) !== -1)
          {
            selectedItms.push(subItem.name);
          }

          return;
        });

        return;
      });

      def = selectedItms.join(', ')

      if(def.length > 35)
      {
        def = def.slice(0, 34) + '...';
      }
    }

    return def;
  };
  
  handleShowSelect(select)
  {
    this.setState({
      select: select,
    });
  }

  renderSelectAll()
  {
    const { handleAll } = this.props;
    if(this.props.selected.length){
      return <Checkbox
        id={''}
        text={'Снять все'}
        checked={true}
        toggleCallback={(e) => {handleAll(false);}}
      />
    }else{
      return <Checkbox
        id={''}
        text={'Выбрать все'}
        checked={false}
        toggleCallback={(e) => {handleAll(true);}}
      />
    }
  }

  render()
  {
    const { items, handle, selected, showAll } = this.props;

    let error = this.getError();
    let focus = (this.state.hasError ? {'border': '1px solid #FF0000'} : {})

    return <Container className={this.props.className} style={this.props.style}>
      <InputWrapper ref={this.setWrapperRef} style={focus}>
        <Selected id={this.props.id} onClick={() => {
          this.handleShowSelect(true);
        }}><span>{this.renderSelected()}</span></Selected>
        <StyledSelect id={this.props.id + '-multi-select'} className='select' select={this.state.select}>
          {showAll ? this.renderSelectAll() : ''}
          {items.map((item, key) => (
            <Item key={item.id} id={this.props.id + '-' + item.id}>
              <span>{item.name}</span>
              {item.items.map((subItem, subKey) => (
                <Checkbox
                  key={subKey}
                  id={this.props.id + '-subitem-' + subItem.id}
                  text={subItem.name}
                  checked={this.props.selected.indexOf(subItem.id) !== -1}
                  toggleCallback={(e) => {handle(subItem)}}
                />
              ))}
            </Item>
          ))}
        </StyledSelect>
        {selected && this.props.placeholder ? <label htmlFor={this.props.id} className="placeholder" onClick={() => {this.handleShowSelect(true);}}>{this.props.placeholder ? this.props.placeholder + ':' : ''}</label> : ''}
        <img className='arrow' src={require('./../../assets/arrow.svg')} alt='' onClick={() => {
          this.handleShowSelect(true);
        }}/>
        {error && <label htmlFor={this.props.id} className="error" onClick={() => {
          this.handleShowSelect(true);
        }}>{error}</label>}
      </InputWrapper>
    </Container>
  }
}


export default GroupMultipleSelect
