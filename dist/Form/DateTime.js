function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import BaseInput from './BaseInput';
import styled from 'styled-components';
import { InputContainer, MaskedStyledInput, sharedInputStyle } from './newstyles';
import { Container } from './styles/containerStyle';
import InputPopup from "./InputPopup/InputPopup";
import { Url } from "finhelper";
import calendarSvg from "./../assets/calendar.svg";
import errorSvg from "./../assets/error.svg";
import moment from "moment/moment";
export default class DateTime extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: null,
      focused: false,
      hasError: false,
      Input: null,
      componentsLoaded: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
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

  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {},
    onChange: () => {},
    disabled: false,
    valueStr: '',
    value: '',
    placeholder: '',
    mask: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    inputMask: '__.__.____ __:__:__' //маска для формата данных чтобы проверять пустое поле или нет
  };
  formatDate(date) {
    var month = date.getMonth() + 1 + "",
      day = date.getDate() + "",
      year = date.getFullYear() + "",
      hour = date.getHours() + "",
      minute = date.getMinutes() + "",
      second = date.getSeconds() + "";
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (minute.length < 2) minute = '0' + minute;
    if (second.length < 2) second = '0' + second;
    return [year, month, day].join('-') + ' ' + hour + ':' + minute + ':' + second;
  }
  createDateFromString(dateStr) {
    // Check format: DD.MM.YYYY or DD.MM.YYYY HH:mm:ss
    const formatCheck = /^(\d{2})\.(\d{2})\.(\d{4})(?: (\d{2}):(\d{2}):(\d{2}))?$/;
    const match = dateStr.match(formatCheck);
    if (!match) {
      return null;
    }

    // Extract parts of the date
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1; // Month is 0-indexed in JavaScript Date
    const year = parseInt(match[3], 10);
    const hours = match[4] ? parseInt(match[4], 10) : 0;
    const minutes = match[5] ? parseInt(match[5], 10) : 0;
    const seconds = match[6] ? parseInt(match[6], 10) : 0;

    // Create date object
    const date = new Date(year, month, day, hours, minutes, seconds);

    // Validate the date (checks for overflow)
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day || date.getHours() !== hours || date.getMinutes() !== minutes || date.getSeconds() !== seconds) {
      return null;
    }
    return date;
  }
  setValidDate(value) {
    let date = this.createDateFromString(value);
    if (value && value.length === 19 && !value.includes('_')) {
      this.props.onChange({}, {
        name: this.props.name,
        value: value,
        date: date
      });
    } else {
      this.props.onChange({}, {
        name: this.props.name,
        value: value,
        date: null
      });
    }
  }
  render() {
    const {
      Input,
      componentsLoaded
    } = this.state;
    const {
      valueStr
    } = this.props;
    let error = this.getError();
    let value = null;
    if (this.props.value && typeof this.props.value.getMonth === 'function') {
      value = this.props.value;
    }
    let options = {
      ...{
        dateFormat: 'd.m.Y H:i:S',
        allowInput: true,
        enableTime: true,
        enableSeconds: true,
        disableMobile: "true",
        position: "auto"
        // static: true
      },
      ...this.props
    };
    return componentsLoaded ? /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      disabled: this.props.disabled,
      onClick: e => {}
    }, /*#__PURE__*/React.createElement(InputContainer, {
      needMargin: true,
      focus: this.state.focused
    }, /*#__PURE__*/React.createElement(Input, {
      style: this.props.style,
      id: this.props.id,
      disabled: this.props.disabled,
      placeholder: this.props.placeholder,
      autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
      options: options,
      value: value,
      valueStr: valueStr,
      className: this.props.className,
      onReady: (_, __, fp) => {
        fp.calendarContainer.id = this.props.id + '-container';
      },
      onChange: (selectedValue, dateStr, instance) => {
        this.setValidDate(dateStr);
      },
      onOpen: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onClose: (selectedValue, dateStr, instance) => {
        this.setValidDate(valueStr);
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          if (typeof this.props.onOutsideClick === 'function') {
            this.props.onOutsideClick();
          }
        });
      },
      render: ({
        id
      }, ref) => {
        return /*#__PURE__*/React.createElement(MaskedStyledInput, {
          autoComplete: 'off',
          mask: "99.99.9999 99:99:99",
          id: id,
          value: valueStr,
          onChange: e => {
            let value = e.target.value;
            this.setValidDate(value);
          },
          style: this.props.style,
          className: this.props.className,
          onFocus: () => {
            this.setState({
              focused: true,
              hasError: false
            });
          }
        }, inputProps => /*#__PURE__*/React.createElement("input", _extends({
          ref: ref
        }, inputProps)));
      }
    }), this.renderPlaceholder(), this.props.icon !== false && /*#__PURE__*/React.createElement("img", {
      className: "calendar",
      src: calendarSvg,
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/React.createElement(InputPopup, {
      trigger: /*#__PURE__*/React.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: errorSvg,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error"
    }, error)) : '')) : '';
  }
}