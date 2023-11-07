"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalForm = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _Form = _interopRequireDefault(require("./Form"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // import {Modal} from "../../interface/modal/Modal";
class ModalForm extends _Form.default {
  constructor(props) {
    super(props);
    /**
     *
     * @type {boolean}
     */
    _defineProperty(this, "closeModal", true);
    /**
     *
     * @type {boolean}
     */
    _defineProperty(this, "hiddenModal", false);
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
exports.ModalForm = ModalForm;
var _default = exports.default = ModalForm;