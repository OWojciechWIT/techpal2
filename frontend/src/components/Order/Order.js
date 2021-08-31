import React from "react";
import { Grid } from 'semantic-ui-react';
import Controls from './Controls/Controls';
import Checkout from './Checkout/Checkout';

const Order = (props) => {
  return (
    <Grid.Row columns={2} centered>
    <Controls menu={props.menu}
    accessoryAdded = {props.accessoryAdded}
    accessoryRemoved = {props.accessoryRemoved}
    price={props.totalPrice}
    checkout={props.checkout}
    disabled={props.disabled}
    
    />
    <Checkout />
</Grid.Row>
  )
};

export default Order;
