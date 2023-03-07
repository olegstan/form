import React from 'react';
import Checkbox from "../Checkbox";

export default function formCheckbox(Base)
{
  class FormCheckbox extends Base
  {
    renderCheckbox({text, checked, toggleCallback, id = null, style = {}, textStyle = {}} = {}) {
      return <Checkbox
        id={id}
        text={text}
        style={style}
        textStyle={textStyle}
        checked={checked}
        toggleCallback={toggleCallback}
      />
    }
  }

  return FormCheckbox;
}
