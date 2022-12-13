import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowDropUpRounded } from '@mui/icons-material';

export default function ArrowToAboutMe(props: { setOnAboutMe: (b: boolean) => void }) {
  return (
    <IconButton
      sx={{ position: 'absolute', top: 0 }}
      onClick={() => props.setOnAboutMe(true) }
    >
      <ArrowDropUpRounded sx={{ fontSize: '100px' }} />
    </IconButton>
  );
}
