import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    
  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAssign, setTaskAssign] = useState('')
  const [category, setTaskCategory] = useState('')
  const [taskDescription,setTaskDescription] = useState('')
  const [newTask,setNewTask] = useState({})

    const submitHandler = (e)=>{
      e.preventDefault()
    
      
      setNewTask({taskTitle,taskDate,category,taskAssign,taskDescription,active:false,newTask:true,failed:false,completed:false})
      // console.log(userData)
      
      const data = userData
     console.log(data)
      data.forEach(function(e){
        if(taskAssign ===e.firstName){
            e.tasks.push(newTask)
            e.taskNumber.newTask =   e.taskNumber.newTask+1
             console.log(e)
        }
      })
      setUserData(data)
      // console.log(data)

        setTaskTitle("")
      setTaskAssign("")
      setTaskCategory("")
      setTaskDate("")
      setTaskDescription("")

    }
    

  return (
     <div className="p-5 bg-[#1C1C1C] rounded mt-3">
        <form
         onSubmit={(e)=>{
                submitHandler(e)
              }} 
        className="flex flex-wrap w-full   items-start justify-between ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                 value={taskTitle}
                 onChange={(e)=>{
                  setTaskTitle(e.target.value)
                 }}
                 required
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-amber-100"
                type="text"
                placeholder="make a website"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                 onChange={(e)=>{
                  setTaskDate(e.target.value)
                 }}
                 required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-amber-100" type="date" placeholder="Enter date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5" >Assign to</h3>
              <input
               value={taskAssign}
                 onChange={(e)=>{
                  setTaskAssign(e.target.value)
                 }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-amber-100" type="text" placeholder="Enter Employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
               value={taskCategory}
                 onChange={(e)=>{
                  setTaskCategory(e.target.value)
                 }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-amber-100" type="text" placeholder="Design,dev,etc" />
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
                 onChange={(e)=>{
                  setTaskDescription(e.target.value)
                 }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-amber-100 resize-none"  name="" id="" cols="30" rows="10"></textarea>
          <button className="bg-emerald-500 py-2 px-10 mt-2 ml-15 hover:bg-emerald-300 rounded cursor-pointer">Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
