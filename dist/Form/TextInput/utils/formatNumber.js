"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDecimal = exports.formatForInput = void 0;
var getDecimal = exports.getDecimal = function getDecimal(decimalCount, amount) {
  // Преобразуем decimalCount в абсолютное значение
  decimalCount = Math.abs(decimalCount);

  // Если decimalCount не является числом, используем значение по умолчанию (0)
  decimalCount = isNaN(decimalCount) ? 0 : decimalCount;

  // Определяем знак числа
  var negativeSign = amount < 0 ? "-" : "";

  // Возвращаем объект с результатами
  return {
    decimalCount: decimalCount,
    negativeSign: negativeSign
  };
};
var formatForInput = exports.formatForInput = function formatForInput(amount) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decimalSign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : " ";
  try {
    if (amount === '') {
      return '';
    }
    var __ret = getDecimal(decimalCount, amount);
    decimalCount = __ret.decimalCount;
    var negativeSign = __ret.negativeSign;
    var amountInt = parseInt(amount = Math.abs(Number(amount)).toFixed(decimalCount));
    var amountFloat = Math.abs(amount - amountInt);
    var amountIntString = amountInt.toString();
    var j = amountIntString.length > 3 ? amountIntString.length % 3 : 0;
    return negativeSign + (j ? amountIntString.substr(0, j) + thousands : '') + amountIntString.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimalSign + amountFloat.toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.error(e);
    return '';
  }
};