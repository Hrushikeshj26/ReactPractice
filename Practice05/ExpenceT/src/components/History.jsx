import React from 'react'

function History({transactions, onDeleteTransaction}) {
  return (
        <div className="rounded-lg p-4 w-full mb-6">
            <h2 className="text-2xl font-semibold mb-2">Transaction History</h2>
            <hr />
            <ul className="list-none flex flex-col font-bold px-4 overflow-y-auto mt-8 h-[28rem]">
            {transactions.length === 0 ? (<p className='m-auto pt-20 text-xl text-gray-500'>No Transactions</p>): (transactions.map(transaction => (
                <li
                key={transaction.id}
                className="flex justify-between items-center mb-2 bg-gray-200 p-2 rounded">
                <span >
                    {transaction.text}
                </span>
                <div>
                    <span className={`${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>{transaction.amount < 0 ? '-' : '+'}{Math.abs(transaction.amount)} $</span>
                    <button className="bg-red-500 rounded-xl p-1 w-18 text-white hover:bg-red-700 ml-4" onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
                </div>
                </li>
            )))}
            </ul>
        </div>
  )
}

export default History