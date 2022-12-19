import { PaletteMode } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
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
          primary: {
            main: '#1b5e1f'
          },
          secondary: {
            main: '#5e1b5a'
          },
          background: {
            default: blueGrey[50],
          }
        }
        : {
          primary: {
            main: '#5e1b5a'
          },
          secondary: {
            main: '#1b5e1f'
          },
          background: {
            default: grey[900],
            paper: '#000'
          }
        }
      ),
    },
  });

  const theme = createTheme(getDesignToken(mode));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
