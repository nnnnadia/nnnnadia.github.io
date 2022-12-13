import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowDropDownRounded } from '@mui/icons-material';

export default function ArrowToProjects(props: { setOnAboutMe: (b: boolean) => void }) {
  return (
    <IconButton
      sx={{ width: 'fit-content', position: 'absolute', bottom: 0 }}
      onClick={() => props.setOnAboutMe(false) }
    >
      <ArrowDropDownRounded sx={{ fontSize: '100px' }} />
    </IconButton>
  );
}
