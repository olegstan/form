import React from 'react';
import BaseInput from '../BaseInput';
import {Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect} from './newstyles'
import {Loader} from '../newstyles'
import InputPopup from "../InputPopup/InputPopup";

class RemoteSearch extends BaseInput
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


  onKeyPress(e)
  {
    if (typeof this.props.onKeyPress === 'function')
    {
      this.props.onKeyPress(e);
    }
  }

  render()
  {
    const { items, handle, name, loading, selected} = this.props;

    let resItems = items
      // .filter((item) => {
      //   if(showAll === true)
      //   {
      //     return true;
      //   }
      //
      //   if(item.name.toLowerCase().indexOf(search) === -1)
      //   {
      //     return false;
      //   }else{
      //     return true;
      //   }
      // })
      // .filter((item) => {
      //   if(selected)
      //   {
      //     if(selected.id === item.id)
      //     {
      //       return  false;
      //     }
      //   }
      //   return  true;
      // })
      .map((item, key) => (
        <Item key={item.id + (item.type_id ? item.type_id : '')} className={this.props.className + ' item'} id={this.props.id + '-' + item.id} onClick={() => {
          handle(item);
          this.handleShowSelect(false);
          this.setState({
            search: item.name
          });
        }}>
          {resItems.length ? resItems : <Item className={this.props.className}><span>Не найдено</span></Item>}
        </Item>
      ))


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

    let loadImage = require('../../assets/loader.svg').default;

    return <Container style={this.props.containerStyle} className={this.props.className + (this.props.disabled ? ' disabled' : '')}>
      <InputWrapper className={'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : '')} style={style} ref={this.setWrapperRef}>
        <InputContainer>
          <StyledInput
            selected={selected ? JSON.stringify(selected) : ''}
            id={this.props.id}
            autoComplete={'off'}
            disabled={this.props.disabled}
            style={this.props.style}
            className={this.props.className}
            type={this.props.type}
            name={this.getName(name)}
            value={this.state.search}
            placeholder={this.props.placeholder}
            onClick={() =>
            {
              this.handleShowSelect(true)
            }}
            onKeyPress={(e) =>
            {
              this.onKeyPress(e);
            }}
            onChange={(e) => {
              this.setState({
                search: e.target.value,
                hasError: false
              },() => {
                this.onSearch(this.state.search);
              });
            }}
            onFocus={() => {
              this.setState({
                focused: true,
                hasError: false
              })
            }}
            // onBlur={() => {
            //   //TODO проверить введенный текст соответствует ли одной из опций,
            //   //если нет, то очищать выбранный элемент
            //   this.setState({
            //     focused: false,
            //     hasError: false
            //   }, () => {
            //     this.onBlur();
            //   })
            // }}
          />
          {this.props.placeholder ? <label htmlFor={this.props.id} className="placeholder" onClick={() => {this.handleShowSelect(true);}}>{this.props.placeholder}</label> : ''}
          <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select || this.state.focused}>
            {resItems.length ? resItems : (loading || selected ? '' : <Item className={this.props.className}><span>{typeof this.state.search === 'string' && this.state.search.length > 0 ? 'Ничего не найдено' : 'Ввидете запрос'}</span></Item>)}
          </StyledSelect>
          {this.state.hasError ? <InputPopup
            trigger={<img id={'tooltip-' + this.props.id} className='' src={require('../../assets/error.svg').default} alt='' onClick={() => {
            }}/>}>
            <label htmlFor={this.props.id} className="error">{error}</label>
          </InputPopup> : ''}
          {loading && <Loader>
            <div onClick={() => {}}>
              <img src={loadImage} alt='' />
            </div>
          </Loader>}
        </InputContainer>
      </InputWrapper>
    </Container>
  }
}


export default RemoteSearch
