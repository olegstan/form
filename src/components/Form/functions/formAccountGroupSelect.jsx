import React from 'react';
import AccountGroupSelect from "../AccountGroupSelect/AccountGroupSelect";
import SlimAccountGroupSelect from "../AccountGroupSelect/SlimAccountGroupSelect";
import AccountConstants from "./.././../../../../constants/AccountConstants";

class ImportError extends Error {}



export default function formAccountGroupSelect(Base)
{
  class FormAccountGroupSelect extends Base
  {
    renderAccountGroupSelect({
                               field,
                               items,
                               text,
                               defaultText,
                               disabled = false,
                               showDefault = false,
                               callback,
                               types = [AccountConstants.CASH, AccountConstants.BANK_ACCOUNT, AccountConstants.BROKER_ACCOUNT, AccountConstants.DIGIT_MONEY],
                               style = {},
                               onCloseCreateCallback = () => {},
                               textLength = 25,
                               size,
                               getUserAccounts = () => {},
                               handleAddAccount = () => {},
                               getText = (account) => {return AccountConstants.getText(account)},
                               accountAddAvailable = false,
    } = {}) {
      console.log(types)

      const importCreate = async (callback) => {
        try {
          await import("../../../../../pages/Accounting/Accounts/HiddenAccountCreate").then(module => callback(module).catch((e) => {console.warn(e)}))
        } catch (e) {
          console.log(e)
        }
      }
      const importEdit = async (callback) => {
        try {
          await import("../../../../../pages/Accounting/Accounts/HiddenAccountEdit").then(module => callback(module).catch((e) => {console.warn(e)}))
        } catch (e) {
          console.log(e)
        }
      }

      return <AccountGroupSelect
        textLength={textLength}
        types={types}
        size={size}
        accountAddAvailable={accountAddAvailable}
        getUserAccounts={getUserAccounts}
        handleAddAccount={handleAddAccount}
        loadModuleAccountCreate={importCreate}
        loadModuleAccountEdit={importEdit}
        getText={getText}
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

    renderAccountGroupSelectStyle1({
                                     field,
                                     items,
                                     text,
                                     defaultText,
                                     disabled = false,
                                     showDefault = false,
                                     callback,
                                     types = [AccountConstants.CASH, AccountConstants.BANK_ACCOUNT, AccountConstants.BROKER_ACCOUNT, AccountConstants.DIGIT_MONEY],
                                     style = {},
                                     onCloseCreateCallback = () => {},
                                     textLength = 25,
                                     size,
                                     getUserAccounts = () => {},
                                     handleAddAccount = () => {},
                                     accountAddAvailable = false,
                                     getText = (account) => {return AccountConstants.getText(account)},
                                   } = {}) {

      return this.renderAccountGroupSelect({...arguments[0], ...{className: 'style1'}})
    }

    renderAccountGroupSelectStyle1Slim({
                                         field,
                                         items,
                                         text,
                                         defaultText,
                                         disabled = false,
                                         showDefault = false,
                                         callback,
                                         types = [AccountConstants.CASH, AccountConstants.BANK_ACCOUNT, AccountConstants.BROKER_ACCOUNT, AccountConstants.DIGIT_MONEY],
                                         style = {},
                                         onCloseCreateCallback = () => {},
                                         textLength = 25,
                                         size,
                                         getUserAccounts = () => {},
                                         handleAddAccount = () => {},
                                         getText = (account) => {return AccountConstants.getText(account)},
                                         accountAddAvailable = false,
                                       } = {}) {
      const importCreate = async (callback) => {
        try {
          await import("../../../../../pages/Accounting/Accounts/HiddenAccountCreate").then(module => callback(module).catch((e) => {console.warn(e)}))
        } catch (e) {
          console.log(e)
        }
      }
      const importEdit = async (callback) => {
        try {
          await import("../../../../../pages/Accounting/Accounts/HiddenAccountEdit").then(module => callback(module).catch((e) => {console.warn(e)}))
        } catch (e) {
          console.log(e)
        }
      }

      return <SlimAccountGroupSelect
        textLength={textLength}
        types={types}
        size={size}
        accountAddAvailable={accountAddAvailable}
        getUserAccounts={getUserAccounts}
        handleAddAccount={handleAddAccount}
        loadModuleAccountCreate={importCreate}
        loadModuleAccountEdit={importEdit}
        getText={getText}
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
