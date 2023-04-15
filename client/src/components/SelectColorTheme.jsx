import { FormControlLabel, Grid, Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColorTheme } from '../store/common/commonSlice';

export const SelectColorTheme = (props) => {
  const dispatch = useDispatch();

  const [yellow, setYellow] = useState(true);

  useEffect(() => {
    yellow ? dispatch(setColorTheme('yellow')) : dispatch(setColorTheme('black'));
  }, [yellow]);

  return (
    <Grid>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={<Switch checked={yellow} onChange={() => setYellow(!yellow)} name="yellow" color="primary" />}
        label="Change Color"
      />
    </Grid>
  );
};
