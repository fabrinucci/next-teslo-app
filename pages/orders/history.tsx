import { ShopLayout } from '../../components/layouts';
import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const HistoryPage = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Full Name', width: 300 },
    { 
      field: 'paid',
      headerName: 'Paid',
      description: 'Show information about the payment',
      width: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          params.row.paid 
          ? <Chip label='Paid' color='success' variant='outlined' />
          : <Chip label='Pending' color='error' variant='outlined' />
        )
      }
    },
    { 
      field: 'order', 
      headerName: 'Review the order',
      width: 200,
      sortable: false,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <NextLink href={`/orders/${params.row.id}`} passHref>
            <Link underline='always'>Go to order</Link>
          </NextLink>
        )
      }
    },
  ]

  const rows = [
    { id: 1, paid: true, fullname: 'Juan Perez' },
    { id: 2, paid: false, fullname: 'Silvio Rodriguez' },
    { id: 3, paid: true, fullname: 'Minerva Kouchnyski' },
    { id: 4, paid: true, fullname: 'Anuel Postman' },
    { id: 5, paid: false, fullname: 'Marta Lino' },
  ]

  return (
    <ShopLayout title='Order history' pageDescription='Client Order history'>
      <Typography variant='h1' component='h1' mb={4}>Order history</Typography>

      <Grid container>
        <Grid item xs={ 12 } sx={{ height: '650px', width: '100%' }}>
          <DataGrid 
            rows={ rows }
            columns={ columns }
            pageSize={ 10 }
            rowsPerPageOptions={[ 10 ]}
          />
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default HistoryPage;