import React from "react";
import {Route} from 'react-router-dom';
import './Layout.css';
import { Container } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import TechPal from '../../containers/TechPal/TechPal';
import YourOrders from '../../containers/YourOrders/YourOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import OrderSuccess from '../../containers/PlaceOrder/OrderSuccess/OrderSuccess';

const Layout = (props) => {
  return (
    <Container>
      <Nav />
      <Route path="/" exact component={TechPal} />
    <Route path="/orders" component={YourOrders} />
    <Route path="/place-order" component={PlaceOrder} />
    <Route path="/order-success" component={OrderSuccess} />
    </Container>
  )
};

export default Layout;