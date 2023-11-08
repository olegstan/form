import React from 'react';
import Input from './Input';
import { InputContainer, StyledInput } from './newstyles';
import { Container } from './styles/containerStyle';
import { detect } from 'detect-browser';
export default class SlimInput extends Input {
  render() {
    const {
      name
    } = this.props;
    const browser = detect();
    return /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      size: this.props.size,
      slim: true,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      disabled: this.props.disabled,
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement(InputContainer, {
      ref: this.setWrapperRef,
      slim: true
    }, /*#__PURE__*/React.createElement(StyledInput, {
      slim: true,
      browser: browser && browser.name,
      id: this.props.id,
      size: this.props.size,
      style: this.getInputStyle(),
      autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
      disabled: this.props.disabled,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
      placeholder: this.props.placeholder,
      onClick: e => {
        e.stopPropagation();
        if (typeof this.props.onClick === 'function') {
          this.props.onClick(this);
        }
      },
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onChange: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: e.target.value
        });
        this.setState({
          hasError: false
        });
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: () => {}
    })));
  }
}