import React from 'react';
import styled from 'styled-components'
import zindex from "../../../interface/zindex";

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