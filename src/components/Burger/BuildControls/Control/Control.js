import React from 'react';
import classes from './Control.module.css';

const Control = props => (
    <div className={classes.Control}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>More</button>
        <button 
            className={classes.Less} 
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
    </div>
);
export default Control;