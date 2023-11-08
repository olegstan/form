export default class Money {
  static formatForInput(amount, decimalCount = 2, decimalSign = ".", thousands = " ") {
    try {
      if (amount === '') {
        return '';
      }
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? '' : decimalCount;
      const negativeSign = amount < 0 ? "-" : "";
      let amountInt = parseInt(amount = Math.abs(Number(amount) || '').toFixed(decimalCount)).toString();
      let amountFloat = Math.abs(amount - amountInt);
      let j = amountInt.length > 3 ? amountInt.length % 3 : 0;
      return negativeSign + (j ? amountInt.substr(0, j) + thousands : '') + amountInt.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimalSign + amountFloat.toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.error(e);
      return '';
    }
  }

  //TODO написать проверку, если цифра заканчивается на больше e+20, такие числа toFixed не может правильно обработать
  static format = (amount, decimalCount = 2, decimalSign = ".", thousands = " ") => {
    try {
      if (typeof amount === 'number') {
        amount = amount.toString();
      }
      if (typeof amount === 'string') {
        amount = parseFloat(amount.replace(/,/g, '.').replace(/ /g, ''));
      }
      if (amount === '') {
        return '';
      }
      if (amount === 0) {
        return 0;
      }
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? '' : decimalCount;
      const negativeSign = amount < 0 ? "-" : "";
      let amountInt = parseInt(amount = Math.abs(Number(amount) || '').toFixed(decimalCount)).toString();
      let amountFloat = Math.abs(amount - amountInt).toFixed(decimalCount).slice(2);
      amountFloat = amountFloat.replace(/([0]{0,100})$/, '');
      let j = amountInt.length > 3 ? amountInt.length % 3 : 0;
      return negativeSign + (j ? amountInt.substr(0, j) + thousands : '') + amountInt.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount && amountFloat > 0 ? decimalSign + amountFloat : "");
    } catch (e) {
      console.error(e);
      return '';
    }
  };
  static toFixed(x) {
    var e = 0;
    if (Math.abs(x) < 1.0) {
      e = parseInt(x.toString().split('e-')[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = '0.' + new Array(e).join('0') + x.toString().substring(2);
      }
    } else {
      e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join('0');
      }
    }
    return x;
  }
  static toThousands(amount, fix = 2) {
    let preparedAmount = Math.abs(amount);
    if (preparedAmount >= 1000000000) {
      return (amount / 1000000000).toFixed(fix) + 'B';
    } else if (preparedAmount >= 1000000) {
      return (amount / 1000000).toFixed(fix) + 'M';
    } else if (preparedAmount >= 1000) {
      return (amount / 1000).toFixed(fix) + 'K';
    } else {
      return amount.toFixed(fix);
    }
  }

  /**
   *
   * @param sum
   * @returns {number}
   */
  static toDigits(sum) {
    if (typeof sum === 'number') {
      sum = sum.toString();
    }
    if (typeof sum === 'string') {
      return parseFloat(sum.replace(/,/g, '.').replace(/ /g, ''));
    }
  }
  static getCourseByCurrencyId(courses, id) {
    let course = null;
    if (courses) {
      courses.map(item => {
        if (item.cb_currency.currency_id === id) {
          course = item;
        }
        return;
      });
    }
    return course;
  }
}