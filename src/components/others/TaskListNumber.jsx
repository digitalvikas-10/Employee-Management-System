import React from 'react'

const TaskList = () => {
  return (
    <div className='flex screen mt-5 items-center text-center justify-between gap-5  '>
        <div className='py-10 px-5 rounded-xl w-[40%] bg-red-400 text-white'>
          <h2 className='text-2xl font-semibold mt-4'>0</h2>
          <h3 className='text-3xl font-medium'>New Task</h3>
        </div>
        <div className='py-10 px-5 rounded-xl w-[40%] bg-blue-400 text-white'>
          <h2 className='text-2xl font-semibold mt-4'>0</h2>
          <h3 className='text-3xl font-medium'>New Task</h3>
        </div>
        <div className='py-10 px-5 rounded-xl w-[40%] bg-green-400 text-white'>
          <h2 className='text-2xl font-semibold mt-4'>0</h2>
          <h3 className='text-3xl font-medium'>New Task</h3>
        </div>
        <div className='py-10 px-5 rounded-xl w-[40%] bg-yellow-400 text-white'>
          <h2 className='text-2xl font-semibold mt-4'>0</h2>
          <h3 className='text-3xl font-medium'>New Task</h3>
        </div>
      
    </div>
  )
}

export default TaskList
