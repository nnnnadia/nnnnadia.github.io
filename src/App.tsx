import React, { useContext, useState } from 'react';
import { Collapse, Fab, Stack } from '@mui/material';
import ArrowToProjects from './components/ArrowToProjects';
import './App.css';
import AboutMe from './components/AboutMe';
import ArrowToAboutMe from './components/ArrowToAboutMe';
import Projects from './components/Projects';
import Context from './context/Context';
import { Brightness2, Brightness5 } from '@mui/icons-material';

export default function App() {
  const { mode, setMode } = useContext(Context);
  const [onAboutMe, setOnAboutMe] = useState(true);
  return (
    <div className="App">
      <Fab
        onClick={mode === 'light' ? () => setMode('dark') : () => setMode('light')}
        color="secondary"
        sx={{ position: 'absolute', top: 20, right: 20 }}
      >
        {mode === 'light'
          ? <Brightness2 />
          : <Brightness5 />
        }
      </Fab>
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
