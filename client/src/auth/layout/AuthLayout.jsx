import { Grid, Typography } from '@mui/material';

import { SelectColorTheme } from '../../components/SelectColorTheme';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <div>
      <SelectColorTheme />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'secondary.main',
          padding: 0,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {
          <Grid
            item
            className="box-shadow"
            xs={3}
            sx={{
              width: { sm: 450 },
              backgroundColor: 'white',
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              {title}
            </Typography>
            {children}
          </Grid>
        }
      </Grid>
    </div>
  );
};
