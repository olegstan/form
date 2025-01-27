import React, { Component } from 'react';
import { Container, PopupContainer } from './styles';
import Popup from 'reactjs-popup';
export default class InputPopup extends Component {
  //TODO сделать чтобы закрывалось при клиие внутри или снаружи
  render() {
    return /*#__PURE__*/React.createElement(Popup, {
      on: 'hover',
      trigger: /*#__PURE__*/React.createElement(Container, null, this.props.trigger),
      position: "bottom",
      contentStyle: {
        zIndex: 1000
      }
    }, close => /*#__PURE__*/React.createElement(PopupContainer, null, this.props.children));
  }
}