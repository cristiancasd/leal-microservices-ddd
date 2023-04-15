import { Navigate, Route, Routes } from 'react-router-dom'
import { UserPage } from '../pages/UserPage'

export const UserRoutes = () => {
  console.log('estoy en User')

  return (
    <Routes>
       <Route path='user' element={<UserPage/>}/>
       <Route path='/*' element={<Navigate to="/user"/>}/>
    </Routes> 
  ) 
} 

