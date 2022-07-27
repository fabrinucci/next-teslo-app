import { FC, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

interface ItemCounterProps {
  counter: number;
}

export const ItemCounter: FC<ItemCounterProps> = ({ counter }) => {

  return (
    <Box display='flex' alignItems='center'>
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>

      <Typography sx={{ width: 40, textAlign: 'center'}}>   
        { counter }
      </Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
