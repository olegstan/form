import React from 'react';
// import {Modal} from "../../interface/modal/Modal";
import Form from "./Form";
class ModalForm extends Form {
  /**
   *
   * @type {boolean}
   */
  closeModal = true;
  /**
   *
   * @type {boolean}
   */
  hiddenModal = false;
  constructor(props) {
    super(props);
    this.state = {
      show: props.show ? props.show : false
    };
  }
  componentDidMount() {
    if (this.state.show) {
      this.handleShow();
    }
  }
  getButtonStyle() {
    if (this.props.buttonStyle) {
      return this.props.buttonStyle;
    }
    return {};
  }
  getModalName() {}
  getButtonText() {}
  getButtonId() {}
  handleClose() {
    this.setState(prv => {
      prv.form = this.getClearForm(this.props);
      prv.formErrors = {};
      prv.submitted = false;
      prv.edited = false;
      if (!this.hiddenModal) {
        prv.show = false;
      }
      return prv;
    }, () => {
      if (typeof this.props.closeModal === 'undefined') {
        if (this.closeModal === true) {
          document.getElementById('modal').classList.remove("visible");
        }
      } else {
        if (this.props.closeModal === true) {
          document.getElementById('modal').classList.remove("visible");
        }
      }
      if (typeof this.props.callback === 'function') {
        this.props.callback();
      }
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    });
  }
  getClearForm() {
    return {};
  }
  handleShow() {
    this.setState({
      show: true
    }, () => {
      document.getElementById('modal').classList.add("visible");
    });
  }
  handleEdit() {
    this.setState(prv => {
      prv.edited = false;
      return prv;
    });
  }
}
export { ModalForm };
export default ModalForm;