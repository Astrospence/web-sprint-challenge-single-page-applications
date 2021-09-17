import React from "react";
import { Route, Switch, } from 'react-router-dom';
import Home from './Home';
import OrderForm from './OrderForm';

const App = () => {

  

  return (
    <div className="App">
        <h1 className="title">LAMBDA EATS PIZZAHOLICS ANONYMOUS</h1>
        <p>We're all in this together...but pizzaholism is not a problem that needs fixing. Have as much as you want!</p>

        <Switch>
          <Route path="/pizza">
            <OrderForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
};
export default App;
