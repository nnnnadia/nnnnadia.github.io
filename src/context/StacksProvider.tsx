import React, { useState } from 'react';
import StacksContext from './StacksContext';

export default function StacksProvider({ children }: { children: React.ReactNode }) {
  const [stacksNotSelected, setStacksNotSelected] = useState<number[]>([]);

  const value = {
    stacksNotSelected,
    setStacksNotSelected,
  };

  return <StacksContext.Provider value={value}>{children}</StacksContext.Provider>;
}