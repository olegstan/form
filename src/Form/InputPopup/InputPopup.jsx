import React, {Component} from 'react';
import {Container, PopupContainer} from './styles'
import Popup from 'reactjs-popup';

export default class InputPopup extends Component
{
  //TODO сделать чтобы закрывалось при клиие внутри или снаружи
  render()
  {
    return <Popup on={'hover'} trigger={<Container>{this.props.trigger}</Container>} position="bottom" contentStyle={{zIndex: 1000}}>
      {close => (
        <PopupContainer>
          {this.props.children}
        </PopupContainer>
      )}
    </Popup>
  }
}