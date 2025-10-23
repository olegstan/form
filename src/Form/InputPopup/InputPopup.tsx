import React, {useEffect, useState} from 'react';
import {Container, PopupContainer} from './styles';

const InputPopup = ({ trigger, children }: {
  trigger: any,
  children: any,
}) => {
  const [Popup, setPopup] = useState<any>(null);

  useEffect(() => {
    import('reactjs-popup').then((module) => {
      setPopup(() => module.default);
    });
  }, []);

  if (!Popup) {
    return <Container>{trigger}</Container>;
  }

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