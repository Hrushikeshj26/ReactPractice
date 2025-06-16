import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Drink water", "Go to gym", "Read a book"]);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() === '') {
            return;
        }
        setTasks([...tasks, newTask]);
        setNewTask('');
    }


    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }



  return (
    <div className='w-1/4 m-auto text-white bg-gray-800 flex flex-col p-4 rounded shadow justify-center align-items-center'>
        <h1 className='text-center text-2xl font-bold mb-4'>To-Do List</h1>
        <div className='flex mb-3'>
            <input
            className='w-full focus:outline-none p-2 rounded bg-gray-500 text-white'
            type='text'
            placeholder='Add a new task....'
            value={newTask}
            onChange={handleInputChange}
            />
            <button className='w-24 rounded cursor-pointer bg-blue-600 hover:bg-blue-700' onClick={addTask}>Add Task</button>
        </div>
        <ul className='list-group'>
            {tasks.map((task, index) => (
            <li key={index} className='flex justify-between items-center bg-gray-700 p-2 mb-2 rounded'>
                {task}
                <button className='px-6 bg-red-600 rounded cursor-pointer hover:bg-red-700' onClick={() => deleteTask(index)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList