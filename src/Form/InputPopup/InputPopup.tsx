import React from 'react';
import {Container, PopupContainer} from './styles'
// @ts-ignore
import Popup from 'reactjs-popup';

const InputPopup = ({ trigger, children }) => {
  return (
    <Popup
      on={'hover'}
      trigger={<Container>{trigger}</Container>}
      position="bottom"
      contentStyle={{ zIndex: 1000 }}
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