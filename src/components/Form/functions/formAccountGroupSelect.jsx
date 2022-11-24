import React from 'react';
import AccountGroupSelect from "../AccountGroupSelect/AccountGroupSelect";
import SlimAccountGroupSelect from "../AccountGroupSelect/SlimAccountGroupSelect";

export default function formAccountGroupSelect(Base)
{
  class FormAccountGroupSelect extends Base
  {
    renderAccountGroupSelect({field, items, text, defaultText, disabled = false, showDefault = false, callback, types = [1, 2, 3, 4], style = {}, onCloseCreateCallback = () => {}, textLength = 25, size, getUserAccounts = () => {}, handleAddAccount = () => {}} = {}) {
      return <AccountGroupSelect
        textLength={textLength}
        types={types}
        onCloseCreateCallback={onCloseCreateCallback}
        default={defaultText}
        placeholder={text}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        style={style}
        handle={(item) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, item);
            this.setValueInput(prv, field + '_id', item ? item.id : '');

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(item);
            }
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderAccountGroupSelectStyle1({field, items, text, defaultText, disabled = false, showDefault = false, callback, types = [1, 2, 3, 4], style = {}, onCloseCreateCallback = () => {}, textLength = 25, size} = {}) {
      return <AccountGroupSelect
        textLength={textLength}
        types={types}
        size={size}
        onCloseCreateCallback={onCloseCreateCallback}
        style={style}
        className={'style1'}
        default={defaultText}
        showDefault={showDefault}
        placeholder={text}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        handle={(item) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, item);
            this.setValueInput(prv, field + '_id', item ? item.id : '');

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(item);
            }
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderAccountGroupSelectStyle1Slim({field, items, text, defaultText, disabled = false, showDefault = false, callback, types = [1, 2, 3, 4], style = {}, onCloseCreateCallback = () => {}, textLength = 25, size} = {}) {
      return <SlimAccountGroupSelect
        textLength={textLength}
        types={types}
        onCloseCreateCallback={onCloseCreateCallback}
        style={style}
        className={'style1'}
        default={defaultText}
        showDefault={showDefault}
        placeholder={text}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        handle={(item) => {
          this.setState((prv) => {
            this.setValueInput(prv, field, item);
            this.setValueInput(prv, field + '_id', item ? item.id : '');

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback(item);
            }
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }
  }
  return FormAccountGroupSelect;
}
