import React from 'react';
import SlimInput from "../SlimInput";
import Input from "../Input";
import MaskedInput from "../MaskedInput";
import Number from "../Number";
import TextArea from "../TextArea";

export default function formInput(Base)
{
  class FormInput extends Base
  {
    renderHiddenInput({field, disabled = true, id} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <Input
        id={id ? id : this.getPrefix() + field}
        style={{
          display: 'none'
        }}
        type="text"
        name={field}
        disabled={this.getDisabled(disabled)}
        value={value}
        onChange={(e, {name, value}) => {

        }}
        placeholder={''}
        errors={this.state.formErrors}
      />
    }

    renderInput({field, text, disabled = false, callback, size, style, className, onKeyPress = () => {}, onKeyDown = () => {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <Input
        id={this.getPrefix() + field}
        style={style}
        type="text"
        name={field}
        size={size}
        className={className}
        disabled={this.getDisabled(disabled)}
        value={value}
        onChange={(e, {name, value}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value);
            }
          });
        }}
        onKeyPress={(e) => {
          if (typeof onKeyPress === 'function') {
            onKeyPress(e);
          }
        }}
        onKeyDown={(e) => {
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
          }
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {}}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }

    renderSlimInput({field, text, disabled = false, callback, size, style, className, onKeyPress = () => {}, onKeyDown = () => {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <SlimInput
        id={this.getPrefix() + field}
        style={style}
        type="text"
        name={field}
        className={className}
        size={size}
        disabled={this.getDisabled(disabled)}
        value={value}
        onChange={(e, {name, value}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value);
            }
          });
        }}
        onKeyPress={(e) => {
          if (typeof onKeyPress === 'function') {
            onKeyPress(e);
          }
        }}
        onKeyDown={(e) => {
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
          }
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {}}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }

    renderMaskedInput({field, text, mask, disabled = false, autoComplete = 'off', callback, className, onKeyPress = () => {}, onKeyDown = () => {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <MaskedInput
        id={this.getPrefix() + field}
        type="text"
        name={field}
        mask={mask}
        className={className}
        autoComplete={autoComplete}
        disabled={this.getDisabled(disabled)}
        value={value}
        onChange={(e, {name, value}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value);
            }
          });
        }}
        onKeyPress={(e) => {
          if (typeof onKeyPress === 'function') {
            onKeyPress(e);
          }
        }}
        onKeyDown={(e) => {
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
          }
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {}}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }

    renderInputNumber({field, text, decimals = false, disabled = false, callback, size, style, max = false, min = false, onKeyPress = () => {}, onKeyDown = () => {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <Number
        id={this.getPrefix() + field}
        type="text"
        autoComplete={'off'}
        inputmode="numeric"
        decimals={decimals}
        name={field}
        style={style}
        size={size}
        max={max}
        min={min}
        disabled={this.getDisabled(disabled)}
        value={value}
        onKeyPress={(e) => {
          if (typeof onKeyPress === 'function') {
            onKeyPress(e);
          }
        }}
        onKeyDown={(e) => {
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
          }
        }}
        onChange={(e, {name, value}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(value);
            }
          });
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        onOutsideClick={() => {}}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }

    renderTextArea({field, text, disabled = false, className, onKeyPress = () => {}, onKeyDown = () => {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <TextArea
        id={this.getPrefix() + field}
        name={field}
        className={className}
        disabled={this.getDisabled(disabled)}
        value={value}
        onChange={(e, {name, value}) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, value);

            return prv;
          });
        }}
        onKeyPress={(e) => {
          if (typeof onKeyPress === 'function') {
            onKeyPress(e);
          }
        }}
        onKeyDown={(e) => {
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
          }
        }}
        onBlur={() => {
          this.setState((prv) => {
            this.clearFormError(prv, field);

            return prv;
          });
        }}
        placeholder={text}
        errors={this.state.formErrors}
      />
    }
  }

  return FormInput;
}
