import React from 'react';
import FileInput from "./../FileInput";
export default function formFile(Base) {
  class FormFileInput extends Base {
    renderFileInput({
      field,
      text,
      disabled = false,
      callback,
      size,
      style,
      className,
      onKeyPress = () => {},
      onKeyDown = () => {},
      valueText
    } = {}) {
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/React.createElement(FileInput, {
        id: this.getPrefix() + field,
        style: style,
        type: "text",
        name: field,
        size: size,
        valueText: valueText,
        className: className,
        disabled: this.getDisabled(disabled),
        value: value,
        onChange: (e, {
          name,
          value
        }) => {
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value);
            }
          });
        },
        onOutsideClick: () => {},
        placeholder: text,
        errors: this.state.formErrors
      });
    }
  }
  return FormFileInput;
}