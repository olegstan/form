import React from 'react';
export default function receivePropsUserId(Base) {
  class ReceivePropsUserId extends Base {
    componentDidUpdate(prevProps, nextProps) {
      if (prevProps.client === null && nextProps.client) {
        this.setState(prv => {
          prv.form.user_id = nextProps.client.id;
          return prv;
        });
      } else if (nextProps.client === null) {
        this.setState(prv => {
          prv.form.user_id = '';
          return prv;
        });
      } else if (nextProps.client && prevProps.client && nextProps.client.id !== prevProps.client.id) {
        this.setState(prv => {
          prv.form.user_id = nextProps.client.id;
          return prv;
        });
      }
    }
  }
  return ReceivePropsUserId;
}