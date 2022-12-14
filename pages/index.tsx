import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { initialData, SeedProduct } from '../database/products';

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo | Home'} pageDescription={'Find the best discounts here'}>
      <Typography variant='h1' component={'h1'}>Teslo Shop</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All Products</Typography>

      <ProductList products={ initialData.products as any } />
    </ShopLayout>
  )
}

export default Home;