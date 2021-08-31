import React from "react";
import { Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <Menu color='Grey' stackable inverted>
    <Menu.Item>
      <img src='images/logo.jpg' alt='Tech Pal Logo' />
    </Menu.Item>

    <Menu.Item as={NavLink} to="/" exact>
    Tech Pal
  </Menu.Item>

  <Menu.Item as={NavLink} to="/orders">
    Your Orders
  </Menu.Item>

  </Menu>
  )
};

export default Nav;
