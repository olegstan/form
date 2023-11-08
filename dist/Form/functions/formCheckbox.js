import React from 'react';
import Checkbox from "../Checkbox";
export default function formCheckbox(Base) {
  class FormCheckbox extends Base {
    renderCheckbox({
      text,
      checked,
      toggleCallback,
      id = null,
      style = {},
      textStyle = {},
      form
    } = {}) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        id: id,
        text: text,
        style: style,
        form: form,
        textStyle: textStyle,
        checked: checked,
        toggleCallback: toggleCallback
      });
    }
  }
  return FormCheckbox;
}