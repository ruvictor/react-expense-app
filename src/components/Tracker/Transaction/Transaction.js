import React from 'react';

const Transaction = props => {
    return (
        <li>
            <div>{props.name}</div>
            <div>{props.type === 'deposit' ? (
                <span className="deposit"> +{props.price} </span>
            ) : (
                <span className="expense">
                    -{props.price}
                </span>
            )}</div>
        </li>
    );
}

export default Transaction;