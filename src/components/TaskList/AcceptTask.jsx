import React from 'react'

const AcceptTask = () => {
  return (
    <div className=" min-h-80 w-80 bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">Category</h3>
        <h4 className="text-base">22 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a youtube video</h2>
      <p className="text-sm  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur ad repudiandae molestias. Obcaecati, soluta!</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
      </div>
      </div>
  )
}

export default AcceptTask
