import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { getEnvVariables } from '../../helpers/getEnvVariables';

export const MaintenancePage = () => {

  const {VITE_API_URL_LOGO}=getEnvVariables();


  return (
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight:'100vh', backgroundColor:'white',padding:4}}>
      
        <Grid container
            direction='row'
            justifyContent='center'
            >
            <img src={VITE_API_URL_LOGO} alt="Expo Canada" height="50"/> 
            {
              //<CircularProgress color='warning'/>
              }
        </Grid>

        <Grid container
              direction='row'
              justifyContent='center'
              >
              Sorry, we're down for maintenance.
          </Grid>
          
    </Grid>
   )
}