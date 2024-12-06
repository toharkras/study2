import React from 'react';
import ExpenseItem from './ExpenseItem'; // וודא שהתיקייה נכונה

function Expenses(props) {
    return (
        <div>
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
