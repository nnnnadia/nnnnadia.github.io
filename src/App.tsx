import React from 'react';
import { Stack } from '@mui/material';
import RedirectArrow from './components/RedirectArrow';
import './App.css';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <Stack className="App" alignItems="center" justifyContent="center" height={window.innerHeight}>
      <AboutMe />
      <RedirectArrow />
    </Stack>
  );
}
