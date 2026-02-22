import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handelLogin =(email,password)=>{

           if(email=='admin@example.com' && password=="123"){
           setUser('admin')
           }else if(authData && authData.employees.find((e)=>email==e.email&&password==e.password)){
           setUser('employee')
           }else{
             console.log("invalid credentials")
           }
  }
  
  const authData = useContext(AuthContext)
  
  return (
    <>
   {!user ? <Login handelLogin = {handelLogin}/> :"" }
    {user =='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    </>
  )
}

export default App
