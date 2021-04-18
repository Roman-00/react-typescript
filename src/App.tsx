import React from 'react';
import { Pizza } from './components/Pizza';
import { Cart } from './components/Cart';
import pizzas from './data/pizzas.json';

import PizzaSVG from './images/pizza.svg';

import AppCss from './App.module.css';

const App = () => {
    return (
        <div className={AppCss.conatiner}>
            <div className={AppCss.header}>
                <PizzaSVG width={120} height={120}/>
                <div className={AppCss.siteTitle}>Delicious Pizza</div>
                <Cart />
            </div>
            <ul>
                {pizzas.map((pizza) => {
                    return <Pizza key={pizza.id}  pizza={pizza} />
                })}
            </ul>
        </div>
    )
};


export default App; 