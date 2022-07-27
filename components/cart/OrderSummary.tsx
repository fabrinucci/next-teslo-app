import React from 'react'
import { Grid, Typography } from '@mui/material';

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={ 6 }>
        <Typography>Quantity</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='flex-end'>
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={ 6 }>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='flex-end'>
        <Typography>$155.36</Typography>
      </Grid>
      <Grid item xs={ 6 }>
        <Typography>Sales Tax(15%)</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='flex-end'>
        <Typography>$33.36</Typography>
      </Grid>
      <Grid item xs={ 6 }>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='flex-end'>
        <Typography variant='subtitle1'>$188.72</Typography>
      </Grid>
    </Grid>
  )
}
