"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _styles2 = require("../../styles");

var _useBaseInput2 = _interopRequireDefault(require("../../hooks/useBaseInput"));

var _useOnceWhen = _interopRequireDefault(require("../../helpers/useOnceWhen"));

var _GroupResults = _interopRequireDefault(require("../components/GroupResults"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t["return"] || t["return"]();} finally {if (u) throw o;}} };}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;} //@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
var GroupSearch = function GroupSearch(_ref)
















{var _getName;var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onKeyDown = _ref.onKeyDown,onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,value = _ref.value,error = _ref.error,_ref$options = _ref.options,options = _ref$options === void 0 ? [] : _ref$options,_ref$search = _ref.search,search = _ref$search === void 0 ? '' : _ref$search,_ref$onSearch = _ref.onSearch,onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,_ref$clearOnClickOuts = _ref.clearOnClickOutside,clearOnClickOutside = _ref$clearOnClickOuts === void 0 ? true : _ref$clearOnClickOuts,_ref$addButton = _ref.addButton,addButton = _ref$addButton === void 0 ? false : _ref$addButton;

  var _useState = (0, _react.useState)(false),_useState2 = _slicedToArray(_useState, 2),selectOpen = _useState2[0],setSelectOpen = _useState2[1];
  var selectRef = (0, _react.useRef)(null);


  var _useBaseInput =



    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  //обработка когда пришёл новый список и значение, проверяем можно ли установить из него search
  (0, _useOnceWhen["default"])(value && (options === null || options === void 0 ? void 0 : options.length), function () {
    //@ts-ignore
    var matchingOption = options.find(function (option) {return option.id === value;});

    if (matchingOption) {
      // Здесь можно добавить любое другое действие
      onSearch(matchingOption.name); // Например, вызов функции
    }
  });

  // // Обработка клика вне компонента
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {var _selectRef$current;
      // @ts-ignore
      if (focused && selectRef.current && !((_selectRef$current = selectRef.current) !== null && _selectRef$current !== void 0 && _selectRef$current.contains(event.target))) {
        handleClose();
        //если элемент не выбран, то очистим поле поиска
        if (!value) {
          var _findMatchedOption = function findMatchedOption(options) {var _iterator = _createForOfIteratorHelper(
                options),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var option = _step.value;
                // Проверяем текущий уровень
                if (option.name && option.name.toLowerCase() === search.toLowerCase()) {
                  return option;
                }

                // Если есть вложенные элементы, проверяем их
                if (option.items && Array.isArray(option.items)) {
                  var matchedInItems = _findMatchedOption(option.items);
                  if (matchedInItems) {
                    return matchedInItems;
                  }
                }
              }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
            return undefined; // Если ничего не найдено
          };

          var matchedOption = _findMatchedOption(options);

          // Если найдено совпадение, выбираем этот элемент
          if (matchedOption) {
            onChange(matchedOption);
          } else {
            if (clearOnClickOutside)
            {
              onSearch('');
            }
          }
        }
      }
    };

    // Добавляем обработчик события при монтировании компонента
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем обработчик события при размонтировании компонента
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [search, value, options, setSelectOpen, onChange, focused]);

  var handleChange = function handleChange(event, option) {
    event.stopPropagation();

    onChange(option);
    handleClose();
  };

  var handleOpen = function handleOpen(e) {
    setSelectOpen(true);
    setFocused(true);
  };

  var handleClose = function handleClose() {
    setSelectOpen(false);
    setFocused(false);
  };

  var handleSearch = function handleSearch(e) {
    onSearch(e.target.value);
  };

  var filteredOptions = (0, _react.useMemo)(function () {
    if (!Array.isArray(options)) {
      console.error('Invalid options: expected an array');
      return [];
    }

    return options.filter(function (option) {

      if (_typeof(option) !== 'object' || option === null) {
        console.warn('Invalid option: expected an object', option);
        return false;
      }

      // Второе условие: если поисковый запрос пустой, проверяем наличие items
      if (!search) {
        // Если search пустой, показываем опцию только если есть items
        //@ts-ignore
        return option.items && option.items.length > 0;
      }

      // Третье условие: фильтрация по поисковому запросу
      if (typeof search !== 'string') {
        console.warn('Invalid search query: expected a string', search);
        return false;
      }

      // Третье условие: фильтрация по поисковому запросу
      var searchLower = search.toLowerCase();
      var parts = searchLower.split(' ');

      // Проверяем, есть ли совпадения в имени самой опции
      var matchesOptionName =
      typeof option.name === 'string' &&
      parts.some(function (part) {return (
          option.name.
          toLowerCase().
          replace('ё', 'е').
          replace('й', 'и').
          includes(part.replace('ё', 'е').replace('й', 'и')));}
      );

      // Проверяем, есть ли совпадения в именах вложенных items
      //@ts-ignore
      var matchesItems =
      Array.isArray(option.items) &&
      option.items.some(function (item) {
        // Проверяем, что item является объектом
        if (_typeof(item) !== 'object' || item === null) {
          console.warn('Invalid item: expected an object', item);
          return false;
        }

        // Проверяем, что item.name является строкой
        return (
          typeof item.name === 'string' &&
          parts.some(function (part) {return (
              item.name.
              toLowerCase().
              replace('ё', 'е').
              replace('й', 'и').
              includes(part.replace('ё', 'е').replace('й', 'и')));}
          ));

      });

      // Опция показывается, если:
      // 1. Есть совпадение в имени самой опции
      // ИЛИ
      // 2. Есть хотя бы один подходящий элемент в items
      return matchesOptionName || matchesItems;
    });
  }, [options, value, search]);

  // @ts-ignore
  var inputClassName = "input ".concat(className).concat(focused ? ' focused' : '').concat(error !== null && error !== void 0 && error[0] ? ' error' : '');

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.StyledSelect, {
    onClick: handleOpen,
    ref: selectRef, children: [/*#__PURE__*/

    (0, _jsxRuntime.jsx)(_styles2.StyledInput, {
      id: id,
      style: style,
      autoComplete: "off",
      disabled: disabled,
      className: inputClassName,
      type: "text",
      name: getName(name),
      value: search !== null && search !== void 0 ? search : '',
      onChange: handleSearch,
      onBlur: handleBlur }
    ), /*#__PURE__*/
    (0, _jsxRuntime.jsx)(_GroupResults["default"], {
      addButton: addButton,
      active: selectOpen && !disabled,
      id: id,
      options: filteredOptions,
      handleClick: handleChange,
      idPrefix: (_getName = getName(name)) !== null && _getName !== void 0 ? _getName : id }
    )] }
  );

};

GroupSearch.displayName = 'GroupSearch';var _default = exports["default"] =

GroupSearch;
//# sourceMappingURL=GroupSearch.js.map