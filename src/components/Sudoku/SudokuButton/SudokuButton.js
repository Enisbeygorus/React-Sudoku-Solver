import React from 'react';
import classes from './SudokuButton.css'

const sudokuButton = (props) => (

    <button className={classes.Button} onClick={props.clicked}>
       {props.value} 
    </button>
)

export default sudokuButton;