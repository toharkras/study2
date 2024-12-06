import React from 'react';
import ExpenseDate from './ExpenseDate'; // ייבוא תאריך

function ExpenseItem(props) {
    return (
        <div>
            <ExpenseDate date={props.date} />
            <div>
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
