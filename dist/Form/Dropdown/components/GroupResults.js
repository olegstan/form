"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _Item = _interopRequireDefault(require("./Item"));

var _styles = require("./styles");
var _GroupItem = _interopRequireDefault(require("./GroupItem"));

var _ic_seach = _interopRequireDefault(require("./../../../assets/ic_seach.svg"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;} //@ts-ignore
//@ts-ignore
var GroupResults = function GroupResults(_ref)

















{var id = _ref.id,options = _ref.options,handleClick = _ref.handleClick,className = _ref.className,idPrefix = _ref.idPrefix,active = _ref.active,addButton = _ref.addButton,_ref$searchable = _ref.searchable,searchable = _ref$searchable === void 0 ? false : _ref$searchable;
  var _useState = (0, _react.useState)(''),_useState2 = _slicedToArray(_useState, 2),searchQuery = _useState2[0],setSearchQuery = _useState2[1];

  var filterOptions = function filterOptions(options, query) {
    if (!query.trim()) return options;

    var lowerQuery = query.toLowerCase();

    return options.map(function (option) {var _option$name;
      // Если у опции есть children, фильтруем их
      if (option.children && option.children.length > 0) {
        var filteredChildren = option.children.filter(function (child) {var _child$name;return (_child$name =
          child.name) === null || _child$name === void 0 ? void 0 : _child$name.toLowerCase().includes(lowerQuery);}
        );

        // Если есть подходящие дочерние элементы, возвращаем родителя с отфильтрованными детьми
        if (filteredChildren.length > 0) {
          return _objectSpread(_objectSpread({},
          option), {}, {
            children: filteredChildren });

        }
      }

      // Проверяем сам элемент
      if ((_option$name = option.name) !== null && _option$name !== void 0 && _option$name.toLowerCase().includes(lowerQuery)) {
        return option;
      }

      return null;
    }).filter(Boolean);
  };

  var displayOptions = searchable ? filterOptions(options, searchQuery) : options;

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(_styles.ParentContainer, { children: /*#__PURE__*/
      (0, _jsxRuntime.jsxs)(_styles.OptionsWrapper, {
        active: active !== null && active !== void 0 ? active : false,
        id: id ? "".concat(id, "-select") : undefined,
        className: className,
        hasAddButton: !!addButton, children: [

        active && searchable && /*#__PURE__*/
        (0, _jsxRuntime.jsxs)(_styles.SearchInputWrapper, { children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)("img", { src: _ic_seach["default"], alt: "Search" }), /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.SearchInput, {
            type: "text",
            placeholder: "\u041F\u043E\u0438\u0441\u043A",
            value: searchQuery,
            onChange: function onChange(e) {return setSearchQuery(e.target.value);} }
          )] }
        ),

        active && addButton,
        displayOptions.length === 0 ? /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_Item["default"], {

          item: { id: null, name: searchable && searchQuery ? 'Ничего не найдено' : 'Нет элементов' },
          className: className,
          id: "".concat(idPrefix, "-none") }, 'none'
        ) :

        displayOptions.map(function (option, key) {var _option$innerId;return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_GroupItem["default"], {

              item: option,
              onClick: handleClick,
              className: className,
              id: "".concat(idPrefix, "-").concat(option.id) }, (_option$innerId = option.innerId) !== null && _option$innerId !== void 0 ? _option$innerId : option.id
            ));}
        )] }

      ) }
    ));

};var _default = exports["default"] =

GroupResults;
//# sourceMappingURL=GroupResults.js.map