import React from 'react';
import Aux from '../../../hoc/ReactAux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igKey) => { 
        return <li key={igKey}><span 
                    style={{textTransform: "capitalize"}}>
                    {igKey}: <strong>{props.ingredients[igKey]}</strong></span></li>
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>You chose the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>WANNA CHECKOUT?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};


export default orderSummary;