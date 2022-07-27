import { Box, Typography, Grid, Card, CardContent, Divider, Button } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList } from '../../components/cart';
import { OrderSummary } from '../../components/cart';


const CartPage = () => {
  return (
    <ShopLayout title='Teslo | Your Cart' pageDescription={'Cart Items'}>
      <Typography variant='h1' component='h1'>Cart</Typography>

      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList editable />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h6'>Order Summary</Typography>
              <Divider sx={{mb: 2}}/>
              <OrderSummary />

              <Grid>
                <Box sx={{ mt: 3 }}>
                  <Button color='secondary' className='circular-btn' fullWidth>
                    Checkout
                  </Button>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage;