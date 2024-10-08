import React from 'react';
import Checkbox from "../Checkbox";

export default function formCheckbox(Base)
{
  class FormCheckbox extends Base
  {
    renderCheckbox({text, checked, toggleCallback, id = null, style = {}, textStyle = {}, form, checkboxStyle} = {}) {
      return <Checkbox
        id={id}
        text={text}
        style={style}
        form={form}
        textStyle={textStyle}
        checked={checked}
        checkboxStyle={checkboxStyle}
        toggleCallback={toggleCallback}
      />
    }
  }

  return FormCheckbox;
}
