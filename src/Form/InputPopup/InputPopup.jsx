import React, {Component} from 'react';
import {Container, PopupContainer} from './styles'
import Popup from 'reactjs-popup';

const InputPopup = ({ trigger, children }) => {
  const handleClose = () => {
    // Логика закрытия, если потребуется
  };

  return (
    <Popup
      on={'hover'}
      trigger={<Container>{trigger}</Container>}
      position="bottom"
      contentStyle={{ zIndex: 1000 }}
      onClose={handleClose} // Добавьте обработку закрытия при необходимости
    >
      {(close) => (
        <PopupContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </PopupContainer>
      )}
    </Popup>
  );
};

export default InputPopup;