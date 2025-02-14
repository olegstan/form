import React from 'react';
import styled from 'styled-components'
import {sharedInputStyle} from "../../sharedStyles";

export const StyledSelect = styled.div`
  width: 100%;
  cursor: pointer;
  height: 50px;
  position: relative;
  // background-color: ${({theme}) => theme.selectBackgroundColor};
  // border-radius: 7px;
  
  //тут может быть div если вдруг вместо текста передали иконки или друглй элемент
  & > input, & > div.input{
    width: 100%;
    padding: 0 !important;
  }

  ${sharedInputStyle}
`