import React from 'react';
import { useHistory } from 'react-router';

export default function Home(props) {

    const history = useHistory();
    
    const routeToOrder = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <button id="order-pizza" onClick={routeToOrder}>Order Pizza</button>
        </div>
    )
}