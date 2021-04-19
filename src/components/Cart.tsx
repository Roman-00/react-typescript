import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from './AppState';
import CartCss from './Cart.module.css';

interface Props {

}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            (e.target as HTMLSpanElement);
        }
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }



    render() {
        return (
            <AppStateContext.Consumer>
                {(state) => {
                    return (
                        <div className={CartCss.container}>
                            <button type="button" className={CartCss.button} onClick={this.handleClick}>
                                <FiShoppingCart/>
                                <span>{state.cart.items.length} pizza(s)</span>
                            </button>
                            <div className={CartCss.cartDropDown} style={{
                                display: this.state.isOpen ? 'block' : 'none'
                            }}>
                                <ul>
                                    <li>
                                        Napoletana
                                    </li>
                                    <li>
                                        Marinara
                                    </li>
                                    {state.cart.items.map((item) => {
                                        return <li key={item.id}>
                                            {item.name}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </AppStateContext.Consumer>
        )
    }
}

export { Cart };