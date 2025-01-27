import React from 'react';

export default function receivePropsUserId(Base)
{
  class ReceivePropsUserId extends Base
  {
    componentDidUpdate(prevProps) {
      if (this.props.client === null && prevProps.client) {
        this.setState((prv) => {
          prv.form.user_id = prevProps.client.id;

          return prv;
        })
      } else if (prevProps.client === null) {
        this.setState((prv) => {
          prv.form.user_id = '';

          return prv;
        })
      } else if (prevProps.client && this.props.client && prevProps.client.id !== this.props.client.id) {
        this.setState((prv) => {
          prv.form.user_id = prevProps.client.id;

          return prv;
        })
      }
    }
  }

  return ReceivePropsUserId;
}
