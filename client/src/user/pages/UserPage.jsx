/*import { useDispatch, useSelector } from 'react-redux'
import {Link as routerLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import {  startLogin, startUpdateUser } from '../../store/auth/thunks'
import { useEffect, useMemo, useState } from 'react'
 
import Swal from 'sweetalert2'

import { CheckingAuth } from '../../ui/components/CheckingAuth'
import { EditMyData } from '../components/EditMyData'
import { setProspectToEdit } from '../../store/auth/authSlice'
*/

import { Button, Grid, TextField } from "@mui/material"
import { UserLayout } from "../layout/UserLayout"


const loginFormFields={
  documentCc: '',
}

export const UserPage = () => {



  console.log('estoy en user page')

  return (
    <UserLayout>
              'USER PAGE'

    </UserLayout>
  )
}
