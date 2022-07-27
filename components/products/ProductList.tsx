import { FC } from 'react';
import { Grid } from '@mui/material';
import { IProduct } from '../../interfaces';
import { ProductCard } from './';

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={ 8 }>
      {
        products.map(product => (
          <ProductCard 
            key={ product.slug } 
            product={ product } 
          />
        ))
      }
    </Grid>
  )
}
