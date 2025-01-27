import React, { Component } from 'react';
import { Container, PopupContainer } from './styles';
import Popup from 'reactjs-popup';
const InputPopup = ({
  trigger,
  children
}) => {
  const handleClose = () => {
    // Логика закрытия, если потребуется
  };
  return /*#__PURE__*/React.createElement(Popup, {
    on: 'hover',
    trigger: /*#__PURE__*/React.createElement(Container, null, trigger),
    position: "bottom",
    contentStyle: {
      zIndex: 1000
    },
    onClose: handleClose // Добавьте обработку закрытия при необходимости
  }, close => /*#__PURE__*/React.createElement(PopupContainer, {
    onClick: e => e.stopPropagation()
  }, children));
};
export default InputPopup;