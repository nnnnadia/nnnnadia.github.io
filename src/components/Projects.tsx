import { Container, Stack } from '@mui/material';
import React from 'react';
import ProjectsResume from './ProjectsResume';
import StackChips from './StackChips';

export default function Projects() {
  return (
    <Container sx={{ paddingBottom: '3em' }}>
      <Stack alignItems="center" spacing={1}>
        <StackChips />
        <ProjectsResume />
      </Stack>
    </Container>
  );
}
