import React, { Component } from 'react';
import { Button as StyledButton, ButtonLink, InlineLink, Link } from './newstyles';
export default class Button extends Component {
  /**
   *
   */
  static defaultProps = {
    type: 'button',
    // 'link',
    onClick: () => {}
  };
  render() {
    switch (this.props.type) {
      case 'href':
        return /*#__PURE__*/React.createElement(Link, {
          slim: this.props.slim,
          right: this.props.right,
          flex: this.props.flex,
          style: this.props.style,
          size: this.props.size,
          color: this.props.color,
          className: this.props.className,
          position: this.props.position,
          id: this.props.id,
          href: this.props.href,
          target: this.props.target,
          onClick: this.props.disabled ? () => {} : this.props.onClick,
          disabled: this.props.disabled
        }, this.props.children);
      case 'inline-link':
        return /*#__PURE__*/React.createElement(InlineLink, {
          left: this.props.left,
          slim: this.props.slim,
          right: this.props.right,
          flex: this.props.flex,
          style: this.props.style,
          size: this.props.size,
          color: this.props.color,
          className: this.props.className,
          position: this.props.position,
          id: this.props.id,
          href: this.props.href,
          target: this.props.target,
          onClick: this.props.disabled ? () => {} : this.props.onClick,
          disabled: this.props.disabled
        }, this.props.children);
      case 'link':
        return /*#__PURE__*/React.createElement(ButtonLink, {
          left: this.props.left,
          slim: this.props.slim,
          right: this.props.right,
          flex: this.props.flex,
          style: this.props.style,
          size: this.props.size,
          color: this.props.color,
          className: this.props.className,
          position: this.props.position,
          id: this.props.id,
          to: this.props.to,
          disabled: this.props.disabled
        }, this.props.children);
      case 'button':
      default:
        return /*#__PURE__*/React.createElement(StyledButton, {
          left: this.props.left,
          slim: this.props.slim,
          right: this.props.right,
          flex: this.props.flex,
          style: this.props.style,
          size: this.props.size,
          color: this.props.color,
          className: this.props.className,
          position: this.props.position,
          id: this.props.id,
          onClick: this.props.disabled ? () => {} : this.props.onClick,
          disabled: this.props.disabled
        }, this.props.children);
    }
  }
}