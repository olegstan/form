function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { Component } from 'react';
import { Body, Checkbox as StyleCheckbox } from "./newstyles";
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }
  static defaultProps = {
    value: 1,
    name: '',
    toggleCallback: () => {}
  };
  render() {
    let style = {};
    if (this.props.textStyle) {
      style = {
        ...this.props.textStyle
      };
    }
    let props = {};
    if (this.props.id) {
      props.id = this.props.id;
    }
    if (this.props.checked) {
      props.checked = true;
    } else {
      props.checked = false;
    }
    let checkboxStyle = {};
    if (this.props.checkboxStyle) {
      checkboxStyle = {
        ...this.props.checkboxStyle
      };
    } else {
      checkboxStyle = {
        backgroundColor: '#4378FF',
        border: '2px solid #4378FF'
      };
    }

    // let checkboxColor = '';

    return /*#__PURE__*/React.createElement(StyleCheckbox, {
      id: props.id,
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "checkbox"
    }, /*#__PURE__*/React.createElement("input", _extends({
      className: this.props.checked ? 'active' : '',
      onChange: e => {
        this.props.toggleCallback();
      },
      name: this.props.name,
      type: "checkbox",
      value: this.state.value
    }, props)), /*#__PURE__*/React.createElement("span", {
      className: "rotate-container",
      style: {
        borderRadius: this.props.form === 'round' ? '10px' : '6px',
        ...checkboxStyle
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rotate"
    }))), /*#__PURE__*/React.createElement(Body, {
      style: style,
      className: "text",
      onClick: e => {
        e.preventDefault();
        this.props.toggleCallback();
      }
    }, this.props.text)));
  }
}