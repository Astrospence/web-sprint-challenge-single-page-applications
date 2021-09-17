import React, { useState, useEffect } from "react";
import { Route, Switch, } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import OrderForm from './OrderForm';
import schema from './formSchema';

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  cheese: false,
  pepperoni: false,
  bacon: false,
  canadianBacon: false,
  sausage: false,
  chicken: false,
  onions: false,
  spinach: false,
  artichokeHearts: false,
  special: ''
}

const initialFormErrors = {
  name: ''
}

const initialDisabled = true

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  }

  const orderSubmit = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['original', 'alfredo', 'garlic', 'bbq'].filter(top => !!formValues[top]),
      special: formValues.special
    }
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}));
  }

  return (
    <div className="App">
        <h1 className="title">LAMBDA EATS PIZZAHOLICS ANONYMOUS</h1>
        <p>We're all in this together...but pizzaholism is not a problem that needs fixing. Have as much as you want!</p>

        <Switch>
          <Route path="/pizza">
            <OrderForm 
              values={formValues}
              submit={orderSubmit}
              disabled={disabled}
              change={inputChange}
              errors={formErrors}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
};
export default App;
