import styled from 'styled-components'
import {
  errorStyle,
  placeholderStyle,
  sharedInputStyle,
  sharedItemStyle,
  sharedSearchContainer,
  sharedSelectedStyle,
  sharedSelectStyle
} from '../newstyles'

let close = require('./../../assets/close_white.svg').default;
let closeHovered = require('./../../assets/close_white_hovered.svg').default;

export const Container = styled.div`
  ${sharedSearchContainer}
  
  min-height: 46px;
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
    
    ${props => props.size === 'incomes-and-expenses' && `

      margin: 3px 0 !important;
  `}
`

export const InputWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    background-color: #fff;
    flex: 1;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    
    &.select{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 1px #fff solid !important;
    }
    
    input::placeholder
    {
        color: transparent;
    }
    
    img.arrow {
      position: absolute;
      right: 20px;
      top: 12px;
      width: 12px;
      height: 20px;
    }
    
    ${placeholderStyle}

    label.placeholder{
      z-index: auto !important;
    }
    
    label.placeholder{
      transition: .3s all;
      top: 29px;
      left: 12px;
    }
  
    label.placeholder.active{
      top: 10px;
      left: -20px;
      transform: translate(0.25em,-15%) scale(.8);;
    }
    
    label.error{
      ${errorStyle}
    }
    
    &.disabled{
      background-color: #FAFAFA !important;
    }
    
    ${props => props.size === 'small' && `
        width: 100%;
        max-width: 130px;
        height: 30px;
        line-height: 24px;
        margin: 3px 2px;
    `}
`

export const Selected = styled.div`
    ${sharedSelectedStyle}
`

export const Select = styled.div`
  ${sharedSelectStyle}
`

export const Item = styled.div`
  ${sharedItemStyle}
`

export const Input = styled.input`
    ${sharedInputStyle}
`