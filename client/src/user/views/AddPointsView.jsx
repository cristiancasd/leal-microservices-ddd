import { List, Typography } from '@mui/material';
import { OptionsBuyItem } from '../components/OptionsBuyItem';

const optionsToBuy = [
  {
    supplier: 'EXITO',
    nameProduct: 'Nevera HACEB No Frost ',
    value: '$ 1.500.000',
    points: 1000,
    image: 'https://blueplanetelectronics.com/474-large_default/nevera-haceb-siberia-230-litros-ns-230mi-ti.jpg',
  },
  {
    supplier: 'ELECTROLUX',
    nameProduct: 'Lavadora Secadora Eléctrica Carga Frontal 11kg / 7kg',
    value: '$ 2.800.000',
    points: 2000,
    image:
      'https://www.electromero.com.co/wp-content/uploads/2017/09/lavadora-electrolux-de-carga-frontal-16kg-efls517stt-700x460.jpg',
  },
  {
    supplier: 'HP',
    nameProduct: 'Portátil Gamer HP Victus 15.6 Pulgadas ',
    value: '$ 3.800.000',
    points: 3000,
    image: 'https://m.media-amazon.com/images/I/71rbwmEdSSL._AC_SL1500_.jpg',
  },
];

export const AddPointsView = () => {
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
        When you buy products, you add points that can be redeem to get products !!!!
      </Typography>

      <List>
        {optionsToBuy.map((option) => (
          <OptionsBuyItem key={option.nameProduct} {...option} />
        ))}
      </List>
    </>
  );
};
