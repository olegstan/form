import React from 'react';
import BaseInput from "./BaseInput";
export default class BaseSearch extends BaseInput {
  getInputStyle() {
    let inputStyle = {
      ...this.props.inputStyle
    };
    if (this.props.className === 'style2') {
      inputStyle.color = '#fff';
    }
    return inputStyle;
  }
  getContainerStyle() {
    let containerStyle = {
      ...this.props.containerStyle
    };

    // containerStyle.border = '1px solid #D2D1D1';

    if (this.state.focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (this.state.hasError === true) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }
  getWrapperStyle() {
    let wrapperStyle = {
      ...this.props.wrapperStyle
    };
    return wrapperStyle;
  }
  getInputContainerStyle() {
    let inputContainerStyle = {
      ...this.props.inputContainerStyle
    };
    return inputContainerStyle;
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (this.state.focused === true) {
        this.setState({
          select: false,
          hasError: false,
          focused: false
        });
      }
    }
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
    this.setSearch(nextProps);
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (this.state.focused === true) {
        this.setState({
          select: false,
          hasError: false,
          focused: false
        });
      }
    }
  }
  setSearch(nextProps) {
    for (const index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        if (index === 'search') {
          this.setState({
            search: nextProps[index]
          });
        }
      }
    }
  }
  getWrapperClasses(items) {
    return 'wrapper ' + (this.state.select && items.length ? 'select' : '') + (this.props.disabled ? ' disabled' : '');
  }
}