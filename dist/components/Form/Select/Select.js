"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-int.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _newstyles = require("./newstyles");
var _selectContainerStyle = require("../styles/selectContainerStyle");
var _InputPopup = _interopRequireDefault(require("../InputPopup/InputPopup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Select extends _BaseInput.default {
  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      hasError: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  renderSelected() {
    const {
      items,
      selected
    } = this.props;
    let name = null;
    if (!selected) {
      return this.props.default;
    }
    items.map(item => {
      if (parseInt(selected.id) === parseInt(item.id)) {
        name = item.name;
      }
      return;
    });
    if (!name) {
      return this.props.default;
    }
    if (name.length > this.props.textLength) {
      return name.slice(0, this.props.textLength - 1) + '...';
    }
    return name;
  }
  handleShowSelect(select) {
    if (!this.props.disabled) {
      this.setState({
        select: select,
        hasError: false
      });
    }
  }
  getArrow() {
    if (this.props.className === 'style1') {}
    return require('../../assets/arrow.svg').default;
  }
  render() {
    const {
      items,
      handle,
      selected
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #EF5E70'
    } : {};
    let resItems = items ? items.filter(item => {
      if (selected) {
        if (selected.id === item.id) {
          return false;
        }
      }
      return true;
    }) : [];
    return /*#__PURE__*/_react.default.createElement(_selectContainerStyle.Container, {
      size: this.props.size,
      className: this.props.className + ' ' + (this.state.select ? 'select' : ''),
      style: this.getContainerStyle()
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputWrapper, {
      ref: this.setWrapperRef,
      className: 'wrapper ' + (this.state.select ? 'select' : ''),
      style: focus,
      id: this.props.id + '-wrapper'
    }, /*#__PURE__*/_react.default.createElement(_newstyles.Selected, {
      id: this.props.id,
      className: this.props.className + ' selected',
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), resItems.length > 0 ? this.state.select && /*#__PURE__*/_react.default.createElement(_newstyles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: true
    }, resItems.map((item, key) => {
      let shortName = '';
      if (item.name && item.name.length > this.props.textLength) {
        shortName = item.name.substr(0, this.props.textLength - 1) + '...';
      } else {
        shortName = item.name;
      }
      return /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
        key: item.id,
        id: this.props.id + '-' + item.id,
        className: this.props.className + ' item',
        onClick: () => {
          handle(item);
          this.handleShowSelect(false);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, shortName));
    })) : this.state.select && /*#__PURE__*/_react.default.createElement(_newstyles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: true
    }, /*#__PURE__*/_react.default.createElement(_newstyles.Item, {
      className: this.props.className + ' item',
      onClick: () => {
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, "\u041D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"))), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', /*#__PURE__*/_react.default.createElement("img", {
      className: "arrow",
      src: this.getArrow(),
      alt: "",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
      trigger: /*#__PURE__*/_react.default.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('../../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : ''));
  }
}
var _default = exports.default = Select;