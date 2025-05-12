import styled from 'styled-components'
import zindex from "../../../interface/zindex";

let closeHovered = require('./../../../assets/close_white_hovered.svg').default;

export const StyledSelect = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  line-height: 13px;
  user-select: none;
  color: ${({theme}) => theme.inputTextColor};
  z-index: ${zindex.input};
  transition: border-color .25s ease-in-out;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  border-radius: 6px;
`


export const TagText = styled.div`
    display: inline-block !important;
    width: auto !important;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 500;
    color: #7F818D;
    cursor: pointer;
    background-color: #EFF2F5;
    border-radius: 8px;
    padding: 0px 5px 0px 8px;
    margin: 2px;
    
    div{
        margin-left: 4px;
        display: inline-block !important;
        background-image: url(${close});
        cursor: pointer;
        width: 12px !important; 
        height: 12px !important;
        background-position: center;
        background-repeat: no-repeat;
        
        :hover{
          background-image: url(${closeHovered});
        }
    }
`