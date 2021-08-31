import React, { useState, useEffect } from "react";
import axios from '../../axios-orders';
import OrdersTable from '../../components/OrdersTable/OrdersTable';
import { Message } from 'semantic-ui-react';
import Loader from '../../components/Feedback/Loader';
import ErrorModal from '../../components/Feedback/ErrorModal';

const [pastOrdersState, setPastOrdersState] = useState({
    orders: [],
    ordersLoaded: false,
    error: false
  });

  useEffect(() => {
    axios.get('/orders')
    .then(response => {
      setPastOrdersState({orders: response.data.orders});
      setLoadingState({isLoading: false, ordersLoaded: true, loadFailed: loadingState.loadFailed});
    })
    .catch(error => {
      setErrorState({error: true, errorMessage: error.response.data.message});
      setLoadingState({isLoading: false, ordersLoaded: loadingState.ordersLoaded, loadFailed: loadingState.loadFailed});
      console.log(pastOrdersState.error, error);
    });
  }, [])
/*
for (let i in ordersObject){
      ordersArray.push(ordersObject[i]);
    }

    setPastOrdersState({orders: ordersArray, ordersLoaded: true, error: false});
    })
    .catch(error => {
    setPastOrdersState({orders: pastOrdersState.orders, ordersLoaded: pastOrdersState.ordersLoaded, error: true});
      console.log(pastOrdersState.error, error);
    });
},*/ 


// ERROR HANDLER 

const errorHandler = () => {
  setErrorState({
    error: false, 
    errorMessage: null
  });
  setLoadingState({
    isLoading: loadingState.isLoading,
    ordersLoaded: loadingState.ordersLoaded,
    loadFailed: true
  });
};





const [pastOrdersState, setPastOrdersState] = useState({
  orders: []
});

const [errorState, setErrorState] = useState({
  error: false, 
  errorMessage: null
});

const [loadingState, setLoadingState] = useState({
  isLoading: true, 
  ordersLoaded: false,
  loadFailed: false
});





const YourOrders = (props) => {

    /* let orders = pastOrdersState.error ? <Message><p>Orders can't be loaded!</p></Message> : <Message><p>Orders loading...</p></Message>;

    if (pastOrdersState.ordersLoaded){
  
      if(pastOrdersState.orders.length > 0){
        orders = (
          <OrdersTable orders={pastOrdersState.orders} />
        );
      }
      else{
        orders = <Message><p>You haven't placed any orders yet :(</p></Message>
      }
    }

  return (
    <div>
      {orders}
    </div>
  ) */

  let orders = 
  errorState.error ? 
  <ErrorModal error={errorState.errorMessage} onClear={errorHandler} /> : 
  <Loader active={loadingState.isLoading} />;

if (loadingState.ordersLoaded && pastOrdersState.orders.length > 0){
  orders = <OrdersTable orders={pastOrdersState.orders} /> ;
}
else if (loadingState.loadFailed) {
  orders = <p>We can't load your orders... maybe try creating one?</p>
}


};

export default YourOrders;