import { Container } from '@mui/material';
import React from 'react';
import ProjectsResume from './ProjectsResume';
import StackChips from './StackChips';

export default function Projects() {
  return (<Container>
    <StackChips />
    <ProjectsResume />
  </Container>);
}
