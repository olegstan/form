import React from 'react';
import moment from "moment/moment";
import Money from "../../Helpers/Money";

export default function setField(Base)
{
  class SetField extends Base
  {
    setNumber(field, response, prv)
    {
      let value = response.data[field];

      prv.form[field] = this.convertToNumber(value);
    }

    convertToNumber(value)
    {
      if(typeof value === 'undefined')
      {
        value = '';
      }

      if(value === null)
      {
        value = '';
      }

      if(typeof value === 'number')
      {
        value = value.toString();
      }

      let parts = value.split('.');
      if(parts[1] && parts[1].length > 0)
      {
        return Money.format(value, parts[1].length);
      }else{
        return Money.format(value, 0);
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
        prv.form[field] = moment(response.data[field + '_date'], 'DD.MM.YYYY').format('YYYY-MM-DD');
        prv.form[field + '_date'] = moment(response.data[field + '_date'], 'DD.MM.YYYY').toDate();
      }else{
        prv.form[field] = '';
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
        prv.form[field] = moment(response.data[field + '_datetime'], 'DD.MM.YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
        prv.form[field + '_datetime'] = moment(response.data[field + '_datetime'], 'DD.MM.YYYY HH:mm:ss').toDate();
      }else{
        prv.form[field] = '';
        prv.form[field + '_datetime'] = null;
      }
    }
  }

  return SetField;
}
