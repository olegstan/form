"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _styles = require("./styles");
var _Money = _interopRequireDefault(require("../../Helpers/Money"));
var _selectContainerStyle = require("../styles/selectContainerStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class RelationGroupSelect extends _BaseInput.default {
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
      item.to_trades.map(trade => {
        if (selected.id === trade.id) {
          name = trade.active.type_text + this.getName(trade) + ' - ' + _Money.default.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date;
        }
        return;
      });
      return;
    });
    if (!name) {
      return this.props.default;
    }
    return name;
  }
  handleShowSelect(select) {
    this.setState({
      select: select,
      hasError: false
    });
  }
  getName(trade) {
    let name = trade.active.name;
    if (name) {
      var _name, _name2;
      if (((_name = name) === null || _name === void 0 ? void 0 : _name.length) > 30) {
        name = ' (' + name.slice(0, 29) + '...)';
      } else if (((_name2 = name) === null || _name2 === void 0 ? void 0 : _name2.length) === 0) {
        name = ' ';
      } else {
        name = ' (' + name + ')';
      }
    }
    return name;
  }
  render() {
    const {
      items,
      handle,
      selected
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #FF0000'
    } : {};
    return /*#__PURE__*/_react.default.createElement(_selectContainerStyle.Container, {
      style: focus
    }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_styles.Selected, {
      id: this.props.id,
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.renderSelected())), /*#__PURE__*/_react.default.createElement(_styles.Select, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, /*#__PURE__*/_react.default.createElement(_styles.Item, {
      key: 'default',
      onClick: () => {
        handle(null);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, this.props.default)), items.map((item, key) => {
      return /*#__PURE__*/_react.default.createElement(_styles.Item, {
        key: key
      }, /*#__PURE__*/_react.default.createElement("span", null, item.user_account ? item.user_account.name + ' ' + item.currency.code : ''), item.to_trades.length ? item.to_trades.map(trade => {
        return /*#__PURE__*/_react.default.createElement(_styles.SubItem, {
          id: this.props.id + '-' + trade.id,
          key: trade.id,
          onClick: () => {
            handle(trade);
            this.handleShowSelect(false);
          }
        }, trade.active.type_text + this.getName(trade) + ' - ' + _Money.default.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date);
      }) : /*#__PURE__*/_react.default.createElement(_styles.SubItem, null, "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"));
    })), selected && this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder ? this.props.placeholder + ':' : '') : '', /*#__PURE__*/_react.default.createElement("img", {
      className: "arrow",
      src: require('../../assets/arrow.svg').default,
      alt: ""
    }), error && /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error)));
  }
}
var _default = exports.default = RelationGroupSelect;