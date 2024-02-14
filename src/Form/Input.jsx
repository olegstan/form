import React from 'react';
import BaseInput from './BaseInput';
import {InputContainer, StyledInput} from './newstyles'
import {Container} from './styles/containerStyle'


export default class Input extends BaseInput {

  constructor(props)
  {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {
    },
    onChange: () => {
    },
    disabled: false,
    value: '',
    placeholder: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    style: {}
  };

  render()
  {
    let empty = true;

    if((typeof this.props.value === 'number' && this.props.value.toString().length > 0) || (typeof this.props.value === 'string' && this.props.value.length > 0))
    {
      empty = false;
    }

    return <Container
      style={this.getContainerStyle()}
      size={this.props.size}
      disabled={this.props.disabled}
      className={this.props.className + (this.props.disabled ? ' disabled' : '')}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <InputContainer ref={this.setWrapperRef}>
        {this.renderInput()}
        {this.renderPlaceholder()}
        {!empty && typeof this.props.size === 'undefined' && this.props.icon !== false && !this.props.disabled && <img className='close' src={require('./../assets/ic_close_only.svg').default} onClick={(e) => {
          this.props.onChange(e, {
            name: this.props.name,
            value: '',
          });
          this.setState({
            hasError: false
          });
        }} alt=''/>}
        {this.renderTooltipError()}
      </InputContainer>
      {/*{this.props.icon ? <InputLabel>*/}
        {/*{this.props.icon}*/}
      {/*</InputLabel> : null}*/}
    </Container>
  }
}
