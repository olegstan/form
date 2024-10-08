import React, { createRef } from 'react';
import BaseInput from './BaseInput';
import { InputContainer, MaskedStyledInput } from './newstyles';
import { detect } from 'detect-browser';
import { Container } from './styles/containerStyle';
export default class MaskedInput extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false
    };

    // Create a ref for the wrapper element
    this.wrapperRef = /*#__PURE__*/createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  static defaultProps = {
    onKeyPress: () => {},
    onChange: () => {},
    disabled: false,
    value: '',
    placeholder: '',
    mask: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: ''
  };
  render() {
    const {
      name
    } = this.props;
    const browser = detect();
    let empty = true;

    // Determine if the input is empty based on the value
    if (typeof this.props.value === 'number' && this.props.value.toString().length > 0 || typeof this.props.value === 'string' && this.props.value.length > 0) {
      empty = false;
    }
    return /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      disabled: this.props.disabled,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement(InputContainer, {
      ref: this.wrapperRef
    }, /*#__PURE__*/React.createElement(MaskedStyledInput, {
      browser: browser && browser.name,
      id: this.props.id,
      mask: this.props.mask,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.getInputStyle(),
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
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
      onBlur: () => {
        this.setState({
          focused: false,
          hasError: false
        });
      }
    }), this.renderPlaceholder(), !empty && typeof this.props.size === 'undefined' && !this.props.disabled && /*#__PURE__*/React.createElement("img", {
      className: "close",
      src: require('./../assets/ic_close_only.svg').default,
      onClick: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: ''
        });
        this.setState({
          hasError: false
        });
      },
      alt: ""
    }), this.renderTooltipError()));
  }
}