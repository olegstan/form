import React from 'react';
import SlimInput from "../SlimInput";
import Input from "../Input";
import MaskedInput from "../MaskedInput";
import NumberInput from "../NumberInput";
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
        containerStyle={{
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

    renderInput({field, type = 'text', text, disabled = false, callback, size, style = {}, containerStyle = {}, placeholderStyle = {}, className, onKeyPress = () => {}, onKeyDown = () => {},value} = {})
    {
      let link = this.getLink(field);
      value = value ? value : (link === null ? '' : link);

      return <Input
        id={this.getPrefix() + field}
        style={style}
        containerStyle={containerStyle}
        placeholderStyle={placeholderStyle}
        type={type}
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

    renderSlimInput({field, text, disabled = false, callback, size, style = {}, containerStyle = {}, placeholderStyle = {}, className, onKeyPress = () => {}, onKeyDown = () => {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <SlimInput
        id={this.getPrefix() + field}
        style={style}
        containerStyle={containerStyle}
        placeholderStyle={placeholderStyle}
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

    renderMaskedInput({field, text, mask, inputMask, disabled = false, autoComplete = 'off', callback, className, onKeyPress = () => {}, onKeyDown = () => {}, style = {}, containerStyle = {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <MaskedInput
        id={this.getPrefix() + field}
        type="text"
        name={field}
        mask={mask}
        inputMask={inputMask}
        style={style}
        containerStyle={containerStyle}
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

    renderInputNumber({field, text, decimals = false, disabled = false, callback, className, size, style = {}, containerStyle = {}, placeholderStyle = {}, max = false, min = false, onKeyPress = () => {}, onKeyDown = () => {}, icon = false} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <NumberInput
        id={this.getPrefix() + field}
        type="text"
        autoComplete={'off'}
        inputmode="numeric"
        decimals={decimals}
        name={field}
        icon={icon}
        style={style}
        className={className}
        containerStyle={containerStyle}
        placeholderStyle={placeholderStyle}
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

    renderTextArea({field, text, rows = 3, disabled = false, className, onKeyPress = () => {}, onKeyDown = () => {}, style = {}, containerStyle = {}, placeholderStyle = {}} = {})
    {
      let link = this.getLink(field);
      let value = link === null ? '' : link;

      return <TextArea
        id={this.getPrefix() + field}
        name={field}
        className={className}
        rows={rows}
        disabled={this.getDisabled(disabled)}
        value={value}
        style={style}
        containerStyle={containerStyle}
        placeholderStyle={placeholderStyle}
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
