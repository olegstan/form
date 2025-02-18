import styled, {keyframes} from 'styled-components'
import zindex from "../../../interface/zindex";

export const StyledOption = styled.div`
  align-items: center;
  color: ${({theme}) => theme.selectOptionTextColor};
  line-height: 24px;
  display: flex;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  text-align: left;
  flex-wrap: wrap;
  cursor: pointer;
  transition: backtground-color 0.2s ease, transform 0.2s ease;

  background-color: ${({theme}) => theme.inputContainerDisabledBackground};

  span {
    text-align: left;
    font-size: 14px;
    width: 100%;
    padding: 4px 8px;
    margin: 10px 0;
  }

  &:last-child span {
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  span:hover {
    background-color: ${({ theme }) => theme.selectOptionBackgroundHovererColor};
    border-radius: 8px;
  }
`

export const OptionsWrapper = styled.div`
  position: absolute;
  border-radius: 0 0 0 12px; /* Убираем закругление правого нижнего угла */
  top: 50px;
  left: 0;
  width: 100%;
  box-shadow: 0 20px 48px ${({ theme }) => theme.selectShadowColor};
  background-color: ${({ theme }) => theme.selectWrapperOptionBackgroundColor};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: ${zindex.input};
  display: flex;
  flex-direction: column;
  max-height: 250px;
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};

  /* Анимация открытия */

  /* При появлении (active: true) плавное изменение, при скрытии сразу */
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) =>
          active ? 'translateY(0)' : 'translateY(-10px)'};
  transition: ${({ active }) =>
          active ? 'opacity 0.35s ease, transform 0.35s ease' : 'none'};

  &::-webkit-scrollbar {
    width: 8px; /* Фиксированная ширина скроллбара */
    background-color: transparent; /* Прозрачный фон для области скроллбара */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.selectScrollThumbColor}; /* Цвет ползунка */
    border-radius: 0 0 8px 0; /* Закругляем только правый нижний угол */
    border: 2px solid transparent; /* Эффект внутреннего отступа */
    background-clip: padding-box; /* Ограничение фона ползунка */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.selectScrollThumbHoverColor || theme.selectScrollThumbColor}; /* Цвет ползунка при наведении */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Прозрачный трек */
  }
`
