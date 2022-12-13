import React, { useState } from 'react';
import { Collapse, Stack } from '@mui/material';
import ArrowToProjects from './components/ArrowToProjects';
import './App.css';
import AboutMe from './components/AboutMe';
import ArrowToAboutMe from './components/ArrowToAboutMe';
import Projects from './components/Projects';

export default function App() {
  const [onAboutMe, setOnAboutMe] = useState(true);
  return (
    <Stack className="App" alignItems="center" justifyContent="center" height={window.innerHeight}>
      <Collapse in={onAboutMe}>
        <AboutMe />
        <ArrowToProjects setOnAboutMe={setOnAboutMe} />
      </Collapse>
      <Collapse in={!onAboutMe}>
        <ArrowToAboutMe setOnAboutMe={setOnAboutMe} />
        <Projects />
      </Collapse>
    </Stack>
  );
}
