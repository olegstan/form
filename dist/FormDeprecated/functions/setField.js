"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = setField;var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment/moment"));
var _finhelper = require("finhelper");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}

function setField(Base)
{var
  SetField = /*#__PURE__*/function (_Base) {function SetField() {_classCallCheck(this, SetField);return _callSuper(this, SetField, arguments);}_inherits(SetField, _Base);return _createClass(SetField, [{ key: "setNumber", value:

      function setNumber(field, response, prv)
      {
        var value = response.data[field];

        prv.form[field] = this.convertToNumber(value);
      } }, { key: "convertToNumber", value:

      function convertToNumber(value) {
        // Обработка undefined и null
        if (typeof value === 'undefined' || value === null) {
          return ''; // Возвращаем пустую строку для таких случаев
        }

        // Преобразуем число в строку, если оно является числом
        if (typeof value === 'number') {
          value = value.toString();
        }

        // Проверяем, является ли значение строкой
        if (typeof value !== 'string') {
          console.error('Invalid input type:', _typeof(value));
          return ''; // Возвращаем пустую строку для недопустимых типов
        }

        // Удаляем пробелы и проверяем на пустую строку
        value = value.trim();
        if (value === '') {
          return '';
        }

        // Преобразуем строку обратно в число
        var num = Number(value);

        // Если число не является числом (NaN), возвращаем пустую строку
        if (isNaN(num)) {
          console.error('Invalid number:', value);
          return '';
        }

        // Определяем количество десятичных знаков
        var decimalCount = 0;
        if (num !== Math.floor(num)) {// Если число не целое
          // Находим количество десятичных знаков
          var parts = num.toFixed(20).split('.'); // Используем toFixed(20) для точности
          if (parts[1]) {
            decimalCount = parts[1].replace(/0+$/, '').length; // Убираем лишние нули
          }
        }

        // Форматируем число без экспоненциальной записи
        var formattedValue = num.toFixed(decimalCount);

        // Разделяем на целую и дробную части
        var _formattedValue$split = formattedValue.split('.'),_formattedValue$split2 = _slicedToArray(_formattedValue$split, 2),integerPart = _formattedValue$split2[0],_formattedValue$split3 = _formattedValue$split2[1],fractionalPart = _formattedValue$split3 === void 0 ? '' : _formattedValue$split3;

        // Возвращаем результат
        if (fractionalPart) {
          return "".concat(integerPart, ".").concat(fractionalPart);
        } else {
          return integerPart; // Если дробной части нет, возвращаем только целую часть
        }
      }

      /**
       *
       * @param field
       * @param array
       * @param response
       * @param prv
       */ }, { key: "setSearch", value:
      function setSearch(field, array, response, prv)
      {
        array && array.forEach(function (item)
        {
          if (item.id === response.data[field + '_id'])
          {
            prv.form[field + '_search'] = item.name;
            prv.form[field] = item;
            prv.form[field + '_id'] = item.id;
          }
        });
      }

      /**
       *
       * @param field
       * @param array
       * @param response
       * @param prv
       */ }, { key: "setSearchType", value:
      function setSearchType(field, array, response, prv, customField)
      {
        if (response.data[customField])
        {
          array && array.forEach(function (item)
          {
            if (item.id === response.data[field + '_id'] && item.type_id === response.data[customField])
            {
              prv.form[field + '_search'] = item.name;
              prv.form[field] = item;
              prv.form[field + '_id'] = item.id;
            }
          });
        } else {
          array && array.forEach(function (item)
          {
            if (item.id === response.data[field + '_id'])
            {
              prv.form[field + '_search'] = item.name;
              prv.form[field] = item;
              prv.form[field + '_id'] = item.id;
            }
          });
        }
      }

      /**
       *
       * @param field
       * @param array
       * @param response
       * @param prv
       */ }, { key: "setSearchReason", value:
      function setSearchReason(field, array, response, prv, customField)
      {
        if (response.data[customField])
        {
          array && array.forEach(function (item)
          {
            if (item.id === response.data[field + '_id'] && item.reason_id === response.data[customField])
            {
              prv.form[field + '_search'] = item.name;
              prv.form[field] = item;
              prv.form[field + '_id'] = item.id;
            }
          });
        } else {
          array && array.forEach(function (item)
          {
            if (item.id === response.data[field + '_id'])
            {
              prv.form[field + '_search'] = item.name;
              prv.form[field] = item;
              prv.form[field + '_id'] = item.id;
            }
          });
        }
      }

      /**
       *
       * @param field
       * @param array
       * @param response
       * @param prv
       */ }, { key: "setSelect", value:
      function setSelect(field, array, response, prv)
      {
        array && array.forEach(function (item)
        {
          if (item.id === response.data[field + '_id'])
          {
            prv.form[field] = item;
            prv.form[field + '_id'] = item.id;
          }
        });
      }

      /**
       *
       * @param field
       * @param array
       * @param response
       * @param prv
       */ }, { key: "setSelectAccount", value:
      function setSelectAccount(field, array, response, prv)
      {
        array && array.forEach(function (item)
        {
          item.accounts.map(function (subItem)
          {
            if (subItem.id === response.data[field + '_id'])
            {
              prv.form[field] = subItem;
              prv.form[field + '_id'] = subItem.id;
            }
          });
        });
      }

      /**
       *
       * @param field
       * @param array
       * @param response
       * @param prv
       */ }, { key: "setGroupSelect", value:
      function setGroupSelect(field, array, response, prv)
      {
























        // let selectedItem = null;
        //
        // console.log(prv)
        // array.forEach((item) =>
        // {
        //   console.log(item)
        //   if(item.items)
        //   {
        //     item.items.map((subItem) => {
        //       console.log(subItem)
        //     });
        //   }
        //   // if(item.id === response.data[field + '_id'])
        //   // {
        //     // prv.form[field] = item;
        //     // prv.form[field + '_id'] = item.id;
        //   // }
        // })
        //
        // if(selectedItem)
        // {
        //   prv.form[field] = selectedItem;
        //   prv.form[field + '_id'] = selectedItem.id;
        // }
      } /**
       *
       * @param field
       * @param response
       * @param prv
       */ }, { key: "setDate", value: function setDate(field, response, prv) {if (response.data[field + '_date'] && typeof response.data[field + '_date'] === 'string' && response.data[field + '_date'].length > 0) {var date = (0, _moment["default"])(response.data[field + '_date'], 'DD.MM.YYYY');prv.form[field] = date.format('YYYY-MM-DD');prv.form[field + '_user'] = date.format('DD.MM.YYYY');prv.form[field + '_date'] = date.toDate();} else {prv.form[field] = '';prv.form[field + '_user'] = '';prv.form[field + '_date'] = null;}} /**
       *
       * @param field
       * @param response
       * @param prv
       */ }, { key: "setDateTime", value: function setDateTime(field, response, prv) {if (response.data[field + '_datetime'] && typeof response.data[field + '_datetime'] === 'string' && response.data[field + '_datetime'].length > 0) {var date = (0, _moment["default"])(response.data[field + '_datetime'], 'DD.MM.YYYY HH:mm:ss');
          prv.form[field] = date.format('YYYY-MM-DD HH:mm:ss');
          prv.form[field + '_user'] = date.format('DD.MM.YYYY HH:mm:ss');
          prv.form[field + '_datetime'] = date.toDate();
        } else {
          prv.form[field] = '';
          prv.form[field + '_user'] = '';
          prv.form[field + '_datetime'] = null;
        }
      } }]);}(Base);


  return SetField;
}
//# sourceMappingURL=setField.js.map