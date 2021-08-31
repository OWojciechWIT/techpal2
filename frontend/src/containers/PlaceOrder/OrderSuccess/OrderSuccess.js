import React from "react";
import { Header, Segment, Image } from 'semantic-ui-react';

const OrderSuccess = (props) => {
  return (
    <Segment color='grey'>
        <Header as='h2' textAlign='center' color='grey'>
          Your Order has been placed!
        </Header>
        <Image src='/images/delivery.png' size='medium' centered />
    </Segment>
  )
};

export default OrderSuccess;
