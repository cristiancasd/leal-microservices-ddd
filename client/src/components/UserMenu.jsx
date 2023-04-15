import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth/thunks';
import { SelectColorTheme } from './SelectColorTheme';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [anchorElUser, setAnchorElUser] = useState(null);

  //console.log('on UserMenu component', user)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    dispatch(startLogout());
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user.image} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {/*<MenuItem key='editProfile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Edit Profile</Typography>
                </MenuItem>*/}
        <SelectColorTheme />
        <Divider />

        <Typography variant="button" display="block" gutterBottom sx={{ p: 1 }}>
          Name: {user.name}
        </Typography>
        <Divider />
        <Typography variant="button" display="block" gutterBottom sx={{ p: 1 }}>
          CC: {user.documentCc}
        </Typography>
        <Divider />

        <MenuItem key="logout" onClick={logout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
