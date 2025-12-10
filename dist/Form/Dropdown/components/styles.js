"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.StyledSubOptionRight = exports.StyledSubOptionLeft = exports.StyledSubOptionContent = exports.StyledSubOption = exports.StyledSubItemsContainer = exports.StyledOption = exports.StyledGroupTitle = exports.StyledGroupOption = exports.StyledCheckboxOption = exports.SearchInputWrapper = exports.SearchInput = exports.ParentContainer = exports.OptionsWrapper = void 0;var _zindex = _interopRequireDefault(require("../../../interface/zindex"));

var _styledComponents = _interopRequireDefault(require("styled-components"));var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11; // @ts-ignore
function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _objectDestructuringEmpty(t) {if (null == t) throw new TypeError("Cannot destructure " + t);}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}







var StyledSubItemsContainer = exports.StyledSubItemsContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n"])));





var StyledGroupTitle = exports.StyledGroupTitle = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 12px;\n\n    .group-name {\n        font-size: 13px;\n        font-weight: 600;\n        color: ", ";\n        margin-bottom: 2px;\n    }\n\n    .group-description {\n        font-size: 12px;\n        font-weight: 400;\n        color: ", ";\n        opacity: 0.7;\n    }\n"])),







function (_ref) {var theme = _ref.theme;return theme.groupSelectTitleColor || '#000';},






function (_ref2) {var theme = _ref2.theme;return theme.subItemTextColor || '#666';});




var StyledGroupOption = exports.StyledGroupOption = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    background-color: ", ";\n    margin-bottom: 8px;\n\n    &:first-child {\n        border-radius: 8px 8px 0 0;\n    }\n\n    &:last-child {\n        border-radius: 0 0 8px 8px;\n    }\n\n    &:only-child {\n        border-radius: 8px;\n    }\n"])),



function (_ref3) {var theme = _ref3.theme;return theme.groupSelectBackground || '#f5f5f5';});















var StyledSubOptionContent = exports.StyledSubOptionContent = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    gap: 12px;\n"])));







var StyledSubOptionLeft = exports.StyledSubOptionLeft = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    flex: ", ";\n    min-width: 0;\n\n    .item-name {\n        font-size: 14px;\n        font-weight: 500;\n        color: ", ";\n        margin-bottom: 2px;\n    }\n\n    .item-description {\n        font-size: 12px;\n        font-weight: 400;\n        color: ", ";\n        opacity: 0.7;\n    }\n"])),


function (_ref4) {_objectDestructuringEmpty(_ref4);return '1 1 70%';},





function (_ref5) {var theme = _ref5.theme;return theme.subItemTextColor || '#0066cc';},






function (_ref6) {var theme = _ref6.theme;return theme.subItemTextColor || '#666';});




var StyledSubOptionRight = exports.StyledSubOptionRight = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    flex: 0 0 30%;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 500;\n    color: ", ";\n    white-space: nowrap;\n"])),




function (_ref7) {var theme = _ref7.theme;return theme.subItemTextColor || '#000';});



var StyledSubOption = exports.StyledSubOption = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background-color 0.2s ease;\n\n    &:hover {\n        background-color: ", ";\n        border-radius: 6px;\n    }\n"])),







function (_ref8) {var theme = _ref8.theme;return theme.subItemHoverBackground || 'rgba(0, 0, 0, 0.05)';});




var StyledOption = exports.StyledOption = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    align-items: center;\n    color: ", ";\n    line-height: 24px;\n    display: flex;\n    padding: 0 15px;\n    font-size: 14px;\n    font-weight: 500;\n    user-select: none;\n    text-align: left;\n    flex-wrap: wrap;\n    cursor: pointer;\n    transition: background-color 0.2s ease, transform 0.2s ease;\n\n    background-color: ", ";\n\n    span {\n        text-align: left;\n        font-size: 14px;\n        width: 100%;\n        padding: 4px 8px;\n        margin: 10px 0;\n    }\n\n    &:last-child span {\n        border-bottom: none;\n    }\n\n    &:last-child {\n        border-bottom-left-radius: 8px;\n        border-bottom-right-radius: 8px;\n    }\n\n    span:hover {\n        background-color: ", ";\n        border-radius: 8px;\n    }\n"])),

function (_ref9) {var theme = _ref9.theme;return theme.selectOptionTextColor;},











function (_ref0) {var theme = _ref0.theme;return theme.inputDisabledContainerBackground;},



















function (_ref1) {var theme = _ref1.theme;return theme.selectOptionBackgroundHovererColor;});




// @ts-ignore
var StyledCheckboxOption = exports.StyledCheckboxOption = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    align-items: center;\n    color: ", ";\n    line-height: 24px;\n    display: flex;\n    padding: 0 15px;\n    font-size: 14px;\n    font-weight: 500;\n    user-select: none;\n    text-align: left;\n    flex-wrap: wrap;\n    cursor: pointer;\n    transition: backtground-color 0.2s ease, transform 0.2s ease;\n\n    background-color: ", ";\n\n    & > span {\n        text-align: left;\n        font-size: 14px;\n        width: 100%;\n        padding: 4px 8px;\n        margin: 10px 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        position: relative;\n    }\n\n    &:last-child {\n        border-bottom-left-radius: 8px;\n        border-bottom-right-radius: 8px;\n    }\n\n    & > span:hover {\n        //@ts-ignore\n        background-color: ", ";\n        border-radius: 8px;\n    }\n"])),

function (_ref10) {var theme = _ref10.theme;return theme.selectOptionTextColor;},











function (_ref11) {var theme = _ref11.theme;return theme.inputDisabledContainerBackground;},




















function (_ref12) {var theme = _ref12.theme;return theme.selectOptionBackgroundHovererColor || '';});




var ParentContainer = exports.ParentContainer = _styledComponents["default"].div(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["\n    position: relative;\n"])));








var SearchInputWrapper = exports.SearchInputWrapper = _styledComponents["default"].div(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["\n    position: relative;\n    width: calc(100% - 32px);\n    border-radius: 12px;\n    padding: 10px 16px 0 16px;\n    display: flex;\n    \n    img {\n        position: absolute;\n        left: 30px;\n        top: 30px;\n        transform: translateY(-50%);\n        width: 20px;\n        height: 20px;\n        pointer-events: none;\n        opacity: 0.5;\n    }\n"])));


















var SearchInput = exports.SearchInput = _styledComponents["default"].input(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 8px 12px 8px 40px;\n    border: 1px solid rgba(215, 219, 224, 1);\n    border-radius: 12px;\n    font-size: 14px;\n    outline: none;\n    background-color: #fff;\n    \n    &::placeholder {\n        color: #000;\n    }\n    \n    &:focus {\n        border-color: #4378FF;\n    }\n"])));

















// @ts-ignore
var OptionsWrapper = exports.OptionsWrapper = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    position: absolute;\n    border-radius: 0 0 0 12px;\n    top: calc(100% + 10px);\n    left: 0;\n    width: 100%;\n    box-shadow: 0 20px 48px ", ";\n    background-color: ", ";\n    overflow-y: auto;\n    overflow-x: hidden;\n    z-index: ", ";\n    display: flex;\n    flex-direction: column;\n    max-height: 250px;\n\n    min-height: ", ";\n\n    pointer-events: ", ";\n\n    opacity: ", ";\n    transform: ", ";\n    transition: ", ";\n\n    &::-webkit-scrollbar {\n        width: 8px;\n        background-color: transparent;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        background-color: ", ";\n        border-radius: 0 0 8px 0;\n        border: 2px solid transparent;\n        background-clip: padding-box;\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n        background-color: ", ";\n    }\n\n    &::-webkit-scrollbar-track {\n        background-color: transparent;\n    }\n"])),





function (_ref13) {var theme = _ref13.theme;return theme.selectShadowColor;},
function (_ref14) {var theme = _ref14.theme;return theme.selectWrapperOptionBackgroundColor;},


_zindex["default"].input,




function (_ref15) {var hasAddButton = _ref15.hasAddButton;return hasAddButton ? '120px' : 'auto';},

function (_ref16) {var active = _ref16.active;return active ? 'auto' : 'none';},

function (_ref17) {var active = _ref17.active;return active ? 1 : 0;},
function (_ref18) {var active = _ref18.active;return (
    active ? 'translateY(0)' : 'translateY(-10px)');},
function (_ref19) {var active = _ref19.active;return (
    active ? 'opacity 0.35s ease, transform 0.35s ease' : 'none');},







function (_ref20) {var theme = _ref20.theme;return theme.selectScrollThumbColor;},






function (_ref21) {var theme = _ref21.theme;return theme.selectScrollThumbHoverColor;});
//# sourceMappingURL=styles.js.map