import React, { useRef, useState } from 'react';
import { Body, Checkbox as StyleCheckbox } from './newstyles';
const Checkbox = ({
  // Здесь прописываем дефолты
  value = 1,
  name = '',
  toggleCallback = () => {},
  textStyle,
  id,
  checked,
  checkboxStyle,
  style,
  form,
  text
}) => {
  // Локальное состояние для хранения value
  const [localValue, setLocalValue] = useState(value || '');

  // Реф на <input>
  const inputRef = useRef(null);

  // Клик по тексту лейбла, чтобы активировать чекбокс
  const handleClick = e => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const combinedTextStyle = textStyle ? {
    ...textStyle
  } : {};
  const combinedCheckboxStyle = checkboxStyle ? {
    ...checkboxStyle
  } : {
    backgroundColor: '#4378FF',
    border: '2px solid #4378FF'
  };
  return /*#__PURE__*/React.createElement(StyleCheckbox, {
    id: id,
    style: style
  }, /*#__PURE__*/React.createElement("label", {
    className: "checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: checked ? 'active' : '',
    onChange: toggleCallback,
    name: name,
    type: "checkbox",
    value: localValue,
    id: id,
    checked: checked
  }), /*#__PURE__*/React.createElement("span", {
    className: "rotate-container",
    style: {
      borderRadius: form === 'round' ? '10px' : '6px',
      display: 'flex',
      ...combinedCheckboxStyle
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rotate"
  })), text && /*#__PURE__*/React.createElement(Body, {
    style: combinedTextStyle,
    className: "text",
    onClick: handleClick
  }, text)));
};
export default Checkbox;