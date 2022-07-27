import { AuthLayout } from "../../components/layouts";
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';

const RegisterPage = () => {
  return (
    <AuthLayout title='Teslo | register'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Create Account</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Full Name' variant='filled' fullWidth/>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Email Address' variant='filled' fullWidth/>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Password' variant='filled' fullWidth/>
          </Grid>

          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Sign Up
            </Button>
          </Grid>

          <Grid item xs={12}>
            <NextLink href='/auth/login' passHref>
              <Link underline='always'>
                <Typography variant='body2' component='p'>
                  Already have an account?
                </Typography>
              </Link>
            </NextLink>
          </Grid>

        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage;