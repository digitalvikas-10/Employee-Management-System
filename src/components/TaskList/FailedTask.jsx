import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=" min-h-80 w-80 bg-blue-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-yellow-500 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-base">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
      <p className="text-sm  mt-2 ">{data.taskDescription}</p>
      <div className='mt-2'>
     <button className='w-full'>Failed</button>
      </div>
      </div>
  )
}

export default FailedTask
