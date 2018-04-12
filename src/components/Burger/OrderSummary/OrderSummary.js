/**
 * Created by sbajaj on 4/12/2018.
 */
import React from 'react';
import aux from '../../../hoc/psx'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const orderIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
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
            <p>Total Price: {props.totalPrice.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </aux>
    )
};

export default orderSummary;