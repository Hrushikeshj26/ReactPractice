import React, { use, useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction';


function App() {

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Salary', amount: 500 },
    { id: 2, text: 'Groceries', amount: -50 },
    { id: 3, text: 'Utilities', amount: -100 },
    { id: 4, text: 'Freelance Work', amount: 300}
  ]);

  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);


  const addTramsaction = (transaction) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      ...transaction
    }
    setTransactions([...transactions, newTransaction]);
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }


  return (
    <div className='absolute inset-0 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#80808012_4px,transparent_1px),linear-gradient(to_bottom,#80808012_5px,transparent_5px)] bg-[size:44px_44px] font-open-sans'>
      <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <div>
          <Header />
          <div className='flex flex-col bg-gray-100 p-6 rounded-bl-2xl rounded-br-2xl shadow-lg min-w-6xl'>
          <div className='w-full flex justify-between'>
            <div className='w-full'>
              <Balance balance={balance} income={income} expense={expense}/>
              <Transaction onAddTransaction={addTramsaction}/>
            </div>
            <History 
            transactions={transactions} 
            onDeleteTransaction={deleteTransaction}
            />
          </div>
        </div>  
        </div>      
      </div>
    </div>
  )
}

export default App
