import React, { useState, useEffect } from "react";
import { Grid, Message } from 'semantic-ui-react';

import Menu from '../../components/Menu/Menu';
import { v4 as uuidv4 } from 'uuid';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Loader from '../../components/Feedback/Loader';
import ErrorModal from '../../components/Feedback/ErrorModal';



let orderAccessories = [];

const TechPal = (props) => {
  
  /*
 const [menuState, setMenuState] = useState({
    accessories: [
      { id: 0, name: 'Usb type C', price: 7.50, image: 'images/accessories/usbC.jpg', alt: 'usb C' },
      { id: 1, name: 'USB 3.2', price: 7.50, image: 'images/accessories/usb32.jpg', alt: 'usb C 3.2' },
      { id: 2, name: 'Usb Port cable', price: 7.50, image: 'images/accessories/usbPort.jpg', alt: 'usb C port' },
      { id: 3, name: 'Sandisk Usb Drive', price: 7.50, image: 'images/accessories/usbDrive.jpg', alt: 'usb Drive' },
      { id: 4, name: 'Headset', price: 7.50, image: 'images/accessories/headset.jpg', alt: 'Headset' },
      { id: 5, name: 'Wireless Earphones', price: 7.50, image: 'images/accessories/earphonesBl1.png', alt: 'Earphones' },
      { id: 6, name: 'Wireless Sport Earphones', price: 7.50, image: 'images/accessories/earphonesBl2.png', alt: 'Sport earphones' },
      
 });
    ] */



    // Using firebase
/*
    useEffect(() => {
      axios.get('/accessories.json')
      .then(response => {
        setMenuState({accessories: response.data, error: false});
      })
      .catch(error => {
        setMenuState({accessories: menuState.accessories, error: true});
        console.log(response);
      });
  }, [])

  */
  useEffect(() => {
    axios.get('/')
    .then(response => {
      let sortedAccessories = response.data.accessories.sort(function(a, b){return a.id - b.id});
      setMenuState({accessories: sortedAccessories});
    })
    .catch(error => {
      let errorMsg = '';
      if (error.response) {
          errorMsg = error.response.data.message;
      } else {
          errorMsg = 'There was a problem loading the menu';
      }

      setErrorState({error: true, errorMessage: errorMsg});
      setLoadingState({isLoading: false, loadFailed: menuState.loadFailed});
      console.log(error.response);
    });
  }, [])


// no longer firebase

    const [menuState, setMenuState] = useState({
      accessories: [],
      error: false
    });

 
  
    const [orderState, setOrderState] = useState({
      totalPrice: 
        props.location.state ? 
        props.location.state.order.totalPrice : 5, 
      chosenToppings: 
        props.location.state ? 
        props.location.state.order.chosenToppings: []
    });
  /*
  if (props.location.state) {
    orderAccessories = props.location.state.order.chosenAccessory;
  }
*/

  window.history.replaceState('/', undefined);

// the new error handling stuff 

onst [menuState, setMenuState] = useState({
  accessories: []
});

const [errorState, setErrorState] = useState({
  error: false, 
  errorMessage: null
});

const [loadingState, setLoadingState] = useState({
  isLoading: true, 
  loadFailed: false
});

//end of error handling


    const addAccessoryHandler = (id) => {
      let order = {...orderState};
  
      // find the chosen topping in the menu
      const menuIndex = menuState.accessories.findIndex(accessory => accessory.id === id);
  
    // check if the topping has already been added to the orderToppings array
    const orderIndex = order.chosenAccessory.findIndex(accessory => accessory.id === id);
  
    // if so, increase its count by 1
    if (orderIndex > -1){
      order.chosenAccessory[orderIndex].count++;
    }
    // otherwise (i.e. this topping is being added for the first time)
    // create this topping and add it to the order toppings array
    else{
      // Save the id, name and price of the chosen topping; set its count to 1
      const chosenAccessories = {
        id: menuState.accessories[menuIndex].id,
        name: menuState.accessories[menuIndex].alt,
        price: menuState.accessories[menuIndex].price,
        count: 1
      };
      order.chosenAccessories.push(chosenAccessories);
    }

  
    const newPrice = orderState.totalPrice + menuState.accessories[index].price;

    setOrderState({
      totalPrice: newPrice,
      chosenAccessory: orderAccessories
    });

  }







  const removeAccessoryHandler = (id) => {

    let order = {...orderState};
  
    // Find topping with matching id from the orderToppings
    const index = order.chosenAccessories.findIndex(accessory => accessory.id === id);
  
    // Get the current price
    let price = order.totalPrice; 
  
    // If topping was found, update the price and decrease the count
    if(index >= 0){
      price = price - order.chosenAccessories[index].price;
      order.chosenAccessories[index].count--;
  
      // If the count is now 0, remove the topping completely
      if(order.chosenAccessories[index].count < 1){
        order.chosenAccessories.splice(index, 1);
      }
    }
  
    // Update order state with updated price and updated toppings array
    setOrderState({
      totalPrice: price,
      chosenAccessories: order.chosenAccessories
    });
  }



  const checkoutHandler = () => {

    props.history.push({
      pathname: 'place-order', 
      state: {
        order: orderState, 
        menu: menuState.accessories
      }
    });

    
   /*
    // get order from orderState
    let order = orderState;

    // add unique id
    order.id = uuidv4();

    // create formatted date
    let orderDate = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let dayNum = orderDate.getDay();
    let day = days[dayNum];

    let monthNum = orderDate.getMonth();
    let month = months[monthNum];

    let date = orderDate.getDate();
    let year = orderDate.getFullYear();

    // saves date in the format "Fri 19 Mar 2021"
    let formattedDate = day + " " + date + " " + month + " " + year;

    // add formattedDate to order
    order.date = formattedDate;

    axios.post('/orders.json', order)
    .then(response => {
        alert('Order saved!');
        // set order state and orderAccessories back to starting values
        setOrderState({
          totalPrice: 5,
          chosenAccessory: []
        });
        orderAccessories=[];
    })
    .catch(error => {
      setMenuState({accessories: menuState.accessories, error: true});
      alert('Something went wrong :(');
      console.log(error);
      });

      */
}


  
  console.log(orderState);
  
  let techpalMenu = errorState.error ? 
  <ErrorModal error={errorState.errorMessage} onClear={errorHandler} /> : 
  <Loader active={loadingState.isLoading} />;
  
  if (menuState.accessories.length > 0) {
    pizzapalMenu = (
      <Grid divided='vertically' stackable>
          <Grid.Row centered>
              <Menu menu={menuState.accessories} />
          </Grid.Row>
          <Order 
            menu={menuState.accessories}
            toppingAdded={addToppingHandler}
            accessoryRemoved={removeAccessoryHandler}
            chosenAccessories={orderState.chosenAccessories}
            totalPrice={orderState.totalPrice}
            checkout={checkoutHandler}
            disabled={checkoutDisabled}
          />
      </Grid>
    );
  }
  else if (loadingState.loadFailed) {
    pizzapalMenu = <p>We're having some issues loading the menu... Please try again later.</p>
  }
  
//  a menu state check


if (menuState.toppings.length > 0) {
  techpalMenu = (
      <Grid divided='vertically' stackable>
      <Grid.Row centered>
          <Menu menu={menuState.toppings} />
      </Grid.Row>
      <Order 
          menu={menuState.toppings}
          chosenAccessory={orderState.chosenAccessory}
          totalPrice={orderState.totalPrice}
          accessoryAdded={addAccessoryHandler}
          accessoryRemoved={removeAccessoryHandler}
          checkout={checkoutHandler}
          disabled={checkoutDisabled}
      />
      </Grid>
  );
}

let checkoutDisabled = true;

if (orderState.chosenAccessory.length > 0){
  checkoutDisabled = false;
}



// ERROR HANDLER 

const errorHandler = () => {
  setErrorState({
    error: false, 
    errorMessage: null
  });
  setLoadingState({
    isLoading: false,
    loadFailed: true
  });
};

let checkoutDisabled = true;

if (orderState.chosenAccessories.length > 0){
checkoutDisabled = false;
}





console.log(props);

/*
  return (
  <Grid divided='vertically' stackable>
    <Grid.Row centered>
      <Menu menu={menuState.accessories} />
      </Grid.Row>

        <Order 
        menu={menuState.accessories}
        chosenAccessory={orderState.chosenAccessory}
        accessoryAdded={addAccessoryHandler}
        accessoryRemoved={removeAccessoryHandler}
        totalPrice={orderState.totalPrice}
        checkout={checkoutHandler}
        />
</Grid>
  )   */

  return (
    <div>
      {pizzapalMenu}
    </div>
  )


};

export default TechPal;
