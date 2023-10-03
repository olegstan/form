import React from 'react';
import BaseInput from './BaseInput';
import {InputContainer, StyledInput} from './newstyles'
import {Container} from './styles/containerStyle'
import {detect} from 'detect-browser'
import InputPopup from "./InputPopup/InputPopup";


export default class Input extends BaseInput {

  constructor(props)
  {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {
    },
    onChange: () => {
    },
    disabled: false,
    value: '',
    placeholder: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    style: {}
  };

  render()
  {
    const {name} = this.props;

    let error = this.getError();

    const browser = detect();

    let empty = true;

    if((typeof this.props.value === 'number' && this.props.value.toString().length > 0) || (typeof this.props.value === 'string' && this.props.value.length > 0))
    {
      empty = false;
    }

    return <Container
      style={this.getContainerStyle()}
      size={this.props.size}
      disabled={this.props.disabled}
      className={this.props.className + (this.props.disabled ? ' disabled' : '')}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <InputContainer ref={this.setWrapperRef}>
        <StyledInput
          browser={browser && browser.name}
          id={this.props.id}
          style={this.getInputStyle()}
          size={this.props.size}
          autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off'}
          disabled={this.props.disabled}
          className={this.props.className}
          type={this.props.type}
          name={this.getName(name)}
          value={this.props.value}
          placeholder={this.props.placeholder}
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
        {this.props.placeholder ? <label htmlFor={this.props.id} style={this.props.placeholderStyle} className="placeholder">{this.props.placeholder}</label> : ''}
        {!empty && typeof this.props.size === 'undefined' && !this.props.disabled && <img className='close' src={require('./../assets/ic_close_only.svg').default} onClick={(e) => {
          this.props.onChange(e, {
            name: this.props.name,
            value: '',
          });
          this.setState({
            hasError: false
          });
        }} alt=''/>}
        {this.state.hasError ? <InputPopup
          trigger={<img id={'tooltip-' + this.props.id} className='' src={require('./../assets/error.svg').default} alt='' onClick={() => {
        }}/>}>
          <label htmlFor={this.props.id} className="error">{error}</label>
        </InputPopup> : ''}
      </InputContainer>
      {/*{this.props.icon ? <InputLabel>*/}
        {/*{this.props.icon}*/}
      {/*</InputLabel> : null}*/}
    </Container>
  }
}
