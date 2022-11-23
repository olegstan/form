import React from 'react';
import {connect} from "react-redux";
import {Modal, ModalClose, ModalContent, ModalFooter, ModalHeader} from "../../interface/modal/Modal";
import Form from "./Form";
import Button from "../../components/Form/Button";

class ConfirmModal extends Form
{
  constructor(props) {
    super(props);

    this.state = {
      show: props.show ? props.show : false
    }
  }

  componentWillMount()
  {
    if(this.state.show)
    {
      this.handleShow();
    }
  }

  getModalName()
  {

  }

  getButtonText()
  {

  }

  handleShow() {
    this.setState({
      show: true
    }, () => {
      Modal.handleShow();
    });
  }

  render()
  {
    return <Modal
      show={this.state.show}
      trigger={this.props.trigger}
    >
      <ModalHeader>
        <div>{this.getModalName()}</div>
        <ModalClose id="close-icon" onClick={() => {this.handleClose()}}><div/></ModalClose>
      </ModalHeader>
      <ModalContent>
        <p>{this.props.text}</p>
      </ModalContent>
      <ModalFooter>
        <Button onClick={() => {
          this.handleClose()}
        }>{this.props.no}</Button>
        <Button onClick={() => {
          this.handleClose()
          this.props.action();
        }}>{this.props.yes}</Button>
      </ModalFooter>
    </Modal>;
  }
}

const enhance = connect(
  (state) => ({

  }),
  {}
)

export {ConfirmModal}

export default enhance(ConfirmModal);
