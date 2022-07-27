import NextLink from 'next/link';
import { ShopLayout } from '../components/layouts';
import { Box, Link, Typography } from '@mui/material';

function Custom404() {
  return (
    <ShopLayout title='Page Not Found' pageDescription='Page not found'>
      <Box
        display='flex' 
        alignItems='center' 
        justifyContent='center' 
        height='calc(100vh - 250px)'
        sx={{'flexDirection': { xs:'column', sm:'row'} }} 
      >
        <Typography variant='h1' component='h1' fontSize={150} fontWeight={400}>404</Typography>
        <Typography variant='h6' sx={{'marginLeft':{ xs:0, sm: 5 }}}>Whoops! Page Not Found.</Typography> 
      </Box>

      <Box textAlign='center'>
        <Typography>
          Come back at the
          <NextLink href='/' passHref>
            <Link margin='0 5px' color='secondary'>
              homepage
            </Link>
          </NextLink>
          or visit our FAQ Page for help.
        </Typography>
      </Box>
    </ShopLayout>
  )
}

export default Custom404;