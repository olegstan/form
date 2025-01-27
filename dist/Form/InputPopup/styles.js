import styled from 'styled-components';
export const Container = styled.div`
    cursor: pointer;
    height: 100%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    position: absolute;
    right: -19px;
    z-index: 1000;
    top: -50%;
    
    img{
      padding: 0 12px;
    }
`;
export const PopupContainer = styled.div`
    text-align: center;
    transition: all 0.4s ease 0s;
    pointer-events: none;
    user-select: none;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: rgb(38 38 38 / 4%) 0 1px 2px, rgb(38 38 38 / 16%) 0px 4px 8px;
    padding: 12px;
    
`;