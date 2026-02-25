import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] = useContext(AuthContext)

   

  return (
    <div  className='bg-[#1C1C1C] p-5 rounded mt-5  h-80'>
        <div className='bg-red-400 py-2 mb-2  px-4 flex justify-between items-center rounded ' >
       <h2 className='text-xl font-medium 1/5 '>Employee Name</h2>
       <h3 className='text-xl font-medium 1/5 '>New Task</h3>
       <h5 className='text-xl font-medium 1/5 '>Active Task</h5>
       <h5 className='text-xl font-medium 1/5 '>Completed Task</h5>
       <h5 className='text-xl font-medium 1/5 '>Failed Task</h5>
      </div>
   <div className='h-[80%] overflow-auto '>
       {userData.map((e,idx)=>{
        return   <div className='border-emerald-200 border-2 py-2 mb-2  px-4 flex justify-between items-center rounded ' key={idx}>
       <h2 className='text-xl font-medium 1/5'>{e.firstName}</h2>
       <h3 className='text-xl font-medium 1/5 text-blue-400'>{e.taskNumber.active}</h3>
       <h5 className='text-xl font-medium 1/5 text-yellow-400'>{e.taskNumber.newTask}</h5>
       <h5 className='text-xl font-medium 1/5 text-amber-700'>{e.taskNumber.completed}</h5>
       <h5 className='text-xl font-medium 1/5 text-red-600'>{e.taskNumber.failed}</h5>
      </div>
      })}
   </div>
    
   
    </div>
  )
}

export default AllTask
