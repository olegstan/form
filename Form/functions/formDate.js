import React from 'react';
import Date from "./../Date";
import DateTime from "./../DateTime";

export default function formDate(Base)
{
  class FormDate extends Base
  {
    renderDateInput({field, text, format = 'DD.MM.YYYY', disabled = false, callback, size} = {}) {
      return <Date
        id={this.getPrefix() + field}
        type="text"
        name={field}
        size={size}
        disabled={this.getDisabled(disabled)}
        format={format}
        value={this.getLink(field + '_date')}
        onChange={(e, { name, value, date}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_date', date);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value, date);
            }
          });
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {
          this.setState((prv) => {
            this.setValueInput(prv, field, '');
            this.setValueInput(prv, field + '_date', null);

            return prv;
          });
        }}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }

    renderDateTimeInput({field, text, format = 'DD.MM.YYYY', disabled = false, callback, size, outsideCallback} = {}) {
      return <DateTime
        id={this.getPrefix() + field}
        type="text"
        name={field}
        size={size}
        disabled={this.getDisabled(disabled)}
        format={format}
        value={this.getLink(field + '_datetime')}
        onChange={(e, { name, value, date}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_datetime', date);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value, date);
            }
          });
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {
          if(typeof outsideCallback === 'function')
          {
            outsideCallback();
          }
        }}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }

    renderDateTimeInputWithoutIcon({field, text, format = 'DD.MM.YYYY', disabled = false, callback, size, outsideCallback} = {}) {
      return <DateTime
        id={this.getPrefix() + field}
        type="text"
        icon={false}
        name={field}
        size={size}
        disabled={this.getDisabled(disabled)}
        format={format}
        value={this.getLink(field + '_datetime')}
        onChange={(e, { name, value, date}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_datetime', date);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value, date);
            }
          });
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {
          if(typeof outsideCallback === 'function')
          {
            outsideCallback();
          }
        }}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }
  }

  return FormDate;
}
