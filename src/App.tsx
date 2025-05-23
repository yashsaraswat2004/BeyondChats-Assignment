import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import InboxPage from './pages/InboxPage';
import IntroSplash from './components/IntroSplash/IntroSplash';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showIntro && <IntroSplash onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <Router>
          <Routes>
            <Route path="/" element={<InboxPage />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
