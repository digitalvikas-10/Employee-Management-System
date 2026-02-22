import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between text-white items-end '>
      <h1 className='text-4xl '>Hello<br/>Vikas 👋</h1>
      <button className='text-xl cursor-pointer text-gray-500 py-1 px-4 rounded-xl hover:bg-amber-100 bg-mist-300'>Log Out</button>
    </div>
  )
}

export default Header
