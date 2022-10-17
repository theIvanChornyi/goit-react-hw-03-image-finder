import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { SearchingImageApp } from 'components/App.styled';
import 'normalize.css';
import './index.css';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SearchingImageApp />
    </ThemeProvider>
  </React.StrictMode>
);