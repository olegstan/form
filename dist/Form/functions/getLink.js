"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLink;
require("core-js/modules/es.parse-int.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getLink(Base) {
  class GetLink extends Base {
    clearFormError(prv, field) {
      if (prv.formErrors && typeof prv.formErrors[field] !== 'undefined') {
        prv.formErrors[field] = [];
      }
    }
    getPrefix() {
      return '';
    }
    getDisabled(bool) {
      if (bool === true) {
        return true;
      }
      if (bool === false) {
        return this.state.edited;
      }
    }
    getLink(field) {
      let parts = field.split('.');
      let link = this.state.form;
      if (parts.length === 1) {
        link = link[field];
      } else {
        for (let i = 0; i < parts.length; i++) {
          if (i + 1 === parts.length) {
            link = link[parts[i]];
          } else {
            if (parts[i].isNumber()) {
              parts[i] = parseInt(parts[i]);
            }
            link = link[parts[i]];
          }
        }
      }
      return link;
    }
    setValueInput(prv, field, value) {
      let parts = field.split('.');
      if (parts.length === 1) {
        prv.form[field] = value;
      } else {
        let linkField = prv.form;
        for (let i = 0; i < parts.length; i++) {
          if (i + 1 === parts.length) {
            linkField[parts[i]] = value;
          } else {
            if (parts[i].isNumber()) {
              parts[i] = parseInt(parts[i]);
            }
            linkField = linkField[parts[i]];
          }
        }
      }
    }
  }
  return GetLink;
}