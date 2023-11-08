import React from 'react';
import File from "../File";
export default function formFile(Base) {
  class FormFile extends Base {
    renderFileInput({
      field,
      text,
      disabled = false,
      callback,
      size,
      style,
      className,
      onKeyPress = () => {},
      onKeyDown = () => {}
    } = {}) {
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/React.createElement(File, {
        id: this.getPrefix() + field,
        style: style,
        type: "text",
        name: field,
        size: size,
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
  return FormFile;
}