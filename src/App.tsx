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
    <div className="App">
      <Collapse in={onAboutMe}>
        <Stack alignItems="center" justifyContent="space-between" height={window.innerHeight}>
          <AboutMe />
          <ArrowToProjects setOnAboutMe={setOnAboutMe} />
        </Stack>
      </Collapse>
      <Collapse in={!onAboutMe}>
        <Stack alignItems="center" height={window.innerHeight}>
          <ArrowToAboutMe setOnAboutMe={setOnAboutMe} />
          <Projects />
        </Stack>
      </Collapse>
    </div>
  );
}
