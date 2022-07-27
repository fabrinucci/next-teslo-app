import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';
import { Box, Link, Typography } from '@mui/material';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

function EmptyPage() {
  return (
    <ShopLayout title='Cart Empty' pageDescription='Your cart is empty'>
      <Box
        display='flex' 
        alignItems='center' 
        justifyContent='center' 
        height='calc(100vh - 200px)'
        sx={{'flexDirection': { xs:'column', sm:'row'} }} 
      >
        <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 100 }}/>
        <Box display='flex' flexDirection='column' alignItems='center' >
          <Typography variant='h6'>Your cart is empty.</Typography> 
          <NextLink href='/' passHref>
            <Link typography='h4' color='secondary'>
              Continue shopping
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}
export default EmptyPage;