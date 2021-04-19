import React, { useContext } from 'react';
import { useSetState } from './AppState';
import PizzaCss from './Pizza.module.css'; 

interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
    const setState = useSetState();
    const handleAddToCartClick = () => {
        setState((state) => {
            return{};
        });
    }

    return (
        <li className={PizzaCss.conatiner}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type="button" onClick={}>Add to Cart</button>
        </li>
    )

};

export { Pizza };