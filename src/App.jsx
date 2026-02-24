import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
 const [loggedInUserData,setLoggedInUserData] = useState(null)
    const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
     if(loggedInUser){
      setUser(loggedInUser.role)
     }
  },[authData])


  const handelLogin =(email,password)=>{

           if(email=='admin@example.com' && password=="123"){
           setUser('admin')
           localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
           }else if(authData){
            const employees = authData.employees.find((e)=>email==e.email&&password==e.password)
            if(employees){
           setUser('employees')
           setLoggedInUserData(employees)
           localStorage.setItem("loggedInUser",JSON.stringify({role:'employees'}))
            }
           
           }else{
             console.log("invalid credentials")
           }
  }
  

  // console.log(authData)
  return (
    <>
   {!user ? <Login handelLogin = {handelLogin}/> :"" }
    {user =='admin'?<AdminDashboard/>:(user=='employees'?<EmployeeDashboard data={loggedInUserData}/>:null)}
    </>
  )
}

export default App
