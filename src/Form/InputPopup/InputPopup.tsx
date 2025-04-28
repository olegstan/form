import React from 'react';
import {Container, PopupContainer} from './styles'
import Popup from 'reactjs-popup';

const InputPopup = ({ trigger, children }: {
  trigger: any,
  children: any,
}) => {
  return (
    <Popup
      on={'hover'}
      trigger={<Container>{trigger}</Container>}
      position="bottom center"
      contentStyle={{ zIndex: 1000 }}
    >
      {/*//@ts-ignore*/}
      {(close: void) => (
        <PopupContainer onClick={(e: any) => e.stopPropagation()}>
          {children}
        </PopupContainer>
      )}
    </Popup>
  );
};

export default InputPopup;