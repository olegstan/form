function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { createRef } from 'react';
import BaseInput from './BaseInput';
import { InputContainer, MaskedStyledInput, sharedInputStyle } from './newstyles';
import { Container } from './styles/containerStyle';
import { Url } from 'finhelper';
import styled from 'styled-components';
import calendarSvg from './../assets/calendar.svg';
export default class Date extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,
      Input: null,
      componentsLoaded: false,
      date: props.value || null
    };
    this.wrapperRef = /*#__PURE__*/createRef(); // Use ref API instead of findDOMNode
    this.inputRef = /*#__PURE__*/createRef(); // Create ref for input
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.flatpickrInstance = null; // Track the flatpickr instance
  }
  static defaultProps = {
    onKeyPress: () => {},
    onChangeDateInner: () => {},
    disabled: false,
    value: '',
    placeholder: '',
    mask: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    inputMask: '__.__.____'
  };
  handleClickOutside(e) {
    const isInsideFlatpickr = e.target.closest('.flatpickr-calendar');
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target) && !isInsideFlatpickr) {
      if (this.state.focused) {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          if (typeof this.props.onOutsideClick === 'function') {
            this.props.onOutsideClick(this.props.value);
          }
        });
      }
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    // Dynamic import of Flatpickr library
    Promise.all([import('flatpickr'), import('react-flatpickr'), import('flatpickr/dist/l10n/ru.js'), import('flatpickr/dist/flatpickr.css')]).then(([flatpickr, Flatpickr, {
      Russian
    }]) => {
      const url = Url.getCurrentUrl();
      const lang = localStorage.getItem('language_id');
      if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
        try {
          flatpickr.default.localize(Russian);
        } catch (e) {
          console.error(e);
        }
      }
      const DateStyledInput = styled(Flatpickr.default)`
                ${sharedInputStyle}
            `;
      this.setState({
        componentsLoaded: true,
        Input: DateStyledInput
      });
    });
  }
  componentDidUpdate(prevProps) {
    const updates = {};
    if (this.props.value !== prevProps.value) {
      if (this.state.date !== this.props.value) {
        updates.date = this.props.value;
      }
    }
    const {
      name
    } = this.props;
    const hasError = this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0;
    const error = hasError ? this.props.errors[name][0] : null;
    if (hasError !== this.state.hasError || error !== this.state.error) {
      updates.error = error;
      updates.hasError = hasError;
    }
    if (Object.keys(updates).length > 0) {
      this.setState(updates);
    }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    if (this.flatpickrInstance) {
      this.flatpickrInstance.destroy();
    }
  }
  formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  handleDateChange = date => {
    if (typeof this.props.onChangeDateInner === 'function') {
      this.props.onChangeDateInner({}, {
        value: this.formatDate(date[0]),
        date: date[0]
      });
    }
  };
  handleInputChange = e => {
    const value = e.target.value;
    this.setState({
      date: value
    });
    if (typeof value === 'string' && value !== '__.__.____' && !value.includes('_')) {
      this.props.onChangeDateInner({}, {
        date: value,
        value: value
      });
    } else {
      this.props.onChangeDateInner({}, {
        date: null,
        value: value
      });
    }
  };
  getOptions() {
    let options = {
      dateFormat: 'd.m.Y',
      allowInput: true,
      disableMobile: 'true',
      ...this.props
    };
    if (this.props.defaultDate) {
      options.defaultDate = this.props.defaultDate;
    }
    return options;
  }
  render() {
    const {
      Input,
      componentsLoaded
    } = this.state;
    return componentsLoaded ? /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      className: `${this.props.className} ${this.props.disabled ? 'disabled' : ''}`,
      disabled: this.props.disabled
    }, /*#__PURE__*/React.createElement(InputContainer, {
      needMargin: true,
      focus: this.state.focused,
      ref: this.wrapperRef // Attach ref directly to the container
    }, this.props.disabled ? this.renderInput() : /*#__PURE__*/React.createElement(Input, {
      id: this.props.id,
      style: this.props.style,
      disabled: this.props.disabled,
      value: this.state.date,
      placeholder: this.props.placeholder,
      autoComplete: this.props.autoComplete || 'off',
      options: this.getOptions(),
      className: this.props.className,
      onReady: (_, __, fp) => {
        this.flatpickrInstance = fp; // Save the flatpickr instance
        fp.calendarContainer.id = `${this.props.id}-container`;
      },
      onChange: this.handleDateChange,
      onOpen: () => this.setState({
        focused: true,
        hasError: false
      }),
      onClose: () => this.setState({
        focused: false,
        hasError: false
      }),
      render: ({
        id,
        ...props
      }, ref) => /*#__PURE__*/React.createElement(MaskedStyledInput, {
        autoComplete: "off",
        mask: "99.99.9999",
        id: id,
        value: props.value,
        onChange: this.handleInputChange,
        style: props.style,
        className: props.className,
        onFocus: () => this.setState({
          focused: true,
          hasError: false
        })
      }, inputProps => /*#__PURE__*/React.createElement("input", _extends({
        ref: ref
      }, inputProps)))
    }), this.renderPlaceholder(), this.props.icon !== false && /*#__PURE__*/React.createElement("img", {
      className: "calendar",
      src: calendarSvg,
      alt: ""
    }), this.renderTooltipError())) : null;
  }
}