import React, {createRef} from 'react';
import BaseInput from './BaseInput';
import {InputContainer, StyledInput} from './newstyles'
import {Money} from "finhelper";
import {detect} from 'detect-browser'
import {Container} from './styles/containerStyle'

export default class NumberInput extends BaseInput {

  constructor(props)
  {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,

      selectionStart: 0,
      selectionEnd: 0
    }

    this.wrapperRef = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.inputRef = createRef();
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

  componentDidUpdate(prevProps, prevState)
  {
    const { value } = this.props;
    const { selectionStart, selectionEnd } = this.state;
    if (prevProps.value !== value && this.state.focused === true && this.inputRef.current)
    {
      this.inputRef.current.selectionStart = selectionStart;
      this.inputRef.current.selectionEnd = selectionEnd;
    }

    super.componentDidUpdate(prevProps, prevState)
  }

  handleChange(e)
  {
    let pattern = /^[0-9\.\,\ \-]+$/;

    if(e.target.value === '' || pattern.test(e.target.value))
    {
      let value = e.target.value.replace(/,/g, '.').replace(/ /g, '');

      if(this.props.max !== false && value > this.props.max)
      {
        return;
      }

      if(this.props.min === 0 && isNaN(value))
      {
        return;
      }

      if(this.props.min !== false && value < this.props.min)
      {
        return;
      }

      let position = e.target.selectionStart;

      if(value.length > 0)
      {
        let prefix = '';
        if(value[0] === '-')
        {
          prefix = '-';
          value = value.replace('-', '')
        }

        let parts = value.split('.');

        if(typeof parts[1] !== 'undefined')
        {
          if(parts[1] !== '')
          {
            if(this.props.decimals !== false)
            {
              if(parts[1].length > this.props.decimals)
              {
                return;
              }
            }


            value = Money.formatForInput(value, parts[1].length);
          }else{
            value = Money.formatForInput(value, 0) + '.';
          }
        }else{
          value = Money.formatForInput(value, 0);
        }

        let prevParts = this.props.value.toString().split('.');
        let newParts = value.split('.');


        let prevLength = prevParts[0].length;
        let newLength = newParts[0].length;

        if(newLength > prevLength)
        {
          if((newLength - 1) % 4 === 0)
          {
            position += 1;
          }
        }

        this.props.onChange(e, {
          name: this.props.name,
          value: prefix + value,
        });


        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      }else{
        this.props.onChange(e, {
          name: this.props.name,
          value: '',
        });

        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      }
    }
  }

  render()
  {
    const {name} = this.props;

    const browser = detect();

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
      <InputContainer ref={this.wrapperRef}>
        <StyledInput
          browser={browser && browser.name}
          ref={this.inputRef}
          id={this.props.id}
          size={this.props.size}
          autoComplete={'off'}
          disabled={this.props.disabled}
          style={this.getInputStyle()}
          className={this.props.className}
          type={this.props.type}
          name={this.getName(name)}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onKeyPress={(e) => {
            if (typeof this.props.onKeyPress === 'function') {
              this.props.onKeyPress(e);
            }
          }}
          onChange={(e) => {this.handleChange(e)}}
          onFocus={() => {
            this.setState({
              focused: true,
              hasError: false
            })
          }}
          onBlur={() => {
          }}
        />
        {this.renderPlaceholder()}
        {!empty && typeof this.props.size === 'undefined' && !this.props.disabled && this.props.icon !== false && <img className='close' src={require('./../assets/ic_close_only.svg').default} onClick={(e) => {
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
    </Container>
  }
}
