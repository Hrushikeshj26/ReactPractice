import React from 'react'

function Balance({balance, income, expense}) {
  return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full mb-6">
            <h2 className="text-xl font-semibold mb-4">Your Balance</h2>
            <p className="text-2xl font-bold mb-4">${balance}</p>  
            <hr />
        <div className='flex justify-between items-center mt-4'>
            <h3 className="text-xl font-semibold mb-2">Income</h3>
            <p className="text-green-600 text-xl font-bold">${income}</p>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <h3 className="text-xl font-semibold mb-2">Expenses</h3>
            <p className="text-red-600 text-xl font-bold">${expense}</p>
        </div>
        </div>
  )
}

export default Balance