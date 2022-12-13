import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowDropDownRounded } from '@mui/icons-material';

export default function ArrowToAboutMe(props: { setOnAboutMe: (b: boolean) => void }) {
  return (
    <IconButton
      sx={{ margin: '1em' }}
      onClick={() => props.setOnAboutMe(true) }
    >
      <ArrowDropDownRounded sx={{ fontSize: '100px' }} />
    </IconButton>
  );
}
