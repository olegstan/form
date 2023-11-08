import styled from 'styled-components';
import { sharedItemStyle, sharedSelectedStyle, sharedSelectStyle, sharedSelectWrapperStyle } from '../newstyles';
export const InputWrapper = styled.div`
    ${sharedSelectWrapperStyle}
`;
export const Selected = styled.div`
    ${sharedSelectedStyle}
`;
export const Select = styled.div`
  ${sharedSelectStyle}
`;
export const Item = styled.div`
  ${sharedItemStyle}
`;
export const SubItem = styled.div`
  align-items: center;
  color: #000;
  transition: all .3s ease;
  cursor: pointer;
  line-height: 48px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;

  &:hover {
    background-color: #bdc4e5;
    border-bottom: 1px solid #FE9347;
  }
  
  &:last-child {
    border-bottom: 0;
  }
`;