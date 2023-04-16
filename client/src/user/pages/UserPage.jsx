import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startAddPoints, startGetPoints } from '../../store/points/thunks';
import { ButtonsProcess } from '../components/ButtomsProcess';
import { UserLayout } from '../layout/UserLayout';
import { AddPointsView } from '../views/AddPointsView';
import { GetScoreView } from '../views/GetScoreView';
import { RedeemPointsView } from '../views/RedeemPointsView';

export const UserPage = () => {
  const dispatch = useDispatch();

  const { errorMessage, successMessage } = useSelector((state) => state.common);

  console.log('estoy en user page');
  const { currentProcess, isCommunicating } = useSelector((state) => state.common);
  const { user } = useSelector((state) => state.auth);
  const { scoreData } = useSelector((state) => state.points);

  useEffect(() => {
    if (errorMessage === 'Dont exist user, try with other ID') {
      dispatch(
        startAddPoints({
          documentCc: user.documentCc,
          name: user.name,
          points: 0,
          detail: 'User Score Created',
          idUser: user.idUser,
        })
      );
    } else {
      errorMessage && Swal.fire('Error', errorMessage, 'error');
    }
  }, [errorMessage]);

  useEffect(() => {
    successMessage && Swal.fire({ icon: 'success', title: successMessage, showConfirmButton: false, timer: 1500 });
  }),
    [successMessage];

  return (
    <UserLayout>
      <Container maxWidth="sm">
        <Grid backgroundColor="gree" sx={{ minHeight: '90vh', padding: 4 }}>
          <Typography
            sx={{ fontWeight: 'bold' }}
            display="block"
            variant="h6"
            align="right"
            marginTop={'10px'}
            marginBottom={'10px'}
          >
            MY POINTS: {scoreData.score}
          </Typography>

          <ButtonsProcess />
          {currentProcess === 'Add' && <AddPointsView />}
          {currentProcess === 'Redeem' && <RedeemPointsView />}
          {currentProcess === 'My Points' && <GetScoreView />}
        </Grid>
      </Container>
    </UserLayout>
  );
};
