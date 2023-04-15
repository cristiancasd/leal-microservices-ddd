import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'

export const AuthRoutes = () => {
  console.log('estoy en AuthRoutes')

  return (
    <Routes>
       <Route path='login' element={<LoginPage/>}/>
       <Route path='/*' element={<Navigate to="/login"/>}/>
    </Routes> 
  ) 
} 

