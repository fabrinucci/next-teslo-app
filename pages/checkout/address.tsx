import { 
  Box, 
  Button,
  FormControl,
  Grid, 
  MenuItem, 
  Select, 
  TextField, 
  Typography,
} from '@mui/material';

import { ShopLayout } from '../../components/layouts';

const AddressPage = () => {
  return (
    <ShopLayout title='Teslo | Address' pageDescription='Your direction'>

      <Typography variant='h1' component='h1' mb={4}>Address</Typography>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
          <TextField label='First Name' variant='filled' fullWidth />
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <TextField label='Last Name' variant='filled' fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField label='Address' variant='filled' fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField label='Address 2 (optional)' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select 
              label='Country' 
              variant='filled'
              value={1}
            >
              <MenuItem value={1}>United States</MenuItem>
              <MenuItem value={2}>Argentina</MenuItem>
              <MenuItem value={3}>Brazil</MenuItem>
              <MenuItem value={4}>Canada</MenuItem>
              <MenuItem value={5}>Colombia</MenuItem>
              <MenuItem value={6}>Mexico</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='City' variant='filled' fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField label='Postal Code' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Phone' variant='filled' fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Button color='secondary' className='circular-btn' size='large'>
          Next Step
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage;