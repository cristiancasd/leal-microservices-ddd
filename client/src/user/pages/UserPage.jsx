import { Button, Container, Grid, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ButtonsProcess } from '../components/ButtomsProcess';
import { UserLayout } from '../layout/UserLayout';
import { AddPointsView } from '../views/AddPointsView';
import { GetScoreView } from '../views/GetScoreView';
import { RedeemPointsView } from '../views/RedeemPointsView';


export const UserPage = () => {
  const { errorMessage, successMessage } = useSelector((state) => state.common);

  console.log('estoy en user page');
  const { currentProcess } = useSelector((state) => state.common);

  useEffect(() => {
    errorMessage && Swal.fire('Error', errorMessage, 'error');
  }, [errorMessage]);

  useEffect(() => {
    successMessage && Swal.fire({ icon: 'success', title: successMessage, showConfirmButton: false, timer: 1500 });
  }),
    [successMessage];

  return (
    <UserLayout>
      <Container maxWidth="sm">
        <Grid backgroundColor="gree" sx={{ minHeight: '90vh', padding: 4 }}>
          <ButtonsProcess />
          {currentProcess === 'Add' && <AddPointsView />}
          {currentProcess === 'Redeem' && <RedeemPointsView />}
          {currentProcess === 'My Points' && <GetScoreView />}
        </Grid>
      </Container>
    </UserLayout>
  );
};
