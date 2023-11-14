import React, { Component } from 'react';
export default class BaseInput extends Component {
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  getPlaceholderClassName() {
    return "placeholder " + (this.state.focused || this.props.value && this.props.value !== '' ? 'active' : '');
  }
  getContainerStyle() {
    let containerStyle = {
      ...this.props.containerStyle
    };
    if (this.state.focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (this.state.hasError === true) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }
  getWrapperStyle() {
    let containerStyle = {
      ...this.props.containerStyle
    };
    if (this.state.focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (this.state.hasError === true) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }
  getInputStyle() {
    let inputStyle = {
      ...this.props.style
    };
    if (this.props.className === 'style2') {
      inputStyle.color = '#fff';
    }
    return inputStyle;
  }
  hasError() {
    const {
      name
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return true;
    }
  }
  getError() {
    const {
      name
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return this.state.error;
    }
  }

  //TODO не забыть перенести в новый компонент, это чтобы исключить подсказки в safari внутри инпута, очень криво вылезает
  getName(name) {
    return name.replace('country', 'couuntry').replace('state', 'staate');
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (this.state.focused === true) {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          if (typeof this.props.onOutsideClick === 'function') {
            this.props.onOutsideClick(this.props.value);
          }
        });
      }
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      name
    } = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0) {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      });
    } else {
      this.setState({
        error: null,
        hasError: false
      });
    }
  }
  getWrapperClasses() {
    let className = this.props.wrapperClassName;
    if (this.props.disabled) {
      className += ' disabled';
    }
    return className;
  }
  onBlur() {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur();
    }
  }
}