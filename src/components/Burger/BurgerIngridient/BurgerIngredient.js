import React from 'react';
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types';

const BurgerIngredient = props => {
        let ingredient = null;
        
        switch ( props.type ) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;            
            case('bread-top'):
                ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                );
                break;
            case('spicySauce'):
                ingredient = (
                <div>
                    <div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div>
                    <div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div>
                    <div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div>
                    <div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div>
                    <div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div><div className={classes.SpicySauce}></div>
                </div>
                );
                break;
            case('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case('avocado'):
                ingredient =<div className={classes.Avocado}></div>;
                break;
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default: 
                ingredient = null;
        }
            return ingredient;
    }

BurgerIngredient.protoType = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;