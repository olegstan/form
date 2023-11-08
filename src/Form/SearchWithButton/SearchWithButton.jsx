import React from 'react';
import BaseInput from '../BaseInput';
import {Container, Input as StyledInput, InputWrapper, Item, Select as StyledSelect} from './styles'

class SearchWithButton extends BaseInput
{
  constructor(props)
  {
    super(props);

    this.state = {
      error: null,
      select: false,
      focused: false,
      hasError: false,
      search: props.search ? props.search : ''
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps)
  {
    const {name} = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0)
    {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      })
    } else
    {
      this.setState({
        error: null,
        hasError: false
      })
    }

    for (const index in nextProps)
    {
      if (nextProps[index] !== this.props[index])
      {
        if (index === 'search')
        {
          this.setState({
            search: nextProps[index]
          });
        }
      }
    }
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

  handleShowSelect(bool)
  {
    this.setState({
      select: bool,
      focused: bool
    });
  }

  onSearch(search)
  {
    if(typeof this.props.onSearch === 'function')
    {
      this.props.onSearch(search);
    }
  }

  render()
  {
    const { items, handle, name } = this.props;

    let search = this.state.search ? this.state.search.toLowerCase() : '';

    let resItems = items ? items
      .filter((item) => {
        if(item?.name?.toLowerCase().indexOf(search) === -1)
        {
          return false;
        }else{
          return true;
        }
      })
      .map((item, key) => (
        <Item key={item.id} className={this.props.className +' item'} id={this.props.id + '-' + item.id} onClick={() => {
          handle(item, item.name);
          this.handleShowSelect(false);
          this.setState({
            search: item.name
          });
        }}>
          <span>{item.name}</span>
        </Item>
      )) : [];


    let style = {}

    if(this.props.style)
    {
      style = {
        ...this.props.style
      };
    }

    let error = this.getError();
    let focus = (this.state.focused ? '1px solid #1874DE' : '')
    if(this.state.hasError === true)
    {
      focus = '1px solid #FF0000';
    }

    style.border = focus;

    return <Container className={this.props.className}>
      <InputWrapper className={'wrapper ' + (this.state.select && resItems.length ? 'select' : '')} style={style} ref={this.setWrapperRef}>
        <StyledInput
          id={this.props.id}
          autoComplete={'off'}
          disabled={this.props.disabled}
          style={this.props.style}
          className={this.props.className}
          type={this.props.type}
          name={this.getName(name)}
          value={this.state.search}
          placeholder={this.props.placeholder}
          onClick={() => {
            // this.handleShowSelect(true);
          }}
          onKeyPress={(e) => {
            if (typeof this.props.onKeyPress === 'function')
            {
              this.props.onKeyPress(e);
            }
          }}
          onChange={(e) => {
            let value = e.target.value;
            if(value.length > 0)
            {
              this.setState({
                search: value,
                hasError: false
              }, () => {
                this.onSearch(this.state.search);
              });
            }else{
              this.setState({
                search: value,
                hasError: false
              }, () => {
                this.onSearch(this.state.search);
              });
              handle(null);
            }
          }}
          onFocus={() => {
            this.setState({
              focused: true,
              hasError: false
            })
          }}
        />
        {this.props.placeholder ? <label htmlFor={this.props.id} className="placeholder" onClick={() => {this.handleShowSelect(true);}}>{this.props.placeholder}</label> : ''}
        <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select || this.state.focused}>
          {resItems}
        </StyledSelect>
        {error ? <label htmlFor={this.props.id} className="error">{error}</label> : ''}
      </InputWrapper>
      <div className={'plus'}>
        <div onClick={() => {this.props.buttonClick()}}>
          <img src={require('./../../assets/plus.svg')} alt='' />
        </div>
      </div>
    </Container>
  }
}


export default SearchWithButton
