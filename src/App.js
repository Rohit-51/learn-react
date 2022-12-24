import React from 'react'
// import { Todo } from './Components-1/Todo';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: '1em',
      title: 'Car Insurance',
      date: new Date(12, 6, 2022),
      amount: 230
    },
    {
      id: '2em',
      title: 'News Paper',
      date: new Date(3, 3, 2022),
      amount: 45.54
    },
    {
      id: '3em',
      title: 'Fry Pan',
      date: new Date(11, 8, 2022),
      amount: 130
    },
  ]

  return (
    <div>
      {/* <Todo /> */}
      <h1>Let's get started</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
