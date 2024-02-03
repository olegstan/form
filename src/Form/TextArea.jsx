import React from 'react';
import BaseInput from './BaseInput';
import {ContainerTextArea, TextArea as StyledTextArea, WrapperTextArea} from './newstyles'
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

  getContainerStyle()
  {
    return {...this.props.containerStyle};
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
    const browser = detect();

    return (
      <ContainerTextArea
        className={this.props.className + (this.props.disabled ? ' disabled' : '')}
        style={this.getContainerStyle()}
      >
        <WrapperTextArea
          ref={this.setWrapperRef}
          style={this.getWrapperStyle()}
          className={this.props.className + ' ' + this.getWrapperClasses()}
        >
          <StyledTextArea
            className={this.props.className}
            browser={browser && browser.name}
            id={this.props.id}
            autoComplete={'off'}
            disabled={this.props.disabled}
            style={this.getInputStyle()}
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
              // this.setState({
              //   focused: false,
              //   hasError: false
              // }, () => {
              //   this.onBlur();
              // })
            }}
          />
          {this.renderPlaceholder()}
          {this.renderTooltipError()}
        </WrapperTextArea>
      </ContainerTextArea>
    );
  }
}
