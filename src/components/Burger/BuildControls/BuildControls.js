import React from 'react';
import classes from './BuildControls.module.css';
import Control from './Control/Control';

const controlTypes = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Avocado', type: 'avocado'},
    { label: 'SpicySauce', type: 'spicySauce'},
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Current Price: {props.totalPrice.toFixed(2)}</strong></p>
        {controlTypes.map(ctrl => (
            <Control 
            key={ctrl.label} 
            label={ctrl.label}
            added= {() => props.ingredientAdded(ctrl.type)}
            removed= {() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.purchased}>PURCHASE </button>
    </div>
);

export default BuildControls;