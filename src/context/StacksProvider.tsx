import React, { useState } from 'react';
import stackService from '../service/stacksService';
import StacksContext from './StacksContext';

export default function StacksProvider({ children }: { children: React.ReactNode }) {
  const [stacksSelected, setStacksSelected] = useState<number[]>(stackService.getEveryStackId());

  const value = {
    stacksSelected,
    setStacksSelected,
  };

  return <StacksContext.Provider value={value}>{children}</StacksContext.Provider>;
}