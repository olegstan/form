import React, {Component} from 'react';
import {Checkbox as StyleCheckbox} from "./newstyles";
import {Body} from "./../Text/styles";

export default class Checkbox extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      value: props.value || ""
    }
  }

  static defaultProps = {
    value: 1,
    name: '',
    toggleCallback: () => {},
  };

  render()
  {
    let props = {

    };

    if(this.props.id)
    {
      props.id = this.props.id;
    }

    if(this.props.checked)
    {
      props.checked = true;
    }else{
      props.checked = false;
    }


    return <StyleCheckbox id={props.id}  style={this.props.style}>
      <div>
        <label>
          <input
            className={this.props.checked ? 'active' : ''}
            onChange={(e) => {
              this.props.toggleCallback()
            }}
            name={this.props.name}
            type="checkbox"
            value={this.state.value}
            {...props}
          />
          <span className="rotate-container">
            <span className="rotate"/>
          </span>
        </label>
        <Body className='text' onClick={(e) => {e.preventDefault(); this.props.toggleCallback()}}>{this.props.text}</Body>
      </div>
    </StyleCheckbox>
  }
}
