"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
var _moment = _interopRequireDefault(require("moment/moment"));
var _Url = _interopRequireDefault(require("./../../../../helpers/Url"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class DateTime extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,
      Input: null,
      componentsLoaded: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   *
   */

  componentDidMount() {
    // Динамический импорт библиотеки Flatpickr
    Promise.all([Promise.resolve().then(() => _interopRequireWildcard(require('flatpickr'))), Promise.resolve().then(() => _interopRequireWildcard(require('react-flatpickr'))), Promise.resolve().then(() => _interopRequireWildcard(require('flatpickr/dist/l10n/ru.js'))), Promise.resolve().then(() => _interopRequireWildcard(require('flatpickr/dist/flatpickr.css')))]).then(_ref => {
      let [flatpickr, Flatpickr, {
        Russian
      }] = _ref;
      let url = _Url.default.getCurrentUrl();
      let lang = localStorage.getItem('language_id');
      if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
        try {
          flatpickr.default.localize(Russian);
        } catch (e) {
          console.error(e);
        }
      }

      // Определение компонента с применением стилей
      const DateStyledInput = (0, _styledComponents.default)(Flatpickr.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n              ", "\n            "])), _newstyles.sharedInputStyle);
      this.setState({
        componentsLoaded: true,
        Input: DateStyledInput
      });
    });
  }
  formatDate(date) {
    var month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  setDate(value, dateStr, instance, callback) {
    let date = null;
    if (value && value.length) {
      date = value[0];
    }
    if (date !== '' && date != null) {
      callback(date);
      this.props.onChange({}, {
        name: this.props.name,
        value: this.formatDate(date),
        date: date
      });
    } else {
      this.props.onChange({}, {
        name: this.props.name,
        value: null,
        date: null
      });
    }
    this.setState({
      hasError: false
    });
  }
  render() {
    const {
      Input,
      componentsLoaded
    } = this.state;
    let error = this.getError();
    let value = null;
    if (this.props.value && typeof this.props.value.getMonth === 'function') {
      value = this.props.value;
    }
    let options = _objectSpread(_objectSpread({}, {
      dateFormat: 'd.m.Y',
      allowInput: true,
      position: "auto",
      disableMobile: "true"
      // static: true
    }), this.props);
    if (this.props.defaultDate) {
      options.defaultDate = this.props.defaultDate;
    }
    return componentsLoaded ? /*#__PURE__*/_react.default.createElement(_containerStyle.Container, {
      style: this.getContainerStyle(),
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      disabled: this.props.disabled,
      onClick: e => {}
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, {
      needMargin: true,
      focus: this.state.focused
    }, /*#__PURE__*/_react.default.createElement(Input, {
      id: this.props.id,
      style: this.props.style,
      disabled: this.props.disabled,
      value: value,
      placeholder: this.props.placeholder,
      autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
      options: options,
      className: this.props.className,
      onReady: (_, __, fp) => {
        fp.calendarContainer.id = this.props.id + '-container';
      },
      onMonthChange: (value, dateStr, instance) => {
        if (dateStr) {
          this.setDate(value, dateStr, instance, date => {
            date.setMonth(instance.currentMonth);
          });
        }
      },
      onYearChange: (value, dateStr, instance) => {
        if (dateStr) {
          this.setDate(value, dateStr, instance, date => {
            date.setYear(instance.currentYear);
          });
        }
      },
      onKeyUp: e => {
        let value = e.target.value;
        if (value.length === 10) {
          let date = (0, _moment.default)(value, 'DD.MM.YYYY');
          if (date && date.isValid() && date.format('DD.MM.YYYY') === value) {
            this.setDate([date.toDate()], value, null, date => {});
          }
        }
      },
      onChange: (value, dateStr, instance) => {
        this.setDate(value, dateStr, instance, date => {});
      },
      onOpen: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onClose: () => {
        this.setState({
          focused: false,
          hasError: false
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      style: this.props.placeholderStyle,
      className: "placeholder " + (this.state.focused || this.props.value ? 'focused' : '')
    }, this.props.placeholder ? this.props.placeholder + ':' : '') : '', this.props.icon !== false && /*#__PURE__*/_react.default.createElement("img", {
      className: "calendar",
      src: require('./../assets/calendar.svg').default,
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
      trigger: /*#__PURE__*/_react.default.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('./../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : '')) : '';
  }
}
exports.default = DateTime;
_defineProperty(DateTime, "defaultProps", {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  mask: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: ''
});