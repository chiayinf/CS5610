// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    let borderColor = 'greyBorder';
    
    if (symbol === 'X') {
        borderColor = 'blackBorder';
    } else if (symbol === '') {
        borderColor = 'greyBorder';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
            symbol,
        }
    )} id="square" class={borderColor}>
        {symbol}
    </div>);
}
