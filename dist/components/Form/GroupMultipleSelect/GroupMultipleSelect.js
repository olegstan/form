"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _Checkbox = _interopRequireDefault(require("../Checkbox"));
var _styles = require("./styles");
var _selectContainerStyle = require("../styles/selectContainerStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class GroupMultipleSelect extends _BaseInput.default {
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
    let def = this.props.default;
    if (selected.length) {
      let selectedItms = [];
      items.map(item => {
        item.items.map(subItem => {
          if (this.props.selected.indexOf(subItem.id) !== -1) {
            selectedItms.push(subItem.name);
          }
          return;
        });
        return;
      });
      def = selectedItms.join(', ');
      if (def.length > 35) {
        def = def.slice(0, 34) + '...';
      }
    }
    return def;
  }
  handleShowSelect(select) {
    this.setState({
      select: select
    });
  }
  renderSelectAll() {
    const {
      handleAll
    } = this.props;
    if (this.props.selected.length) {
      return /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
        id: '',
        text: 'Снять все',
        checked: true,
        toggleCallback: e => {
          handleAll(false);
        }
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
        id: '',
        text: 'Выбрать все',
        checked: false,
        toggleCallback: e => {
          handleAll(true);
        }
      });
    }
  }
  render() {
    const {
      items,
      handle,
      selected,
      showAll
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #FF0000'
    } : {};
    return /*#__PURE__*/_react.default.createElement(_selectContainerStyle.Container, {
      className: this.props.className,
      style: this.props.style
    }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      ref: this.setWrapperRef,
      style: focus
    }, /*#__PURE__*/_react.default.createElement(_styles.Selected, {
      id: this.props.id,
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), /*#__PURE__*/_react.default.createElement(_styles.Select, {
      id: this.props.id + '-multi-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, showAll ? this.renderSelectAll() : '', items.map((item, key) => /*#__PURE__*/_react.default.createElement(_styles.Item, {
      key: item.id,
      id: this.props.id + '-' + item.id,
      className: this.props.className
    }, /*#__PURE__*/_react.default.createElement("span", null, item.name), item.items.map((subItem, subKey) => /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      key: subKey,
      id: this.props.id + '-subitem-' + subItem.id,
      text: subItem.name,
      checked: this.props.selected.indexOf(subItem.id) !== -1,
      toggleCallback: e => {
        handle(subItem);
      }
    }))))), selected && this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder ? this.props.placeholder + ':' : '') : '', /*#__PURE__*/_react.default.createElement("img", {
      className: "arrow",
      src: require('../../assets/arrow.svg').default,
      alt: "",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }), error && /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error)));
  }
}
var _default = exports.default = GroupMultipleSelect;