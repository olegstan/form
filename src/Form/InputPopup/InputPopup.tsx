import React from 'react';
import { Container, PopupContainer } from './styles';
import Popup from 'reactjs-popup';

// Определяем интерфейс для пропсов компонента
interface InputPopupProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const InputPopup: React.FC<InputPopupProps> = ({ trigger, children }) => {
  return (
      <Popup
          trigger={<Container>{trigger}</Container>}
          position="bottom center"
          on="hover"
          contentStyle={{ zIndex: 1000 }}
      >
        <>
          {((close: () => void) => (
              <PopupContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                {children}
              </PopupContainer>
          ))} {/* Обернутая функция */}
        </>
      </Popup>
  );
};

export default InputPopup;