import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { LangProvider } from './components/context/langContext.jsx';
import Theme from './Theme.jsx';
import App from './App.jsx'
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </LangProvider>
  </StrictMode>,
)
