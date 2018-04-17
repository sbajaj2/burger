/**
 * Created by sbajaj on 4/12/2018.
 */
import React, { Component } from 'react';
import Aux from '../../../hoc/psx'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log("[Ordersummary] willupdate")
    }

    render() {

        const orderIngredients = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>);
            });

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {orderIngredients}
                </ul>
                <p>Total Price: {this.props.totalPrice.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        )
    }
}

export default OrderSummary;