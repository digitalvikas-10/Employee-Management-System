import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between text-white items-end '>
      <h1 className='text-4xl font-serif '>Hello<br/><span className='font-bold'>Vikas Yadav  👋</span></h1>
      <button className='text-xl cursor-pointer text-white-500 py-1 px-4 rounded-xl hover:bg-amber-100 bg-red-500 font-medium'>Log Out</button>
    </div>
  )
}

export default Header
