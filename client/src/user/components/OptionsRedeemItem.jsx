import { Box, Button, Divider, Grid, ImageList, ImageListItem, ListItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRedeemPoints } from '../../store/points/thunks';

export const OptionsRedeemItem = (optionToRedeem) => {
  const { supplier, nameProduct, points, image } = optionToRedeem;
  const { user } = useSelector((state) => state.auth);
  const { isCommunicating } = useSelector((state) => state.common);
  const { scoreData } = useSelector((state) => state.points);

  const dispatch = useDispatch();

  function BoldText({ children }) {
    return <span style={{ fontWeight: 'bold' }}>{children}</span>;
  }

  const redeemOption = () => {
    const redeemPointsData = {
      documentCc: user.documentCc,
      name: user.name,
      points: points,
      detail: nameProduct,
      idUser: user.idUser,
    };

    console.log('lets go to buy ', redeemPointsData);
    dispatch(startRedeemPoints(redeemPointsData));
  };

  return (
    <>
      <ListItem disablePadding>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: '15px',
            marginBottom: '15px',
            backgroundColor: 'white',
          }}
        >
          <Grid
            container
            backgroundColor="gree"
            spacing={0}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            //</Box>sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Grid item xs={12} sm={3}>
              <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ImageList sx={{ width: 200 }} cols={0}>
                  <ImageListItem key={'algo'}>
                    <img src={`${image}`} srcSet={`${image}`} alt={'product image'} loading="lazy" />
                  </ImageListItem>
                </ImageList>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={9} paddingLeft="10px">
              <Grid container backgroundColor="yello" rowSpacing={1}>
                <Grid item xs={12} sm={12}>
                  <Typography fontSize={14} display="block" align="left">
                    <BoldText>Supplier:</BoldText> {supplier}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Typography fontSize={14} display="block" align="left">
                    <BoldText>Name Product:</BoldText> {nameProduct}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Typography fontSize={14} display="block" align="left">
                    <BoldText>Points:</BoldText> {points}
                  </Typography>
                </Grid>

                <Grid item xs={11} sm={11} align="right" marginBottom="20px">
                  <Button
                    variant="outlined"
                    fullWidth
                    size="small"
                    onClick={redeemOption}
                    color="gris"
                    disabled={isCommunicating || scoreData.score < points}
                  >
                    Redeem
                  </Button>{' '}
                </Grid>
              </Grid>
            </Grid>

            <Divider variant="middle" />
          </Grid>
        </Box>
      </ListItem>
    </>
  );
};
