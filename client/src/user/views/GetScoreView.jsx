import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetPoints } from '../../store/points/thunks';

export const GetScoreView = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { scoreData } = useSelector((state) => state.points);

  useEffect(() => {
    dispatch(startGetPoints(user.documentCc));
  }, []);

  return (
    <>
      <Typography
        //sx={{ fontWeight: 'bold' }}
        display="block"
        variant="h7"
        align="center"
        marginTop={'10px'}
        marginBottom={'10px'}
      >
        YOUR SCORE !!!
      </Typography>

      <Grid align="center">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://poligonocreativo.com/wp-content/uploads/2017/07/IMG_20170220_212118-1140x642.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                My Points: {scoreData.score}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Name: {scoreData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                cc: {scoreData.documentCc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};
