import { List, Typography } from '@mui/material';
import { OptionsBuyItem } from '../components/OptionsBuyItem';
import { OptionsRedeemItem } from '../components/OptionsRedeemItem';

const optionsToRedeem = [
  {
    supplier: 'EXITO',
    nameProduct: '6 PACK cerveza Aguila',
    points: 100,
    image: 'https://piragua.com.co/wp-content/uploads/2019/11/aguila-lightl-sixpack.jpg',
  },
  {
    supplier: 'ELECTROLUX',
    nameProduct: 'Licuadora Electrolux Ble12 350w, 2 Vel, 1,5 Litros',
    points: 2000,
    image: 'https://www.casaexito.com/wp-content/uploads/2021/11/BLE12.jpg',
  },
  {
    supplier: 'HP',
    nameProduct: 'Amazon.com: HP Mouse inalámbrico silencioso de 918.6 ft',
    points: 3000,
    image: 'https://m.media-amazon.com/images/I/614b5XDGy6L.jpg',
  },
];

export const RedeemPointsView = () => {
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
        Change your points for real products !!!!
      </Typography>

      <List>
        {optionsToRedeem.map((option) => (
          <OptionsRedeemItem key={option.nameProduct} {...option} />
        ))}
      </List>
    </>
  );
};
