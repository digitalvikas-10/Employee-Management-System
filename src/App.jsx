import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
 const [loggedInUserData,setLoggedInUserData] = useState(null)
    const [userData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
     if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
     }
  },[userData])


  const handelLogin =(email,password)=>{
           if(email=='admin@example.com' && password=="123"){
           setUser('admin')
           localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
           }else if(userData){
            const employees = userData.find((e)=>email==e.email&&password==e.password)
            // console.log(employees)
            if(employees){
           setUser('employees')
          //  console.log(user)
           setLoggedInUserData(employees)
           localStorage.setItem("loggedInUser",JSON.stringify({role:'employees',data:employees}))
            }
           
           }else{
             alert("invalid credentials")
           }
  }
    // console.log(loggedInUserData)

  // console.log(authData)
  return (
    <>
   {!user ? <Login handelLogin = {handelLogin}/> :"" }
    {user =='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employees'?<EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>:null)}
    </>
  )
}

export default App
