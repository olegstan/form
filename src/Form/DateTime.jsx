import React from 'react';
import {InputContainer, MaskedStyledInput} from './newstyles'
import {Container} from './styles/containerStyle'
import calendarSvg from "./../assets/calendar.svg";
import Date from "./Date";

export default class DateTime extends Date
{
  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {
    },
    onChangeDateInner: () => {
    },
    disabled: false,
    value: '',
    placeholder: '',
    mask: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    inputMask: '__.__.____ __:__:__'//маска для формата данных чтобы проверять пустое поле или нет
  };

  getOptions()
  {
    return {
        dateFormat: 'd.m.Y H:i:S',
        allowInput: true,
        enableTime: true,
        enableSeconds: true,
        disableMobile: "true",
        ...this.props
    }
  }

  formatDate(date)
  {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
  }

  handleInputChange = (e) => {
    const value = e.target.value;

    this.setState({ date: value });

    if (typeof value === 'string' && value !== '__.__.____ __:__:__' && !value.includes('_')) {
      this.props.onChangeDateInner({}, {
        date: value,
        value: value,
      });
    } else {
      this.props.onChangeDateInner({}, {
        date: null,
        value: value,
      });
    }
  };

  render()
  {
    const {Input, componentsLoaded} = this.state;

    if (!componentsLoaded) {
      return null;
    }

    return componentsLoaded ? <Container
        style={this.getContainerStyle()}
        className={this.props.className + (this.props.disabled ? ' disabled' : '')}
        disabled={this.props.disabled}
        onClick={(e) => {}}>
        <InputContainer
          needMargin={true}
          focus={this.state.focused}
          ref={this.setWrapperRef}
        >
          {this.props.disabled ? this.renderInput() : <Input
            style={this.props.style}
            id={this.props.id}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off'}
            options={this.getOptions()}
            value={this.state.date}
            className={this.props.className}
            onReady={(_, __, fp) => {
              fp.calendarContainer.id = this.props.id + '-container';
            }}
            onChange={(value) => {
              this.handleDateChange(value);
            }}
            onOpen={() => {
              this.setState({
                focused: true,
                hasError: false
              });
            }}
            onClose={(selectedValue, dateStr, instance) => {
              this.setState({ focused: false, hasError: false }, () => {
                if (typeof this.props.onOutsideClick === 'function') {
                  this.props.onOutsideClick();
                }
              });
            }}
            render={({ id, ...props }, ref) => {
              return (
                <MaskedStyledInput
                  autoComplete={'off'}
                  mask="99.99.9999 99:99:99"
                  id={id}
                  value={props.value}
                  onChange={this.handleInputChange}
                  style={props.style}
                  className={props.className}
                  onFocus={() => {
                    this.setState({
                      focused: true,
                      hasError: false
                    });
                  }}
                >
                  {(inputProps) => <input ref={ref} {...inputProps} />}
                </MaskedStyledInput>
              );
            }}
          />}
          {this.renderPlaceholder()}
          {this.props.icon !== false && <img className='calendar' src={calendarSvg} alt=''/>}
          {this.renderTooltipError()}
        </InputContainer>
      </Container> : '';
  }
}
