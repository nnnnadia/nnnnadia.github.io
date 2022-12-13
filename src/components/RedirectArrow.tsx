import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowDropDownRounded, ArrowDropUpRounded } from '@mui/icons-material';

export default function App() {
  return (
    <IconButton sx={{ width: 'fit-content', position: 'absolute', bottom: 0 }}>
      <ArrowDropDownRounded sx={{ fontSize: '100px' }} />
    </IconButton>
  );
}
