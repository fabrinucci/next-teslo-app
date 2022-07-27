import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link display='flex' alignItems='center'>
            <Typography variant='h6'>Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>  
          </Link>
        </NextLink>

        <Box flex={ 1 } />

        <Box display={{ xs: 'none', sm: 'block' }}>
          <NextLink href='/category/men' passHref>
            <Link>
              <Button>Men</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link>
              <Button>Women</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kids' passHref>
            <Link>
              <Button>Kids</Button>
            </Link>
          </NextLink>
        </Box>


        <Box flex={ 1 } />

        <IconButton>
          <SearchIcon />
        </IconButton>

        <NextLink href='/cart' passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={ 2 } color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>
          Menu
        </Button>


      </Toolbar>
    </AppBar>
  )
}