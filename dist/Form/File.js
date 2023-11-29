import React from 'react';
import BaseInput from './BaseInput';
import { InputContainer, StyledInput } from './newstyles';
import { Container } from './styles/containerStyle';
import { detect } from 'detect-browser';
import InputPopup from "./InputPopup/InputPopup";
export default class File extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {},
    onChange: () => {},
    disabled: false,
    value: null,
    placeholder: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    style: {}
  };
  render() {
    let style = {};
    if (this.props.style) {
      style = {
        ...this.props.style
      };
    }
    const {
      name
    } = this.props;
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #EF5E70';
    }
    style.border = focus;
    const browser = detect();
    let empty = true;
    if (this.props.value && typeof this.props.value.name === 'string') {
      empty = false;
    }
    return /*#__PURE__*/React.createElement(Container, {
      style: style,
      size: this.props.size,
      disabled: this.props.disabled,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement(InputContainer, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/React.createElement(StyledInput, {
      browser: browser && browser.name,
      id: this.props.id,
      size: this.props.size,
      disabled: this.props.disabled,
      className: this.props.className,
      type: "file",
      name: this.getName(name),
      placeholder: this.props.placeholder,
      onChange: e => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          this.props.onChange(e, {
            name: this.props.name,
            value: {
              name: e.target.files[0].name,
              content: base64String
            }
          });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.setState({
          hasError: false
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " placeholder"
    }, this.props.placeholder) : '', !empty && typeof this.props.size === 'undefined' && !this.props.disabled && /*#__PURE__*/React.createElement("img", {
      className: "close",
      src: require('./../assets/ic_close_only.svg').default,
      onClick: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: null
        });
        this.setState({
          hasError: false
        });
      },
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/React.createElement(InputPopup, {
      trigger: /*#__PURE__*/React.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('./../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error"
    }, error)) : ''));
  }
}