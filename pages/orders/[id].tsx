
import NextLink from 'next/link';
import { Box, Typography, Grid, Card, CardContent, Divider, Button, Link, Chip } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList } from '../../components/cart';
import { OrderSummary } from '../../components/cart';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';


const OrderPage = () => {
  return (
    <ShopLayout title='Order Summary 498498' pageDescription={'Order Summary'}>
      <Typography variant='h1' component='h1' mb={4}>Order Summary</Typography>

      {/* <Chip 
        sx={{ mb:2 }}
        label='Pending payment' 
        variant='outlined'
        color='error'
        icon={ <CreditCardOffOutlined /> }
      /> */}

      <Chip 
        sx={{ mb:2 }}
        label='Paid order' 
        variant='outlined'
        color='success'
        icon={ <CreditScoreOutlined /> }
      />

      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h6'>Summary (3 items)</Typography>
              <Divider sx={{mb: 2}}/>

              <Box display='flex' justifyContent='space-between' sx={{mt: 2}}>
                <Typography variant='subtitle1'>Address</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>
                    Edit Address
                  </Link>
                </NextLink>
              </Box>

              <Typography>Juan Perez</Typography>
              <Typography>58 St La Hernandez</Typography>
              <Typography>Jalisco</Typography>
              <Typography>Mexico</Typography>
              <Typography>+12 58-291477</Typography>

              <Divider sx={{m: 1}} />

              <Box display='flex' justifyContent='space-between' sx={{mt: 2}}>
                <Typography variant='subtitle1'>Payment</Typography>
                <NextLink href='/cart' passHref>
                  <Link underline='always'>
                    Edit Cart
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Grid>
                <Box sx={{ mt: 2 }}>
                  <h1>Pay</h1>
                  <Chip 
                    label='Paid order' 
                    variant='outlined'
                    color='success'
                    icon={ <CreditScoreOutlined /> }
                  />

                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage;