import React, { useState, useEffect } from 'react';
import { Container, PopupContainer } from './styles';

const InputPopup = ({ trigger, children }) => {
  const [Popup, setPopup] = useState(null);

  useEffect(() => {
    import('reactjs-popup').then((module) => {
      setPopup(() => module.default);
    });
  }, []);

  if (!Popup) {
    return <Container>{trigger}</Container>;
  }

  //TODO сделать чтобы закрывалось при клике внутри или снаружи
  return (
      <Popup
          on={'hover'}
          trigger={<Container>{trigger}</Container>}
          position="bottom"
          contentStyle={{ zIndex: 1000 }}
      >
        {close => (
            <PopupContainer>
              {children}
            </PopupContainer>
        )}
      </Popup>
  );
};

export default InputPopup;