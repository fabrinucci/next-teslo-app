import { FC } from 'react';
import { initialData } from '../../database/products'
import { CardActionArea, CardMedia, Grid, Link, Typography, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import { ItemCounter } from '../ui/ItemCounter';

interface CartListProps {
  editable?: boolean;
}

export const CartList: FC<CartListProps> = ({ editable = false }) => {

  const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
  ]
  return (
    <div>
      {
        productInCart.map(product => (
          <Grid container spacing={ 2 } key={ product.slug } sx={{ mb: 1 }}>
            <Grid item xs={ 3 }>
              <NextLink href='/product/slug' passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia 
                      image={ `/products/${ product.images[0] }` }
                      component='img'
                      sx={{ borderRadious: '5px' }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={ 7 }>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{ product.title }</Typography>
                <Typography variant='body1'>Size: <strong>{ product.sizes[2] }</strong></Typography>

                {
                  editable 
                  ? ( <ItemCounter counter={ 1 } /> )
                  : ( <Typography variant='body1'>3 items</Typography> )
                }

              </Box>
            </Grid>
            <Grid item xs={ 2 } display='flex' flexDirection='column' alignItems='center'>
              <Typography variant='subtitle1'>$ { product.price }</Typography>

              {
                editable && (
                  <Button variant='text' color='secondary'>
                    Remove
                  </Button>
                )
              }

            </Grid>

          </Grid>
        ))
      }
    </div>
  )
} 