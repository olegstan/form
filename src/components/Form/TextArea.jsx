import React from 'react';
import BaseInput from './BaseInput';
import {ContainerTextArea, WrapperTextArea, TextArea as StyledTextArea} from './newstyles'
import {detect} from 'detect-browser'

export default class TextArea extends BaseInput
{
  constructor(props) {
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
   * @type {{multi: boolean}}
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
    rows: 3
  };

  render()
  {
    let style = {}

    if(this.props.style)
    {
      style = {
        ...this.props.style
      };
    }
    let wrapperStyle = {}

    if(this.props.wrapperStyle)
    {
      wrapperStyle = {
        ...this.props.wrapperStyle
      };
    }

    let error = this.getError();
    // let focus = (this.state.focused ? {border: '1px solid #1874DE'} : {})
    // if(this.state.hasError === true)
    // {
    //   focus = {border: '1px solid #FF0000'};
    // }

    const browser = detect();

    return (
      <ContainerTextArea
        className={this.props.className + (this.props.disabled ? ' disabled' : '')}
        style={style}
      >
        <WrapperTextArea
          ref={this.setWrapperRef}
          style={wrapperStyle}
          className={this.props.className + ' ' + this.getWrapperClasses()}
        >
          <StyledTextArea
            className={this.props.className}
            browser={browser && browser.name}
            id={this.props.id}
            autoComplete={'off'}
            disabled={this.props.disabled}
            style={this.props.style}
            name={this.props.name}
            value={this.props.value ? this.props.value : ''}
            rows={this.props.rows}
            placeholder={this.props.placeholder}
            onKeyPress={(e) => {
              if (typeof this.props.onKeyPress === 'function') {
                this.props.onKeyPress(e);
              }
            }}
            onChange={(e) => {
              this.props.onChange(e, {
                name: this.props.name,
                value: e.target.value,
              })
              this.setState({
                hasError: false
              });
            }}
            onFocus={() => {
              this.setState({
                focused: true,
                hasError: false
              })
            }}
            onBlur={() => {
              this.setState({
                focused: false,
                hasError: false
              }, () => {
                this.onBlur();
              })
            }}
          />
          {this.props.placeholder ? <label htmlFor={this.props.id} className="placeholder">{this.props.placeholder}</label> : ''}
          {error ? <label htmlFor={this.props.id} className="error">{error}</label> : ''}
        </WrapperTextArea>
      </ContainerTextArea>
    );
  }
}
