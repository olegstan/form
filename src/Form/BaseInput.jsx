import React, {Component} from 'react';
import InputPopup from "./../Form/InputPopup/InputPopup";
import errorSvg from "./../assets/error.svg";
import {StyledInput} from "./newstyles";
import {detect} from 'detect-browser'

export default class BaseInput extends Component
{
  /**
   * polymorph method
   * @param select
   */
  handleShowSelect(select)
  {

  }

  // getSelected()
  // {
  //   return this.props.selected;
  // }

  setWrapperRef(node)
  {
    this.wrapperRef = node;
  }

  getPlaceholderClassName()
  {
    let bool = false;

    if(this.state.focused)
    {
      bool = true;
    }else if(!!this.props.selected){
      bool = true;
    }else if(this.props.value === 0 || this.props.value && this.props.value !== '' && !this.props.inputMask){//если пусто или 0 и нет маски
      bool = true;
    }else if(this.props.value && typeof this.props.value === 'string' && this.props.value.replace(this.props.inputMask, '') !== ''){
      bool = true;
    }else if(typeof this.state.search === 'string' && this.state.search.length > 0){
      bool = true;
    }

    return "placeholder " + (bool ? 'active' : '')
  }

  getContainerStyle()
  {
    let containerStyle = {...this.props.containerStyle};

    if(this.state.focused)
    {
      //'#1874DE'
      containerStyle.border = '1px solid #1874DE';
    }

    if(this.state.hasError === true)
    {
      containerStyle.border = '1px solid #EF5E70';
    }

    return containerStyle;
  }

  getWrapperStyle()
  {
    let containerStyle = {...this.props.containerStyle};

    if(this.state.focused)
    {
      containerStyle.border = '1px solid #1874DE';
    }

    if(this.state.hasError === true)
    {
      containerStyle.border = '1px solid #EF5E70';
    }

    return containerStyle;
  }

  getInputStyle()
  {
    let inputStyle = {...this.props.style}

    if(this.props.className === 'style2')
    {
      inputStyle.color = '#fff';
    }

    return inputStyle;
  }

  hasError()
  {
    const { name } = this.props;
    if(this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0)
    {
      return true;
    }
  }

  getError()
  {
    const { name } = this.props;

    if(this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0)
    {
      return this.state.error;
    }
  }

  //TODO не забыть перенести в новый компонент, это чтобы исключить подсказки в safari внутри инпута, очень криво вылезает
  getName(name)
  {
    return name.replace('country', 'couuntry').replace('state', 'staate');
  }

  renderPlaceholder()
  {
    const {placeholder, id, placeholderStyle} = this.props;

    return placeholder ? <label htmlFor={id} style={placeholderStyle} className={this.getPlaceholderClassName()} onClick={() => {this.handleShowSelect(true)}}>{placeholder}</label> : ''
  }

  renderTooltipError()
  {
    const {id, className} = this.props

    const {hasError} = this.state

    return hasError ? <InputPopup
      trigger={<img id={'tooltip-' + id} className='' src={errorSvg} alt='' onClick={() => {}}/>}>
      <label htmlFor={id} className={className + " error"}>{this.getError()}</label>
    </InputPopup> : ''
  }

  handleClickOutside(e)
  {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target))
    {
      if(this.state.focused === true)
      {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          if(typeof this.props.onOutsideClick === 'function')
          {
            this.props.onOutsideClick(this.props.value);
          }
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(nextProps)
  {
    const { name } = this.props;
    if(nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0)
    {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      })
    }else{
      this.setState({
        error: null,
        hasError: false
      })
    }
  }

  getWrapperClasses()
  {
    let className = this.props.wrapperClassName;

    if(this.props.disabled)
    {
      className += ' disabled';
    }

    return className;
  }

  onBlur()
  {
    if(typeof this.props.onBlur === 'function')
    {
      this.props.onBlur();
    }
  }

  renderInput()
  {
    const browser = detect();

    const {id, size, autoComplete, disabled, className, type, name, value, placeholder} = this.props;

    return <StyledInput
      browser={browser && browser.name}
      id={id}
      style={this.getInputStyle()}
      size={size}
      autoComplete={autoComplete ? autoComplete : 'off'}
      disabled={disabled}
      className={className}
      type={type}
      name={this.getName(name)}
      value={value}
      placeholder={placeholder}
      onClick={(e) => {
        e.stopPropagation();

        if(typeof this.props.onClick === 'function')
        {
          this.props.onClick(this);
        }
        // this.handleShowSelect(true);
      }}
      onKeyPress={(e) => {
        if (typeof this.props.onKeyPress === 'function')
        {
          this.props.onKeyPress(e);
        }
      }}
      onChange={(e) => {
        this.props.onChange(e, {
          name: this.props.name,
          value: e.target.value,
        });
        this.setState({
          hasError: false
        });
      }}
      onFocus={() => {
        this.setState({
          focused: true,
          hasError: false
        });
      }}
      onBlur={() => {
        // this.setState({
        //   focused: false,
        //   hasError: false
        // }, () => {
        //   this.onBlur(this.props.value);
        // });
      }}
    />
  }
}