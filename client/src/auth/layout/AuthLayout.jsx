import { Container, FormControlLabel, Grid, ImageList, ImageListItem, Switch, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectColorTheme } from '../../components/SelectColorTheme';
import { setColorTheme } from '../../store/common/commonSlice';

//const url_login = 'https://expocanadaeducation.com/wp-content/uploads/2022/12/HEADER-BANN-EXPOCLASSEDUCATION-2-1024x321.png'
//const url_leal_black='https://media.licdn.com/dms/image/C4E1BAQEuPnkmYmBQ0Q/company-background_10000/0/1612374466955?e=1681642800&v=beta&t=7puUPiPsi6On5rikBd1CES9jWapcZaAnqXS593wlSS4'
export const AuthLayout = ({ children, title = '' }) => {



  return (

    <div>

      
      <SelectColorTheme/>

      <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
        minHeight: '100vh',
          backgroundColor: 'secondary.main',
          padding: 0 ,
          //backgroundImage:`url(${url_leal_black})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"contain",
          

        }}
      >

        {
        <Grid item
          className="box-shadow"
          xs={3}
          sx={{
            width: { sm: 450 },
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2
          }}>
          <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>
          {children}
        </Grid>
        }
      </Grid>
      </div>
  )
}
