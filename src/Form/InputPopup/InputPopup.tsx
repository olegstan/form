import React from 'react';
//@ts-ignore
import {Container, PopupContainer} from './styles'
// @ts-ignore
import Popup from 'reactjs-popup';

const InputPopup = ({ trigger, children }: {
  trigger: any,
  children: any,
}) => {
  return (
    //@ts-ignore
    <Popup
      on={'hover'}
      trigger={<Container>{trigger}</Container>}
      //@ts-ignore
      position="bottom"
      contentStyle={{ zIndex: 1000 }}
    >
      //@ts-ignore
      {(close: any) => (
        <PopupContainer onClick={(e: any) => e.stopPropagation()}>
          {children}
        </PopupContainer>
      )}
    </Popup>
  );
};

export default InputPopup;