import React from 'react';
import Input from './Input';
import {InputContainer, StyledInput} from './newstyles'
import {Container} from './styles/containerStyle'
import {detect} from 'detect-browser'


export default class SlimInput extends Input {

  render()
  {
    let style = {}

    if(this.props.style)
    {
      style = {
        ...this.props.style
      };
    }


    const {name} = this.props;

    let error = this.getError();
    let focus = (this.state.focused ? '1px solid #1874DE' : '');
    if(this.state.hasError === true)
    {
      focus = '1px solid #EF5E70';
    }

    style.border = focus;

    const browser = detect();

    return <Container
      style={style}
      size={this.props.size}
      slim
      className={this.props.className + (this.props.disabled ? ' disabled' : '')}
      disabled={this.props.disabled}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <InputContainer ref={this.setWrapperRef} slim>
        <StyledInput
          slim
          browser={browser && browser.name}
          id={this.props.id}
          size={this.props.size}
          autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off'}
          disabled={this.props.disabled}
          className={this.props.className}
          type={this.props.type}
          name={this.getName(name)}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onClick={(e) => {
            e.stopPropagation();

            if(typeof this.props.onClick === 'function')
            {
              this.props.onClick(this);
            }
          }}
          onKeyPress={(e) => {
            if (typeof this.props.onKeyPress === 'function')
            {
              this.props.onKeyPress(e);
            }
          }}
          onChange={(e) => {
            this.props.onChange(e, {
              name: this.props.name,
              value: e.target.value,
            });
            this.setState({
              hasError: false
            });
          }}
          onFocus={() => {
            this.setState({
              focused: true,
              hasError: false
            });
          }}
          onBlur={() => {
          }}
        />
      </InputContainer>
    </Container>
  }
}
