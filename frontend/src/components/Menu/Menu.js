import React from "react";
import { Grid, Header, Segment } from 'semantic-ui-react';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  return (
    
    <Grid.Column width={12}>

        <Segment color='Grey'>
            <Header as='h2' textAlign='center' color='Grey'>
                Tech Pal Inventory
            </Header>
        </Segment>

        <Grid>
            {props.menu.map((accessories, index) => {
            return <MenuItem 
                key={accessories.id}
                image={accessories.image}
                alt={accessories.alt}
                price={accessories.price}
            />
            })}
        </Grid>
    </Grid.Column>
  )
};

export default Menu;
