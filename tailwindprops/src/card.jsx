import React from 'react'

function card(props) {
    console.log(props);
    
  return (
    <div className="flex flex-col items-center gap-6 p-4 md:flex-row rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/31566261/pexels-photo-31566261/free-photo-of-majestic-maine-coon-cat-in-lush-outdoor-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </div>
  <div className="flex p-0.5 flex-col items-center md:items-start">
    <span className="text-2xl p-4 font-medium">Class Warfare</span>
    <span className="font-medium p-4 text-sky-500">The Anti-Patterns</span>
    <span className="text-lg ml-10 font-semibold text-rose-500">
          {props.username || 'Bangad Billa'}
        </span>
        {props.data && (
        <div className="text-sm text-gray-700 mt-2">
          <p>Name: {props.data.name}</p>
          <p>Age: {props.data.age}</p>
          <p>Occupation: {props.data.occupation}</p>
          <p>City: {props.data.address.city}</p>
        </div>
      )}
    <span className="flex gap-2 p-4 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default card