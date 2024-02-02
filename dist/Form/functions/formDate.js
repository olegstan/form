import React from 'react';
import Date from "../Date";
import DateTime from "../DateTime";
import moment from "moment";
export default function formDate(Base) {
  class FormDate extends Base {
    renderDateInput({
      field,
      text,
      format = 'DD.MM.YYYY',
      disabled = false,
      callback,
      size,
      className,
      style = {},
      containerStyle = {},
      placeholderStyle = {},
      icon = false,
      value,
      defaultDate
    } = {}) {
      return /*#__PURE__*/React.createElement(Date, {
        id: this.getPrefix() + field,
        icon: icon,
        name: field,
        size: size,
        style: style,
        defaultDate: defaultDate,
        containerStyle: containerStyle,
        placeholderStyle: placeholderStyle,
        className: className,
        disabled: this.getDisabled(disabled),
        format: format,
        value: value ? value : this.getLink(field + '_user'),
        onChange: (e, {
          name,
          value,
          date
        }) => {
          // if(typeof value === 'string' && value !== '__.__.____' && !value.includes('_'))
          // {
          this.setState(prv => {
            if (momentDate && momentDate.isValid()) {
              this.setValueInput(prv, field, momentDate.format('YYYY-MM-DD'));
              this.setValueInput(prv, field + '_user', momentDate.format('DD.MM.YYYY'));
              this.setValueInput(prv, field + '_date', date);
            } else {
              this.setValueInput(prv, field + '_user', '');
              this.setValueInput(prv, field + '_date', null);
            }
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value, date);
            }
          });
          // }
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        }
        // onOutsideClick={() => {
        //   this.setState((prv) => {
        //     this.setValueInput(prv, field, '');
        //     this.setValueInput(prv, field + '_date', null);
        //
        //     return prv;
        //   });
        // }}
        ,
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderDateTimeInput({
      field,
      text,
      format = 'DD.MM.YYYY',
      disabled = false,
      callback,
      size,
      outsideCallback,
      className,
      style = {},
      containerStyle = {},
      placeholderStyle = {},
      icon = false
    } = {}) {
      return /*#__PURE__*/React.createElement(DateTime, {
        id: this.getPrefix() + field,
        type: "text",
        icon: icon,
        name: field,
        size: size,
        style: style,
        containerStyle: containerStyle,
        placeholderStyle: placeholderStyle,
        className: className,
        disabled: this.getDisabled(disabled),
        format: format,
        value: this.getLink(field + '_user'),
        valueStr: this.getLink(field),
        onChange: (e, {
          name,
          value,
          date
        }) => {
          // if(typeof value === 'string' && value !== '__.__.____ __:__:__' && !value.includes('_'))
          // {
          this.setState(prv => {
            console.log(value);
            console.log(date);
            let momentDate = moment(date);
            if (momentDate && momentDate.isValid()) {
              this.setValueInput(prv, field, momentDate.format('YYYY-MM-DD HH:mm:ss'));
              this.setValueInput(prv, field + '_user', momentDate.format('DD.MM.YYYY HH:mm:ss'));
              this.setValueInput(prv, field + '_date', date);
              this.setValueInput(prv, field + '_datetime', date);
            } else {
              this.setValueInput(prv, field + '_user', '');
              this.setValueInput(prv, field + '_date', null);
              this.setValueInput(prv, field + '_datetime', date);
            }
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value, date);
            }
          });
          // }
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        }
        // onOutsideClick={() => {
        //   if(typeof outsideCallback === 'function')
        //   {
        //     outsideCallback();
        //   }
        // }}
        ,
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderDateTimeInputWithoutIcon({
      field,
      text,
      format = 'DD.MM.YYYY',
      disabled = false,
      callback,
      size,
      outsideCallback
    } = {}) {
      return /*#__PURE__*/React.createElement(DateTime, {
        id: this.getPrefix() + field,
        type: "text",
        icon: false,
        name: field,
        size: size,
        disabled: this.getDisabled(disabled),
        format: format,
        value: this.getLink(field + '_datetime'),
        onChange: (e, {
          name,
          value,
          date
        }) => {
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_datetime', date);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value, date);
            }
          });
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {
          if (typeof outsideCallback === 'function') {
            outsideCallback();
          }
        },
        placeholder: text,
        errors: this.state.formErrors
      });
    }
  }
  return FormDate;
}