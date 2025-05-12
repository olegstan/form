import moment from "moment/moment";

export default function setField(Base)
{
  class SetField extends Base
  {
    setNumber(field, response, prv)
    {
      let value = response.data[field];

      prv.form[field] = this.convertToNumber(value);
    }

    convertToNumber(value) {
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
        console.error('Invalid input type:', typeof value);
        return ''; // Возвращаем пустую строку для недопустимых типов
      }

      // Удаляем пробелы и проверяем на пустую строку
      value = value.trim();
      if (value === '') {
        return '';
      }

      // Преобразуем строку обратно в число
      let num = Number(value);

      // Если число не является числом (NaN), возвращаем пустую строку
      if (isNaN(num)) {
        console.error('Invalid number:', value);
        return '';
      }
      if (Math.abs(num) >= 1) {
        // Если число имеет целую часть, форматируем его с двумя знаками после запятой
        return num;
      } else {
        // Определяем количество десятичных знаков
        let decimalCount = 0;
        if (num !== Math.floor(num)) { // Если число не целое
          // Находим количество десятичных знаков
          let parts = num.toFixed(20).split('.'); // Используем toFixed(20) для точности
          if (parts[1]) {
            decimalCount = parts[1].replace(/0+$/, '').length; // Убираем лишние нули
          }
        }

        // Форматируем число без экспоненциальной записи
        let formattedValue = num.toFixed(decimalCount);

        // Разделяем на целую и дробную части
        let [integerPart, fractionalPart = ''] = formattedValue.split('.');

        // Возвращаем результат
        return `${integerPart}.${fractionalPart}`;
      }
    }

    /**
     *
     * @param field
     * @param array
     * @param response
     * @param prv
     */
    setSearch(field, array, response, prv)
    {
      array && array.forEach((item) =>
      {
        if(item.id === response.data[field + '_id'])
        {
          prv.form[field + '_search'] = item.name;
          prv.form[field] = item;
          prv.form[field + '_id'] = item.id;
        }
      })
    }

    /**
     *
     * @param field
     * @param array
     * @param response
     * @param prv
     */
    setSearchType(field, array, response, prv, customField)
    {
      if(response.data[customField])
      {
        array && array.forEach((item) =>
        {
          if(item.id === response.data[field + '_id'] && item.type_id === response.data[customField])
          {
            prv.form[field + '_search'] = item.name;
            prv.form[field] = item;
            prv.form[field + '_id'] = item.id;
          }
        });
      }else{
        array && array.forEach((item) =>
        {
          if(item.id === response.data[field + '_id'])
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
     */
    setSearchReason(field, array, response, prv, customField)
    {
      if(response.data[customField])
      {
        array && array.forEach((item) =>
        {
          if(item.id === response.data[field + '_id'] && item.reason_id === response.data[customField])
          {
            prv.form[field + '_search'] = item.name;
            prv.form[field] = item;
            prv.form[field + '_id'] = item.id;
          }
        });
      }else{
        array && array.forEach((item) =>
        {
          if(item.id === response.data[field + '_id'])
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
     */
    setSelect(field, array, response, prv)
    {
      array && array.forEach((item) =>
      {
        if(item.id === response.data[field + '_id'])
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
     */
    setSelectAccount(field, array, response, prv)
    {
      array && array.forEach((item) =>
      {
        item.accounts.map((subItem) =>
        {
          if(subItem.id === response.data[field + '_id'])
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
     */
    setGroupSelect(field, array, response, prv)
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
    }


    /**
     *
     * @param field
     * @param response
     * @param prv
     */
    setDate(field, response, prv)
    {
      if(response.data[field + '_date'] && typeof response.data[field + '_date'] === 'string' && response.data[field + '_date'].length > 0)
      {
        let date = moment(response.data[field + '_date'], 'DD.MM.YYYY')
        prv.form[field] = date.format('YYYY-MM-DD');
        prv.form[field + '_user'] = date.format('DD.MM.YYYY');
        prv.form[field + '_date'] = date.toDate();
      }else{
        prv.form[field] = '';
        prv.form[field + '_user'] = '';
        prv.form[field + '_date'] = null;
      }
    }

    /**
     *
     * @param field
     * @param response
     * @param prv
     */
    setDateTime(field, response, prv)
    {
      if(response.data[field + '_datetime'] && typeof response.data[field + '_datetime'] === 'string' && response.data[field + '_datetime'].length > 0)
      {
        let date = moment(response.data[field + '_datetime'], 'DD.MM.YYYY HH:mm:ss')
        prv.form[field] = date.format('YYYY-MM-DD HH:mm:ss');
        prv.form[field + '_user'] = date.format('DD.MM.YYYY HH:mm:ss');
        prv.form[field + '_datetime'] = date.toDate();
      }else{
        prv.form[field] = '';
        prv.form[field + '_user'] = '';
        prv.form[field + '_datetime'] = null;
      }
    }
  }

  return SetField;
}
