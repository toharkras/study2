import React from 'react';
import Expenses from './components/Expenses/Expenses';  // ייבוא קומפוננטת Expenses

function App() {
    const expense = [
        {title: 'mazda', amount: 3000, date: new Date(2020, 2, 28)},
        {title: 'honda', amount: 3000, date: new Date(2020, 2, 28)},
        {title: 'mg', amount: 3000, date: new Date(2020, 2, 28)},
        {title: 'ford', amount: 3000, date: new Date(2020, 2, 28)},
        {title: 'bmw', amount: 3000, date: new Date(2020, 2, 28)},
        {title: 'kia', amount: 3000, date: new Date(2020, 2, 28)},
    ];

    return (
        <div className="App">
            <Expenses items={expense} />
        </div>
    );
}

export default App;
