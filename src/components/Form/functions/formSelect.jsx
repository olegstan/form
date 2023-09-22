import React from 'react';
import Select from "../Select/Select";

export default function formSelect(Base)
{
  class FormSelect extends Base
  {
    getValueSelect(prv, field)
    {
      let parts = field.split('.');

      if(parts.length === 1)
      {
        return prv.form[field] ? prv.form[field] : null;
      }else{
        // let linkField = prv.form;
        // let linkFieldId = prv.form;
        // let value = null;
        // for(let i = 0; i < parts.length; i++)
        // {
        //   if((i + 1) === parts.length)
        //   {
        //     linkField[parts[i]] = item;
        //     value = item ? item.id : null;
        //   }else{
        //     if(parts[i].isNumber())
        //     {
        //       parts[i] = parseInt(parts[i]);
        //     }
        //
        //     linkField = linkField[parts[i]];
        //     linkFieldId = linkFieldId[parts[i]];
        //   }
        // }
      }
    }

    setValueSelect(prv, field, item)
    {
      let parts = field.split('.');

      if(parts.length === 1)
      {
        prv.form[field] = item;
        prv.form[field + '_id'] = item ? item.id : '';
      }else{
        let linkField = prv.form;
        let linkFieldId = prv.form;
        for(let i = 0; i < parts.length; i++)
        {
          if((i + 1) === parts.length)
          {
            linkField[parts[i]] = item;
            linkFieldId[parts[i] + '_id'] = item ? item.id : '';
          }else{
            if(parts[i].isNumber())
            {
              parts[i] = parseInt(parts[i]);
            }

            linkField = linkField[parts[i]];
            linkFieldId = linkFieldId[parts[i]];
          }
        }
      }
    }

    setValueSearch(prv, field, item)
    {
      let parts = field.split('.');

      if(parts.length === 1)
      {
        prv.form[field] = item;
        prv.form[field + '_id'] = item ? item.id : '';
        prv.form[field + '_search'] = item ? item.name : '';
      }else{
        let linkField = prv.form;
        let linkFieldId = prv.form;
        for(let i = 0; i < parts.length; i++)
        {
          if((i + 1) === parts.length)
          {
            linkField[parts[i]] = item;
            linkFieldId[parts[i] + '_id'] = item ? item.id : '';
            linkFieldId[parts[i] + '_search'] = item ? item.name : '';
          }else{
            if(parts[i].isNumber())
            {
              parts[i] = parseInt(parts[i]);
            }

            linkField = linkField[parts[i]];
            linkFieldId = linkFieldId[parts[i]];
          }
        }
      }
    }

    clearFormError(prv, field)
    {
      if(prv.formErrors && typeof prv.formErrors[field] !== 'undefined')
      {
        prv.formErrors[field] = [];
      }
    }

    renderSelect({field, items, text, defaultText, disabled = false, callback, size, textLength = 25, className, style = {}, containerStyle = {}} = {})
    {
      return <Select
        textLength={textLength}
        default={defaultText}
        placeholder={text}
        style={style}
        containerStyle={containerStyle}
        size={size}
        className={className}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        handle={(item) => {
          let prevValue = this.getValueSelect(this.state, field);
          this.setState((prv) => {
            this.setValueSelect(prv, field, item);
            this.clearFormError(prv, field + '_id');

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(item, prevValue);
            }
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderSlimSelect({field, items, text, defaultText, disabled = false, callback, size, textLength = 25, className, style = {}, containerStyle = {}} = {})
    {
      return <Select
        textLength={textLength}
        default={defaultText}
        placeholder={text}
        style={style}
        size={size}
        className={className}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        handle={(item) => {
          let prevValue = this.getValueSelect(this.state, field);
          this.setState((prv) => {
            this.setValueSelect(prv, field, item);
            this.clearFormError(prv, field + '_id');

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(item, prevValue);
            }
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderSelectStyle1({field, items, text, defaultText, disabled = false, callback, size, textLength = 25, className, style = {}, containerStyle = {}} = {})
    {
      console.log('-------')
      console.log(style)
      console.log(containerStyle)

      return this.renderSelect({...arguments[0], ...{className: 'style1'}})
    }
  }
  return FormSelect;
}
