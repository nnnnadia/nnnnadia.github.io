import { Stack } from '@mui/material';
import React from 'react';
import ContactInfo from './ContactInfo';
import PersonalInfo from './PersonalInfo';

export default function AboutMe() {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      spacing={12}
      marginTop={window.innerHeight * 0.035}
    >
      <ContactInfo />
    </Stack>
  );
}
