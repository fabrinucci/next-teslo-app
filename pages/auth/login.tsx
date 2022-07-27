import { Box, Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import NextLink from 'next/link';

const LoginPage = () => {
  return (
    <AuthLayout title='Teslo | Login'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Login</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Email Address' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Password' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Sign In
            </Button>
          </Grid>

          <Grid item xs={12}>
            <NextLink href='/auth/register' passHref>
              <Link underline='always'>
                <Typography variant='body2' component='p'>
                  {"Don't have an account?"}
                </Typography>
              </Link>
            </NextLink>
          </Grid>

        </Grid>

      </Box>
    </AuthLayout>
  )
}

export default LoginPage;