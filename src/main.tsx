import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.tsx";
import '@fontsource/playfair-display'
import './main.css';
import { createTheme, ThemeProvider } from '@mui/material';
import CursorHighlight from './components/misc/CursorHighlight.tsx';
import { GlobalStateProvider } from './components/misc/GlobalStateProvider.tsx';

const theme = createTheme({
  typography: {
    // fontFamily: 'Playfair Display, Roboto, Arial',
    allVariants: {
      color: 'white',
      fontFamily: 'Inter'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.75rem', // Match this to your desired h3 size
          color: 'white',
          fontFamily: 'Playfair Display, Roboto',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent',
          textDecorationColor: 'white',
        }
      }
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CursorHighlight />
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </ThemeProvider>
  </StrictMode>,
)
