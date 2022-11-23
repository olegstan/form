import React, {Component} from 'react';
import {Button as StyledButton, ButtonLink, Link} from './newstyles'


export default class Button extends Component {

  /**
   *
   */
  static defaultProps = {
    type: 'button',// 'link',
    onClick: () => {}
  };

  render()
  {
    switch (this.props.type)
    {
      case 'href':
        return (
          <Link
            left={this.props.left}
            slim={this.props.slim}
            right={this.props.right}
            flex={this.props.flex}
            style={this.props.style}
            size={this.props.size}
            color={this.props.color}
            className={this.props.className}
            position={this.props.position}
            id={this.props.id}
            href={this.props.href}
            target={this.props.target}
            onClick={this.props.onClick}
          >
              {this.props.children}
          </Link>
        );
      case 'link':
        return (
          <ButtonLink
            left={this.props.left}
            slim={this.props.slim}
            right={this.props.right}
            flex={this.props.flex}
            style={this.props.style}
            size={this.props.size}
            color={this.props.color}
            className={this.props.className}
            position={this.props.position}
            id={this.props.id}
            to={this.props.to}
          >
              {this.props.children}
          </ButtonLink>
        );
      case 'button':
      default:
        return (
          <StyledButton
            left={this.props.left}
            slim={this.props.slim}
            right={this.props.right}
            flex={this.props.flex}
            style={this.props.style}
            size={this.props.size}
            color={this.props.color}
            className={this.props.className}
            position={this.props.position}
            id={this.props.id}
            onClick={this.props.onClick}
          >
            {this.props.children}
          </StyledButton>
        );
    }
  }
}
