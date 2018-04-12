/**
 * Created by sbajaj on 4/12/2018.
 */
import React from 'react';

import aux from '../../../hoc/psx'

const orderSummary = (props) => {

    const orderIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                    </li>);
        });

    return (
        <aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {orderIngredients}
            </ul>
            <p>Continue to checkout?</p>
        </aux>
    )
};

export default orderSummary;