import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Navbar } from '../../components/Navbar';

export const UserLayout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Toolbar />

      {/* Children */}
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          display: 'block',
          width: '100%',
          p: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
