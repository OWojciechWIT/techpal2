import React from "react";
import { Grid, Header } from 'semantic-ui-react';
import Control from './Control/Control';

const Controls = (props) => {
  return (
    <Grid.Column width={8}>
<Header as='h2' textAlign='center' className='step'>
            Step 1: Choose your Tech
        </Header>
        <Grid>
            {props.menu.map((toppings, index) => {
            return <Control 
                key={accessory.id}
                alt={accessory.alt}
                added={() => props.accessoryAdded(accessory.id)}
                removed={() => props.accessoryRemoved(accessory.id)}
                
            />
            })}
        </Grid>
    </Grid.Column>
  )
};

export default Controls;
