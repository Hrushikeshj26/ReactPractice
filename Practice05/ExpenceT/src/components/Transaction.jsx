import React, { useState } from 'react'

function Transaction({ onAddTransaction }) {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim() || !amount) return;

        const newTransaction = {
            text,
            amount: +amount
        };

        onAddTransaction(newTransaction);
        setText('');
        setAmount('');
    }

  return (
    <div className='bg-white shadow-md rounded-lg p-4 w-full mb-6'>
        <h1 className='text-xl font-bold mb-4'>Add New Transaction</h1>
        <hr />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div>
                <label htmlFor="text" className="block text-m font-medium text-gray-700">Text</label>
                <input 
                type="text" 
                id="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="mt-2 p-2 block w-full bg-gray-300 rounded-md shadow-sm outline-none"
                placeholder='Enter transaction label'
                />
            </div>
            <div>
                <label htmlFor="amount" className="block text-m font-medium text-gray-700">Amount (negative - expense, positive - income)</label>
                <input 
                type="number" 
                id="amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2 p-2 block w-full rounded-md bg-gray-300 shadow-sm outline-none"
                placeholder='Enter transaction amount' 
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add Transaction</button>
        </form>
    </div>
  )
}

export default Transaction