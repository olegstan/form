import React, {Component} from 'react';
import {Body, Checkbox as StyleCheckbox} from "./newstyles";

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
    let style = {}

    if(this.props.textStyle)
    {
      style = {
        ...this.props.textStyle
      };
    }

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

    let checkboxStyle = {}
    if(this.props.checkboxStyle)
    {
      checkboxStyle = {...this.props.checkboxStyle}
    }else{
      checkboxStyle = {
        backgroundColor: '#4378FF',
        border: '2px solid #4378FF'
      }
    }

    // let checkboxColor = '';


    return <StyleCheckbox id={props.id}  style={this.props.style}>
      <div>
        <label className='checkbox'>
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
          <span className="rotate-container" style={{
            borderRadius: this.props.form === 'round' ? '10px' : '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...checkboxStyle
          }}>
            <span className="rotate"/>
          </span>
        </label>
        <Body style={style} className='text' onClick={(e) => {e.preventDefault(); this.props.toggleCallback()}}>{this.props.text}</Body>
      </div>
    </StyleCheckbox>
  }
}
