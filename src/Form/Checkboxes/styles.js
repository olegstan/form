import styled, { css } from "styled-components";

// Базовые стили для любого чекбокса
const baseCheckboxStyles = css`
    flex: 1;
    display: flex;
    padding: 5px 12px;
    align-items: center;
    color: ${({theme}) => theme.checkMarkColor};
    cursor: pointer;
    transition: opacity 0.3s;
    margin: 0;
    user-select: none;

    & > div {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0;
        color: #E9E9EA;
    }

    & > input {
        height: 0;
        width: 0;
        opacity: 0;
        z-index: -10;
        position: absolute;
    }

    & > span.rotate-container {
        border: 2px solid ${({theme}) => theme.checkMarkColor};
        height: 18px;
        width: 18px;
        box-sizing: border-box;
        margin-right: 10px;
        background-color: ${({theme}) => theme.checkMarkColor};
        display: flex;
        position: relative;
    }

    & > span > span {
        display: block;
        position: absolute;
        transform: rotate(45deg);
        width: 6px;
        height: 11px;
        top: 1px;
        z-index: 1000;
        left: 5px;
        box-sizing: border-box;
    }

    & > input:checked + span {
        background-color: ${({theme}) => theme.checkboxColor};
        border: 2px solid ${({theme}) => theme.checkboxColor};
    }

    & > input:checked + span > span {
        border-bottom: 3px solid ${({theme}) => theme.checkMarkColor};
        border-right: 3px solid ${({theme}) => theme.checkMarkColor};
    }

    &:hover {
        opacity: 0.7;
    }
`;

// Базовый стилизованный компонент
export const StyledBaseCheckbox = styled.div`
  ${baseCheckboxStyles}
`;

// Квадратный чекбокс (со скругленными углами)
export const StyledCheckbox = styled(StyledBaseCheckbox)`
  & > span.rotate-container {
    border-radius: 6px;
  }
`;

// Круглый чекбокс
export const StyledRoundCheckbox = styled(StyledBaseCheckbox)`
  & > span.rotate-container {
    border-radius: 50%;
  }
`;