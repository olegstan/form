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

export const Container = styled.div`
  ${sharedSearchContainer}
  
  .plus{
      flex-basis: 50px;
      margin: 0 10px 0 30px;
      
      div {
        cursor: pointer;
        width: 32px;
        height: 32px;
        line-height: 35px;
        border-radius: 72px;
        background-color: #F5F5F5;
      }
      
      img{
        width: 16px;
        height: 16px;
      }
    }
  
`

export const InputWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #fff;
    border: 1px solid #D2D1D1;
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
    
    label.error{
      ${errorStyle}
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