import { PaletteMode, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import stackService from '../service/stacksService';
import Context from './Context';

export default function Provider({ children }: { children: React.ReactNode }) {
  const [stacksSelected, setStacksSelected] = useState<number[]>(stackService.getEveryStackId());
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const value = {
    stacksSelected,
    setStacksSelected,
    mode,
    setMode,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}