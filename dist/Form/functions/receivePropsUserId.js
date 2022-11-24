"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = receivePropsUserId;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function receivePropsUserId(Base) {
  class ReceivePropsUserId extends Base {
    componentWillReceiveProps(nextProps) {
      if (this.props.client === null && nextProps.client) {
        this.setState(prv => {
          prv.form.user_id = nextProps.client.id;
          return prv;
        });
      } else if (nextProps.client === null) {
        this.setState(prv => {
          prv.form.user_id = '';
          return prv;
        });
      } else if (nextProps.client && this.props.client && nextProps.client.id !== this.props.client.id) {
        this.setState(prv => {
          prv.form.user_id = nextProps.client.id;
          return prv;
        });
      }
    }
  }
  return ReceivePropsUserId;
}