import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowDropUpRounded } from '@mui/icons-material';

export default function ArrowToProjects(props: { setOnAboutMe: (b: boolean) => void }) {
  return (
    <IconButton
      sx={{ marginBottom: '1em' }}
      onClick={() => props.setOnAboutMe(false) }
    >
      <ArrowDropUpRounded sx={{ fontSize: '100px' }} />
    </IconButton>
  );
}
