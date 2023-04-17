import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import { UserMenu } from './UserMenu';

export const Navbar = () => {
  const url_logo = 'https://www.gehnios.com/wp-content/uploads/2019/09/leal.png';

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between">
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <img src={url_logo} alt="LEAL" height="40" />
          </Box>
          <UserMenu />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
