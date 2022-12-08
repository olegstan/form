import React from 'react';
import BaseInput from './BaseInput';
import {DateStyledInput, InputContainer} from './newstyles'
import {Container} from './styles/containerStyle'
import InputPopup from "./InputPopup/InputPopup";

export default class DateTime extends BaseInput
{
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

  setWrapperRef(node)
  {
    this.wrapperRef = node;
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
    mask: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: ''
  };

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

    return [year, month, day].join('-') + ' ' + hour + ':' + minute + ':' + second;
  }

  setDate(selectedValue, dateStr, instance, callback)
  {
    let date = null;
    if(selectedValue && selectedValue.length)
    {
      date = selectedValue[0];
    }

    if(dateStr !== '' && date !== '' && date != null){
      callback(date, instance);
      this.props.onChange({}, {
        name: this.props.name,
        value: this.formatDate(date),
        date: date
      })
    }else{
      this.props.onChange({}, {
        name: this.props.name,
        value: null,
        date: null,
      })
    }

    this.setState({
      hasError: false
    });
  }

  render()
  {
    const {name} = this.props;

    let error = this.getError();
    let focus = (this.state.focused ? {border: '1px solid #1874DE'} : {})
    if(this.state.hasError === true)
    {
      focus = {border: '1px solid #EF5E70'};
    }

    let value = null;

    if(this.props.value && typeof this.props.value.getMonth === 'function')
    {
      value = this.props.value;
    }

    return (
      <Container
        size={this.props.size}
        style={focus}
        className={this.props.className + (this.props.disabled ? ' disabled' : '')}
        disabled={this.props.disabled}
        onClick={(e) => {
        }}>
        <InputContainer
          size={this.props.size}
          needMargin={true}
        >
          <DateStyledInput
            id={this.props.id}
            disabled={this.props.disabled}
            value={value}
            placeholder={this.props.placeholder}
            autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off'}
            options={{
              dateFormat: 'd.m.Y H:i:S',
              allowInput: true,
              enableTime: true,
              enableSeconds: true,
            }}
            className={this.props.className}
            onReady={(_, __, fp) => {
              fp.calendarContainer.id = this.props.id + '-container';
            }}
            onMonthChange={(selectedValue, dateStr, instance) => {
              this.setDate(selectedValue, dateStr, instance, (date, instance) => {
                date.setMonth(instance.currentMonth);
              })
            }}
            onYearChange={(selectedValue, dateStr, instance) => {
              this.setDate(selectedValue, dateStr, instance, (date, instance) => {
                date.setYear(instance.currentYear);
              })
            }}
            onChange={(selectedValue, dateStr, instance) => {
              this.setDate(selectedValue, dateStr, instance, () => {

              })
            }}
            onOpen={() => {
              this.setState({
                focused: true,
                hasError: false
              });
            }}
            onClose={(selectedValue, dateStr, instance) => {
              this.setDate(selectedValue, dateStr, instance, () => {

              })

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
          />
          <label htmlFor={this.props.id} className={"placeholder " + (this.state.focused || this.props.value ? 'focused' : '')}>{this.props.placeholder ? this.props.placeholder + ':' : ''}</label>
          {this.props.icon !== false && <img className='calendar' src={require('./../assets/calendar.svg').default} alt=''/>}
          {this.state.hasError ? <InputPopup
            trigger={<img id={'tooltip-' + this.props.id} className='' src={require('./../assets/error.svg').default} alt='' onClick={() => {
            }}/>}>
            <label htmlFor={this.props.id} className="error">{error}</label>
          </InputPopup> : ''}
        </InputContainer>
      </Container>
    );
  }
}
