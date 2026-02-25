import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
   
//  const [userName, SetuserName] = useState('')
 
//  if(!data.firstName){
//    SetuserName('Admin')
//  }else{
//   SetuserName(data.firstName)
//  }
const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
}

  return (
    <div className='flex justify-between text-white items-end '>
      <h1 className='text-4xl font-serif '>Hello<br/><span className='font-bold'>Vikas 👋</span></h1>
      <button className='text-xl cursor-pointer text-white-500 py-1 px-4 rounded-xl hover:bg-amber-100 bg-red-500 font-medium'
      onClick={logOutUser}
      >Log Out</button>
    </div>
  )
}

export default Header
