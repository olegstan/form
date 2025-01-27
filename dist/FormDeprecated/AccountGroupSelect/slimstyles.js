import styled from 'styled-components';
import { sharedItemStyle, sharedSelectedStyle, sharedSelectStyle, sharedSelectWrapperStyle, sharedSubItemStyle } from '../newslimstyles';
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

  span:hover{
    background-color: #EFF2F5;
  }

  &.style2 span:hover
  {
    background-color: #414250;
  }
`;
export const Add = styled.div`
  ${sharedItemStyle}
  
  align-items: center;
  color: #000;
  cursor: pointer;
  line-height: 40px;
  display: flex;
  padding: 0 15px;
  border-bottom: 1px #fff solid !important;
  user-select: none;

  span{
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
  }

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
    //background-color: ;
  }
`;
export const HeaderItem = styled.div`
  align-items: center;
  color: #4378FF;
  cursor: pointer;
  line-height: 24px;
  display: flex;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  text-align: left;
  background-color: #EFF2F5;
  flex-wrap: wrap;
  border-bottom: 1px solid #E1E6EC;

  span{
    text-align: left;
    font-size: 14px;
    width: 100%;
    padding: 4px 8px;
    margin: 10px 0;
  }
`;
export const SubItem = styled.div`
  ${sharedSubItemStyle}
`;