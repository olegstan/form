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
    onChange: () => {
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
    return {...{
        dateFormat: 'd.m.Y H:i:S',
        allowInput: true,
        enableTime: true,
        enableSeconds: true,
        disableMobile: "true",
        // position: "auto",
        // static: true
      }, ...this.props
    }
  }

  formatDate(date)
  {
    var month = (date.getMonth() + 1) + "",
      day = date.getDate() + "",
      year = date.getFullYear() + "",
      hour = date.getHours() + "",
      minute = date.getMinutes() + "",
      second = date.getSeconds() + ""

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    if (hour.length < 2)
      hour = '0' + hour;
    if (minute.length < 2)
      minute = '0' + minute;
    if (second.length < 2)
      second = '0' + second;

    return [day, month, year].join('.') + ' ' + hour + ':' + minute + ':' + second;
  }

  render()
  {
    const {Input, componentsLoaded} = this.state;

    return componentsLoaded ? <Container
        style={this.getContainerStyle()}
        className={this.props.className + (this.props.disabled ? ' disabled' : '')}
        disabled={this.props.disabled}
        onClick={(e) => {
        }}>
        <InputContainer
          needMargin={true}
          focus={this.state.focused}
          ref={this.setWrapperRef}
        >
          <Input
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
              this.setState({
                focused: false,
                hasError: false
              }, () => {
                if(typeof this.props.onOutsideClick === 'function')
                {
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
                  onChange={(e) => {
                    let value = e.target.value;

                    if(typeof value === 'string' && value !== '__.__.____ __:__:__' && !value.includes('_'))
                    {
                      this.props.onChange({}, {
                        date: value,
                        value: value
                      });
                    }else{
                      this.props.onChange({}, {
                        date: null,
                        value: value
                      });
                    }
                  }}
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
          />
          {this.renderPlaceholder()}
          {this.props.icon !== false && <img className='calendar' src={calendarSvg} alt=''/>}
          {this.renderTooltipError()}
        </InputContainer>
      </Container> : '';
  }
}
