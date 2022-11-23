import styled from 'styled-components'
import {
  sharedInputStyle,
  sharedItemStyle,
  sharedSearchContainer,
  sharedSearchContainerStyle,
  sharedSearchInputWrapperStyle,
  sharedSelectedStyle,
  sharedSelectStyle
} from './../newstyles'

export const Container = styled.div`
  ${sharedSearchContainer}
`

export const InputWrapper = styled.div`
    ${sharedSearchInputWrapperStyle}
`

export const Selected = styled.div`
    ${sharedSelectedStyle}
`

export const Select = styled.div`
  ${sharedSelectStyle}
`

export const Item = styled.div`
  ${sharedItemStyle}
  
  span:hover{
    background-color: #EFF2F5;
  }
`

export const Input = styled.input`
    ${sharedInputStyle}
`

export const SubItem = styled.div`
  align-items: center;
  color: #000;
  transition: all .3s ease;
  cursor: pointer;
  line-height: 38px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px 0 50px;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
  flex-basis: 100%;
  background-color: #fafafa !important;
  text-align: left;
  
  &:hover {
    //background-color: #bdc4e5;
    //border-bottom: 1px solid #FE9347;
  }
  
  &:last-child {
    border-bottom: 0;
    margin-bottom: 15px;
  }
`

export const InputContainer = styled.div`
    ${sharedSearchContainerStyle}
`