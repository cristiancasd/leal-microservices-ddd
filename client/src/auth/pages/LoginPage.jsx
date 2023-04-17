import { Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const loginFormFields = {
  documentCc: '',
};

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { errorMessageAuth } = useSelector((state) => state.auth);
  const { documentCc, onInputChange, formState } = useForm(loginFormFields);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(startLogin(formState));
  };

  useEffect(() => {
    errorMessageAuth && Swal.fire('Error en la Autenticación', errorMessageAuth, 'error');
  }, [errorMessageAuth]);

  return (
    <AuthLayout title="LEAL POINTS">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="write your CC"
              type="number"
              placeholder="write your CC"
              fullWidth
              name="documentCc"
              value={documentCc}
              onChange={onInputChange}
              required
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
