import React from 'react';
import {Container, PopupContainer} from './styles'
// @ts-ignore
import Popup from 'reactjs-popup';

const InputPopup = ({ trigger, children }: {
  trigger: any,
  children: any,
}) => {
  return (
    <Popup
      on={'hover'}
      trigger={<Container>{trigger}</Container>}
      position="bottom"
      contentStyle={{ zIndex: 1000 }}
    >
      {(close: any) => (
        <PopupContainer onClick={(e: any) => e.stopPropagation()}>
          {children}
        </PopupContainer>
      )}
    </Popup>
  );
};

export default InputPopup;