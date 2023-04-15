import { Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProcess } from '../../store/common/commonSlice';

export const ButtonsProcess = (props) => {
  const dispatch = useDispatch();
  const { currentProcess, isCommunicating } = useSelector((state) => state.common);

  //const [currentProcess, setCurrentProcess] = useState('General Info');

  const buttonsControll = (
    <Grid container spacing={0} alignItems="center" marginBottom="20px">
      <Grid item xs={4}>
        <Button
          onClick={() => dispatch(setCurrentProcess('My Points'))}
          variant={currentProcess === 'My Points' ? 'contained' : 'outlined'}
          fullWidth
          disabled={isCommunicating}
        >
          Score
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => dispatch(setCurrentProcess('Add'))}
          variant={currentProcess === 'Add' ? 'contained' : 'outlined'}
          fullWidth
          disabled={isCommunicating}
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => dispatch(setCurrentProcess('Redeem'))}
          variant={currentProcess === 'Redeem' ? 'contained' : 'outlined'}
          fullWidth
          disabled={isCommunicating}
        >
          Redeem
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold' }}
        display="block"
        variant="h7"
        align="center"
        marginTop={'10px'}
        marginBottom={'10px'}
      >
        ¿ What do you want do with your points ?
      </Typography>
      {buttonsControll}
    </>
  );
};
