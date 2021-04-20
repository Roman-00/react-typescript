import React, { useEffect } from 'react';
import PizzaItem from './components/Pizza';
import { Cart } from './components/Cart';
import { AppStateProvider } from './components/AppState';
import pizzas from './data/pizzas.json';

import PizzaSVG from './images/pizza.svg';

import AppCss from './App.module.css';
import SpecialOffer from './components/SpecialOffer';

const App = () => {
    const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

    {/* useEffect(() => {
        const listener = () => {
            alert('Hello');
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        }
    }, []);*/}

    return (
        <AppStateProvider>
            <div className={AppCss.conatiner}>
                <div className={AppCss.header}>
                    <PizzaSVG width={120} height={120}/>
                    <div className={AppCss.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                { specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
                <ul className={AppCss.pizzaList}>
                    {pizzas.map((pizza) => {
                        return <PizzaItem key={pizza.id}  pizza={pizza} />
                    })}
                </ul>
            </div>
        </AppStateProvider>
    )
};


export default App; 