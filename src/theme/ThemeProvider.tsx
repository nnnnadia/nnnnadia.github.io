import { PaletteMode } from '@mui/material';
import { amber, grey, lightBlue } from '@mui/material/colors';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ColorProvider({ children }: { children: React.ReactNode }) {
  const { mode } = useContext(Context);

  const getDesignToken = (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: lightBlue,
          secondary: amber,
        }
        : {
          primary: amber,
          secondary: lightBlue,
          background: {
            default: grey[900],
          }
        }
      ),
    },
  });

  const theme = createTheme(getDesignToken(mode));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
