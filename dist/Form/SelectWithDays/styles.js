import styled from 'styled-components';
import { sharedItemStyle, sharedSelectedStyle, sharedSelectStyle } from '../newstyles';
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #c4c4c4;
  margin: 20px;
  box-sizing: content-box;
  min-width: 350px;
  flex: 1;
`;
export const InputWrapper = styled.div`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 11px;
  
  .arrow {
    position: absolute;
    right: 20px;
    top: 12px;
    width: 12px;
    height: 28px;
  }
  
  .error{
      font-size: 8px;
      line-height: 58px;
      display: block;
      width: 100%;
      position: absolute;
      top: 15px;
      left: 0;
      user-select: none;
      z-index: 2500;
      color: red;
      text-align: center;
      cursor: pointer;
    }
    
    .placeholder{
      font-size: 10px;
      line-height: 0.1;
      display: block;
      width: 100%;
      position: absolute;
      top: 5px;
      left: 25px;
      user-select: none;
      z-index: 2500;
      color: #7b7b7b;
      text-align: left;
    }
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
export const CalendarContainer = styled.div`
   margin: 20px;
   max-width: 490px;
    
    
`;
export const DaysContainer = styled.div`
    display: flex;
    
    
    
`;
export const DaysTitle = styled.div`
    text-align: left;
    width: 100%;
    margin-left: 10px;
    font-size: 16px;
`;
export const Day = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 20px;
    line-height: 30px;
    margin: 10px;
    cursor: pointer;
    
    &.active{
      background-color: #51A0FA;
      color: #fff;
    }
`;