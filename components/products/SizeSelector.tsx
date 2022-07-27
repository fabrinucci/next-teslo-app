import React from 'react'
import { FC } from 'react';
import { ISize } from '../../interfaces';
import { Box, Button } from '@mui/material';

interface SizeSelectorProps {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<SizeSelectorProps> = ({ selectedSize, sizes }) => {
  return ( 
    <Box>
      {
        sizes.map(size => (
          <Button 
            key={ size }
            size='small'
            color={ selectedSize === size ? 'secondary' : 'info' }
          >
            { size }
          </Button>
        ))
      }
    </Box>
  )
}