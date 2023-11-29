import React from 'react';
import BaseInput from './BaseInput';
import { InputContainer, sharedInputStyle } from './newstyles';
import { Container } from './styles/containerStyle';
import InputPopup from "./InputPopup/InputPopup";
import moment from 'moment/moment';
import Url from "./../Helpers/Url";
import styled from "styled-components";
export default class DateTime extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,
      Input: null,
      componentsLoaded: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {},
    onChange: () => {},
    disabled: false,
    value: '',
    placeholder: '',
    mask: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: ''
  };
  componentDidMount() {
    // Динамический импорт библиотеки Flatpickr
    Promise.all([import('flatpickr'), import('react-flatpickr'), import('flatpickr/dist/l10n/ru.js'), import('flatpickr/dist/flatpickr.css')]).then(([flatpickr, Flatpickr, {
      Russian
    }]) => {
      let url = Url.getCurrentUrl();
      let lang = localStorage.getItem('language_id');
      if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
        try {
          flatpickr.default.localize(Russian);
        } catch (e) {
          console.error(e);
        }
      }

      // Определение компонента с применением стилей
      const DateStyledInput = styled(Flatpickr.default)`
              ${sharedInputStyle}
            `;
      this.setState({
        componentsLoaded: true,
        Input: DateStyledInput
      });
    });
  }
  formatDate(date) {
    var month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  setDate(value, dateStr, instance, callback) {
    let date = null;
    if (value && value.length) {
      date = value[0];
    }
    if (date !== '' && date != null) {
      callback(date);
      this.props.onChange({}, {
        name: this.props.name,
        value: this.formatDate(date),
        date: date
      });
    } else {
      this.props.onChange({}, {
        name: this.props.name,
        value: null,
        date: null
      });
    }
    this.setState({
      hasError: false
    });
  }
  render() {
    const {
      Input,
      componentsLoaded
    } = this.state;
    let error = this.getError();
    let value = null;
    if (this.props.value && typeof this.props.value.getMonth === 'function') {
      value = this.props.value;
    }
    let options = {
      ...{
        dateFormat: 'd.m.Y',
        allowInput: true,
        position: "auto",
        disableMobile: "true"
        // static: true
      },
      ...this.props
    };
    if (this.props.defaultDate) {
      options.defaultDate = this.props.defaultDate;
    }
    return componentsLoaded ? /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      disabled: this.props.disabled,
      onClick: e => {}
    }, /*#__PURE__*/React.createElement(InputContainer, {
      needMargin: true,
      focus: this.state.focused
    }, /*#__PURE__*/React.createElement(Input, {
      id: this.props.id,
      style: this.props.style,
      disabled: this.props.disabled,
      value: value,
      placeholder: this.props.placeholder,
      autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
      options: options,
      className: this.props.className,
      onReady: (_, __, fp) => {
        fp.calendarContainer.id = this.props.id + '-container';
      },
      onMonthChange: (value, dateStr, instance) => {
        if (dateStr) {
          this.setDate(value, dateStr, instance, date => {
            date.setMonth(instance.currentMonth);
          });
        }
      },
      onYearChange: (value, dateStr, instance) => {
        if (dateStr) {
          this.setDate(value, dateStr, instance, date => {
            date.setYear(instance.currentYear);
          });
        }
      },
      onKeyUp: e => {
        let value = e.target.value;
        if (value.length === 10) {
          let date = moment(value, 'DD.MM.YYYY');
          if (date && date.isValid() && date.format('DD.MM.YYYY') === value) {
            this.setDate([date.toDate()], value, null, date => {});
          }
        }
      },
      onChange: (value, dateStr, instance) => {
        this.setDate(value, dateStr, instance, date => {});
      },
      onOpen: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onClose: () => {
        this.setState({
          focused: false,
          hasError: false
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      style: this.props.placeholderStyle,
      className: "placeholder " + (this.state.focused || this.props.value ? 'focused' : '')
    }, this.props.placeholder ? this.props.placeholder + ':' : '') : '', this.props.icon !== false && /*#__PURE__*/React.createElement("img", {
      className: "calendar",
      src: require('./../assets/calendar.svg').default,
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/React.createElement(InputPopup, {
      trigger: /*#__PURE__*/React.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('./../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error"
    }, error)) : '')) : '';
  }
}