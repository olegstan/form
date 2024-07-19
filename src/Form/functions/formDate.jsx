import React from 'react';
import Date from "../Date";
import DateTime from "../DateTime";
import moment from "moment";

export default function formDate(Base)
{
  class FormDate extends Base
  {
    renderDateInput({field, text, format = 'DD.MM.YYYY', disabled = false, callback, size, className, style = {}, containerStyle = {}, placeholderStyle = {}, icon = false, value, defaultDate, outsideCallback} = {}) {
      return <Date
        id={this.getPrefix() + field}
        icon={icon}
        name={field}
        size={size}
        style={style}
        defaultDate={defaultDate}
        containerStyle={containerStyle}
        placeholderStyle={placeholderStyle}
        className={className}
        disabled={this.getDisabled(disabled)}
        format={format}
        value={(value ? value : this.getLink(field + '_user'))}
        onChangeDateInner={(e, { name, value, date}) => {
          if(typeof value === 'string' && value !== '__.__.____' && !value.includes('_'))
          {
            console.log(name)
            console.log(value)
            console.log(date)

            let momentDate = moment(date, 'DD.MM.YYYY');

            console.log(momentDate)
            console.log(momentDate.format('DD.MM.YYYY'))

            // Создаем новые значения для проверки изменений
            let newField = momentDate && momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : '';
            let newFieldUser = momentDate && momentDate.isValid() ? momentDate.format('DD.MM.YYYY') : value;
            let newFieldDate = momentDate && momentDate.isValid() ? momentDate.toDate() : null;

            this.setState((prv) => {
              if(!date)
              {
                this.setValueInput(prv, field, '');
                this.setValueInput(prv, field + '_date', null);
              }

              // Проверяем изменения
              if (prv.form[field + '_date'] === newField) {
                // Значение не изменилось, выходим без вызова setState и callback
                return null;
              }

              // Значения изменились, обновляем состояние
              this.setValueInput(prv, field, newField);
              this.setValueInput(prv, field + '_user', newFieldUser);
              this.setValueInput(prv, field + '_date', newFieldDate);

              return prv;
            }, () => {
              // callback вызывается только если setState произошел
              if (typeof callback === 'function') {
                callback(newFieldUser, newFieldDate);
              }
            })
          }else{
            this.setState((prv) => {
              if(!date)
              {
                this.setValueInput(prv, field, '');
                this.setValueInput(prv, field + '_date', null);
              }

              return prv;
            }, () => {
              // callback вызывается только если setState произошел
              if (typeof callback === 'function') {
                callback('', null);
              }
            })
          }
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

    renderDateTimeInput({field, text, format = 'DD.MM.YYYY HH:mm:ss', disabled = false, callback, size, outsideCallback, className, style = {}, containerStyle = {}, placeholderStyle = {}, icon = false} = {}) {
      return <DateTime
        id={this.getPrefix() + field}
        type="text"
        icon={icon}
        name={field}
        size={size}
        style={style}
        containerStyle={containerStyle}
        placeholderStyle={placeholderStyle}
        className={className}
        disabled={this.getDisabled(disabled)}
        format={format}
        value={this.getLink(field + '_user')}
        onChangeDateInner={(e, { name, value, date}) => {

          if(typeof value === 'string' && value !== '__.__.____ __:__:__' && !value.includes('_'))
          {
            this.setState((prv) => {
              if(!date)
              {
                this.setValueInput(prv, field, '');
                this.setValueInput(prv, field + '_date', null);
                this.setValueInput(prv, field + '_datetime', null);
              }

              let momentDate = moment(date, format);

              // Создаем новые значения для проверки изменений
              let newField = momentDate && momentDate.isValid() ? momentDate.format('YYYY-MM-DD HH:mm:ss') : '';
              let newFieldUser = momentDate && momentDate.isValid() ? momentDate.format('DD.MM.YYYY HH:mm:ss') : value;
              let newFieldDate = momentDate && momentDate.isValid() ? momentDate.toDate() : null;
              let newFieldDatetime = momentDate && momentDate.isValid() ? momentDate.toDate() : null;


              // Проверяем изменения только одного поля
              if (prv.form[field + '_datetime'] === newField) {
                // Значение не изменилось, выходим без вызова setState и callback
                return null;
              }

              // Значение изменилось, обновляем состояние
              this.setValueInput(prv, field, newField);
              this.setValueInput(prv, field + '_user', newFieldUser);
              this.setValueInput(prv, field + '_date', newFieldDate);
              this.setValueInput(prv, field + '_datetime', newFieldDatetime);

              return prv;
            }, () => {
              // callback вызывается только если setState произошел
              if (typeof callback === 'function') {
                callback(value, date);
              }
            });
          }else{
            this.setState((prv) => {
              if(!date)
              {
                this.setValueInput(prv, field, '');
                this.setValueInput(prv, field + '_date', null);
                this.setValueInput(prv, field + '_datetime', null);
              }

              return prv;
            }, () => {
              // callback вызывается только если setState произошел
              if (typeof callback === 'function') {
                callback('', null);
              }
            })
          }
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
        onChangeDateInner={(e, { name, value, date}) => {
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
