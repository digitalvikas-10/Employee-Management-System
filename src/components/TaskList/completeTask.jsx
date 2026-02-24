import React from 'react'

const TaskCompleted = () => {
  return (
    <div className=" min-h-80 w-80 bg-pink-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-base">22 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a youtube video</h2>
      <p className="text-sm  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur ad repudiandae molestias. Obcaecati, soluta!</p>
      <div className='mt-2'>
        <button className='w-full'>Completed</button>
      </div>
      </div>
  )
}

export default TaskCompleted

