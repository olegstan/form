import React, {Component, createRef} from 'react';
import {Body, Checkbox as StyleCheckbox} from "./newstyles";

export default class Checkbox extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      value: props.value || ""
    }

    this.inputRef = createRef();
  }

  static defaultProps = {
    value: 1,
    name: '',
    toggleCallback: () => {},
  };

  handleClick = (e) => {
    e.preventDefault();
    if (this.inputRef.current) {
      this.inputRef.current.click();
    }
  }

  render()
  {
    const { textStyle, id, checked, checkboxStyle, style, form, text, toggleCallback, name } = this.props;
    const combinedTextStyle = textStyle ? { ...textStyle } : {};
    const combinedCheckboxStyle = checkboxStyle ? { ...checkboxStyle } : {
      backgroundColor: '#4378FF',
      border: '2px solid #4378FF'
    };

    return (
      <StyleCheckbox id={id} style={style}>
        <label className='checkbox'>
          <input
            ref={this.inputRef}
            className={checked ? 'active' : ''}
            onChange={toggleCallback}
            name={name}
            type="checkbox"
            value={this.state.value}
            id={id}
            checked={checked}
          />
          <span className="rotate-container" style={{
            borderRadius: form === 'round' ? '10px' : '6px',
            display: 'flex',
            ...combinedCheckboxStyle
          }}>
            <span className="rotate" />
          </span>
          {text && <Body style={combinedTextStyle} className='text' onClick={this.handleClick}>{text}</Body>}
        </label>
      </StyleCheckbox>
    );
  }
}
