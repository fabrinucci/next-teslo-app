import { NextPage } from 'next';
import { Grid, CardMedia, Box, Typography, Button, Chip } from '@mui/material';

import { initialData } from '../../database/products';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { SizeSelector } from '../../components/products/SizeSelector';

const product = initialData.products[0];

const slug: NextPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 8 }>
          <ProductSlideshow images={ product.images } />
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>${ product.price }</Typography>
            <Box sx={{ my: 2}}>
              <Typography variant='subtitle2'>Size</Typography>
              <SizeSelector 
                // selectedSize={ product.sizes[4] } 
                sizes={ product.sizes } 
              />
              
              <Typography variant='subtitle2'>Quantity</Typography>
              <ItemCounter counter={ 1 } />
            </Box>
            <Button color='secondary' className='circular-btn'>
              Add to cart
            </Button>

            {/* <Chip label='No items available' color='error' variant='outlined' /> */}

          <Box sx={{ mt: 4}}>
            <Typography variant='subtitle2'>Description</Typography>
            <Typography variant='body2'>{ product.description }</Typography>
          </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ShopLayout>
  )
}

export default slug;