import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import AppRouter from '../AppRouter/AppRouter';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppHeader />
        <main>
          <AppRouter />
        </main>
      </Router>
    </>
  );
};

export default App;
