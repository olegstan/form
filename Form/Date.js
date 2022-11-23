import React from 'react';
import BaseInput from './BaseInput';
import {DateStyledInput, InputContainer} from './newstyles'
import {Container} from './styles/containerStyle'
import InputPopup from "./InputPopup/InputPopup";
import moment from 'moment/moment';

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
    var month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  setDate(value, dateStr, instance, callback)
  {
    let date = null;
    if(value && value.length)
    {
      date = value[0];
    }

    if(date !== '' && date != null)
    {
      callback(date)
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
        className={this.props.disabled ? 'disabled' : ''}
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
                dateFormat: 'd.m.Y',
                allowInput: true,
                position: "above"
              }}
              className={this.props.className}
              onReady={(_, __, fp) => {
                fp.calendarContainer.id = this.props.id + '-container';
              }}
              onMonthChange={(value, dateStr, instance) => {
                this.setDate(value, dateStr, instance, (date) => {
                  date.setMonth(instance.currentMonth);
                })
              }}
              onYearChange={(value, dateStr, instance) => {
                this.setDate(value, dateStr, instance, (date) => {
                  date.setYear(instance.currentYear);
                })
              }}
              onKeyUp={(e) => {
                let value = e.target.value;

                if(value.length === 10)
                {
                  let date = moment(value, 'DD.MM.YYYY')
                  if(date && date.isValid() && date.format('DD.MM.YYYY') === value)
                  {
                    this.setDate([date.toDate()], value, null, (date) => {

                    })
                  }
                }
              }}
              onChange={(value, dateStr, instance) => {
                this.setDate(value, dateStr, instance, (date) => {

                })
              }}
              onOpen={() => {
                this.setState({
                  focused: true,
                  hasError: false
                });
              }}
              onClose={() => {
                this.setState({
                  focused: false,
                  hasError: false
                });
              }}
            />
          <label htmlFor={this.props.id} className={"placeholder " + (this.state.focused || this.props.value ? 'focused' : '')}>{this.props.placeholder ? this.props.placeholder + ':' : ''}</label>
          <img className='calendar' src={require('./../../assets/icons/calendar.svg')} alt=''/>
          {this.state.hasError ? <InputPopup
            trigger={<img id={'tooltip-' + this.props.id} className='' src={require('./../../assets/icons/error.svg')} alt='' onClick={() => {
            }}/>}>
            <label htmlFor={this.props.id} className="error">{error}</label>
          </InputPopup> : ''}
        </InputContainer>
      </Container>
    );
  }
}
