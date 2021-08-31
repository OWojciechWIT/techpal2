import React from "react";
import { Header, List } from 'semantic-ui-react';


const OrderSummary = (props) => {

    let summary = null;

    if(props.accessories.length > 0){

        summary = (
            <div>
                <Header as='h3'>
                    Your Order: 
                </Header>

                <List divided verticalAlign='middle'>
                    {props.accessory.map((accessory) => {
                        return( 
                            <List.Item key={accessory.id}>
                                {accessory.name}: {accessory.count}
                            </List.Item>
                        )
                    })}
                </List>

                <Header as='h4' className='h4margin'>
                    Total Price: &euro; {props.price.toFixed(2)}
                </Header>
            </div>
        );
    }
    else{
        summary = (
            <div>
                <Header as='h4' className="h4margin">
                    Start ordering! 
                </Header>
            </div>
        );
    }


    return (
        <div>
            {summary}
            <OrderSummary 
        menu = {props.location.state.menu}
        accessories = {orderState.chosenAccessories}
        price = {orderState.totalPrice}
            />
            
        </div>
    );
};


export default OrderSummary;
